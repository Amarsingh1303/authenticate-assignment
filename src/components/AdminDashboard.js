import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { selectUsers } from "./Reservation/reservation.slice";
import SeatBookingModal from "./SeatBookingModal";

const AdminDashboard = () => {
  const users = useSelector(selectUsers);
  const [show, setShow] = useState(false);
  const [bookingEdit, setBookingEdit] = useState({});

  const handleClose = () => setShow(false);
  return (
    <Container>
      {show && bookingEdit && (
        <SeatBookingModal
          show={show}
          handleClose={handleClose}
          bookingDetails={bookingEdit}
        />
      )}
      <h1>Admin Dashboard</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Seat Number</th>
            <th>Date of Booking</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.bookedSeats.map((item) => item.id).join(",")}</td>
                <td>{user.bookingDate.split("T")[0]}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => {
                      setBookingEdit(user);
                      setShow(true);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;
