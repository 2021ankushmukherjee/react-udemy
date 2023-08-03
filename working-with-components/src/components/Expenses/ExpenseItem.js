import React , {useState} from "react";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = (probs) => {

   // const [title, setTitle ] = useState();

    return (
        <Card className="expense-item">
            <ExpenseDate date={probs.expense.date} />
            <div className="expense-item__description">
                <h2>{probs.expense.title}</h2>
                <div className="expense-item__price">₹{probs.expense.amount}</div>
            </div>
        </Card>
    );
}