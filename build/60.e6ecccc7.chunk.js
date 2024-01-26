(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[60],{86961:(S,b,e)=>{var r=e(13578),m=e(27138),d="[object Boolean]";function R(i){return i===!0||i===!1||m(i)&&r(i)==d}S.exports=R},92249:(S,b,e)=>{var r=e(37997);function m(d){return r(d)&&d!=+d}S.exports=m},37997:(S,b,e)=>{var r=e(13578),m=e(27138),d="[object Number]";function R(i){return typeof i=="number"||m(i)&&r(i)==d}S.exports=R},76368:(S,b,e)=>{"use strict";e.d(b,{D:()=>i});var r=e(74081),m=e(52185),d=e(67621);function R(p,j,x){if(!p||!j||!x)return{display:"none"};const{x:y,y:O}=x;return{transform:`translate(${y}px, ${O}px)`}}const i=({renderItem:p})=>{const{itemType:j,isDragging:x,item:y,initialOffset:O,currentOffset:s,mouseOffset:A}=(0,d.useDragLayer)(f=>({item:f.getItem(),itemType:f.getItemType(),initialOffset:f.getInitialSourceClientOffset(),currentOffset:f.getSourceClientOffset(),isDragging:f.isDragging(),mouseOffset:f.getClientOffset()}));return x?(0,r.jsx)(m.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,r.jsx)(m.x,{style:R(O,s,A),children:p({type:j,item:y})})}):null}},55377:(S,b,e)=>{"use strict";e.d(b,{a:()=>v,b:()=>P,c:()=>w,d:()=>C,g:()=>f,i:()=>I,m:()=>W,s:()=>L,u:()=>M});var r=e(27279),m=e(67621),d=e(57150),R=e(36582),i=e(94486),p=e(98934),j=e(86961),x=e(10124),y=e(92249),O=e(51527),s=e(47853);const f=t=>`content-manager.${t}`;(0,r.createContext)();const _=(t,l,{onCancel:a,onDropItem:o,onGrabItem:u,onMoveItem:g})=>{const[c,D]=(0,r.useState)(!1),$=E=>{c&&(E==="UP"?g(l-1,l):E==="DOWN"&&g(l+1,l))},T=()=>{c?(o&&o(l),D(!1)):(u&&u(l),D(!0))},n=()=>{c&&(D(!1),a&&a(l))};return E=>{if(t&&!(E.key==="Tab"&&!c))switch(E.preventDefault(),E.key){case" ":case"Enter":T();break;case"Escape":n();break;case"ArrowDown":case"ArrowRight":$("DOWN");break;case"ArrowUp":case"ArrowLeft":$("UP");break}}},M=(t,{type:l="STRAPI_DND",index:a,item:o={},onStart:u,onEnd:g,onGrabItem:c,onDropItem:D,onCancel:$,onMoveItem:T,dropSensitivity:n="regular"})=>{const h=(0,r.useRef)(null),[{handlerId:E},U]=(0,m.useDrop)({accept:l,collect(k){return{handlerId:k.getHandlerId()}},hover(k,Q){if(!h.current)return;const z=k.index,F=a;if(z!==F){if(n==="regular"){const Y=h.current.getBoundingClientRect(),H=(Y.bottom-Y.top)/2,X=Q.getClientOffset().y-Y.top;if(z<F&&X<H||z>F&&X>H)return}T(F,z),k.index=F}}}),[{isDragging:B},J,V]=(0,m.useDrag)({type:l,item(){u&&u();const{width:k}=h.current?.getBoundingClientRect()??{};return{index:a,width:k,...o}},end(){g&&g()},canDrag:t,isDragging:o.id?k=>o.id===k.getItem().id:void 0,collect:k=>({isDragging:k.isDragging()})}),G=_(t,a,{onGrabItem:c,onDropItem:D,onCancel:$,onMoveItem:T});return[{handlerId:E,isDragging:B,handleKeyDown:G},h,U,J,V]},C=()=>t=>t["content-manager_app"]||R.J,P=()=>(0,d.P1)(C(),t=>({collectionTypeLinks:t.collectionTypeLinks,singleTypeLinks:t.singleTypeLinks})),W=()=>(0,d.P1)(C(),({components:t,models:l})=>({schemas:[...t,...l]})),L=(0,d.P1)(C(),t=>t.fieldSizes),K=(t,l)=>{typeof t=="function"?t(l):t!=null&&(t.current=l)},w=(...t)=>l=>t.forEach(a=>K(a,l));function I(t){return["integer","biginteger","decimal","float","number"].includes(t)}s.kM(s.nK,"defined",function(){return this.test("defined",i.I0.required,t=>t!==void 0)}),s.kM(s.IX,"notEmptyMin",function(t){return this.test("notEmptyMin",i.I0.min,l=>x(l)?!0:l.length>=t)}),s.kM(s.Z_,"isInferior",function(t,l){return this.test("isInferior",t,function(a){return!a||Number.isNaN(O(a))?!0:O(l)>=O(a)})}),s.kM(s.Z_,"isSuperior",function(t,l){return this.test("isSuperior",t,function(a){return!a||Number.isNaN(O(a))?!0:O(a)>=O(l)})});const N=t=>p(t,["attributes"],{}),v=(t,{components:l},a={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const o=N(t);return s.Ry().shape(Object.keys(o).reduce((u,g)=>{const c=o[g];if(c.type!=="relation"&&c.type!=="component"&&c.type!=="dynamiczone"){const D=Z(c.type,c,a);u[g]=D}if(c.type==="relation"&&(u[g]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(c.relationType)?s.Ry().nullable():s.IX().nullable()),c.type==="component"){const D=v(l[c.component],{components:l},{...a,isFromComponent:!0});if(c.repeatable===!0){const{min:T,max:n,required:h}=c;let E=s.Vo(U=>{let B=s.IX().of(D);return T?h?B=B.min(T,i.I0.min):h!==!0&&x(U)?B=B.nullable():B=B.min(T,i.I0.min):h&&!a.isDraft&&(B=B.min(1,i.I0.required)),n&&(B=B.max(n,i.I0.max)),B});return u[g]=E,u}const $=s.Vo(T=>T!==void 0?c.required===!0&&!a.isDraft?D.defined():D.nullable():c.required===!0?s.Ry().defined():s.Ry().nullable());return u[g]=$,u}if(c.type==="dynamiczone"){let D=s.IX().of(s.Vo(({__component:n})=>v(l[n],{components:l},{...a,isFromComponent:!0})));const{max:$,min:T}=c;T?c.required?D=D.test("min",i.I0.min,n=>a.isCreatingEntry?n&&n.length>=T:n===void 0?!0:n!==null&&n.length>=T).test("required",i.I0.required,n=>a.isCreatingEntry?n!==null||n!==void 0:n===void 0?!0:n!==null):D=D.notEmptyMin(T):c.required&&!a.isDraft&&(D=D.test("required",i.I0.required,n=>a.isCreatingEntry?n!==null||n!==void 0:n===void 0?!0:n!==null)),$&&(D=D.max($,i.I0.max)),u[g]=D}return u},{}))},Z=(t,l,a)=>{let o=s.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(t)&&(o=s.Z_()),t==="blocks"&&(o=s.nK().test("isJSON",i.I0.json,u=>a.isJSONTestDisabled||a.isDraft?!0:!(u&&!Array.isArray(u)))),t==="json"&&(o=s.nK(i.I0.json).test("isJSON",i.I0.json,u=>{if(a.isJSONTestDisabled||!u||!u.length)return!0;try{return JSON.parse(u),!0}catch{return!1}}).nullable().test("required",i.I0.required,u=>!(l.required&&(!u||!u.length)))),t==="email"&&(o=o.email(i.I0.email)),["number","integer","float","decimal"].includes(t)&&(o=s.Rx().transform(u=>y(u)?void 0:u).typeError()),t==="biginteger"&&(o=s.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(t)&&(o=s.hT()),Object.keys(l).forEach(u=>{const g=l[u];if(g||!j(g)&&Number.isInteger(Math.floor(g))||g===0)switch(u){case"required":{a.isDraft||(t==="password"&&a.isCreatingEntry&&(o=o.required(i.I0.required)),t!=="password"&&(a.isCreatingEntry?o=o.required(i.I0.required):o=o.test("required",i.I0.required,c=>c===void 0&&!a.isFromComponent?!0:I(t)?c===0?!0:!!c:t==="boolean"?c!=null:t==="date"||t==="datetime"?typeof c=="string"?!x(c):!x(c?.toString()):!x(c))));break}case"max":{t==="biginteger"?o=o.isInferior(i.I0.max,g):o=o.max(g,i.I0.max);break}case"maxLength":o=o.max(g,i.I0.maxLength);break;case"min":{t==="biginteger"?o=o.isSuperior(i.I0.min,g):o=o.min(g,i.I0.min);break}case"minLength":{a.isDraft||(o=o.min(g,i.I0.minLength));break}case"regex":o=o.matches(new RegExp(g),{message:i.I0.regex,excludeEmptyString:!l.required});break;case"lowercase":["text","textarea","email","string"].includes(t)&&(o=o.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(t)&&(o=o.strict().uppercase());break;case"positive":I(t)&&(o=o.positive());break;case"negative":I(t)&&(o=o.negative());break;default:o=o.nullable()}}),o}},83337:(S,b,e)=>{"use strict";e.d(b,{U:()=>A,y:()=>O});var r=e(74081),m=e(27279),d=e(14094),R=e(52179),i=e(21837),p=e(78565),j=e(85898),x=e(52185);const y=({theme:f,expanded:_,variant:M,disabled:C,error:P})=>P?`1px solid ${f.colors.danger600} !important`:C?`1px solid ${f.colors.neutral150}`:_?`1px solid ${f.colors.primary600}`:M==="primary"?`1px solid ${f.colors.neutral0}`:`1px solid ${f.colors.neutral100}`,O=(0,d.default)(p.Z)``,s=(0,d.default)(x.x)`
  border: ${y};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:f})=>f.colors.primary600};

    ${O} {
      color: ${({theme:f,expanded:_})=>_?void 0:f.colors.primary700};
    }

    ${p.Z} {
      color: ${({theme:f,expanded:_})=>_?void 0:f.colors.primary600};
    }

    & > ${j.k} {
      background: ${({theme:f})=>f.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:f})=>f.colors.primary200};
    }
  }
`,A=({children:f,disabled:_=!1,error:M,expanded:C=!1,hasErrorMessage:P=!0,id:W,onToggle:L,toggle:K,size:w="M",variant:I="primary",shadow:N})=>{const v=(0,i.M)(W),Z=m.useMemo(()=>({expanded:C,onToggle:L,toggle:K,id:v,size:w,variant:I,disabled:_}),[_,C,v,L,w,K,I]);return(0,r.jsxs)(R.S.Provider,{value:Z,children:[(0,r.jsx)(s,{"data-strapi-expanded":C,disabled:_,"aria-disabled":_,expanded:C,hasRadius:!0,variant:I,error:M,shadow:N,children:f}),M&&P&&(0,r.jsx)(x.x,{paddingTop:1,children:(0,r.jsx)(p.Z,{variant:"pi",textColor:"danger600",children:M})})]})}},82336:(S,b,e)=>{"use strict";e.d(b,{v:()=>R});var r=e(74081),m=e(52179),d=e(52185);const R=({children:i,...p})=>{const{expanded:j,id:x}=(0,m.A)();if(!j)return null;const y=`accordion-content-${x}`,O=`accordion-label-${x}`,s=`accordion-desc-${x}`;return(0,r.jsx)(d.x,{role:"region",id:y,"aria-labelledby":O,"aria-describedby":s,...p,children:i})}},52179:(S,b,e)=>{"use strict";e.d(b,{A:()=>d,S:()=>m});var r=e(27279);const m=(0,r.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),d=()=>(0,r.useContext)(m)},3408:(S,b,e)=>{"use strict";e.d(b,{B:()=>f});var r=e(74081),m=e(3494),d=e(14094),R=e(83337),i=e(52179);const p=({expanded:_,disabled:M,variant:C})=>{let P="neutral100";return _?P="primary100":M?P="neutral150":C==="primary"&&(P="neutral0"),P};var j=e(40810),x=e(57074),y=e(85898),O=e(78565);const s=(0,d.default)(j.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:_,expanded:M})=>M?_.colors.primary600:_.colors.neutral500};
    }
  }
