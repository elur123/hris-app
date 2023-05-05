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

import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function Create(props) {
    let [departments, updateDepartments] = useState([{id: 0, label: 'Select branch first'}])
    const first_name = useRef();
    const last_name = useRef();
    const email = useRef();
    const password = useRef();
    const rate = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: props.password_generated,
        branch: '',
        department: '',
        position: '',
        rate: '',
        rate_type: '',
    });

    const changeBranch = (val) => {
        setData('branch', val.id)

        const deps = props.branches.find(e => e.id === val.id)

        updateDepartments(deps.departments)
    }

    const createUser = (e) => {
        e.preventDefault();

        post(route('users.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User - Create</h2>}
        >
            <Head title="User - Create" />

            <Card>
                <form onSubmit={createUser}>
                    <CardHeader className='p-4 flex items-center gap-4'>
                        <Link href={route('users.index')}>
                            <svg className="text-gray-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>

                        <h3 className="text-gray-900">Create new user</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <InputLabel htmlFor="first_name" value="First name" />

                                <TextInput
                                    id="first_name"
                                    ref={first_name}
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="first_name"
                                />

                                <InputError message={errors.first_name} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="last_name" value="Last name" />

                                <TextInput
                                    id="last_name"
                                    ref={last_name}
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="last_name"
                                />

                                <InputError message={errors.last_name} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    ref={email}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    type="email"
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    id="password"
                                    ref={password}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="password"
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>
                        </div>
                        <hr className="drop-shadow-md"/>
                        <div id="employement-information" className="mb-4">
                            <h5 className="my-4 font-bold text-gray-900">Employement Information</h5>
                            <div className="grid grid-cols-2 gap-4 my-4">
                                <div>
                                    <InputLabel htmlFor="position" value="Position" />

                                    <Select 
                                        id="position"
                                        val={undefined}
                                        className="mt-1 block w-full"
                                        data={props.positions}
                                        onSelect={(val) => setData('position', val.id)}
                                    />

                                    <InputError message={errors.position} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <div>
                                    <InputLabel htmlFor="rate" value="Rate" />

                                    <TextInput
                                        id="rate"
                                        ref={rate}
                                        value={data.rate}
                                        onChange={(e) => setData('rate', e.target.value)}
                                        type="number"
                                        className="mt-1 block w-full"
                                        autoComplete="rate"
                                    />

                                    <InputError message={errors.rate} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="rate_type" value="Rate type" />

                                    <Select 
                                        id="rate_type"
                                        className="mt-1 block w-full"
                                        data={props.rate_types}
                                        onSelect={(val) => setData('rate_type', val.id)}
                                    />

                                    <InputError message={errors.rate_type} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="branch" value="Branch" />

                                    <Select 
                                        id="branch"
                                        className="mt-1 block w-full"
                                        data={props.branches}
                                        onSelect={(val) => changeBranch(val)}
                                    />

                                    <InputError message={errors.branch} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="department" value="Department" />

                                    <Select 
                                        id="department"
                                        className="mt-1 block w-full"
                                        data={departments}
                                        onSelect={(val) => setData('department', val.id)}
                                    />

                                    <InputError message={errors.department} className="mt-2" />
                                </div>

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
