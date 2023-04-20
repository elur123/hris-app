import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import DataTable from '@/Components/DataTable';
import { Head } from '@inertiajs/react';

export default function Branch(props) {
    const columns = ['Branch name', 'Address', 'Contact #', 'Num. Departments', 'Created At', 'Updated At', 'Actions'];
    const mapping = {
        name: 'Branch name',
        address: 'Address',
        contact_no: 'Contact #',
        departments_count: 'Num. Departments',
        created_at: 'Created At',
        updated_at: 'Updated At',
        action: 'Actions'
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Branch</h2>}
        >
            <Head title="Branch" />

            <Card>
                <CardHeader className='p-3 flex justify-between items-center'>
                    <h3 className="text-gray-900">Branch List</h3>
                    <ButtonLink href={route('branches.create')} className='bg-green-500 hover:text-white hover:bg-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New Branch
                    </ButtonLink>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <DataTable
                            columns={columns}
                            data={props.branches}
                            mapping={mapping}
                        />
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
