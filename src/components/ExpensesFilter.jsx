import React from 'react'

const ExpensesFilter = (props) => {
  const expensesFilterHandler = (e) => {
    props.setYear(e.target.value)
  }

  return (
    <div>
      <label>Filter by year</label>
      <select onChange={expensesFilterHandler}>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022' selected>2022</option>
        <option value='2023'>2023</option>
      </select>
    </div>
  );
}

export default ExpensesFilter