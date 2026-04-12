import { useEffect, useState } from "react";
import API from "@/services/api";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // ✅ Move function INSIDE useEffect (best practice)
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings");

        const confirmed = res.data.filter(
          (b) => b.status === "confirmed" 
          // User only sees confirmed bookings
        );

        setBookings(confirmed);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";

    if (dateStr.includes("-")) {
      return new Date(dateStr).toLocaleDateString();
    }

    const [day, month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-${day}`).toLocaleDateString();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No confirmed bookings yet ❌</p>
      ) : (
        bookings.map((b) => (
          <div key={b._id} className="border p-4 rounded mb-3">

            <p><b>Name:</b> {b.fullName}</p>
            <p><b>Email:</b> {b.email}</p>
            <p><b>Phone:</b> {b.phone}</p>
            <p><b>Guests:</b> {b.guests}</p>
            <p><b>Room:</b> {b.roomType}</p>

            <p><b>From:</b> {formatDate(b.fromDate)}</p>
            <p><b>To:</b> {formatDate(b.toDate)}</p>

            <p><b>Request:</b> {b.specialRequest || "None"}</p>

            <p>
              <b>Status:</b>{" "}
              <span className="text-green-600">
                Confirmed ✅
              </span>
            </p>

          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;