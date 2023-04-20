import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import Table from '@/Components/Table'
import TableHead from '@/Components/TableHead'
import TableBody from '@/Components/TableBody'
import DataTable from '@/Components/DataTable';
import { Head } from '@inertiajs/react';

export default function Department(props) {
    const columns = ['Department Name', 'Created at', 'Updated at', 'Actions'];

    const mapping = {
        name: 'Department Name',
        created_at: 'Created at',
        updated_at: 'Updated at',
        action: 'Actions'
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Department</h2>}
        >
            <Head title="Department" />

            <Card>
                <CardHeader className='p-4 flex justify-between items-center'>
                    <h3 className="text-gray-900">Department List</h3>
                    <ButtonLink href={route('departments.create')} className='bg-green-500 hover:text-white hover:bg-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New Department
                    </ButtonLink>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        
                        <DataTable 
                            columns={columns}
                            data={props.departments}
                            mapping={mapping}
                        />
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
