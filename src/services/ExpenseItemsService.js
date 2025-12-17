import axios from "axios";

export const getExpenseItems = () => {
    return axios.get(
        "http://localhost:3000/expense_items"
    )
}