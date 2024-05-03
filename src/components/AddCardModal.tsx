import React, { useState, useEffect } from "react";

const AddCardModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ cardHolderName, cardNumber, expiryDate });
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p">
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
              onChange={(e) => setCardHolderName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
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
            >
              Add Card
            </button>
            <button
              onClick={onClose}
              className=" px-4 py-2 text-black rounded border-[1px] border-black"
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
