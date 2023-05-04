export default function CardWidget({ children, className }) {
    return (
        <div className={'w-full px-4 py-5 text-center rounded shadow-md ' + className}>
            { children }
        </div>
    )
}