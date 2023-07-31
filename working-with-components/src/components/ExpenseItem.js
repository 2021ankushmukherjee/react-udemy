import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = (probs) => {

    return (
        <div className="expense-item">
            <ExpenseDate date={probs.expense.date} />
            <div className="expense-item__description">
                <h2>{probs.expense.title}</h2>
                <div className="expense-item__price">₹{probs.expense.amount}</div>
            </div>
        </div>
    );
}