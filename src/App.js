import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      // localStorage.removeItem("order");
      const item = localStorage.getItem("order");
      if (item) {
        setOrders(JSON.parse(item));
      }
    } catch (error) {
      console.error("Error parsing item from localStorage:", error);
    }
  }, []);

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const handleDelete = (id) => {
    const newOrders = orders.filter((order) => order.uniqueOrderID !== id);
    setOrders(newOrders);
    localStorage.setItem("order", JSON.stringify(newOrders));
  };

  return (
    <div className="App">
      <Navbar />
      <InputForm addOrder={addOrder} />
      <Orders orders={orders} onDelete={handleDelete} />
    </div>
  );
}

export default App;
