// 2rd attempt at AdminDashboard.jsx with improved styling and error handling
// import { useEffect, useState } from "react";
// import { getBookings, updateBookingStatus } from "../services/bookingService";

// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const res = await getBookings();
//       setBookings(res.data);
//     } catch (err) {
//       console.error("FULL ERROR:", err.response || err);
//       alert(err.response?.data?.msg || "Failed to load bookings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, status, phone) => {
//     try {
//       await updateBookingStatus(id, status);

//       if (status === "confirmed") {
//         window.open(
//           `https://wa.me/${phone}?text=Your booking has been confirmed ✅`,
//           "_blank"
//         );
//       }

//       fetchBookings();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update status");
//     }
//   };

//   if (loading) return <p className="p-6">Loading bookings...</p>;

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

//       {bookings.length === 0 ? (
//         <p>No bookings available</p>
//       ) : (
//         <div className="grid gap-4">
//           {bookings.map((b) => (
//             <div key={b._id} className="bg-white p-4 rounded shadow">

//               <h3 className="text-xl font-semibold">{b.fullName}</h3>

//               <p><strong>Email:</strong> {b.email}</p>
//               <p><strong>Phone:</strong> {b.phone}</p>
//               <p><strong>Guests:</strong> {b.guests}</p>

//               <p><strong>Room:</strong> {b.roomType || b.room?.name || "N/A"}</p>

//               <p>
//                 <strong>Stay:</strong>{" "}
//                 {new Date(b.fromDate).toDateString()} -{" "}
//                 {new Date(b.toDate).toDateString()}
//               </p>

//               <p><strong>Request:</strong> {b.specialRequest || "None"}</p>

//               {/* ✅ STATUS BADGE */}
//               <p className="mt-2">
//                 <strong>Status:</strong>{" "}
//                 <span
//                   className={`px-2 py-1 rounded text-white text-sm ${
//                     b.status === "confirmed"
//                       ? "bg-green-500"
//                       : "bg-yellow-500"
//                   }`}
//                 >
//                   {b.status || "pending"}
//                 </span>
//               </p>

//               {/* ✅ BUTTONS */}
//               <div className="mt-3">
//                 <button
//                   onClick={() =>
//                     handleStatusChange(b._id, "pending", b.phone)
//                   }
//                   className="bg-yellow-500 px-3 py-1 rounded text-white"
//                 >
//                   Pending
//                 </button>

//                 <button
//                   disabled={b.status === "confirmed"}
//                   onClick={() =>
//                     handleStatusChange(b._id, "confirmed", b.phone)
//                   }
//                   className={`px-3 py-1 rounded text-white ml-2 ${
//                     b.status === "confirmed"
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-green-600"
//                   }`}
//                 >
//                   Confirm Booking
//                 </button>
//               </div>

//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;















// 1st attempt at AdminDashboard.jsx with basic functionality
// import { useEffect, useState } from "react";

// import { getBookings, updateBookingStatus } from "../services/bookingService";

// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const res = await getBookings();
//       setBookings(res.data);
//     } catch (err) {
//         console.error("FULL ERROR:", err.response || err);
//         alert(err.response?.data?.msg || "Failed to load bookings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Update Status Function
//   const handleStatusChange = async (id, status, phone) => {
//     try {
//       await updateBookingStatus(id, status);

//       // ✅ WhatsApp message
//       if (status === "confirmed") {
//         window.open(
//           `https://wa.me/${phone}?text=Your booking has been confirmed ✅`,
//           "_blank"
//         );
//       }

//       fetchBookings(); // refresh data
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update status");
//     }
//   };

//   if (loading) return <p>Loading bookings...</p>;

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

//       {bookings.length === 0 ? (
//         <p>No bookings available</p>
//       ) : (
//         <div className="grid gap-4">
//           {bookings.map((b) => (
//             <div key={b._id} className="bg-white p-4 rounded shadow">

//               <h3 className="text-xl font-semibold">{b.fullName}</h3>

//               <p><strong>Email:</strong> {b.email}</p>
//               <p><strong>Phone:</strong> {b.phone}</p>
//               <p><strong>Guests:</strong> {b.guests}</p>
//               <p><strong>Room:</strong> {b.room?.name}</p>

