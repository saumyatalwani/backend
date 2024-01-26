"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3824],{44076:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(14094),c=n(83315),r=n(44747),g=(l=>l&&l.__esModule?l:{default:l})(s).default(r.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:l})=>l}, 1fr);
  ${({theme:l,gap:C})=>c("gap",C,l)}
`,d=l=>{const{gap:C="0",gridCols:v=12,...p}=l;return t.jsx(g,{gap:C,gridCols:v,...p})};a.Grid=d},3528:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(14094),s=n(44747),u=(i=>i&&i.__esModule?i:{default:i})(t).default(s.Box)`
  grid-column: span ${({col:i})=>i};
  max-width: 100%;

  ${({theme:i})=>i.mediaQueries.tablet} {
    grid-column: span ${({s:i})=>i};
  }

  ${({theme:i})=>i.mediaQueries.mobile} {
    grid-column: span ${({xs:i})=>i};
  }
`;a.GridItem=u},91594:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(35725),c=({startActions:r,endActions:u})=>!r&&!u?null:t.jsxs(s.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[t.jsx(s.Flex,{gap:2,wrap:"wrap",children:r}),t.jsx(s.Flex,{gap:2,shrink:0,wrap:"wrap",children:u})]});a.ActionLayout=c},3823:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(44747),c=({children:r})=>t.jsx(s.Box,{paddingLeft:10,paddingRight:10,children:r});a.ContentLayout=c},20285:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(14094),r=(u=>u&&u.__esModule?u:{default:u})(t).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:u})=>u.spaces[4]};
`;a.GridLayout=r},32213:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(27279),c=n(14094),r=n(43809),u=n(29381),i=n(44747),g=n(35725),d=n(11880),l=b=>b&&b.__esModule?b:{default:b},C=l(s),v=l(c),p=b=>{const m=s.useRef(null),[w,O]=s.useState(null),[$,D]=r.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return u.useResizeObserver($,()=>{$.current&&O($.current.getBoundingClientRect())}),s.useEffect(()=>{m.current&&O(m.current.getBoundingClientRect())},[m]),t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:w?.height},ref:$,children:D&&t.jsx(M,{ref:m,...b})}),!D&&t.jsx(M,{...b,sticky:!0,width:w?.width})]})};p.displayName="HeaderLayout";const y=v.default(i.Box)`
  width: ${({width:b})=>b?`${b/16}rem`:void 0};
  z-index: ${({theme:b})=>b.zIndices[1]};
`,M=C.default.forwardRef(({navigationAction:b,primaryAction:m,secondaryAction:w,subtitle:O,title:$,sticky:D,width:S,...f},x)=>{const k=typeof O=="string";return D?t.jsx(y,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:t.jsxs(g.Flex,{justifyContent:"space-between",children:[t.jsxs(g.Flex,{children:[b&&t.jsx(i.Box,{paddingRight:3,children:b}),t.jsxs(i.Box,{children:[t.jsx(d.Typography,{variant:"beta",as:"h1",...f,children:$}),k?t.jsx(d.Typography,{variant:"pi",textColor:"neutral600",children:O}):O]}),w?t.jsx(i.Box,{paddingLeft:4,children:w}):null]}),t.jsx(g.Flex,{children:m?t.jsx(i.Box,{paddingLeft:2,children:m}):void 0})]})}):t.jsxs(i.Box,{ref:x,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:b?6:8,background:"neutral100","data-strapi-header":!0,children:[b?t.jsx(i.Box,{paddingBottom:2,children:b}):null,t.jsxs(g.Flex,{justifyContent:"space-between",children:[t.jsxs(g.Flex,{minWidth:0,children:[t.jsx(d.Typography,{as:"h1",variant:"alpha",...f,children:$}),w?t.jsx(i.Box,{paddingLeft:4,children:w}):null]}),m]}),k?t.jsx(d.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:O}):O]})});a.BaseHeaderLayout=M,a.HeaderLayout=p},65030:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(14094),c=n(44747),u=(l=>l&&l.__esModule?l:{default:l})(s),i=u.default(c.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,g=u.default(c.Box)`
  overflow-x: hidden;
`,d=({sideNav:l,children:C})=>t.jsxs(i,{hasSideNav:Boolean(l),children:[l,t.jsx(g,{paddingBottom:10,children:C})]});a.Layout=d},90493:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(44076),c=n(3528),r=n(44747),u=({startCol:i,endCol:g})=>t.jsxs(s.Grid,{gap:4,children:[t.jsx(c.GridItem,{col:9,s:12,children:t.jsx(r.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:i})}),t.jsx(c.GridItem,{col:3,s:12,children:t.jsx(r.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:g})})]});a.TwoColsLayout=u},94305:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(65030),s=n(91594),c=n(3823),r=n(32213),u=n(90493),i=n(20285);a.Layout=t.Layout,a.ActionLayout=s.ActionLayout,a.ContentLayout=c.ContentLayout,a.BaseHeaderLayout=r.BaseHeaderLayout,a.HeaderLayout=r.HeaderLayout,a.TwoColsLayout=u.TwoColsLayout,a.GridLayout=i.GridLayout},24986:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(27279),c=n(29935),r=n(70598),u=n(77547),i=n(44747),g=l=>t.jsx(d,{...l,as:"th"}),d=({coords:l={col:0,row:0},as:C="td",...v})=>{const p=s.useRef(null),{rowIndex:y,colIndex:M,setTableValues:b}=c.useTable(),[m,w]=s.useState(!1),O=S=>{const f=r.getFocusableNodes(p.current,!0);if(f.length===0||f.length===1&&r.getFocusableNodesWithKeyboardNav(f).length===0)return;if(f.length>1&&!f.find(k=>k.tagName!=="BUTTON")){S.preventDefault();const k=f.findIndex(Y=>Y===document.activeElement);if(S.key===u.KeyboardKeys.RIGHT){const Y=f[k+1];Y&&(S.stopPropagation(),Y.focus())}else if(S.key===u.KeyboardKeys.LEFT){const Y=f[k-1];Y&&(S.stopPropagation(),Y.focus())}return}const x=S.key===u.KeyboardKeys.ENTER;if(x&&!m)w(!0);else if((S.key===u.KeyboardKeys.ESCAPE||x)&&m){if(x&&document.activeElement?.tagName==="A")return;w(!1),p.current.focus()}else m&&S.stopPropagation()},$=y===l.row-1&&M===l.col-1;s.useLayoutEffect(()=>{const S=r.getFocusableNodes(p.current,!0);S.length===0||S.length===1&&r.getFocusableNodesWithKeyboardNav(S).length!==0||S.length>1&&Boolean(S.find(f=>f.tagName!=="BUTTON"))?(p.current.setAttribute("tabIndex",!m&&$?"0":"-1"),S.forEach((f,x)=>{f.setAttribute("tabIndex",m?"0":"-1"),m&&x===0&&f.focus()})):S.forEach(f=>{f.setAttribute("tabIndex",$?"0":"-1")})},[m,$]);const D=s.useCallback(()=>{const S=r.getFocusableNodes(p.current,!0);S.length>=1&&(r.getFocusableNodesWithKeyboardNav(S).length!==0||!S.find(f=>f.tagName!=="BUTTON"))&&w(!0),b({rowIndex:l.row-1,colIndex:l.col-1})},[l,b]);return s.useLayoutEffect(()=>{const S=p.current;return r.getFocusableNodes(S,!0).forEach(x=>{x.addEventListener("focus",D)}),()=>{r.getFocusableNodes(S,!0).forEach(k=>{k.removeEventListener("focus",D)})}},[D]),t.jsx(i.Box,{role:"gridcell",as:C,ref:p,onKeyDown:O,...v})};a.RawTd=d,a.RawTh=g},56094:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(27279),c=n(9609),r=n(29935),u=n(77547),i=({colCount:g,rowCount:d,jumpStep:l=3,initialCol:C=0,initialRow:v=0,...p})=>{const y=s.useRef(null),M=s.useRef(!1),[b,m]=s.useState(v),[w,O]=s.useState(C),$=s.useCallback(({colIndex:f,rowIndex:x})=>{O(f),m(x)},[]);s.useEffect(()=>{M.current&&c.focusFocusable(y.current),M.current||(M.current=!0)},[w,b]);const D=f=>{switch(f.key){case u.KeyboardKeys.RIGHT:{f.preventDefault(),O(x=>x<g-1?x+1:x);break}case u.KeyboardKeys.LEFT:{f.preventDefault(),O(x=>x>0?x-1:x);break}case u.KeyboardKeys.UP:{f.preventDefault(),m(x=>x>0?x-1:x);break}case u.KeyboardKeys.DOWN:{f.preventDefault(),m(x=>x<d-1?x+1:x);break}case u.KeyboardKeys.HOME:{f.preventDefault(),f.ctrlKey&&m(0),O(0);break}case u.KeyboardKeys.END:{f.preventDefault(),f.ctrlKey&&m(d-1),O(g-1);break}case u.KeyboardKeys.PAGE_DOWN:{f.preventDefault(),m(x=>x+l<d?x+l:d-1);break}case u.KeyboardKeys.PAGE_UP:{f.preventDefault(),m(x=>x-l>0?x-l:0);break}}},S=s.useMemo(()=>({rowIndex:b,colIndex:w,setTableValues:$}),[w,b,$]);return t.jsx(r.RawTableContext.Provider,{value:S,children:t.jsx("table",{role:"grid",ref:y,"aria-rowcount":d,"aria-colcount":g,onKeyDown:D,...p})})};a.RawTable=i},29935:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(27279),s=t.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),c=()=>t.useContext(s);a.RawTableContext=s,a.useTable=c},6890:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(27279),c=({children:r,...u})=>{const i=s.Children.toArray(r).map((g,d)=>s.isValidElement(g)?s.cloneElement(g,{"aria-rowindex":d+2}):g);return t.jsx("tbody",{...u,children:i})};a.RawTbody=c},41179:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(27279),c=({children:r,...u})=>{const i=s.Children.toArray(r).map(g=>s.isValidElement(g)?s.cloneElement(g,{"aria-rowindex":1}):g);return t.jsx("thead",{...u,children:i})};a.RawThead=c},26014:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(27279),c=n(44747),r=({children:u,...i})=>{const g=s.Children.toArray(u).map((d,l)=>s.isValidElement(d)?s.cloneElement(d,{"aria-colindex":l+1,coords:{col:l+1,row:i["aria-rowindex"]}}):d);return t.jsx(c.Box,{as:"tr",...i,children:g})};a.RawTr=r},9609:(j,a)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const n=t=>{const s=t.querySelector('[tabindex="0"]');s&&s.focus()};a.focusFocusable=n},34922:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(14094),c=n(24986),r=n(35725),i=(v=>v&&v.__esModule?v:{default:v})(s),g=i.default(c.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:v})=>v.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,d=i.default.span`
  svg {
    height: ${4/16}rem;
  }
`,l=({children:v,action:p,...y})=>t.jsx(g,{as:c.RawTh,...y,children:t.jsxs(r.Flex,{children:[v,t.jsx(d,{children:p})]})}),C=({children:v,...p})=>t.jsx(g,{...p,children:v});a.Td=C,a.Th=l},82079:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(14094),c=n(44747),r=n(19658),u=n(35725),i=n(11880),d=(p=>p&&p.__esModule?p:{default:p})(s),l=d.default(c.Box)`
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
    fill: ${({theme:p})=>p.colors.primary600};
  }
`,C=d.default(c.Box)`
  border-radius: 0 0 ${({theme:p})=>p.borderRadius} ${({theme:p})=>p.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,v=({children:p,icon:y,...M})=>t.jsxs("div",{children:[t.jsx(r.Divider,{}),t.jsx(C,{as:"button",background:"primary100",padding:5,...M,children:t.jsxs(u.Flex,{children:[t.jsx(l,{"aria-hidden":!0,background:"primary200",children:y}),t.jsx(c.Box,{paddingLeft:3,children:t.jsx(i.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:p})})]})})]});a.TFooter=v},31661:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(27279),c=n(14094),r=n(56094),u=n(44747),g=(y=>y&&y.__esModule?y:{default:y})(c),d=g.default(u.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:y})=>y.colors.neutral150};
`,l=g.default(r.RawTable)`
  width: 100%;
  white-space: nowrap;
`,C=g.default(u.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:y})=>y==="both"||y==="left"?"''":void 0};
    box-shadow: ${({theme:y})=>y.shadows.tableShadow};
    width: ${({theme:y})=>y.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:y})=>y==="both"||y==="right"?"''":void 0};
    box-shadow: ${({theme:y})=>y.shadows.tableShadow};
    width: ${({theme:y})=>y.spaces[2]};
    right: 0;
    top: 0;
  }
