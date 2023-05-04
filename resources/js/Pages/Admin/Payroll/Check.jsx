import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card'
import CardHeader from '@/Components/CardHeader'
import CardBody from '@/Components/CardBody'
import CardFooter from '@/Components/CardFooter'
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import Button from '@/Components/Button';
import Modal from '@/Components/Modal';

import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Check(props) {
    const [isShowModal, showModal] = useState(false);
    const [isApprovalModal, showApprovalModal] = useState(false);
    const [approvalType, setApprovalType] = useState('Approve');
    const [employeePay, editEmployee] = useState();

    const { data, setData, put, reset, processing } = useForm({
        hours_rate: '',
        total_hours: '',
        overtime_hours: '',
        leave_days: ''
    });

    const selectPay = (pay) => {
        showModal(true); 
        editEmployee(pay)

        data.hours_rate = pay.hours_rate
        data.total_hours = pay.total_hours
        data.overtime_hours = pay.overtime_hours
        data.leave_days = pay.leave_days
    }

    const updatePay = (e) => {
        e.preventDefault();

        put(route('payrolls.update', employeePay), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                showModal(false)
                editEmployee(null)
            },
            onError: () => {},
        });
    };

    const showModalApproval = (type) => {
        showApprovalModal(true)
        setApprovalType(type)
    }

    const checkPayroll = () => {
        let status = approvalType === 'Approve' ? 2 : 3;

        router.put(route('payrolls.checked', props.payroll), { status })
    }

    const renderPayList = props.payroll.list.map((list, index) => {
        return <tr className={index % 2 === 0 ? " bg-gray-100 hover:bg-gray-200" : "bg-gray-50 hover:bg-gray-200"} key={index}>
            <td className="border px-3 py-2">{list.employee.first_name + ' ' + list.employee.last_name}</td>
            <td className="border px-3 py-2">{list.hours_rate}</td>
            <td className="border px-3 py-2">{list.total_hours}</td>
            <td className="border px-3 py-2">{list.overtime_hours}</td>
            <td className="border px-3 py-2">{list.leave_days}</td>
            <td className="border px-3 py-2">{list.total}</td>
            <td className="border px-3 py-2">
                { props.payroll.status_id === 1 ? <Button className="px-2 py-1 text-white bg-green-500 hover:text-white hover:bg-green-400 rounded" onClick={() => selectPay(list)}>Edit</Button> : <span>No action</span> }
            </td>
        </tr>
    })

    const actions = props.payroll.status_id === 1 
    ? <>
        <Button type="button" className="p-2 rounded text-white bg-green-500 hover:bg-green-600" onClick={() => showModalApproval('Approve')}>Approve</Button>
        <Button type="button" className="p-2 rounded text-white bg-red-500 hover:bg-red-600" onClick={() => showModalApproval('Decline')}>Decline</Button>
    </>
    : <span>No actions</span> 

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
                    <div id="payroll-list" className="my-4 overflow-y-auto">
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
                <CardFooter className="flex justify-between">
                    {actions}
                </CardFooter>
            </Card>

            <Modal show={isShowModal}>
                <form onSubmit={updatePay}>
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
                                type="number"
                                className="mt-1 block w-full"
                                autoComplete="rate"
                                value={data.hours_rate}
                                onChange={(e) => setData('hours_rate', e.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <InputLabel htmlFor="working_hours" value="Working hours" />

                            <TextInput
                                id="working_hours"
                                type="number"
                                className="mt-1 block w-full"
                                autoComplete="working_hours"
                                value={data.total_hours}
                                onChange={(e) => setData('total_hours', e.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <InputLabel htmlFor="overtime_hours" value="Overtime hours" />

                            <TextInput
                                id="overtime_hours"
                                type="number"
                                className="mt-1 block w-full"
                                autoComplete="overtime_hours"
                                value={data.overtime_hours}
                                onChange={(e) => setData('overtime_hours', e.target.value)}
                            />
                        </div>

                        <div className="my-4">
                            <InputLabel htmlFor="leave_days" value="Leave days" />

                            <TextInput
                                id="leave_days"
                                type="number"
                                className="mt-1 block w-full"
                                autoComplete="leave_days"
                                value={data.leave_days}
                                onChange={(e) => setData('leave_days', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                        <Button className="p-2 rounded text-white bg-green-500 hover:bg-green-600" disabled={processing}>Update</Button>
                    </div>
                </form>
            </Modal>

            <Modal show={isApprovalModal}>
                <div className="p-4 border border-bottom flex justify-between items-center">
                    <h1 className="text-2xl">{approvalType} this payroll?</h1>
                </div>
                <div className="p-4 border border-bottom">
                    <p>Are you sure you want to {approvalType} this payroll!</p>
                </div>
                <div className="p-4 flex items-center gap-4">
                    <Button className="p-2 rounded text-white bg-green-500 hover:bg-green-600" onClick={checkPayroll}>Yes</Button>
                    <Button className="p-2 rounded text-white bg-red-500 hover:bg-red-600" onClick={() => showApprovalModal(false)}>No</Button>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
