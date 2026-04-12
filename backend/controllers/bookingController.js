import Booking from "../models/Booking.js";

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({
      message: "Booking successful",
      booking
    });
  } catch (error) {
    console.log("ERROR : ", error.message)
    res.status(500).json({ message: error.message });
  }
};

// GET ALL BOOKINGS (ADMIN)
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


















// import Booking from "../models/Booking.js";

// // Create booking
// export const createBooking = async (req, res) => {
//   try {
//     const booking = new Booking(req.body);
//     await booking.save();

//     res.status(201).json(booking);
//   } catch (err) {
//     res.status(500).json({ msg: "Error creating booking" });
//   }
// };

// // Get my bookings
// export const getMyBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find({ user: req.user.id }).populate("room");
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ msg: "Error fetching bookings" });
//   }
// };

// // ✅ Admin - Get all bookings
// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("room");
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ msg: "Error fetching bookings" });
//   }
// };



// import Booking from "../models/Booking.js";

// export const createBooking = async (req, res) => {
//   try {
//     const { room, fromDate, toDate } = req.body;

//     if (!room || !fromDate || !toDate) {
//       return res.status(400).json({ msg: "All fields required" });
//     }

//     if (new Date(fromDate) > new Date(toDate)) {
//       return res.status(400).json({ msg: "Invalid date range" });
//     }

//     const existingBooking = await Booking.findOne({
//       room,
//       $or: [
//         {
//           fromDate: { $lte: toDate },
//           toDate: { $gte: fromDate },
//         },
//       ],
//     });

//     if (existingBooking) {
//       return res.status(400).json({
//         msg: "Room already booked for selected dates",
//       });
//     }

//     const booking = await Booking.create({
//       room,
//       fromDate,
//       toDate,
//       user: req.user.id,
//     });

//     res.status(201).json(booking);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Booking failed ❌" });
//   }
// };

// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find()
//       .populate("room")
//       .populate("user");

//     res.json(bookings);
//   } catch (err) {
//     console.log(err.message)
//     res.status(500).json({ msg: "Error fetching bookings" });
//   }
// };

// export const getMyBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find({ user: req.user.id })
//       .populate("room");

//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ msg: "Error fetching user bookings" });
//   }
// };

// export const checkAvailability = async (req, res) => {
//   try {
//     const { roomId, fromDate, toDate } = req.query;

//     const existingBooking = await Booking.findOne({
//       room: roomId,
//       $or: [
//         {
//           fromDate: { $lte: toDate },
//           toDate: { $gte: fromDate },
//         },
//       ],
//     });

//     res.json({ available: !existingBooking });
//   } catch (err) {
//     res.status(500).json({ msg: "Error checking availability" });
//   }
// };
// export const createBooking = async (req, res) => {
//   try {
//     const { room, fromDate, toDate } = req.body;

//     // ❌ Check empty
//     if (!room || !fromDate || !toDate) {
//       return res.status(400).json({ msg: "All fields required" });
//     }

//     // ❌ Check invalid date
//     if (new Date(fromDate) > new Date(toDate)) {
//       return res.status(400).json({ msg: "Invalid date range" });
//     }

//     const booking = await Booking.create({
//       user: req.user.id,
//       room,
//       fromDate,
//       toDate,
//     });
  

//     res.status(201).json(booking);
//   } catch (err) {
//     res.status(500).json({ msg: "Booking failed" });
//   }
// };

// export const getMyBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find({ user: req.user.id }).populate("room");
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ msg: "Error fetching booking" });
//   }
// };