`,v=g.default(u.Box)`
  overflow-x: auto;
`,p=({footer:y,...M})=>{const b=s.useRef(null),[m,w]=s.useState(),O=$=>{const D=$.target.scrollWidth-$.target.clientWidth;if($.target.scrollLeft===0){w("right");return}if($.target.scrollLeft===D){w("left");return}$.target.scrollLeft>0&&w("both")};return s.useEffect(()=>{b.current.scrollWidth>b.current.clientWidth&&w("right")},[]),t.jsxs(d,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[t.jsx(C,{overflowing:m,position:"relative",children:t.jsx(v,{ref:b,onScroll:O,paddingLeft:6,paddingRight:6,children:t.jsx(l,{...M})})}),y]})};a.Table=p},73314:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(14094),c=n(6890),i=(d=>d&&d.__esModule?d:{default:d})(s).default(c.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,g=({children:d,...l})=>t.jsx(i,{...l,children:d});a.Tbody=g},79821:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(14094),c=n(41179),i=(d=>d&&d.__esModule?d:{default:d})(s).default(c.RawThead)`
  border-bottom: 1px solid ${({theme:d})=>d.colors.neutral150};
`,g=({children:d,...l})=>t.jsx(i,{...l,children:d});a.Thead=g},45286:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(74081),s=n(14094),c=n(26014),i=(d=>d&&d.__esModule?d:{default:d})(s).default(c.RawTr)`
  border-bottom: 1px solid ${({theme:d})=>d.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:d})=>d.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:d})=>d.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,g=d=>t.jsx(i,{...d});a.Tr=g},22493:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(31661),s=n(73314),c=n(79821),r=n(45286),u=n(34922),i=n(82079);a.Table=t.Table,a.Tbody=s.Tbody,a.Thead=c.Thead,a.Tr=r.Tr,a.Td=u.Td,a.Th=u.Th,a.TFooter=i.TFooter},43809:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(27279),s=c=>{const r=t.useRef(null),[u,i]=t.useState(!0),g=([d])=>{i(d.isIntersecting)};return t.useEffect(()=>{const d=r.current,l=new IntersectionObserver(g,c);return d&&l.observe(r.current),()=>{d&&l.disconnect()}},[r,c]),[r,u]};a.useElementOnScreen=s},29381:(j,a,n)=>{Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t=n(27279),s=n(81906),c=(r,u)=>{const i=s.useCallbackRef(u);t.useLayoutEffect(()=>{const g=new ResizeObserver(i);return Array.isArray(r)?r.forEach(d=>{d.current&&g.observe(d.current)}):r.current&&g.observe(r.current),()=>{g.disconnect()}},[r,i])};a.useResizeObserver=c},83248:(j,a,n)=>{const t=n(74081),s=r=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:t.jsx("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),c=s;j.exports=c},63102:(j,a,n)=>{const t=n(74081),s=r=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...r,children:[t.jsx("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),t.jsx("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),c=s;j.exports=c},37579:(j,a,n)=>{const t=n(74081),s=r=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:t.jsx("path",{fill:"#212134",d:"M24 13.604a.3.3 0 0 1-.3.3h-9.795V23.7a.3.3 0 0 1-.3.3h-3.21a.3.3 0 0 1-.3-.3v-9.795H.3a.3.3 0 0 1-.3-.3v-3.21a.3.3 0 0 1 .3-.3h9.795V.3a.3.3 0 0 1 .3-.3h3.21a.3.3 0 0 1 .3.3v9.795H23.7a.3.3 0 0 1 .3.3v3.21Z"})}),c=s;j.exports=c},93824:(j,a,n)=>{n.r(a),n.d(a,{default:()=>dt});var t=n(74081),s=n(27279),c=n(51447),r=n(94486),u=n(53603),i=n.n(u),g=n(25074),d=n(61020),l=n(29759);const C=async()=>{try{return await(0,r.WY)(`/${i()}/component`,{method:"GET"})}catch{return null}},v=async()=>{try{return await(0,r.WY)(`/${i()}/content-types`,{method:"GET"})}catch{return null}},p=async()=>{try{return(await(0,r.WY)(`/${i()}/component`,{method:"POST"},!0)).json()}catch{return null}};var y=n(16897),M=n(14094);const b="success-light",m="danger-light",w="default",O="tertiary",$="secondary",D="danger",S="success",f="ghost",x=[b,m],k=[w,O,$,D,S,f,...x],Y=null,ue="alpha",ge="beta",he="delta",fe="epsilon",oe="omega",xe="pi",ye="sigma",gt=[ue,ge,he,fe,oe,xe,ye],De=({ellipsis:e=!1})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,Fe=({variant:e=oe,theme:o})=>{switch(e){case ue:return`
        font-weight: ${o.fontWeights.bold};
        font-size: ${o.fontSizes[5]};
        line-height: ${o.lineHeights[2]};
      `;case ge:return`
        font-weight: ${o.fontWeights.bold};
        font-size: ${o.fontSizes[4]};
        line-height: ${o.lineHeights[1]};
      `;case he:return`
        font-weight: ${o.fontWeights.semiBold};
        font-size: ${o.fontSizes[3]};
        line-height: ${o.lineHeights[2]};
      `;case fe:return`
        font-size: ${o.fontSizes[3]};
        line-height: ${o.lineHeights[6]};
      `;case oe:return`
        font-size: ${o.fontSizes[2]};
        line-height: ${o.lineHeights[4]};
      `;case xe:return`
        font-size: ${o.fontSizes[1]};
        line-height: ${o.lineHeights[3]};
      `;case ye:return`
        font-weight: ${o.fontWeights.bold};
        font-size: ${o.fontSizes[0]};
        line-height: ${o.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${o.fontSizes[2]};
      `}};function Ie(e,o){return typeof e=="string"?!1:o in e}function ht(e){return e&&typeof e=="object"&&!Array.isArray(e)}function P(e,o,h){return o&&Ie(e,o)?e[o]:h}const Ae={fontSize:!0,fontWeight:!0},Q=M.default.span.withConfig({shouldForwardProp:(e,o)=>!Ae[e]&&o(e)})`
  ${Fe}
  ${De}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:o})=>P(e.fontWeights,o,void 0)};
  font-size: ${({theme:e,fontSize:o})=>P(e.fontSizes,o,void 0)};
  line-height: ${({theme:e,lineHeight:o})=>P(e.lineHeights,o,o)};
  color: ${({theme:e,textColor:o})=>e.colors[o||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`,A=e=>e===b||e===m?`${e.substring(0,e.lastIndexOf("-"))}`:e===O?"neutral":e===w||e===$||k.every(o=>o!==e)?"primary":`${e}`,pe=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${Q} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,Ne=({theme:e,variant:o})=>[...x,$].includes(o)?`
      background-color: ${e.colors.neutral0};
    `:o===O?`
      background-color: ${e.colors.neutral100};
    `:o===f?`
      background-color: ${e.colors.neutral100};
    `:o===w?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${A(o)}500`]};
    background: ${e.colors[`${A(o)}500`]};
  `,He=({theme:e,variant:o})=>[...x,$].includes(o)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${A(o)}600`]};
      ${Q} {
        color: ${e.colors[`${A(o)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${A(o)}600`]};
        }
      }
    `:o===O?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${A(o)}600`]};
    background: ${e.colors[`${A(o)}600`]};
  `,ke=({theme:e,variant:o})=>{switch(o){case m:case b:case $:return`
          border: 1px solid ${e.colors[`${A(o)}200`]};
          background: ${e.colors[`${A(o)}100`]};
          ${Q} {
            color: ${e.colors[`${A(o)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${A(o)}700`]};
            }
          }
        `;case O:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${Q} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case f:return`
        border: 1px solid transparent;
        background: transparent;

        ${Q} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case S:case D:return`
          border: 1px solid ${e.colors[`${A(o)}600`]};
          background: ${e.colors[`${A(o)}600`]};
          ${Q} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},ft=e=>({theme:o,size:h})=>o.sizes[e][h],xt=(e="&")=>({theme:o,hasError:h=!1})=>css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${h?o.colors.danger600:o.colors.primary600};
      box-shadow: ${h?o.colors.danger600:o.colors.primary600} 0px 0px 0px 2px;
    }
  `,Ke=({theme:e})=>(0,M.css)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`,W=(e,o,h)=>{if(!o)return;if(typeof o=="object")return(Array.isArray(o)?o:[o?.desktop,o?.tablet,o?.mobile]).reduce((I,N,Z)=>{if(N)switch(Z){case 0:return`${I}${e}: ${h.spaces[N]};`;case 1:return`${I}${h.mediaQueries.tablet}{${e}: ${h.spaces[N]};}`;case 2:return`${I}${h.mediaQueries.mobile}{${e}: ${h.spaces[N]};}`;default:return I}return I},"");const B=h.spaces[o]??o;return`${e}: ${B};`},ze={color:!0,cursor:!0,height:!0,width:!0},be=M.default.div.withConfig({shouldForwardProp:(e,o)=>!ze[e]&&o(e)})`
  // Font
  font-size: ${({fontSize:e,theme:o})=>P(o.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:o})=>P(e.colors,o,o)};
  color: ${({theme:e,color:o})=>P(e.colors,o,void 0)};

  // Spaces
  ${({theme:e,padding:o})=>W("padding",o,e)}
  ${({theme:e,paddingTop:o})=>W("padding-top",o,e)}
  ${({theme:e,paddingRight:o})=>W("padding-right",o,e)}
  ${({theme:e,paddingBottom:o})=>W("padding-bottom",o,e)}
  ${({theme:e,paddingLeft:o})=>W("padding-left",o,e)}
  ${({theme:e,marginLeft:o})=>W("margin-left",o,e)}
  ${({theme:e,marginRight:o})=>W("margin-right",o,e)}
  ${({theme:e,marginTop:o})=>W("margin-top",o,e)}
  ${({theme:e,marginBottom:o})=>W("margin-bottom",o,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:o})=>o?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:o})=>o?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:o,borderRadius:h})=>o?e.borderRadius:h};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:o})=>P(o.colors,e,void 0)};
  border: ${({theme:e,borderColor:o,borderStyle:h,borderWidth:B})=>{if(o&&!h&&typeof B>"u")return`1px solid ${e.colors[o]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:o})=>P(e.shadows,o,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:o})=>e?e(o):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:o})=>P(o.spaces,e,e)};
  right: ${({right:e,theme:o})=>P(o.spaces,e,e)};
  top: ${({top:e,theme:o})=>P(o.spaces,e,e)};
  bottom: ${({bottom:e,theme:o})=>P(o.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:o})=>P(o.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:o})=>P(o.spaces,e,e)};
  min-width: ${({minWidth:e,theme:o})=>P(o.spaces,e,e)};
  height: ${({height:e,theme:o})=>P(o.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:o})=>P(o.spaces,e,e)};
  min-height: ${({minHeight:e,theme:o})=>P(o.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:o})=>P(e.lineHeights,o,o)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`,We={direction:!0},ne=(0,M.default)(be).withConfig({shouldForwardProp:(e,o)=>!We[e]&&o(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:o})=>o?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:o})=>W("gap",e,o)};
  justify-content: ${({justifyContent:e})=>e};
