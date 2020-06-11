import React, { useContext } from 'react';

import { Context } from '../context/GlobalContext'

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(Context)
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={sign === '+' ? 'plus' : 'minus'}>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
