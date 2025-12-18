import React from "react";
import { useParams } from "react-router-dom";
import { getExpenseItem } from "../services/ExpenseItemsService";
import { DEFAULT_EXPENSE_ITEM } from "../models";
import { useNavigate } from "react-router-dom";

export default Show = () => {
    const [expenseItem, setExpenseItem] = React.useState(DEFAULT_EXPENSE_ITEM);
    const navigate = useNavigate();

    let {
        id
    } = useParams();

    React.useEffect(() => {
        getExpenseItem(id).then((payload) => {
            setExpenseItem(payload.data);
        })
    }, [id])

    return (
        <div>
            Expense Item: {expenseItem.content}
            <hr/>
            Amount: {expenseItem.amount}
            <hr/>
            Category: {expenseItem.category}
            <hr/>
            <button
                className="btn btn-secondary"
                onClick={() => {
                    navigate(`/expense_items`);
                }}
            >
                Go Back
            </button>
        </div>
    )
}