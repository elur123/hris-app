export default function CardHeader({ children, className }) {
    return (
        <div className={'card-header border-b border-gray-300 ' + className}>
            {children}
        </div>
    )
}