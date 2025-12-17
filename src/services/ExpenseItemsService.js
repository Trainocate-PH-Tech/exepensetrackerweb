import axios from "axios";

export const getExpenseItems = () => {
    return axios.get(
        `${API_BASE_URL}/expense_items`
    )
}