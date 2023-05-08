import{r as p,_ as Y,j as t,a as e,n as W,d as z,g}from"./app-6971d528.js";import{A as G}from"./AuthenticatedLayout-d41a3d7c.js";import{C as J,a as K,b as O}from"./CardBody-bf2dd6e9.js";import{C as Q}from"./CardFooter-2336f761.js";import{T as m}from"./TextInput-b8102b3d.js";import{T as V}from"./TextAreaInput-6fa5e844.js";import{I as d}from"./InputError-30030240.js";import{I as r}from"./InputLabel-9fb9fb3c.js";import{S as _}from"./Select-8d38ba99.js";import{T as b,a as v,b as N}from"./TableBody-8caa7177.js";import{P as f}from"./PrimaryButton-37928027.js";import"./ApplicationLogo-4a6aef4f.js";import"./transition-26b7e6cd.js";import"./platform-04bfaf3f.js";function pe(l){const w=p.useRef(),k={id:l.employee.rate_type_id,label:l.employee.rate_type.label},C={id:l.employee.branch_id,label:l.employee.branch.name},F={id:l.employee.department_id,label:l.employee.department.name};let[S,E]=p.useState([{id:0,label:"Select Branch"}]),R={id:l.employee.position_id,label:l.employee.position.label};const y={fullname:p.useRef(),relationship:p.useRef()},h={school_name:p.useRef(),education_level:"Elementary",year_graduated:p.useRef()},s={company_name:p.useRef(),position:p.useRef(),start_at:p.useRef(),end_at:p.useRef()},{data:n,setData:i,errors:c,post:A,reset:D,processing:B,recentlySuccessful:X}=Y({_method:"put",profile_picture:"",first_name:l.employee.first_name??"",middle_name:l.employee.middle_name??"",last_name:l.employee.last_name??"",suffix:l.employee.suffix??"",birth_date:l.employee.date_of_birth??"",place_of_birth:l.employee.place_of_birth??"",email:l.employee.user.email??"",contact_no:l.employee.contact_no??"",address:l.employee.current_address??"",rate:l.employee.rate??"",rate_type:l.employee.rate_type_id,branch:l.employee.branch_id,department:l.employee.department_id,position:l.employee.position_id,family_members:l.employee.family_members,school_attainments:l.employee.educational_attainments,experiences:l.employee.experiences});p.useEffect(()=>(x(l.employee.branch),()=>{}),[]);const T=()=>{if(y.fullname.current.value==""||y.relationship.current.value==""){alert("Check, field required");return}const a={fullname:y.fullname.current.value,relationship:y.relationship.current.value};i("family_members",[...n.family_members,a]),y.fullname.current.value="",y.relationship.current.value=""},I=a=>{typeof n.family_members[a].id<"u"&&g.delete(`/employees/delete/family_member/${n.family_members[a].id}`),i(o=>{const u=[...o.family_members];return u.splice(a,1),{...o,family_members:u}})},P=n.family_members.length?n.family_members.map((a,o)=>t("tr",{className:"bg-white border-b dark:bg-gray-900 dark:border-gray-700",children:[e("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:a.fullname}),e("td",{className:"px-6 py-4",children:a.relationship}),e("td",{className:"px-6 py-4",children:e(f,{type:"button",onClick:()=>I(o),children:"Remove"})})]},o)):e("tr",{className:"bg-white border-b dark:bg-gray-900 dark:border-gray-700",children:e("th",{scope:"row",colSpan:3,className:"px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white",children:"No family member"})}),j=()=>{if(h.school_name.current.value==""||h.education_level==""||h.year_graduated.current.value==""){alert("Check, field required");return}const a={school_name:h.school_name.current.value,education_level:h.education_level,year_graduated:h.year_graduated.current.value};i("school_attainments",[...n.school_attainments,a]),h.school_name.current.value="",h.year_graduated.current.value=""},M=a=>{typeof n.school_attainments[a].id<"u"&&g.delete(`/employees/delete/educational_attainment/${n.school_attainments[a].id}`),i(o=>{const u=[...o.school_attainments];return u.splice(a,1),{...o,school_attainments:u}})},L=n.school_attainments.length?n.school_attainments.map((a,o)=>t("tr",{className:"bg-white border-b dark:bg-gray-900 dark:border-gray-700",children:[e("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:a.school_name}),e("td",{className:"px-6 py-4",children:a.education_level}),e("td",{className:"px-6 py-4",children:a.year_graduated}),e("td",{className:"px-6 py-4",children:e(f,{type:"button",onClick:()=>M(o),children:"Remove"})})]},o)):e("tr",{className:"bg-white border-b dark:bg-gray-900 dark:border-gray-700",children:e("th",{scope:"row",colSpan:4,className:"px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white",children:"No school attainment"})}),U=()=>{if(s.company_name.current.value==""||s.position.current.value==""||s.start_at.current.value==""||s.end_at.current.value==""){alert("Check, field required"),console.log(s);return}const a={company_name:s.company_name.current.value,position:s.position.current.value,start_at:s.start_at.current.value,end_at:s.end_at.current.value};i("experiences",[...n.experiences,a]),s.company_name.current.value="",s.position.current.value="",s.start_at.current.value="",s.end_at.current.value=""},q=a=>{typeof n.experiences[a].id<"u"&&g.delete(`/employees/delete/experience/${n.experiences[a].id}`),i(o=>{const u=[...o.experiences];return u.splice(a,1),{...o,experiences:u}})},$=n.experiences.length?n.experiences.map((a,o)=>t("tr",{className:"bg-white border-b dark:bg-gray-900 dark:border-gray-700",children:[e("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:a.company_name}),e("td",{className:"px-6 py-4",children:a.position}),t("td",{className:"px-6 py-4",children:[a.start_at," - ",a.end_at]}),e("td",{className:"px-6 py-4",children:e(f,{type:"button",onClick:()=>q(o),children:"Remove"})})]},o)):e("tr",{className:"bg-white border-b dark:bg-gray-900 dark:border-gray-700",children:e("th",{scope:"row",colSpan:4,className:"px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white",children:"No experience"})}),x=a=>{i("branch",a.id);const o=l.branches.find(u=>u.id===a.id);E(o.departments)},H=a=>{a.preventDefault(),A(route("employees.update",l.employee),{preserveScroll:!0,onSuccess:()=>D(),onError:()=>{}})};return t(G,{auth:l.auth,errors:l.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Employee - Update"}),children:[e(W,{title:"Employee - Update"}),e(J,{children:t("form",{onSubmit:H,children:[t(K,{className:"p-4 flex items-center gap-4",children:[e(z,{href:route("employees.index"),children:e("svg",{className:"text-gray-900 w-4 h-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),e("h3",{className:"text-gray-900",children:"Update employee"})]}),t(O,{children:[t("div",{id:"personal-information",children:[e("h5",{className:"mb-4 font-bold text-gray-900",children:"Personal Information"}),e("div",{className:"grid grid-cols-2 mb-4",children:t("div",{children:[e(r,{htmlFor:"profile_picture",value:"Profile picture"}),e(m,{id:"profile_picture",onChange:a=>i("profile_picture",a.target.files[0]),type:"file",className:"mt-1 block w-full",autoComplete:"profile_picture"})]})}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[t("div",{children:[e(r,{htmlFor:"name",value:"First name"}),e(m,{id:"first_name",value:n.first_name,onChange:a=>i("first_name",a.target.value),type:"text",className:"mt-1 block w-full",autoComplete:"first_name"}),e(d,{message:c.first_name,className:"mt-2"})]}),t("div",{children:[e(r,{htmlFor:"name",value:"Middle name"}),e(m,{id:"middle_name",value:n.middle_name,onChange:a=>i("middle_name",a.target.value),type:"text",className:"mt-1 block w-full",autoComplete:"middle_name"}),e(d,{message:c.middle_name,className:"mt-2"})]}),t("div",{children:[e(r,{htmlFor:"name",value:"Last name"}),e(m,{id:"last_name",value:n.last_name,onChange:a=>i("last_name",a.target.value),type:"text",className:"mt-1 block w-full",autoComplete:"last_name"}),e(d,{message:c.last_name,className:"mt-2"})]}),t("div",{children:[e(r,{htmlFor:"name",value:"Suffix"}),e(m,{id:"suffix",value:n.suffix,onChange:a=>i("suffix",a.target.value),type:"text",className:"mt-1 block w-full",autoComplete:"suffix"}),e(d,{message:c.suffix,className:"mt-2"})]})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[t("div",{children:[e(r,{htmlFor:"name",value:"Date of Birth"}),e(m,{id:"birth_date",value:n.birth_date,onChange:a=>i("birth_date",a.target.value),type:"date",className:"mt-1 block w-full",autoComplete:"birth_date"}),e(d,{message:c.birth_date,className:"mt-2"})]}),t("div",{children:[e(r,{htmlFor:"name",value:"Place of Birth"}),e(m,{id:"place_of_birth",value:n.place_of_birth,onChange:a=>i("place_of_birth",a.target.value),type:"text",className:"mt-1 block w-full",autoComplete:"place_of_birth"}),e(d,{message:c.place_of_birth,className:"mt-2"})]})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[t("div",{children:[e(r,{htmlFor:"name",value:"Email"}),e(m,{id:"email",value:n.email,onChange:a=>i("email",a.target.value),type:"email",className:"mt-1 block w-full",autoComplete:"email"}),e(d,{message:c.email,className:"mt-2"})]}),t("div",{children:[e(r,{htmlFor:"name",value:"Contact #"}),e(m,{id:"contact_no",value:n.contact_no,onChange:a=>i("contact_no",a.target.value),type:"text",className:"mt-1 block w-full",autoComplete:"contact_no"}),e(d,{message:c.contact_no,className:"mt-2"})]})]}),t("div",{className:"grid grid-cols-1 mb-4",children:[e(r,{htmlFor:"address",value:"Current address"}),e(V,{id:"address",value:n.address,onChange:a=>i("address",a.target.value),className:"mt-1 block w-full",autoComplete:"address"}),e(d,{message:c.address,className:"mt-2"})]})]}),e("hr",{className:"drop-shadow-md"}),t("div",{id:"employement-information",children:[e("h5",{className:"my-4 font-bold text-gray-900",children:"Employement Information"}),e("div",{className:"grid grid-cols-2 gap-4 my-4",children:t("div",{children:[e(r,{htmlFor:"position",value:"Position"}),e(_,{id:"position",val:R,className:"mt-1 block w-full",data:l.positions,onSelect:a=>i("position",a.id)}),e(d,{message:c.position,className:"mt-2"})]})}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-4",children:[t("div",{children:[e(r,{htmlFor:"rate",value:"Rate"}),e(m,{id:"rate",ref:w,value:n.rate,onChange:a=>i("rate",a.target.value),type:"number",className:"mt-1 block w-full",autoComplete:"rate"}),e(d,{message:c.rate,className:"mt-2"})]}),t("div",{children:[e(r,{htmlFor:"rate_type",value:"Rate type"}),e(_,{id:"rate_type",val:k,className:"mt-1 block w-full",data:l.rate_types,onSelect:a=>i("rate_type",a.id)}),e(d,{message:c.rate_type,className:"mt-2"})]}),t("div",{children:[e(r,{htmlFor:"branch",value:"Branch"}),e(_,{id:"branch",val:C,className:"mt-1 block w-full",data:l.branches,onSelect:a=>x(a)}),e(d,{message:c.branch,className:"mt-2"})]}),t("div",{children:[e(r,{htmlFor:"department",value:"Department"}),e(_,{id:"department",val:F,className:"mt-1 block w-full",data:S,onSelect:a=>i("department",a.id)}),e(d,{message:c.department,className:"mt-2"})]})]})]}),e("hr",{className:"drop-shadow-md"}),t("div",{id:"family-member",children:[e("h5",{className:"my-4 font-bold text-gray-900",children:"Family Member"}),t("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-4",children:[t("div",{children:[e(r,{htmlFor:"fullname",value:"Fullname"}),e(m,{id:"fullname",ref:y.fullname,type:"text",className:"mt-1 block w-full",autoComplete:"fullname"})]}),t("div",{children:[e(r,{htmlFor:"address",value:"Relationship"}),e(m,{id:"relationship",ref:y.relationship,type:"text",className:"mt-1 block w-full",autoComplete:"relationship"})]}),t("div",{children:[e(r,{htmlFor:"address",value:"Action"}),e(f,{type:"button",onClick:T,className:"w-full py-2 px-3 justify-center mt-1",children:"Add"})]})]}),t(b,{className:"mb-2",children:[e(v,{children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Fullname"}),e("th",{scope:"col",className:"px-6 py-3",children:"Relationship"}),e("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e(N,{children:P})]})]}),e("hr",{className:"drop-shadow-md"}),t("div",{id:"educational-atainment",children:[e("h5",{className:"my-4 font-bold text-gray-900",children:"Educational Attainment"}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-4",children:[t("div",{children:[e(r,{htmlFor:"school_name",value:"School name"}),e(m,{id:"school_name",ref:h.school_name,type:"text",className:"mt-1 block w-full",autoComplete:"school_name"})]}),t("div",{children:[e(r,{htmlFor:"type",value:"School type"}),e(_,{id:"school_type",className:"mt-1 block w-full",data:l.school_types,val:void 0,onSelect:a=>h.education_level=a.label})]}),t("div",{children:[e(r,{htmlFor:"year_graduated",value:"Year graduated"}),e(m,{id:"year_graduated",ref:h.year_graduated,type:"text",className:"mt-1 block w-full",autoComplete:"year_graduated"})]}),t("div",{children:[e(r,{htmlFor:"address",value:"Action"}),e(f,{type:"button",onClick:j,className:"w-full py-2 px-3 justify-center mt-1",children:"Add"})]})]}),t(b,{className:"mb-2",children:[e(v,{children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"School name"}),e("th",{scope:"col",className:"px-6 py-3",children:"Type"}),e("th",{scope:"col",className:"px-6 py-3",children:"Year"}),e("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e(N,{children:L})]})]}),e("hr",{className:"drop-shadow-md"}),t("div",{id:"experiences",children:[e("h5",{className:"my-4 font-bold text-gray-900",children:"Experiences"}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-4",children:[t("div",{children:[e(r,{htmlFor:"company_name",value:"Company name"}),e(m,{id:"company_name",ref:s.company_name,type:"text",className:"mt-1 block w-full",autoComplete:"company_name"})]}),t("div",{children:[e(r,{htmlFor:"position",value:"Position"}),e(m,{id:"position",ref:s.position,type:"text",className:"mt-1 block w-full",autoComplete:"position"})]})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-4",children:[t("div",{children:[e(r,{htmlFor:"start_at",value:"Start at"}),e(m,{id:"start_at",ref:s.start_at,type:"date",className:"mt-1 block w-full",autoComplete:"start_at"})]}),t("div",{children:[e(r,{htmlFor:"end_at",value:"End at"}),e(m,{id:"end_at",ref:s.end_at,type:"date",className:"mt-1 block w-full",autoComplete:"end_at"})]}),t("div",{children:[e(r,{htmlFor:"address",value:"Action"}),e(f,{type:"button",onClick:U,className:"w-full py-2 px-3 justify-center mt-1",children:"Add"})]})]}),t(b,{className:"mb-2",children:[e(v,{children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Company name"}),e("th",{scope:"col",className:"px-6 py-3",children:"Position"}),e("th",{scope:"col",className:"px-6 py-3",children:"Duration"}),e("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e(N,{children:$})]})]})]}),e(Q,{children:e(f,{disabled:B,children:"Update"})})]})})]})}export{pe as default};
