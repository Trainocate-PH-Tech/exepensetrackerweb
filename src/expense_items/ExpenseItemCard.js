import React from "react";

export default ExpenseItemCard = ({ expenseItem }) => {
    return (
        <div>
            <h1>
                ID: {expenseItem.id}
            </h1>
            <h2>
                {expenseItem.content} - {expenseItem.amount}
            </h2>
            <h3>
                {expenseItem.category}
            </h3>
        </div>
    )
}