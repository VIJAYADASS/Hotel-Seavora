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

export default mongoose.model("Booking", bookingSchema);