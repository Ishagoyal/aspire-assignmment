import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, CardState } from '../types/cardTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const initialState: CardState = [
    {
       id: 1,
       cardHolderName: "Mark Henry",
       cardNumber: "1234 5678 9012 2020",
       status: 'active',
       cardType: "Visa",
       expiryDate: "12/20",
       cvv: "***",
       availableBalance: 3000,
       transactions: [
         {
           id: 1,
           name: 'Hamleys',
           date: "20 May 2020",
           description: "Refund on debit card",
           amount: "+ S$ 150",
           type: 'credited',
           icon: "fileStorage",
         },
         {
           id: 2,
           name: 'Hamleys',
           date: "20 May 2020",
           description: "Charged to debit card",
           amount: "- S$ 150",
           type: 'debited',
           icon: "flights",
         },
         {
           id: 3,
           name: 'Hamleys',
           date: "20 May 2020",
           description: "Charged to debit card",
           amount: "- S$ 150",
           type: 'debited',
           icon: "megaphone",
         },
         {
            id: 4,
            name: 'Hamleys',
            date: "20 May 2020",
            description: "Charged to debit card",
            amount: "- S$ 150",
            type: 'debited',
            icon: "fileStorage",
          },
       ],
    },
    {
        id: 2,
        cardHolderName: "Mark Henry",
        cardNumber: "1234 5678 9012 2020",
        status: 'frozen',
        cardType: "Visa",
        expiryDate: "12/20",
        cvv: "***",
        availableBalance: 3000,
        transactions: [
            {
              id: 1,
              name: 'Hamleys',
              date: "20 May 2020",
              description: "Refund on debit card",
              amount: "+ S$ 150",
              type: 'credited',
              icon: "fileStorage",
            },
            {
              id: 2,
              name: 'Hamleys',
              date: "20 May 2020",
              description: "Charged to debit card",
              amount: "- S$ 150",
              type: 'debited',
              icon: "flights",
            },
            {
              id: 3,
              name: 'Hamleys',
              date: "20 May 2020",
              description: "Charged to debit card",
              amount: "- S$ 150",
              type: 'debited',
              icon: "megaphone",
            },
            {
               id: 4,
               name: 'Hamleys',
               date: "20 May 2020",
               description: "Charged to debit card",
               amount: "- S$ 150",
               type: 'debited',
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
    updateCardStatus: (state, action: PayloadAction<{ cardId: number; newStatus: string }>) => {
        const card = state.find(card => card.id === action.payload.cardId);
        if (card) {
          card.status = action.payload.newStatus; // Immer allows this "mutation"
        }
      },
 },
});

export const { addCard, updateCardStatus } = cardSlice.actions;

export default cardSlice.reducer;
