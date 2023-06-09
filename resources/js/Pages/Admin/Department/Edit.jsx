import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit(props) {
    const department = props.department

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        name: department.name,
    });

    const updateDepartment = (e) => {
        e.preventDefault();

        put(route('departments.update', props.department), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.name) {
                    reset('password', 'name');
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Department - Edit</h2>}
        >
            <Head title="Department - Create" />

            <Card>
                <form onSubmit={updateDepartment}>
                    <CardHeader className='p-4 flex items-center gap-4'>
                        <Link href={route('departments.index')}>
                            <svg className="text-gray-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>

                        <h3 className="text-gray-900">Update department</h3>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <InputLabel htmlFor="name" value="Department name" />

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
                    </CardBody>
                    <CardFooter>
                        <PrimaryButton disabled={processing}>Update</PrimaryButton>
                    </CardFooter>
                </form>
            </Card>
        </AuthenticatedLayout>
    );
}
