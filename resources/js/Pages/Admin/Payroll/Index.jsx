import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import ButtonLink from '@/Components/ButtonLink'
import DataTable from '@/Components/DataTable';
import { Head } from '@inertiajs/react';

export default function Payrolls(props) {
    const columns = ['Cut off', 'Branch', 'Total', 'Status', 'Prepared by', 'Checked by', 'Actions'];
    const mapping = {
        cut_off: 'Cut off',
        branch: 'Branch',
        total_pay: 'Total',
        status: 'Status',
        admin_prepared: 'Prepared by',
        admin_checked: 'Checked by',
        action: 'Actions'
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payroll</h2>}
        >
            <Head title="Payroll" />

            <Card>
                <CardHeader className='p-4 flex justify-between items-center'>
                    <h3 className="text-gray-900">Payroll List</h3>
                    <ButtonLink href={route('payrolls.create')} className='bg-green-500 hover:text-white hover:bg-green-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New Payroll
                    </ButtonLink>
                </CardHeader>
                <CardBody>
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <DataTable 
                            columns={columns}
                            mapping={mapping}
                            data={props.payrolls}
                        />
                    </div>
                </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
