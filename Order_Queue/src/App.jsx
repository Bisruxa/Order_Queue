// App.js or your main component
import React from "react";
import { OrderProvider } from "./pages/OrderContext"; // Import the context provider
import Home from "./pages/Home"; // Your Home component

function App() {
  return (
    <OrderProvider>
      <Home />
    </OrderProvider>
  );
}

export default App;
