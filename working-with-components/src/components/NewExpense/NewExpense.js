import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import './NewExpense.css'

export const NewExpense = (probs) => {


    const saveExpenseDataHandeler = (enteredExpenseData) =>{

        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expenseData);
        probs.onAddExpense(expenseData);

    }

    return (
        <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} />
        </div>
    )
}