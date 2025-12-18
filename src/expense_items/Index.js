import React from "react";
import { getExpenseItems, deleteExpenseItem } from "../services/ExpenseItemsService";
import ExpenseItemCard from "./ExpenseItemCard";
import ConfirmationModal from "../commons/ConfirmationModal";

export default Index = () => {
    const [expenseItems, setExpenseItems] = React.useState([]);
    const [deleteId, setDeleteId] = React.useState(null);
    const [isDeleteConfirmShow, setIsDeleteConfirmShow] = React.useState(false);

    React.useEffect(() => {
        refreshItems();
    }, [])

    const refreshItems = () => {
        getExpenseItems().then((payload) => {
            console.log(payload);
            setExpenseItems(payload.data);
            setIsDeleteConfirmShow(false);
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

    return (
        <div>
            <ConfirmationModal
                show={isDeleteConfirmShow}
                setShow={setIsDeleteConfirmShow}
                message={`Are you sure you want to delete item ${deleteId}?`}
                handleConfirm={handleDeleteConfirm}
            />
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