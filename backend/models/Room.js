import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: String,
  price: Number,

  images: [String], // 🔥 instead of single image

  description: String,
  capacity: Number,

  type: String, // deluxe / executive / family / triple
  isAC: Boolean,

}, { timestamps: true });

export default mongoose.model("Room", roomSchema);