//               <p>
//                 <strong>Stay:</strong>{" "}
//                 {new Date(b.fromDate).toDateString()} -{" "}
//                 {new Date(b.toDate).toDateString()}
//               </p>

//               <p><strong>Request:</strong> {b.specialRequest || "None"}</p>

//               {/* ✅ STATUS */}
//               <p>
//                 <strong>Status:</strong>{" "}
//                 <span
//                   className={
//                     b.status === "confirmed"
//                       ? "text-green-600"
//                       : "text-yellow-600"
//                   }
//                 >
//                   {b.status || "pending"}
//                 </span>
//               </p>

//               {/* ✅ BUTTONS */}
//               <div className="mt-3">
//                 <button
//                   onClick={() =>
//                     handleStatusChange(b._id, "pending", b.phone)
//                   }
//                   className="bg-yellow-500 px-3 py-1 rounded text-white"
//                 >
//                   Pending
//                 </button>

//                 <button
//                   disabled={b.status === "confirmed"}
//                   onClick={() => handleStatusChange(b._id, "confirmed", b.phone)}
//                   className={`px-3 py-1 rounded text-white ml-2 ${
//                     b.status === "confirmed"
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-green-600"
//                   }`}
//                 >
//                   Confirm Booking
//                 </button>
//               </div>

//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



// 3rd attempt at AdminDashboard.jsx with improved styling and error handling
// import { useEffect, useState } from "react";
// import { getBookings, updateBookingStatus } from "../services/bookingService";
// import { Card, CardContent } from "@/components/ui/card";

// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const res = await getBookings();
//       setBookings(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load bookings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, status, phone) => {
//     try {
//       await updateBookingStatus(id, status);

//       if (status === "confirmed") {
//         window.open(
//           `https://wa.me/${phone}?text=Your booking has been confirmed ✅`,
//           "_blank"
//         );
//       }

//       fetchBookings();
//     } catch (err) {
//       console.log("Error:", err.msg)
//       alert("Failed to update status");
//     }
//   };

//   if (loading)
//     return <p className="p-6 text-center">Loading bookings...</p>;

//   return (
//     <div className="bg-[#efe5d6] min-h-screen">

//       {/* 🔥 HEADER */}
//       <div className="px-4 md:px-10 pt-6">
//         <div
//           className="relative h-[40vh] md:h-[50vh] rounded-2xl overflow-hidden"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
//             backgroundSize: "cover",
//             backgroundPosition: "center"
//           }}
//         >
//           <div className="absolute inset-0 bg-black/40"></div>

//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-white text-3xl md:text-5xl font-bold">
//               ADMIN DASHBOARD
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 CONTENT */}
//       <div className="py-16 px-6 max-w-6xl mx-auto text-center">

//         <h2 className="text-3xl font-bold mb-4">
//           Booking Management
//         </h2>

//         <p className="text-gray-600 mb-12">
//           Manage and monitor all room bookings efficiently.
//         </p>

//         {bookings.length === 0 ? (
//           <p>No bookings available</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//             {bookings.map((b) => (
//               <Card
//                 key={b._id}
//                 className="bg-white rounded-xl shadow hover:shadow-lg transition text-left"
//               >
//                 <CardContent className="p-5">

//                   <h3 className="text-lg font-bold mb-2">
//                     {b.fullName}
//                   </h3>

//                   <p className="text-sm text-gray-600">
//                     <strong className="font-bold">Email:</strong> {b.email}
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     <strong>Phone:</strong> {b.phone}
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     <strong>Guests:</strong> {b.guests}
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     <strong>Room:</strong>{" "}
//                     {b.roomType || b.room?.name || "N/A"}
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     <strong>Stay:</strong>{" "}
//                     {new Date(b.fromDate).toDateString()} -{" "}
//                     {new Date(b.toDate).toDateString()}
//                   </p>

//                   <p className="text-sm text-gray-600 mb-2">
//                     <strong>Request:</strong>{" "}
//                     {b.specialRequest || "None"}
//                   </p>

