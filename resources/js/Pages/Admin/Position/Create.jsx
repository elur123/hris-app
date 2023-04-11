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
    const label = useRef();

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        label: '',
    });

    const createPosition = (e) => {
        e.preventDefault();

        post(route('positions.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.label) {
                    reset('label');
                    label.current.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Position - Create</h2>}
        >
            <Head title="Position - Create" />

            <Card>
                <form onSubmit={createPosition}>
                    <CardHeader className=''>
                        <h3 className="p-6 text-gray-900">Create new position</h3>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <InputLabel htmlFor="name" value="Position name" />

                            <TextInput
                                id="label"
                                ref={label}
                                value={data.label}
                                onChange={(e) => setData('label', e.target.value)}
                                type="text"
                                className="mt-1 block w-full"
                                autoComplete="label"
                            />

                            <InputError message={errors.label} className="mt-2" />
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
