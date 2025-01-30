import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filterCompleted: "All",
    filterCategory: "All",
  },
  reducers: {
    setFilterComplete: (state, action) => {
      state.filterCompleted = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
  }
});

export const { setFilterComplete, setFilterCategory } = filtersSlice.actions;

export default filtersSlice.reducer;