"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9968],{76368:(C,M,t)=>{t.d(M,{D:()=>g});var s=t(74081),e=t(52185),E=t(67621);function P(c,l,d){if(!c||!l||!d)return{display:"none"};const{x:f,y:n}=d;return{transform:`translate(${f}px, ${n}px)`}}const g=({renderItem:c})=>{const{itemType:l,isDragging:d,item:f,initialOffset:n,currentOffset:D,mouseOffset:_}=(0,E.useDragLayer)(i=>({item:i.getItem(),itemType:i.getItemType(),initialOffset:i.getInitialSourceClientOffset(),currentOffset:i.getSourceClientOffset(),isDragging:i.isDragging(),mouseOffset:i.getClientOffset()}));return d?(0,s.jsx)(e.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,s.jsx)(e.x,{style:P(n,D,_),children:c({type:l,item:f})})}):null}},55535:(C,M,t)=>{t.d(M,{B:()=>j,D:()=>W,H:()=>p,R:()=>B});var s=t(74081),e=t(85898),E=t(78565),P=t(1296),g=t(796),c=t(49969),l=t(34041),d=t(94486),f=t(3494),n=t(98447),D=t(61020),_=t(76368),i=t(47706),m=t(70627),a=t(14094);const L=(0,a.default)(e.k)`
  svg path {
    fill: ${({theme:O})=>O.colors.neutral600};
  }
`;function T({name:O}){return(0,s.jsxs)(e.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,d.Q1)(300),children:[(0,s.jsx)(L,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,s.jsx)(f.Z,{width:`${8/16}rem`})}),(0,s.jsx)(E.Z,{fontWeight:"bold",children:O})]})}T.propTypes={name:m.string.isRequired};function R({type:O,item:u}){switch(O){case i.D.STAGE:return(0,s.jsx)(T,{...u});default:return null}}function W(){return(0,s.jsx)(_.D,{renderItem:R})}function B({children:O}){return(0,s.jsx)(P.A,{children:(0,s.jsx)(g.o,{tabIndex:-1,children:(0,s.jsx)(c.D,{children:O})})})}function j({href:O}){const{formatMessage:u}=(0,D.Z)();return(0,s.jsx)(d.rU,{startIcon:(0,s.jsx)(n.Z,{}),to:O,children:u({id:"global.back",defaultMessage:"Back"})})}function p({title:O,subtitle:u,navigationAction:w,primaryAction:I}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.SL,{name:O}),(0,s.jsx)(l.T,{navigationAction:w,primaryAction:I,title:O,subtitle:u})]})}},99968:(C,M,t)=>{t.r(M),t.d(M,{default:()=>J});var s=t(74081),e=t(94486),E=t(59461),P=t(91687),g=t(27279),c=t(85898),l=t(62475),d=t(92712),f=t(89630),n=t(7609),D=t(66016),_=t(9465),i=t(78565),m=t(17992),a=t(84428),L=t(2667),T=t(25659),R=t(9663),W=t(18076),B=t(61020),j=t(40464),p=t(51447),O=t(14094),u=t(59491),w=t(66360),I=t(55535),U=t(78099),h=t(47706),z=t(88181),ct=t(64797),gt=t(85811),Mt=t(36582),ft=t(15816),Ot=t(97442),Pt=t(13576),mt=t(87830),ut=t(47184),vt=t(364),Ct=t(71563),Tt=t(49204),ht=t(47853),yt=t(75719),Lt=t(74919),It=t(29206),xt=t(98934),At=t(43433),Rt=t(8175),Wt=t(76368);const V=(0,O.default)(e.rU)`
  align-items: center;
  height: ${(0,e.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:o})=>`${o.spaces[2]}}`};
  width: ${(0,e.Q1)(32)};

  svg {
    height: ${(0,e.Q1)(12)};
    width: ${(0,e.Q1)(12)};

    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral800};
      }
    }
  }
