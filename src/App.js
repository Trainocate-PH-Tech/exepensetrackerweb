import React from "react";
import { DEFAULT_EXPENSE_ITEM } from "./models";
import Preview from "./Preview";
import ExpenseItemsIndex from "./expense_items/Index";
import ExpenseItemsForm from "./expense_items/Form";

export default App = () => {
    const [expenseItem, setExpenseItem] = React.useState(DEFAULT_EXPENSE_ITEM);

    return (
        <div className="container">
            <ExpenseItemsIndex/>
            <hr/>
            <ExpenseItemsForm
                expenseItem={expenseItem}
                setExpenseItem={setExpenseItem}
            />
            <hr/>
            <Preview
                expenseItem={expenseItem}
            />
        </div>
    )
}