import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Select from '@/Components/Select';
import Table from '@/Components/Table'
import TableHead from '@/Components/TableHead'
import TableBody from '@/Components/TableBody'
import PrimaryButton from '@/Components/PrimaryButton';

import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function Create(props) {
    const profile_picture = useRef();
    const first_name = useRef();
    const middle_name = useRef();
    const last_name = useRef();
    const suffix = useRef();
    const birth_date = useRef();
    const place_of_birth = useRef();
    const contact_no = useRef();
    const email = useRef();
    const address = useRef();
    const rate = useRef();
    const rate_type = useRef();
    const branch = useRef();
    const department = useRef();
    let [departments, updateDepartments] = useState([{id: 0, label: 'Select Branch'}])

    const family_request = {
        fullname: useRef(),
        relationship: useRef()
    }

    const school_attainment = {
        school_name: useRef(),
        type: useRef(),
        year: useRef(),
    }


    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        profile_picture: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        birth_date: '',
        place_of_birth: '',
        email: '',
        contact_no: '',
        emai: '',
        address: '',
        family_members: [],
        school_attainments: [],
        rate: '',
        rate_type: '',
        branch: '',
        department: '',
    });

    // Family members functions
    const addFamilyMember = () => {

        if (family_request.fullname.current.value == '' || family_request.relationship.current.value == '') {
            alert('Check, field required')
            return;
        }

        const newFamilyData = {
            fullname: family_request.fullname.current.value,
            relationship: family_request.relationship.current.value
        }

        setData('family_members', [...data.family_members, newFamilyData])

        family_request.fullname.current.value = ''
        family_request.relationship.current.value = ''
    }

    const removeFamilyMember = (index) => {
        setData(prevData => {
            const newFamilyMembers = [...prevData.family_members];
            newFamilyMembers.splice(index, 1);
            return {
                ...prevData,
                family_members: newFamilyMembers,
            };
        });
    }

    const familyData = data.family_members.length ? 
    data.family_members.map((fam, index) => 
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { fam.fullname }
            </th>
            <td className="px-6 py-4">
                { fam.relationship }
            </td>
            <td className="px-6 py-4">
                <PrimaryButton type="button" onClick={() => removeFamilyMember(index)}>Remove</PrimaryButton>
            </td>
        </tr>
    ) : 
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row" colSpan={3} className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
            No family member
        </th>
    </tr>

    // School Attainment functions
    const addSchoolAttainment = () => {
        if (school_attainment.school_name.current.value == '' || school_attainment.type.current.value == '' || school_attainment.year.value) {
            alert('Check, field required')
            return;
        }

        const newSchoolData = {
            school_name: school_attainment.school_name.current.value,
            type: school_attainment.type.current.value,
            year: school_attainment.year.current.value
        }

        setData('school_attainments', [...data.school_attainments, newSchoolData])

        school_attainment.school_name.current.value = '';
        school_attainment.type.current.value = 'Elementary';
        school_attainment.year.current.value = '';
    }

    const deleteSchoolAttainment = (index) => {
        setData(prevData => {
            const newSchoolData = [...prevData.school_attainments];
            newSchoolData.splice(index, 1);
            return {
                ...prevData,
                school_attainments: newSchoolData,
            };
        });
    }

    const schoolData = data.school_attainments.length ? 
    data.school_attainments.map((school, index) => 
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { school.school_name }
            </th>
            <td className="px-6 py-4">
                { school.type }
            </td>
            <td className="px-6 py-4">
                { school.year }
            </td>
            <td className="px-6 py-4">
                <PrimaryButton type="button" onClick={() => deleteSchoolAttainment(index)}>Remove</PrimaryButton>
            </td>
        </tr>
    ) : 
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row" colSpan={4} className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
            No school attainment
        </th>
    </tr>

    // Page functions
    const changeBranch = (val) => {
        setData('branch', val.id)

        const deps = props.branches.find(e => e.id === val.id)

        updateDepartments(deps.departments)
    }
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
                        <h3 className="p-6 font-bold text-gray-900">Create new employee</h3>
                    </CardHeader>
                    <CardBody>
                        <div id="personal-information">
                            <h5 className="mb-4 font-bold text-gray-900">Personal Information</h5>
                            <div className="grid grid-cols-2 mb-4">
                                <div>
                                    <InputLabel htmlFor="profile_picture" value="Profile picture" />

                                    <TextInput
                                        id="profile_picture"
                                        ref={profile_picture}
                                        value={data.profile_picture}
                                        onChange={(e) => setData('profile_picture', e.target.value)}
                                        type="file"
                                        className="mt-1 block w-full"
                                        autoComplete="profile_picture"
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
                                    <InputLabel htmlFor="name" value="Date of Birth" />

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
                                    <InputLabel htmlFor="name" value="Place of Birth" />

                                    <TextInput
                                        id="place_of_birth"
                                        ref={place_of_birth}
                                        value={data.place_of_birth}
                                        onChange={(e) => setData('place_of_birth', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="place_of_birth"
                                    />

                                    <InputError message={errors.place_of_birth} className="mt-2" />
                                </div>
                                
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <InputLabel htmlFor="name" value="Email" />

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
                                <InputLabel htmlFor="address" value="Current address" />

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
                        <div id="family-member">
                            <h5 className="my-4 font-bold text-gray-900">Family Member</h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                                <div>
                                    <InputLabel htmlFor="fullname" value="Fullname" />

                                    <TextInput
                                        id="fullname"
                                        ref={family_request.fullname}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="fullname"
                                    />

                                </div>

                                <div>
                                    <InputLabel htmlFor="address" value="Relationship" />

                                    <TextInput
                                        id="relationship"
                                        ref={family_request.relationship}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="relationship"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="address" value="Action" />

                                    <PrimaryButton type="button" onClick={addFamilyMember} className="w-full py-2 px-3 justify-center mt-1">Add</PrimaryButton>
                                </div>

                            </div>
                            <Table className="mb-2">
                                <TableHead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Fullname
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Relationship
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    { familyData }
                                </TableBody>
                            </Table>
                        </div>
                        <hr />
                        <div id="educational-atainment">
                            <h5 className="my-4 font-bold text-gray-900">Educational Attainment</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <div>
                                    <InputLabel htmlFor="school_name" value="School name" />

                                    <TextInput
                                        id="school_name"
                                        ref={school_attainment.school_name}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="school_name"
                                    />

                                </div>

                                <div>
                                    <InputLabel htmlFor="type" value="School type" />

                                    <Select 
                                        id="school_type"
                                        ref={school_attainment.type}
                                        className="mt-1 block w-full"
                                        data={props.school_types}
                                        onSelect={() => {}}
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="year_graduated" value="Year graduated" />

                                    <TextInput
                                        id="year_graduated"
                                        ref={school_attainment.year}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="year_graduated"
                                    />

                                </div>
                                <div>
                                    <InputLabel htmlFor="address" value="Action" />

                                    <PrimaryButton type="button" onClick={addSchoolAttainment} className="w-full py-2 px-3 justify-center mt-1">Add</PrimaryButton>
                                </div>
                            </div>
                            <Table className="mb-2">
                                <TableHead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            School name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Type
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Year
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    { schoolData }
                                </TableBody>
                            </Table>
                        </div>
                        <hr />
                        <div id="employement-information">
                            <h5 className="my-4 font-bold text-gray-900">Employement Information</h5>
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
                                        ref={rate_type}
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
                                        ref={branch}
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
                                        ref={department}
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