`;function G(){const{formatMessage:o}=(0,B.Z)(),{push:Z}=(0,p.k6)(),{collectionTypes:X,singleTypes:b,isLoading:q}=(0,u.u)(),{meta:y,workflows:k,isLoading:K,refetch:tt}=(0,z.u)(),[Q,S]=g.useState(null),[st,x]=g.useState(!1),{del:et}=(0,e.kY)(),{formatAPIError:nt}=(0,e.So)(),F=(0,e.lm)(),{getFeature:at,isLoading:N}=(0,w.u)(),{trackUsage:H}=(0,e.rS)(),ot=(0,E.v9)(P.s),{allowedActions:{canCreate:Y,canDelete:it}}=(0,e.ss)(ot.settings["review-workflows"]),v=at("review-workflows"),{mutateAsync:rt,isLoading:_t}=(0,j.useMutation)(async({workflowId:r,stages:A})=>{const{data:{data:$}}=await et(`/admin/review-workflows/workflows/${r}`,{data:A});return $},{onSuccess(){F({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),lt=r=>[...X,...b].find($=>$.uid===r).info.displayName,dt=r=>{S(r)},Et=()=>{S(null)},Dt=async()=>{try{const r=await rt({workflowId:Q});return await tt(),S(null),r}catch(r){return F({type:"warning",message:nt(r)}),null}};return g.useEffect(()=>{!K&&!N&&v?.[h.C]&&y?.workflowCount>parseInt(v[h.C],10)&&x(!0)},[N,K,v,y?.workflowCount,y.workflowsTotal]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(I.H,{primaryAction:Y&&(0,s.jsx)(e.Qj,{startIcon:(0,s.jsx)(T.Z,{}),size:"S",to:"/settings/review-workflows/create",onClick:r=>{v?.[h.C]&&y?.workflowCount>=parseInt(v[h.C],10)?(r.preventDefault(),x(!0)):H("willCreateWorkflow")},children:o({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:o({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:o({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,s.jsxs)(I.R,{children:[K||q?(0,s.jsx)(c.k,{justifyContent:"center",children:(0,s.jsx)(l.a,{children:o({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,s.jsxs)(d.i,{colCount:3,footer:Y&&(0,s.jsx)(f.c,{icon:(0,s.jsx)(T.Z,{}),onClick:()=>{v?.[h.C]&&y?.workflowCount>=parseInt(v[h.C],10)?x(!0):(Z("/settings/review-workflows/create"),H("willCreateWorkflow"))},children:o({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,s.jsx)(n.h,{children:(0,s.jsxs)(D.Tr,{children:[(0,s.jsx)(_.Th,{children:(0,s.jsx)(i.Z,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,s.jsx)(_.Th,{children:(0,s.jsx)(i.Z,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,s.jsx)(_.Th,{children:(0,s.jsx)(i.Z,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,s.jsx)(_.Th,{children:(0,s.jsx)(m.T,{children:o({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(a.p,{children:k.map(r=>(0,g.createElement)(D.Tr,{...(0,e.X7)({fn(A){A.target.nodeName!=="BUTTON"&&Z(`/settings/review-workflows/${r.id}`)}}),key:`workflow-${r.id}`},(0,s.jsx)(_.Td,{width:(0,e.Q1)(250),children:(0,s.jsx)(i.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:r.name})}),(0,s.jsx)(_.Td,{children:(0,s.jsx)(i.Z,{textColor:"neutral800",children:r.stages.length})}),(0,s.jsx)(_.Td,{children:(0,s.jsx)(i.Z,{textColor:"neutral800",children:(r?.contentTypes??[]).map(lt).join(", ")})}),(0,s.jsx)(_.Td,{children:(0,s.jsxs)(c.k,{alignItems:"center",justifyContent:"end",children:[(0,s.jsx)(V,{to:`/settings/review-workflows/${r.id}`,"aria-label":o({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:r.name}),children:(0,s.jsx)(R.Z,{})}),k.length>1&&it&&(0,s.jsx)(L.h,{"aria-label":o({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,s.jsx)(W.Z,{}),noBorder:!0,onClick:()=>{dt(r.id)}})]})})))})]}),(0,s.jsx)(e.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:_t,isOpen:!!Q,onToggleDialog:Et,onConfirm:Dt}),(0,s.jsxs)(U.L,{isOpen:st,onClose:()=>x(!1),children:[(0,s.jsx)(U.T,{children:o({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,s.jsx)(U.B,{children:o({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})}function J(){const o=(0,E.v9)(P.s);return(0,s.jsx)(e.O4,{permissions:o.settings["review-workflows"].main,children:(0,s.jsx)(G,{})})}},59491:(C,M,t)=>{t.d(M,{u:()=>g});var s=t(27279),e=t(94486),E=t(53532),P=t(40464);function g(){const{get:c}=(0,e.kY)(),{formatAPIError:l}=(0,e.So)(),d=(0,e.lm)(),f=(0,P.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:a}}=await c("/content-manager/components");return a},onError(a){a instanceof E.d7&&d({type:"warning",message:l(a)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:a}}=await c("/content-manager/content-types");return a},onError(a){a instanceof E.d7&&d({type:"warning",message:l(a)})}}]),[n,D]=f,_=n.isLoading||D.isLoading,i=s.useMemo(()=>(D?.data??[]).filter(a=>a.kind==="collectionType"&&a.isDisplayed),[D?.data]),m=s.useMemo(()=>(D?.data??[]).filter(a=>a.kind!=="collectionType"&&a.isDisplayed),[D?.data]);return{isLoading:_,components:s.useMemo(()=>n?.data??[],[n?.data]),collectionTypes:i,singleTypes:m}}},88181:(C,M,t)=>{t.d(M,{u:()=>P});var s=t(27279),e=t(94486),E=t(40464);function P(g={}){const{get:c}=(0,e.kY)(),{id:l="",...d}=g,f={populate:"stages"},{data:n,isLoading:D,status:_,refetch:i}=(0,E.useQuery)(["review-workflows","workflows",l],async()=>(await c(`/admin/review-workflows/workflows/${l}`,{params:{...f,...d}})).data),m=s.useMemo(()=>l&&n?.data?[n.data]:Array.isArray(n?.data)?n.data:[],[n?.data,l]);return{meta:s.useMemo(()=>n?.meta??{},[n?.meta]),workflows:m,isLoading:D,status:_,refetch:i}}},89630:(C,M,t)=>{t.d(M,{c:()=>f});var s=t(74081),e=t(14094),E=t(52185),P=t(67393),g=t(85898),c=t(78565);const l=(0,e.default)(E.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:n})=>n.colors.primary600};
  }
`,d=(0,e.default)(E.x)`
  border-radius: 0 0 ${({theme:n})=>n.borderRadius} ${({theme:n})=>n.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,f=({children:n,icon:D,..._})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(P.i,{}),(0,s.jsx)(d,{as:"button",background:"primary100",padding:5,..._,children:(0,s.jsxs)(g.k,{children:[(0,s.jsx)(l,{"aria-hidden":!0,background:"primary200",children:D}),(0,s.jsx)(E.x,{paddingLeft:3,children:(0,s.jsx)(c.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:n})})]})})]})},53532:(C,M,t)=>{t.d(M,{d7:()=>E});var s=t(5466);const{Axios:e,AxiosError:E,CanceledError:P,isCancel:g,CancelToken:c,VERSION:l,all:d,Cancel:f,isAxiosError:n,spread:D,toFormData:_,AxiosHeaders:i,HttpStatusCode:m,formToJSON:a,getAdapter:L,mergeConfig:T}=s.default}}]);
