import React, { useState } from "react";
import "./ExpenseForm.css"

export const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    const inputChangeHandeler = (identifier, value) => {

        if (identifier === 'title') {
            setEnteredTitle(value);
        }
        else if (identifier === 'date') {
            setEnteredDate(value);
        }
        else {
            setEnteredAmount(value);
        }
    }

    const submitHandeler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandeler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Enter Expense Title" value={enteredTitle} onChange={(e) => inputChangeHandeler('title', e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" placeholder="Enter Amount" value={enteredAmount} min="0.01" step="0.01" onChange={(e) => inputChangeHandeler('number', e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={(e) => inputChangeHandeler('date', e.target.value)} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )

}