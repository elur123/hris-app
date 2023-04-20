export default function CardFooter({ children, className }) {
    return (
        <div className={'card-footer p-4 border-t border-gray-300 ' + className}>
            {children}
        </div>
    )
}