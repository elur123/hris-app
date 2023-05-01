import{r as i,_ as C,j as t,a as e,n as y,d as x}from"./app-359c51dc.js";import{A as N}from"./AuthenticatedLayout-09e2fcfa.js";import{C as w,a as b,b as k}from"./CardBody-63b152f2.js";import{C as L}from"./CardFooter-7607320b.js";import{T as c,I as s}from"./InputError-d1c51091.js";import{T as S}from"./TextAreaInput-a6ff58e3.js";import{I as l}from"./InputLabel-f50d2a8a.js";import{S as q}from"./Select-bbc9d194.js";import{P as F}from"./PrimaryButton-eded6ccb.js";import"./ApplicationLogo-e3ab5e5c.js";import"./transition-d926d5fa.js";import"./platform-8453adbf.js";function z(m){const d=i.useRef(),u=i.useRef(),h=i.useRef(),{data:n,setData:a,errors:o,post:p,reset:f,processing:v,recentlySuccessful:I}=C({from:"",to:"",type:1,notes:""}),g=r=>{r.preventDefault(),p(route("leaverequests.store"),{preserveScroll:!0,onSuccess:()=>f(),onError:()=>{}})};return t(N,{auth:m.auth,errors:m.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Leave Request - Create"}),children:[e(y,{title:"Leave Request - Create"}),e(w,{children:t("form",{onSubmit:g,children:[t(b,{className:"p-4 flex items-center gap-4",children:[e(x,{href:route("leaverequests.index"),children:e("svg",{className:"text-gray-900 w-4 h-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),e("h3",{className:"text-gray-900",children:"Create new leave request"})]}),t(k,{children:[t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-2",children:[t("div",{children:[e(l,{htmlFor:"from",value:"From"}),e(c,{id:"from",ref:d,value:n.from,onChange:r=>a("from",r.target.value),type:"date",className:"mt-1 block w-full",autoComplete:"from"}),e(s,{message:o.from,className:"mt-2"})]}),t("div",{children:[e(l,{htmlFor:"to",value:"To"}),e(c,{id:"to",ref:u,value:n.to,onChange:r=>a("to",r.target.value),type:"date",className:"mt-1 block w-full",autoComplete:"to"}),e(s,{message:o.to,className:"mt-2"})]})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-4",children:[t("div",{children:[e(l,{htmlFor:"type",value:"Type"}),e(q,{id:"type",val:void 0,className:"mt-1 block w-full",data:m.types,onSelect:r=>a("type",r.id)}),e(s,{message:o.type,className:"mt-2"})]}),t("div",{children:[e(l,{htmlFor:"notes",value:"Notes"}),e(S,{id:"notes",ref:h,value:n.notes,onChange:r=>a("notes",r.target.value),className:"mt-1 block w-full",autoComplete:"notes"}),e(s,{message:o.notes,className:"mt-2"})]})]})]}),e(L,{children:e(F,{disabled:v,children:"Create"})})]})})]})}export{z as default};
