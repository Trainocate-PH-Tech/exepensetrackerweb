import React from "react";
import { getExpenseItems } from "../services/ExpenseItemsService";
import ExpenseItemCard from "./ExpenseItemCard";

export default Index = () => {
    const [expenseItems, setExpenseItems] = React.useState([]);

    React.useEffect(() => {
        getExpenseItems().then((payload) => {
          console.log(payload);
          setExpenseItems(payload.data);
        })
    }, [])

    return (
        <div>
            {expenseItems.map((expenseItem) => {
                return (
                    <ExpenseItemCard 
                        expenseItem={expenseItem}
                    />
                )
            })}
        </div>
    )
}