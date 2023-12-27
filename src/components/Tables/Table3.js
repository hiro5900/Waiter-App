import React from 'react';

const Table3 = (props) => {
     const table1Orders = props.orders.filter((order) => order.table === 3)

     const orderList = table1Orders.map((order) => (
          <li key={order.uniqueOrderID}>Unique Order ID: {order.uniqueOrderID} - Price: Rs{order.price} - Dish: {order.dish} - Table: {order.table}</li>
     ))
     return (
          <div>
               <h3>Table 3</h3>
               {orderList}
          </div>
     );
}

export default Table3;