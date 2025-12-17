import React from "react";

export default Footer = ({ item, setItem }) => {
    return (
        <div>
            <input
                value={item.content}
                onChange={(event) => {
                    setItem({...item,
                        content: event.target.value
                    });
                }}
            />
        </div>
    )
}