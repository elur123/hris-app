import{r as v,_ as C,j as t,F as k,a as e,n as L,d as A,g as F}from"./app-6971d528.js";import{A as S}from"./AuthenticatedLayout-d41a3d7c.js";import{C as _,a as j,b as q}from"./CardBody-bf2dd6e9.js";import{C as M}from"./CardFooter-2336f761.js";import{T as m}from"./TextInput-b8102b3d.js";import{T as D}from"./TextAreaInput-6fa5e844.js";import{I as d}from"./InputError-30030240.js";import{I as o}from"./InputLabel-9fb9fb3c.js";import{S as B}from"./Select-8d38ba99.js";import{M as I}from"./Modal-47f27604.js";import{B as n}from"./Button-d796747e.js";import{P as g}from"./PrimaryButton-37928027.js";import"./ApplicationLogo-4a6aef4f.js";import"./transition-26b7e6cd.js";import"./platform-04bfaf3f.js";function Y(r){const[f,i]=v.useState(!1),[u,b]=v.useState(0),{data:c,setData:s,errors:l,put:y,reset:N,processing:h,recentlySuccessful:T}=C({from:r.leave.from,to:r.leave.to,type:r.leave.leave_type_id,notes:r.leave.notes}),p=a=>{F.put(`/leaverequests/checked/${r.leave.id}`,{type:a,approvedDays:u}),i(!1)},w=a=>{a.preventDefault(),y(route("leaverequests.update",r.leave),{preserveScroll:!0,onSuccess:()=>N(),onError:()=>{}})},x=r.leave.status_id===1&&r.actions.can_check?t(k,{children:[e(g,{disabled:h,children:"Update"}),e(n,{type:"button",className:"p-2 rounded text-white bg-green-500 hover:bg-green-600",onClick:()=>i(!0),children:"Check"})]}):r.leave.status_id!==1?e("h4",{children:"No actions"}):e(g,{disabled:h,children:"Update"});return t(S,{auth:r.auth,errors:r.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Leave Request - Update"}),children:[e(L,{title:"Leave Request - Update"}),e(_,{children:t("form",{onSubmit:w,children:[t(j,{className:"p-4 flex items-center gap-4",children:[e(A,{href:route("leaverequests.index"),children:e("svg",{className:"text-gray-900 w-4 h-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),e("h3",{className:"text-gray-900",children:"Update leave request"})]}),t(q,{children:[t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-2",children:[t("div",{children:[e(o,{htmlFor:"from",value:"From"}),e(m,{id:"from",value:c.from,onChange:a=>s("from",a.target.value),type:"date",className:"mt-1 block w-full",autoComplete:"from"}),e(d,{message:l.from,className:"mt-2"})]}),t("div",{children:[e(o,{htmlFor:"to",value:"To"}),e(m,{id:"to",value:c.to,onChange:a=>s("to",a.target.value),type:"date",className:"mt-1 block w-full",autoComplete:"to"}),e(d,{message:l.to,className:"mt-2"})]})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-4",children:[t("div",{children:[e(o,{htmlFor:"type",value:"Type"}),e(B,{id:"type",val:void 0,className:"mt-1 block w-full",data:r.types,onSelect:a=>s("type",a.id)}),e(d,{message:l.type,className:"mt-2"})]}),t("div",{children:[e(o,{htmlFor:"notes",value:"Notes"}),e(D,{id:"notes",value:c.notes,onChange:a=>s("notes",a.target.value),className:"mt-1 block w-full",autoComplete:"notes"}),e(d,{message:l.notes,className:"mt-2"})]})]})]}),e(M,{className:"flex justify-between",children:x})]})}),t(I,{show:f,children:[t("div",{className:"p-4 border border-bottom flex justify-between items-center",children:[e("h1",{className:"text-2xl",children:"Approved Leave Request"}),e(n,{type:"button",className:"bg-gray-500 text-white rounded hover:bg-gray-600",onClick:()=>i(!1),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),e("div",{className:"p-4 border border-bottom",children:t("div",{children:[e(o,{htmlFor:"approved_days",value:"Approved Days"}),e(m,{id:"approved_days",value:u,onChange:a=>b(a.target.value),type:"number",className:"mt-1 block w-full",autoComplete:"approved_days"})]})}),t("div",{className:"p-4 flex justify-between items-center",children:[e(n,{type:"button",className:"p-2 rounded text-white bg-green-500 hover:bg-green-600",onClick:()=>p("Approved"),children:"Approved"}),e(n,{type:"button",className:"p-2 rounded text-white bg-red-500 hover:bg-red-600",onClick:()=>p("Disapproved"),children:"Disapproved"})]})]})]})}export{Y as default};