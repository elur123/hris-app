import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import Table from '@/Components/Table'
import TableHead from '@/Components/TableHead'
import TableBody from '@/Components/TableBody'
import { Head } from '@inertiajs/react';

export default function Employee(props) {
    const employeeData = props.employees.length ? 
        props.employees.map((employee) => 
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={employee.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    { employee.name }
                </th>
                <td className="px-6 py-4">
                    { employee.created_at }
                </td>
                <td className="px-6 py-4">
                    { employee.created_at }
                </td>
                <td className="px-6 py-4">
                    { employee.created_at }
                </td>
                <td className="px-6 py-4">
                    { employee.created_at }
                </td>
                <td className="px-6 py-4">
                    { employee.created_at }
                </td>
                <td className="px-6 py-4">
                    { employee.updated_at }
                </td>
                <td className="px-6 py-4">
                    <ButtonLink href={ employees.actions.edit } className='bg-green-500 hover:text-white hover:bg-green-400'>
                        Edit
                    </ButtonLink>
                </td>
            </tr>
        ) : 
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th colSpan={8} scope="row" className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">No employee data</th>
        </tr>

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employee</h2>}
        >
            <Head title="Employee" />

            <Card>
                <CardHeader className='p-6 flex justify-between content-center'>
                    <h3 className="text-gray-900">Employee List</h3>
                    <ButtonLink href={route('employees.create')} className='bg-green-500 hover:text-white hover:bg-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New Employee
                    </ButtonLink>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Table>
                            <TableHead>
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Employee name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Branch
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Department
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Updated At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                { employeeData }
                            </TableBody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
