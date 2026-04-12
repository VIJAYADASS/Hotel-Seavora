import API from "./api";

// ✅ CREATE BOOKING (FIX ADDED)
export const createBooking = (data) => {
  return API.post("/bookings/create", data);
};

// ✅ GET ALL BOOKINGS (ADMIN)
export const getBookings = () => {
  return API.get("/bookings", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// ✅ UPDATE BOOKING STATUS (ADMIN)
export const updateBookingStatus = (id, status) => {
  return API.put(`/bookings/${id}`, { status }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};


