import axios from "axios";

export const getExpenseItems = () => {
    return axios.get(
        `${API_BASE_URL}/expense_items`
    )
}

export const deleteExpenseItem = (id) => {
    return axios.delete(
        `${API_BASE_URL}/expense_items/${id}`
    );
}