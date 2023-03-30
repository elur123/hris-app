import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ auth, header, children }) {
const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

return (
<div className="min-h-screen bg-gray-100">

   <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Link href="/" className="flex flex-wrap justify-center content-center gap-2">
                  <ApplicationLogo className="block h-9 w-auto fill-current text-white" />
                  <p className="text-white text-xl">HRIS</p>
            </Link>
         <ul className="space-y-2 mt-4">
            <li>
               <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                  <svg aria-hidden="true" className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">Dashboard</span>
               </NavLink>
            </li>
            <hr />
            <li>
               <NavLink href={route('departments.index')} active={route().current('departments.*')}>
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="ml-3">Department</span>
               </NavLink>
            </li>
            <li>
               <NavLink href={route('branches.index')} active={route().current('branches.*')}>
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  <span className="ml-3">Branch</span>
               </NavLink>
            </li>
            <li>
               <NavLink href={route('employees.index')} active={route().current('employees.*')}>
                  <svg fill="none" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                  </svg>
                  <span className="ml-3">Employees</span>
               </NavLink>
            </li>
            <hr />
            <li>
               <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
               </a>
            </li>
         </ul>
      </div>
   </aside>


   <div className="sm:ml-64">
      <nav className="bg-white border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex justify-between h-16">
                  <div className="flex">
                     <div className="md:hidden shrink-0 flex items-center">
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

         <div className={(showingNavigationDropdown ? 'block' : 'hidden' ) + ' sm:hidden' }>
               <div className="pt-2 pb-3 space-y-1">
                  <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                     Dashboard
                  </ResponsiveNavLink>
               </div>

               <div className="pt-4 pb-1 border-t border-gray-200">
                  <div className="px-4">
                     <div className="font-medium text-base text-gray-800">
                           {auth.user.name}
                     </div>
                     <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                  </div>

                  <div className="mt-3 space-y-1">
                     <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                     <ResponsiveNavLink method="post" href={route('logout')} as="button">
                           Log Out
                     </ResponsiveNavLink>
                  </div>
               </div>
         </div>
      </nav>

      {header && (
      <header className="bg-white shadow">
         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
      </header>
      )}

      <div className="p-4">

         <main>{children}</main>

      </div>
   </div>
    
</div>
);
}
