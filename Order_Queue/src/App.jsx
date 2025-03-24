// App.js or your main component
import React from "react";
import { OrderProvider } from "./pages/OrderContext"; 
import Home from "./pages/Home"; 

function App() {
  return (
    <OrderProvider>
      <Home />
    </OrderProvider>
  );
}

export default App;