//                   {/* STATUS */}
//                   <div className="mb-3">
//                     <h3>Status</h3>
//                     <span
//                       className={`px-3 py-1 rounded-full text-white text-xs ${
//                         b.status === "confirmed"
//                           ? "bg-green-500"
//                           : "bg-yellow-500"
//                       }`}
//                     >
//                       {b.status || "pending"}
//                     </span> 
//                   </div>

//                   {/* BUTTONS */}
//                   <div className="flex gap-2">

//                     <button
//                       onClick={() =>
//                         handleStatusChange(b._id, "pending", b.phone)
//                       }
//                       className="flex-1 border border-yellow-500 text-yellow-600 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
//                     >
//                       Pending
//                     </button>

//                     <button
//                       disabled={b.status === "confirmed"}
//                       onClick={() =>
//                         handleStatusChange(b._id, "confirmed", b.phone)
//                       }
//                       className={`flex-1 py-1 rounded text-white ${
//                         b.status === "confirmed"
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-green-600 hover:bg-green-700"
//                       }`}
//                     >
//                       Confirm
//                     </button>

//                   </div>

//                 </CardContent>
//               </Card>
//             ))}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// 4th attempt at AdminDashboard.jsx with enhanced UI and better error handling
// import { useEffect, useState } from "react";
// import { getBookings, updateBookingStatus } from "../services/bookingService";
// import { Card, CardContent } from "@/components/ui/card";
// import { Search } from "lucide-react";

// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   useEffect(() => {
//     handleFilter();
//   }, [search, filter, bookings]);

//   const fetchBookings = async () => {
//     try {
//       const res = await getBookings();
//       setBookings(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load bookings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFilter = () => {
//     let temp = [...bookings];

//     if (filter !== "all") {
//       temp = temp.filter((b) => b.status === filter);
//     }

//     if (search) {
//       temp = temp.filter(
//         (b) =>
//           b.fullName.toLowerCase().includes(search.toLowerCase()) ||
//           b.email.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     setFiltered(temp);
//   };

//   const handleStatusChange = async (id, status, phone) => {
//     try {
//       await updateBookingStatus(id, status);

//       if (status === "confirmed") {
//         window.open(
//           `https://wa.me/${phone}?text=Your booking has been confirmed ✅`,
//           "_blank"
//         );
//       }

//       fetchBookings();
//     } catch {
//       alert("Failed to update status");
//     }
//   };

//   const confirmedCount = bookings.filter(b => b.status === "confirmed").length;
//   const pendingCount = bookings.filter(b => b.status === "pending").length;

//   if (loading) return <p className="text-center p-6">Loading...</p>;

//   return (
//     <div className="bg-[#efe5d6] min-h-screen">

//       {/* HEADER */}
//       <div className="px-4 md:px-10 pt-6">
//         <div
//           className="relative h-[40vh] rounded-2xl overflow-hidden"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
//             backgroundSize: "cover"
//           }}
//         >
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-white text-4xl font-bold">
//               ADMIN DASHBOARD
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* DASHBOARD SUMMARY */}
//       <div className="px-6 md:px-10 mt-8">

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

//           <Card className="p-4 text-center">
//             <h3 className="text-lg font-semibold">Total</h3>
//             <p className="text-2xl font-bold">{bookings.length}</p>
//           </Card>

//           <Card className="p-4 text-center bg-green-100">
//             <h3 className="text-lg font-semibold">Confirmed</h3>
//             <p className="text-2xl font-bold text-green-600">
//               {confirmedCount}
//             </p>
//           </Card>

//           <Card className="p-4 text-center bg-yellow-100">
//             <h3 className="text-lg font-semibold">Pending</h3>
//             <p className="text-2xl font-bold text-yellow-600">
//               {pendingCount}
//             </p>
//           </Card>

//         </div>

//         {/* SEARCH + FILTER */}
//         <div className="flex flex-col md:flex-row gap-4 mb-8">

//           <div className="flex items-center border rounded px-3 w-full md:w-1/2 bg-white">
//             <Search className="w-4 h-4 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search by name or email"
//               className="w-full p-2 outline-none"
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <select
//             className="p-2 rounded border bg-white"
//             onChange={(e) => setFilter(e.target.value)}
//           >
//             <option value="all">All</option>
//             <option value="confirmed">Confirmed</option>
//             <option value="pending">Pending</option>
//           </select>

