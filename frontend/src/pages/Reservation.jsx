import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { createBooking } from "../services/bookingService";
import { AuthContext } from "../context/AuthContext";
import { dropDownRooms } from "../data/dropDownRooms";

import { ArrowLeft, Asterisk } from "lucide-react";

const Reservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const state = location.state || {};
  const { room, fromDate, toDate } = state;

  const [selectedRoom, setSelectedRoom] = useState(() =>
    dropDownRooms.find((r) => r.name === room?.name)
  );

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    roomType: room?.name || "",
    fromDate: fromDate || "",
    toDate: toDate || "",
    specialRequest: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        fullName: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const calculateDays = () => {
    if (!form.fromDate || !form.toDate) return 0;
    const start = new Date(form.fromDate);
    const end = new Date(form.toDate);
    return (end - start) / (1000 * 60 * 60 * 24);
  };

  const days = calculateDays();
  const Total = days * (selectedRoom?.price || 0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createBooking({
        ...form,
        roomId: selectedRoom?._id,
        totalDays: days,
        totalPrice: Total,
      });

      navigate("/booking-success", {
        state: {
          ...form,
          roomType: selectedRoom?.name,
          totalDays: days,
          totalPrice: Total,
        },
      });
    } catch {
      alert("Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#d9cfbd] px-4 md:px-10 py-8">

       
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-700 mb-6 hover:text-black"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

       
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-[#3b2f2f]">
        Room Reservation
      </h1>

      
      <div className="max-w-4xl mx-auto bg-[#f3f3f3] rounded-2xl shadow-md p-6 mb-10">
        <h3 className="font-semibold mb-4 text-lg">
          Selected Room Details
        </h3>

        <div className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
          <p><strong>Room Type:</strong> {selectedRoom?.name}</p>
          <p><strong>Check-in Date:</strong> {form.fromDate}</p>
          <p><strong>Check-out Date:</strong> {form.toDate}</p>
          <p><strong>Duration:</strong> {days}</p>
          <p><strong>Total:</strong> ₹{Total}</p>
        </div>
      </div>

     
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-[#f3f3f3] rounded-2xl shadow-md p-6 md:p-8"
      >

        <div className="grid md:grid-cols-2 gap-6">

           
          <div>
            <label className="flex items-center gap-1 text-sm font-semibold mb-2">
              FULL NAME
              <Asterisk className="h-3 w-3 text-red-500" />
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c58c80]"
            />
          </div>

          
          <div>
            <label className="flex items-center gap-1 text-sm font-semibold mb-2">
              EMAIL
              <Asterisk className="h-3 w-3 text-red-500" />
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c58c80]"
            />
          </div>

          
          <div className="md:col-span-2">
            <label className="flex items-center gap-1 text-sm font-semibold mb-2">
              PHONE NUMBER
              <Asterisk className="h-3 w-3 text-red-500" />
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c58c80]"
            />
          </div>

          
          <div>
            <label className="flex items-center gap-1 text-sm font-semibold mb-2">
              ROOM TYPE
              <Asterisk className="h-3 w-3 text-red-500" />
            </label>
            <select
              name="roomType"
              value={form.roomType}
              onChange={(e) => {
                const selected = dropDownRooms.find(r => r.name === e.target.value);
                setSelectedRoom(selected);
                setForm({ ...form, roomType: e.target.value });
              }}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c58c80]"
            >
              {dropDownRooms.map((r) => (
                <option key={r.name}>{r.name}</option>
              ))}
            </select>
          </div>

          
          <div>
            <label className="text-sm font-semibold mb-2 block">
              NUMBER OF GUESTS (MAX: 7)
            </label>
            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              placeholder="Enter number of guests"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c58c80]"
            />
          </div>

          
          <div>
            <label className="flex items-center gap-1 text-sm font-semibold mb-2">
              CHECK-IN DATE
              <Asterisk className="h-3 w-3 text-red-500" />
            </label>
            <input
              type="date"
              name="fromDate"
              value={form.fromDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c58c80]"
            />
          </div>

          
          <div>
            <label className="flex items-center gap-1 text-sm font-semibold mb-2">
              CHECK-OUT DATE
              <Asterisk className="h-3 w-3 text-red-500" />
            </label>
            <input
              type="date"
              name="toDate"
              value={form.toDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c58c80]"
            />
          </div>

          
          <div className="md:col-span-2">
            <label className="text-sm font-semibold mb-2 block">
              SPECIAL REQUESTS
            </label>
            <textarea
              name="specialRequest"
              value={form.specialRequest}
              onChange={handleChange}
              placeholder="Tell us about any special requirements..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 h-28 focus:outline-none focus:ring-2 focus:ring-[#c58c80]"
            />
          </div>

        </div>

     
        <button
          type="submit"
          className="w-full mt-8 bg-[#c58c80] text-white py-3 rounded-xl shadow-md hover:bg-[#b67a6f] transition"
        >
          {loading ? "Booking..." : "Submit Reservation"}
        </button>
      </form>
    </div>
  );
};

export default Reservation;