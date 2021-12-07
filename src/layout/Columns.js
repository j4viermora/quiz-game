export default function Columns(props) {
    const { children, className } = props;
    return (
        <div {...props} className={`columns ${className}`}>
            {children}
        </div>
    );
}
