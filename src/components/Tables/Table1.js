import React, { useEffect } from 'react';

const Table1 = (props) => {
     // const { orders, onDeleteOrder } = props;

     // useEffect(() => {
     //      const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
     //      props.setOrders(savedOrders);
     // }, [props]);

     const table1Orders = props.orders.filter((order) => order.table === 1)

     // const handleDeleteOrder = (orderID) => {
     //      const updatedOrders = orders.filter((order) => order.uniqueOrderID !== orderID);
     //      setOrders(updatedOrders);
     //      localStorage.setItem('orders', JSON.stringify(updatedOrders));
     // };

     const orderList = table1Orders.map((order) => (
          <>
               <li key={order.uniqueOrderID}>Unique Order ID: {order.uniqueOrderID} - Price: Rs{order.price} - Dish: {order.dish} - Table: {order.table}</li>
               {/* <button onClick={() => handleDeleteOrder(order.uniqueOrderID)}>Delete</button> */}
          </>
     ))
     return (
          <div>
               <h3>Table 1</h3>
               {orderList}
          </div>
     );
}

export default Table1;