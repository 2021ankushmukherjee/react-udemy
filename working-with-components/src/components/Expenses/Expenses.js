import { Card } from "../UI/Card"
import { ExpenseItem } from "./ExpenseItem"
import "./Expenses.css"

export const Expenses = (probs) => {
    console.log(probs.data)
    return (
        <Card className="expenses">
            <ExpenseItem expense={probs.data[0]} />
            <ExpenseItem expense={probs.data[1]} />
            <ExpenseItem expense={probs.data[2]} />
        </Card>
    )
}