import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import AdminMenu from '@/Layouts/Components/AdminMenu';
import EmployeeMenu from '@/Layouts/Components/EmployeeMenu';

export default function Authenticated({ auth, header, children }) {
const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

const IS_ADMIN = auth.user.role_id === 1;

const menu = IS_ADMIN ? <AdminMenu /> : <EmployeeMenu />;

return (
<div className="w-full min-h-screen bg-gray-100">

   <aside id="logo-sidebar" className={'fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0' + (showingNavigationDropdown ? ' translate-x-0' : ' -translate-x-full')} aria-label="Sidebar">
      <div className="h-full px-3 py-2 overflow-y-auto bg-cyan-900">
            <Link href="/" className="flex flex-wrap justify-center content-center gap-1">
                  <ApplicationLogo className="block h-5 w-auto fill-current text-white" />
                  <p className="text-white text-xl">HRIS</p>
            </Link>
         {menu}
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
