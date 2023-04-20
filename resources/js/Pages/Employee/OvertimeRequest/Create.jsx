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
import PrimaryButton from '@/Components/PrimaryButton';

import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function Create(props) {
    const date_overtime = useRef();
    const from = useRef();
    const to = useRef();
    const notes = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        date_overtime: '',
        from: '',
        to: '',
        notes: '',
    });

    const createOvertimeRequest = (e) => {
        e.preventDefault();

        post(route('overtimerequests.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Overtime Request - Create</h2>}
        >
            <Head title="Overtime Request - Create" />

            <Card>
                <form onSubmit={createOvertimeRequest}>
                    <CardHeader className=''>
                        <h3 className="p-4 text-gray-900">Create new overtime request</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                            <div>
                                <InputLabel htmlFor="date_overtime" value="Overtime date" />

                                <TextInput
                                    id="date_overtime"
                                    ref={date_overtime}
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
                                    ref={from}
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
                                    ref={to}
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
                                ref={notes}
                                value={data.notes}
                                onChange={(e) => setData('notes', e.target.value)}
                                className="mt-1 block w-full"
                                autoComplete="notes"
                            
                            />

                            <InputError message={errors.notes} className="mt-2" />
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
