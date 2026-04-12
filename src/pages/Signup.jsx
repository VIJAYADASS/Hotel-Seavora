import { useState } from "react";
import { signupUser } from "../services/api";
import { showToast } from "../utils/toast";
import { Eye, EyeOff, Asterisk } from "lucide-react";


const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      return showToast("All fields are required", "error");
    }

    if (form.password !== form.confirmPassword) {
      return showToast("Passwords do not match", "error");
    }

    try {
      await signupUser(form);
      showToast("Account created successfully", "success");
    } catch {
      showToast("Error creating account", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">

      {/* BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
        alt="beach"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CARD */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 w-[90%] max-w-md">

        <h2 className="text-3xl font-bold text-center mb-2 text-[#3b2f2f]">
          Create Account
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Fields marked with <span className="text-red-500">*</span> are required
        </p>

        <div className="space-y-4">

          <input
            placeholder="Name *"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c58c80]"
            onChange={(e)=>setForm({...form, name:e.target.value})}
          />

          <input
            placeholder="Email *"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c58c80]"
            onChange={(e)=>setForm({...form, email:e.target.value})}
          />

          {/* PASSWORD */}
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

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Retype Password *"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c58c80]"
            onChange={(e)=>setForm({...form, confirmPassword:e.target.value})}
          />

        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-[#c58c80] text-white py-3 rounded-xl hover:bg-[#b67a6f] transition"
        >
          Sign Up
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => window.location.href = "/login"}
            className="text-[#b15a49] font-semibold cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;