//         </div>

//         {/* BOOKINGS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {filtered.map((b) => (

//             <Card
//               key={b._id}
//               className={`transition duration-300 ${
//                 b.status === "confirmed"
//                   ? "opacity-40 hover:opacity-100 blur-sm hover:blur-none"
//                   : ""
//               }`}
//             >
//               <CardContent className="p-5">

//                 <h3 className="font-bold">{b.fullName}</h3>

//                 <p>Email: {b.email}</p>
//                 <p>Phone: {b.phone}</p>
//                 <p>Guests: {b.guests}</p>
//                 <p>Room: {b.roomType || "N/A"}</p>

//                 <p className="text-sm">
//                   Stay: {new Date(b.fromDate).toDateString()} -{" "}
//                   {new Date(b.toDate).toDateString()}
//                 </p>

//                 {/* ✅ CHECKBOX STATUS */}
//                 <div className="flex items-center gap-2 mt-3">

//                   <input
//                     type="checkbox"
//                     checked={b.status === "confirmed"}
//                     onChange={() =>
//                       handleStatusChange(
//                         b._id,
//                         b.status === "confirmed" ? "pending" : "confirmed",
//                         b.phone
//                       )
//                     }
//                     className="w-5 h-5 accent-green-500"
//                   />

//                   <span className="text-sm font-medium">
//                     {b.status === "confirmed"
//                       ? "Confirmed"
//                       : "Pending"}
//                   </span>

//                 </div>

//               </CardContent>
//             </Card>

//           ))}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import { useEffect, useState } from "react";
// import { getBookings, updateBookingStatus } from "../services/bookingService";
// import { Card, CardContent } from "@/components/ui/card";
// import { Search } from "lucide-react";

// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   useEffect(() => {
//     handleFilter();
//   }, [search, filter, bookings]);

//   const fetchBookings = async () => {
//     try {
//       const res = await getBookings();
//       setBookings(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load bookings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFilter = () => {
//     let temp = [...bookings];

//     if (filter !== "all") {
//       temp = temp.filter((b) => b.status === filter);
//     }

//     if (search) {
//       temp = temp.filter(
//         (b) =>
//           b.fullName.toLowerCase().includes(search.toLowerCase()) ||
//           b.email.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     setFiltered(temp);
//   };

//   const handleStatusChange = async (id, status, phone) => {
//     try {
//       await updateBookingStatus(id, status);

//       if (status === "confirmed") {
//         window.open(
//           `https://wa.me/${phone}?text=Your booking has been confirmed ✅`,
//           "_blank"
//         );
//       }

//       fetchBookings();
//     } catch {
//       alert("Failed to update status");
//     }
//   };

//   const confirmedCount = bookings.filter(b => b.status === "confirmed").length;
//   const pendingCount = bookings.filter(b => b.status === "pending").length;

//   if (loading) return <p className="text-center p-6">Loading...</p>;

//   return (
//     <div className="bg-[#efe5d6] min-h-screen">

//       {/* HEADER */}
//       <div className="px-4 md:px-10 pt-6">
//         <div
//           className="relative h-[40vh] rounded-2xl overflow-hidden"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
//             backgroundSize: "cover"
//           }}
//         >
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-white text-4xl font-bold">
//               ADMIN DASHBOARD
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* DASHBOARD SUMMARY */}
//       <div className="px-6 md:px-10 mt-8">

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

//           <Card className="p-4 text-center">
//             <h3 className="text-lg font-semibold">Total</h3>
//             <p className="text-2xl font-bold">{bookings.length}</p>
//           </Card>

//           <Card className="p-4 text-center bg-green-100">
//             <h3 className="text-lg font-semibold">Confirmed</h3>
//             <p className="text-2xl font-bold text-green-600">
//               {confirmedCount}
//             </p>
//           </Card>

//           <Card className="p-4 text-center bg-yellow-100">
//             <h3 className="text-lg font-semibold">Pending</h3>
//             <p className="text-2xl font-bold text-yellow-600">
//               {pendingCount}
//             </p>
//           </Card>

//         </div>

//         {/* SEARCH + FILTER */}
//         <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center ">

