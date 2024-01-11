import React, { useState } from "react";

const InputForm = (props) => {
  const [uniqueOrderID, setUniqueOrderID] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const handleUniqueOrderIDChange = (e) => {
    setUniqueOrderID(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleDishChange = (e) => {
    setDish(e.target.value);
  };
  const handleTableChange = (e) => {
    setTable(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!uniqueOrderID || !price || !dish || !table) {
        alert("Please fill in all fields");
        return;
      }

      const newOrder = {
        uniqueOrderID: parseInt(uniqueOrderID, 10),
        price: parseFloat(price),
        dish,
        table: parseInt(table, 10),
      };
      let items = localStorage.getItem("order");
      if (items) {
        items = JSON.parse(items);
      }

      if (!Array.isArray(items)) {
        items = [];
      }
      const storageItem = JSON.stringify([...items, newOrder]);
      localStorage.setItem("order", storageItem);
      setUniqueOrderID("");
      setPrice("");
      setDish("");
      setTable("");
      props.addOrder(newOrder);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Unique Order ID: </label>
        <input
          type="text"
          placeholder="Write unique order ID"
          value={uniqueOrderID}
          onChange={handleUniqueOrderIDChange}
        />
        <br />
        <label>Choose Price: </label>
        <input
          type="number"
          placeholder="Write fo12item price"
          value={price}
          onChange={handlePriceChange}
        />
        <br />
        <label>Choose Dish: </label>
        <input
          type="text"
          placeholder="Write food item name"
          value={dish}
          onChange={handleDishChange}
        />
        <br />
        <label>Choose Table: </label>
        <input
          type="number"
          placeholder="Write table number"
          value={table}
          onChange={handleTableChange}
        />
        <br />
        <button type="submit">Add to bill</button>
      </form>
    </div>
  );
};

export default InputForm;
