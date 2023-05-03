import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import Modal from '@/Components/Modal';

import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function Check(props) {
    const [isShowModal, showModal] = useState(false);
    const [employeePay, editEmployee] = useState();

    const updatePayroll = (e) => {
        
    };

    const renderPayList = props.payroll.list.map((list, index) => {
        return <tr className={index % 2 === 0 ? " bg-gray-100 hover:bg-gray-200" : "bg-gray-50 hover:bg-gray-200"} key={index}>
            <td className="border px-3 py-2">{list.employee.first_name + ' ' + list.employee.last_name}</td>
            <td className="border px-3 py-2">{list.hours_rate}</td>
            <td className="border px-3 py-2">{list.total_hours}</td>
            <td className="border px-3 py-2">{list.overtime_hours}</td>
            <td className="border px-3 py-2">{list.leave_days}</td>
            <td className="border px-3 py-2">{list.total}</td>
            <td className="border px-3 py-2">
                <Button className="px-2 py-1 text-white bg-green-500 hover:text-white hover:bg-green-400 rounded" onClick={() => {showModal(true); editEmployee(list)}}>Edit</Button>
            </td>
        </tr>
    })

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payroll - Check</h2>}
        >
            <Head title="Payroll - Check" />

            <Card>
                <CardHeader className='p-4 flex items-center gap-4'>
                    <Link href={route('payrolls.index')}>
                        <svg className="text-gray-900 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </Link>

                    <h3 className="text-gray-900">Check payroll</h3>
                </CardHeader>
                <CardBody>
                    <div id="payroll-information" className="mb-4">
                        <h5 className="mb-4 font-bold text-gray-900">Payroll Information</h5>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <TextInput
                                    type="text"
                                    className="mb-1 block w-full bg-gray-100 border-0"
                                    value={props.payroll.branch.name}
                                    disabled
                                />
                                <InputLabel htmlFor="branch" value="Branch name" />
                            </div>

                            <div>
                                <TextInput
                                    type="text"
                                    className="mb-1 block w-full bg-gray-100 border-0"
                                    value={props.payroll.from + ' - ' + props.payroll.to}
                                    disabled
                                />
                                <InputLabel htmlFor="cut_off" value="Cut off" />
                            </div>

                            <div>
                                <TextInput
                                    type="text"
                                    className="mb-1 block w-full bg-gray-100 border-0"
                                    value={props.payroll.admin_prepared.name}
                                    disabled
                                />
                                <InputLabel htmlFor="prepared_by" value="Prepared by" />
                            </div>

                            <div>
                                <TextInput
                                    type="text"
                                    className="mb-1 block w-full bg-gray-100 border-0"
                                    value={props.payroll.status.label}
                                    disabled
                                />
                                <InputLabel htmlFor="status" value="Status" />
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div id="payroll-list" className="my-4">
                        <h5 className="mb-4 font-bold text-gray-900">Pay List</h5>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 border text-white">Employee</th>
                                    <th className="px-4 py-3 border text-white">Rate (Per hour)</th>
                                    <th className="px-4 py-3 border text-white">Working hours</th>
                                    <th className="px-4 py-3 border text-white">Overtime hours</th>
                                    <th className="px-4 py-3 border text-white">Leave days</th>
                                    <th className="px-4 py-3 border text-white">Total</th>
                                    <th className="px-4 py-3 border text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderPayList}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
                <CardFooter>

                </CardFooter>
            </Card>

            <Modal show={isShowModal}>
                <div className="p-4 border border-bottom flex justify-between items-center">
                    <h1 className="text-2xl">Update pay of {employeePay ? employeePay.employee.first_name + ' ' + employeePay.employee.last_name : 'NA'}</h1>
                    <Button type="button" className="bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => showModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </div>
                <div className="p-4 border border-bottom">
                    <div className="mb-4">
                        <InputLabel htmlFor="rate" value="Rate" />

                        <TextInput
                            id="rate"
                            value={employeePay ? employeePay.hours_rate : 0}
                            type="number"
                            className="mt-1 block w-full"
                            autoComplete="rate"
                        />
                    </div>

                    <div className="my-4">
                        <InputLabel htmlFor="working_hours" value="Working hours" />

                        <TextInput
                            id="working_hours"
                            value={employeePay ? employeePay.total_hours : 0}
                            type="number"
                            className="mt-1 block w-full"
                            autoComplete="working_hours"
                        />
                    </div>

                    <div className="my-4">
                        <InputLabel htmlFor="overtime_hours" value="Overtime hours" />

                        <TextInput
                            id="overtime_hours"
                            value={employeePay ? employeePay.overtime_hours : 0}
                            type="number"
                            className="mt-1 block w-full"
                            autoComplete="overtime_hours"
                        />
                    </div>

                    <div className="my-4">
                        <InputLabel htmlFor="leave_days" value="Leave days" />

                        <TextInput
                            id="leave_days"
                            value={employeePay ? employeePay.leave_days : 0}
                            type="number"
                            className="mt-1 block w-full"
                            autoComplete="leave_days"
                        />
                    </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                    <Button type="button" className="p-2 rounded text-white bg-green-500 hover:bg-green-600" onClick={updatePayroll}>Update</Button>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
