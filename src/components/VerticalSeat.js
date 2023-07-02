import React from "react";
import classNames from "classnames";

const VerticalSeat = ({ seatDetails, setSelectedSeats, selectedSeats }) => {
  const seatSelected = selectedSeats.some(
    (selectedSeat) => selectedSeat.id === seatDetails[0].id
  );
  const seatHandler = () => {
    if (seatDetails[0].status === "booked") return null;
    else if (seatSelected) {
      const filteredSeat = selectedSeats.filter(
        (selectedSeat) => selectedSeat.row !== "d"
      );
      setSelectedSeats(filteredSeat);
    } else setSelectedSeats([...selectedSeats, ...seatDetails]);
  };
  return (
    <div
      className={classNames("vertical-seat", {
        "cursor-not-allowed booked-seat-bg-color":
          seatDetails[0].status === "booked",
        "selected-seat-bg-color": seatSelected,
      })}
      onClick={seatHandler}
    >
      <div className="vertical-seat-inside-container"></div>
    </div>
  );
};

export default VerticalSeat;
