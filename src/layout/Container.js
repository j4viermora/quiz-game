import styles from "styles/custom.module.css";

export default function Container({ children, className }) {
    return (
        <div className={`${styles.container} box ${className}`}>{children}</div>
    );
}
