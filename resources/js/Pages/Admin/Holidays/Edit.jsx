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

import { Head, useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function Create(props) {

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        name: props.holiday.name,
        month: props.holiday.month,
        from: props.holiday.from,
        to: props.holiday.to,
        type: props.holiday.type,
        rate: props.holiday.rate
    });

    const updateDepartment = (e) => {
        e.preventDefault();

        put(route('holidays.update', props.holiday), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Holiday - Update</h2>}
        >
            <Head title="Holiday - Update" />

            <Card>
                <form onSubmit={updateDepartment}>
                    <CardHeader className=''>
                        <h3 className="p-6 text-gray-900">Update holiday</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.name}
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
                                    type="number"
                                    className="mt-1 block w-full"
                                    value={data.from}
                                    onChange={(e) => setData('from', e.target.value)}
                                    autoComplete="from"
                                />

                                <InputError message={errors.from} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="to" value="To (End date of holiday)" />

                                <TextInput
                                    id="to"
                                    type="number"
                                    className="mt-1 block w-full"
                                    value={data.to}
                                    onChange={(e) => setData('to', e.target.value)}
                                    autoComplete="to"
                                />

                                <InputError message={errors.to} className="mt-2" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <InputLabel htmlFor="type" value="Type [International, National, Special, Others]" />

                                <TextInput
                                    id="type"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.type}
                                    onChange={(e) => setData('type', e.target.value)}
                                    autoComplete="type"
                                />

                                <InputError message={errors.type} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="rate" value="Rate (%)" />

                                <TextInput
                                    id="rate"
                                    type="number"
                                    className="mt-1 block w-full"
                                    value={data.rate}
                                    onChange={(e) => setData('rate', e.target.value)}
                                    autoComplete="rate"
                                />

                                <InputError message={errors.rate} className="mt-2" />
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <PrimaryButton disabled={processing}>Update</PrimaryButton>
                    </CardFooter>
                </form>
            </Card>
        </AuthenticatedLayout>
    );
}
