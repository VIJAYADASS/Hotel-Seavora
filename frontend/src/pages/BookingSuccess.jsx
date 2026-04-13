import { useLocation, useNavigate } from "react-router-dom";
import { Check, Home, Download } from "lucide-react";

const BookingSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state;

  if (!booking) return <p>No booking found</p>;

  return (
    <div className="min-h-screen bg-[#d9cfbd] px-4 md:px-10 py-10">

       
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-[#3b2f2f]">
          Room Reservation
        </h1>

       
        <div className="max-w-3xl mx-auto bg-[#f3f3f3] rounded-2xl shadow-md p-6 md:p-8">
 
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold mt-4">
              Reservation Submitted!
            </h2>
            <p className="text-gray-500 text-sm">
              Your reservation has been successfully submitted
            </p>
          </div>

           
          <div className="bg-gray-200 rounded-lg px-4 py-3 flex justify-between mb-6 text-sm">
            <span className="font-medium">Reservation ID:</span>
            <span className="text-[#c58c80] font-semibold">00</span>
          </div>

           
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Customer Details</h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Name:</p>
                <p className="font-medium">{booking.fullName}</p>
              </div>

              <div>
                <p className="text-gray-500">Email:</p>
                <p className="font-medium">{booking.email}</p>
              </div>

              <div>
                <p className="text-gray-500">Phone:</p>
                <p className="font-medium">{booking.phone}</p>
              </div>

              <div>
                <p className="text-gray-500">Reservation Type:</p>
                <p className="font-medium">Room</p>
              </div>
            </div>
          </div>

           
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Reservation Details</h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Check-in Date:</p>
                <p className="font-medium">{booking.fromDate}</p>
              </div>

              <div>
                <p className="text-gray-500">Check-out Date:</p>
                <p className="font-medium">{booking.toDate}</p>
              </div>

              <div>
                <p className="text-gray-500">Room Type:</p>
                <p className="font-medium">{booking.roomType}</p>
              </div>

              <div>
                <p className="text-gray-500">Tariff:</p>
                <p className="font-medium">₹{booking.totalPrice}</p>
              </div>

              <div>
                <p className="text-gray-500">Number of Guests:</p>
                <p className="font-medium">{booking.guests || "-"}</p>
              </div>
            </div>
          </div>

          
          <div className="bg-blue-50 border-l-4 border-blue-300 rounded-lg p-4 text-sm mb-6">
            <h4 className="font-semibold mb-2 text-[#c58c80]">
              What's Next?
            </h4>
            <ul className="list-disc ml-5 space-y-1 text-gray-600">
              <li>We will review your reservation within 24 hours</li>
              <li>Please keep this reservation ID for reference</li>
              <li>You may be contacted for confirmation</li>
              <li>Payment details will be shared later</li>
            </ul>
          </div>

        
          <div className="space-y-4">

            
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center justify-center gap-2 border border-[#c58c80] text-[#c58c80] py-3 rounded-xl hover:bg-[#c58c80] hover:text-white transition"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </button>

             
            <button
              onClick={() => window.print()}
              className="w-full flex items-center justify-center gap-2 bg-[#c58c80] text-white py-3 rounded-xl shadow-md hover:bg-[#b67a6f] transition"
            >
              <Download className="h-5 w-5" />
              <span>Print / Download Receipt</span>
            </button>

          </div>
      </div>
    </div>
  );
};

export default BookingSuccess;