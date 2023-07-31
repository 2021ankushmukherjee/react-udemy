import { ExpenseItem } from "./ExpenseItem"
import "./Card.css"

export const Card = (probs) => {
  
    const classes = 'card ' + probs.className;

    return (
        <div className={classes}>{probs.children}</div>
    )
}