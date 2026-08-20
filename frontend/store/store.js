import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightSlices";
const store = configureStore({
  reducer: {
    flights: flightReducer,
  },
});
export default store;
