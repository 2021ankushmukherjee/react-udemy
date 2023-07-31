import "./ExpenseDate.css"

export const ExpenseDate = (probs) => {

    const month = probs.date.toLocaleString('en-IN', { month: 'long' });
    const year = probs.date.getFullYear();
    const day = probs.date.toLocaleString('en-IN', { day: '2-digit' });


    return (
        <div className="expense-date">
            <div className="expense-date_month">{month}</div>
            <div className="expense-date_year">{year}</div>
            <div className="expense-date_day">{day}</div>
        </div>
    )
}