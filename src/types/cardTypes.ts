export interface Card {
    id: number;
    cardHolderName: string;
    cardNumber: string;
    cardType: string;
    expiryDate: string;
    cvv: string;
    availableBalance: number;
    transactions: Transaction[];
   }
   
   export interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: string;
    icon: string;
   }
   
   export type CardState = Card[];
   