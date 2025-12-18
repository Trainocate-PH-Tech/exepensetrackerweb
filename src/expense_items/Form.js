import React from "react";
import { saveExpenseItem } from "../services/ExpenseItemsService";
import { useNavigate } from "react-router-dom";

export default Form = ({ expenseItem, setExpenseItem }) => {

    const [isLoading, setIsLoading] = React.useState(false);

    const navigate = useNavigate();

    return (
        <div>
            <div className="form-group">
                <label>
                    Content
                </label>
                <input
                    value={expenseItem.content}
                    disabled={isLoading}
                    className="form-control"
                    onChange={(event) => {
                        // additional logic
                        setExpenseItem({...expenseItem,
                            content: event.target.value
                        })
                    }}
                />
            </div>

            <div className="form-group mt-4">
                <label>
                    Amount
                </label>
                <input
                    value={expenseItem.amount}
                    disabled={isLoading}
                    type="number"
                    className="form-control"
                    onChange={(event) => {
                        // additional logic
                        setExpenseItem({...expenseItem,
                            amount: event.target.value
                        })
                    }}
                />
            </div>
            
            <div className="form-group mt-4">
                <label>
                    Category
                </label>
                <select
                    value={expenseItem.category}
                    disabled={isLoading}
                    className="form-control"
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
            <hr/>
            <button
                className="btn btn-success"
                disabled={isLoading}
                onClick={() => {
                    setIsLoading(true);
                    saveExpenseItem(expenseItem).then((payload) => {
                        setIsLoading(false);
                        navigate(`/expense_items/${payload.data.id}`)
                    });
                }}
            >
                Save
            </button>
        </div>
    )
}