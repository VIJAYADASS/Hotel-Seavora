import { useNavigate } from "react-router-dom";
import {
  BedDouble,
  Flower,
  Ban,
  Zap,
  Shirt,
  BatteryCharging,
  CircleParking,
  Cctv
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    icon: BedDouble,
    title: "DRIVER'S RESTROOM",
    desc: "Special room available for drivers to rest comfortably."
  },
  {
    icon: Flower,
    title: "FLORIST",
    desc: "Choose beautiful gifts for your loved ones."
  },
  {
    icon: Ban,
    title: "NON-SMOKING ROOM",
    desc: "Clean air environment for a healthy stay."
  },
  {
    icon: Zap,
    title: "EXPRESS CHECK-IN",
    desc: "Fast and seamless check-in experience."
  },
  {
    icon: Shirt,
    title: "LAUNDRY SERVICE",
    desc: "Quick and reliable laundry service available."
  },
  {
    icon: BatteryCharging,
    title: "GENERATOR",
    desc: "24 hrs Generator Backup with AC."
  },
  {
    icon: CircleParking,
    title: "PARKING",
    desc: "Spacious parking area for guests' convenience."
  },
  {
    icon: Cctv,
    title: "CCTV SURVEILLANCE",
    desc: "24/7 CCTV surveillance for security."
  }
];

const Facilities = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#efe5d6] w-full">

      {/* 🔥 HEADER */}
      <div className="px-4 md:px-10 pt-6">
        <div
          className="relative h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              FACILITIES
            </h1>
          </div>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="py-16 px-6 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          Seavora Facilities
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide all essential facilities to make your stay comfortable,
          enjoyable, and memorable.
        </p>

        {/* 🔥 GRID (2x2 MOBILE FIXED) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center transition"
              >
                <CardContent className="p-0">
                  <Icon className="mx-auto mb-4 h-10 w-10 text-black" />
                  <h3 className="font-semibold mb-2 text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}

        </div>

        {/* 🔥 IMAGE + CONTENT SECTION */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">

          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
            alt="hotel room"
            className="w-full h-[250px] md:h-[350px] object-cover rounded-xl shadow-lg"
          />

          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Comfort & Convenience
            </h3>

            <p className="text-gray-600 leading-7">
              Discover our range of thoughtfully designed rooms for a comfortable and
              memorable stay.
            </p>

            <button
              onClick={() => navigate("/gallery")}
              className="mt-6 border border-black px-6 py-2 hover:bg-black hover:text-white transition"
            >
              VIEW GALLERY
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Facilities;