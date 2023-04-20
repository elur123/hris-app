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
import { useForm, usePage } from '@inertiajs/react';

export default function Edit(props) {
    const branch = usePage().props.branch

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        name: branch.name,
        address: branch.address,
        contact_no: branch.contact_no,
        departments: branch.departments.map(e => e.id),
    });

    const handleOnChange = (event) => {

        if (event.target.checked) 
        {
            data.departments.push(event.target.value)
        }
        else 
        {
            let index = data.departments.indexOf(data.departments.find(e => e === event.target.value))
            data.departments.splice(index, 1)
        }
    };

    const departmentList = props.departments.map(dep => {
        let find = data.departments.find(e => e === dep.id)

        return <div key={dep.id} className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <label className="flex items-center">
                <Checkbox name="departments" value={dep.id} onChange={handleOnChange} defaultChecked={find !== undefined ? true : false} />
                <span className="ml-2 text-sm text-gray-600">{dep.name}</span>
            </label>
        </div>
    })

    const createBranch = (e) => {
        e.preventDefault();

        put(route('branches.update', props.branch), {
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Branch - Edit</h2>}
        >
            <Head title="Branch - Create" />

            <Card>
                <form onSubmit={createBranch}>
                    <CardHeader className=''>
                        <h3 className="p-4 text-gray-900">Update branch</h3>
                    </CardHeader>
                    <CardBody>
                        <div className='mb-2'>
                            <InputLabel htmlFor="name" value="Branch name" />

                            <TextInput
                                id="name"
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
                        <PrimaryButton disabled={processing}>Update</PrimaryButton>
                    </CardFooter>
                </form>
            </Card>
        </AuthenticatedLayout>
    );
}
