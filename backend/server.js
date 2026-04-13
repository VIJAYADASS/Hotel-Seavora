import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import roomRoutes from "./routes/roomRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ REQUEST LOGGER (DEBUG)
app.use((req, res, next) => {
  console.log(`Incoming: ${req.method} ${req.url}`);
  next();
});

// ✅ ROUTES
app.use("/api/rooms", roomRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// ✅ SERVER START
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});