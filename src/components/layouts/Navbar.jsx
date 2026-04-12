import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card"; // ✅ ADD

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // ✅ SAME COLOR FOR ALL LINKS + ACTIVE STYLE
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#c58c80] font-semibold"
      : "text-gray-700 hover:text-[#c58c80] transition";

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-semibold cursor-pointer"
        >
          Hotel Seavora
        </h1>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          ☰
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center text-base">

          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/facilities" className={linkClass}>Facilities</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/rooms" className={linkClass}>Rooms</NavLink>

          {/* ✅ ADMIN FIXED */}
          {user?.role === "admin" && (
            <NavLink to="/admin-dashboard" className={linkClass}>
              Admin Dashboard
            </NavLink>
          )}

          {!token ? (
            <div className="flex gap-2">

            {/* LOGIN */}
            <button
              onClick={() => navigate("/login")}
              className={`border px-4 py-1 rounded-full transition
                ${
                  isSignupPage
                    ? "bg-[#c58c80] text-white border-[#c58c80]"  
                    : "border-black text-black"
                }`}
            >
              Login
            </button>

            {/* SIGNUP */}
            <button
              onClick={() => navigate("/signup")}
              className={` border px-4 py-1 rounded-full transition
                ${
                    isLoginPage
                      ? "bg-[#c58c80] text-white"  
                      : "border-black text-black"
                  }`}
            >
              Signup
            </button>

          </div>
          ) : (
            <div className="flex items-center gap-3">

              {/* ✅ USER IN SHADCN CARD */}
              <Card className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                👤 {user?.name}
              </Card>

              {/* ✅ LOGOUT FIXED */}
              <button
                onClick={handleLogout}
                className="text-[#c58c80] font-semibold hover:text-red-500"
              >
                Logout
              </button>

            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-base">

          <NavLink to="/" className={linkClass} onClick={()=>setOpen(false)}>Home</NavLink>
          <NavLink to="/facilities" className={linkClass} onClick={()=>setOpen(false)}>Facilities</NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={()=>setOpen(false)}>Gallery</NavLink>
          <NavLink to="/rooms" className={linkClass} onClick={()=>setOpen(false)}>Rooms</NavLink>

          {/* ✅ ADMIN MOBILE FIX */}
          {user?.role === "admin" && (
            <NavLink
              to="/admin-dashboard"
              className={linkClass}
              onClick={()=>setOpen(false)}
            >
              Admin Dashboard
            </NavLink>
          )}

          {!token ? (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
                className={`border px-4 py-2 rounded-lg
                  ${
                    location.pathname === "/signup"
                      ? "bg-[#c58c80] text-white"
                      : ""
                  }`}
              >
                Login
              </button>

              {/* MOBILE SIGNUP */}
              <button
                onClick={() => {
                  navigate("/signup");
                  setOpen(false);
                }}
                className={`border px-4 py-2 rounded-lg
                  ${
                    location.pathname === "/login"
                      ? "bg-[#c58c80] text-white"
                      : ""
                  }`}
              >
                Signup
              </button>
            </>
          ) : (
            <>
              {/* ✅ USER CARD MOBILE */}
              <Card className="px-3 py-2 bg-gray-100 rounded-lg text-sm">
                {user?.name}
              </Card>

              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="text-[#c58c80] font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

