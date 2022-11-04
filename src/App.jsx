import './App.css'
import ExpenseItem from './components/ExpenseItem'
import NewExpense from './components/NewExpense'
import ExpensesFilter from './components/ExpensesFilter'
import React, { useState } from 'react'
const init_data = [
  { id: "1", title: "Papier toaletowy", price: 3, date: new Date(2022, 10, 10) },
  { id: "2", title: "Koks", price: 5000, date: new Date(2021, 12, 12) },
  { id: "3", title: "Mocny Full export", price: 7, date: new Date(2020, 6, 11) },
];

export default function App() {

  const [expenses, setExpenses] = useState(init_data);
  const [year, setYear] = useState('2022')

  
  const addExpenseHandler = (expense) => {
    setExpenses(prevexpense => [expense, ...prevexpense]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter setYear={setYear}/>
      <h2>Zaczynamy</h2>
      {
        expenses.filter((e) => {
          return e.date.getFullYear().toString() === year
        }).map((expense) => <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
        )
      }
    </div>
  )
}
