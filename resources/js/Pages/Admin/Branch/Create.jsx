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
    const name = useRef();
    const address = useRef();
    const contact_no = useRef();
    const departments = useRef([]);

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        name: '',
        address: '',
        contact_no: '',
        departments: [],
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const departmentList = props.departments.map(dep => 
        <div key={dep.id} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <label className="flex items-center">
                <Checkbox name="departments" value={data.departments} onChange={handleOnChange} />
                <span className="ml-2 text-sm text-gray-600">{dep.name}</span>
            </label>
        </div>
    )

    const createBranch = (e) => {
        e.preventDefault();

        post(route('branches.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.name) {
                    name.current.focus();
                }
                if (errors.contact_no) {
                    contact_no.current.focus();
                }
                if (errors.address) {
                    address.current.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Branch - Create</h2>}
        >
            <Head title="Branch - Create" />

            <Card>
                <form onSubmit={createBranch}>
                    <CardHeader className=''>
                        <h3 className="p-6 text-gray-900">Create new branch</h3>
                    </CardHeader>
                    <CardBody>
                        <div className='mb-2'>
                            <InputLabel htmlFor="name" value="Branch name" />

                            <TextInput
                                id="name"
                                ref={name}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                type="text"
                                className="mt-1 block w-full"
                                autoComplete="name"
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className='my-4'>
                            <InputLabel htmlFor="contact_no" value="Contact No." />

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

                        <div className='my-4'>
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

                        <hr className='my-4' />
                        <div>
                            <h3 className='my-2'>Select department</h3>
                            {departmentList}
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
