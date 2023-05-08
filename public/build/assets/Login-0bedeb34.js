import{_ as g,r as h,j as a,a as e,n as b,d as x}from"./app-6971d528.js";import{C as w}from"./Checkbox-4b613de6.js";import{G as N}from"./GuestLayout-76cfac20.js";import{I as l}from"./InputError-30030240.js";import{I as n}from"./InputLabel-9fb9fb3c.js";import{P as v}from"./PrimaryButton-37928027.js";import{T as i}from"./TextInput-b8102b3d.js";import"./ApplicationLogo-4a6aef4f.js";function D({status:m,canResetPassword:c}){const{data:r,setData:d,post:u,processing:p,errors:o,reset:f}=g({email:"",password:"",remember:""});h.useEffect(()=>()=>{f("password")},[]);const t=s=>{d(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(N,{children:[e(b,{title:"Log in"}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),a("form",{onSubmit:s=>{s.preventDefault(),u(route("login"))},children:[a("div",{children:[e(n,{htmlFor:"email",value:"Email"}),e(i,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:t}),e(l,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{htmlFor:"password",value:"Password"}),e(i,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:t}),e(l,{message:o.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:a("label",{className:"flex items-center",children:[e(w,{name:"remember",value:r.remember,onChange:t}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),a("div",{className:"flex items-center justify-end mt-4",children:[c&&e(x,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e(v,{className:"p-3 ml-4",disabled:p,children:"Log in"})]})]})]})}export{D as default};