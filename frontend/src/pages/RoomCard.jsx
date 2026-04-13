import { useNavigate } from "react-router-dom";
import {
  Wifi,
  Tv,
  Coffee,
  AirVent,
  Bath,
  CheckCircle,
  XCircle
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RoomCard = ({ room, fromDate, toDate }) => {
  const navigate = useNavigate();

  const isAvailable = room?.isAvailable !== false;

  const facilities = [
    { icon: AirVent, label: "AC" },
    { icon: Tv, label: "TV" },
    { icon: Wifi, label: "WiFi" },
    { icon: Bath, label: "Bath" },
    { icon: Coffee, label: "Coffee" }
  ];

  const handleReserve = () => {
    if (!fromDate || !toDate) {
      alert("Please select check-in and check-out dates");
      return;
    }

    navigate("/reservation", {
      state: {
        room,
        fromDate,
        toDate
      }
    });
  };

  return (
    <Card className="bg-[#f3e9d9] rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <CardContent className="p-0">

        <div className="flex flex-col md:flex-row">

          
          <div className="w-full md:w-1/2 h-[220px] md:h-auto">
            <img
              src={room?.images?.[0] || "https://via.placeholder.com/400"}
              alt={room?.name}
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="w-full md:w-1/2 p-5 md:p-6 flex flex-col justify-between">

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {room?.name}
              </h2>

              <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                {room?.description}
              </p>

       
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                {facilities.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg shadow-sm text-xs md:text-sm"
                    >
                      <Icon className="h-4 w-4 text-black" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              
              <div className="flex items-center gap-2 mb-2">
                {isAvailable ? (
                  <>
                    <CheckCircle className="text-green-600 h-5 w-5" />
                    <span className="text-green-600 font-semibold text-sm">
                      Available
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-600 h-5 w-5" />
                    <span className="text-red-600 font-semibold text-sm">
                      Sold Out
                    </span>
                  </>
                )}
              </div>
            </div>

            
            <div className="flex justify-between items-center mt-4">
              <Button
                onClick={handleReserve}
                className="bg-black text-white hover:bg-gray-800"
              >
                Reserve Now
              </Button>

              <p className="text-lg md:text-xl font-semibold">
                ₹{room?.price}
              </p>
            </div>

          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default RoomCard;