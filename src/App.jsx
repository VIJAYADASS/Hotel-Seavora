import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/layouts/Layout";
import ProtectedRoute from "./utils/ProtectedRoute";
import Rooms from "./pages/Rooms";
import AdminDashboard from "./pages/AdminDashboard";
import { Toaster } from "./components/ui/sonner";
import MyBookings from "./pages/MyBookings";
import Facilities from "./pages/Facilities";
import RoomDetails from "./pages/RoomDetails";
import Reservation from "./pages/Reservation";
import BookingSuccess from "./pages/BookingSuccess";
import Gallery from "./pages/Gallery";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App() {
const { user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/room/:id" element={<RoomDetails />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
      
            <Route
              path="/my-bookings"
              element={
                <ProtectedRoute>
                  <MyBookings />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin-dashboard"
              element={
                user?.role === "admin" ? (
                  <AdminDashboard />
                ) : (
                  <Navigate to="/" />
                )
              }
            />

          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;