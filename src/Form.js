import React from "react";

export default Form = ({ expenseItem, setExpenseItem }) => {
    return (
        <div>
            <input
                value={expenseItem.content}
                onChange={(event) => {
                    // additional logic
                    setExpenseItem({...expenseItem,
                        content: event.target.value
                    })
                }}
            />

            <input
                value={expenseItem.amount}
                type="number"
                onChange={(event) => {
                    // additional logic
                    setExpenseItem({...expenseItem,
                        amount: event.target.value
                    })
                }}
            />

            <select
                value={expenseItem.category}
                onChange={(event) => {
                    setExpenseItem({...expenseItem,
                        category: event.target.value
                    })
                }}
            >
                <option value="">--SELECT--</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Others">Others</option>
            </select>
        </div>
    )
}