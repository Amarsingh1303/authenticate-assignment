import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  setBookingStatus,
  setBookingUser,
  updateBookingUser,
} from "./Reservation/reservation.slice";

const SeatBookingModal = ({
  show,
  handleClose,
  selectedSeats,
  setSelectedSeats,
  bookingDetails,
}) => {
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    firstName: bookingDetails?.firstName || "",
    lastName: bookingDetails?.lastName || "",
    email: bookingDetails?.email || "",
    bookedSeats: [],
    bookingDate: "",
  });
  const [error, setError] = useState(false);
  const submitHandler = () => {
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email) {
      setError(true);
      return;
    }
    if (bookingDetails) {
      dispatch(
        updateBookingUser({
          ...bookingDetails,
          firstName: formDetails.firstName,
          lastName: formDetails.lastName,
          email: formDetails.email,
        })
      );
      setError(false);
    } else {
      dispatch(
        setBookingUser({
          ...formDetails,
          id: uuidv4(),
          bookedSeats: selectedSeats,
          bookingDate: new Date().toISOString(),
        })
      );
      dispatch(setBookingStatus(selectedSeats));
      setSelectedSeats([]);
      setFormDetails({
        firstName: "",
        lastName: "",
        email: "",
        bookedSeats: [],
        bookingDate: "",
      });
      setError(false);
    }
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Seat Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="error">Please fill the form completely</div>}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="first name"
              value={formDetails.firstName}
              onChange={(e) =>
                setFormDetails({ ...formDetails, firstName: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="last name"
              value={formDetails.lastName}
              onChange={(e) =>
                setFormDetails({ ...formDetails, lastName: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={formDetails.email}
              onChange={(e) =>
                setFormDetails({ ...formDetails, email: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitHandler}>
          {bookingDetails ? "Save" : "Book Seats"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeatBookingModal;
