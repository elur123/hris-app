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
import PrimaryButton from '@/Components/PrimaryButton';

import { Head, Link, useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function Create(props) {
    const from = useRef();
    const to = useRef();
    const notes = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        from: '',
        to: '',
        type: 1,
        notes: '',
    });

    const createLeaveRequest = (e) => {
        e.preventDefault();

        post(route('leaverequests.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Leave Request - Create</h2>}
        >
            <Head title="Leave Request - Create" />

            <Card>
                <form onSubmit={createLeaveRequest}>
                    <CardHeader className='p-4 flex items-center gap-4'>
                        <Link href={route('leaverequests.index')}>
                            <svg className="text-gray-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>

                        <h3 className="text-gray-900">Create new leave request</h3>
                    </CardHeader>
                    <CardBody>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
                            <div>
                                <InputLabel htmlFor="from" value="From" />

                                <TextInput
                                    id="from"
                                    ref={from}
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
                                    ref={to}
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
                                    ref={notes}
                                    value={data.notes}
                                    onChange={(e) => setData('notes', e.target.value)}
                                    className="mt-1 block w-full"
                                    autoComplete="notes"

                                />

                                <InputError message={errors.notes} className="mt-2" />
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <PrimaryButton disabled={processing}>Create</PrimaryButton>
                    </CardFooter>
                </form>
            </Card>
        </AuthenticatedLayout>
    );
}
