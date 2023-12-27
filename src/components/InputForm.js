import React, { useState, useEffect } from 'react';

const InputForm = (props) => {
     const [uniqueOrderID, setUniqueOrderID] = useState('');
     const [price, setPrice] = useState('');
     const [dish, setDish] = useState('');
     const [table, setTable] = useState('');

     // useEffect(() => {
     //      const savedUniqueOrderID = parseInt(localStorage.getItem('uniqueOrderID'), 10) || '';
     //      setUniqueOrderID(savedUniqueOrderID.toString());
     // }, []);

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
          if (!uniqueOrderID || !price || !dish || !table) {
               alert('Please fill in all fields');
               return;
          }

          const newOrder = {
               uniqueOrderID: parseInt(uniqueOrderID, 10),
               price: parseFloat(price),
               dish,
               table: parseInt(table, 10)
          };

          setUniqueOrderID((prevID) => (parseInt(prevID, 10) + 1).toString());

          // localStorage.setItem('uniqueOrderID', uniqueOrderID);

          setUniqueOrderID('');
          setPrice('');
          setDish('');
          setTable('');

          props.addOrder(newOrder);
     };
     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <label>Unique Order ID: </label>
                    <input
                         type='text'
                         placeholder='Write unique order ID'
                         value={uniqueOrderID}
                         onChange={handleUniqueOrderIDChange}
                    />
                    <br />
                    <label>Choose Price: </label>
                    <input
                         type='number'
                         placeholder='Write food item price'
                         value={price}
                         onChange={handlePriceChange}
                    />
                    <br />
                    <label>Choose Dish: </label>
                    <input
                         type='text'
                         placeholder='Write food item name'
                         value={dish}
                         onChange={handleDishChange}
                    />
                    <br />
                    <label>Choose Table: </label>
                    <input
                         type='number'
                         placeholder='Write table number'
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