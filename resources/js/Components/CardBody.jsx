export default function CarBody({ children, className }) {
    return (
        <div className={'p-4 ' + className}>
            {children}
        </div>
    )
}