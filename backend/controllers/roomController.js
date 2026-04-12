import Room from "../models/Room.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.json(room);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ✅ Check room availability
export const checkAvailability = async (req, res) => {
  try {
    const { roomId, checkIn, checkOut } = req.body;

    const existingBookings = await Booking.find({
      room: roomId,
      $or: [
        {
          checkIn: { $lt: new Date(checkOut) },
          checkOut: { $gt: new Date(checkIn) }
        }
      ]
    });

    if (existingBookings.length > 0) {
      return res.json({ available: false });
    }

    res.json({ available: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error checking availability" });
  }
};

// for dropdown in reservation form
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Error fetching rooms" });
  }
};