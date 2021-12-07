import React from "react";

export default function Modal({
    children,
    isOpen = false,
    onClose = () => {},
}) {
    return (
        <div className={`modal ${isOpen ? "is-active" : ""}`}>
            <div className="modal-background" />
            <div className="modal-content">{children}</div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={onClose}
            ></button>
        </div>
    );
}
