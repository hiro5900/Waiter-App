import React from 'react';
import Table1 from './Tables/Table1';
import Table2 from './Tables/Table2';
import Table3 from './Tables/Table3';

const Orders = (props) => {
     return (
          <>
               <h2>Orders</h2>
               <Table1 orders={props.orders}/>
               <Table2 orders={props.orders}/>
               <Table3 orders={props.orders}/>
          </>
     );
};

export default Orders;