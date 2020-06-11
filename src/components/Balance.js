import React, { Fragment, useContext } from 'react';

import { Context } from '../context/GlobalContext';

const Balance = () => {
  const { transactions } = useContext(Context);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </Fragment>
  );
};

export default Balance;
