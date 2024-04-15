import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cities")) || [];

const CitiesSlice = createSlice({
  name: "Cities",
  initialState,
  reducers: {
    addCities(state, action) {
      state.push(action.payload);
      localStorage.setItem("cities", JSON.stringify(state));
    },
    deleteCity(state, action) {
      state.splice(action.payload, 1);
      localStorage.setItem("cities", JSON.stringify(state));
    },
  },
});

export default CitiesSlice.reducer;
export const { addCities, deleteCity } = CitiesSlice.actions;
