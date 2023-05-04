import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ auth, header, children }) {
const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

return (
<div className="w-full min-h-screen bg-gray-100">

   <aside id="logo-sidebar" className={'fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0' + (showingNavigationDropdown ? ' translate-x-0' : ' -translate-x-full')} aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-cyan-900">
            <Link href="/" className="flex flex-wrap justify-center content-center gap-2">
                  <ApplicationLogo className="block h-5 w-auto fill-current text-white" />
                  <p className="text-white text-xl">HRIS</p>
            </Link>
         <ul className="space-y-1 mt-4">
            <li>
               <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                  <svg aria-hidden="true" className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">Dashboard</span>
               </NavLink>
            </li>
            <hr />
            <li>
               <NavLink href={route('branches.index')} active={route().current('branches.*')}>
                  <svg aria-hidden="true" className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="ml-3">Branch</span>
               </NavLink>
            </li>
            <li>
               <NavLink href={route('employees.index')} active={route().current('employees.*')}>
                  <svg fill="none" className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                  </svg>
                  <span className="ml-3">Employees</span>
               </NavLink>
            </li>
            <hr />
            <li>
               <NavLink href={route('attendances.index')} active={route().current('attendances.*')}>
                  <svg className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                  </svg>
                  <span className="ml-3">Attendances</span>
               </NavLink>
            </li>
            <li>
               <NavLink href={route('overtimerequests.index')} active={route().current('overtimerequests.*')}>
                  <svg className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="ml-3">Overtime Request</span>
               </NavLink>
            </li>
            <li>
               <NavLink href={route('leaverequests.index')} active={route().current('leaverequests.*')}>
                  <svg className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                  <span className="ml-3">Leave Request</span>
               </NavLink>
            </li>
            <hr />
            <li>
               <NavLink href={route('payrolls.index')} active={route().current('payrolls.*')}>
                  <svg className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  <span className="ml-3">Payroll</span>
               </NavLink>
            </li>
            <hr />
            <li>
               <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
               </a>
            </li>
            <li>
               <NavLink href={route('departments.index')} active={route().current('departments.*')}>
                  <svg className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                     <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                     <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                     <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3">Department</span>
               </NavLink>
            </li>
            <li>
               <NavLink href={route('positions.index')} active={route().current('positions.*')}>
                  <svg className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                     <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                     <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                     <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>

                  <span className="ml-3">Positions</span>
               </NavLink>
            </li>
            <li>
               <NavLink href={route('holidays.index')} active={route().current('holidays.*')}>
                  <svg className="flex-shrink-0 w-4 h-4 text-white transition duration-75 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                     <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                     <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                     <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>

                  <span className="ml-3">Holidays</span>
               </NavLink>
            </li>
         </ul>
      </div>
   </aside>


   <div className={'sm:ml-64 '+ (showingNavigationDropdown ? ' ml-64' : '')}>
      <nav className="bg-white border-b border-gray-100">
         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex justify-between h-16">
                  <div className="flex">
                     <div className="sm:hidden shrink-0 flex items-center">
                           <button onClick={()=> setShowingNavigationDropdown((previousState) => !previousState)}
                              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                              hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500
                              transition duration-150 ease-in-out"
                           >
                                 <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path className={!showingNavigationDropdown ? 'inline-flex' : 'hidden' }
                                       strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                       d="M4 6h16M4 12h16M4 18h16" />
                                    <path className={showingNavigationDropdown ? 'inline-flex' : 'hidden' }
                                       strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                 </svg>
                           </button>
                     </div>

                     {/* <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                           <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                              Dashboard
                           </NavLink>
                     </div> */}
                  </div>

                  <div className="flex items-center ml-6">
                     <div className="ml-3 relative">
                           <Dropdown>
                              <Dropdown.Trigger>
                                 <span className="inline-flex rounded-md">
                                       <button type="button"
                                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                          {auth.user.name}

                                          <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor">
                                             <path fillRule="evenodd"
                                                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                   clipRule="evenodd" />
                                          </svg>
                                       </button>
                                 </span>
                              </Dropdown.Trigger>

                              <Dropdown.Content>
                                 <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                 <Dropdown.Link href={route('logout')} method="post" as="button">
                                       Log Out
                                 </Dropdown.Link>
                              </Dropdown.Content>
                           </Dropdown>
                     </div>
                  </div>

                  {/* <div className="-mr-2 flex items-center sm:hidden">
                     <button onClick={()=> setShowingNavigationDropdown((previousState) => !previousState)}
                           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                           hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500
                           transition duration-150 ease-in-out"
                           >
                           <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path className={!showingNavigationDropdown ? 'inline-flex' : 'hidden' }
                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                 d="M4 6h16M4 12h16M4 18h16" />
                              <path className={showingNavigationDropdown ? 'inline-flex' : 'hidden' }
                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                           </svg>
                     </button>
                  </div> */}
               </div>
         </div>

         
      </nav>

      {header && (
      <header className="px-4 bg-white shadow">
         <div className="max-w-8xl mx-auto py-4 px-8 sm:px-4 lg:px-8">{header}</div>
      </header>
      )}

      <div className="p-4">

         <main>{children}</main>

      </div>
   </div>
    
</div>
);
}
