import React from "react";
import Seat from "./Seat";
import VerticalSeat from "./VerticalSeat";
import steeringWheel from "../assets/icons/steering-wheel.svg";
import Container from "react-bootstrap/Container";

const Deck = ({ deck = "", seats = [], selectedSeats, setSelectedSeats }) => {
  const rowASeats = seats
    .filter((seat) => seat.deck === deck)
    .filter((seat) => seat.row === "a");
  const rowBSeats = seats
    .filter((seat) => seat.deck === deck)
    .filter((seat) => seat.row === "b");
  const rowCSeats = seats
    .filter((seat) => seat.deck === deck)
    .filter((seat) => seat.row === "c");

  return (
    <Container className="content-container">
      <div className="deck-container">
        {deck === "lower" && (
          <>
            <div style={{ marginTop: "45px" }}>
              <img
                src={steeringWheel}
                height={25}
                width={25}
                style={{ transform: "rotate(-90deg)" }}
                alt="steering wheel"
              />
            </div>
            <div className="vertical-line"></div>
          </>
        )}
        {/* Seats */}
        <div className="seat-content-container">
          <div className="seat-container">
            {rowASeats.map((seatDetails) => (
              <Seat
                seatDetails={seatDetails}
                key={seatDetails.id}
                setSelectedSeats={setSelectedSeats}
                selectedSeats={selectedSeats}
              />
            ))}
          </div>
          <div className="seat-container">
            {rowBSeats.map((seatDetails) => (
              <Seat
                seatDetails={seatDetails}
                key={seatDetails.id}
                setSelectedSeats={setSelectedSeats}
                selectedSeats={selectedSeats}
              />
            ))}
          </div>
          <div></div>
          <div className="seat-container">
            {rowCSeats.map((seatDetails) => (
              <Seat
                seatDetails={seatDetails}
                key={seatDetails.id}
                setSelectedSeats={setSelectedSeats}
                selectedSeats={selectedSeats}
              />
            ))}
          </div>
        </div>
        {/* Vertial Seat */}
        <div className="vertical-seat-container">
          <VerticalSeat />
        </div>
      </div>
    </Container>
  );
};

export default Deck;
