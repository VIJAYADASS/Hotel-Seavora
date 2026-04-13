import { useEffect, useState } from "react";
import { getBookings, updateBookingStatus } from "../services/bookingService";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getBookings();
        setBookings(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  
  useEffect(() => {
    let temp = [...bookings];

    if (filter !== "all") {
      temp = temp.filter((b) => b.status === filter);
    }

    if (search) {
      temp = temp.filter((b) => {
        const name = b.fullName?.toLowerCase() || "";
        const email = b.email?.toLowerCase() || "";
        const text = search.toLowerCase();
        return name.includes(text) || email.includes(text);
      });
    }

    setFiltered(temp);
  }, [search, filter, bookings]);

  const handleStatusChange = async (b, status) => {
    try {
      await updateBookingStatus(b._id, status);

      if (status === "confirmed") {
        const message = `
            Dear ${b.fullName || "Guest"},

            Warm greetings from Hotel Seavora.

            We are delighted to confirm your reservation with us.

            📅 Check-in: ${new Date(b.fromDate).toDateString()}  
            📅 Check-out: ${new Date(b.toDate).toDateString()}  
            🛏 Room: ${b.roomType || "N/A"}  

            We look forward to providing you with a comfortable and memorable stay.

            Kind regards,  
            Hotel Seavora `;

        window.open(
          `https://wa.me/${b.phone}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }

     
      const updated = bookings.map((item) =>
        item._id === b._id ? { ...item, status } : item
      );

      setBookings(updated);

    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

   
  const total = bookings.length;
  const confirmed = bookings.filter((b) => b.status === "confirmed").length;
  const pending = bookings.filter((b) => b.status === "pending").length;

  if (loading) return <p className="text-center p-10">Loading...</p>;

  return (
    <div className="bg-[#efe5d6] min-h-screen px-4 md:px-10 py-8">

       
      <div className="rounded-2xl overflow-hidden relative h-[35vh] mb-10">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            ADMIN DASHBOARD
          </h1>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">

        <div>
          <p className="text-lg font-semibold">Total</p>
          <p className="text-3xl font-bold">{total}</p>
        </div>

        <div className="bg-green-200 rounded-xl p-6">
          <p className="font-semibold">Confirmed</p>
          <p className="text-3xl font-bold text-green-700">
            {confirmed}
          </p>
        </div>

        <div className="bg-yellow-200 rounded-xl p-6">
          <p className="font-semibold">Pending</p>
          <p className="text-3xl font-bold text-yellow-700">
            {pending}
          </p>
        </div>

      </div>

     
      <div className="flex justify-center gap-4 mb-10 flex-wrap">

        <div className="flex items-center border rounded-xl px-4 w-full max-w-lg bg-white shadow">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name or email"
            className="w-full p-3 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="p-2 rounded border bg-white"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
        </select>

      </div>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filtered.map((b) => (
          <Card
            key={b._id}
            className={`bg-gray-100 rounded-xl shadow-lg p-4 transition ${
              b.status === "confirmed"
                ? "opacity-40 blur-sm hover:blur-none hover:opacity-100"
                : ""
            }`}
          >
            <CardContent className="space-y-2">

              <h3 className="font-bold text-lg">
                {b.fullName || "Guest"}
              </h3>

              <p>Email: {b.email || "N/A"}</p>
              <p>Phone: {b.phone || "N/A"}</p>
              <p>Guests: {b.guests || 0}</p>
              <p>Room: {b.roomType || "N/A"}</p>

              <p>
                Stay: {new Date(b.fromDate).toDateString()} -{" "}
                {new Date(b.toDate).toDateString()}
              </p>

              
              <div className="flex items-center gap-6 mt-4">

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={b.status === "pending"}
                    onChange={() => handleStatusChange(b, "pending")}
                    className="w-5 h-5 accent-red-500"
                  />
                  <span className="text-red-500 font-semibold">
                    Pending
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={b.status === "confirmed"}
                    onChange={() => handleStatusChange(b, "confirmed")}
                    className="w-5 h-5 accent-green-500"
                  />
                  <span className="text-green-600 font-semibold">
                    Confirmed
                  </span>
                </label>

              </div>

            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
};

export default AdminDashboard;