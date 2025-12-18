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

export const getExpenseItem = (id) => {
    return axios.get(
        `${API_BASE_URL}/expense_items/${id}`
    )
}

export const saveExpenseItem = (expenseItem) => {
    if (expenseItem.id) {
        // Update
        return axios.put(
            `${API_BASE_URL}/expense_items/${expenseItem.id}`,
            expenseItem
        )
    } else {
        // Create
        return axios.post(
            `${API_BASE_URL}/expense_items`,
            expenseItem
        )
    }
}