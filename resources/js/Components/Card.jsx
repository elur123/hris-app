export default function Card({ children, className }) {
    return (
        <div className="py-12">
            <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div className={'bg-white shadow-sm sm:rounded-lg ' + className}>
                    { children }
                </div>
            </div>
        </div>
    )
}