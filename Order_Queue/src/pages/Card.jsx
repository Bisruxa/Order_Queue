import React, { useState } from "react";


function Card({ image, title, price, onAddToOrder }) {
  const [quantity, setQuantity] = useState(1);
  const [showQuantityControls, setShowQuantityControls] = useState(false);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToOrder = () => {
    setShowQuantityControls(true);
    onAddToOrder({ image, title, price, quantity });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border w-72 flex flex-row items-center">
      <img src={image} alt={title} className="w-24 h-24 rounded-md" />
      <div className="flex flex-col ml-4">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-gray-600">${price}</p>
        <div className="flex items-center gap-2 mt-2">
          {!showQuantityControls ? (
            <span
              onClick={handleAddToOrder}
              className="cursor-pointer text-blue-500 text-xl font-bold"
            >
              +
            </span>
          ) : (
            <>
              <span
                onClick={decreaseQuantity}
                className="cursor-pointer text-red-500 text-xl font-bold"
              >
                -
              </span>
              <input
                type="text"
                value={quantity}
                className="w-12 text-center border border-gray-300 rounded"
                readOnly
              />
              <span
                onClick={increaseQuantity}
                className="cursor-pointer text-green-500 text-xl font-bold"
              >
                +
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
