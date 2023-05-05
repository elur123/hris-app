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
import { useRef, useEffect, useState } from 'react';

export default function Edit(props) {
    let [departments, updateDepartments] = useState([{id: 0, label: 'Select branch first'}])
    const rate = useRef();
    const rate_type = {id: props.user.employee.rate_type_id, label: props.user.employee.rate_type.label}
    const branch = {id: props.user.employee.branch_id, label: props.user.employee.branch.name}
    const department = {id: props.user.employee.department_id, label: props.user.employee.department.name}
    const position = {id: props.user.employee.position_id, label: props.user.employee.position.label}

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        first_name: props.user.employee.first_name,
        last_name: props.user.employee.last_name,
        email: props.user.email,
        password: '',
        branch: props.user.employee.branch_id,
        department: props.user.employee.department_id,
        position: props.user.employee.position_id,
        rate: props.user.employee.rate,
        rate_type: props.user.employee.rate_type_id,
    });

    const changeBranch = (val) => {
        setData('branch', val)

        const deps = props.branches.find(e => e.id === val)

        updateDepartments(deps.departments)
    }

    const updateUser = (e) => {
        e.preventDefault();

        put(route('users.update', props.user), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    useEffect(() => {
        changeBranch(props.user.employee.branch_id)
        // Return a cleanup function to clean up any resources when the component is unmounted
        return () => { };
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User - Update</h2>}
        >
            <Head title="User - Update" />

            <Card>
                <form onSubmit={updateUser}>
                    <CardHeader className='p-4 flex items-center gap-4'>
                        <Link href={route('users.index')}>
                            <svg className="text-gray-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>

                        <h3 className="text-gray-900">Update user</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <InputLabel htmlFor="first_name" value="First name" />

                                <TextInput
                                    id="first_name"
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
                                        val={position}
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
                                        val={rate_type}
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
                                        val={branch}
                                        className="mt-1 block w-full"
                                        data={props.branches}
                                        onSelect={(val) => changeBranch(val.id)}
                                    />

                                    <InputError message={errors.branch} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="department" value="Department" />

                                    <Select 
                                        id="department"
                                        val={department}
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
                        <PrimaryButton disabled={processing}>Update</PrimaryButton>
                    </CardFooter>
                </form>
            </Card>
        </AuthenticatedLayout>
    );
}
