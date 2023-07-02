import { createSlice } from "@reduxjs/toolkit";
import { seats } from "../seats.constant";

const initialState = {
  seats,
  users: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: initialState,
  reducers: {
    setBookingStatus: (state, action) => {
      const seatToBooked = action.payload;
      state.seats = state.seats.map((seat) => {
        const seatBook = seatToBooked.find((item) => item.id === seat.id);
        if (seatBook) {
          return {
            ...seat,
            status: "booked",
          };
        } else return seat;
      });
    },
    setBookingUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    updateBookingUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
          };
        } else return user;
      });
    },
  },
});

export const { setBookingStatus, setBookingUser, updateBookingUser } =
  reservationSlice.actions;

export const selectSeats = (state) => state.reservation.seats;
export const selectUsers = (state) => state.reservation.users;

export default reservationSlice.reducer;
