import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarouselState {
  selectedSlide: number;
}

const initialState: CarouselState = {
  selectedSlide: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setSelectedSlide: (state, action: PayloadAction<number>) => {
      state.selectedSlide = action.payload;
    },
  },
});

export const { setSelectedSlide } = carouselSlice.actions;

export default carouselSlice.reducer;
