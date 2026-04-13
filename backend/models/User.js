import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,  // ✅ BEST PRACTICE
   
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    default: "user"
  },

  // ✅ ADD HERE (INSIDE SCHEMA)
  resetToken: {
    type: String,
    default: null
  }

}, { timestamps: true });

export default mongoose.model("User", userSchema);