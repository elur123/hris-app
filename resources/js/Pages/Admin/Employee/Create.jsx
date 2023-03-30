import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function Create(props) {
    const first_name = useRef();
    const middle_name = useRef();
    const last_name = useRef();
    const suffix = useRef();
    const birth_date = useRef();
    const contact_no = useRef();
    const address = useRef();


    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        birth_date: '',
        contact_no: '',
        address: ''
    });

    const createEmployee = (e) => {
        e.preventDefault();

        post(route('employees.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.first_name) {
                    reset('first_name');
                    first_name.current.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employee - Create</h2>}
        >
            <Head title="Employee - Create" />

            <Card>
                <form onSubmit={createEmployee}>
                    <CardHeader className=''>
                        <h3 className="p-6 text-gray-900">Create new employee</h3>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <h5 className="mb-4 text-gray-900">Personal Information</h5>
                            <div className="grid grid-cols-2 mb-4">
                                <div>
                                    <InputLabel htmlFor="address" value="Profile picture" />

                                    <TextInput
                                        id="first_name"
                                        ref={first_name}
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        type="file"
                                        className="mt-1 block w-full"
                                        autoComplete="first_name"
                                    />
                                </div>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <InputLabel htmlFor="name" value="First name" />

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
                                    <InputLabel htmlFor="name" value="Middle name" />

                                    <TextInput
                                        id="middle_name"
                                        ref={middle_name}
                                        value={data.middle_name}
                                        onChange={(e) => setData('middle_name', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="middle_name"
                                    />

                                    <InputError message={errors.middle_name} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="name" value="Last name" />

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
                                    <InputLabel htmlFor="name" value="Suffix" />

                                    <TextInput
                                        id="suffix"
                                        ref={suffix}
                                        value={data.suffix}
                                        onChange={(e) => setData('suffix', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="suffix"
                                    />

                                    <InputError message={errors.suffix} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <InputLabel htmlFor="name" value="Birthdate" />

                                    <TextInput
                                        id="birth_date"
                                        ref={birth_date}
                                        value={data.birth_date}
                                        onChange={(e) => setData('birth_date', e.target.value)}
                                        type="date"
                                        className="mt-1 block w-full"
                                        autoComplete="birth_date"
                                    />

                                    <InputError message={errors.birth_date} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="name" value="Contact #" />

                                    <TextInput
                                        id="contact_no"
                                        ref={contact_no}
                                        value={data.contact_no}
                                        onChange={(e) => setData('contact_no', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="contact_no"
                                    />

                                    <InputError message={errors.contact_no} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 mb-4">
                                <InputLabel htmlFor="address" value="Address" />

                                <TextAreaInput
                                    id="address"
                                    ref={address}
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    className="mt-1 block w-full"
                                    autoComplete="address"

                                />

                                <InputError message={errors.address} className="mt-2" />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h5 className="my-4 text-gray-900">Employement Information</h5>
                            <div className="grid grid-cols-2 gap-4 my-4">
                                <div>
                                    <InputLabel htmlFor="address" value="Rate" />

                                    <TextInput
                                        id="first_name"
                                        ref={first_name}
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        type="number"
                                        className="mt-1 block w-full"
                                        autoComplete="first_name"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="address" value="Rate type" />

                                    <TextInput
                                        id="first_name"
                                        ref={first_name}
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        type="number"
                                        className="mt-1 block w-full"
                                        autoComplete="first_name"
                                    />
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
