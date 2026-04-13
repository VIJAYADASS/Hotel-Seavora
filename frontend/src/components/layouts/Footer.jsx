import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#c58c80] text-white px-6 md:px-10 py-12">

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl text-black font-bold mb-4">Hotel Seavora</h2>
          <p className="text-black">
            Experience comfort and luxury with world-class service.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-black">Quick Links</h3> 
          <ul className="space-y-2 text-black hover:text-white transition cursor-pointe">
            <li >About</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-3 text-black">
          <div className="flex gap-2">
            <MapPin size={16} /> Chennai, Tamil Nadu
          </div>
          <div className="flex gap-2">
            <Phone size={16} /> +91 12345 67890
          </div>
          <div className="flex gap-2">
            <Mail size={16} /> hotelseavora@email.com
          </div>
        </div>

      </div>

      <div className="text-center text-black-500 mt-10 text-sm">
        © 2026 HotelSeavora Booking
      </div>
    </footer>
  );
};

export default Footer;