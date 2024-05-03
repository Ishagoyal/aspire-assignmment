// carouselSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 selectedSlide: 0,
};

const carouselSlice = createSlice({
 name: 'carousel',
 initialState,
 reducers: {
    setSelectedSlide: (state, action) => {
      state.selectedSlide = action.payload;
    },
 },
});

export const { setSelectedSlide } = carouselSlice.actions;

export default carouselSlice.reducer;
