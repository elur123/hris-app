import{j as t,a as e,n as i}from"./app-6971d528.js";import{A as s}from"./AuthenticatedLayout-d41a3d7c.js";import{C as n,a as d,b as l}from"./CardBody-bf2dd6e9.js";import{B as c}from"./ButtonLink-f5619d32.js";import{D as m}from"./DataTable-36b76b6b.js";import"./ApplicationLogo-4a6aef4f.js";import"./transition-26b7e6cd.js";function v(o){const a=["Position name","Created At","Updated At","Actions"],r={label:"Position name",created_at:"Created At",updated_at:"Updated At",action:"Actions"};return t(s,{auth:o.auth,errors:o.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Positions"}),children:[e(i,{title:"Positions"}),t(n,{children:[t(d,{className:"p-4 flex justify-between items-center",children:[e("h3",{className:"text-gray-900",children:"Positions List"}),t(c,{href:route("positions.create"),className:"bg-green-500 hover:text-white hover:bg-green-400",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})}),"New Position"]})]}),e(l,{children:e("div",{className:"relative overflow-x-auto sm:rounded-lg",children:e(m,{columns:a,mapping:r,data:o.positions})})})]})]})}export{v as default};