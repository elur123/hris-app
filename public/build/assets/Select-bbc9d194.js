import{r as u,b as ee,a as P,j as le,F as Ie}from"./app-359c51dc.js";import{s as xe,l as E,o as R,j as pe,L as j,u as _,p as ie,c as Se,d as ne,P as ye,D as B,y as z,C as we,a as fe,t as Pe}from"./transition-d926d5fa.js";import{e as Te,L as Ee,c as Ne,p as Le,I as G,m as be,o as w,r as Fe,n as De,A as ke}from"./platform-8453adbf.js";function ue(e,t){let[o,n]=u.useState(e),a=xe(e);return E(()=>n(a.current),[a,n,...t]),o}function ve(e){var t;if(e.type)return e.type;let o=(t=e.as)!=null?t:"button";if(typeof o=="string"&&o.toLowerCase()==="button")return"button"}function Me(e,t){let[o,n]=u.useState(()=>ve(e));return E(()=>{n(ve(e))},[e.type,e.as]),E(()=>{o||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&n("button")},[o,t]),o}function Ae({container:e,accept:t,walk:o,enabled:n=!0}){let a=u.useRef(t),i=u.useRef(o);u.useEffect(()=>{a.current=t,i.current=o},[t,o]),E(()=>{if(!e||!n)return;let r=Te(e);if(!r)return;let d=a.current,v=i.current,s=Object.assign(x=>d(x),{acceptNode:d}),g=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;g.nextNode();)v(g.currentNode)},[e,n,a,i])}function $e(e){throw new Error("Unexpected object: "+e)}var S=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(S||{});function _e(e,t){let o=t.resolveItems();if(o.length<=0)return null;let n=t.resolveActiveIndex(),a=n??-1,i=(()=>{switch(e.focus){case 0:return o.findIndex(r=>!t.resolveDisabled(r));case 1:{let r=o.slice().reverse().findIndex((d,v,s)=>a!==-1&&s.length-v-1>=a?!1:!t.resolveDisabled(d));return r===-1?r:o.length-1-r}case 2:return o.findIndex((r,d)=>d<=a?!1:!t.resolveDisabled(r));case 3:{let r=o.slice().reverse().findIndex(d=>!t.resolveDisabled(d));return r===-1?r:o.length-1-r}case 4:return o.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:$e(e)}})();return i===-1?n:i}function ge(e={},t=null,o=[]){for(let[n,a]of Object.entries(e))Re(o,he(t,n),a);return o}function he(e,t){return e?e+"["+t+"]":t}function Re(e,t,o){if(Array.isArray(o))for(let[n,a]of o.entries())Re(e,he(t,n.toString()),a);else o instanceof Date?e.push([t,o.toISOString()]):typeof o=="boolean"?e.push([t,o?"1":"0"]):typeof o=="string"?e.push([t,o]):typeof o=="number"?e.push([t,`${o}`]):o==null?e.push([t,""]):ge(o,t,e)}function je(e,t,o){let[n,a]=u.useState(o),i=e!==void 0,r=u.useRef(i),d=u.useRef(!1),v=u.useRef(!1);return i&&!r.current&&!d.current?(d.current=!0,r.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!i&&r.current&&!v.current&&(v.current=!0,r.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[i?e:n,R(s=>(i||a(s),t==null?void 0:t(s)))]}function me(e){return[e.screenX,e.screenY]}function Be(){let e=u.useRef([-1,-1]);return{wasMoved(t){let o=me(t);return e.current[0]===o[0]&&e.current[1]===o[1]?!1:(e.current=o,!0)},update(t){e.current=me(t)}}}var Ve=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ve||{}),Ue=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ue||{}),qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(qe||{}),Ke=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(Ke||{});function ae(e,t=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=ke(t(e.options.slice()),i=>i.dataRef.current.domRef.current),a=o?n.indexOf(o):null;return a===-1&&(a=null),{options:n,activeOptionIndex:a}}let He={[1](e){var t;return(t=e.dataRef.current)!=null&&t.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},[0](e){var t;if((t=e.dataRef.current)!=null&&t.disabled||e.comboboxState===0)return e;let o=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:n}=e.dataRef.current,a=e.options.findIndex(i=>n(i.dataRef.current.value));a!==-1&&(o=a)}return{...e,comboboxState:0,activeOptionIndex:o}},[2](e,t){var o,n,a,i;if((o=e.dataRef.current)!=null&&o.disabled||(n=e.dataRef.current)!=null&&n.optionsRef.current&&!((a=e.dataRef.current)!=null&&a.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let r=ae(e);if(r.activeOptionIndex===null){let v=r.options.findIndex(s=>!s.dataRef.current.disabled);v!==-1&&(r.activeOptionIndex=v)}let d=_e(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:v=>v.id,resolveDisabled:v=>v.dataRef.current.disabled});return{...e,...r,activeOptionIndex:d,activationTrigger:(i=t.trigger)!=null?i:1}},[3]:(e,t)=>{var o,n;let a={id:t.id,dataRef:t.dataRef},i=ae(e,d=>[...d,a]);e.activeOptionIndex===null&&(o=e.dataRef.current)!=null&&o.isSelected(t.dataRef.current.value)&&(i.activeOptionIndex=i.options.indexOf(a));let r={...e,...i,activationTrigger:1};return(n=e.dataRef.current)!=null&&n.__demoMode&&e.dataRef.current.value===void 0&&(r.activeOptionIndex=0),r},[4]:(e,t)=>{let o=ae(e,n=>{let a=n.findIndex(i=>i.id===t.id);return a!==-1&&n.splice(a,1),n});return{...e,...o,activationTrigger:1}},[5]:(e,t)=>({...e,labelId:t.id})},se=u.createContext(null);se.displayName="ComboboxActionsContext";function Q(e){let t=u.useContext(se);if(t===null){let o=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Q),o}return t}let ce=u.createContext(null);ce.displayName="ComboboxDataContext";function V(e){let t=u.useContext(ce);if(t===null){let o=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,V),o}return t}function ze(e,t){return _(t.type,He,e,t)}let Ge=u.Fragment;function Qe(e,t){let{value:o,defaultValue:n,onChange:a,name:i,by:r=(b,h)=>b===h,disabled:d=!1,__demoMode:v=!1,nullable:s=!1,multiple:g=!1,...x}=e,[l=g?[]:void 0,c]=je(o,a,n),[I,p]=u.useReducer(ze,{dataRef:u.createRef(),comboboxState:v?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),O=u.useRef(!1),M=u.useRef({static:!1,hold:!1}),F=u.useRef(null),U=u.useRef(null),D=u.useRef(null),A=u.useRef(null),L=R(typeof r=="string"?(b,h)=>{let y=r;return(b==null?void 0:b[y])===(h==null?void 0:h[y])}:r),$=u.useCallback(b=>_(m.mode,{[1]:()=>l.some(h=>L(h,b)),[0]:()=>L(l,b)}),[l]),m=u.useMemo(()=>({...I,optionsPropsRef:M,labelRef:F,inputRef:U,buttonRef:D,optionsRef:A,value:l,defaultValue:n,disabled:d,mode:g?1:0,get activeOptionIndex(){if(O.current&&I.activeOptionIndex===null&&I.options.length>0){let b=I.options.findIndex(h=>!h.dataRef.current.disabled);if(b!==-1)return b}return I.activeOptionIndex},compare:L,isSelected:$,nullable:s,__demoMode:v}),[l,n,d,g,s,v,I]),C=u.useRef(m.activeOptionIndex!==null?m.options[m.activeOptionIndex]:null);u.useEffect(()=>{let b=m.activeOptionIndex!==null?m.options[m.activeOptionIndex]:null;C.current!==b&&(C.current=b)}),E(()=>{I.dataRef.current=m},[m]),Ee([m.buttonRef,m.inputRef,m.optionsRef],()=>re.closeCombobox(),m.comboboxState===0);let N=u.useMemo(()=>({open:m.comboboxState===0,disabled:d,activeIndex:m.activeOptionIndex,activeOption:m.activeOptionIndex===null?null:m.options[m.activeOptionIndex].dataRef.current.value,value:l}),[m,d,l]),f=R(b=>{let h=m.options.find(y=>y.id===b);h&&K(h.dataRef.current.value)}),k=R(()=>{if(m.activeOptionIndex!==null){let{dataRef:b,id:h}=m.options[m.activeOptionIndex];K(b.current.value),re.goToOption(S.Specific,h)}}),T=R(()=>{p({type:0}),O.current=!0}),q=R(()=>{p({type:1}),O.current=!1}),X=R((b,h,y)=>(O.current=!1,b===S.Specific?p({type:2,focus:S.Specific,id:h,trigger:y}):p({type:2,focus:b,trigger:y}))),Y=R((b,h)=>(p({type:3,id:b,dataRef:h}),()=>{var y;((y=C.current)==null?void 0:y.id)===b&&(O.current=!0),p({type:4,id:b})})),W=R(b=>(p({type:5,id:b}),()=>p({type:5,id:null}))),K=R(b=>_(m.mode,{[0](){return c==null?void 0:c(b)},[1](){let h=m.value.slice(),y=h.findIndex(J=>L(J,b));return y===-1?h.push(b):h.splice(y,1),c==null?void 0:c(h)}})),re=u.useMemo(()=>({onChange:K,registerOption:Y,registerLabel:W,goToOption:X,closeCombobox:q,openCombobox:T,selectActiveOption:k,selectOption:f}),[]),Oe=t===null?{}:{ref:t},Z=u.useRef(null),Ce=ie();return u.useEffect(()=>{Z.current&&n!==void 0&&Ce.addEventListener(Z.current,"reset",()=>{K(n)})},[Z,K]),ee.createElement(se.Provider,{value:re},ee.createElement(ce.Provider,{value:m},ee.createElement(Se,{value:_(m.comboboxState,{[0]:ne.Open,[1]:ne.Closed})},i!=null&&l!=null&&ge({[i]:l}).map(([b,h],y)=>ee.createElement(Ne,{features:Le.Hidden,ref:y===0?J=>{var de;Z.current=(de=J==null?void 0:J.closest("form"))!=null?de:null}:void 0,...ye({key:b,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:b,value:h})})),B({ourProps:Oe,theirProps:x,slot:N,defaultTag:Ge,name:"Combobox"}))))}let Xe="input";function Ye(e,t){var o,n,a,i;let r=G(),{id:d=`headlessui-combobox-input-${r}`,onChange:v,displayValue:s,type:g="text",...x}=e,l=V("Combobox.Input"),c=Q("Combobox.Input"),I=z(l.inputRef,t),p=u.useRef(!1),O=ie(),M=function(){var f;return typeof s=="function"&&l.value!==void 0?(f=s(l.value))!=null?f:"":typeof l.value=="string"?l.value:""}();be(([f,k],[T,q])=>{p.current||l.inputRef.current&&(q===0&&k===1||f!==T)&&(l.inputRef.current.value=f)},[M,l.comboboxState]),be(([f],[k])=>{if(f===0&&k===1){let T=l.inputRef.current;if(!T)return;let q=T.value,{selectionStart:X,selectionEnd:Y,selectionDirection:W}=T;T.value="",T.value=q,W!==null?T.setSelectionRange(X,Y,W):T.setSelectionRange(X,Y)}},[l.comboboxState]);let F=u.useRef(!1),U=R(()=>{F.current=!0}),D=R(()=>{setTimeout(()=>{F.current=!1})}),A=R(f=>{switch(p.current=!0,f.key){case w.Backspace:case w.Delete:if(l.mode!==0||!l.nullable)return;let k=f.currentTarget;O.requestAnimationFrame(()=>{k.value===""&&(c.onChange(null),l.optionsRef.current&&(l.optionsRef.current.scrollTop=0),c.goToOption(S.Nothing))});break;case w.Enter:if(p.current=!1,l.comboboxState!==0||F.current)return;if(f.preventDefault(),f.stopPropagation(),l.activeOptionIndex===null){c.closeCombobox();return}c.selectActiveOption(),l.mode===0&&c.closeCombobox();break;case w.ArrowDown:return p.current=!1,f.preventDefault(),f.stopPropagation(),_(l.comboboxState,{[0]:()=>{c.goToOption(S.Next)},[1]:()=>{c.openCombobox()}});case w.ArrowUp:return p.current=!1,f.preventDefault(),f.stopPropagation(),_(l.comboboxState,{[0]:()=>{c.goToOption(S.Previous)},[1]:()=>{c.openCombobox(),O.nextFrame(()=>{l.value||c.goToOption(S.Last)})}});case w.Home:if(f.shiftKey)break;return p.current=!1,f.preventDefault(),f.stopPropagation(),c.goToOption(S.First);case w.PageUp:return p.current=!1,f.preventDefault(),f.stopPropagation(),c.goToOption(S.First);case w.End:if(f.shiftKey)break;return p.current=!1,f.preventDefault(),f.stopPropagation(),c.goToOption(S.Last);case w.PageDown:return p.current=!1,f.preventDefault(),f.stopPropagation(),c.goToOption(S.Last);case w.Escape:return p.current=!1,l.comboboxState!==0?void 0:(f.preventDefault(),l.optionsRef.current&&!l.optionsPropsRef.current.static&&f.stopPropagation(),c.closeCombobox());case w.Tab:if(p.current=!1,l.comboboxState!==0)return;l.mode===0&&c.selectActiveOption(),c.closeCombobox();break}}),L=R(f=>{c.openCombobox(),v==null||v(f)}),$=R(()=>{p.current=!1}),m=ue(()=>{if(l.labelId)return[l.labelId].join(" ")},[l.labelId]),C=u.useMemo(()=>({open:l.comboboxState===0,disabled:l.disabled}),[l]),N={ref:I,id:d,role:"combobox",type:g,"aria-controls":(o=l.optionsRef.current)==null?void 0:o.id,"aria-expanded":l.disabled?void 0:l.comboboxState===0,"aria-activedescendant":l.activeOptionIndex===null||(n=l.options[l.activeOptionIndex])==null?void 0:n.id,"aria-labelledby":m,"aria-autocomplete":"list",defaultValue:(i=(a=e.defaultValue)!=null?a:l.defaultValue!==void 0?s==null?void 0:s(l.defaultValue):null)!=null?i:l.defaultValue,disabled:l.disabled,onCompositionStart:U,onCompositionEnd:D,onKeyDown:A,onChange:L,onBlur:$};return B({ourProps:N,theirProps:x,slot:C,defaultTag:Xe,name:"Combobox.Input"})}let We="button";function Ze(e,t){var o;let n=V("Combobox.Button"),a=Q("Combobox.Button"),i=z(n.buttonRef,t),r=G(),{id:d=`headlessui-combobox-button-${r}`,...v}=e,s=ie(),g=R(p=>{switch(p.key){case w.ArrowDown:return p.preventDefault(),p.stopPropagation(),n.comboboxState===1&&a.openCombobox(),s.nextFrame(()=>{var O;return(O=n.inputRef.current)==null?void 0:O.focus({preventScroll:!0})});case w.ArrowUp:return p.preventDefault(),p.stopPropagation(),n.comboboxState===1&&(a.openCombobox(),s.nextFrame(()=>{n.value||a.goToOption(S.Last)})),s.nextFrame(()=>{var O;return(O=n.inputRef.current)==null?void 0:O.focus({preventScroll:!0})});case w.Escape:return n.comboboxState!==0?void 0:(p.preventDefault(),n.optionsRef.current&&!n.optionsPropsRef.current.static&&p.stopPropagation(),a.closeCombobox(),s.nextFrame(()=>{var O;return(O=n.inputRef.current)==null?void 0:O.focus({preventScroll:!0})}));default:return}}),x=R(p=>{if(Fe(p.currentTarget))return p.preventDefault();n.comboboxState===0?a.closeCombobox():(p.preventDefault(),a.openCombobox()),s.nextFrame(()=>{var O;return(O=n.inputRef.current)==null?void 0:O.focus({preventScroll:!0})})}),l=ue(()=>{if(n.labelId)return[n.labelId,d].join(" ")},[n.labelId,d]),c=u.useMemo(()=>({open:n.comboboxState===0,disabled:n.disabled,value:n.value}),[n]),I={ref:i,id:d,type:Me(e,n.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(o=n.optionsRef.current)==null?void 0:o.id,"aria-expanded":n.disabled?void 0:n.comboboxState===0,"aria-labelledby":l,disabled:n.disabled,onClick:x,onKeyDown:g};return B({ourProps:I,theirProps:v,slot:c,defaultTag:We,name:"Combobox.Button"})}let Je="label";function et(e,t){let o=G(),{id:n=`headlessui-combobox-label-${o}`,...a}=e,i=V("Combobox.Label"),r=Q("Combobox.Label"),d=z(i.labelRef,t);E(()=>r.registerLabel(n),[n]);let v=R(()=>{var g;return(g=i.inputRef.current)==null?void 0:g.focus({preventScroll:!0})}),s=u.useMemo(()=>({open:i.comboboxState===0,disabled:i.disabled}),[i]);return B({ourProps:{ref:d,id:n,onClick:v},theirProps:a,slot:s,defaultTag:Je,name:"Combobox.Label"})}let tt="ul",ot=pe.RenderStrategy|pe.Static;function nt(e,t){let o=G(),{id:n=`headlessui-combobox-options-${o}`,hold:a=!1,...i}=e,r=V("Combobox.Options"),d=z(r.optionsRef,t),v=we(),s=(()=>v!==null?(v&ne.Open)===ne.Open:r.comboboxState===0)();E(()=>{var c;r.optionsPropsRef.current.static=(c=e.static)!=null?c:!1},[r.optionsPropsRef,e.static]),E(()=>{r.optionsPropsRef.current.hold=a},[r.optionsPropsRef,a]),Ae({container:r.optionsRef.current,enabled:r.comboboxState===0,accept(c){return c.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(c){c.setAttribute("role","none")}});let g=ue(()=>{var c,I;return(I=r.labelId)!=null?I:(c=r.buttonRef.current)==null?void 0:c.id},[r.labelId,r.buttonRef.current]),x=u.useMemo(()=>({open:r.comboboxState===0}),[r]),l={"aria-labelledby":g,role:"listbox","aria-multiselectable":r.mode===1?!0:void 0,id:n,ref:d};return B({ourProps:l,theirProps:i,slot:x,defaultTag:tt,features:ot,visible:s,name:"Combobox.Options"})}let rt="li";function lt(e,t){var o,n;let a=G(),{id:i=`headlessui-combobox-option-${a}`,disabled:r=!1,value:d,...v}=e,s=V("Combobox.Option"),g=Q("Combobox.Option"),x=s.activeOptionIndex!==null?s.options[s.activeOptionIndex].id===i:!1,l=s.isSelected(d),c=u.useRef(null),I=xe({disabled:r,value:d,domRef:c,textValue:(n=(o=c.current)==null?void 0:o.textContent)==null?void 0:n.toLowerCase()}),p=z(t,c),O=R(()=>g.selectOption(i));E(()=>g.registerOption(i,I),[I,i]);let M=u.useRef(!s.__demoMode);E(()=>{if(!s.__demoMode)return;let C=fe();return C.requestAnimationFrame(()=>{M.current=!0}),C.dispose},[]),E(()=>{if(s.comboboxState!==0||!x||!M.current||s.activationTrigger===0)return;let C=fe();return C.requestAnimationFrame(()=>{var N,f;(f=(N=c.current)==null?void 0:N.scrollIntoView)==null||f.call(N,{block:"nearest"})}),C.dispose},[c,x,s.comboboxState,s.activationTrigger,s.activeOptionIndex]);let F=R(C=>{if(r)return C.preventDefault();O(),s.mode===0&&g.closeCombobox(),De()||requestAnimationFrame(()=>{var N;return(N=s.inputRef.current)==null?void 0:N.focus()})}),U=R(()=>{if(r)return g.goToOption(S.Nothing);g.goToOption(S.Specific,i)}),D=Be(),A=R(C=>D.update(C)),L=R(C=>{D.wasMoved(C)&&(r||x||g.goToOption(S.Specific,i,0))}),$=R(C=>{D.wasMoved(C)&&(r||x&&(s.optionsPropsRef.current.hold||g.goToOption(S.Nothing)))}),m=u.useMemo(()=>({active:x,selected:l,disabled:r}),[x,l,r]);return B({ourProps:{id:i,ref:p,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":l,disabled:void 0,onClick:F,onFocus:U,onPointerEnter:A,onMouseEnter:A,onPointerMove:L,onMouseMove:L,onPointerLeave:$,onMouseLeave:$},theirProps:v,slot:m,defaultTag:rt,name:"Combobox.Option"})}let at=j(Qe),it=j(Ze),ut=j(Ye),st=j(et),ct=j(nt),dt=j(lt),H=Object.assign(at,{Input:ut,Button:it,Label:st,Options:ct,Option:dt});const te=u;function pt({title:e,titleId:t,...o},n){return te.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},o),e?te.createElement("title",{id:t},e):null,te.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"}))}const ft=te.forwardRef(pt);var bt=ft;const oe=u;function vt({title:e,titleId:t,...o},n){return oe.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},o),e?oe.createElement("title",{id:t},e):null,oe.createElement("path",{fillRule:"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",clipRule:"evenodd"}))}const mt=oe.forwardRef(vt);var xt=mt,gt=bt,ht=xt;const It=u.forwardRef(function({val:t,onSelect:o,...n},a){a||u.useRef();const[i,r]=u.useState(t??n.data[0]),[d,v]=u.useState(""),s=d===""?n.data:n.data.filter(x=>x.label.toLowerCase().replace(/\s+/g,"").includes(d.toLowerCase().replace(/\s+/g,"")));return P("div",{className:"w-100",children:P(H,{value:i,onChange:x=>{r(x),o(x)},children:le("div",{className:"relative mt-1",children:[le("div",{className:"relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm",children:[P(H.Input,{className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",displayValue:x=>x.label,onChange:x=>v(x.target.value)}),P(H.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-2",children:P(ht,{className:"h-4 w-4 text-gray-400","aria-hidden":"true"})})]}),P(Pe,{as:u.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>v(""),children:P(H.Options,{className:"absolute z-[1] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:s.length===0&&d!==""?P("div",{className:"relative cursor-default select-none py-2 px-4 text-gray-700",children:"Nothing found."}):s.map(x=>P(H.Option,{className:({active:l})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${l?"bg-gray-600 text-white":"text-gray-900"}`,value:x,children:({selected:l,active:c})=>le(Ie,{children:[P("span",{className:`block truncate ${l?"font-medium":"font-normal"}`,children:x.label}),l?P("span",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${c?"text-white":"text-gray-600"}`,children:P(gt,{className:"h-4 w-4","aria-hidden":"true"})}):null]})},x.id))})})]})})})});export{It as S};
