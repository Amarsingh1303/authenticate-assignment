import classNames from "classnames";
import React from "react";

const Seat = ({ seatDetails, selectedSeats, setSelectedSeats }) => {
  const seatSelected = selectedSeats.find(
    (selectedSeat) => selectedSeat.id === seatDetails.id
  );
  const seatHandler = () => {
    if (seatDetails.status === "booked") return null;
    else if (seatSelected)
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeats) => selectedSeats.id !== seatDetails.id
        )
      );
    else setSelectedSeats([...selectedSeats, seatDetails]);
  };
  return (
    <div
      className={classNames("seat", {
        "cursor-not-allowed booked-seat-bg-color":
          seatDetails.status === "booked",
        "selected-seat-bg-color": seatSelected,
      })}
      onClick={seatHandler}
    >
      <div>{seatDetails.id}</div>
      <div className="seat-inside-container"></div>
    </div>
  );
};

export default Seat;
