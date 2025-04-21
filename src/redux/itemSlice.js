import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    setAllitem: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setAllitem } = itemSlice.actions;
export default itemSlice.reducer;