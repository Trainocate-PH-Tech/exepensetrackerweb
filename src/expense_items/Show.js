import React from "react";
import { useParams } from "react-router-dom";

export default Show = () => {
    let {
        id
    } = useParams();

    return (
        <div>
            Expense Item Show Page {id}
        </div>
    )
}