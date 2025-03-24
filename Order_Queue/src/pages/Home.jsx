import React, { useState, useEffect } from "react";
import axios from "axios";
import { useOrder } from "./OrderContext"; 
import Card from "../pages/Card"; 
import UserCard from "../pages/UserCard";
import { CiSearch } from "react-icons/ci";
import Choices from "../pages/Choices";
import { MdFreeBreakfast } from "react-icons/md";
import { GiSushis } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { MdNoDrinks } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { GiNoodles } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
function Home() {
  const { orderDetails, handleAddToOrder, handleRemoveFromOrder } = useOrder(); 
  const [cards, setCards] = useState([]);
 const [orderItems, setOrderItems] = useState([]); 

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=6")
      .then((response) => {
        setCards(response.data.recipes);
      })
      .catch((error) => console.error("Error fetching food data:", error));
  }, []);

 const addToOrder = (card, quantity) => {
   setOrderItems((prevItems) => {
     const existingItem = prevItems.find((item) => item.id === card.id);
     if (existingItem) {
       return prevItems.map((item) =>
         item.id === card.id
           ? { ...item, quantity: item.quantity + quantity }
           : item
       );
     } else {
       return [...prevItems, { ...card, quantity }];
     }
   });
 };
 const users = [
   { name: "John Doe", id: "12345", status: "Ready" },
   { name: "Jane Smith", id: "67890", status: "In Kitchen" },
   { name: "Alice Johnson", id: "11223", status: "Ready" },
 ];
 const choices = [
   {
     items: "72 items",
     type: "Breakfast",
     Icon: <MdFreeBreakfast color="brown" size={"25px"} />,
   },
   {
     items: "20 items",
     type: "Sushi",
     Icon: <GiSushis color="brown" size={"25px"} />,
   },
   {
     items: "24 items",
     type: "Side Dish",
     Icon: <LuVegan color="brown" size={"25px"} />,
   },
   {
     items: "32 items",
     type: "Beverages",
     Icon: <MdNoDrinks color="brown" size={"25px"} />,
   },
   {
     items: "32 items",
     type: "Rice Bowl",
     Icon: <CiBowlNoodles color="brown" size={"25px"} />,
   },
   {
     items: "24 items",
     type: "pasta",
     Icon: <GiNoodles color="brown" size={"25px"} />,
   },
 ];
  return (
    <section className="flex">
      <div className="container w-3/4">
        <div className="border p-3 rounded-md top-0 border-gray-200 m-1">
          <h2 className="text-2xl font-semibold mb-4">Order Queue</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {users.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </div>
        </div>
        <div className="border p-3 rounded-md top-0 border-gray-200 m-1">
          <div className="my-6 flex relative w-full">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full p-2 pl-10 border border-gray-300 rounded-md"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="border p-3 rounded-md top-0 border-gray-200 m-1">
          <div>
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
              {choices.map((choice, index) => (
                <Choices key={index} {...choice} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-4">Most Ordered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.name}
                  description={card.description}
                  price={card.price}
                  onAddToOrder={() => handleAddToOrder(card)} 
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-4">Popular Dishes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.name}
                  description={card.description}
                  price={card.price}
                  onAddToOrder={() => handleAddToOrder(card)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 w-1/4 flex flex-col justify-between">
        <h2 className="text-2xl font-semibold">Order Details</h2>
        <small>#ORD-3291</small>

        <div className="mt-4">
          <h3 className="font-semibold">Items Ordered:</h3>
          {orderDetails.length === 0 ? (
            <p className="text-gray-500">No items added</p>
          ) : (
            orderDetails.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 mr-3"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500">
                      {item.quantity} x ${item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">
                    ${(item.quantity * item.price).toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleRemoveFromOrder(item.title)}
                    className="ml-4 text-red-500"
                  >
                    <MdDelete size={"25px"}/>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-col mt-auto">
          <div className="flex justify-between text-gray-600 mb-2">
            <small>Subtotal</small>
            <span>
              $
              {orderDetails
                .reduce((total, item) => total + item.quantity * item.price, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <small>Tax (10%)</small>
            <span>
              $
              {(
                orderDetails.reduce(
                  (total, item) => total + item.quantity * item.price,
                  0
                ) * 0.1
              ).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between font-bold mb-4">
            <small>Total</small>
            <span>
              $
              {(
                orderDetails.reduce(
                  (total, item) => total + item.quantity * item.price,
                  0
                ) * 1.1
              ).toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Pay
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
