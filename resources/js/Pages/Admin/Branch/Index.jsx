import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import Table from '@/Components/Table'
import TableHead from '@/Components/TableHead'
import TableBody from '@/Components/TableBody'
import { Head } from '@inertiajs/react';

export default function Branch(props) {
    const branchData = props.branches.length ?
        props.branches.map((branch) => 
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={branch.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    { branch.name }
                </th>
                <td className="px-6 py-4">
                    { branch.address }
                </td>
                <td className="px-6 py-4">
                    { branch.contact_no }
                </td>
                <td className="px-6 py-4">
                    { branch.departments_count }
                </td>
                <td className="px-6 py-4">
                    { branch.created_at }
                </td>
                <td className="px-6 py-4">
                    { branch.updated_at }
                </td>
                <td className="px-6 py-4">
                    <ButtonLink href={ branch.actions.edit } className='bg-green-500 hover:text-white hover:bg-green-400'>
                        Edit
                    </ButtonLink>
                </td>
            </tr>
        ) : 
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th colSpan={7} scope="row" className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">No branch data</th>
        </tr>

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Branch</h2>}
        >
            <Head title="Branch" />

            <Card>
                <CardHeader className='p-6 flex justify-between content-center'>
                    <h3 className="text-gray-900">Branch List</h3>
                    <ButtonLink href={route('branches.create')} className='bg-green-500 hover:text-white hover:bg-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New Branch
                    </ButtonLink>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Table>
                            <TableHead>
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Branch name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Contact #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        # Departments
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
                                { branchData }
                            </TableBody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
