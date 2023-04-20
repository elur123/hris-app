import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function Create(props) {
    const name = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        name: '',
    });

    const createDepartment = (e) => {
        e.preventDefault();

        post(route('departments.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.name) {
                    reset('name');
                    name.current.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Department - Create</h2>}
        >
            <Head title="Department - Create" />

            <Card>
                <form onSubmit={createDepartment}>
                    <CardHeader className=''>
                        <h3 className="p-4 text-gray-900">Create new department</h3>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <InputLabel htmlFor="name" value="Department name" />

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
                    </CardBody>
                    <CardFooter>
                        <PrimaryButton disabled={processing}>Create</PrimaryButton>
                    </CardFooter>
                </form>
            </Card>
        </AuthenticatedLayout>
    );
}
