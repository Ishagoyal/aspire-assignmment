export interface Card {
  id: number;
  cardHolderName: string;
  cardNumber: string;
  status: string;
  cardType: string;
  cardNumberVisible: boolean;
  expiryDate: string;
  cvv: string;
  availableBalance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  name: string;
  date: string;
  description: string;
  type: string;
  amount: string;
  icon: string;
}

export type CardState = Card[];
