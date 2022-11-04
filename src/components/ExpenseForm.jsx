import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log("oki title");

  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    console.log("oki price");
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log("oki date");
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate('');

  };

  return (
    <form onSubmit={submitHandler} className='container' id='form'>
      <div>
        <label > Title </label>
        <input type="text"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
      </div>

      <div>
        <label> Price </label>
        <input type="number"
          min="0.01" step="0.01"
          onChange={priceChangeHandler}
          value={enteredPrice}
        />
      </div>

      <div>
        <label> Date </label>
        <input type="date"
          min="2022-09-01" max="2030-01-01"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
      </div>

      <button className='new-expense_actions' type="sumbit" > Dodaj nowy produkt </button>

    </form>

  );

}

export default ExpenseForm;