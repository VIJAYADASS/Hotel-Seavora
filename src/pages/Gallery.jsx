import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";



const roomData = {
  "Select the Rooms ": [
    {
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      text: "Comfortable and modern room"
    },
    {
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      text: "Spacious living area"
    }
  ],
  "Premium Double Bed Room A/c": [
    {
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
      text: "Premium comfort"
    },
    {
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      text: "Elegant interiors"
    }
  ],
  "Premium Suite Room A/c": [
    {
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      text: "Luxury suite"
    },
    {
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      text: "Premium space"
    }
  ],
  "Superior Double Bed Room (Single)": [
    {
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      text: "Perfect for solo"
    },
    {
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      text: "Cozy stay"
    }
  ],
  "Superior Double Bed Room (Double)": [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      text: "Ideal for couples"
    },
    {
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
      text: "Bright room"
    }
  ],
  "Superior Suite Room (5 Bed)": [
    {
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      text: "Family suite"
    },
    {
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      text: "Group stay"
    }
  ],
  "Triple Bed Room (3 Bed)": [
    {
      img: "https://images.unsplash.com/photo-1591088398332-8a7791972843",
      text: "Triple sharing"
    },
    {
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      text: "Comfort for 3"
    }
  ]
};

export default function Gallery() {
  const [selectedRoom, setSelectedRoom] = useState(Object.keys(roomData)[0]);
  const [preview, setPreview] = useState(null);
  const gridRef = useRef(null);
  const navigate = useNavigate();

  const handleSelect = (room) => {
    setSelectedRoom(room);
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#f8f5f0]">

      <div className="max-w-full mx-auto px-4 md:px-6 py-3 ">

         
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold ">Photo Gallery</h1>
          <p className="text-gray-500 mt-4">
            Explore our rooms and facilities through our photo gallery.
          </p>
        </div>

         
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 mt-8">

           
          <div className="block md:hidden">
            <div className="bg-[#efe5d6] rounded-2xl p-6 shadow-md sticky top-20">
            <h2 className="text-lg font-semibold mb-4 ">Room Type</h2>
            <select
              value={selectedRoom}
              onChange={(e) => handleSelect(e.target.value)}
              className="w-full p-3 rounded-lg border"
            >
              {Object.keys(roomData).map((room) => (
                <option key={room}>{room}</option>
              ))}
              </select>
              </div> 
          </div>

           
          <aside className="hidden md:block">
            <div className="bg-[#efe5d6] rounded-2xl p-6 shadow-md sticky top-20">
              <h2 className="text-lg font-semibold mb-4 ">Room Types</h2>

              <div className="space-y-3">
                {Object.keys(roomData).map((room) => (
                  <button
                    key={room}
                    onClick={() => setSelectedRoom(room)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition
                      ${selectedRoom === room
                        ? "bg-[#d8a39d] text-white"
                        : "hover:bg-white"}`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>
          </aside>

           
         <main ref={gridRef}>
            <div className="bg-[#efe5d6] rounded-2xl p-4 md:p-6 shadow-md">

                <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
                  {selectedRoom}
                </h2>

                <p className="text-gray-500 mb-6 text-center md:text-left">
                  View images of our {selectedRoom.toLowerCase()}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {roomData[selectedRoom].map((item, index) => (
                    <div key={index}>
                      <div
                        onClick={() => setPreview(item.img)}
                        className="rounded-xl overflow-hidden cursor-pointer"
                      >
                        <img
                          src={item.img}
                          className="w-full h-56 md:h-64 object-cover hover:scale-105 transition"
                        />
                      </div>

                      <p className="text-sm text-gray-600 mt-2 text-center">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
            </div>
        </main>

        </div>

       
        <div className="bg-white  rounded-xl text-center py-8 px-4 shadow-md mt-10 mb-0">
          <h2 className="text-2xl font-semibold">Plan Your Visit</h2>
          <p className="text-gray-500 mt-2">
            Ready to experience our hotel? Book your stay now.
          </p>
          <button 
            onClick={() => navigate("/reservation")}
            className="mt-4 bg-[#ea9990] text-white px-6 py-3 rounded-full">
            Reserve Now
          </button>
        </div>

      </div>

      
      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={preview}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}