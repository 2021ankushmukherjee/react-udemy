import React, { useState } from "react";
import "./ExpenseForm.css"

export const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [changeDate, setChangeDate] = useState("");


    const titleChangeHandeler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandeler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandeler = (e) => {
        setChangeDate(e.target.value)
    }

    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandeler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandeler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandeler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )

}