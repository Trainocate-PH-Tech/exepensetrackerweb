import React from "react";

export default Preview = ({ expenseItem }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Content
                        </th>
                        <td>
                            {expenseItem.content}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Amount
                        </th>
                        <td>
                            {expenseItem.amount}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Category
                        </th>
                        <td>
                            {expenseItem.category}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}