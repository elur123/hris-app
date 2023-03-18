import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import Table from '@/Components/Table'
import TableHead from '@/Components/TableHead'
import TableBody from '@/Components/TableBody'
import { Head } from '@inertiajs/react';

export default function Department(props) {
    const departmentData = props.departments.map((department) => 
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={department.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { department.name }
            </th>
            <td className="px-6 py-4">
                { department.created_at }
            </td>
            <td className="px-6 py-4">
                { department.updated_at }
            </td>
            <td className="px-6 py-4">
                <ButtonLink href={ department.actions.edit } className='bg-green-500 hover:text-white hover:bg-green-400'>
                    Edit
                </ButtonLink>
            </td>
        </tr>
    )

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Department</h2>}
        >
            <Head title="Department" />

            <Card>
                <CardHeader className='p-6 flex justify-between content-center'>
                    <h3 className="text-gray-900">Department List</h3>
                    <ButtonLink href={route('departments.create')} className='bg-green-500 hover:text-white hover:bg-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New Department
                    </ButtonLink>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Table>
                            <TableHead>
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Department name
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
                                { departmentData }
                            </TableBody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
