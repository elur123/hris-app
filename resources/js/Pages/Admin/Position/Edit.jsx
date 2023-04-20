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

export default function Edit(props) {

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        label: props.position.label,
    });

    const updatePosition = (e) => {
        e.preventDefault();

        put(route('positions.update', props.position), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Position - Update</h2>}
        >
            <Head title="Position - Update" />

            <Card>
                <form onSubmit={updatePosition}>
                    <CardHeader className=''>
                        <h3 className="p-4 text-gray-900">Update position</h3>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <InputLabel htmlFor="name" value="Position name" />

                            <TextInput
                                id="position"
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
                        <PrimaryButton disabled={processing}>Update</PrimaryButton>
                    </CardFooter>
                </form>
            </Card>
        </AuthenticatedLayout>
    );
}
