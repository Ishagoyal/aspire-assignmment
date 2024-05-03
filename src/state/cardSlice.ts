import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, CardState } from '../types/cardTypes';


const initialState: CardState = [
    {
       id: 1,
       cardHolderName: "Mark Henry",
       cardNumber: "1234 5678 9012 2020",
       cardType: "Visa",
       expiryDate: "12/20",
       cvv: "***",
       availableBalance: 3000,
       transactions: [
         {
           id: 1,
           date: "20 May 2020",
           description: "Refund on debit card",
           amount: "+ S$ 150",
           icon: "fileStorage",
         },
         {
           id: 2,
           date: "20 May 2020",
           description: "Charged to debit card",
           amount: "- S$ 150",
           icon: "flights",
         },
         {
           id: 3,
           date: "20 May 2020",
           description: "Charged to debit card",
           amount: "- S$ 150",
           icon: "megaphone",
         },
         {
            id: 4,
            date: "20 May 2020",
            description: "Charged to debit card",
            amount: "- S$ 150",
            icon: "fileStorage",
          },
       ],
    },
    {
        id: 2,
        cardHolderName: "Mark Henry",
        cardNumber: "1234 5678 9012 2020",
        cardType: "Visa",
        expiryDate: "12/20",
        cvv: "***",
        availableBalance: 3000,
        transactions: [
          {
            id: 1,
            date: "20 May 2020",
            description: "Refund on debit card",
            amount: "+ S$ 150",
            icon: "fileStorage",
          },
          {
            id: 2,
            date: "20 May 2020",
            description: "Charged to debit card",
            amount: "- S$ 150",
            icon: "flights",
          },
          {
            id: 3,
            date: "20 May 2020",
            description: "Charged to debit card",
            amount: "- S$ 150",
            icon: "megaphone",
          },
          {
             id: 4,
             date: "20 May 2020",
             description: "Charged to debit card",
             amount: "- S$ 150",
             icon: "fileStorage",
           },
        ],
     },
   ];
   

const cardSlice = createSlice({
 name: 'cards',
 initialState,
 reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.push(action.payload);
    },
 },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
