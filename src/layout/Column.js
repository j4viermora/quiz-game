export default function Column({ is = "", children }) {
    return <div className={`column ${is}`}>{children}</div>;
}
