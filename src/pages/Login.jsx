import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { showToast } from "../utils/toast";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      return showToast("All fields are required", "error");
    }

    try {
      setLoading(true);

      const res = await loginUser(form);
      login(res.data);

      showToast("You have logged in successfully", "success");

      setTimeout(() => {
        if (res.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/");
        }
      }, 1500);

    } catch (err) {
      showToast(
        err.response?.data?.msg || "Invalid email or password",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative mt-0 pt-0">

      
      <img
        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
        alt="beach"
        className="absolute inset-0 w-full h-full object-cover"
      />

       
      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 w-[90%] max-w-md">

        
        <h2 className="text-3xl font-bold text-center mb-7 text-[#3b2f2f]">
          Login
        </h2>
  
         
        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c58c80]"
            onChange={(e)=>setForm({...form, email:e.target.value})}
          />

          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c58c80]"
              onChange={(e)=>setForm({...form, password:e.target.value})}
            />

            <button
              type="button"
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>
          </div>

        </div>

        
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-[#c58c80] text-white py-3 rounded-xl hover:bg-[#b67a6f] transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account yet?{" "}
          <span
            onClick={() => window.location.href = "/signup"}
            className="text-[#b15a49] font-semibold cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;