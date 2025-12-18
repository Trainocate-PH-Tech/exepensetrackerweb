import React from "react";
import ExpenseItemForm from "./Form";
import Preview from "./Preview";
import { DEFAULT_EXPENSE_ITEM } from "../models";
import { useParams } from "react-router-dom";
import { getExpenseItem } from "../services/ExpenseItemsService";

export default FormContainer = () => {
    const [expenseItem, setExpenseItem] = React.useState(DEFAULT_EXPENSE_ITEM);

    let {
        id
    } = useParams();

    React.useEffect(() => {
        if (id) {
            // Fetch the existing expense item
            getExpenseItem(id).then((payload) => {
                setExpenseItem(payload.data);
            })
        }
    }, [])

    return (
        <div className="row">
            <div className="col">
                <ExpenseItemForm
                    expenseItem={expenseItem}
                    setExpenseItem={setExpenseItem}
                />
            </div>
            <div className="col">
                <Preview
                    expenseItem={expenseItem}
                />
            </div>
        </div>
    )
}