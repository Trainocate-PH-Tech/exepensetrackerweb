import React from "react";
import { DEFAULT_EXPENSE_ITEM } from "./models";
import Form from "./Form";
import Preview from "./Preview";

export default App = () => {
    const [expenseItem, setExpenseItem] = React.useState(DEFAULT_EXPENSE_ITEM);

    return (
        <div>
            <Form
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