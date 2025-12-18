import React from "react";
import ExpenseItemsIndex from "./expense_items/Index";
import ExpenseItemsFormContainer from "./expense_items/FormContainer";
import ExpenseItemsShow from "./expense_items/Show";
import {
    Routes,
    Route
} from "react-router-dom";

export default App = () => {
    return (
        <div className="container">
            <Routes>
                <Route
                    path="/"
                    element={<ExpenseItemsIndex/>}
                />
                <Route
                    path="/expense_items/new"
                    element={<ExpenseItemsFormContainer/>}
                />
                <Route
                    path="/expense_items/:id"
                    element={<ExpenseItemsShow/>}
                />
            </Routes>
        </div>
    )
}