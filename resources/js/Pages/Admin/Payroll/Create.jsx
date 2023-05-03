import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Button from '@/Components/Button';

import { Head, Link, useForm, router } from '@inertiajs/react';
import { useRef } from 'react';

export default function Create(props) {
    const from = useRef();
    const to = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        branch: 1,
        from: '',
        to: '',
    });

    const createPayroll = (e) => {
        e.preventDefault();

        post(route('payrolls.generate'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payroll - Create</h2>}
        >
            <Head title="Payroll - Create" />

            <Card>
            <CardHeader className='p-4 flex items-center gap-4'>
                        <Link href={route('payrolls.index')}>
                            <svg className="text-gray-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>

                        <h3 className="text-gray-900">Generate new payroll</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="grid grid-cols-1 grid-cols-4 gap-4">
                            <div>
                                <InputLabel htmlFor="branch" value="Branch" />

                                <Select 
                                    id="school_type"
                                    className="mt-1 block w-full"
                                    data={props.branches}
                                    val={undefined}
                                    onSelect={(e) => setData('branch', e.id)}
                                />

                                <InputError message={errors.branch} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="from" value="From" />

                                <TextInput
                                    id="from"
                                    ref={from}
                                    type="date"
                                    className="mt-1 block w-full"
                                    autoComplete="from"
                                    onChange={(e) => setData('from', e.target.value)}
                                />

                                <InputError message={errors.from} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="to" value="To" />

                                <TextInput
                                    id="to"
                                    ref={to}
                                    type="date"
                                    className="mt-1 block w-full"
                                    autoComplete="to"
                                    onChange={(e) => setData('to', e.target.value)}
                                />

                                <InputError message={errors.to} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="address" value="Action" />

                                <PrimaryButton onClick={createPayroll} type="button" className="w-full py-2 px-3 justify-center mt-1">Generate</PrimaryButton>
                            </div>
                        </div>
                    </CardBody>
            </Card>
        </AuthenticatedLayout>
    );
}
