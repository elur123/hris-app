import{_ as l,r as c,j as a,a as s,n as p}from"./app-49034c71.js";import{G as u}from"./GuestLayout-a1cbd81b.js";import{T as f,I as w}from"./TextInput-780a9f3b.js";import{I as h}from"./InputLabel-5be7ce4d.js";import{P as b}from"./PrimaryButton-921a12db.js";import"./ApplicationLogo-172d5cf0.js";function I(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});c.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{htmlFor:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:d}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(b,{className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{I as default};