//           <div className="flex items-center border rounded px-3 w-full md:w-1/2 bg-white">
//             <Search className="w-4 h-4 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search by name or email"
//               className="w-full p-2 outline-none"
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <select
//             className="p-2 rounded border bg-white"
//             onChange={(e) => setFilter(e.target.value)}
//           >
//             <option value="all">All</option>
//             <option value="confirmed">Confirmed</option>
//             <option value="pending">Pending</option>
//           </select>

//         </div>

//         {/* BOOKINGS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {filtered.map((b) => (

//             <Card
//               key={b._id}
//               className={`transition duration-300 ${
//                 b.status === "confirmed"
//                   ? "opacity-40 hover:opacity-100 blur-sm hover:blur-none"
//                   : ""
//               }`}
//             >
//               <CardContent className="p-5">

//                 <h3 className="font-bold">{b.fullName}</h3>

//                 <p>Email: {b.email}</p>
//                 <p>Phone: {b.phone}</p>
//                 <p>Guests: {b.guests}</p>
//                 <p>Room: {b.roomType || "N/A"}</p>

//                 <p className="text-sm">
//                   Stay: {new Date(b.fromDate).toDateString()} -{" "}
//                   {new Date(b.toDate).toDateString()}
//                 </p>

//                 {/* ✅ CHECKBOX STATUS */}
//                 <div className="flex items-center gap-2 mt-3">

//                   <input
//                     type="checkbox"
//                     checked={b.status === "confirmed"}
//                     onChange={() =>
//                       handleStatusChange(
//                         b._id,
//                         b.status === "confirmed" ? "pending" : "confirmed",
//                         b.phone
//                       )
//                     }
//                     className="w-5 h-5 accent-green-500"
//                   />

//                   <span className="text-sm font-medium">
//                     {b.status === "confirmed"
//                       ? "Confirmed"
//                       : "Pending"}
//                   </span>

//                 </div>

//               </CardContent>
//             </Card>

//           ))}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// 5th attempt at AdminDashboard.jsx with enhanced UI and better error handling
// import { useEffect, useState } from "react";
// import { getBookings, updateBookingStatus } from "../services/bookingService";
// import { Card, CardContent } from "@/components/ui/card";
// import { Search } from "lucide-react";

// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   // ✅ FETCH DATA
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await getBookings();
//         setBookings(res.data);
//         setFiltered(res.data);
//       } catch (err) {
//         console.error(err);
//         alert("Failed to load bookings");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // ✅ FILTER + SEARCH (SAFE)
//   useEffect(() => {
//     let temp = [...bookings];

//     if (filter !== "all") {
//       temp = temp.filter((b) => b.status === filter);
//     }

//     if (search) {
//       temp = temp.filter((b) => {
//         const name = b.fullName?.toLowerCase() || "";
//         const email = b.email?.toLowerCase() || "";
//         const text = search.toLowerCase();

//         return name.includes(text) || email.includes(text);
//       });
//     }

//     setFiltered(temp);
//   }, [search, filter, bookings]);

//   // ✅ STATUS CHANGE
//   const handleStatusChange = async (id, status, phone) => {
//     try {
//       await updateBookingStatus(id, status);

//       if (status === "confirmed") {
//         window.open(
//           `https://wa.me/${phone}?text=Your booking has been confirmed ✅`,
//           "_blank"
//         );
//       }

//       // update locally
//       const updated = bookings.map((b) =>
//         b._id === id ? { ...b, status } : b
//       );

//       setBookings(updated);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update status");
//     }
//   };

//   if (loading) {
//     return <p className="text-center p-10">Loading...</p>;
//   }

//   return (
//     <div className="bg-[#efe5d6] min-h-screen px-4 md:px-10 py-10">

//       {/* 🔍 SEARCH + FILTER */}
//       <div className="flex justify-center gap-4 mb-8 flex-wrap">

//         <div className="flex items-center border rounded-xl px-4 w-full max-w-lg bg-white shadow">
//           <Search className="w-4 h-4 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search bookings..."
//             className="w-full p-3 outline-none"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <select
//           className="p-2 rounded border bg-white"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="confirmed">Confirmed</option>
//           <option value="pending">Pending</option>
//         </select>

