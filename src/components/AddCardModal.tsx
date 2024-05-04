import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../state/cardSlice";

const AddCardModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isCardHolderNameValid, setIsCardHolderNameValid] = useState(true);
  const dispatch = useDispatch();
  // Function to generate random card number
  const generateCardNumber = () => {
    return (
      "XXXX-XXXX-XXXX-" +
      Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")
    );
  };

  // Function to generate expiry date
  const generateExpiryDate = () => {
    const today = new Date();
    const year = today.getFullYear() + 3; // Expiry 3 years from now
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    return `${month}/${year}`;
  };

  // Use useEffect to generate card number and expiry date when the modal is opened
  useEffect(() => {
    if (isOpen) {
      const generatedCardNumber = generateCardNumber();
      const generatedExpiryDate = generateExpiryDate();
      setCardNumber(generatedCardNumber);
      setExpiryDate(generatedExpiryDate);
    }
  }, [isOpen]);

  const handleCardHolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCardHolderName(value);
    // Simple validation: check if the name is not empty
    setIsCardHolderNameValid(value.trim() !== "");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isCardHolderNameValid) {
      // Prevent form submission if the card holder name is not valid
      return;
    }
    console.log({ cardHolderName, cardNumber, expiryDate });
    onClose(); // Close modal after submission
  };

  const handleAddCard = () => {
    dispatch(
      addCard({
        id: 1,
        cardHolderName: cardHolderName,
        cardNumber: cardNumber,
        status: "active",
        cardType: "Visa",
        expiryDate: expiryDate,
        cvv: "***",
        availableBalance: 3000,
        transactions: [
          {
            id: 1,
            name: "Hamleys",
            date: "20 May 2020",
            description: "Refund on debit card",
            amount: "+ S$ 150",
            type: "credited",
            icon: "fileStorage",
          },
          {
            id: 2,
            name: "Hamleys",
            date: "20 May 2020",
            description: "Charged to debit card",
            amount: "- S$ 150",
            type: "debited",
            icon: "flights",
          },
          {
            id: 3,
            name: "Hamleys",
            date: "20 May 2020",
            description: "Charged to debit card",
            amount: "- S$ 150",
            type: "debited",
            icon: "megaphone",
          },
          {
            id: 4,
            name: "Hamleys",
            date: "20 May 2020",
            description: "Charged to debit card",
            amount: "- S$ 150",
            type: "debited",
            icon: "fileStorage",
          },
        ],
      })
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] h-auto max-w-full">
        <h2 className="text-lg font-bold mb-4">Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Card Holder Name
            </label>
            <input
              type="text"
              id="name"
              value={cardHolderName}
              onChange={handleCardHolderNameChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                isCardHolderNameValid ? "border-gray-300" : "border-red-500"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              required
            />
            {!isCardHolderNameValid && (
              <p className="text-red-500 text-xs mt-1">
                Card holder name is required.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-[#325BAF] text-white rounded hover:bg-blue-700"
              onClick={() => handleAddCard()}
            >
              Add Card
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-black rounded border-[1px] border-black"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
