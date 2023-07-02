import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import SeatBookingModal from "../SeatBookingModal";
import { selectSeats } from "./reservation.slice";
import Deck from "../Deck";

const Reservation = () => {
  const seats = useSelector(selectSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div className="content">
      <SeatBookingModal
        show={show}
        handleClose={handleClose}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />
      <Container className="content-width">
        <h5 className="heading">
          Click on Available seat to proceed with your transaction
        </h5>
        {selectedSeats.length ? (
          <Button variant="primary" onClick={() => setShow(true)}>
            Book Seats
          </Button>
        ) : null}
        <h4>Lower Deck</h4>
        <Deck
          deck="lower"
          seats={seats}
          setSelectedSeats={setSelectedSeats}
          selectedSeats={selectedSeats}
        />
        <h4>Upper Deck</h4>
        <Deck
          deck="upper"
          seats={seats}
          setSelectedSeats={setSelectedSeats}
          selectedSeats={selectedSeats}
        />
      </Container>
    </div>
  );
};

export default Reservation;
