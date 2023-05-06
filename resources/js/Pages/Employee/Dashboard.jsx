import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardWidget from '@/Components/CardWidget';
import ButtonLink from '@/Components/ButtonLink';

export default function EmployeeDashboard(props) {

    console.log(props.data.attendance_log);
    
    const attendance_log = props.data.attendance_log === null 
    ? <div className="p-4 grid grid-cols-1">
        <CardWidget className="bg-green-400">
            <p className="mb-2 text-xl font-bold">You don't sign in today.</p>
            <ButtonLink href={route('clock.index')} className='bg-green-600 hover:text-white hover:bg-green-500'>
                Sign in
            </ButtonLink>
        </CardWidget>
     </div>
    : <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardWidget className="bg-green-400">
            <p className="mb-2 text-3xl font-bold">{props.data.attendance_log.sign_in}</p>
            <p className="text-xl font-bold">Sign in</p>
        </CardWidget>
        <CardWidget className="bg-yellow-400">
            <p className="mb-2 text-3xl font-bold">{props.data.attendance_log.sign_out ?? 'Not yet sign out'}</p>
            <p className="text-xl font-bold">Sign out</p>
        </CardWidget>
    </div>

    return (
        <AuthenticatedLayout
            auth={props.data.auth}
            errors={props.data.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 mb-2">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <CardWidget className="bg-green-400">
                                <p className="mb-2 text-3xl font-bold">{props.data.branch_count}</p>
                                <p className="text-xl font-bold">Total Branch</p>
                            </CardWidget>
                            <CardWidget className="bg-yellow-400">
                                <p className="mb-2 text-3xl font-bold">{props.data.department_count}</p>
                                <p className="text-xl font-bold">Total Department</p>
                            </CardWidget>
                            <CardWidget className="bg-red-400">
                                <p className="mb-2 text-3xl font-bold">{props.data.employee_count}</p>
                                <p className="text-xl font-bold">Total Employees</p>
                            </CardWidget>
                            <CardWidget className="bg-green-400">
                                <p className="mb-2 text-3xl font-bold">{props.data.attendance_count}</p>
                                <p className="text-xl font-bold">Today Attendance</p>
                            </CardWidget>
                            <CardWidget className="bg-yellow-400">
                                <p className="mb-2 text-3xl font-bold">{props.data.overtime_count}</p>
                                <p className="text-xl font-bold">Total Overtime Requests</p>
                            </CardWidget>
                            <CardWidget className="bg-red-400">
                                <p className="mb-2 text-3xl font-bold">{props.data.leave_count}</p>
                                <p className="text-xl font-bold">Total Leave Requests</p>
                            </CardWidget>
                            <CardWidget className="bg-green-400">
                                <p className="mb-2 text-3xl font-bold">{props.data.payroll_count}</p>
                                <p className="text-xl font-bold">Total Payroll</p>
                            </CardWidget>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h5 className="px-4 pt-3 text-2xl font-bold text-gray-900">Your attendance today</h5>
                        <div className="max-w-6xl mx-auto">
                            {attendance_log}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
