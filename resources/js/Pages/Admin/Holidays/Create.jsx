import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Select from '@/Components/Select';
import PrimaryButton from '@/Components/PrimaryButton';

import { Head, useForm, Link } from '@inertiajs/react';
import { useRef } from 'react';

export default function Create(props) {
    const name = useRef();
    const from = useRef();
    const to = useRef();
    const type = useRef();
    const rate = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        name: '',
        month: 'January',
        from: '',
        to: '',
        type: '',
        rate: ''
    });

    const createDepartment = (e) => {
        e.preventDefault();

        post(route('holidays.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Holiday - Create</h2>}
        >
            <Head title="Holiday - Create" />

            <Card>
                <form onSubmit={createDepartment}>
                    <CardHeader className='p-4 flex items-center gap-4'>
                        <Link href={route('holidays.index')}>
                            <svg className="text-gray-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>

                        <h3 className="text-gray-900">Create new holiday</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    ref={name}
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('name', e.target.value)}
                                    autoComplete="name"
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="month" value="Month" />

                                <Select 
                                    id="month"
                                    className="mt-1 block w-full"
                                    data={props.months}
                                    val={undefined}
                                    onSelect={(e) => setData('month', e.label)}
                                />

                                <InputError message={errors.month} className="mt-2" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <InputLabel htmlFor="from" value="From (Started date of holiday)" />

                                <TextInput
                                    id="from"
                                    ref={from}
                                    type="number"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('from', e.target.value)}
                                    autoComplete="from"
                                />

                                <InputError message={errors.from} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="to" value="To (End date of holiday)" />

                                <TextInput
                                    id="to"
                                    ref={to}
                                    type="number"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('to', e.target.value)}
                                    autoComplete="to"
                                />

                                <InputError message={errors.to} className="mt-2" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <InputLabel htmlFor="type" value="Type [National, Special, Others]" />

                                <TextInput
                                    id="type"
                                    ref={type}
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('type', e.target.value)}
                                    autoComplete="type"
                                />

                                <InputError message={errors.type} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="rate" value="Rate (%)" />

                                <TextInput
                                    id="rate"
                                    ref={rate}
                                    type="number"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('rate', e.target.value)}
                                    autoComplete="rate"
                                />

                                <InputError message={errors.rate} className="mt-2" />
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
