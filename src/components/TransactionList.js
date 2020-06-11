import React, { Fragment, useContext } from 'react';
import Transaction from '../components/Transaction';

import { Context } from '../context/GlobalContext';

const TransactionList = () => {
  const { transactions } = useContext(Context);
  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TransactionList;
