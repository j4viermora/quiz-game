import React from "react";

export default function Notifications({ children, isDelete }) {
    return (
        <div className="notification is-link">
            {isDelete && <button className="delete"></button>}
            {children}
        </div>
    );
}
