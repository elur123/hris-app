import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Checkbox from '@/Components/Checkbox';
import Select from '@/Components/Select';
import Modal from '@/Components/Modal';
import Button from '@/Components/Button';
import PrimaryButton from '@/Components/PrimaryButton';

import { Head, useForm, router, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Create(props) {
    const [approveModal, showApproveModal] = useState(false);

    const [approvedDays, setApprovedDays] = useState(0)

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        from: props.leave.from,
        to: props.leave.to,
        type: props.leave.leave_type_id,
        notes: props.leave.notes,
    });

    const checkLeave = (type) => {
        router.put(`/leaverequests/checked/${props.leave.id}`, {  type,  approvedDays})
        showApproveModal(false)
    }

    const updateLeaveRequest = (e) => {
        e.preventDefault();

        put(route('leaverequests.update', props.leave), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    const actions = props.leave.status_id === 1 ?
                <>
                    <PrimaryButton disabled={processing}>Update</PrimaryButton>
                    <Button type="button" className="p-2 rounded text-white bg-green-500 hover:bg-green-600" onClick={() => showApproveModal(true)}>Check</Button>
                </> : <h4>No actions</h4>

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Leave Request - Update</h2>}
        >
            <Head title="Leave Request - Update" />

            <Card>
                <form onSubmit={updateLeaveRequest}>
                    <CardHeader className='p-4 flex items-center gap-4'>
                        <Link href={route('leaverequests.index')}>
                            <svg className="text-gray-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>

                        <h3 className="text-gray-900">Update leave request</h3>
                    </CardHeader>
                    <CardBody>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
                            <div>
                                <InputLabel htmlFor="from" value="From" />

                                <TextInput
                                    id="from"
                                    value={data.from}
                                    onChange={(e) => setData('from', e.target.value)}
                                    type="date"
                                    className="mt-1 block w-full"
                                    autoComplete="from"
                                />

                                <InputError message={errors.from} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="to" value="To" />

                                <TextInput
                                    id="to"
                                    value={data.to}
                                    onChange={(e) => setData('to', e.target.value)}
                                    type="date"
                                    className="mt-1 block w-full"
                                    autoComplete="to"
                                />

                                <InputError message={errors.to} className="mt-2" />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                             <div>
                                <InputLabel htmlFor="type" value="Type" />

                                <Select 
                                    id="type"
                                    val={undefined}
                                    className="mt-1 block w-full"
                                    data={props.types}
                                    onSelect={(val) => setData('type', val.id)}
                                />

                                <InputError message={errors.type} className="mt-2" />
                            </div>
                            <div>
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
                    <h1 className="text-2xl">Approved Leave Request</h1>
                    <Button type="button" className="bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => showApproveModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </div>
                <div className="p-4 border border-bottom">
                        <div>
                            <InputLabel htmlFor="approved_days" value="Approved Days" />

                            <TextInput
                                id="approved_days"
                                value={approvedDays}
                                onChange={(e) => setApprovedDays(e.target.value)}
                                type="number"
                                className="mt-1 block w-full"
                                autoComplete="approved_days"
                            />
                        </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                    <Button type="button" className="p-2 rounded text-white bg-green-500 hover:bg-green-600" onClick={() => checkLeave('Approved')}>Approved</Button>
                    <Button type="button" className="p-2 rounded text-white bg-red-500 hover:bg-red-600" onClick={() => checkLeave('Disapproved')}>Disapproved</Button>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
