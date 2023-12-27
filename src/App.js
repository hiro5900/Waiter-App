import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Navbar from './components/Navbar'
import Orders from './components/Orders';

function App() {
  const [orders, setOrders] = useState([{
    uniqueOrderID: 1,
    price: 1,
    dish: 'Fries',
    table: 1
  },
  {
    uniqueOrderID: 2,
    price: 1,
    dish: 'Fries',
    table: 2
  }, {
    uniqueOrderID: 3,
    price: 1,
    dish: 'Fries',
    table: 3
  }])

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };
  return (
    <div className="App">
      <Navbar />
      <InputForm addOrder={addOrder} />
      <Orders orders={orders} />
    </div>
  );
}

export default App;
