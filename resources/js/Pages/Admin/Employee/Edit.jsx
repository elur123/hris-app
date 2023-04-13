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
import { useForm, router } from '@inertiajs/react';
import { useRef, useState, useEffect } from 'react';

export default function Update(props) {
    const rate = useRef();
    const rate_type = {id: props.employee.rate_type_id, label: props.employee.rate_type.label}
    const branch = {id: props.employee.branch_id, label: props.employee.branch.name}
    const department = {id: props.employee.department_id, label: props.employee.department.name}
    let [departments, updateDepartments] = useState([{id: 0, label: 'Select Branch'}])
    let position = {id: props.employee.position_id, label: props.employee.position.label}

    const family_request = {
        fullname: useRef(),
        relationship: useRef()
    }

    const school_attainment = {
        school_name: useRef(),
        education_level: 'Elementary',
        year_graduated: useRef(),
    }

    const employee_experience = {
        company_name: useRef(),
        position: useRef(),
        start_at: useRef(),
        end_at: useRef()
    }

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        _method: 'put',
        profile_picture: '',
        first_name: props.employee.first_name ?? '',
        middle_name: props.employee.middle_name ?? '',
        last_name: props.employee.last_name ?? '',
        suffix: props.employee.suffix ?? '',
        birth_date: props.employee.date_of_birth ?? '',
        place_of_birth: props.employee.place_of_birth ?? '',
        email: props.employee.user.email ?? '',
        contact_no: props.employee.contact_no ?? '',
        address: props.employee.current_address ?? '',
        rate: props.employee.rate ?? '',
        rate_type: props.employee.rate_type_id,
        branch: props.employee.branch_id,
        department: props.employee.department_id,
        position: props.employee.position_id,
        family_members: props.employee.family_members,
        school_attainments: props.employee.educational_attainments,
        experiences: props.employee.experiences,
    });

    useEffect(() => {
        changeBranch(props.employee.branch)
        // Return a cleanup function to clean up any resources when the component is unmounted
        return () => { };
      }, []);

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
        if (typeof data.family_members[index]['id'] !== "undefined") {
            router.delete(`/employees/delete/family_member/${data.family_members[index]['id']}`)
        }
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
        if (school_attainment.school_name.current.value == '' || school_attainment.education_level == '' 
        || school_attainment.year_graduated.current.value == '') {
            alert('Check, field required')
            return;
        }

        const newSchoolData = {
            school_name: school_attainment.school_name.current.value,
            education_level: school_attainment.education_level,
            year_graduated: school_attainment.year_graduated.current.value
        }

        setData('school_attainments', [...data.school_attainments, newSchoolData])

        school_attainment.school_name.current.value = '';
        school_attainment.year_graduated.current.value = '';
    }

    const deleteSchoolAttainment = (index) => {
        if (typeof data.school_attainments[index]['id'] !== "undefined") {
            router.delete(`/employees/delete/educational_attainment/${data.school_attainments[index]['id']}`)
        }
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
                { school.education_level }
            </td>
            <td className="px-6 py-4">
                { school.year_graduated }
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

    // Experience functions
    const addExperience = () => {
        if (employee_experience.company_name.current.value == '' || employee_experience.position.current.value == '' 
        || employee_experience.start_at.current.value == '' || employee_experience.end_at.current.value == '') {
            alert('Check, field required')

            console.log(employee_experience);
            return;
        }

        const newExperienceData = {
            company_name: employee_experience.company_name.current.value,
            position: employee_experience.position.current.value,
            start_at: employee_experience.start_at.current.value,
            end_at: employee_experience.end_at.current.value
        }

        setData('experiences', [...data.experiences, newExperienceData])

        employee_experience.company_name.current.value = '';
        employee_experience.position.current.value = '';
        employee_experience.start_at.current.value = '';
        employee_experience.end_at.current.value = '';
    }

    const removeEmployeeExperience = (index) => {
        if (typeof data.experiences[index]['id'] !== "undefined") {
            router.delete(`/employees/delete/experience/${data.experiences[index]['id']}`)
        }
        setData(prevData => {
            const newExperience = [...prevData.experiences];
            newExperience.splice(index, 1);
            return {
                ...prevData,
                experiences: newExperience,
            };
        });
    }

    const experienceData = data.experiences.length ? 
    data.experiences.map((exp, index) => 
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { exp.company_name }
            </th>
            <td className="px-6 py-4">
                { exp.position }
            </td>
            <td className="px-6 py-4">
                { exp.start_at } - { exp.end_at }
            </td>
            <td className="px-6 py-4">
                <PrimaryButton type="button" onClick={() => removeEmployeeExperience(index)}>Remove</PrimaryButton>
            </td>
        </tr>
    ) : 
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row" colSpan={4} className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
            No experience
        </th>
    </tr>

    // Page functions
    const changeBranch = (val) => {
        setData('branch', val.id)

        const deps = props.branches.find(e => e.id === val.id)

        updateDepartments(deps.departments)
    }
    const updateEmployee = (e) => {
        e.preventDefault();

        post(route('employees.update', props.employee), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employee - Update</h2>}
        >
            <Head title="Employee - Update" />

            <Card>
                <form onSubmit={updateEmployee}>
                    <CardHeader className=''>
                        <h3 className="p-6 font-bold text-gray-900">Update new employee</h3>
                    </CardHeader>
                    <CardBody>
                        <div id="personal-information">
                            <h5 className="mb-4 font-bold text-gray-900">Personal Information</h5>
                            <div className="grid grid-cols-2 mb-4">
                                <div>
                                    <InputLabel htmlFor="profile_picture" value="Profile picture" />

                                    <TextInput
                                        id="profile_picture"
                                        onChange={(e) => setData('profile_picture', e.target.files[0])}
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
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    className="mt-1 block w-full"
                                    autoComplete="address"

                                />

                                <InputError message={errors.address} className="mt-2" />
                            </div>
                        </div>
                        <hr className="drop-shadow-md" />
                        <div id="employement-information">
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
                                        onSelect={(val) => changeBranch(val)}
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
                        <hr className="drop-shadow-md" />
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
                        <hr className="drop-shadow-md" />
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
                                        className="mt-1 block w-full"
                                        data={props.school_types}
                                        val={undefined}
                                        onSelect={(e) => school_attainment.education_level = e.label}
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="year_graduated" value="Year graduated" />

                                    <TextInput
                                        id="year_graduated"
                                        ref={school_attainment.year_graduated}
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
                        <hr className="drop-shadow-md" />
                        <div id="experiences">
                            <h5 className="my-4 font-bold text-gray-900">Experiences</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <div>
                                    <InputLabel htmlFor="company_name" value="Company name" />

                                    <TextInput
                                        id="company_name"
                                        ref={employee_experience.company_name}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="company_name"
                                    />

                                </div>

                                <div>
                                    <InputLabel htmlFor="position" value="Position" />

                                    <TextInput
                                        id="position"
                                        ref={employee_experience.position}
                                        type="text"
                                        className="mt-1 block w-full"
                                        autoComplete="position"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                                <div>
                                    <InputLabel htmlFor="start_at" value="Start at" />

                                    <TextInput
                                        id="start_at"
                                        ref={employee_experience.start_at}
                                        type="date"
                                        className="mt-1 block w-full"
                                        autoComplete="start_at"
                                    />

                                </div>
                                <div>
                                    <InputLabel htmlFor="end_at" value="End at" />

                                    <TextInput
                                        id="end_at"
                                        ref={employee_experience.end_at}
                                        type="date"
                                        className="mt-1 block w-full"
                                        autoComplete="end_at"
                                    />

                                </div>
                                <div>
                                    <InputLabel htmlFor="address" value="Action" />

                                    <PrimaryButton type="button" onClick={addExperience} className="w-full py-2 px-3 justify-center mt-1">Add</PrimaryButton>
                                </div>
                            </div>
                            
                            <Table className="mb-2">
                                <TableHead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Company name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Position
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Duration
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    { experienceData }
                                </TableBody>
                            </Table>
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
