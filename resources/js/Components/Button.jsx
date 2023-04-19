export default function Button({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `text-center border border-transparent uppercase transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
