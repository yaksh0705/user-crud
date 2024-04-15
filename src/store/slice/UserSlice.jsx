import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
    deleteUsers(state, action) {
      state.splice(action.payload, 1);
      localStorage.setItem("users", JSON.stringify(state));
    },
    editUsers(state, action) {
      const { id, newData } = action.payload;
      const index = state.findIndex((user) => user.id === id);
      state[index] = newData;
      localStorage.setItem("users", JSON.stringify(state));
    },
  },
});

export default UserSlice.reducer;
export const { addUsers, deleteUsers, editUsers } = UserSlice.actions;
