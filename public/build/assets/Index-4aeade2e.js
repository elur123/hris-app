import{j as t,a as e,n as o}from"./app-6971d528.js";import{A as i}from"./AuthenticatedLayout-d41a3d7c.js";import{C as n,a as l,b as d}from"./CardBody-bf2dd6e9.js";import{B as m}from"./ButtonLink-f5619d32.js";import{D as c}from"./DataTable-36b76b6b.js";import"./ApplicationLogo-4a6aef4f.js";import"./transition-26b7e6cd.js";function v(r){const a=["Name","Email","Role","Created At","Updated At","Actions"],s={name:"Name",email:"Email",role:"Role",created_at:"Created At",updated_at:"Updated At",action:"Actions"};return t(i,{auth:r.auth,errors:r.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Users"}),children:[e(o,{title:"Users"}),t(n,{children:[t(l,{className:"p-4 flex justify-between items-center",children:[e("h3",{className:"text-gray-900",children:"Users List"}),t(m,{href:route("users.create"),className:"bg-green-500 hover:text-white hover:bg-green-400",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})}),"New User"]})]}),e(d,{children:e("div",{className:"relative overflow-x-auto sm:rounded-lg",children:e(c,{columns:a,mapping:s,data:r.users})})})]})]})}export{v as default};
