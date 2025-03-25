# Order Management System
This project is a React-based Order Management System for tracking orders, including adding, removing, and viewing details about orders. The system allows users to place orders, view order details, and adjust quantities. It is implemented using React, Context API, and Axios for data fetching.

## Features
->Add items to order: Users can add food items to the order.
->Remove items: Items can be removed from the order list.
->Quantity adjustments: Users can increase or decrease the quantity of items in the order.
->Order Queue: Displays a list of orders along with their status (Ready, In Kitchen).
->Order Details: Shows a list of items in the order, including their quantity and price.

Technologies Used
React: For building the user interface.
Context API: For managing global state (order details).
Axios: For fetching food data from an external API (https://dummyjson.com/recipes).
CSS/Tailwind: For styling the application.

## Setup
1. Clone the repository
git clone https://github.com/your-username/order-management-system.git
cd order-management-system
2. Install dependencies
npm install
3. Run the application
npm start
This will start the app in development mode at http://localhost:3000.

 ## How It Works
Order Context
The order details are managed in a global state using React's Context API. The OrderProvider component provides the state and functions like handleAddToOrder and handleRemoveFromOrder to the rest of the app.

Adding Items
When an item is added to the order, it either increments the quantity if the item already exists in the order or adds a new item to the order with a quantity of 1.

Removing Items
If a user clicks the delete button, the item is removed from the order if the quantity is 1. If the quantity is greater than 1, the quantity will decrease by 1 instead of removing the item entirely.

Order Queue
The Order Queue section displays a list of users (representing different order statuses like "Ready" or "In Kitchen"). This part can be extended to display real order statuses dynamically.

Order Details
The Order Details section lists all items in the order, showing the item's image, title, quantity, and price. It also calculates and displays the subtotal, tax, and total price.