//       </div>

//       {/* 🧾 CARDS */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {filtered.map((b) => (
//           <Card
//             key={b._id}
//             className={`bg-gray-100 rounded-xl shadow-lg p-4 transition ${
//               b.status === "confirmed"
//                 ? "opacity-40 blur-sm hover:blur-none hover:opacity-100"
//                 : ""
//             }`}
//           >
//             <CardContent className="space-y-2">

//               <h3 className="font-bold text-lg">
//                 {b.fullName || "Guest"}
//               </h3>

//               <p><strong>Email:</strong> {b.email || "N/A"}</p>
//               <p><strong>Phone:</strong> {b.phone || "N/A"}</p>
//               <p><strong>Guests:</strong> {b.guests || 0}</p>
//               <p><strong>Room:</strong> {b.roomType || "N/A"}</p>

//               <p className="text-sm">
//                 <strong>Stay:</strong>{" "}
//                 {new Date(b.fromDate).toDateString()} -{" "}
//                 {new Date(b.toDate).toDateString()}
//               </p>

//               {/* ✅ CHECKBOX STATUS ONLY */}
//               <div className="flex items-center gap-6 mt-4">

//                 {/* Pending */}
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={b.status === "pending"}
//                     onChange={() =>
//                       handleStatusChange(b._id, "pending", b.phone)
//                     }
//                     className="w-5 h-5 accent-red-500"
//                   />
//                   <span className="text-red-500 font-semibold">
//                     Pending
//                   </span>
//                 </label>

//                 {/* Confirmed */}
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={b.status === "confirmed"}
//                     onChange={() =>
//                       handleStatusChange(b._id, "confirmed", b.phone)
//                     }
//                     className="w-5 h-5 accent-green-500"
//                   />
//                   <span className="text-green-600 font-semibold">
//                     Confirmed
//                   </span>
//                 </label>

//               </div>

//             </CardContent>
//           </Card>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// final version of AdminDashboard.jsx with enhanced UI, better error handling, and improved code structure. This version includes a search bar, filter options, and a more visually appealing card layout for each booking. The status can be toggled using checkboxes, and the UI provides clear feedback on the current status of each booking.

// import { useEffect, useState } from "react";
// import { getBookings, updateBookingStatus } from "../services/bookingService";
// import { Card, CardContent } from "@/components/ui/card";
// import { Search } from "lucide-react";

// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   // ✅ FETCH DATA
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await getBookings();
//         setBookings(res.data);
//         setFiltered(res.data);
//       } catch (err) {
//         console.error(err);
//         alert("Failed to load bookings");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // ✅ FILTER + SEARCH
//   useEffect(() => {
//     let temp = [...bookings];

//     if (filter !== "all") {
//       temp = temp.filter((b) => b.status === filter);
//     }

//     if (search) {
//       temp = temp.filter((b) => {
//         const name = b.fullName?.toLowerCase() || "";
//         const email = b.email?.toLowerCase() || "";
//         const text = search.toLowerCase();

//         return name.includes(text) || email.includes(text);
//       });
//     }

//     setFiltered(temp);
//   }, [search, filter, bookings]);

//   // ✅ STATUS CHANGE WITH WHATSAPP MESSAGE
//   const handleStatusChange = async (b, status) => {
//     try {
//       await updateBookingStatus(b._id, status);

//       // ✅ WHATSAPP MESSAGE (YOUR TEMPLATE)
//       if (status === "confirmed") {
//         const message = `
// Dear ${b.fullName || "Guest"},

// Warm greetings from Hotel Seavora.

// We are delighted to confirm your reservation with us.

// 📅 Check-in: ${new Date(b.fromDate).toDateString()}  
// 📅 Check-out: ${new Date(b.toDate).toDateString()}  
// 🛏 Room: ${b.roomType || "N/A"}  

// We look forward to providing you with a comfortable and memorable stay.

// Kind regards,  
// Hotel Seavora
//         `;

//         const encodedMessage = encodeURIComponent(message);

//         window.open(
//           `https://wa.me/${b.phone}?text=${encodedMessage}`,
//           "_blank"
//         );
//       }

