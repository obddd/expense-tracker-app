import React, { Fragment, useState, useContext } from 'react';

import { Context } from '../context/GlobalContext';

const AddTransaction = () => {
  const { addTransaction, transactions } = useContext(Context);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const submitForm = (event) => {
    event.preventDefault();
    const newTransaction = {
        id: transactions.length + 1,
        text,
        amount: parseInt(amount)
    }
    addTransaction(newTransaction)
  };
  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;
