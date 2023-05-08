import{a as e,j as a,n}from"./app-6971d528.js";import{A as c}from"./AuthenticatedLayout-d41a3d7c.js";import{C as t}from"./CardWidget-fac83c40.js";import{B as s}from"./ButtonLink-f5619d32.js";import"./ApplicationLogo-4a6aef4f.js";import"./transition-26b7e6cd.js";function g(l){console.log(l.data.attendance_log);const d=l.data.attendance_log===null?e("div",{className:"p-4 grid grid-cols-1",children:a(t,{className:"bg-green-400",children:[e("p",{className:"mb-2 text-xl font-bold",children:"You don't sign in today."}),e(s,{href:route("clock.index"),className:"bg-green-600 hover:text-white hover:bg-green-500",children:"Sign in"})]})}):a("div",{className:"p-4 grid grid-cols-1 md:grid-cols-2 gap-4",children:[a(t,{className:"bg-green-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.attendance_log.sign_in}),e("p",{className:"text-xl font-bold",children:"Sign in"})]}),a(t,{className:"bg-yellow-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.attendance_log.sign_out??"Not yet sign out"}),e("p",{className:"text-xl font-bold",children:"Sign out"})]})]});return a(c,{auth:l.data.auth,errors:l.data.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),children:[e(n,{title:"Dashboard"}),e("div",{className:"py-12 mb-2",children:e("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:a("div",{className:"p-4 grid grid-cols-1 md:grid-cols-4 gap-4",children:[a(t,{className:"bg-green-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.branch_count}),e("p",{className:"text-xl font-bold",children:"Total Branch"})]}),a(t,{className:"bg-yellow-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.department_count}),e("p",{className:"text-xl font-bold",children:"Total Department"})]}),a(t,{className:"bg-red-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.employee_count}),e("p",{className:"text-xl font-bold",children:"Total Employees"})]}),a(t,{className:"bg-green-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.attendance_count}),e("p",{className:"text-xl font-bold",children:"Today Attendance"})]}),a(t,{className:"bg-yellow-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.overtime_count}),e("p",{className:"text-xl font-bold",children:"Total Overtime Requests"})]}),a(t,{className:"bg-red-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.leave_count}),e("p",{className:"text-xl font-bold",children:"Total Leave Requests"})]}),a(t,{className:"bg-green-400",children:[e("p",{className:"mb-2 text-3xl font-bold",children:l.data.payroll_count}),e("p",{className:"text-xl font-bold",children:"Total Payroll"})]})]})})})}),e("div",{className:"mb-4",children:e("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:a("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:[e("h5",{className:"px-4 pt-3 text-2xl font-bold text-gray-900",children:"Your attendance today"}),e("div",{className:"max-w-6xl mx-auto",children:d})]})})})]})}export{g as default};