// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './state/cardSlice';
import carouselReducer from './state/carouselSlice'

export const store = configureStore({
 reducer: {
    cards: cardReducer,
    carousel: carouselReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
