import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "../components/Reservation/reservation.slice";

export const store = configureStore({
  reducer: {
    reservation: reservationSlice,
  },
});
