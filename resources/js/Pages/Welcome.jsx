import { Link, Head } from '@inertiajs/react';
import Button from '@/Components/Button';
import Card from '@/Components/Card';
import { useState, useEffect } from 'react'


export default function Welcome(props) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    const options = {
      timeZone: 'Asia/Manila',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    const timeString = currentTime.toLocaleString('en-US', options);

    return (
        <>
            <Head title="Welcome" />
            <div className="border border-bottom">
                <div className="container mx-auto py-2 flex justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <div className="flex gap-2 items-center">
                            <svg
                                viewBox="0 0 62 65"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
                                    fill="#22c55e"
                                />
                            </svg>
                            <span className="font-extrabold text-xl text-cyan-800">Humanage</span>
                        </div>
                        <nav>
                            <ul className="list-none">
                                <li className="inline mx-2 p-2">
                                    <a className="text-gray-400" href="#">Products</a>
                                </li>
                                <li className="inline mx-2 p-2">
                                    <a className="text-gray-400" href="#">Resources</a>
                                </li>
                                <li className="inline mx-2 p-2">
                                    <a className="text-gray-400" href="#">Pricing</a>
                                </li>
                                <li className="inline mx-2 p-2">
                                    <a className="text-gray-400" href="#">Company</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Link href={route('login')} className="p-2 font-extrabold text-cyan-800">Login</Link>
                        <Link href={route('register')} className="p-2 font-extrabold text-cyan-800 border border-cyan-800 rounded-lg">Start for free</Link>
                    </div>
                </div>
            </div>
            <section className="container mx-auto my-8 py-10">
                <div className="grid grid-cols-2 gap-6 items-center">
                    <div className="py-1">
                        <h1 className="py-3 text-6xl text-cyan-800 font-extrabold leading-tight">Maximizing Your Workforce Potential</h1>
                        <p className="py-3 text-gray-400 leading-relaxed">Humanage is a people management solution that helps in employee onboarding, performance tracking,
                            payroll, and attendance management.
                        </p>
                        <div className="my-3">
                            <div className="flex gap-3">
                                <Link href={route('login')} className="px-4 py-2 font-extrabold bg-green-500 text-white rounded-lg">Start for free</Link>
                                <Link href={route('register')} className="px-4 py-2 font-extrabold text-cyan-800 border border-cyan-800 rounded-lg">Meet an Expert</Link>
                            </div>
                            <p className="py-3 text-gray-400">Setup in 5 minutes. No credit card required.</p>
                        </div>
                        <div className="my-5">
                            <div className="flex items-center gap-7">
                                <div className="flex items-center gap-2">
                                    <div className="p-3 bg-gray-100 rounded-full">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-start gap-1">
                                        <div className="flex items-center px-1 gap-2">
                                            <p className="text-gray-400">Capterra</p>
                                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                            <p className="text-cyan-900 font-extrabold">4.9</p>
                                        </div>
                                        <div className="flex items-center px-1">
                                            <svg aria-hidden="true" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-3 bg-gray-100 rounded-full">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-start gap-1">
                                        <div className="flex items-center px-1 gap-2">
                                            <p className="text-gray-400">Capterra</p>
                                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                            <p className="text-cyan-900 font-extrabold">4.9</p>
                                        </div>
                                        <div className="flex items-center px-1">
                                            <svg aria-hidden="true" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full overflow-hidden relative rounded-2xl">
                        <div className="w-full h-full absolute z-0 top-0 text-white bg-cyan-900 opacity-95 rounded-2xl"></div>
                        <div className="w-full h-full relative z-10 p-5">
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div className="p-4 bg-white shadow rounded" id="dev-card">
                                    <div className="w-[80px] h-[80px] overflow-hidden bg-cyan-900 rounded-full mx-auto p-1">
                                        <img className="w-full h-[80px]" src="/img/dev_profile.png" alt="Ruel Israe" />
                                    </div>
                                    <div className="py-3">
                                        <h3 className="text-cyan-800 text-center font-bold">Ruel Israel</h3>
                                        <p className="text-gray-500 text-sm text-center">Developer</p>
                                    </div>

                                    <div className="py-3">
                                        <hr />
                                    </div>

                                    <div className="py-3 text-center">
                                        <span className="px-2 py-1 bg-green-50 rounded-lg text-green-500 font-bold">09555347395</span>
                                    </div>

                                </div>
                                <div className="p-4 bg-white shadow rounded">
                                    <div className="mb-3">
                                        <p className="text-gray-500">{props.date}</p>
                                        <p className="my-2 p-3 border rounded-lg font-bold text-3xl text-cyan-900 text-center">{timeString}</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="my-2 text-xs text-gray-500">Project task</div>
                                        <p className="my-2 p-3 border rounded-lg font-bold text-lg text-cyan-900">

                                            Web development
                                        </p>
                                    </div>
                                    <Button className="w-full my-2 px-4 py-2 text-center text-cyan-900 font-bold bg-amber-100 rounded-lg ">Clock Out</Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="p-4 bg-white shadow rounded">
                                    <div className="flex gap-2">
                                        <div className="pr-6 border-r-2">
                                            <p className="my-2  text-gray-400">Payroll Summary</p>
                                            <h4 className="my-2 text-4xl font-bold text-cyan-900">$32,000</h4>
                                            <Button className="my-2 px-2 py-1 flex items-center gap-1 text-sm text-cyan-900 border border-cyan-800 rounded-lg">
                                                <span>See Details</span>
                                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </Button>
                                        </div>
                                        <div className="px-2 flex flex-wrap justify-evenly flex-1 gap-4 content-end">
                                            <div className="flex flex-col items-center">
                                                <div className="w-full h-full py-2 text-cyan-100 bg-cyan-100 rounded-md">t</div>
                                                <span>Jan</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="w-full h-full py-3 text-cyan-100 bg-cyan-100 rounded-md">t</span>
                                                <span>Feb</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="w-full h-full py-5 text-cyan-100 bg-cyan-100 rounded-md">t</span>
                                                <span>Mar</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="w-full h-full py-4 text-cyan-100 bg-cyan-100 rounded-md">t</span>
                                                <span>Apr</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="w-full h-full py-2 text-cyan-100 bg-cyan-100 rounded-md">t</span>
                                                <span>May</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
            <div className="container mx-auto my-8 py-10">
                <h3 className="w-1/2 mx-auto py-3 text-center text-cyan-800 text-2xl font-bold">Join over 1,000+ companies around the world that trust the Humanage Platfor.</h3>
                <div className="my-8 py-3 flex justify-between items-center">
                    <h4 className="text-3xl text-gray-400 font-bold">Company One</h4>
                    <h4 className="text-3xl text-gray-400 font-bold">Company Two</h4>
                    <h4 className="text-3xl text-gray-400 font-bold">Company Three</h4>
                    <h4 className="text-3xl text-gray-400 font-bold">Company Four</h4>
                </div>
            </div>
            <section className="container mx-auto my-8 py-10 bg-gray-100 rounded-3xl">
                <h1 className="w-1/2 mx-auto py-3 text-center text-5xl text-cyan-800 font-extrabold leading-tight">Traditional HR Software Is Outdated. Why Humanage?</h1>
                <p className="w-1/2 mx-auto py-3 text-center text-xl text-gray-500 leading-relaxed">Humanage helps your teams to your organization, empowers your employees with self-service tools,
                 and allow them to connect with each other in a personal way.
                </p>
                <div className="w-full mt-8 p-5 flex gap-5">
                    <div className="p-3 w-full h-[360px] group overflow-hidden flex flex-col justify-between bg-white rounded-xl hover:bg-cyan-900 hover:gap-2" id="card">
                        <div id="icon" className="w-10 p-1 bg-gray-100 rounded-xl group-hover:bg-green-300">
                            <svg className="w-6 h-6 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                        </div>
                        <div className="w-full transition-all ease-in-out delay-150 group-hover:flex-1" id="content">
                            <div id="header">
                                <p className="text-gray-600 group-hover:text-gray-400">Simplicity</p>
                                <h3 className="py-2 text-cyan-800 text-2xl font-bold group-hover:text-white">Focus on Thing That Are More Important</h3>
                            </div>
                            <div id="body" className="w-full h-0 transition-all ease-in-out delay-150 opacity-0 group-hover:h-full group-hover:opacity-100">
                                <p className="w-full text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-full h-[360px] group overflow-hidden flex flex-col justify-between bg-white rounded-xl hover:bg-cyan-900 hover:gap-2" id="card">
                        <div id="icon" className="w-10 p-1 bg-gray-100 rounded-xl group-hover:bg-green-300">
                            <svg className="w-6 h-6 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                        </div>
                        <div className="w-full transition-all ease-in-out delay-150 group-hover:flex-1" id="content">
                            <div id="header">
                                <p className="text-gray-600 group-hover:text-gray-400">Flexibility</p>
                                <h3 className="py-2 text-cyan-800 text-2xl font-bold group-hover:text-white">Focus on Thing That Are More Important</h3>
                            </div>
                            <div id="body" className="w-full h-0 transition-all ease-in-out delay-150 opacity-0 group-hover:h-full group-hover:opacity-100">
                                <p className="w-full text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 w-full h-[360px] group overflow-hidden flex flex-col justify-between bg-white rounded-xl hover:bg-cyan-900 hover:gap-2" id="card">
                        <div id="icon" className="w-10 p-1 bg-gray-100 rounded-xl group-hover:bg-green-300">
                            <svg className="w-6 h-6 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                        </div>
                        <div className="w-full transition-all ease-in-out delay-150 group-hover:flex-1" id="content">
                            <div id="header">
                                <p className="text-gray-600 group-hover:text-gray-400">Productivity</p>
                                <h3 className="py-2 text-cyan-800 text-2xl font-bold group-hover:text-white">Focus on Thing That Are More Important</h3>
                            </div>
                            <div id="body" className="w-full h-0 transition-all ease-in-out delay-150 opacity-0 group-hover:h-full group-hover:opacity-100">
                                <p className="w-full text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto my-8 py-10">
                <div className="my-3">
                    <h1 className="w-1/2 mx-auto py-3 text-center text-5xl text-cyan-800 font-extrabold leading-tight">Empower Employees and Automate HR Processes</h1>
                </div>
                <div className="w-full my-3 grid grid-cols-2 gap-5">
                    <div className="bg-purple-300 p-5 rounded-lg">
                        <div className="p-3 mb-4 bg-cyan-900 flex justify-between items-center rounded-lg">
                            <svg
                                viewBox="0 0 62 65"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-green-500"
                            >
                                <path
                                    d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
                                    fill="#22c55e"
                                />
                            </svg>
                            <div id="left" className="flex items-center gap-3">
                                <span className="w-[120px] h-3 mx-1.5 bg-cyan-800 rounded"></span>
                                <span className="w-[80px] h-3 mx-1.5 bg-cyan-800 rounded"></span>
                                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                                <div className="w-[64px] h-[64px] overflow-hidden bg-cyan-800 rounded-full mx-auto p-1">
                                    <img className="w-full h-[64px]" src="/img/dev_profile.png" alt="Ruel Israe" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-3 mb-4 bg-white rounded-lg">
                            <div className="w-full py-3 border-b-2 border-gray-100 flex items-center gap-5">
                                <div className="w-[64px] h-[64px] overflow-hidden bg-cyan-800 rounded-full p-1">
                                    <img className="w-full h-[64px]" src="/img/dev_profile.png" alt="Ruel Israe" />
                                </div>
                                <div id="details">
                                    <h3 className="text-lg text-cyan-900 font-bold">Ericka Ocaris</h3>
                                    <p className="text-gray-400">Business Development</p>
                                </div>
                            </div>
                            <div className="my-4">
                                <p className="flex mb-3 items-center gap-5 text-gray-400">
                                    <span className="w-4 h-4 rounded-full bg-green-500">
                                        <svg className="w-4 h-4 text-white font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                    <span className="line-through">Ask candidate is she want to Mac or Windows</span>
                                </p>
                                <p className="flex mb-3 items-center gap-5 text-gray-400">
                                    <span className="w-4 h-4 rounded-full bg-green-500">
                                        <svg className="w-4 h-4 text-white font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                    <span className="line-through">Invite candidate to our next team lunch</span>
                                </p>
                                <p className="flex mb-3 items-center gap-5 text-gray-400">
                                    <span className="w-4 h-4 rounded-full bg-white border"></span>
                                    <span className="text-cyan-900 font-bold">Collecting documents</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full p-3 mb-3 bg-white rounded-lg">
                            <div className="w-full py-3 flex items-center gap-5">
                                <div className="w-[64px] h-[64px] overflow-hidden bg-cyan-800 rounded-full p-1">
                                    <img className="w-full h-[64px]" src="/img/dev_profile.png" alt="Ruel Israe" />
                                </div>
                                <div id="details">
                                    <h3 className="text-lg text-cyan-900 font-bold">Ruel Israel</h3>
                                    <p className="text-gray-400">CEO / Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <h3 className="py-3 text-3xl text-cyan-800 font-extrabold leading-tight">Create a Great Experience Before and After Joining</h3>
                        <p className="py-3 text-gray-400">
                            Make a great first impression by configuring and scheduling everything that needs to happen for all your new hires.
                        </p>
                        <div className="my-3">
                            <Button className="px-4 py-2 bg-green-500 text-white rounded-lg flex align-center gap-3">
                                Learn More
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Button>
                        </div>
                        <div className="my-3">
                             <p className="py-3 text-gray-400 italic">
                                "With everthing explained, onboarding was impressive. Humanage always goes the extra mile by improving the product regulary with updates".
                            </p>
                        </div>
                        <p className="py-0 text-gray-400"><span className="text-cyan-900 font-extrabold">Ericka Ocaris,</span> Senior HR Manager</p>
                    </div>
                </div>
            </section>
        </>
    );
}
