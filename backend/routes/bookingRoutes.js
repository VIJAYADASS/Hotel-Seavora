import express from "express";
import Booking from "../models/Booking.js";
import { getBookings, updateBookingStatus } from "../controllers/bookingController.js";
import authMiddleware, { isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();


// ✅ User can create booking
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { roomId, fromDate, toDate } = req.body;

    const existingBooking = await Booking.findOne({
      roomId,
      $or: [
        {
          fromDate: { $lte: new Date(toDate) },
          toDate: { $gte: new Date(fromDate) },
        },
      ],
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "This room is already booked for the selected dates",
      });
    }

    const booking = new Booking(req.body);
    await booking.save();

    res.json({ message: "Booking successful", booking });

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.put("/:id", authMiddleware, isAdmin, updateBookingStatus);
 

// ✅ Only ADMIN can see all bookings
router.get("/", authMiddleware, isAdmin, getBookings);
// router.post("/create", 
//          authMiddleware( checks JWT, ensures user is logged in ), 
//          isAdmin( only admin can access /bookings ), 
//          getBookings);

export default router;