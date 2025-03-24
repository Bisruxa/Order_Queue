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
// if the items exists update the result
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
    setOrderDetails((prevOrderDetails) => {
      const itemIndex = prevOrderDetails.findIndex(
        (item) => item.title === itemTitle
      );

      if (itemIndex !== -1) {
        const updatedOrder = [...prevOrderDetails];

        if (updatedOrder[itemIndex].quantity > 1) {
          // Decrease quantity instead of deleting the item
          updatedOrder[itemIndex].quantity -= 1;
        } else {
          // Remove item completely if quantity is 1
          updatedOrder.splice(itemIndex, 1);
        }

        return updatedOrder;
      }

      return prevOrderDetails;
    });
  };

  return (
    <OrderContext.Provider
      value={{ orderDetails, handleAddToOrder, handleRemoveFromOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
