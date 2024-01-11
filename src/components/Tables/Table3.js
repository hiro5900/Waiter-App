import React from "react";

const Table1 = (props) => {
  const renderOrderList = () =>
    props.orders
      ?.filter((order) => order.table === 3)
      .map((order) => (
        <div key={Math.random()}>
          <li key={Math.random()}>
            Unique Order ID: {order.uniqueOrderID} - Price: Rs{order.price} -
            Dish: {order.dish} - Table: {order.table}
          </li>
          <button onClick={() => props.onDelete(order.uniqueOrderID)}>
            Delete
          </button>
        </div>
      ));

  return (
    <div>
      <h3>Table 3</h3>
      {renderOrderList()}
    </div>
  );
};

export default Table1;
