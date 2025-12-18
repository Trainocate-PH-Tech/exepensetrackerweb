import React from "react";
import { getExpenseItems, deleteExpenseItem } from "../services/ExpenseItemsService";
import ExpenseItemCard from "./ExpenseItemCard";
import ConfirmationModal from "../commons/ConfirmationModal";
import { useNavigate } from "react-router-dom";

export default Index = () => {
    const [expenseItems, setExpenseItems] = React.useState([]);
    const [deleteId, setDeleteId] = React.useState(null);
    const [isDeleteConfirmShow, setIsDeleteConfirmShow] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const navigate = useNavigate();

    React.useEffect(() => {
        refreshItems();
    }, [])

    const refreshItems = () => {
        getExpenseItems().then((payload) => {
            console.log(payload);
            setExpenseItems(payload.data);
            setIsDeleteConfirmShow(false);
            setIsLoading(false);
        })
    }

    const handleDelete = (expenseItem) => {
        console.log(`Trying to delete item ${expenseItem.id}`);
        setDeleteId(expenseItem.id);
        setIsDeleteConfirmShow(true);
    }

    const handleDeleteConfirm = () => {
        console.log(`Confirming deletion of ${deleteId}`);

        deleteExpenseItem(deleteId).then(() => {
            refreshItems();
        })
    }

    const renderItems = () => {
        if (isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else if (expenseItems.length == 0) {
            return (
                <p>
                    No items found.
                </p>
            )
        } else {
            return (
                <div>
                    {expenseItems.map((expenseItem) => {
                        return (
                            <div
                                key={`item-${expenseItem.id}`}
                                className="card mb-4"
                            >
                                <div className="card-body">
                                    <ExpenseItemCard
                                        expenseItem={expenseItem}
                                    />
                                </div>
                                <div className="card-footer">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            handleDelete(expenseItem);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            )
        }
    }

    return (
        <div>
            <ConfirmationModal
                show={isDeleteConfirmShow}
                setShow={setIsDeleteConfirmShow}
                message={`Are you sure you want to delete item ${deleteId}?`}
                handleConfirm={handleDeleteConfirm}
            />
            <button
                className="btn btn-success"
                onClick={() => {
                    navigate("/expense_items/new");
                }}
            >
                New Expense Item
            </button>
            {renderItems()}
        </div>
    )
}