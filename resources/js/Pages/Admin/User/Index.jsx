import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import DataTable from '@/Components/DataTable';
import { Head } from '@inertiajs/react';

export default function Users(props) {
    const columns = ['Name', 'Email', 'Role', 'Created At', 'Updated At', 'Actions'];
    const mapping = {
        name: 'Name',
        email: 'Email',
        role: 'Role',
        created_at: 'Created At',
        updated_at: 'Updated At',
        action: 'Actions'
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            <Card>
                <CardHeader className='p-4 flex justify-between items-center'>
                    <h3 className="text-gray-900">Users List</h3>
                    <ButtonLink href={route('users.create')} className='bg-green-500 hover:text-white hover:bg-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New User
                    </ButtonLink>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <DataTable 
                            columns={columns}
                            mapping={mapping}
                            data={props.users}
                        />
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
