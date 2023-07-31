
import './App.css';
import { ExpenseItem } from './components/ExpenseItem';

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
      <h1>Hello</h1>
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
    </div>
  );
}

export default App;
