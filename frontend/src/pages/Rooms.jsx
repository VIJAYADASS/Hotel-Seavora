import { useEffect, useState } from "react";
import API from "../services/api";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);


  const [loading, setLoading] = useState(true);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [sort] = useState("default");

 
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await API.get("/rooms");
        setRooms(res.data); 
        setFilteredRooms(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

 
  useEffect(() => {
    let temp = [...rooms];

    if (sort === "low") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFilteredRooms(temp);
  }, [rooms, sort]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (

   <div className="bg-gray-100 min-h-screen py-10">

  <div className="max-w-6xl mx-auto px-6">

    
    <h1 className="text-4xl font-bold text-center mb-8">
      Reserve a Room
    </h1>

   
    <div className="bg-[#f3e9d9] p-8 rounded-xl text-center mb-10 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">
        Select Your Dates
      </h2>

      <div className="flex justify-center gap-6">
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]} 
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="p-3 rounded-lg border w-48"
        />

        <input
          type="date"
          min={fromDate || new Date().toISOString().split("T")[0]} 
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="p-3 rounded-lg border w-48"
        />
      </div>
          </div>
          

     
    <div className="space-y-10 mt-6">
      {filteredRooms.map((room) => (
        <RoomCard
          room={room}
          fromDate={fromDate}
          toDate={toDate}
          allRooms={rooms}
        
        />
      ))}
    </div>

  </div>
      </div>
     
  );
};

export default Rooms;


