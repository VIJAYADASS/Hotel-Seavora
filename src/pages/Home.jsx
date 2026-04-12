import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Coffee,
  Wifi,
  Utensils,
  CookingPot,
  MapPin,
  Briefcase,
  Hotel
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  // 🔥 SLIDER IMAGES
  const images = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#efe5d6]">

      {/* 🔥 SLIDER */}
        {/* 🔥 SLIDER WITH SIDE SPACE */}
<div className="px-4 md:px-10 pt-6">

  <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl shadow-lg">

    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="slide"
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
          index === current ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* TEXT */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Welcome to Hotel Seavora
      </h1>
      <p className="text-sm md:text-lg">
        Experience Luxury Redefined
      </p>
    </div>

    {/* DOTS */}
    <div className="absolute bottom-4 flex gap-2 justify-center w-full">
      {images.map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            current === i ? "bg-white" : "bg-gray-400"
          }`}
        ></div>
      ))}
    </div>

  </div>

</div>
      {/* ⭐ SPLIT SECTION */}
      <div className="grid md:grid-cols-2 gap-8 items-center px-6 py-16 max-w-6xl mx-auto">

        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A Sanctuary of Elegance
          </h2>

          <p className="text-gray-600 leading-7">
            Nestled in the heart of the city, our hotel offers a blend of
            timeless luxury and modern comfort. Every space is crafted to
            deliver a memorable experience, from world-class dining to
            relaxing stays.
          </p>

          <button
            onClick={() => navigate("/rooms")}
            className="mt-6 border border-black px-6 py-2 hover:bg-black hover:text-white transition"
          >
            Book Now
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1551776235-dde6d482980b"
            alt="hotel"
            className="w-full h-[300px] md:h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>

      {/* ⭐ FEATURES */}
      <div className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          FEATURES
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <CookingPot className="mx-auto mb-4 h-10 w-10" />
            <h3 className="font-semibold mb-2">BREAKFAST</h3>
            <p className="text-sm text-gray-600">
              Fresh and healthy breakfast every morning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Coffee className="mx-auto mb-4 h-10 w-10" />
            <h3 className="font-semibold mb-2">COFFEE</h3>
            <p className="text-sm text-gray-600">
              Enjoy beverages anytime.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Wifi className="mx-auto mb-4 h-10 w-10" />
            <h3 className="font-semibold mb-2">FREE WIFI</h3>
            <p className="text-sm text-gray-600">
              High-speed internet access.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Utensils className="mx-auto mb-4 h-10 w-10" />
            <h3 className="font-semibold mb-2">DINING</h3>
            <p className="text-sm text-gray-600">
              Delicious meals anytime.
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/facilities")}
            className="border border-black px-6 py-3 font-semibold hover:bg-black hover:text-white transition"
          >
            MORE FACILITIES
          </button>
        </div>

      </div>

      {/* ⭐ WHY CHOOSE */}
      <div className="py-16 px-6 bg-white">

        <h2 className="text-3xl font-bold text-center mb-12">
          WHY CHOOSE US
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">

          <div>
            <MapPin className="mx-auto mb-4 h-10 w-10" />
            <h3 className="font-semibold mb-2">LOCATION</h3>
            <p className="text-gray-600 text-sm">
              Easy access to beaches and attractions.
            </p>
          </div>

          <div>
            <Briefcase className="mx-auto mb-4 h-10 w-10" />
            <h3 className="font-semibold mb-2">BUSINESS</h3>
            <p className="text-gray-600 text-sm">
              Perfect for business travelers.
            </p>
          </div>

          <div>
            <Hotel className="mx-auto mb-4 h-10 w-10" />
            <h3 className="font-semibold mb-2">HOSPITALITY</h3>
            <p className="text-gray-600 text-sm">
              Exceptional service guaranteed.
            </p>
          </div>

        </div>

      </div>

      {/* 🌍 PLACES */}
      <div className="py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-2">
          Places Nearby to Explore
        </h2>

        <p className="text-gray-600 mb-10">
          Discover beautiful beaches and nearby attractions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">

          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="map"
            className="rounded-xl shadow-md w-full"
          />

          <div className="bg-white rounded-xl shadow-md overflow-hidden text-left">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="hotel"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Beachside Hotel
              </h3>
              <p className="text-gray-600 text-sm">
                Located near the beach with scenic views and relaxation spots.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;