import API from "./api";

// ✅ CREATE BOOKING
export const createBooking = (data) => {
  return API.post("/bookings/create", data);
};

// ✅ GET ALL BOOKINGS (ADMIN)
export const getBookings = () => {
  return API.get("/bookings");
};

// ✅ UPDATE BOOKING STATUS (ADMIN)
export const updateBookingStatus = (id, status) => {
  return API.put(`/bookings/${id}`, { status });
};
