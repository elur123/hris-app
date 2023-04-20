import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import Button from '@/Components/Button';

import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Create(props) {
    const [approveModal, showApproveModal] = useState(false);

    const [approvedHours, setApprovedHours] = useState(0)

    const { data, setData, errors, put, reset, processing } = useForm({
        date_overtime: props.overtime.overtime_at,
        from: props.overtime.from,
        to: props.overtime.to,
        notes: props.overtime.notes,
    });

    const checkedOverTime = (type) => {
        console.log(approvedHours);
        router.put(`/overtimerequests/checked/${props.overtime.id}`, {  type,  approvedHours})
        showApproveModal(false)
    }

    const updateOvertimeRequest = (e) => {
        e.preventDefault();

        put(route('overtimerequests.update', props.overtime), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    const actions = props.overtime.status_id === 1 ?
                <>
                    <PrimaryButton disabled={processing}>Update</PrimaryButton>
                    <Button type="button" className="bg-green-500 hover:bg-green-600" onClick={() => showApproveModal(true)}>Checked</Button>
                </> : <h4>No actions</h4>

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Overtime Request - Update</h2>}
        >
            <Head title="Overtime Request - Update" />
            <Card>
                <form onSubmit={updateOvertimeRequest}>
                    <CardHeader className=''>
                        <h3 className="p-4 text-gray-900">Update new overtime request</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                            <div>
                                <InputLabel htmlFor="date_overtime" value="Overtime date" />

                                <TextInput
                                    id="date_overtime"
                                    value={data.date_overtime}
                                    onChange={(e) => setData('date_overtime', e.target.value)}
                                    type="date"
                                    className="mt-1 block w-full"
                                    autoComplete="date_overtime"
                                />

                                <InputError message={errors.date_overtime} className="mt-2" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                            <div>
                                <InputLabel htmlFor="from" value="From time" />

                                <TextInput
                                    id="from"
                                    value={data.from}
                                    onChange={(e) => setData('from', e.target.value)}
                                    type="time"
                                    className="mt-1 block w-full"
                                    autoComplete="from"
                                />

                                <InputError message={errors.from} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="to" value="To time" />

                                <TextInput
                                    id="to"
                                    value={data.to}
                                    onChange={(e) => setData('to', e.target.value)}
                                    type="time"
                                    className="mt-1 block w-full"
                                    autoComplete="to"
                                />

                                <InputError message={errors.to} className="mt-2" />
                            </div>
                        </div>

                        <div className='my-4'>
                            <InputLabel htmlFor="notes" value="Notes" />

                            <TextAreaInput
                                id="notes"
                                value={data.notes}
                                onChange={(e) => setData('notes', e.target.value)}
                                className="mt-1 block w-full"
                                autoComplete="notes"
                            
                            />

                            <InputError message={errors.notes} className="mt-2" />
                        </div>
                    </CardBody>
                    <CardFooter className={'flex justify-between'}>
                        {actions}
                    </CardFooter>
                </form>
            </Card>

            {/* Checked Modal */}
            <Modal show={approveModal}>
                <div className="p-4 border border-bottom flex justify-between items-center">
                    <h1 className="text-2xl">Approved Overtime Request</h1>
                    <Button type="button" className="bg-gray-500 hover:bg-gray-600" onClick={() => showApproveModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </div>
                <div className="p-4 border border-bottom">
                        <div>
                            <InputLabel htmlFor="approved_hours" value="Approved Hours" />

                            <TextInput
                                id="approved_hours"
                                value={approvedHours}
                                onChange={(e) => setApprovedHours(e.target.value)}
                                type="number"
                                className="mt-1 block w-full"
                                autoComplete="approved_hours"
                            />
                        </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                    <Button type="button" className="bg-green-500 hover:bg-green-600" onClick={() => checkedOverTime('Approved')}>Approved</Button>
                    <Button type="button" className="bg-red-500 hover:bg-red-600" onClick={() => checkedOverTime('Disapproved')}>Disapproved</Button>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}