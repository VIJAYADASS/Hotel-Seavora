import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  roomType: String,
  guests: Number,
  fromDate: Date,
  toDate: Date,
  specialRequest: String,
  totalPrice: Number,

  status: {
  type: String,
  default: "pending"
}
}, { timestamps: true });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,

//   role: {
//     type: String,
//     enum: ["user", "admin"],
//     default: "user"
// //   }
// });
export default mongoose.model("Booking", bookingSchema);