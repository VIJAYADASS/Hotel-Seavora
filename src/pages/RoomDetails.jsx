import { useNavigate, useLocation } from "react-router-dom";

const RoomDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { room, fromDate, toDate, allRooms } = location.state || {};

  const handleReserve = () => {
    if (!fromDate || !toDate) {
      alert("Please select dates");
      return;
    }

    navigate("/reservation", {
      state: {
        room: room,
        fromDate: fromDate,
        toDate: toDate,
        allRooms: allRooms
      },
    });
  };

  return (
    <div>
      <h2>{room?.name}</h2>
      <p>Price: ₹{room?.price}</p>

      <button onClick={handleReserve}>
        Reserve Now
      </button>
    </div>
  );
};

export default RoomDetails;














