import { Link } from '@inertiajs/react';

export default function ButtonLink({ className = '', children, ...props }) {
    return (
        <Link 
            {...props}
            className={'inline-flex items-center px-2 py-1 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest ' + className}
        >
            {children}
        </Link>
    );
}