`,je=(0,M.default)(ne)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${Ke}
`,Ge=s.forwardRef(({disabled:e,children:o,background:h="neutral0",...B},H)=>(0,t.jsx)(je,{ref:H,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:h,borderColor:"neutral200",cursor:"pointer",...B,children:o}));Ge.displayName="BaseButton";const se=s.forwardRef(({href:e,rel:o="noreferrer noopener",target:h="_self",disabled:B=!1,isExternal:H=!1,...z},I)=>(0,t.jsx)(be,{as:"a",ref:I,target:H?"_blank":h,rel:H?o:void 0,href:B?"#":e,"aria-disabled":B,cursor:"pointer",...z}));se.displayName="BaseLink";const Ve=(0,M.default)(je)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${pe}
    &:active {
      ${pe}
    }
  }

  &:hover {
    ${Ne}
  }

  &:active {
    ${He}
  }

  ${ke}
`,J=s.forwardRef(({variant:e="default",startIcon:o,endIcon:h,disabled:B=!1,children:H,size:z="S",as:I=se,...N},Z)=>{const q=z==="S"?2:"10px",X=4;return(0,t.jsxs)(Ve,{ref:Z,"aria-disabled":B,size:z,variant:e,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:q,paddingLeft:X,paddingRight:X,paddingTop:q,pointerEvents:B?"none":void 0,...N,as:I||se,children:[o&&(0,t.jsx)(ne,{"aria-hidden":!0,children:o}),(0,t.jsx)(Q,{variant:z==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:H}),h&&(0,t.jsx)(ne,{"aria-hidden":!0,children:h})]})});J.displayName="LinkButton";var E=n(50568),ae=n(29046),R=n(22493),Ue=n(37579),_=n.n(Ue),le=n(27589),K=n(52185),G=n(74882),V=n(30757),re=n(97487),Ze=n(72630),Ye=n(81565),Qe=n(37386),Xe=n(23851),Je=n(3785),qe=n(83248),_e=n.n(qe),et=n(63102),me=n.n(et);const Se=n(97585).Z,de=({item:e})=>{const o=(0,r.lm)(),[h,B]=(0,s.useState)(!0),[H,z]=(0,s.useState)(!0),[I,N]=(0,s.useState)(!0),[Z,q]=(0,s.useState)(!0),[X,Te]=(0,s.useState)(!0),[$e,ve]=(0,s.useState)(!0),[we,Oe]=(0,s.useState)(!0),[Re,Me]=(0,s.useState)(!0),[Ee,Ce]=(0,s.useState)(!0),[Pe,Be]=(0,s.useState)(!0),[ee,Le]=(0,s.useState)(null),[it,te]=(0,s.useState)(!1),{formatMessage:L}=(0,d.Z)();(0,s.useEffect)(()=>{(async()=>{const F=await Se.get();Le(F)})()},[]);const ct=T=>{const F=ee[e?.uid];B(F?.seoChecks?.metaTitle),z(F?.seoChecks?.metaDescription),N(F?.seoChecks?.metaRobots),q(F?.seoChecks?.metaSocial),Te(F?.seoChecks?.wordCount),ve(F?.seoChecks?.canonicalUrl),Oe(F?.seoChecks?.keywordDensity),Me(F?.seoChecks?.structuredData),Ce(F?.seoChecks?.alternativeText),Be(F?.seoChecks?.lastUpdatedAt),te(ce=>!ce)},ut=T=>{const F={...ee,[e?.uid]:{collectionName:ee[e?.uid]?.collectionName,seoChecks:{metaTitle:h,metaDescription:H,metaRobots:I,metaSocial:Z,wordCount:X,canonicalUrl:$e,keywordDensity:we,structuredData:Re,alternativeText:Ee,lastUpdatedAt:Pe}}};Se.set(F).then(async()=>{Le(F),te(ce=>!ce)}),o({type:"success",message:{id:"notification.success.settings",defaultMessage:`Settings saved for ${ee[e?.uid]?.collectionName} content-type.`}})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(re.Button,{variant:"tertiary",startIcon:(0,t.jsx)(_e(),{}),onClick:T=>ct(T),children:L({id:(0,l.O)("SEOPage.info.config"),defaultMessage:"Settings"})}),it&&(0,t.jsxs)(Ye.P,{onClose:()=>te(T=>!T),labelledBy:"title",children:[(0,t.jsx)(Qe.x,{children:(0,t.jsx)(E.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:L({id:(0,l.O)("SEOPage.info.settings"),defaultMessage:"Settings"})})}),(0,t.jsxs)(Xe.f,{children:[(0,t.jsx)(K.x,{paddingBottom:8,paddingTop:4,children:(0,t.jsx)(r.Y_,{title:L({id:"Information",defaultMessage:"Information"}),subtitle:L({id:(0,l.O)("HomePage.info.settings.information"),defaultMessage:"Disable SEO checks for this specific content-type."}),icon:(0,t.jsx)(me(),{}),iconBackground:"primary100"})}),(0,t.jsxs)(Ze.M,{children:[(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:h,onChange:()=>B(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.meta-title-check"),defaultMessage:"Meta Title"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:H,onChange:()=>z(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.meta-description-check"),defaultMessage:"Meta Description"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:I,onChange:()=>N(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.meta-robots-check"),defaultMessage:"Meta Robots"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:Z,onChange:()=>q(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.meta-social-check"),defaultMessage:"Meta Social"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:X,onChange:()=>Te(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.word-count-check"),defaultMessage:"Word Count"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:$e,onChange:()=>ve(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.canonical-url-check"),defaultMessage:"Canonical URL"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:we,onChange:()=>Oe(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.keyword-density-check"),defaultMessage:"Keyword Density"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:Re,onChange:()=>Me(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.structured-data-check"),defaultMessage:"Structured Data"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:Ee,onChange:()=>Ce(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.alternative-text-check"),defaultMessage:"Alt Text"})})]})}),(0,t.jsx)(K.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsxs)(G.K,{horizontal:!0,spacing:4,padding:3,children:[(0,t.jsx)(V.Switch,{label:"Switch",selected:Pe,onChange:()=>Be(T=>!T)}),(0,t.jsx)(E.Typography,{variant:"delta",children:L({id:(0,l.O)("SEOPage.info.settings.last-updated-at-check"),defaultMessage:"Last Updated At"})})]})})]})]}),(0,t.jsx)(Je.m,{startActions:(0,t.jsx)(re.Button,{onClick:()=>te(T=>!T),variant:"tertiary",children:L({id:(0,l.O)("SEOPage.info.settings.cancel.button"),defaultMessage:"Cancel"})}),endActions:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(re.Button,{onClick:T=>ut(T),children:L({id:(0,l.O)("SEOPage.info.settings.save.button"),defaultMessage:"Save"})})})})]})]})};var U=n(84637),tt=n(82284),ie=n.n(tt);const ot=({contentTypes:e})=>{const{formatMessage:o}=(0,d.Z)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(g.Box,{padding:8,children:(0,t.jsxs)(U.TabGroup,{label:"label",id:"tabs",variant:"simple",children:[(0,t.jsxs)(U.Tabs,{children:[(0,t.jsx)(U.Tab,{children:(0,t.jsx)(E.Typography,{children:o({id:(0,l.O)("SEOPage.tab.collection-type-title"),defaultMessage:"Collection Types"})})}),(0,t.jsx)(U.Tab,{children:(0,t.jsx)(E.Typography,{variant:"omega",children:o({id:(0,l.O)("SEOPage.tab.single-type-title"),defaultMessage:"Single Types"})})}),(0,t.jsx)(U.Tab,{children:(0,t.jsx)(E.Typography,{variant:"omega",children:o({id:(0,l.O)("SEOPage.tab.plugin-title"),defaultMessage:"Plugins"})})})]}),(0,t.jsxs)(U.TabPanels,{children:[(0,t.jsx)(U.TabPanel,{children:(0,t.jsxs)(R.Table,{colCount:2,rowCount:e.collectionTypes.length,children:[(0,t.jsx)(R.Thead,{children:(0,t.jsx)(R.Tr,{children:(0,t.jsx)(R.Th,{children:(0,t.jsx)(E.Typography,{variant:"sigma",children:o({id:(0,l.O)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"})})})})}),(0,t.jsx)(R.Tbody,{children:e&&e.collectionTypes&&!ie().isEmpty(e.collectionTypes)?e.collectionTypes.map(h=>(0,t.jsxs)(R.Tr,{children:[(0,t.jsx)(R.Td,{children:(0,t.jsx)(E.Typography,{textColor:"neutral800",children:h.globalId})}),(0,t.jsx)(R.Td,{children:(0,t.jsx)(y.Flex,{justifyContent:"right",alignItems:"right",children:h.seo?(0,t.jsx)(de,{item:h}):(0,t.jsx)(J,{startIcon:(0,t.jsx)(_(),{}),variant:"secondary",href:`/plugins/content-type-builder/content-types/${h.uid}`,children:o({id:(0,l.O)("SEOPage.info.add"),defaultMessage:"Add component"})})})})]},h.uid)):(0,t.jsx)(g.Box,{padding:8,background:"neutral0",children:(0,t.jsx)(ae.EmptyStateLayout,{icon:(0,t.jsx)(le.w,{}),content:o({id:(0,l.O)("SEOPage.info.no-collection-types"),defaultMessage:"You don't have any collection-types yet..."}),action:(0,t.jsx)(J,{to:"/plugins/content-type-builder",variant:"secondary",startIcon:(0,t.jsx)(_(),{}),children:o({id:(0,l.O)("SEOPage.info.create-collection-type"),defaultMessage:"Create your first collection-type"})})})})})]})}),(0,t.jsx)(U.TabPanel,{children:(0,t.jsxs)(R.Table,{colCount:2,rowCount:e.singleTypes.length,children:[(0,t.jsx)(R.Thead,{children:(0,t.jsx)(R.Tr,{children:(0,t.jsx)(R.Th,{children:(0,t.jsx)(E.Typography,{variant:"sigma",children:o({id:(0,l.O)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"})})})})}),(0,t.jsx)(R.Tbody,{children:e&&e.singleTypes&&!ie().isEmpty(e.singleTypes)?e.singleTypes.map(h=>(0,t.jsxs)(R.Tr,{children:[(0,t.jsx)(R.Td,{children:(0,t.jsx)(E.Typography,{textColor:"neutral800",children:h.globalId})}),(0,t.jsx)(R.Td,{children:(0,t.jsx)(y.Flex,{justifyContent:"right",alignItems:"right",children:h.seo?(0,t.jsx)(de,{item:h}):(0,t.jsx)(J,{startIcon:(0,t.jsx)(_(),{}),variant:"secondary",href:`/admin/plugins/content-type-builder/content-types/${h.uid}`,children:o({id:(0,l.O)("SEOPage.info.add"),defaultMessage:"Add component"})})})})]},h.uid)):(0,t.jsx)(g.Box,{padding:8,background:"neutral0",children:(0,t.jsx)(ae.EmptyStateLayout,{icon:(0,t.jsx)(le.w,{}),content:o({id:(0,l.O)("SEOPage.info.no-single-types"),defaultMessage:"You don't have any single-types yet..."}),action:(0,t.jsx)(J,{to:"/admin/plugins/content-type-builder",variant:"secondary",startIcon:(0,t.jsx)(_(),{}),children:o({id:(0,l.O)("SEOPage.info.create-single-type"),defaultMessage:"Create your first single-type"})})})})})]})}),(0,t.jsx)(U.TabPanel,{children:(0,t.jsxs)(R.Table,{colCount:2,rowCount:e.plugins.length,children:[(0,t.jsx)(R.Thead,{children:(0,t.jsx)(R.Tr,{children:(0,t.jsx)(R.Th,{children:(0,t.jsx)(E.Typography,{variant:"sigma",children:o({id:(0,l.O)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"})})})})}),(0,t.jsx)(R.Tbody,{children:e&&e.plugins&&!ie().isEmpty(e.plugins)?e.plugins.map(h=>(0,t.jsxs)(R.Tr,{children:[(0,t.jsx)(R.Td,{children:(0,t.jsx)(E.Typography,{textColor:"neutral800",children:h.globalId})}),(0,t.jsx)(R.Td,{children:(0,t.jsx)(y.Flex,{justifyContent:"right",alignItems:"right",children:h.seo?(0,t.jsx)(de,{item:h}):(0,t.jsx)(J,{startIcon:(0,t.jsx)(_(),{}),variant:"secondary",href:`/admin/plugins/content-type-builder/content-types/${h.uid}`,children:o({id:(0,l.O)("SEOPage.info.add"),defaultMessage:"Add component"})})})})]},h.uid)):(0,t.jsx)(g.Box,{padding:8,background:"neutral0",children:(0,t.jsx)(ae.EmptyStateLayout,{icon:(0,t.jsx)(le.w,{}),content:o({id:(0,l.O)("SEOPage.info.no-plugin-content-type"),defaultMessage:"You don't have any plugin content-type yet..."})})})})]})})]})]})})})};var nt=n(94305);const st=e=>{const{formatMessage:o}=(0,d.Z)();return(0,t.jsx)(g.Box,{background:"neutral100",children:(0,t.jsx)(nt.BaseHeaderLayout,{secondaryAction:e?null:(0,t.jsx)(LinkButton,{variant:"tertiary",to:"/admin/plugins/content-type-builder/component-categories/shared/shared.seo",startIcon:(0,t.jsx)(Pencil,{}),children:o({id:(0,l.O)("SEOPage.header.button.edit-component"),defaultMessage:"Edit SEO component"})}),title:o({id:(0,l.O)("SEOPage.header.title"),defaultMessage:"SEO"}),subtitle:o({id:(0,l.O)("SEOPage.header.subtitle"),defaultMessage:"Optimize your content to be SEO friendly"}),as:"h2"})})},at=()=>{const{formatMessage:e}=(0,d.Z)(),{lockAppWithAutoreload:o,unlockAppWithAutoreload:h}=(0,r.Vu)(),[B,H]=(0,s.useState)(!0),[z,I]=(0,s.useState)(!1),N=(0,s.useRef)({}),Z=(0,s.useRef)({});return(0,s.useEffect)(()=>{(async()=>{if(N.current=await C(),Z.current=await v(),!N.current)try{o(),await p()}catch(X){console.log(X)}finally{h(),I(!0)}})().then(()=>{H(!1)})},[z]),B?(0,t.jsx)(r.dO,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(st,{seoComponent:N.current}),(0,t.jsx)(g.Box,{paddingLeft:8,paddingRight:8,children:(0,t.jsx)(r.Y_,{title:e({id:"Information",defaultMessage:"Information"}),subtitle:e({id:(0,l.O)("HomePage.info.information"),defaultMessage:"When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type."}),icon:(0,t.jsx)(me(),{}),iconBackground:"primary100"})}),(0,t.jsx)(ot,{contentTypes:Z.current})]})},lt=(0,s.memo)(at);var rt=n(32141);const dt=()=>(0,t.jsx)(r.O4,{permissions:rt.Z.main,children:(0,t.jsx)("div",{children:(0,t.jsx)(c.rs,{children:(0,t.jsx)(c.AW,{path:`/plugins/${i()}`,component:lt,exact:!0})})})})},72630:(j,a,n)=>{n.d(a,{M:()=>s});var t=n(14094);const s=t.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:c})=>c.spaces[4]};
`}}]);
