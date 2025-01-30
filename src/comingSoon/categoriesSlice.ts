import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [
    'education',
    'work',
    'sport',
  ],
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    deleteCategory: (state, action) => {
      return state.filter((category, index) => index !== action.payload);
    },
  }
});

export const { addCategory, deleteCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;