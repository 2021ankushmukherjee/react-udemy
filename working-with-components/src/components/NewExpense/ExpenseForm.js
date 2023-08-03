import React, { useState } from "react";
import "./ExpenseForm.css"

export const ExpenseForm = () => {

    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [changeDate, setChangeDate] = useState("");

    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    })

    const titleChangeHandeler = (e) => {
        setUserInput({
            ...userInput,    //  copy all the key value pairs & add to this new objects
            enteredTitle: e.target.value
        })
    }

    const amountChangeHandeler = (e) => {
        setUserInput({
            ...userInput,
            enteredAmount: e.target.value
        })
    }

    const dateChangeHandeler = (e) => {
        setUserInput({
            ...userInput,
            enteredDate: e.target.value
        })
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