//       // ✅ UPDATE STATE (NO REFRESH)
//       const updated = bookings.map((item) =>
//         item._id === b._id ? { ...item, status } : item
//       );

//       setBookings(updated);

//     } catch (err) {
//       console.error(err);
//       alert("Failed to update status");
//     }
//   };

//   if (loading) {
//     return <p className="text-center p-10">Loading...</p>;
//   }

//   return (
//     <div className="bg-[#efe5d6] min-h-screen px-4 md:px-10 py-10">

//       {/* 🔍 SEARCH + FILTER */}
//       <div className="flex justify-center gap-4 mb-8 flex-wrap">

//         <div className="flex items-center border rounded-xl px-4 w-full max-w-lg bg-white shadow">
//           <Search className="w-4 h-4 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search bookings..."
//             className="w-full p-3 outline-none"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <select
//           className="p-2 rounded border bg-white"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="confirmed">Confirmed</option>
//           <option value="pending">Pending</option>
//         </select>

//       </div>

//       {/* 🧾 CARDS */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {filtered.map((b) => (
//           <Card
//             key={b._id}
//             className={`bg-gray-100 rounded-xl shadow-lg p-4 transition ${
//               b.status === "confirmed"
//                 ? "opacity-40 blur-sm hover:blur-none hover:opacity-100"
//                 : ""
//             }`}
//           >
//             <CardContent className="space-y-2">

//               <h3 className="font-bold text-lg">
//                 {b.fullName || "Guest"}
//               </h3>

//               <p><strong>Email:</strong> {b.email || "N/A"}</p>
//               <p><strong>Phone:</strong> {b.phone || "N/A"}</p>
//               <p><strong>Guests:</strong> {b.guests || 0}</p>
//               <p><strong>Room:</strong> {b.roomType || "N/A"}</p>

//               <p className="text-sm">
//                 <strong>Stay:</strong>{" "}
//                 {new Date(b.fromDate).toDateString()} -{" "}
//                 {new Date(b.toDate).toDateString()}
//               </p>

//               {/* ✅ CHECKBOX STATUS */}
//               <div className="flex items-center gap-6 mt-4">

//                 {/* Pending */}
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={b.status === "pending"}
//                     onChange={() => handleStatusChange(b, "pending")}
//                     className="w-5 h-5 accent-red-500"
//                   />
//                   <span className="text-red-500 font-semibold">
//                     Pending
//                   </span>
//                 </label>

//                 {/* Confirmed */}
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={b.status === "confirmed"}
//                     onChange={() => handleStatusChange(b, "confirmed")}
//                     className="w-5 h-5 accent-green-500"
//                   />
//                   <span className="text-green-600 font-semibold">
//                     Confirmed
//                   </span>
//                 </label>

//               </div>

//             </CardContent>
//           </Card>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// One last version of AdminDashboard.jsx with enhanced UI, better error handling, improved code structure, and a more personalized WhatsApp message template for booking confirmation. This version includes a search bar, filter options, and a visually appealing card layout for each booking. The status can be toggled using checkboxes, and the UI provides clear feedback on the current status of each booking. Additionally, the WhatsApp message now includes a warm greeting and a summary of the booking details to enhance the customer experience.

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

  // ✅ FETCH DATA
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

  // ✅ SEARCH + FILTER
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

  // ✅ STATUS CHANGE + WHATSAPP
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
Hotel Seavora
        `;

        window.open(
          `https://wa.me/${b.phone}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }

      // update UI instantly
      const updated = bookings.map((item) =>
        item._id === b._id ? { ...item, status } : item
      );

      setBookings(updated);

    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  // ✅ COUNTS
  const total = bookings.length;
  const confirmed = bookings.filter((b) => b.status === "confirmed").length;
  const pending = bookings.filter((b) => b.status === "pending").length;

  if (loading) return <p className="text-center p-10">Loading...</p>;

  return (
    <div className="bg-[#efe5d6] min-h-screen px-4 md:px-10 py-8">

      {/* 🔥 HEADER IMAGE */}
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

      {/* 🔥 SUMMARY */}
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

      {/* 🔍 SEARCH + FILTER */}
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

      {/* 🧾 BOOKINGS */}
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

              {/* ✅ CHECKBOX STATUS */}
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