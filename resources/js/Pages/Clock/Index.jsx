import { Head, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

import TimeClock from '@/Components/TimeClock';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';


export default function Clock(props) {
    const [history, getHistory] = useState(props.flash.data)
    const employee_key = useRef()

    const { data, setData, errors, post, reset, processing } = useForm({
        employee_key: '',
    });

    const handleClock = (e) => {
        e.preventDefault();

        post(route('clock.store'), {
            preserveScroll: true,
            onSuccess: (data) => {
                getHistory(data.props.flash.data.histories)
                setTimeout(clearHistory, 5000)
            },
            onError: () => {},
        });
    };

    const clearHistory = () => {
        props.flash.data = null
        getHistory(null)
        employee_key.current.value = ''
        reset()
    }

    const attendanceData = history != null ?
        <div className="bg-green-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
        overflow-hidden shadow-sm sm:rounded-lg mb-5">
            <div className="px-2 py-5 flex justify-between">
                <h3 className="text-center text-2xl font-bold uppercase">  In / Out History</h3>
                <PrimaryButton onClick={clearHistory} className="p-2">Clear</PrimaryButton>
            </div>
            <div className="h-[500px] overflow-y-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-2 py-3 text-center text-white border">Time in</th>
                            <th className="px-2 py-3 text-center text-white border">Time out</th>
                        </tr>
                    </thead>
                    <tbody>
                        { history.map((attendance, index) => 
                            <tr key={attendance.id} className={index % 2 === 0 ? " bg-gray-100 hover:bg-gray-300" : " hover:bg-gray-300"}>
                                <td className="px-2 py-3 text-gray-900 text-center border">{attendance.start_at}</td>
                                <td className="px-2 py-3 text-gray-900 text-center border">{attendance.end_at}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div> : ''

    return (
        <div className="py-12 w-screen h-screen bg-[url('/img/clock_bg.jpg')] bg-cover bg-center">
            <Head title="Clock" />
            <div className="absolute top-0 w-full h-full bg-gray-200 opacity-50"></div>
            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-green-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100
                    overflow-hidden shadow-sm sm:rounded-lg mb-4">
                    <TimeClock />
                    <div className="p-6 flex justify-center align-center gap-5">
                        <form onSubmit={handleClock}>
                            <InputLabel htmlFor="employee_key" value="Employee Key" />
                            <TextInput
                                id="employee_key"
                                ref={employee_key}
                                type="text"
                                onChange={(e) => setData('employee_key', e.target.value)}
                                className="mt-1 block w-full"
                                autoComplete="employee_key"
                                placeholder="Enter employee key"
                            />
                            <InputError message={errors.employee_key} className="mt-2" />
                        </form>
                    </div>
                </div>

                {attendanceData}
            </div>
        </div>
    );
}