`,A=(0,d.default)(y.k)`
  min-height: ${({theme:_,size:M})=>_.sizes.accordions[M]};
  border-radius: ${({theme:_,expanded:M})=>M?`${_.borderRadius} ${_.borderRadius} 0 0`:_.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:_})=>_.colors.primary600};
      }
    }
  }
`,f=({title:_,description:M,as:C="span",togglePosition:P="right",action:W,...L})=>{const{onToggle:K,toggle:w,expanded:I,id:N,size:v,variant:Z,disabled:t}=(0,i.A)(),l=`accordion-content-${N}`,a=`accordion-label-${N}`,o=`accordion-desc-${N}`,u=v==="M"?6:4,g=v==="M"?u:u-2,c=p({expanded:I,disabled:t,variant:Z}),$={as:C,fontWeight:v==="S"?"bold":void 0,id:a,textColor:I?"primary600":"neutral700",ellipsis:!0,variant:v==="M"?"delta":void 0},T=I?"primary600":"neutral600",n=I?"primary200":"neutral200",h=v==="M"?`${32/16}rem`:`${24/16}rem`,E=()=>{t||(w&&!K?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),w()):K&&K())},U=(0,r.jsx)(y.k,{justifyContent:"center",borderRadius:"50%",height:h,width:h,transform:I?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:n,cursor:t?"not-allowed":"pointer",onClick:E,shrink:0,children:(0,r.jsx)(x.J,{as:m.Z,width:v==="M"?`${11/16}rem`:`${8/16}rem`,color:I?"primary600":"neutral600"})});return(0,r.jsx)(A,{paddingBottom:g,paddingLeft:u,paddingRight:u,paddingTop:g,background:c,expanded:I,size:v,justifyContent:"space-between",cursor:t?"not-allowed":"",children:(0,r.jsxs)(y.k,{gap:3,flex:1,maxWidth:"100%",children:[P==="left"&&U,(0,r.jsx)(s,{onClick:E,"aria-disabled":t,"aria-expanded":I,"aria-controls":l,"aria-labelledby":a,"data-strapi-accordion-toggle":!0,expanded:I,type:"button",flex:1,minWidth:0,...L,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R.y,{...$,children:_}),M&&(0,r.jsx)(O.Z,{as:"p",id:o,textColor:T,children:M})]})}),P==="right"&&(0,r.jsxs)(y.k,{gap:3,children:[U,W]}),P==="left"&&W]})})}},88941:(S,b,e)=>{"use strict";e.d(b,{VY:()=>u,__:()=>c,ck:()=>g,fC:()=>a,fF:()=>$,rl:()=>D,tu:()=>T,xz:()=>o});var r=e(74081),m=e(27279),d=e(17246),R=e(3494),i=e(61043),p=e(14094),j=e(4307),x=e(33646),y=e(51413),O=e(52185),s=e(85898),A=e(78565);const f=d.fC,_=(0,m.forwardRef)(({size:n,endIcon:h=(0,r.jsx)(R.Z,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...E},U)=>(0,r.jsx)(d.xz,{asChild:!0,children:(0,r.jsx)(y.z,{ref:U,type:"button",variant:"ghost",endIcon:h,paddingTop:n==="S"?1:2,paddingBottom:n==="S"?1:2,paddingLeft:n==="S"?3:4,paddingRight:n==="S"?3:4,...E})})),M=(0,m.forwardRef)(({children:n,intersectionId:h,popoverPlacement:E="bottom-start",...U},B)=>{const[J,V]=E.split("-");return(0,r.jsx)(d.Uv,{children:(0,r.jsx)(d.VY,{align:V,side:J,loop:!0,asChild:!0,children:(0,r.jsxs)(C,{ref:B,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...U,children:[n,(0,r.jsx)(O.x,{id:h,width:"100%",height:"1px"})]})})})}),C=(0,p.default)(s.k)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,P=({onSelect:n,disabled:h=!1,...E})=>(0,r.jsx)(d.ck,{asChild:!0,onSelect:n,disabled:h,children:E.isLink||E.isExternal?(0,r.jsx)(K,{color:"neutral800",...E,isExternal:E.isExternal??!1,children:(0,r.jsx)(A.Z,{children:E.children})}):(0,r.jsx)(L,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...E,children:(0,r.jsx)(A.Z,{children:E.children})})}),W=({theme:n})=>(0,p.css)`
  text-align: left;
  width: 100%;
  border-radius: ${n.borderRadius};
  padding: ${n.spaces[2]} ${n.spaces[4]};

  ${A.Z} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${A.Z} {
      color: ${n.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${n.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,L=(0,p.default)(s.k)`
  ${W}
`,K=(0,p.default)(x.r)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:n,color:h})=>(0,j.$)(n.colors,h,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${W}
`,w=(0,m.forwardRef)((n,h)=>(0,r.jsx)(d.__,{asChild:!0,children:(0,r.jsx)(I,{ref:h,variant:"sigma",textColor:"neutral600",...n})})),I=(0,p.default)(A.Z)`
  padding: ${({theme:n})=>n.spaces[2]} ${({theme:n})=>n.spaces[4]};
`,N=d.Tr,v=(0,m.forwardRef)(({disabled:n=!1,...h},E)=>(0,r.jsx)(d.fF,{asChild:!0,disabled:n,children:(0,r.jsxs)(Z,{ref:E,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...h,children:[(0,r.jsx)(A.Z,{children:h.children}),(0,r.jsx)(t,{height:12,width:12})]})})),Z=(0,p.default)(L)`
  &[data-state='open'] {
    background-color: ${({theme:n})=>n.colors.primary100};
  }
`,t=(0,p.default)(i.Z)`
  path {
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`,l=(0,m.forwardRef)((n,h)=>(0,r.jsx)(d.Uv,{children:(0,r.jsx)(d.tu,{sideOffset:8,asChild:!0,children:(0,r.jsx)(C,{ref:h,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...n})})})),a=f,o=_,u=M,g=P,c=w,D=N,$=v,T=l},56498:(S,b,e)=>{"use strict";e.d(b,{sN:()=>i});var r=e(74081),m=e(27279),d=e(88941);const R=({children:p,onOpen:j,onClose:x,popoverPlacement:y,onReachEnd:O,...s})=>{const A=useRef(null),[f,_]=useState(!1),M=L=>{O&&O(L)},C=L=>{L&&typeof j=="function"?j():!L&&typeof x=="function"&&x(),_(L)},P=useId(),W=`intersection-${stripReactIdOfColon(P)}`;return useIntersection(A,M,{selectorToWatch:`#${W}`,skipWhen:!f}),jsxs(Root,{onOpenChange:C,children:[jsx(Trigger,{...s,children:s.label}),jsx(Content,{intersectionId:W,popoverPlacement:y,children:p})]})},i=d.ck},53532:(S,b,e)=>{"use strict";e.d(b,{d7:()=>d});var r=e(5466);const{Axios:m,AxiosError:d,CanceledError:R,isCancel:i,CancelToken:p,VERSION:j,all:x,Cancel:y,isAxiosError:O,spread:s,toFormData:A,AxiosHeaders:f,HttpStatusCode:_,formToJSON:M,getAdapter:C,mergeConfig:P}=r.default}}]);
