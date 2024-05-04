
const getCards = () => {
    return new Promise((resolve) => {
       setTimeout(() => {
         resolve([
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
           
         ]);
       }, 1000); // Simulate a delay to mimic network latency
    });
   };
   
   export { getCards };