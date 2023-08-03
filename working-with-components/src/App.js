import React from 'react';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';
import './App.css';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 6, 14)
    },
    {
      id: "e2",
      title: "Ac Service",
      amount: 1500,
      date: new Date(2020, 5, 14)
    },
    {
      id: "e3",
      title: "Car Service",
      amount: 2500,
      date: new Date(2020, 3, 14)
    },
    {
      id: "e4",
      title: "House Rent",
      amount: 12000,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e5",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e6",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
  ]

  return (
    <div>
      <NewExpense/>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
