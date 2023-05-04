import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-cyan-700' +
                (active
                    ? ' bg-cyan-600 text-white '
                    : ' ') +
                className
            }
        >
            {children}
        </Link>
    );
}
