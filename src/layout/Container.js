import React from "react";
import styles from "../styles/Custom.module.css";

export default function Container({ children, className }) {
    return (
        <div className={`${styles.container} box ${className}`}>{children}</div>
    );
}
