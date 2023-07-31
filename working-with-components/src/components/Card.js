import { ExpenseItem } from "./ExpenseItem"
import "./Card.css"

export const Card = (probs)=>{
    console.log(probs.className);

    const classes = 'card ' + probs.className;

    return(
        <div className={classes}>{probs.children}</div>
    )
}