import axios from "axios";

const API = axios.create({
  baseURL: "https://grateful-adaptation-production-81b1.up.railway.app/api", // ✅ keep one port only
});

// ✅ Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// ✅ API Calls
export const getRooms = () => API.get("/rooms");
export const signupUser = (data) => API.post("/auth/signup", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const createBooking = (data) => API.post("/bookings", data);

export default API;