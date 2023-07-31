
import './App.css';
import { ExpenseItem } from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e2",
      title: "Ac Service",
      amount: 1500,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e3",
      title: "Car Service",
      amount: 2500,
      date: new Date(2020, 7, 14)
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
      <ExpenseItem expenseDate={expenses[0].date.toISOString()} expenseTitle={expenses[0].title} expensePrice={expenses[0].amount} />
      <ExpenseItem expenseDate={expenses[1].date.toISOString()} expenseTitle={expenses[1].title} expensePrice={expenses[1].amount} />
      <ExpenseItem expenseDate={expenses[2].date.toISOString()} expenseTitle={expenses[2].title} expensePrice={expenses[2].amount} />
    </div>
  );
}

export default App;
