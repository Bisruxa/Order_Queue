import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState([]);
  const handleAddToOrder = (item) => {
    setOrderDetails((prevOrderDetails) => {
      const itemKey = `${item.title}-${item.image}`;

      const existingItemIndex = prevOrderDetails.findIndex(
        (orderItem) => `${orderItem.title}-${orderItem.image}` === itemKey
      );

      if (existingItemIndex !== -1) {
        const updatedOrder = [...prevOrderDetails];
        updatedOrder[existingItemIndex].quantity += 1;
        return updatedOrder;
      } else {
        return [
          ...prevOrderDetails,
          { ...item, quantity: 1 }, 
        ];
      }
    });
  };
  const handleRemoveFromOrder = (itemTitle) => {
    setOrderDetails((prevOrderDetails) =>
      prevOrderDetails.filter((item) => item.title !== itemTitle)
    );
  };
  return (
    <OrderContext.Provider
      value={{ orderDetails, handleAddToOrder, handleRemoveFromOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
