import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import DataTable from '@/Components/DataTable';
import { Head } from '@inertiajs/react';

export default function Branch(props) {
    const columns = ['Employee', 'Branch', 'Time in', 'Time out', 'Actions'];
    const mapping = {
        fullname: 'Employee',
        branch: 'Branch',
        start_at: 'Time in',
        end_at: 'Time out',
        action: 'Actions'
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Attendance</h2>}
        >
            <Head title="Attendance" />

            <Card>
                <CardHeader className='p-4 flex justify-between items-center'>
                    <h3 className="text-gray-900">Attendance List</h3>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <DataTable
                            columns={columns}
                            data={props.attendances}
                            mapping={mapping}
                        />
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
