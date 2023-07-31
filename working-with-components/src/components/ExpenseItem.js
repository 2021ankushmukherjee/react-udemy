import "./ExpenseItem.css";

export const ExpenseItem = (probs) => {

    return (
        <div className="expense-item">
            <div className="">{probs.expenseDate}</div>
            <div className="expense-item__description">
                <h2>{probs.expenseTitle}</h2>
                <div className="expense-item__price">₹{probs.expensePrice}</div>
            </div>
        </div>
    );
}