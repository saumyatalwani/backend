"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[174],{45729:($,g,s)=>{s.r(g),s.d(g,{default:()=>J});var t=s(74081),a=s(94486),C=s(59461),h=s(51447),I=s(91687),R=s(27279),_=s(52185),r=s(85898),D=s(78565),v=s(51413),T=s(90529),O=s(49899),l=s(19098),B=s(87549),U=s(796),f=s(34041),W=s(49969),S=s(98447),E=s(71563),A=s(61020),K=s(20498),j=s(68902),P=s(70627),Z=s(47853),as=s(40464),es=s(64797),ns=s(85811),is=s(36582),os=s(15816),_s=s(97442),ds=s(13576),rs=s(87830),ls=s(47184),Es=s(364),Ps=s(49204),Ms=s(75719),Ds=s(74919),Os=s(29206),ms=s(98934),cs=s(43433),gs=s(8175),hs=s(10131),Rs=s(10124),vs=s(8243),As=s(63799),Ls=s(51943),us=s(39738),Cs=s(3243);const x=({disabled:d,role:e,values:i,errors:o,onChange:L,onBlur:m})=>{const{formatMessage:n}=(0,A.Z)();return(0,t.jsx)(_.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(r.k,{justifyContent:"space-between",children:[(0,t.jsxs)(_.x,{children:[(0,t.jsx)(_.x,{children:(0,t.jsx)(D.Z,{fontWeight:"bold",children:e?e.name:n({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(_.x,{children:(0,t.jsx)(D.Z,{textColor:"neutral500",variant:"pi",children:e?e.description:n({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(v.z,{disabled:!0,variant:"secondary",children:n({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:e.usersCount})})]}),(0,t.jsxs)(T.r,{gap:4,children:[(0,t.jsx)(O.P,{col:6,children:(0,t.jsx)(l.o,{disabled:d,name:"name",error:o.name&&n({id:o.name}),label:n({id:"global.name",defaultMessage:"Name"}),onChange:L,onBlur:m,required:!0,value:i.name||""})}),(0,t.jsx)(O.P,{col:6,children:(0,t.jsx)(B.g,{disabled:d,label:n({id:"global.description",defaultMessage:"Description"}),id:"description",error:o.name&&n({id:o.name}),onChange:L,onBlur:m,children:i.description||""})})]})]})})};x.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},x.propTypes={disabled:P.bool,errors:P.object.isRequired,onBlur:P.func.isRequired,onChange:P.func.isRequired,role:P.object,values:P.object};const N=Z.Ry().shape({name:Z.Z_().required(a.I0.required)}),Y=()=>{const d=(0,a.lm)(),{formatMessage:e}=(0,A.Z)(),{params:{id:i}}=(0,h.$B)("/settings/roles/:id"),{put:o}=(0,a.kY)(),[L,m]=(0,R.useState)(!1),n=(0,R.useRef)(),{lockApp:Q,unlockApp:V}=(0,a.o1)(),{trackUsage:X}=(0,a.rS)(),{formatAPIError:G}=(0,a.So)(),{isLoading:H,data:b}=(0,j.u)(i,{cacheTime:0}),{roles:[M={}],isLoading:p,refetch:k}=(0,K.u)({id:i},{cacheTime:0}),{permissions:w,isLoading:F}=(0,j.a)({id:i},{cacheTime:0}),q=async u=>{try{Q(),m(!0);const{permissionsToSend:c,didUpdateConditions:y}=n.current.getPermissions();await o(`/admin/roles/${i}`,u),M.code!=="strapi-super-admin"&&(await o(`/admin/roles/${i}/permissions`,{permissions:c}),y&&X("didUpdateConditions")),n.current.setFormAfterSubmit(),await k(),d({type:"success",message:{id:"notification.success.saved"}})}catch(c){d({type:"warning",message:G(c)})}finally{m(!1),V()}},z=!p&&M.code==="strapi-super-admin";return(0,t.jsxs)(U.o,{children:[(0,t.jsx)(a.SL,{name:"Roles"}),(0,t.jsx)(E.J9,{enableReinitialize:!0,initialValues:{name:M.name,description:M.description},onSubmit:q,validationSchema:N,validateOnChange:!1,children:({handleSubmit:u,values:c,errors:y,handleChange:ss,handleBlur:ts})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(f.T,{primaryAction:(0,t.jsx)(r.k,{gap:2,children:(0,t.jsx)(v.z,{disabled:M.code==="strapi-super-admin",onClick:u,loading:L,size:"L",children:e({id:"global.save",defaultMessage:"Save"})})}),title:e({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:e({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(a.rU,{startIcon:(0,t.jsx)(S.Z,{}),to:"/settings/roles",children:e({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(W.D,{children:(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(x,{isLoading:p||F,disabled:z,errors:y,values:c,onChange:ss,onBlur:ts,role:M}),!H&&!p&&!F?(0,t.jsx)(_.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(j.P,{isFormDisabled:z,permissions:w,ref:n,layout:b})}):(0,t.jsx)(_.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(a.dO,{})})]})})]})})]})},J=()=>{const d=(0,C.v9)(I.s),{isLoading:e,allowedActions:{canRead:i,canUpdate:o}}=(0,a.ss)({read:d.settings.roles.read,update:d.settings.roles.update});return e?(0,t.jsx)(a.dO,{}):!i&&!o?(0,t.jsx)(h.l_,{to:"/"}):(0,t.jsx)(Y,{})}},20498:($,g,s)=>{s.d(g,{u:()=>I});var t=s(27279),a=s(94486),C=s(61020),h=s(40464);const I=(R={},_={})=>{const{id:r="",...D}=R,{get:v}=(0,a.kY)(),{locale:T}=(0,C.Z)(),O=(0,a.Xe)(T,{sensitivity:"base"}),{data:l,error:B,isError:U,isLoading:f,refetch:W}=(0,h.useQuery)(["roles",r,D],async()=>{const{data:E}=await v(`/admin/roles/${r??""}`,{params:D});return E},_);return{roles:t.useMemo(()=>{let E=[];return l&&(Array.isArray(l.data)?E=l.data:E=[l.data]),[...E].sort((A,K)=>O.compare(A.name,K.name))},[l,O]),error:B,isError:U,isLoading:f,refetch:W}}}}]);
