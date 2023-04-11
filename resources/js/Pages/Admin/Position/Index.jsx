import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import Table from '@/Components/Table'
import TableHead from '@/Components/TableHead'
import TableBody from '@/Components/TableBody'
import { Head } from '@inertiajs/react';

export default function Positions(props) {
    const positionData = props.positions.length ?  
        props.positions.map((pos) => 
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={pos.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    { pos.label }
                </th>
                <td className="px-6 py-4">
                    { pos.created_at }
                </td>
                <td className="px-6 py-4">
                    { pos.updated_at }
                </td>
                <td className="px-6 py-4">
                    <ButtonLink href={ pos.actions.edit } className='bg-green-500 hover:text-white hover:bg-green-400'>
                        Edit
                    </ButtonLink>
                </td>
            </tr>
        ) : 
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th colSpan={4} scope="row" className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">No position data</th>
        </tr>

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Positions</h2>}
        >
            <Head title="Positions" />

            <Card>
                <CardHeader className='p-6 flex justify-between content-center'>
                    <h3 className="text-gray-900">Positions List</h3>
                    <ButtonLink href={route('positions.create')} className='bg-green-500 hover:text-white hover:bg-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New Position
                    </ButtonLink>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Table>
                            <TableHead>
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Position name
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
                                { positionData }
                            </TableBody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
