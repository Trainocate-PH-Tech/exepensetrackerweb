import React from "react";
import ExpenseItemForm from "./Form";
import Preview from "./Preview";
import { DEFAULT_EXPENSE_ITEM } from "../models";

export default FormContainer = () => {
    const [expenseItem, setExpenseItem] = React.useState(DEFAULT_EXPENSE_ITEM);

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