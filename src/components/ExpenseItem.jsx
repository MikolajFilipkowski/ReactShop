import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  // useState() --> [zmienną, funkcję]
  const [title, setTitle] = useState(props.title)

  // let title = props.title ;
  const clickHandler = () => {
    setTitle("NOW UPDATE");
    console.log(title);
  }



  return (
    <div className="container">
      <div className="description">
        <h2> {title} </h2>
        <div className="price">{props.price} PLN </div>
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <button onClick={clickHandler}>zmieniacz tytułu</button>
      </div>
    </div>
  );
}

export default ExpenseItem;