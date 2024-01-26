(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9035],{29520:O=>{function U(a,r,p,y){for(var L=-1,$=a==null?0:a.length;++L<$;){var E=a[L];r(y,E,p(E),a)}return y}O.exports=U},67083:(O,U,a)=>{var r=a(62878);function p(y,L){var $=y==null?0:y.length;return!!$&&r(y,L,0)>-1}O.exports=p},65286:O=>{function U(a,r,p){for(var y=-1,L=a==null?0:a.length;++y<L;)if(p(r,a[y]))return!0;return!1}O.exports=U},83377:(O,U,a)=>{var r=a(54483),p=r("length");O.exports=p},98694:(O,U,a)=>{var r=a(1107);function p(y,L,$,E){return r(y,function(b,Z,V){L(E,b,$(b),V)}),E}O.exports=p},1107:(O,U,a)=>{var r=a(84856),p=a(52593),y=p(r);O.exports=y},32652:O=>{function U(a,r,p,y){for(var L=a.length,$=p+(y?1:-1);y?$--:++$<L;)if(r(a[$],$,a))return $;return-1}O.exports=U},62878:(O,U,a)=>{var r=a(32652),p=a(2784),y=a(51425);function L($,E,b){return E===E?y($,E,b):r($,p,b)}O.exports=L},2784:O=>{function U(a){return a!==a}O.exports=U},22107:(O,U,a)=>{var r=a(13578),p=a(27138),y="[object RegExp]";function L($){return p($)&&r($)==y}O.exports=L},92403:(O,U,a)=>{var r=a(1107),p=a(47727);function y(L,$){var E=-1,b=p(L)?Array(L.length):[];return r(L,function(Z,V,K){b[++E]=$(Z,V,K)}),b}O.exports=y},16429:(O,U,a)=>{var r=a(36393),p=a(82393),y=a(90040),L=a(92403),$=a(63135),E=a(20435),b=a(9998),Z=a(51339),V=a(26126);function K(re,Q,fe){Q.length?Q=r(Q,function(H){return V(H)?function(ee){return p(ee,H.length===1?H[0]:H)}:H}):Q=[Z];var ue=-1;Q=r(Q,E(y));var ce=L(re,function(H,ee,se){var ge=r(Q,function(me){return me(H)});return{criteria:ge,index:++ue,value:H}});return $(ce,function(H,ee){return b(H,ee,fe)})}O.exports=K},63135:O=>{function U(a,r){var p=a.length;for(a.sort(r);p--;)a[p]=a[p].value;return a}O.exports=U},21157:(O,U,a)=>{var r=a(44936),p=a(67083),y=a(65286),L=a(42435),$=a(83661),E=a(1695),b=200;function Z(V,K,re){var Q=-1,fe=p,ue=V.length,ce=!0,H=[],ee=H;if(re)ce=!1,fe=y;else if(ue>=b){var se=K?null:$(V);if(se)return E(se);ce=!1,fe=L,ee=new r}else ee=K?[]:H;e:for(;++Q<ue;){var ge=V[Q],me=K?K(ge):ge;if(ge=re||ge!==0?ge:0,ce&&me===me){for(var he=ee.length;he--;)if(ee[he]===me)continue e;K&&ee.push(me),H.push(ge)}else fe(ee,me,re)||(ee!==H&&ee.push(me),H.push(ge))}return H}O.exports=Z},17654:(O,U,a)=>{var r=a(85194);function p(y,L){if(y!==L){var $=y!==void 0,E=y===null,b=y===y,Z=r(y),V=L!==void 0,K=L===null,re=L===L,Q=r(L);if(!K&&!Q&&!Z&&y>L||Z&&V&&re&&!K&&!Q||E&&V&&re||!$&&re||!b)return 1;if(!E&&!Z&&!Q&&y<L||Q&&$&&b&&!E&&!Z||K&&$&&b||!V&&b||!re)return-1}return 0}O.exports=p},9998:(O,U,a)=>{var r=a(17654);function p(y,L,$){for(var E=-1,b=y.criteria,Z=L.criteria,V=b.length,K=$.length;++E<V;){var re=r(b[E],Z[E]);if(re){if(E>=K)return re;var Q=$[E];return re*(Q=="desc"?-1:1)}}return y.index-L.index}O.exports=p},37177:(O,U,a)=>{var r=a(29520),p=a(98694),y=a(90040),L=a(26126);function $(E,b){return function(Z,V){var K=L(Z)?r:p,re=b?b():{};return K(Z,E,y(V,2),re)}}O.exports=$},52593:(O,U,a)=>{var r=a(47727);function p(y,L){return function($,E){if($==null)return $;if(!r($))return y($,E);for(var b=$.length,Z=L?b:-1,V=Object($);(L?Z--:++Z<b)&&E(V[Z],Z,V)!==!1;);return $}}O.exports=p},83661:(O,U,a)=>{var r=a(31497),p=a(18920),y=a(1695),L=1/0,$=r&&1/y(new r([,-0]))[1]==L?function(E){return new r(E)}:p;O.exports=$},51425:O=>{function U(a,r,p){for(var y=p-1,L=a.length;++y<L;)if(a[y]===r)return y;return-1}O.exports=U},30930:(O,U,a)=>{var r=a(83377),p=a(11993),y=a(61781);function L($){return p($)?y($):r($)}O.exports=L},61781:O=>{var U="\\ud800-\\udfff",a="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",p="\\u20d0-\\u20ff",y=a+r+p,L="\\ufe0e\\ufe0f",$="["+U+"]",E="["+y+"]",b="\\ud83c[\\udffb-\\udfff]",Z="(?:"+E+"|"+b+")",V="[^"+U+"]",K="(?:\\ud83c[\\udde6-\\uddff]){2}",re="[\\ud800-\\udbff][\\udc00-\\udfff]",Q="\\u200d",fe=Z+"?",ue="["+L+"]?",ce="(?:"+Q+"(?:"+[V,K,re].join("|")+")"+ue+fe+")*",H=ue+fe+ce,ee="(?:"+[V+E+"?",E,K,re,$].join("|")+")",se=RegExp(b+"(?="+b+")|"+ee+H,"g");function ge(me){for(var he=se.lastIndex=0;se.test(me);)++he;return he}O.exports=ge},63799:(O,U,a)=>{var r=a(71041),p=a(37177),y=Object.prototype,L=y.hasOwnProperty,$=p(function(E,b,Z){L.call(E,Z)?E[Z].push(b):r(E,Z,[b])});O.exports=$},50156:(O,U,a)=>{var r=a(22107),p=a(20435),y=a(25336),L=y&&y.isRegExp,$=L?p(L):r;O.exports=$},63514:(O,U,a)=>{var r=a(13578),p=a(26126),y=a(27138),L="[object String]";function $(E){return typeof E=="string"||!p(E)&&y(E)&&r(E)==L}O.exports=$},18920:O=>{function U(){}O.exports=U},84921:(O,U,a)=>{var r=a(52695),p=a(4500),y=a(47727),L=a(63514),$=a(30930),E="[object Map]",b="[object Set]";function Z(V){if(V==null)return 0;if(y(V))return L(V)?$(V):V.length;var K=p(V);return K==E||K==b?V.size:r(V).length}O.exports=Z},8243:(O,U,a)=>{var r=a(93367),p=a(16429),y=a(52431),L=a(65145),$=y(function(E,b){if(E==null)return[];var Z=b.length;return Z>1&&L(E,b[0],b[1])?b=[]:Z>2&&L(b[0],b[1],b[2])&&(b=[b[0]]),p(E,r(b,1),[])});O.exports=$},79146:(O,U,a)=>{var r=a(16946);function p(y){return r(y).toLowerCase()}O.exports=p},88702:(O,U,a)=>{var r=a(63546),p=a(82311),y=a(11993),L=a(3243),$=a(50156),E=a(30930),b=a(66734),Z=a(69740),V=a(16946),K=30,re="...",Q=/\w*$/;function fe(ue,ce){var H=K,ee=re;if(L(ce)){var se="separator"in ce?ce.separator:se;H="length"in ce?Z(ce.length):H,ee="omission"in ce?r(ce.omission):ee}ue=V(ue);var ge=ue.length;if(y(ue)){var me=b(ue);ge=me.length}if(H>=ge)return ue;var he=H-E(ee);if(he<1)return ee;var Ee=me?p(me,0,he).join(""):ue.slice(0,he);if(se===void 0)return Ee+ee;if(me&&(he+=Ee.length-he),$(se)){if(ue.slice(he).search(se)){var et,St=Ee;for(se.global||(se=RegExp(se.source,V(Q.exec(se))+"g")),se.lastIndex=0;et=se.exec(St);)var pe=et.index;Ee=Ee.slice(0,pe===void 0?he:pe)}}else if(ue.indexOf(r(se),he)!=he){var it=Ee.lastIndexOf(se);it>-1&&(Ee=Ee.slice(0,it))}return Ee+ee}O.exports=fe},81465:(O,U,a)=>{var r=a(21157);function p(y){return y&&y.length?r(y):[]}O.exports=p},930:(O,U,a)=>{"use strict";a.d(U,{O:()=>p});var r=a(71943);const p=r.Wx},1296:(O,U,a)=>{"use strict";a.d(U,{A:()=>E});var r=a(74081),p=a(14094),y=a(52185);const L=(0,p.default)(y.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:b})=>b?"auto 1fr":"1fr"};
`,$=(0,p.default)(y.x)`
  overflow-x: hidden;
`,E=({sideNav:b,children:Z})=>(0,r.jsxs)(L,{hasSideNav:Boolean(b),children:[b,(0,r.jsx)($,{paddingBottom:10,children:Z})]})},33774:(O,U,a)=>{"use strict";a.d(U,{r:()=>re});var r=a(74081),p=a(27279),y=a(34120),L=a(47533),$=a(14094),E=a(97069),b=a(78565),Z=a(52185);const V=$.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:Q})=>Q?"none":void 0};
  color: ${({disabled:Q,theme:fe})=>Q?fe.colors.neutral600:fe.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${b.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:Q})=>Q.colors.primary500};
  }

  &:active {
    color: ${({theme:Q})=>Q.colors.primary700};
  }

  ${E.BF};
`,K=(0,$.default)(Z.x)`
  display: flex;
`,re=p.forwardRef(({children:Q,href:fe,to:ue,disabled:ce=!1,startIcon:H,endIcon:ee,...se},ge)=>{const me=fe?"_blank":void 0,he=fe?"noreferrer noopener":void 0;return(0,r.jsxs)(V,{as:ue&&!ce?L.OL:"a",target:me,rel:he,to:ce?void 0:ue,href:ce?"#":fe,disabled:ce,ref:ge,...se,children:[H&&(0,r.jsx)(K,{as:"span","aria-hidden":!0,paddingRight:2,children:H}),(0,r.jsx)(b.Z,{children:Q}),ee&&!fe&&(0,r.jsx)(K,{as:"span","aria-hidden":!0,paddingLeft:2,children:ee}),fe&&(0,r.jsx)(K,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,r.jsx)(y.Z,{})})]})})},14291:(O,U,a)=>{"use strict";a.d(U,{Q:()=>L});var r=a(74081),p=a(14094),y=a(35632);const L=({options:E,...b})=>(0,r.jsx)(y.NU,{...b,children:E.map(Z=>"children"in Z?(0,r.jsx)(y.Ab,{label:Z.label,values:Z.children.map(V=>V.value.toString()),children:Z.children.map(V=>(0,r.jsx)($,{value:V.value,children:V.label},V.value))},Z.label):(0,r.jsx)(y.ML,{value:Z.value,children:Z.label},Z.value))}),$=(0,p.default)(y.ML)`
  padding-left: ${({theme:E})=>E.spaces[7]};
`},19035:(O,U,a)=>{"use strict";a.r(U),a.d(U,{A:()=>Je,C:()=>Xt,a:()=>Xe,g:()=>m,i:()=>eu,u:()=>ze});var r=a(74081),p=a(27279),y=a(52185),L=a(40810),$=a(57074),E=a(14291),b=a(85898),Z=a(78565),V=a(42615),K=a(90529),re=a(49899),Q=a(96448),fe=a(33774),ue=a(23851),ce=a(12826),H=a(87161),ee=a(67393),se=a(33832),ge=a(52870),me=a(33699),he=a(97069),Ee=a(31078),et=a(19098),St=a(58995),pe=a(51413),it=a(37386),hs=a(35090),ys=a(84814),bs=a(17992),vs=a(92602),xs=a(92856),Nn=a(2667),Cs=a(62750),Ts=a(71943),js=a(930),Ms=a(87549),Rs=a(81565),$s=a(3785),As=a(1296),I=a(94486),Ss=a(364),te=a(61020),On=a(47533),Ze=a(51447),k=a(14094);const De=(e,t,n)=>{if(!t)return;if(typeof t=="object")return(Array.isArray(t)?t:[t?.desktop,t?.tablet,t?.mobile]).reduce((d,u,g)=>{if(u)switch(g){case 0:return`${d}${e}: ${n.spaces[u]};`;case 1:return`${d}${n.mediaQueries.tablet}{${e}: ${n.spaces[u]};}`;case 2:return`${d}${n.mediaQueries.mobile}{${e}: ${n.spaces[u]};}`;default:return d}return d},"");const s=n.spaces[t]??t;return`${e}: ${s};`};function Zs(e,t){return typeof e=="string"?!1:t in e}function bu(e){return e&&typeof e=="object"&&!Array.isArray(e)}function ye(e,t,n){return t&&Zs(e,t)?e[t]:n}const Ls={color:!0,cursor:!0,height:!0,width:!0},ne=k.default.div.withConfig({shouldForwardProp:(e,t)=>!Ls[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>ye(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>ye(e.colors,t,t)};
  color: ${({theme:e,color:t})=>ye(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>De("padding",t,e)}
  ${({theme:e,paddingTop:t})=>De("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>De("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>De("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>De("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>De("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>De("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>De("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>De("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:n})=>t?e.borderRadius:n};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>ye(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:n,borderWidth:s})=>{if(t&&!n&&typeof s>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>ye(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>ye(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>ye(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>ye(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>ye(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>ye(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>ye(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>ye(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>ye(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>ye(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>ye(t.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:t})=>ye(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`,Ns=(0,k.default)(ne)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:t})=>De("gap",t,e)}
`,Os=e=>{const{gap:t="0",gridCols:n=12,...s}=e;return(0,r.jsx)(Ns,{gap:t,gridCols:n,...s})},Es=`${232/16}rem`,Fs=(0,k.default)(Os)`
  width: ${Es};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,Is=({ariaLabel:e,...t})=>(0,r.jsx)(Fs,{"aria-label":e,as:"nav",...t});var bt=a(89577);const Ps={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"},Ds=p["useId".toString()]||(()=>{});let ws=0;const tt=e=>{const[t,n]=(0,p.useState)(Ds());return(0,p.useLayoutEffect)(()=>{e||n(s=>s??String(ws++))},[e]),e?.toString()??(t||"")},Bs=e=>{const t=(0,p.useRef)();return(0,p.useEffect)(()=>{t.current=e}),t.current},ks=(0,k.default)(ne)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,zs=({unsetMargin:e=!0,...t})=>(0,r.jsx)(ks,{...t,background:"neutral150",as:"hr",unsetMargin:e}),Ws=e=>(0,r.jsx)("form",{...e,role:"search"});var Us=a(85305);function Vs(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function En(...e){return t=>e.forEach(n=>Vs(n,t))}function vu(...e){return React.useCallback(En(...e),e)}const xu=e=>({theme:t,size:n})=>t.sizes[e][n],Fn=(e="&")=>({theme:t,hasError:n=!1})=>(0,k.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${n?t.colors.danger600:t.colors.primary600};
      box-shadow: ${n?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,In=({theme:e})=>(0,k.css)`
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
`,Pn=(0,p.createContext)({id:"",required:!1}),Dn=()=>(0,p.useContext)(Pn),qs={direction:!0},xe=(0,k.default)(ne).withConfig({shouldForwardProp:(e,t)=>!qs[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>De("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`,wn={S:6.5,M:10.5},Gs=(0,p.forwardRef)(({endAction:e,startAction:t,disabled:n=!1,onChange:s,size:o="M",...l},d)=>{const{id:u,error:g,hint:c,name:f,required:h}=Dn();let x;g?x=`${u}-error`:c&&(x=`${u}-hint`);const C=Boolean(g),v=A=>{!n&&s&&s(A)};return(0,r.jsxs)(Zt,{justifyContent:"space-between",hasError:C,disabled:n,children:[t?(0,r.jsx)(ne,{paddingLeft:3,paddingRight:2,children:t}):null,(0,r.jsx)(Hs,{id:u,name:f,ref:d,"aria-describedby":x,"aria-invalid":C,"aria-disabled":n,disabled:n,"data-disabled":n?"":void 0,hasLeftAction:Boolean(t),hasRightAction:Boolean(e),onChange:v,"aria-required":h,$size:o,...l}),e?(0,r.jsx)(ne,{paddingLeft:2,paddingRight:3,children:e}):null]})}),Hs=k.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${wn[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:t})=>t?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:t})=>t?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${wn[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,Zt=(0,k.default)(xe)`
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${Fn()}

  ${({theme:e,disabled:t})=>t?(0,k.css)`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`,vt=k.default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Ys=(0,k.default)(xe)`
  font-size: 1.6rem;
  padding: 0;
`,Ks=(0,p.forwardRef)(({label:e,children:t,...n},s)=>(0,r.jsxs)(Ys,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...n,as:"button",ref:s,children:[(0,r.jsx)(vt,{as:"span",children:e}),(0,p.cloneElement)(t,{"aria-hidden":!0,focusable:!1})]})),Qs=(0,p.forwardRef)(({children:e,name:t,error:n,hint:s,id:o,required:l=!1,...d},u)=>{const g=tt(o),c=(0,p.useMemo)(()=>({name:t,id:g,error:n,hint:s,required:l}),[n,g,s,t,l]);return(0,r.jsx)(ne,{ref:u,...d,children:(0,r.jsx)(Pn.Provider,{value:c,children:e})})}),Xs="[@strapi/design-system]:",Js=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${Xs} once requires a function parameter`);return(...s)=>{n||(t(...s),n=!0)}},Bn="alpha",kn="beta",zn="delta",Wn="epsilon",Lt="omega",Un="pi",Vn="sigma",Cu=[Bn,kn,zn,Wn,Lt,Un,Vn],_s=({ellipsis:e=!1})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,ea=({variant:e=Lt,theme:t})=>{switch(e){case Bn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case kn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case zn:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case Wn:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case Lt:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case Un:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case Vn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},ta={fontSize:!0,fontWeight:!0},ae=k.default.span.withConfig({shouldForwardProp:(e,t)=>!ta[e]&&t(e)})`
  ${ea}
  ${_s}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>ye(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>ye(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>ye(e.lineHeights,t,t)};
  color: ${({theme:e,textColor:t})=>e.colors[t||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`,na=Js(console.warn),ra=(0,p.forwardRef)(({children:e,action:t,required:n,...s},o)=>{const{id:l,required:d}=Dn(),u=d||n;return n!==void 0&&na('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,r.jsxs)(sa,{ref:o,variant:"pi",textColor:"neutral800",htmlFor:l,fontWeight:"bold",as:"label",...s,children:[e,u&&(0,r.jsx)(aa,{textColor:"danger600",children:"*"}),t&&(0,r.jsx)(oa,{marginLeft:1,children:t})]})}),sa=(0,k.default)(ae)`
  display: flex;
  align-items: center;
`,aa=(0,k.default)(ae)`
  line-height: 0;
`,oa=(0,k.default)(xe)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,ia=(0,k.default)(Us.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,qn=(0,k.default)(bt.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,la=k.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${qn} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${Zt} {
    border: 1px solid transparent;
  }

  ${Fn(Zt)}
`,da=(0,p.forwardRef)(({name:e,size:t="M",children:n,value:s="",onClear:o,clearLabel:l,...d},u)=>{const g=(0,p.useRef)(null),c=s.length>0,f=x=>{o(x),g.current.focus()},h=En(u,g);return(0,r.jsx)(la,{children:(0,r.jsxs)(Qs,{name:e,children:[(0,r.jsx)(vt,{children:(0,r.jsx)(ra,{children:n})}),(0,r.jsx)(Gs,{ref:h,value:s,startAction:(0,r.jsx)(qn,{"aria-hidden":!0}),size:t,endAction:c?(0,r.jsx)(Ks,{label:l,onClick:f,children:(0,r.jsx)(ia,{})}):void 0,...d})]})})}),ua=e=>{const[t,n]=(0,p.useState)(!1),s=(0,p.useRef)(null),o=()=>{typeof s.current=="number"&&(clearTimeout(s.current),s.current=null)};return(0,p.useEffect)(()=>()=>{o()},[]),{visible:t,onFocus:()=>{n(!0)},onBlur:()=>{n(!1)},onMouseEnter:()=>{s.current=setTimeout(()=>{n(!0)},e)},onMouseLeave:()=>{o(),n(!1)}}},qe=8,ca=(e,t)=>{const n=(e.width-t.width)/2,s=t.left-n,o=t.top+t.height+qe+window.pageYOffset;return{left:s,top:o}},pa=(e,t)=>{const n=(e.height-t.height)/2,s=t.left+t.width+qe,o=t.top-n+window.pageYOffset;return{left:s,top:o}},ma=(e,t)=>{const n=(e.height-t.height)/2,s=t.left-e.width-qe,o=t.top-n+window.pageYOffset;return{left:s,top:o}},fa=(e,t)=>{const n=(e.width-t.width)/2;let s=t.left-n,o=t.top-e.height-qe+window.pageYOffset;const l=window.innerWidth-t.right;return t.left+e.width-l>window.innerWidth?(s=t.left-e.width-qe,o=t.top+window.scrollY-t.height/2):s<0?(s=t.width+t.left+qe,o=t.top+window.scrollY-e.height/2+qe):o<0&&s>0&&(o=t.top+t.height+qe),{left:s,top:o}},ga=(e,t,n)=>{const s=e.getBoundingClientRect(),o=t.getBoundingClientRect();return n==="bottom"?ca(s,o):n==="right"?pa(s,o):n==="left"?ma(s,o):fa(s,o)},ha=(e,t)=>{const n=(0,p.useRef)(null),s=(0,p.useRef)(null);return(0,p.useLayoutEffect)(()=>{if(e){const o=n.current,l=s.current;if(o&&l){const d=ga(o,l,t);o.style.left=`${d.left}px`,o.style.top=`${d.top}px`}}},[t,e]),{tooltipWrapperRef:n,toggleSourceRef:s}};var ya=a(69530);const Gn=p.forwardRef(({container:e=globalThis?.document?.body,...t},n)=>e?(0,ya.createPortal)((0,r.jsx)(ne,{ref:n,...t}),e):null);Gn.displayName="Portal";const ba=(0,k.default)(ne)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:e})=>e?"revert":"none"};
`,va=({children:e,label:t,description:n,delay:s=500,position:o="top",id:l,...d})=>{const u=tt(l),g=tt(),{visible:c,...f}=ua(s),{tooltipWrapperRef:h,toggleSourceRef:x}=ha(c,o),C=p.cloneElement(e,{tabIndex:0,"aria-labelledby":t?u:void 0,"aria-describedby":n?u:void 0,...f});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Gn,{children:(0,r.jsxs)(ba,{id:u,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:h,visible:c,position:"absolute",...d,children:[c&&(0,r.jsx)(vt,{id:g,children:n}),(0,r.jsx)(ae,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:t||n})]})}),(0,r.jsx)("span",{ref:x,children:C})]})},xa=(0,k.default)(xe)`
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

  ${In}
`,Nt=p.forwardRef(({disabled:e,children:t,background:n="neutral0",...s},o)=>(0,r.jsx)(xa,{ref:o,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:n,borderColor:"neutral200",cursor:"pointer",...s,children:t}));Nt.displayName="BaseButton";const Ca="tertiary",lt="secondary",Ta=["S","M","L"],ja=[Ca,lt],Ma=p.forwardRef(({label:e,background:t,borderWidth:n,noBorder:s=!1,children:o,icon:l,disabled:d=!1,onClick:u,size:g=Ta[0],"aria-label":c,variant:f=ja[0],...h},x)=>{const C=A=>{!d&&u&&u(A)},v=(0,r.jsxs)(Hn,{"aria-disabled":d,background:d?"neutral150":t,borderWidth:s?0:n,justifyContent:"center",...h,ref:x,size:g,onClick:C,variant:f,children:[(0,r.jsx)(vt,{as:"span",children:e??c}),p.cloneElement(l||o,{"aria-hidden":!0,focusable:!1})]});return e?(0,r.jsx)(va,{label:e,children:v}):v}),Hn=(0,k.default)(Nt)`
  background-color: ${({theme:e,variant:t})=>{if(t===lt)return e.colors.primary100}};
  border-color: ${({theme:e,variant:t})=>t===lt?e.colors.primary200:e.colors.neutral200};
  height: ${({theme:e,size:t})=>e.sizes.button[t]};
  width: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    g,
    path {
      fill: ${({theme:e,variant:t})=>t===lt?e.colors.primary500:e.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:e,variant:t})=>t===lt?e.colors.primary600:e.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,Tu=(0,k.default)(xe)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Hn} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,Yn=(0,k.default)(zs)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,Ra=({as:e="h2",label:t,searchLabel:n="",searchable:s=!1,onChange:o=()=>{},value:l="",onClear:d=()=>{},onSubmit:u=()=>{},id:g})=>{const[c,f]=(0,p.useState)(!1),h=Bs(c),x=tt(g),C=(0,p.useRef)(void 0),v=(0,p.useRef)(void 0);(0,p.useEffect)(()=>{c&&C.current&&C.current.focus(),h&&!c&&v.current&&v.current.focus()},[c,h]);const A=()=>{f(N=>!N)},B=N=>{d(N),C.current.focus()},R=N=>{N.relatedTarget?.id!==x&&f(!1)},F=N=>{N.key===Ps.ESCAPE&&f(!1)};return c?(0,r.jsxs)(ne,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,r.jsx)(Ws,{children:(0,r.jsx)(da,{name:"searchbar",value:l,onChange:o,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:F,ref:C,onBlur:R,onClear:B,onSubmit:u,clearLabel:"Clear",size:"S",children:n})}),(0,r.jsx)(ne,{paddingLeft:2,paddingTop:4,children:(0,r.jsx)(Yn,{})})]}):(0,r.jsxs)(ne,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,r.jsxs)(xe,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,r.jsx)(ae,{variant:"beta",as:e,children:t}),s&&(0,r.jsx)(Ma,{ref:v,onClick:A,label:n,icon:(0,r.jsx)(bt.Z,{})})]}),(0,r.jsx)(ne,{paddingTop:4,children:(0,r.jsx)(Yn,{})})]})},$a=({children:e,spacing:t=2,horizontal:n=!1,...s})=>(0,r.jsx)(ne,{paddingTop:2,paddingBottom:4,children:(0,r.jsx)(xe,{as:"ol",gap:t,direction:n?"row":"column",alignItems:n?"center":"stretch",...s,children:p.Children.map(e,(o,l)=>(0,r.jsx)("li",{children:o},l))})});var Ot=a(3494);const Kn=(0,k.default)(xe)`
  border: none;
  padding: 0;
  background: transparent;
`,Aa=k.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Sa=({collapsable:e=!1,label:t,onClick:n=()=>{},ariaExpanded:s,ariaControls:o})=>e?(0,r.jsxs)(Kn,{as:"button",onClick:n,"aria-expanded":s,"aria-controls":o,textAlign:"left",children:[(0,r.jsx)(ne,{paddingRight:1,children:(0,r.jsx)(ae,{variant:"sigma",textColor:"neutral600",children:t})}),e&&(0,r.jsx)(Aa,{rotated:s,children:(0,r.jsx)(Ot.Z,{"aria-hidden":!0})})]}):(0,r.jsx)(Kn,{children:(0,r.jsx)(ne,{paddingRight:1,children:(0,r.jsx)(ae,{variant:"sigma",textColor:"neutral600",children:t})})}),Za=(0,k.default)(xe)`
  border-radius: ${({theme:e,size:t})=>t==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:t})=>t.sizes.badge[e]};
`,La=({active:e=!1,size:t="M",textColor:n="neutral600",backgroundColor:s="neutral150",children:o,minWidth:l=5,...d})=>{const u=t==="S"?1:2;return(0,r.jsx)(Za,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:l,paddingLeft:u,paddingRight:u,background:e?"primary200":s,size:t,...d,children:(0,r.jsx)(ae,{variant:"sigma",textColor:e?"primary600":n,children:o})})},Na=(0,k.default)(ne)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,Oa=({collapsable:e=!1,label:t,badgeLabel:n,children:s,id:o})=>{const[l,d]=(0,p.useState)(!0),u=tt(o),g=()=>{d(c=>!c)};return(0,r.jsxs)(xe,{direction:"column",alignItems:"stretch",gap:1,children:[(0,r.jsx)(Na,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,r.jsxs)(ne,{position:"relative",paddingRight:n?6:0,children:[(0,r.jsx)(Sa,{onClick:g,ariaExpanded:l,ariaControls:u,collapsable:e,label:t}),n&&(0,r.jsx)(La,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:n})]})}),(!e||l)&&(0,r.jsx)("ol",{id:u,children:p.Children.map(s,(c,f)=>(0,r.jsx)("li",{children:c},f))})]})},Ea=(0,k.default)(ne)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,Fa=k.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,Ia=k.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Pa=({label:e,children:t,id:n})=>{const[s,o]=(0,p.useState)(!0),l=tt(n),d=()=>{o(u=>!u)};return(0,r.jsxs)(ne,{children:[(0,r.jsx)(Ea,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,r.jsx)(xe,{justifyContent:"space-between",children:(0,r.jsxs)(Fa,{onClick:d,"aria-expanded":s,"aria-controls":l,children:[(0,r.jsx)(Ia,{rotated:s,children:(0,r.jsx)(Ot.Z,{"aria-hidden":!0})}),(0,r.jsx)(ne,{paddingLeft:2,children:(0,r.jsx)(ae,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),s&&(0,r.jsx)("ul",{id:l,children:p.Children.map(t,(u,g)=>(0,r.jsx)("li",{children:u},g))})]})};var Da=a(1939);const Et=p.forwardRef(({href:e,rel:t="noreferrer noopener",target:n="_self",disabled:s=!1,isExternal:o=!1,...l},d)=>(0,r.jsx)(ne,{as:"a",ref:d,target:o?"_blank":n,rel:o?t:void 0,href:s?"#":e,"aria-disabled":s,cursor:"pointer",...l}));Et.displayName="BaseLink";const wa=(0,k.default)(ne)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${ae} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,Qn=(0,k.default)(Da.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  }
`,Ba=k.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,Xn=p.forwardRef(({children:e,icon:t=null,withBullet:n=!1,as:s=Et,isSubSectionChild:o=!1,...l},d)=>(0,r.jsxs)(wa,{as:s,icon:t,background:"neutral100",paddingLeft:o?9:7,paddingBottom:2,paddingTop:2,ref:d,...l,children:[(0,r.jsxs)(xe,{children:[t?(0,r.jsx)(Ba,{children:t}):(0,r.jsx)(Qn,{}),(0,r.jsx)(ne,{paddingLeft:2,children:(0,r.jsx)(ae,{as:"span",children:e})})]}),n&&(0,r.jsx)(ne,{as:xe,paddingRight:4,children:(0,r.jsx)(Qn,{$active:!0})})]})),Jn=()=>(0,r.jsx)(ne,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,r.jsx)(ae,{variant:"pi",textColor:"neutral500",children:"/"})});Jn.displayName="Divider";const ka=(0,k.default)(xe)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,_n=({label:e,children:t,...n})=>{const s=p.Children.toArray(t);return(0,r.jsx)(ne,{"aria-label":e,...n,children:(0,r.jsx)(ka,{as:"ol",children:p.Children.map(s,(o,l)=>{const d=s.length>1&&l+1<s.length;return(0,r.jsxs)(xe,{inline:!0,as:"li",children:[o,d&&(0,r.jsx)(Jn,{})]})})})})};_n.displayName="Breadcrumbs";const er=({children:e,isCurrent:t=!1,...n})=>(0,r.jsx)(ne,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,r.jsx)(ae,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"normal","aria-current":t,...n,children:e})});er.displayName="Crumb";var we=a(17246),za=a(61043),Wa=a(34120);const Ua=(0,k.default)(Et)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${In};
`,tr=p.forwardRef(({children:e,href:t,disabled:n=!1,startIcon:s,endIcon:o,isExternal:l=!0,...d},u)=>(0,r.jsxs)(Ua,{ref:u,href:t,disabled:n,isExternal:l,...d,children:[s,(0,r.jsx)(ae,{textColor:n?"neutral600":"primary600",children:e}),o,t&&!o&&l&&(0,r.jsx)(Wa.Z,{})]}));tr.displayName="Link";var Va=a(30085);const Ft="success-light",It="danger-light",xt="default",dt="tertiary",ut="secondary",nr="danger",rr="success",Pt="ghost",Dt=[Ft,It],qa=[xt,dt,ut,nr,rr,Pt,...Dt],Ga=["S","M","L"],Le=e=>e===Ft||e===It?`${e.substring(0,e.lastIndexOf("-"))}`:e===dt?"neutral":e===xt||e===ut||qa.every(t=>t!==e)?"primary":`${e}`,sr=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${ae} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,Ha=({theme:e,variant:t})=>[...Dt,ut].includes(t)?`
      background-color: ${e.colors.neutral0};
    `:t===dt?`
      background-color: ${e.colors.neutral100};
    `:t===Pt?`
      background-color: ${e.colors.neutral100};
    `:t===xt?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${Le(t)}500`]};
    background: ${e.colors[`${Le(t)}500`]};
  `,Ya=({theme:e,variant:t})=>[...Dt,ut].includes(t)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Le(t)}600`]};
      ${ae} {
        color: ${e.colors[`${Le(t)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${Le(t)}600`]};
        }
      }
    `:t===dt?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${Le(t)}600`]};
    background: ${e.colors[`${Le(t)}600`]};
  `,Ka=({theme:e,variant:t})=>{switch(t){case It:case Ft:case ut:return`
          border: 1px solid ${e.colors[`${Le(t)}200`]};
          background: ${e.colors[`${Le(t)}100`]};
          ${ae} {
            color: ${e.colors[`${Le(t)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${Le(t)}700`]};
            }
          }
        `;case dt:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${ae} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case Pt:return`
        border: 1px solid transparent;
        background: transparent;

        ${ae} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case rr:case nr:return`
          border: 1px solid ${e.colors[`${Le(t)}600`]};
          background: ${e.colors[`${Le(t)}600`]};
          ${ae} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},Qa=(0,k.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Xa=(0,k.default)(Va.Z)`
  animation: ${Qa} 2s infinite linear;
  will-change: transform;
`,Ja=(0,k.default)(Nt)`
  height: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${sr}

    &:active {
      ${sr}
    }
  }

  &:hover {
    ${Ha}
  }

  &:active {
    ${Ya}
  }

  ${Ka}
`,ar=p.forwardRef(({variant:e=xt,startIcon:t,endIcon:n,disabled:s=!1,children:o,onClick:l,size:d=Ga[0],loading:u=!1,fullWidth:g=!1,...c},f)=>{const h=s||u,x=C=>{!h&&l&&l(C)};return(0,r.jsxs)(Ja,{ref:f,"aria-disabled":h,disabled:h,size:d,variant:e,onClick:x,fullWidth:g,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:g,justifyContent:g?"center":void 0,paddingLeft:4,paddingRight:4,width:g?"100%":void 0,...c,children:[(t||u)&&(0,r.jsx)(ne,{"aria-hidden":!0,children:u?(0,r.jsx)(Xa,{}):t}),(0,r.jsx)(ae,{variant:d==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:o}),n&&(0,r.jsx)(xe,{"aria-hidden":!0,children:n})]})});ar.displayName="Button";const _a=we.fC,eo=(0,p.forwardRef)(({size:e,endIcon:t=(0,r.jsx)(Ot.Z,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...n},s)=>(0,r.jsx)(we.xz,{asChild:!0,children:(0,r.jsx)(ar,{ref:s,type:"button",variant:"ghost",endIcon:t,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...n})})),to=(0,p.forwardRef)(({children:e,intersectionId:t,popoverPlacement:n="bottom-start",...s},o)=>{const[l,d]=n.split("-");return(0,r.jsx)(we.Uv,{children:(0,r.jsx)(we.VY,{align:d,side:l,loop:!0,asChild:!0,children:(0,r.jsxs)(or,{ref:o,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...s,children:[e,(0,r.jsx)(ne,{id:t,width:"100%",height:"1px"})]})})})}),or=(0,k.default)(xe)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,no=({onSelect:e,disabled:t=!1,...n})=>(0,r.jsx)(we.ck,{asChild:!0,onSelect:e,disabled:t,children:n.isLink||n.isExternal?(0,r.jsx)(ro,{color:"neutral800",...n,isExternal:n.isExternal??!1,children:(0,r.jsx)(ae,{children:n.children})}):(0,r.jsx)(lr,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...n,children:(0,r.jsx)(ae,{children:n.children})})}),ir=({theme:e})=>(0,k.css)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${ae} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${ae} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,lr=(0,k.default)(xe)`
  ${ir}
`,ro=(0,k.default)(tr)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>ye(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${ir}
`,ju=(0,p.forwardRef)((e,t)=>(0,r.jsx)(we.__,{asChild:!0,children:(0,r.jsx)(so,{ref:t,variant:"sigma",textColor:"neutral600",...e})})),so=(0,k.default)(ae)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,Mu=we.Tr,Ru=(0,p.forwardRef)(({disabled:e=!1,...t},n)=>(0,r.jsx)(we.fF,{asChild:!0,disabled:e,children:(0,r.jsxs)(ao,{ref:n,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[(0,r.jsx)(ae,{children:t.children}),(0,r.jsx)(oo,{height:12,width:12})]})})),ao=(0,k.default)(lr)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,oo=(0,k.default)(za.Z)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,$u=(0,p.forwardRef)((e,t)=>(0,r.jsx)(we.Uv,{children:(0,r.jsx)(we.tu,{sideOffset:8,asChild:!0,children:(0,r.jsx)(or,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),io=_a,lo=eo,uo=to,co=no,Au=null,Su=null,Zu=null,Lu=null;var po=a(43406),mo=a(78659),fo=a(43808),go=a(75894),dr=a(98447),ho=a(13931),yo=a(98481),bo=a(35609),vo=a(39622),xo=a(87203),Co=a(9964),To=a(24630),jo=a(85021),Mo=a(95908),Ro=a(4551),$o=a(12048),Ao=a(46873),So=a(34902),Zo=a(87343),Lo=a(40710),No=a(82943),Oo=a(62692),Eo=a(48401),Fo=a(38972),Io=a(18602),Po=a(31702),Do=a(28616),wo=a(83642),Bo=a(44431),ko=a(27712),zo=a(88225),Wo=a(70755),Uo=a(92297),Vo=a(62160),qo=a(55798),Go=a(7760),Ho=a(97338),Yo=a(16694),Ko=a(94294),Qo=a(9597),Xo=a(88898),Jo=a(13150),_o=a(26981),ei=a(84207),ti=a(15764),ni=a(62117),ri=a(64302),si=a(4522),ai=a(22905),oi=a(62061),ii=a(52923),li=a(31524),di=a(25242),ui=a(85758),ci=a(9947),pi=a(8930),mi=a(83586),fi=a(17012),gi=a(30676),hi=a(85555),yi=a(96436),bi=a(34027),vi=a(46301),xi=a(62526),Ci=a(55103),Ti=a(3760),ji=a(71217),Mi=a(14063),Ri=a(2312),ur=a(92056),cr=a(12497),pr=a(38849),$i=a(3071),Ai=a(20645),Si=a(24233),Zi=a(57600),Li=a(13907),Ni=a(9855),mr=a(66390),fr=a(16760),gr=a(70414),Oi=a(9874),Ei=a(75759),Fi=a(59620),Ii=a(9663),Pi=a(71019),Di=a(86739),wi=a(36916),Bi=a(3440),ki=a(75327),zi=a(99842),Ge=a(25659),Wi=a(71928),Ui=a(41720),Vi=a(24780),qi=a(56023),Gi=a(74645),Hi=a(51045),Yi=a(94936),Ki=a(65638),Qi=a(77335),Xi=a(1945),Ji=a(4284),_i=a(28073),el=a(30142),tl=a(51367),nl=a(27920),rl=a(3129),sl=a(43498),al=a(50250),ol=a(74727),il=a(36602),ll=a(96911),dl=a(29460),ul=a(27336),cl=a(79038),pl=a(3297),ml=a(27001),fl=a(87856),gl=a(83373),hl=a(88224),yl=a(119),bl=a(68129),vl=a(76946),xl=a(41433),ct=a(10751),Cl=a(45949),Tl=a(66091),hr=a(10477),jl=a(80792),Ct=a(19156),Ml=a(17014),Rl=a(70764),yr=a(86980),wt=a(17786),br=a(4803),$l=a(40243),Al=a(14830),Sl=a(74003),Zl=a(15134),vr=a(9864),Ll=a(71226),Nl=a(28580),Ol=a(64417),El=a(18076),ke=a(51943),M=a(50766),Bt=a(6078),z=a(98934),Fl=a(63799),xr=a(43433),Il=a(84921),i=a(70627),Qe=a(59461),Pl=a(10131),Cr=a(79146),Dl=a(29206),kt=a(6699),Tr=a(88702),S=a(47853),wl=a(12665),Bl=a(81465),zt=a(51527),kl=a(61815),zl=a(49204),jr=a(74919),Wl=a(8243);const m=e=>`${M.p}.${e}`,Mr=(0,p.createContext)(),ze=()=>(0,p.useContext)(Mr),Rr=(0,p.createContext)(),Xe=()=>(0,p.useContext)(Rr),Ul=()=>{const{components:e,componentsGroupedByCategory:t,contentTypes:n,isInDevelopmentMode:s,sortedContentTypesList:o,modifiedData:l,initialData:d}=ze(),u=(0,I.lm)(),{trackUsage:g}=(0,I.rS)(),[c,f]=(0,p.useState)(""),{onOpenModalCreateSchema:h,onOpenModalEditCategory:x}=Xe(),{locale:C}=(0,te.Z)(),{startsWith:v}=(0,I.L0)(C,{sensitivity:"base"}),A=(0,I.Xe)(C,{sensitivity:"base"}),B=!Object.keys(n).some(q=>n[q].isTemporary===!0)&&!Object.keys(e).some(q=>e[q].isTemporary===!0)&&Bt(l,d),R=()=>{B?(g("willCreateContentType"),h({modalType:"contentType",kind:"collectionType",actionType:"create",forTarget:"contentType"})):W()},F=()=>{B?(g("willCreateSingleType"),h({modalType:"contentType",kind:"singleType",actionType:"create",forTarget:"contentType"})):W()},N=()=>{B?(g("willCreateComponent"),h({modalType:"component",kind:null,actionType:"create",forTarget:"component"})):W()},W=()=>{u({type:"info",message:{id:m("notification.info.creating.notSaved"),defaultMessage:"Please save your work before creating a new collection type or component"}})},X=Object.entries(t).map(([q,Te])=>({name:q,title:q,isEditable:s,onClickEdit(J,ie){J.stopPropagation(),B?x(ie.name):W()},links:Te.map(J=>({name:J.uid,to:`/plugins/${M.p}/component-categories/${q}/${J.uid}`,title:J.schema.displayName})).sort((J,ie)=>A.compare(J.title,ie.title))})).sort((q,Te)=>A.compare(q.title,Te.title)),de=o.filter(q=>q.visible);return{menu:[{name:"models",title:{id:`${m("menu.section.models.name")}`,defaultMessage:"Collection Types"},customLink:s&&{id:`${m("button.model.create")}`,defaultMessage:"Create new collection type",onClick:R},links:de.filter(q=>q.kind==="collectionType")},{name:"singleTypes",title:{id:`${m("menu.section.single-types.name")}`,defaultMessage:"Single Types"},customLink:s&&{id:`${m("button.single-types.create")}`,defaultMessage:"Create new single type",onClick:F},links:de.filter(q=>q.kind==="singleType")},{name:"components",title:{id:`${m("menu.section.components.name")}`,defaultMessage:"Components"},customLink:s&&{id:`${m("button.component.create")}`,defaultMessage:"Create a new component",onClick:N},links:X}].map(q=>q.links.some(J=>Array.isArray(J.links))?{...q,links:q.links.map(J=>{const ie=J.links.filter(le=>v(le.title,c));return ie.length===0?null:{...J,links:ie.sort((le,ve)=>A.compare(le.title,ve.title))}}).filter(Boolean)}:{...q,links:q.links.filter(J=>v(J.title,c)).sort((J,ie)=>A.compare(J.title,ie.title))}),searchValue:c,onSearchChange:f}},Vl=()=>{const{menu:e,searchValue:t,onSearchChange:n}=Ul(),{formatMessage:s}=(0,te.Z)();return(0,r.jsxs)(Is,{ariaLabel:s({id:`${m("plugin.name")}`,defaultMessage:"Content-Types Builder"}),children:[(0,r.jsx)(Ra,{searchable:!0,value:t,onClear:()=>n(""),onChange:o=>n(o.target.value),label:s({id:`${m("plugin.name")}`,defaultMessage:"Content-Types Builder"}),searchLabel:s({id:"global.search",defaultMessage:"Search"})}),(0,r.jsx)($a,{children:e.map(o=>(0,r.jsxs)(p.Fragment,{children:[(0,r.jsx)(Oa,{label:s({id:o.title.id,defaultMessage:o.title.defaultMessage}),collapsable:!0,badgeLabel:o.links.length.toString(),children:o.links.map(l=>l.links?(0,r.jsx)(Pa,{label:ke(l.title),children:l.links.map(d=>(0,r.jsx)(Xn,{as:On.OL,to:d.to,active:d.active,isSubSectionChild:!0,children:ke(s({id:d.name,defaultMessage:d.title}))},d.name))},l.name):(0,r.jsx)(Xn,{as:On.OL,to:l.to,active:l.active,children:ke(s({id:l.name,defaultMessage:l.title}))},l.name))}),o.customLink&&(0,r.jsx)(y.x,{paddingLeft:7,children:(0,r.jsx)(L.A,{onClick:o.customLink.onClick,startIcon:(0,r.jsx)($.J,{as:Ge.Z,width:(0,I.Q1)(8),height:(0,I.Q1)(8)}),marginTop:2,children:s({id:o.customLink.id,defaultMessage:o.customLink.defaultMessage})})})]},o.name))})]})},$r=e=>e.kind==="collectionType"&&(e.restrictRelationsTo===null||Array.isArray(e.restrictRelationsTo)&&e.restrictRelationsTo.length>0),Wt=(e,t)=>e.find(({name:n})=>n===t),ql=[{label:"All",children:[{label:"images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)",value:"images"},{label:"videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)",value:"videos"},{label:"audios (MP3, WAV, OGG)",value:"audios"},{label:"files (CSV, ZIP, PDF, Excel, JSON, ...)",value:"files"}]}],Ut=({intlLabel:e,name:t,onChange:n,value:s})=>{const{formatMessage:o}=(0,te.Z)(),l=s===null||s.length===0?o({id:"global.none",defaultMessage:"None"}):[...s].sort().map(u=>ke(u)).join(", "),d=e.id?o({id:e.id,defaultMessage:e.defaultMessage}):t;return(0,r.jsx)(E.Q,{id:"select1",label:d,customizeContent:()=>l,onChange:u=>{u.length>0?n({target:{name:t,value:u,type:"allowed-types-select"}}):n({target:{name:t,value:null,type:"allowed-types-select"}})},options:ql,value:s||[]})};Ut.defaultProps={value:null},Ut.propTypes={intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,name:i.string.isRequired,onChange:i.func.isRequired,value:i.oneOfType([i.object,i.array])};const Ar={biginteger:ct.Z,blocks:Cl.Z,boolean:Tl.Z,collectionType:hr.Z,component:jl.Z,contentType:hr.Z,date:Ct.Z,datetime:Ct.Z,decimal:ct.Z,dynamiczone:Ml.Z,email:Rl.Z,enum:yr.Z,enumeration:yr.Z,file:wt.Z,files:wt.Z,float:ct.Z,integer:ct.Z,json:br.Z,JSON:br.Z,media:wt.Z,number:ct.Z,password:$l.Z,relation:Al.Z,richtext:Sl.Z,singleType:Zl.Z,string:vr.Z,text:vr.Z,time:Ct.Z,timestamp:Ct.Z,uid:Ll.Z},Gl=(0,k.default)(y.x)`
  svg {
    height: 100%;
    width: 100%;
  }
`,Je=({type:e,customField:t,...n})=>{const s=(0,I.mZ)();let o=Ar[e];if(t){const{icon:l}=s.get(t);l&&(o=l)}return Ar[e]?(0,r.jsx)(Gl,{height:(0,I.Q1)(24),width:(0,I.Q1)(32),shrink:0,...n,"aria-hidden":!0,children:(0,r.jsx)(y.x,{as:o})}):null};Je.defaultProps={customField:null},Je.propTypes={type:i.string.isRequired,customField:i.string};const Sr=(0,k.default)(y.x)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
    border: 1px solid ${({theme:e})=>e.colors.primary200};
  }
`,Hl=["blocks"],Yl=()=>(0,r.jsx)(b.k,{grow:1,justifyContent:"flex-end",children:(0,r.jsxs)(b.k,{gap:1,fontSizes:0,hasRadius:!0,background:"alternative100",padding:`${2/16}rem ${4/16}rem`,children:[(0,r.jsx)($.J,{width:`${10/16}rem`,height:`${10/16}rem`,as:Nl.Z,color:"alternative600"}),(0,r.jsx)(Z.Z,{textColor:"alternative600",variant:"sigma",children:"New"})]})}),Vt=({type:e})=>{const{formatMessage:t}=(0,te.Z)(),{onClickSelectField:n}=Xe(),s=()=>{n({attributeType:e,step:e==="component"?"1":null})};return(0,r.jsx)(Sr,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:s,children:(0,r.jsxs)(b.k,{children:[(0,r.jsx)(Je,{type:e}),(0,r.jsxs)(y.x,{paddingLeft:4,width:"100%",children:[(0,r.jsxs)(b.k,{justifyContent:"space-between",children:[(0,r.jsx)(Z.Z,{fontWeight:"bold",children:t({id:m(`attribute.${e}`),defaultMessage:e})}),Hl.includes(e)&&(0,r.jsx)(Yl,{})]}),(0,r.jsx)(b.k,{children:(0,r.jsx)(Z.Z,{variant:"pi",textColor:"neutral600",children:t({id:m(`attribute.${e}.description`),defaultMessage:"A type for modeling data"})})})]})]})})};Vt.defaultProps={type:"text"},Vt.propTypes={type:i.string};const Zr=({attributes:e})=>(0,r.jsx)(V.k,{tagName:"button",children:(0,r.jsx)(b.k,{direction:"column",alignItems:"stretch",gap:8,children:e.map((t,n)=>(0,r.jsx)(K.r,{gap:3,children:t.map(s=>(0,r.jsx)(re.P,{col:6,children:(0,r.jsx)(Vt,{type:s})},s))},n))})});Zr.propTypes={attributes:i.array.isRequired};const Lr=({customFieldUid:e,customField:t})=>{const{type:n,intlLabel:s,intlDescription:o}=t,{formatMessage:l}=(0,te.Z)(),{onClickSelectCustomField:d}=Xe(),u=()=>{d({attributeType:n,customFieldUid:e})};return(0,r.jsx)(Sr,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:u,children:(0,r.jsxs)(b.k,{children:[(0,r.jsx)(Je,{type:n,customField:e}),(0,r.jsxs)(y.x,{paddingLeft:4,children:[(0,r.jsx)(b.k,{children:(0,r.jsx)(Z.Z,{fontWeight:"bold",children:l(s)})}),(0,r.jsx)(b.k,{children:(0,r.jsx)(Z.Z,{variant:"pi",textColor:"neutral600",children:l(o)})})]})]})})};Lr.propTypes={customFieldUid:i.string.isRequired,customField:i.shape({type:i.string.isRequired,icon:i.func,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired}).isRequired,intlDescription:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired}).isRequired}).isRequired};const Kl=(0,k.default)(y.x)`
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${e.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Ql=()=>(0,r.jsx)(b.k,{wrap:"wrap",gap:4,children:[...Array(4)].map((e,t)=>(0,r.jsx)(Kl,{height:"138px",width:"375px",hasRadius:!0},`empty-card-${t}`))}),Xl=()=>{const{formatMessage:e}=(0,te.Z)();return(0,r.jsxs)(y.x,{position:"relative",children:[(0,r.jsx)(Ql,{}),(0,r.jsx)(y.x,{position:"absolute",top:6,width:"100%",children:(0,r.jsxs)(b.k,{alignItems:"center",justifyContent:"center",direction:"column",children:[(0,r.jsx)($.J,{as:Ol.Z,color:"",width:"160px",height:"88px"}),(0,r.jsx)(y.x,{paddingTop:6,paddingBottom:4,children:(0,r.jsxs)(y.x,{textAlign:"center",children:[(0,r.jsx)(Z.Z,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:m("modalForm.empty.heading"),defaultMessage:"Nothing in here yet."})}),(0,r.jsx)(y.x,{paddingTop:4,children:(0,r.jsx)(Z.Z,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:m("modalForm.empty.sub-heading"),defaultMessage:"Find what you are looking for through a wide range of extensions."})})})]})}),(0,r.jsx)(Q.Q,{to:`/marketplace?${Dl.stringify({categories:["Custom fields"]})}`,variant:"secondary",startIcon:(0,r.jsx)(Ge.Z,{}),children:e({id:m("modalForm.empty.button"),defaultMessage:"Add custom fields"})})]})})]})},Jl=()=>{const{formatMessage:e}=(0,te.Z)(),t=(0,I.mZ)(),n=Object.entries(t.getAll());if(!n.length)return(0,r.jsx)(Xl,{});const s=n.sort((o,l)=>o[1].name>l[1].name?1:-1);return(0,r.jsx)(V.k,{tagName:"button",children:(0,r.jsxs)(b.k,{direction:"column",alignItems:"stretch",gap:3,children:[(0,r.jsx)(K.r,{gap:3,children:s.map(([o,l])=>(0,r.jsx)(re.P,{col:6,children:(0,r.jsx)(Lr,{customFieldUid:o,customField:l},o)},o))}),(0,r.jsx)(fe.r,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",isExternal:!0,children:e({id:m("modalForm.tabs.custom.howToLink"),defaultMessage:"How to add custom fields"})})]})})},Nr=({attributes:e,forTarget:t,kind:n})=>{const{formatMessage:s}=(0,te.Z)(),o=m("modalForm.tabs.default"),l=m("modalForm.tabs.custom"),d=t.includes("component")?"component":n,u=m(`modalForm.sub-header.chooseAttribute.${d}`);return(0,r.jsx)(ue.f,{padding:7,children:(0,r.jsxs)(ce.v,{label:s({id:m("modalForm.tabs.label"),defaultMessage:"Default and Custom types tabs"}),id:"attribute-type-tabs",variant:"simple",children:[(0,r.jsxs)(b.k,{justifyContent:"space-between",children:[(0,r.jsx)(Z.Z,{variant:"beta",as:"h2",children:s({id:u,defaultMessage:"Select a field"})}),(0,r.jsxs)(H.m,{children:[(0,r.jsx)(H.O,{children:s({id:o,defaultMessage:"Default"})}),(0,r.jsx)(H.O,{children:s({id:l,defaultMessage:"Custom"})})]})]}),(0,r.jsx)(y.x,{paddingBottom:6,children:(0,r.jsx)(ee.i,{})}),(0,r.jsxs)(se.n,{children:[(0,r.jsx)(se.x,{children:(0,r.jsx)(Zr,{attributes:e})}),(0,r.jsx)(se.x,{children:(0,r.jsx)(Jl,{})})]})]})})};Nr.propTypes={attributes:i.array.isRequired,forTarget:i.string.isRequired,kind:i.string.isRequired};const qt=({intlLabel:e,name:t,options:n,onChange:s,value:o})=>{const{formatMessage:l}=(0,te.Z)(),d=e.id?l({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):t,u=g=>{let c="";g==="true"&&(c=!0),g==="false"&&(c=!1),s({target:{name:t,value:c,type:"select-default-boolean"}})};return(0,r.jsx)(ge.P,{label:d,id:t,name:t,onChange:u,value:(o===null?"":o).toString(),children:n.map(({metadatas:{intlLabel:g,disabled:c,hidden:f},key:h,value:x})=>(0,r.jsx)(me.W,{value:x,disabled:c,hidden:f,children:g.defaultMessage},h))})};qt.defaultProps={value:null},qt.propTypes={intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,name:i.string.isRequired,onChange:i.func.isRequired,options:i.arrayOf(i.shape({metadatas:i.shape({intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired}).isRequired,disabled:i.bool,hidden:i.bool}).isRequired,key:i.oneOfType([i.string,i.number]).isRequired,value:i.oneOfType([i.string,i.number]).isRequired}).isRequired).isRequired,value:i.any};const _l=(0,k.default)(b.k)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,he.k3)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    will-change: transform, opacity;
    background: ${({theme:e})=>e.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({theme:e})=>e.colors.neutral0};
      width: ${({theme:e})=>e.spaces[5]};
      height: ${({theme:e})=>e.spaces[5]};
      border: solid 1px ${({theme:e})=>e.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({theme:e})=>e.spaces[3]};
        height: ${({theme:e})=>e.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({theme:e})=>e.colors.primary100};
    ${Z.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    .checkmark {
      border: solid 1px ${({theme:e})=>e.colors.primary600};
      &::after {
        background: ${({theme:e})=>e.colors.primary600};
        transform: scale(1);
      }
    }
  }
`,pt=({intlLabel:e,name:t,onChange:n,radios:s,value:o})=>{const{formatMessage:l}=(0,te.Z)();return(0,r.jsxs)(b.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,r.jsx)(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:t,as:"label",children:l(e)}),(0,r.jsx)(_l,{gap:4,alignItems:"stretch",children:s.map(d=>(0,r.jsxs)("label",{htmlFor:d.value.toString(),className:"container",children:[(0,r.jsx)("input",{id:d.value.toString(),name:t,className:"option-input",checked:d.value===o,value:d.value,onChange:n,type:"radio"},d.value),(0,r.jsx)(y.x,{className:"option",padding:4,children:(0,r.jsxs)(b.k,{children:[(0,r.jsx)(y.x,{paddingRight:4,children:(0,r.jsx)("span",{className:"checkmark"})}),(0,r.jsxs)(b.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,r.jsx)(Z.Z,{fontWeight:"bold",children:l(d.title)}),(0,r.jsx)(Z.Z,{variant:"pi",textColor:"neutral600",children:l(d.description)})]})]})})]},d.value))})]})};pt.defaultProps={radios:[]},pt.propTypes={intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,name:i.string.isRequired,onChange:i.func.isRequired,radios:i.arrayOf(i.shape({title:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired}),description:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired}),value:i.any.isRequired})),value:i.oneOfType([i.string,i.bool]).isRequired};const Or=({onChange:e,name:t,...n})=>{const s=o=>{const l=o.target.value!=="false";e({target:{name:t,value:l,type:"boolean-radio-group"}})};return(0,r.jsx)(pt,{...n,name:t,onChange:s})};Or.propTypes={name:i.string.isRequired,onChange:i.func.isRequired};const Gt=({error:e,intlLabel:t,modifiedData:n,name:s,onChange:o,value:l})=>{const{formatMessage:d}=(0,te.Z)(),[u,g]=(0,p.useState)(!!l||l===0),c=t.id?d({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):s,f=n.type==="biginteger"?"text":"number",h=!n.type,x=e?d({id:e,defaultMessage:e}):"";return(0,r.jsxs)(b.k,{direction:"column",alignItems:"stretch",gap:2,children:[(0,r.jsx)(Ee.X,{id:s,name:s,onValueChange:C=>{o({target:{name:s,value:C?f==="text"?"0":0:null}}),g(B=>!B)},value:u,children:c}),u&&(0,r.jsx)(y.x,{paddingLeft:6,style:{maxWidth:"200px"},children:f==="text"?(0,r.jsx)(et.o,{"aria-label":c,disabled:h,error:x,id:s,name:s,onChange:o,value:l===null?"":l}):(0,r.jsx)(St.Y,{"aria-label":c,disabled:h,error:x,id:s,name:s,onValueChange:C=>{o({target:{name:s,value:C,type:f}})},value:l||0})})]})};Gt.defaultProps={error:null,value:null},Gt.propTypes={error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,modifiedData:i.object.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,value:i.oneOfType([i.string,i.object,i.bool,i.number])};const Er=({onChange:e,...t})=>{const n=(0,I.lm)(),s=o=>{n({type:"info",message:{id:m("contentType.kind.change.warning"),defaultMessage:"You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."}}),e(o)};return(0,r.jsx)(pt,{...t,onChange:s})};Er.propTypes={onChange:i.func.isRequired};const Ht=({description:e,disabled:t,intlLabel:n,isCreating:s,name:o,onChange:l,value:d})=>{const{formatMessage:u}=(0,te.Z)(),[g,c]=(0,p.useState)(!1),f=n.id?u({id:n.id,defaultMessage:n.defaultMessage},{...n.values}):o,h=e?u({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",x=()=>c(A=>!A),C=()=>{l({target:{name:o,value:!1}}),x()},v=({target:{checked:A}})=>{if(!A&&!s){x();return}l({target:{name:o,value:A}})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ee.X,{checked:d,disabled:t,hint:h,name:o,onChange:v,children:f}),(0,r.jsx)(I.QH,{isOpen:g,onToggleDialog:x,onConfirm:C,bodyText:{id:m("popUpWarning.draft-publish.message"),defaultMessage:"If you disable the draft & publish, your drafts will be deleted."},leftButtonText:{id:"components.popUpWarning.button.cancel",defaultMessage:"No, cancel"},rightButtonText:{id:m("popUpWarning.draft-publish.button.confirm"),defaultMessage:"Yes, disable"}})]})};Ht.defaultProps={description:null,disabled:!1,value:!1},Ht.propTypes={description:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}),disabled:i.bool,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,isCreating:i.bool.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,value:i.bool};const Yt=({categoryName:e,deleteCategory:t,deleteComponent:n,deleteContentType:s,isAttributeModal:o,isCustomFieldModal:l,isComponentAttribute:d,isComponentToDzModal:u,isContentTypeModal:g,isCreatingComponent:c,isCreatingComponentAttribute:f,isCreatingComponentInDz:h,isCreatingComponentWhileAddingAField:x,isCreatingContentType:C,isCreatingDz:v,isComponentModal:A,isDzAttribute:B,isEditingAttribute:R,isEditingCategory:F,isInFirstComponentStep:N,onSubmitAddComponentAttribute:W,onSubmitAddComponentToDz:X,onSubmitCreateContentType:de,onSubmitCreateComponent:be,onSubmitCreateDz:q,onSubmitEditAttribute:Te,onSubmitEditCategory:J,onSubmitEditComponent:ie,onSubmitEditContentType:le,onSubmitEditCustomFieldAttribute:ve,onSubmitEditDz:We,onClickFinish:Re})=>{const{formatMessage:oe}=(0,te.Z)();return u?h?(0,r.jsx)(pe.z,{variant:"secondary",type:"submit",onClick:P=>{P.preventDefault(),X(P,!0)},startIcon:(0,r.jsx)(Ge.Z,{}),children:oe({id:m("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"})}):(0,r.jsx)(pe.z,{variant:"default",type:"submit",onClick:P=>{P.preventDefault(),X(P,!1)},children:oe({id:"global.finish",defaultMessage:"Finish"})}):o&&B&&!v?(0,r.jsx)(pe.z,{variant:"default",type:"submit",onClick:P=>{P.preventDefault(),Re(),We(P,!1)},children:oe({id:"global.finish",defaultMessage:"Finish"})}):o&&B&&v?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(pe.z,{variant:"secondary",type:"submit",onClick:P=>{P.preventDefault(),q(P,!0)},startIcon:(0,r.jsx)(Ge.Z,{}),children:oe({id:m("form.button.add-components-to-dynamiczone"),defaultMessage:"Add components to the zone"})})}):o&&d?N?(0,r.jsx)(pe.z,{variant:"secondary",type:"submit",onClick:P=>{P.preventDefault(),W(P,!0)},children:oe(f?{id:m("form.button.configure-component"),defaultMessage:"Configure the component"}:{id:m("form.button.select-component"),defaultMessage:"Configure the component"})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pe.z,{variant:"secondary",type:"submit",onClick:P=>{P.preventDefault(),W(P,!0)},startIcon:(0,r.jsx)(Ge.Z,{}),children:oe(x?{id:m("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"}:{id:m("form.button.add-field"),defaultMessage:"Add another field"})}),(0,r.jsx)(pe.z,{variant:"default",type:"button",onClick:P=>{P.preventDefault(),Re(),W(P,!1)},children:oe({id:"global.finish",defaultMessage:"Finish"})})]}):o&&!d&&!B?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pe.z,{type:R?"button":"submit",variant:"secondary",onClick:P=>{P.preventDefault(),Te(P,!0)},startIcon:(0,r.jsx)(Ge.Z,{}),children:oe({id:m("form.button.add-field"),defaultMessage:"Add another field"})}),(0,r.jsx)(pe.z,{type:R?"submit":"button",variant:"default",onClick:P=>{P.preventDefault(),Re(),Te(P,!1)},children:oe({id:"global.finish",defaultMessage:"Finish"})})]}):g?(0,r.jsxs)(r.Fragment,{children:[!C&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pe.z,{type:"button",variant:"danger",onClick:P=>{P.preventDefault(),s()},children:oe({id:"global.delete",defaultMessage:"Delete"})}),(0,r.jsx)(pe.z,{type:"submit",variant:"default",onClick:P=>{P.preventDefault(),le(P,!1)},children:oe({id:"global.finish",defaultMessage:"Finish"})})]}),C&&(0,r.jsx)(pe.z,{type:"submit",variant:"secondary",onClick:P=>{P.preventDefault(),de(P,!0)},children:oe({id:"global.continue",defaultMessage:"Continue"})})]}):A?(0,r.jsxs)(r.Fragment,{children:[!c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pe.z,{type:"button",variant:"danger",onClick:P=>{P.preventDefault(),n()},children:oe({id:"global.delete",defaultMessage:"Delete"})}),(0,r.jsx)(pe.z,{type:"submit",variant:"default",onClick:P=>{P.preventDefault(),ie(P,!1)},children:oe({id:"global.finish",defaultMessage:"Finish"})})]}),c&&(0,r.jsx)(pe.z,{type:"submit",variant:"secondary",onClick:P=>{P.preventDefault(),be(P,!0)},children:oe({id:"global.continue",defaultMessage:"Continue"})})]}):F?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pe.z,{type:"button",variant:"danger",onClick:P=>{P.preventDefault(),t(e)},children:oe({id:"global.delete",defaultMessage:"Delete"})}),(0,r.jsx)(pe.z,{type:"submit",variant:"default",onClick:P=>{P.preventDefault(),J(P)},children:oe({id:"global.finish",defaultMessage:"finish"})})]}):l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(pe.z,{type:R?"button":"submit",variant:"secondary",onClick:P=>{P.preventDefault(),ve(P,!0)},startIcon:(0,r.jsx)(Ge.Z,{}),children:oe({id:m("form.button.add-field"),defaultMessage:"Add another field"})}),(0,r.jsx)(pe.z,{type:R?"submit":"button",variant:"default",onClick:P=>{P.preventDefault(),Re(),ve(P,!1)},children:oe({id:"global.finish",defaultMessage:"Finish"})})]}):null};Yt.defaultProps={categoryName:null,onClickFinish(){}},Yt.propTypes={categoryName:i.string,deleteCategory:i.func.isRequired,deleteComponent:i.func.isRequired,deleteContentType:i.func.isRequired,isAttributeModal:i.bool.isRequired,isCustomFieldModal:i.bool.isRequired,isComponentAttribute:i.bool.isRequired,isComponentModal:i.bool.isRequired,isComponentToDzModal:i.bool.isRequired,isContentTypeModal:i.bool.isRequired,isCreatingComponent:i.bool.isRequired,isCreatingComponentAttribute:i.bool.isRequired,isCreatingComponentInDz:i.bool.isRequired,isCreatingComponentWhileAddingAField:i.bool.isRequired,isCreatingContentType:i.bool.isRequired,isCreatingDz:i.bool.isRequired,isDzAttribute:i.bool.isRequired,isEditingAttribute:i.bool.isRequired,isEditingCategory:i.bool.isRequired,isInFirstComponentStep:i.bool.isRequired,onSubmitAddComponentAttribute:i.func.isRequired,onSubmitAddComponentToDz:i.func.isRequired,onSubmitCreateContentType:i.func.isRequired,onSubmitCreateComponent:i.func.isRequired,onSubmitCreateDz:i.func.isRequired,onSubmitEditAttribute:i.func.isRequired,onSubmitEditCategory:i.func.isRequired,onSubmitEditComponent:i.func.isRequired,onSubmitEditContentType:i.func.isRequired,onSubmitEditCustomFieldAttribute:i.func.isRequired,onSubmitEditDz:i.func.isRequired,onClickFinish:i.func};const Kt=({actionType:e,attributeName:t,attributeType:n,categoryName:s,contentTypeKind:o,dynamicZoneTarget:l,forTarget:d,modalType:u,targetUid:g,customFieldUid:c,showBackLink:f})=>{const{formatMessage:h}=(0,te.Z)(),{modifiedData:x}=ze(),{onOpenModalAddField:C}=Xe();let v,A=[];const B=x?.[d]?.[g]||x?.[d]||null;let R=B?.schema.displayName;if(u==="contentType"&&(v=o),["component","editCategory"].includes(u)&&(v="component"),["component","contentType"].includes(u)){let N=m(`modalForm.component.header-${e}`);return u==="contentType"&&(N=m(`modalForm.${o}.header-create`)),e==="edit"&&(N=m("modalForm.header-edit")),(0,r.jsx)(it.x,{children:(0,r.jsxs)(b.k,{children:[(0,r.jsx)(y.x,{children:(0,r.jsx)(Je,{type:v})}),(0,r.jsx)(y.x,{paddingLeft:3,children:(0,r.jsx)(Z.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:h({id:N},{name:R})})})]})})}return A=[{label:R,info:{category:B?.category||null,name:B?.schema.displayName}}],u==="chooseAttribute"&&(v=["component","components"].includes(d)?"component":B.schema.kind),u==="addComponentToDynamicZone"&&(v="dynamiczone",A.push({label:l})),(u==="attribute"||u==="customField")&&(v=n,A.push({label:t})),u==="editCategory"&&(A=[{label:h({id:m("modalForm.header.categories"),defaultMessage:"Categories"})},{label:s}]),(0,r.jsx)(it.x,{children:(0,r.jsxs)(b.k,{gap:3,children:[f&&(0,r.jsx)(I.rU,{"aria-label":h({id:m("modalForm.header.back"),defaultMessage:"Back"}),startIcon:(0,r.jsx)(dr.Z,{}),onClick:()=>C({forTarget:d,targetUid:g}),to:"#back"}),(0,r.jsx)(Je,{type:v,customField:c}),(0,r.jsx)(_n,{label:A.map(({label:N})=>N).join(","),children:A.map(({label:N,info:W},X,de)=>{if(N=ke(N),!N)return null;const be=`${N}.${X}`;return W?.category&&(N=`${N} (${ke(W.category)} - ${ke(W.name)})`),(0,r.jsx)(er,{isCurrent:X===de.length-1,children:N},be)})})]})})};Kt.defaultProps={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,contentTypeKind:null,targetUid:null,customFieldUid:null,showBackLink:!1},Kt.propTypes={actionType:i.string,attributeName:i.string,attributeType:i.string,categoryName:i.string,contentTypeKind:i.string,dynamicZoneTarget:i.string,forTarget:i.oneOf(["contentType","component","components"]),modalType:i.string.isRequired,targetUid:i.string,customFieldUid:i.string,showBackLink:i.bool};const ed=({modalType:e,forTarget:t,kind:n,actionType:s,step:o})=>{switch(e){case"chooseAttribute":return m(`modalForm.sub-header.chooseAttribute.${t.includes("component")?"component":n||"collectionType"}`);case"attribute":return m(`modalForm.sub-header.attribute.${s}${o!=="null"&&o!==null&&s!=="edit"?".step":""}`);case"customField":return m(`modalForm.sub-header.attribute.${s}`);case"addComponentToDynamicZone":return m("modalForm.sub-header.addComponentToDynamicZone");default:return m("configurations")}},Qt=({actionType:e,modalType:t,forTarget:n,kind:s,step:o,attributeType:l,attributeName:d,customField:u})=>{const{formatMessage:g}=(0,te.Z)(),c=t==="customField"?u.intlLabel:{id:m(`attribute.${l}`)};return(0,r.jsxs)(b.k,{direction:"column",alignItems:"flex-start",paddingBottom:2,gap:1,children:[(0,r.jsx)(Z.Z,{as:"h2",variant:"beta",children:g({id:ed({actionType:e,forTarget:n,kind:s,step:o,modalType:t}),defaultMessage:"Add new field"},{type:ke(g(c)),name:ke(d),step:o})}),(0,r.jsx)(Z.Z,{variant:"pi",textColor:"neutral600",children:g({id:m(`attribute.${l}.description`),defaultMessage:"A type for modeling data"})})]})};Qt.defaultProps={actionType:null,modalType:null,forTarget:null,kind:null,step:null,attributeType:null,attributeName:null,customField:null},Qt.propTypes={actionType:i.string,modalType:i.string,forTarget:i.string,kind:i.string,step:i.string,attributeType:i.string,attributeName:i.string,customField:i.object};const Xt={alien:po.Z,apps:mo.Z,archive:fo.Z,arrowDown:go.Z,arrowLeft:dr.Z,arrowRight:ho.Z,arrowUp:yo.Z,attachment:bo.Z,bell:vo.Z,bold:xo.Z,book:Co.Z,briefcase:To.Z,brush:jo.Z,bulletList:Mo.Z,calendar:Ro.Z,car:$o.Z,cast:Ao.Z,chartBubble:So.Z,chartCircle:Zo.Z,chartPie:Lo.Z,check:No.Z,clock:Oo.Z,cloud:Eo.Z,code:Fo.Z,cog:Io.Z,collapse:Po.Z,command:Do.Z,connector:wo.Z,crop:Bo.Z,crown:ko.Z,cube:zo.Z,cup:Wo.Z,cursor:Uo.Z,dashboard:Vo.Z,database:qo.Z,discuss:Go.Z,doctor:Ho.Z,earth:Yo.Z,emotionHappy:Ko.Z,emotionUnhappy:Qo.Z,envelop:Xo.Z,exit:Jo.Z,expand:_o.Z,eye:ei.Z,feather:ti.Z,file:ni.Z,fileError:ri.Z,filePdf:si.Z,filter:ai.Z,folder:oi.Z,gate:ii.Z,gift:li.Z,globe:di.Z,grid:ui.Z,handHeart:ci.Z,hashtag:pi.Z,headphone:mi.Z,heart:fi.Z,house:gi.Z,information:hi.Z,italic:yi.Z,key:bi.Z,landscape:vi.Z,layer:xi.Z,layout:Ci.Z,lightbulb:Ti.Z,link:ji.Z,lock:Mi.Z,magic:Ri.Z,manyToMany:ur.Z,manyToOne:cr.Z,manyWays:pr.Z,medium:$i.Z,message:Ai.Z,microphone:Si.Z,monitor:Zi.Z,moon:Li.Z,music:Ni.Z,oneToMany:mr.Z,oneToOne:fr.Z,oneWay:gr.Z,paint:Oi.Z,paintBrush:Ei.Z,paperPlane:Fi.Z,pencil:Ii.Z,phone:Pi.Z,picture:Di.Z,pin:wi.Z,pinMap:Bi.Z,plane:ki.Z,play:zi.Z,plus:Ge.Z,priceTag:Wi.Z,puzzle:Ui.Z,question:Vi.Z,quote:qi.Z,repeat:Gi.Z,restaurant:Hi.Z,rocket:Yi.Z,rotate:Ki.Z,scissors:Qi.Z,search:bt.Z,seed:Xi.Z,server:Ji.Z,shield:_i.Z,shirt:el.Z,shoppingCart:tl.Z,slideshow:nl.Z,stack:rl.Z,star:sl.Z,store:al.Z,strikeThrough:ol.Z,sun:il.Z,television:ll.Z,thumbDown:dl.Z,thumbUp:ul.Z,train:cl.Z,twitter:pl.Z,typhoon:ml.Z,underline:fl.Z,user:gl.Z,volumeMute:hl.Z,volumeUp:yl.Z,walk:bl.Z,wheelchair:vl.Z,write:xl.Z},td=(0,k.default)(b.k)`
  label {
    ${he.k3}
    border-radius: ${({theme:e})=>e.borderRadius};
    border: 1px solid ${({theme:e})=>e.colors.neutral100};
  }
`,Fr=({iconKey:e,name:t,onChange:n,isSelected:s,ariaLabel:o})=>(0,r.jsx)(hs.g,{name:t,required:!1,children:(0,r.jsxs)(ys.Q,{htmlFor:e,id:`${e}-label`,children:[(0,r.jsxs)(bs.T,{children:[(0,r.jsx)(vs._,{type:"radio",id:e,name:t,checked:s,onChange:n,value:e,"aria-checked":s,"aria-labelledby":`${e}-label`}),o]}),(0,r.jsx)(b.k,{padding:2,cursor:"pointer",hasRadius:!0,background:s&&"primary200",children:(0,r.jsx)($.J,{as:Xt[e],color:s?"primary600":"neutral300"})})]})});Fr.propTypes={iconKey:i.string.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,isSelected:i.bool.isRequired,ariaLabel:i.string.isRequired};const Jt=({intlLabel:e,name:t,onChange:n,value:s})=>{const{formatMessage:o}=(0,te.Z)(),[l,d]=(0,p.useState)(!1),[u,g]=(0,p.useState)(""),c=Object.keys(Xt),[f,h]=(0,p.useState)(c),x=(0,p.useRef)(null),C=(0,p.useRef)(null),v=()=>{d(!l)},A=({target:{value:F}})=>{g(F),h(()=>c.filter(N=>N.toLowerCase().includes(F.toLowerCase())))},B=()=>{v(),g(""),h(c)},R=()=>{n({target:{name:t,value:""}})};return(0,p.useEffect)(()=>{l&&C.current.focus()},[l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b.k,{justifyContent:"space-between",paddingBottom:2,children:[(0,r.jsx)(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800",as:"label",children:o(e)}),(0,r.jsxs)(b.k,{gap:1,children:[l?(0,r.jsx)(xs.w,{ref:C,name:"searchbar",size:"S",placeholder:o({id:m("ComponentIconPicker.search.placeholder"),defaultMessage:"Search for an icon"}),onBlur:()=>{u||v()},onChange:A,value:u,onClear:B,clearLabel:o({id:m("IconPicker.search.clear.label"),defaultMessage:"Clear the icon search"}),children:o({id:m("IconPicker.search.placeholder.label"),defaultMessage:"Search for an icon"})}):(0,r.jsx)(Nn.h,{ref:x,onClick:v,"aria-label":o({id:m("IconPicker.search.button.label"),defaultMessage:"Search icon button"}),icon:(0,r.jsx)(bt.Z,{}),noBorder:!0}),s&&(0,r.jsx)(Cs.u,{description:o({id:m("IconPicker.remove.tooltip"),defaultMessage:"Remove the selected icon"}),children:(0,r.jsx)(Nn.h,{onClick:R,"aria-label":o({id:m("IconPicker.remove.button"),defaultMessage:"Remove the selected icon button"}),icon:(0,r.jsx)(El.Z,{}),noBorder:!0})})]})]}),(0,r.jsx)(td,{position:"relative",padding:1,background:"neutral100",hasRadius:!0,wrap:"wrap",gap:2,maxHeight:"126px",overflow:"auto",textAlign:"center",children:f.length>0?f.map(F=>(0,r.jsx)(Fr,{iconKey:F,name:t,onChange:n,isSelected:F===s,ariaLabel:o({id:m("IconPicker.icon.label"),defaultMessage:"Select {icon} icon"},{icon:F})},F)):(0,r.jsx)(y.x,{padding:4,grow:2,children:(0,r.jsx)(Z.Z,{variant:"delta",textColor:"neutral600",textAlign:"center",children:o({id:m("IconPicker.emptyState.label"),defaultMessage:"No icon found"})})})})]})};Jt.defaultProps={value:""},Jt.propTypes={intlLabel:i.object.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,value:i.string};const _t=({description:e,error:t,intlLabel:n,modifiedData:s,name:o,onChange:l,value:d})=>{const{formatMessage:u}=(0,te.Z)(),g=(0,p.useRef)(l),c=s?.displayName||"";(0,p.useEffect)(()=>{if(c){const C=(0,M.n)(c);try{const v=kt(C,2);g.current({target:{name:o,value:v}})}catch{g.current({target:{name:o,value:C}})}}else g.current({target:{name:o,value:""}})},[c,o]);const f=t?u({id:t,defaultMessage:t}):"",h=e?u({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",x=u(n);return(0,r.jsx)(et.o,{error:f,label:x,id:o,hint:h,name:o,onChange:l,value:d||""})};_t.defaultProps={description:null,error:null,value:null},_t.propTypes={description:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}),error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,modifiedData:i.object.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,value:i.string};const en=({oneThatIsCreatingARelationWithAnother:e,target:t})=>{const{contentTypes:n,sortedContentTypesList:s}=ze(),o=(0,Qe.I0)(),l=s.filter($r),{plugin:d=null,schema:{displayName:u}={displayName:"error"}}=n?.[t]??{},g=({uid:c,plugin:f,title:h,restrictRelationsTo:x})=>()=>{const C=f?`${f}_${h}`:h;o({type:M.O,target:{value:c,oneThatIsCreatingARelationWithAnother:e,selectedContentTypeFriendlyName:C,targetContentTypeAllowedRelations:x}})};return(0,r.jsxs)(io,{children:[(0,r.jsx)(nd,{children:`${u} ${d?`(from: ${d})`:""}`}),(0,r.jsx)(uo,{zIndex:5,children:l.map(({uid:c,title:f,restrictRelationsTo:h,plugin:x})=>(0,r.jsxs)(co,{onSelect:g({uid:c,plugin:x,title:f,restrictRelationsTo:h}),children:[f,"\xA0",x&&(0,r.jsxs)(r.Fragment,{children:["(from: ",x,")"]})]},c))})]})};en.defaultProps={target:null},en.propTypes={oneThatIsCreatingARelationWithAnother:i.string.isRequired,target:i.string};const nd=(0,k.default)(lo)`
  svg {
    width: ${6/16}rem;
    height: ${4/16}rem;
  }
`,Tt=({disabled:e,error:t,header:n,isMain:s,name:o,onChange:l,oneThatIsCreatingARelationWithAnother:d,target:u,value:g})=>(0,r.jsxs)(y.x,{background:"neutral100",hasRadius:!0,borderColor:"neutral200",children:[(0,r.jsx)(b.k,{paddingTop:s?4:1,paddingBottom:s?3:1,justifyContent:"center",children:s?(0,r.jsx)(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800",children:n}):(0,r.jsx)(en,{target:u,oneThatIsCreatingARelationWithAnother:d})}),(0,r.jsx)(ee.i,{background:"neutral200"}),(0,r.jsx)(y.x,{padding:4,children:(0,r.jsx)(I.jm,{disabled:e,error:t?.id||null,intlLabel:{id:m("form.attribute.item.defineRelation.fieldName"),defaultMessage:"Field name"},name:o,onChange:l,type:"text",value:g})})]});Tt.defaultProps={disabled:!1,error:null,header:null,isMain:!1,onChange(){},oneThatIsCreatingARelationWithAnother:null,target:null,value:""},Tt.propTypes={disabled:i.bool,error:i.object,header:i.string,isMain:i.bool,name:i.string.isRequired,onChange:i.func,oneThatIsCreatingARelationWithAnother:i.string,target:i.string,value:i.string};const rd=(0,k.default)(y.x)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({theme:e})=>e.colors.primary600};
    z-index: 0;
  }
`,sd=(0,k.default)(y.x)`
  background: ${({theme:e,isSelected:t})=>e.colors[t?"primary100":"neutral0"]};
  border: 1px solid
    ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral200"]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`,ad=(0,k.default)(b.k)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`,od={oneWay:gr.Z,oneToOne:fr.Z,oneToMany:mr.Z,manyToOne:cr.Z,manyToMany:ur.Z,manyWay:pr.Z},tn=({naturePickerType:e,oneThatIsCreatingARelationWithAnother:t,relationType:n,target:s})=>{const o=(0,Qe.I0)(),{formatMessage:l}=(0,te.Z)(),{contentTypes:d,modifiedData:u}=ze(),g=["oneWay","oneToOne","oneToMany","manyToOne","manyToMany","manyWay"],c=["oneWay","manyWay"],h=(e==="contentType"?z(u,[e,"schema","kind"],""):e)==="collectionType"?g:c,x=n==="manyToOne",C=z(d,[s,"schema","displayName"],"unknown"),v=x?C:t,A=x?t:C,B=kt(v,n==="manyToMany"?2:1),R=z(d,[s,"schema","restrictRelationsTo"],null),F=kt(A,["manyToMany","oneToMany","manyToOne","manyWay"].includes(n)?2:1);return n?(0,r.jsxs)(b.k,{style:{flex:1},children:[(0,r.jsx)(rd,{children:(0,r.jsx)(b.k,{paddingLeft:9,paddingRight:9,paddingTop:1,justifyContent:"center",children:(0,r.jsx)(V.k,{tagName:"button",children:(0,r.jsx)(b.k,{gap:3,children:h.map(N=>{const W=od[N],X=R===null||R.includes(N);return(0,r.jsx)(sd,{as:"button",isSelected:n===N,disabled:!X,onClick:()=>{X&&o({type:M.a,target:{oneThatIsCreatingARelationWithAnother:t,targetContentType:s,value:N}})},padding:2,type:"button",children:(0,r.jsx)(W,{},N)},N)})})})})}),(0,r.jsxs)(ad,{justifyContent:"center",children:[(0,r.jsxs)(Z.Z,{children:[Tr(B,{length:24}),"\xA0"]}),(0,r.jsxs)(Z.Z,{textColor:"primary600",children:[l({id:m(`relation.${n}`)}),"\xA0"]}),(0,r.jsx)(Z.Z,{children:Tr(F,{length:24})})]})]}):null};tn.defaultProps={relationType:null,target:null},tn.propTypes={naturePickerType:i.string.isRequired,oneThatIsCreatingARelationWithAnother:i.string.isRequired,relationType:i.string,target:i.string};const Ir=({formErrors:e,mainBoxHeader:t,modifiedData:n,naturePickerType:s,onChange:o})=>{const l=(0,M.g)(n.relation,n.targetAttribute);return(0,r.jsxs)(b.k,{style:{position:"relative"},children:[(0,r.jsx)(Tt,{isMain:!0,header:t,error:e?.name||null,name:"name",onChange:o,value:n?.name||""}),(0,r.jsx)(tn,{naturePickerType:s,oneThatIsCreatingARelationWithAnother:t,relationType:l,target:n.target}),(0,r.jsx)(Tt,{disabled:["oneWay","manyWay"].includes(l),error:e?.targetAttribute||null,name:"targetAttribute",onChange:o,oneThatIsCreatingARelationWithAnother:t,target:n.target,value:n?.targetAttribute||""})]})};Ir.propTypes={formErrors:i.object.isRequired,mainBoxHeader:i.string.isRequired,modifiedData:i.object.isRequired,naturePickerType:i.string.isRequired,onChange:i.func.isRequired};const nn=({error:e,intlLabel:t,name:n,onChange:s,value:o})=>{const{formatMessage:l}=(0,te.Z)(),{allComponentsCategories:d}=ze(),[u,g]=(0,p.useState)(d),c=e?l({id:e,defaultMessage:e}):"",f=l(t),h=C=>{s({target:{name:n,value:C,type:"select-category"}})},x=C=>{g(v=>[...v,C]),h(C)};return(0,r.jsx)(Ts.XU,{error:c,id:n,label:f,name:n,onChange:h,onCreateOption:x,value:o,children:u.map(C=>(0,r.jsx)(js.O,{value:C,children:C},C))})};nn.defaultProps={error:null,value:null},nn.propTypes={error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,name:i.string.isRequired,onChange:i.func.isRequired,value:i.string};const rn=({error:e,intlLabel:t,isAddingAComponentToAnotherComponent:n,isCreating:s,isCreatingComponentWhileAddingAField:o,componentToCreate:l,name:d,onChange:u,targetUid:g,forTarget:c,value:f})=>{const{formatMessage:h}=(0,te.Z)(),x=e?h({id:e,defaultMessage:e}):"",C=h(t),{componentsGroupedByCategory:v,componentsThatHaveOtherComponentInTheirAttributes:A}=ze(),B=["component","components"].includes(c);let R=Object.entries(v).reduce((F,N)=>{const[W,X]=N,de=X.map(be=>({uid:be.uid,label:be.schema.displayName,categoryName:W}));return[...F,...de]},[]);return n&&(R=R.filter(F=>!A.includes(F.uid))),B&&(R=R.filter(F=>F.uid!==g)),o&&(R=[{uid:f,label:l.displayName,categoryName:l.category}]),(0,r.jsx)(ge.P,{disabled:o||!s,error:x,label:C,id:d,name:d,onChange:F=>{u({target:{name:d,value:F,type:"select-category"}})},value:f||"",children:R.map(F=>(0,r.jsx)(me.W,{value:F.uid,children:`${F.categoryName} - ${F.label}`},F.uid))})};rn.defaultProps={componentToCreate:null,error:null},rn.propTypes={componentToCreate:i.object,forTarget:i.string.isRequired,error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,isAddingAComponentToAnotherComponent:i.bool.isRequired,isCreating:i.bool.isRequired,isCreatingComponentWhileAddingAField:i.bool.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,targetUid:i.string.isRequired,value:i.string.isRequired};const Pr=({dynamicZoneTarget:e,intlLabel:t,name:n,onChange:s,value:o})=>{const{formatMessage:l}=(0,te.Z)(),{componentsGroupedByCategory:d,modifiedData:u}=ze(),c=(Wt(u.contentType.schema.attributes,e)||{}).components||[],f=Object.keys(d).reduce((C,v)=>{const A=d[v].filter(({uid:B})=>!c.includes(B));return A.length>0&&(C[v]=A),C},{}),h=Object.entries(f).reduce((C,v)=>{const[A,B]=v,R={label:A,children:B.map(({uid:F,schema:{displayName:N}})=>({label:N,value:F}))};return C.push(R),C},[]),x=l({id:m("components.SelectComponents.displayed-value"),defaultMessage:"{number, plural, =0 {# components} one {# component} other {# components}} selected"},{number:o?.length??0});return(0,r.jsx)(E.Q,{id:"select1",label:l(t),customizeContent:()=>x,name:n,onChange:C=>{s({target:{name:n,value:C,type:"select-components"}})},options:h,value:o||[]})};Pr.propTypes={intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,dynamicZoneTarget:i.string.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,value:i.array.isRequired};const sn=({intlLabel:e,error:t,modifiedData:n,name:s,onChange:o,options:l,value:d})=>{const{formatMessage:u}=(0,te.Z)(),g=u(e),c=t?u({id:t,defaultMessage:t}):"",f=h=>{o({target:{name:s,value:h,type:"select"}}),d&&n.default!==void 0&&n.default!==null&&o({target:{name:"default",value:null}})};return(0,r.jsx)(ge.P,{error:c,label:g,id:s,name:s,onChange:f,value:d||"",children:l.map(({metadatas:{intlLabel:h,disabled:x,hidden:C},key:v,value:A})=>(0,r.jsx)(me.W,{value:A,disabled:x,hidden:C,children:u({id:h.id,defaultMessage:h.defaultMessage},h.values)},v))})};sn.defaultProps={error:void 0,value:""},sn.propTypes={error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,modifiedData:i.object.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,options:i.arrayOf(i.shape({metadatas:i.shape({intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired}).isRequired,disabled:i.bool,hidden:i.bool}).isRequired,key:i.oneOfType([i.string,i.number]).isRequired,value:i.oneOfType([i.string,i.number]).isRequired}).isRequired).isRequired,value:i.string};const an=({intlLabel:e,error:t,modifiedData:n,name:s,onChange:o,options:l,value:d})=>{const{formatMessage:u}=(0,te.Z)(),g=u(e),c=t?u({id:t,defaultMessage:t}):"",f=h=>{o({target:{name:s,value:h,type:"select"}}),d&&(h==="biginteger"&&d!=="biginteger"&&(n.default!==void 0&&n.default!==null&&o({target:{name:"default",value:null}}),n.max!==void 0&&n.max!==null&&o({target:{name:"max",value:null}}),n.min!==void 0&&n.min!==null&&o({target:{name:"min",value:null}})),["decimal","float","integer"].includes(h)&&d==="biginteger"&&(n.default!==void 0&&n.default!==null&&o({target:{name:"default",value:null}}),n.max!==void 0&&n.max!==null&&o({target:{name:"max",value:null}}),n.min!==void 0&&n.min!==null&&o({target:{name:"min",value:null}})))};return(0,r.jsx)(ge.P,{error:c,label:g,id:s,name:s,onChange:f,value:d||"",children:l.map(({metadatas:{intlLabel:h,disabled:x,hidden:C},key:v,value:A})=>(0,r.jsx)(me.W,{value:A,disabled:x,hidden:C,children:u(h)},v))})};an.defaultProps={error:void 0,value:""},an.propTypes={error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,modifiedData:i.object.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,options:i.arrayOf(i.shape({metadatas:i.shape({intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired}).isRequired,disabled:i.bool,hidden:i.bool}).isRequired,key:i.oneOfType([i.string,i.number]).isRequired,value:i.oneOfType([i.string,i.number]).isRequired}).isRequired).isRequired,value:i.string};const on=({description:e,error:t,intlLabel:n,modifiedData:s,name:o,onChange:l,value:d})=>{const{formatMessage:u}=(0,te.Z)(),g=(0,p.useRef)(l),c=s?.displayName||"";(0,p.useEffect)(()=>{c?g.current({target:{name:o,value:(0,M.n)(c)}}):g.current({target:{name:o,value:""}})},[c,o]);const f=t?u({id:t,defaultMessage:t}):"",h=e?u({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",x=u(n);return(0,r.jsx)(et.o,{error:f,label:x,id:o,hint:h,name:o,onChange:l,value:d||""})};on.defaultProps={description:null,error:null,value:null},on.propTypes={description:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}),error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,modifiedData:i.object.isRequired,name:i.string.isRequired,onChange:i.func.isRequired,value:i.string};const ln=({form:e,formErrors:t,genericInputProps:n,modifiedData:s,onChange:o})=>{const{formatMessage:l}=(0,te.Z)();return e.map((d,u)=>d.items.length===0?null:(0,r.jsxs)(y.x,{children:[d.sectionTitle&&(0,r.jsx)(y.x,{paddingBottom:4,children:(0,r.jsx)(Z.Z,{variant:"delta",as:"h3",children:l(d.sectionTitle)})}),(0,r.jsx)(K.r,{gap:4,children:d.items.map((g,c)=>{const f=`${u}.${c}`,h=z(s,g.name,void 0),x=Object.keys(t).find(v=>v===g.name),C=x?t[x].id:z(t,[...g.name.split(".").filter(v=>v!=="componentToCreate"),"id"],null);return g.type==="pushRight"?(0,r.jsx)(re.P,{col:g.size||6,children:(0,r.jsx)("div",{})},g.name||f):(0,r.jsx)(re.P,{col:g.size||6,children:(0,r.jsx)(I.jm,{...g,...n,error:C,onChange:o,value:h})},g.name||f)})})]},u))};ln.propTypes={form:i.arrayOf(i.object).isRequired,formErrors:i.object.isRequired,genericInputProps:i.object.isRequired,modifiedData:i.object.isRequired,onChange:i.func.isRequired};const dn=({description:e,disabled:t,error:n,intlLabel:s,labelAction:o,name:l,onChange:d,placeholder:u,value:g})=>{const{formatMessage:c}=(0,te.Z)(),f=n?c({id:n,defaultMessage:n}):"",h=e?c({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",x=c(s),C=u?c({id:u.id,defaultMessage:u.defaultMessage},{...u.values}):"",v=Array.isArray(g)?g.join(`
`):"",A=B=>{const R=B.target.value.split(`
`);d({target:{name:l,value:R}})};return(0,r.jsx)(Ms.g,{disabled:t,error:f,label:x,labelAction:o,id:l,hint:h,name:l,onChange:A,placeholder:C,value:v,children:v})};dn.defaultProps={description:null,disabled:!1,error:"",labelAction:void 0,placeholder:null,value:""},dn.propTypes={description:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}),disabled:i.bool,error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,labelAction:i.element,name:i.string.isRequired,onChange:i.func.isRequired,placeholder:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}),value:i.oneOfType([i.array,i.string])};const Be={name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:m("modalForm.attribute.form.base.name.description"),defaultMessage:"No space is allowed for the name of the attribute"}},id={sections:[{sectionTitle:null,items:[Be]}]},un={intlLabel:{id:"global.type",defaultMessage:"Type"},name:"createComponent",type:"boolean-radio-group",size:12,radios:[{title:{id:m("form.attribute.component.option.create"),defaultMessage:"Create a new component"},description:{id:m("form.attribute.component.option.create.description"),defaultMessage:"A component is shared across types and components, it will be available and accessible everywhere."},value:!0},{title:{id:m("form.attribute.component.option.reuse-existing"),defaultMessage:"Use an existing component"},description:{id:m("form.attribute.component.option.reuse-existing.description"),defaultMessage:"Reuse a component already created to keep your data consistent across content-types."},value:!1}]},Dr=/^[A-Za-z][-_0-9A-Za-z]*$/,ld=e=>{const t={name:S.Z_().matches(Dr,I.I0.regex).test({name:"nameNotAllowed",message:I.I0.unique,test(n){return n?!e.includes(n?.toLowerCase()):!1}}).required(I.I0.required)};return S.Ry(t)},dd={base:{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:m("modalForm.editCategory.base.name.description"),defaultMessage:"No space is allowed for the name of the category"}}]}]}},ud=(e,t,n)=>{const s={displayName:S.Z_().test({name:"nameAlreadyUsed",message:I.I0.unique,test(o){if(!o)return!1;const l=(0,M.c)(o,n);return!e.includes(l)}}).test({name:"nameNotAllowed",message:m("error.contentTypeName.reserved-name"),test(o){return o?!t.includes(o?.trim()?.toLowerCase()):!1}}).required(I.I0.required),category:S.Z_().matches(Dr,I.I0.regex).required(I.I0.required),icon:S.Z_()};return S.Ry(s)},nt={base(e=""){return[{sectionTitle:null,items:[{name:`${e}displayName`,type:"text",intlLabel:{id:m("contentType.displayName.label"),defaultMessage:"Display Name"}},{name:`${e}category`,type:"select-category",intlLabel:{id:m("modalForm.components.create-component.category.label"),defaultMessage:"Select a category or enter a name to create a new one"}}]},{sectionTitle:null,items:[{name:`${e}icon`,type:"icon-picker",size:12,intlLabel:{id:m("modalForm.components.icon.label"),defaultMessage:"Icon"}}]}]},advanced(){return[]}},D={default:{name:"default",type:"text",intlLabel:{id:m("form.attribute.settings.default"),defaultMessage:"Default value"}},max:{name:"max",type:"checkbox-with-number-field",intlLabel:{id:m("form.attribute.item.maximum"),defaultMessage:"Maximum value"}},maxLength:{name:"maxLength",type:"checkbox-with-number-field",intlLabel:{id:m("form.attribute.item.maximumLength"),defaultMessage:"Maximum length"}},min:{name:"min",type:"checkbox-with-number-field",intlLabel:{id:m("form.attribute.item.minimum"),defaultMessage:"Minimum value"}},minLength:{name:"minLength",type:"checkbox-with-number-field",intlLabel:{id:m("form.attribute.item.minimumLength"),defaultMessage:"Minimum length"}},private:{name:"private",type:"checkbox",intlLabel:{id:m("form.attribute.item.privateField"),defaultMessage:"Private field"},description:{id:m("form.attribute.item.privateField.description"),defaultMessage:"This field will not show up in the API response"}},regex:{intlLabel:{id:m("form.attribute.item.text.regex"),defaultMessage:"RegExp pattern"},name:"regex",type:"text",description:{id:m("form.attribute.item.text.regex.description"),defaultMessage:"The text of the regular expression"}},required:{name:"required",type:"checkbox",intlLabel:{id:m("form.attribute.item.requiredField"),defaultMessage:"Required field"},description:{id:m("form.attribute.item.requiredField.description"),defaultMessage:"You won't be able to create an entry if this field is empty"}},unique:{name:"unique",type:"checkbox",intlLabel:{id:m("form.attribute.item.uniqueField"),defaultMessage:"Unique field"},description:{id:m("form.attribute.item.uniqueField.description"),defaultMessage:"You won't be able to create an entry if there is an existing entry with identical content"}}},wr={advanced:{blocks(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.private]}]}},boolean(){return{sections:[{sectionTitle:null,items:[{autoFocus:!0,type:"select-default-boolean",intlLabel:{id:m("form.attribute.settings.default"),defaultMessage:"Default value"},name:"default",options:[{value:"true",key:"true",metadatas:{intlLabel:{id:"true",defaultMessage:"true"}}},{value:"",key:"null",metadatas:{intlLabel:{id:"null",defaultMessage:"null"}}},{value:"false",key:"false",metadatas:{intlLabel:{id:"false",defaultMessage:"false"}}}]}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.private]}]}},component({repeatable:e},t){return t==="1"?{sections:nt.advanced("componentToCreate")}:e?{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.private,D.max,D.min]}]}:{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.private]}]}},date({type:e}){return{sections:[{sectionTitle:null,items:[{...D.default,type:e||"date",value:null,withDefaultValue:!1,disabled:!e,autoFocus:!1}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.unique,D.private]}]}},dynamiczone(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.max,D.min]}]}},email(){return{sections:[{sectionTitle:null,items:[{...D.default,type:"email"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.unique,D.maxLength,D.minLength,D.private]}]}},enumeration(e){return{sections:[{sectionTitle:null,items:[{name:"default",type:"select",intlLabel:{id:m("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{},options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}}},...(e.enum||[]).filter((t,n)=>e.enum.indexOf(t)===n&&t).map(t=>({key:t,value:t,metadatas:{intlLabel:{id:`${t}.no-override`,defaultMessage:t}}}))]},{intlLabel:{id:m("form.attribute.item.enumeration.graphql"),defaultMessage:"Name override for GraphQL"},name:"enumName",type:"text",validations:{},description:{id:m("form.attribute.item.enumeration.graphql.description"),defaultMessage:"Allows you to override the default generated name for GraphQL"}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.private]}]}},json(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.private]}]}},media(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:m("form.attribute.media.allowed-types"),defaultMessage:"Select allowed types of media"},name:"allowedTypes",type:"allowed-types-select",size:7,value:"",validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.private]}]}},number(e){const t=e.type==="decimal"||e.type==="float"?"any":1;return{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"default",type:e.type==="biginteger"?"text":"number",step:t,intlLabel:{id:m("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.unique,D.max,D.min,D.private]}]}},password(){return{sections:[{sectionTitle:null,items:[D.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.maxLength,D.minLength,D.private]}]}},relation(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.private]}]}},richtext(){return{sections:[{sectionTitle:null,items:[D.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.maxLength,D.minLength,D.private]}]}},text(){return{sections:[{sectionTitle:null,items:[D.default,D.regex]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.unique,D.maxLength,D.minLength,D.private]}]}},uid(e){return{sections:[{sectionTitle:null,items:[{...D.default,disabled:Boolean(e.targetField),type:"text"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[D.required,D.maxLength,D.minLength,D.private]}]}}},base:{component(e,t){if(t==="1"){const n=e.createComponent===!0?nt.base("componentToCreate."):[];return{sections:[{sectionTitle:null,items:[un]},...n]}}return{sections:[{sectionTitle:null,items:[Be,{name:"component",type:"select-component",intlLabel:{id:m("modalForm.attributes.select-component"),defaultMessage:"Select a component"},isMultiple:!1}]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"repeatable",type:"boolean-radio-group",size:12,radios:[{title:{id:m("form.attribute.component.option.repeatable"),defaultMessage:"Repeatable component"},description:{id:m("form.attribute.component.option.repeatable.description"),defaultMessage:"Best for multiple instances (array) of ingredients, meta tags, etc.."},value:!0},{title:{id:m("form.attribute.component.option.single"),defaultMessage:"Single component"},description:{id:m("form.attribute.component.option.single.description"),defaultMessage:"Best for grouping fields like full address, main information, etc..."},value:!1}]}]}]}},date(){return{sections:[{sectionTitle:null,items:[Be,{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",type:"select-date",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"date",value:"date",metadatas:{intlLabel:{id:m("form.attribute.item.date.type.date"),defaultMessage:"date (ex: 01/01/{currentYear})",values:{currentYear:new Date().getFullYear()}}}},{key:"datetime",value:"datetime",metadatas:{intlLabel:{id:m("form.attribute.item.date.type.datetime"),defaultMessage:"datetime (ex: 01/01/{currentYear} 00:00 AM)",values:{currentYear:new Date().getFullYear()}}}},{key:"time",value:"time",metadatas:{intlLabel:{id:m("form.attribute.item.date.type.time"),defaultMessage:"time (ex: 00:00 AM)"}}}]}]}]}},enumeration(){return{sections:[{sectionTitle:null,items:[Be]},{sectionTitle:null,items:[{name:"enum",type:"textarea-enum",size:6,intlLabel:{id:m("form.attribute.item.enumeration.rules"),defaultMessage:"Values (one line per value)"},placeholder:{id:m("form.attribute.item.enumeration.placeholder"),defaultMessage:`Ex:
morning
noon
evening`},validations:{required:!0}}]}]}},media(){return{sections:[{sectionTitle:null,items:[Be]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"multiple",size:12,type:"boolean-radio-group",radios:[{title:{id:m("form.attribute.media.option.multiple"),defaultMessage:"Multiple media"},description:{id:m("form.attribute.media.option.multiple.description"),defaultMessage:"Best for sliders, carousels or multiple files download"},value:!0},{title:{id:m("form.attribute.media.option.single"),defaultMessage:"Single media"},description:{id:m("form.attribute.media.option.single.description"),defaultMessage:"Best for avatar, profile picture or cover"},value:!1}]}]}]}},number(){return{sections:[{sectionTitle:null,items:[Be,{intlLabel:{id:m("form.attribute.item.number.type"),defaultMessage:"Number format"},name:"type",type:"select-number",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"integer",value:"integer",metadatas:{intlLabel:{id:m("form.attribute.item.number.type.integer"),defaultMessage:"integer (ex: 10)"}}},{key:"biginteger",value:"biginteger",metadatas:{intlLabel:{id:m("form.attribute.item.number.type.biginteger"),defaultMessage:"biginteger (ex: 123456789)"}}},{key:"decimal",value:"decimal",metadatas:{intlLabel:{id:m("form.attribute.item.number.type.decimal"),defaultMessage:"decimal (ex: 2.22)"}}},{key:"float",value:"float",metadatas:{intlLabel:{id:m("form.attribute.item.number.type.float"),defaultMessage:"decimal (ex: 3.3333333)"}}}]}]}]}},relation(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:"FIXME",defaultMessage:"FIXME"},name:"relation",size:12,type:"relation"}]}]}},string(){return{sections:[{sectionTitle:null,items:[Be]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:m("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:m("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:m("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:m("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},text(){return{sections:[{sectionTitle:null,items:[Be]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:m("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:m("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:m("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:m("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},uid(e,t,n){const s=n.filter(({type:o})=>["string","text"].includes(o)).map(({name:o})=>({key:o,value:o,metadatas:{intlLabel:{id:`${o}.no-override`,defaultMessage:o}}}));return{sections:[{sectionTitle:null,items:[{...Be,placeholder:{id:m("modalForm.attribute.form.base.name.placeholder"),defaultMessage:"e.g. slug, seoUrl, canonicalUrl"}},{intlLabel:{id:m("modalForm.attribute.target-field"),defaultMessage:"Attached field"},name:"targetField",type:"select",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"global.none",defaultMessage:"None"}}},...s]}]}]}}}},cn=e=>wl(e,{decamelize:!1,lowercase:!1,separator:"_"}),Br=/^[A-Za-z][_0-9A-Za-z]*$/,kr=e=>({name:"attributeNameAlreadyUsed",message:I.I0.unique,test(t){return t?!e.includes(t):!1}}),pn=e=>({name:"forbiddenAttributeName",message:m("error.attributeName.reserved-name"),test(t){return t?!e.includes(t):!1}}),T={default:()=>S.Z_().nullable(),max:()=>S.Rx().integer().nullable(),min:()=>S.Rx().integer().when("max",(e,t)=>e?t.max(e,m("error.validation.minSupMax")):t).nullable(),maxLength:()=>S.Rx().integer().positive(m("error.validation.positive")).nullable(),minLength:()=>S.Rx().integer().min(0).when("maxLength",(e,t)=>e?t.max(e,m("error.validation.minSupMax")):t).nullable(),name(e,t){return S.Z_().test(kr(e)).test(pn(t)).matches(Br,I.I0.regex).required(I.I0.required)},required:()=>S.O7(),type:()=>S.Z_().required(I.I0.required),unique:()=>S.O7().nullable()},mn=(e,t)=>({name:T.name(e,t),type:T.type(),default:T.default(),unique:T.unique(),required:T.required(),maxLength:T.maxLength(),minLength:T.minLength(),regex:S.Z_().test({name:"isValidRegExpPattern",message:m("error.validation.regex"),test(s){return new RegExp(s)!==null}}).nullable()}),fn={name:"isMinSuperiorThanMax",message:m("error.validation.minSupMax"),test(e){if(!e)return!0;const{max:t}=this.parent;return!t||Number.isNaN(zt(e))?!0:zt(t)>=zt(e)}},gn={date(e,t){const n={name:T.name(e,t),type:T.type()};return S.Ry(n)},datetime(e,t){const n={name:T.name(e,t),type:T.type()};return S.Ry(n)},time(e,t){const n={name:T.name(e,t),type:T.type()};return S.Ry(n)},default(e,t){const n={name:T.name(e,t),type:T.type()};return S.Ry(n)},biginteger(e,t){const n={name:T.name(e,t),type:T.type(),default:S.Z_().nullable().matches(/^-?\d*$/),unique:T.unique(),required:T.required(),max:S.Z_().nullable().matches(/^-?\d*$/,I.I0.regex),min:S.Z_().nullable().test(fn).matches(/^-?\d*$/,I.I0.regex)};return S.Ry(n)},boolean(e,t){const n={name:T.name(e,t),default:S.O7().nullable(),required:T.required(),unique:T.unique()};return S.Ry(n)},component(e,t){const n={name:T.name(e,t),type:T.type(),required:T.required(),max:T.max(),min:T.min(),component:S.Z_().required(I.I0.required)};return S.Ry(n)},decimal(e,t){const n={name:T.name(e,t),type:T.type(),default:S.Rx(),required:T.required(),max:S.Rx(),min:S.Rx().test(fn)};return S.Ry(n)},dynamiczone(e,t){const n={name:T.name(e,t),type:T.type(),required:T.required(),max:T.max(),min:T.min()};return S.Ry(n)},email(e,t){const n={name:T.name(e,t),type:T.type(),default:S.Z_().email().nullable(),unique:T.unique(),required:T.required(),maxLength:T.maxLength(),minLength:T.minLength()};return S.Ry(n)},enumeration(e,t){const n=/^[_A-Za-z][_0-9A-Za-z]*$/,s={name:S.Z_().test(kr(e)).test(pn(t)).matches(n,I.I0.regex).required(I.I0.required),type:T.type(),default:T.default(),unique:T.unique(),required:T.required(),enum:S.IX().of(S.Z_()).min(1,I.I0.min).test({name:"areEnumValuesUnique",message:m("error.validation.enum-duplicate"),test(o){return!Bl(o.map(cn).filter((d,u,g)=>g.indexOf(d)!==u)).length}}).test({name:"doesNotHaveEmptyValues",message:m("error.validation.enum-empty-string"),test:o=>!o.map(cn).some(l=>l==="")}).test({name:"doesMatchRegex",message:m("error.validation.enum-regex"),test:o=>o.map(cn).every(l=>n.test(l))}),enumName:S.Z_().nullable()};return S.Ry(s)},float(e,t){const n={name:T.name(e,t),type:T.type(),required:T.required(),default:S.Rx(),max:S.Rx(),min:S.Rx().test(fn)};return S.Ry(n)},integer(e,t){const n={name:T.name(e,t),type:T.type(),default:S.Rx().integer(),unique:T.unique(),required:T.required(),max:T.max(),min:T.min()};return S.Ry(n)},json(e,t){const n={name:T.name(e,t),type:T.type(),required:T.required(),unique:T.unique()};return S.Ry(n)},media(e,t){const n={name:T.name(e,t),type:T.type(),multiple:S.O7(),required:T.required(),allowedTypes:S.IX().of(S.Z_().oneOf(["images","videos","files","audios"])).min(1).nullable()};return S.Ry(n)},password(e,t){const n={name:T.name(e,t),type:T.type(),default:T.default(),unique:T.unique(),required:T.required(),maxLength:T.maxLength(),minLength:T.minLength()};return S.Ry(n)},relation(e,t,n,{initialData:s,modifiedData:o}){const l={name:T.name(e,t),target:S.Z_().required(I.I0.required),relation:S.Z_().required(),type:S.Z_().required(),targetAttribute:S.Vo(()=>{const d=(0,M.g)(o.relation,o.targetAttribute);if(d==="oneWay"||d==="manyWay")return S.Z_().nullable();let u=S.Z_().test(pn(t)),c=[...n.map(({name:f})=>f),o.name].filter(f=>f!==s.targetAttribute);return u.matches(Br,I.I0.regex).test({name:"forbiddenTargetAttributeName",message:m("error.validation.relation.targetAttribute-taken"),test(f){return f?!c.includes(f):!1}}).required(I.I0.required)})};return S.Ry(l)},richtext(e,t){const n={name:T.name(e,t),type:T.type(),default:T.default(),unique:T.unique(),required:T.required(),maxLength:T.maxLength(),minLength:T.minLength()};return S.Ry(n)},blocks(e,t){const n={name:T.name(e,t),type:T.type(),default:T.default(),unique:T.unique(),required:T.required(),maxLength:T.maxLength(),minLength:T.minLength()};return S.Ry(n)},string(e,t){const n=mn(e,t);return S.Ry(n)},text(e,t){const n=mn(e,t);return S.Ry(n)},uid(e,t){const n=mn(e,t);return S.Ry(n)}},cd=({usedContentTypeNames:e=[],reservedModels:t=[],singularNames:n=[],pluralNames:s=[],collectionNames:o=[]})=>{const l={displayName:S.Z_().test({name:"nameAlreadyUsed",message:I.I0.unique,test(d){if(!d)return!1;const u=(0,M.b)(d);return!e.includes(u)}}).test({name:"nameNotAllowed",message:m("error.contentTypeName.reserved-name"),test(d){return d?!t.includes(d?.trim()?.toLowerCase()):!1}}).required(I.I0.required),pluralName:S.Z_().test({name:"pluralNameAlreadyUsed",message:I.I0.unique,test(d){return d?!s.includes(d):!1}}).test({name:"pluralNameAlreadyUsedAsSingular",message:m("error.contentType.pluralName-equals-singularName"),test(d){return d?!n.includes(d):!1}}).test({name:"pluralAndSingularAreUnique",message:m("error.contentType.pluralName-used"),test(d,u){return d?u.parent.singularName!==d:!1}}).test({name:"pluralNameNotAllowed",message:m("error.contentTypeName.reserved-name"),test(d){return d?!t.includes(d?.trim()?.toLowerCase()):!1}}).test({name:"pluralNameNotAlreadyUsedInCollectionName",message:m("error.contentType.pluralName-equals-collectionName"),test(d){return d?!o.includes(d?.trim()?.toLowerCase()):!1}}).required(I.I0.required),singularName:S.Z_().test({name:"singularNameAlreadyUsed",message:I.I0.unique,test(d){return d?!n.includes(d):!1}}).test({name:"singularNameAlreadyUsedAsPlural",message:m("error.contentType.singularName-equals-pluralName"),test(d){return d?!s.includes(d):!1}}).test({name:"pluralAndSingularAreUnique",message:m("error.contentType.singularName-used"),test(d,u){return d?u.parent.pluralName!==d:!1}}).test({name:"singularNameNotAllowed",message:m("error.contentTypeName.reserved-name"),test(d){return d?!t.includes(d?.trim()?.toLowerCase()):!1}}).required(I.I0.required),draftAndPublish:S.O7(),kind:S.Z_().oneOf(["singleType","collectionType"]),reviewWorkflows:S.O7()};return S.Ry(l)},zr={name:"displayName",type:"text",intlLabel:{id:m("contentType.displayName.label"),defaultMessage:"Display name"}},hn={advanced:{default(){return{sections:[{items:[{intlLabel:{id:m("contentType.draftAndPublish.label"),defaultMessage:"Draft & publish"},description:{id:m("contentType.draftAndPublish.description"),defaultMessage:"Allows writing a draft version of an entry, before it is published"},name:"draftAndPublish",type:"toggle-draft-publish",validations:{}}]}]}}},base:{create(){return{sections:[{sectionTitle:null,items:[zr,{description:{id:m("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:m("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text-singular"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{description:{id:m("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:m("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text-plural"}]}]}},edit(){return{sections:[{sectionTitle:null,items:[zr,{disabled:!0,description:{id:m("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:m("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{disabled:!0,description:{id:m("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:m("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text"},{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"kind",type:"content-type-radio-group",size:12,radios:[{title:{id:m("form.button.collection-type.name"),defaultMessage:"Collection Type"},description:{id:m("form.button.collection-type.description"),defaultMessage:"Best for multiple instances like articles, products, comments, etc."},value:"collectionType"},{title:{id:m("form.button.single-type.name"),defaultMessage:"Single Type"},description:{id:m("form.button.single-type.description"),defaultMessage:"Best for single instance like about us, homepage, etc."},value:"singleType"}]}]}]}}}},yn={advanced:{default(){return{sections:nt.advanced("componentToCreate.")}}},base:{createComponent(){return{sections:[{sectionTitle:null,items:[un]},...nt.base("componentToCreate.")]}},default(){return{sections:[{sectionTitle:null,items:[un]},{sectionTitle:null,items:[{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{name:"components",type:"select-components",intlLabel:{id:m("modalForm.attributes.select-components"),defaultMessage:"Select the components"},isMultiple:!0}]}]}}}},Wr=(e,t)=>{e.forEach(n=>{if(!("sectionTitle"in n)){t[0].items.push(n);return}t.push(n)})},Ur=(e,t)=>e.filter(({name:n})=>n!==t.initialData.name).map(({name:n})=>n),He={customField:{schema({schemaAttributes:e,attributeType:t,customFieldValidator:n,reservedNames:s,schemaData:o,ctbFormsAPI:l}){const d=Ur(e,o),u=gn[t](d,s.attributes);return l.makeCustomFieldValidator(u,n,d,s.attributes,o)},form:{base({customField:e}){const t=[{sectionTitle:null,items:[Be]}];return e.options?.base&&Wr(e.options.base,t),{sections:t}},advanced({customField:e,data:t,step:n,extensions:s,...o}){const l=[{sectionTitle:null,items:[]}],d=s.getAdvancedForm(["attribute",e.type],{data:t,type:e.type,step:n,...o});if(e.options?.advanced&&Wr(e.options.advanced,l),d){const u={sectionTitle:{id:m("modalForm.custom-fields.advanced.settings.extended"),defaultMessage:"Extended settings"},items:d};l.push(u)}return{sections:l}}}},attribute:{schema(e,t,n,s,o,l){const d=e?.schema?.attributes??[],u=Ur(d,o);try{let g=gn[t](u,n.attributes,s,o);return l.makeValidator(["attribute",t],g,u,n.attributes,s,o)}catch(g){return console.error("Error yup build schema",g),gn.default(u,n.attributes)}},form:{advanced({data:e,type:t,step:n,extensions:s,...o}){try{const l=wr.advanced[t](e,n).sections,d=s.getAdvancedForm(["attribute",t],{data:e,type:t,step:n,...o});return{sections:l.reduce((g,c)=>(c.sectionTitle===null?g.push(c):g.push({...c,items:[...c.items,...d]}),g),[])}}catch(l){return console.error(l),{sections:[]}}},base({data:e,type:t,step:n,attributes:s}){try{return wr.base[t](e,n,s)}catch{return id}}}},contentType:{schema(e,t,n,s,o,l){const d=Object.values(l).map(v=>v.schema.singularName),u=Object.values(l).map(v=>v?.schema?.pluralName??""),g=t?e.filter(v=>v!==n):e,c=t?d.filter(v=>{const{schema:A}=l[n];return A.singularName!==v}):d,f=t?u.filter(v=>{const{schema:A}=l[n];return A.pluralName!==v}):u,h=Object.values(l).map(v=>v?.schema?.collectionName??""),x=t?h.filter(v=>{const{schema:A}=l[n],B=A.pluralName,R=A.collectionName;return v!==B||v!==R}):h,C=cd({usedContentTypeNames:g,reservedModels:s.models,singularNames:c,pluralNames:f,collectionNames:x});return o.makeValidator(["contentType"],C,g,s.models,c,f)},form:{base({actionType:e}){return e==="create"?hn.base.create():hn.base.edit()},advanced({extensions:e}){const t=hn.advanced.default().sections.map(s=>s.items).flat(),n=e.getAdvancedForm(["contentType"]);return{sections:[{items:[...t,...n]}]}}}},component:{schema(e,t,n,s=!1,o=null){const l=s?e.filter(d=>d!==o):e;return ud(l,n.models,t)},form:{advanced(){return{sections:nt.advanced()}},base(){return{sections:nt.base()}}}},addComponentToDynamicZone:{form:{advanced(){return yn.advanced.default()},base({data:e}){return e?.createComponent??!1?yn.base.createComponent():yn.base.default()}}},editCategory:{schema(e,t){const n=e.filter(s=>s!==t.name).map(s=>s.toLowerCase());return ld(n)},form:{advanced:()=>({sections:[]}),base(){return dd.base}}}};var jt="NOT_FOUND";function pd(e){var t;return{get:function(s){return t&&e(t.key,s)?t.value:jt},put:function(s,o){t={key:s,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function md(e,t){var n=[];function s(u){var g=n.findIndex(function(f){return t(u,f.key)});if(g>-1){var c=n[g];return g>0&&(n.splice(g,1),n.unshift(c)),c.value}return jt}function o(u,g){s(u)===jt&&(n.unshift({key:u,value:g}),n.length>e&&n.pop())}function l(){return n}function d(){n=[]}return{get:s,put:o,getEntries:l,clear:d}}var fd=function(t,n){return t===n};function gd(e){return function(n,s){if(n===null||s===null||n.length!==s.length)return!1;for(var o=n.length,l=0;l<o;l++)if(!e(n[l],s[l]))return!1;return!0}}function hd(e,t){var n=typeof t=="object"?t:{equalityCheck:t},s=n.equalityCheck,o=s===void 0?fd:s,l=n.maxSize,d=l===void 0?1:l,u=n.resultEqualityCheck,g=gd(o),c=d===1?pd(g):md(d,g);function f(){var h=c.get(arguments);if(h===jt){if(h=e.apply(null,arguments),u){var x=c.getEntries(),C=x.find(function(v){return u(v.value,h)});C&&(h=C.value)}c.put(arguments,h)}return h}return f.clearCache=function(){return c.clear()},f}function yd(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(s){return typeof s=="function"})){var n=t.map(function(s){return typeof s=="function"?"function "+(s.name||"unnamed")+"()":typeof s}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function bd(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];var o=function(){for(var d=arguments.length,u=new Array(d),g=0;g<d;g++)u[g]=arguments[g];var c=0,f,h={memoizeOptions:void 0},x=u.pop();if(typeof x=="object"&&(h=x,x=u.pop()),typeof x!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof x+"]");var C=h,v=C.memoizeOptions,A=v===void 0?n:v,B=Array.isArray(A)?A:[A],R=yd(u),F=e.apply(void 0,[function(){return c++,x.apply(null,arguments)}].concat(B)),N=e(function(){for(var X=[],de=R.length,be=0;be<de;be++)X.push(R[be].apply(null,arguments));return f=F.apply(null,X),f});return Object.assign(N,{resultFunc:x,memoizedResultFunc:F,dependencies:R,lastResult:function(){return f},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),N};return o}var Vr=bd(hd),qr=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(s[l]=o[l])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function s(){this.constructor=t}t.prototype=n===null?Object.create(n):(s.prototype=n.prototype,new s)}}(),vd=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},s,o,l,d;return d={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function u(c){return function(f){return g([c,f])}}function g(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,o&&(l=c[0]&2?o.return:c[0]?o.throw||((l=o.return)&&l.call(o),0):o.next)&&!(l=l.call(o,c[1])).done)return l;switch(o=0,l&&(c=[c[0]&2,l.value]),c[0]){case 0:case 1:l=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(l=n.trys,!(l=l.length>0&&l[l.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!l||c[1]>l[0]&&c[1]<l[3])){n.label=c[1];break}if(c[0]===6&&n.label<l[1]){n.label=l[1],l=c;break}if(l&&n.label<l[2]){n.label=l[2],n.ops.push(c);break}l[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(f){c=[6,f],o=0}finally{s=l=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Mt=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,s=t.length,o=e.length;n<s;n++,o++)e[o]=t[n];return e},xd=Object.defineProperty,Cd=Object.defineProperties,Td=Object.getOwnPropertyDescriptors,Gr=Object.getOwnPropertySymbols,jd=Object.prototype.hasOwnProperty,Md=Object.prototype.propertyIsEnumerable,Hr=function(e,t,n){return t in e?xd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},mt=function(e,t){for(var n in t||(t={}))jd.call(t,n)&&Hr(e,n,t[n]);if(Gr)for(var s=0,o=Gr(t);s<o.length;s++){var n=o[s];Md.call(t,n)&&Hr(e,n,t[n])}return e},bn=function(e,t){return Cd(e,Td(t))},Rd=function(e,t,n){return new Promise(function(s,o){var l=function(g){try{u(n.next(g))}catch(c){o(c)}},d=function(g){try{u(n.throw(g))}catch(c){o(c)}},u=function(g){return g.done?s(g.value):Promise.resolve(g.value).then(l,d)};u((n=n.apply(e,t)).next())})};function rt(e,t){function n(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];if(t){var l=t.apply(void 0,s);if(!l)throw new Error("prepareAction did not return an object");return mt(mt({type:e,payload:l.payload},"meta"in l&&{meta:l.meta}),"error"in l&&{error:l.error})}return{type:e,payload:s[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(s){return s.type===e},n}(function(e){qr(t,e);function t(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Mt([void 0],n[0].concat(this)))):new(t.bind.apply(t,Mt([void 0],n.concat(this))))},t})(Array),function(e){qr(t,e);function t(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Mt([void 0],n[0].concat(this)))):new(t.bind.apply(t,Mt([void 0],n.concat(this))))},t}(Array);var $d="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ad=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=$d[Math.random()*64|0];return t},Sd=["name","message","stack","code"],vn=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Yr=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Zd=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,s=Sd;n<s.length;n++){var o=s[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,s){var o=rt(t+"/fulfilled",function(f,h,x,C){return{payload:f,meta:bn(mt({},C||{}),{arg:x,requestId:h,requestStatus:"fulfilled"})}}),l=rt(t+"/pending",function(f,h,x){return{payload:void 0,meta:bn(mt({},x||{}),{arg:h,requestId:f,requestStatus:"pending"})}}),d=rt(t+"/rejected",function(f,h,x,C,v){return{payload:C,error:(s&&s.serializeError||Zd)(f||"Rejected"),meta:bn(mt({},v||{}),{arg:x,requestId:h,rejectedWithValue:!!C,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=!1,g=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function c(f){return function(h,x,C){var v=s?.idGenerator?s.idGenerator(f):Ad(),A=new g,B;function R(N){B=N,A.abort()}var F=function(){return Rd(this,null,function(){var N,W,X,de,be,q,Te;return vd(this,function(J){switch(J.label){case 0:return J.trys.push([0,4,,5]),de=(N=s?.condition)==null?void 0:N.call(s,f,{getState:x,extra:C}),Nd(de)?[4,de]:[3,2];case 1:de=J.sent(),J.label=2;case 2:if(de===!1||A.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return be=new Promise(function(ie,le){return A.signal.addEventListener("abort",function(){return le({name:"AbortError",message:B||"Aborted"})})}),h(l(v,f,(W=s?.getPendingMeta)==null?void 0:W.call(s,{requestId:v,arg:f},{getState:x,extra:C}))),[4,Promise.race([be,Promise.resolve(n(f,{dispatch:h,getState:x,extra:C,requestId:v,signal:A.signal,abort:R,rejectWithValue:function(ie,le){return new vn(ie,le)},fulfillWithValue:function(ie,le){return new Yr(ie,le)}})).then(function(ie){if(ie instanceof vn)throw ie;return ie instanceof Yr?o(ie.payload,v,f,ie.meta):o(ie,v,f)})])];case 3:return X=J.sent(),[3,5];case 4:return q=J.sent(),X=q instanceof vn?d(null,v,f,q.payload,q.meta):d(q,v,f),[3,5];case 5:return Te=s&&!s.dispatchConditionRejection&&d.match(X)&&X.meta.condition,Te||h(X),[2,X]}})})}();return Object.assign(F,{abort:R,requestId:v,arg:f,unwrap:function(){return F.then(Ld)}})}}return Object.assign(c,{pending:l,rejected:d,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function Ld(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Nd(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var xn="listenerMiddleware";rt(xn+"/add"),rt(xn+"/removeAll"),rt(xn+"/remove");var Kr;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis),(0,kl.pV)();const Od=()=>e=>e[`${M.p}_formModal`]||M.i,Ed=()=>Vr(Od(),e=>e),Fd=(e,t)=>{const n=z(e,["contentType","schema","kind"],"");return n==="singleType"||n===t.kind?!0:z(e,["contentType","schema","attributes"],[]).filter(({relation:l,type:d,targetAttribute:u})=>{const g=(0,M.g)(l,u);return d==="relation"&&!["oneWay","manyWay"].includes(g)}).length===0},Id=(e="",t,n)=>{const s=["text","boolean","blocks","json","number","email","date","password","media","enumeration","relation","richtext"],o=e==="contentType",l=n.includes(t),d=!o&&!l;return o?[[...s.slice(0,-1),"uid",...s.slice(-1)],["component","dynamiczone"]]:d?[s,["component"]]:[s]},Qr=e=>e.reduce((t,n)=>{const s=n.items.reduce((o,l)=>(l.name&&o.push(l.name),o),[]);return[...t,...s]},[]),Pd=()=>{const{onCloseModal:e,onNavigateToChooseAttributeModal:t,onNavigateToAddCompoToDZModal:n,onNavigateToCreateComponentStep2:s,actionType:o,attributeName:l,attributeType:d,customFieldUid:u,categoryName:g,dynamicZoneTarget:c,forTarget:f,modalType:h,isOpen:x,showBackLink:C,kind:v,step:A,targetUid:B}=Xe(),R=(0,I.mZ)().get(u),F=(0,p.useRef)(),N=(0,p.useMemo)(Ed,[]),W=(0,Qe.I0)(),X=(0,I.lm)(),de=(0,Qe.v9)(Y=>N(Y),Qe.wU),{push:be}=(0,Ze.k6)(),{trackUsage:q}=(0,I.rS)(),{formatMessage:Te}=(0,te.Z)(),{getPlugin:J}=(0,I.j1)(),le=J(M.p).apis.forms,ve=le.components.inputs,{addAttribute:We,addCustomFieldAttribute:Re,addCreatedComponentToDynamicZone:oe,allComponentsCategories:P,changeDynamicZoneComponents:Cn,contentTypes:st,components:gt,createSchema:at,deleteCategory:Tn,deleteData:$t,editCategory:jn,editCustomFieldAttribute:Mn,submitData:Rn,modifiedData:$e,nestedComponents:$n,setModifiedData:An,sortedContentTypesList:Sn,updateSchema:At,reservedNames:Ye}=ze(),{componentToCreate:ht,formErrors:Ue,initialData:je,isCreatingComponentWhileAddingAField:yt,modifiedData:j}=de,w=f==="contentType"||f==="component"?[f]:[f,B];(0,p.useEffect)(()=>{if(x){const Y=Sn.filter($r);h==="editCategory"&&An(),o==="edit"&&h==="attribute"&&f==="contentType"&&q("willEditFieldOfContentType");const Oe=[...w,"schema","attributes"],Ie=Wt(z($e,Oe,[]),c)||null;if(h==="editCategory"&&o==="edit"&&W({type:M.S,modalType:h,actionType:o,data:{name:g}}),h==="contentType"&&o==="create"&&W({type:M.S,modalType:h,actionType:o,data:{draftAndPublish:!0},pluginOptions:{}}),h==="contentType"&&o==="edit"){const{displayName:_,draftAndPublish:Me,kind:Pe,pluginOptions:Se,pluralName:gu,reviewWorkflows:hu,singularName:yu}=z($e,[...w,"schema"],{displayName:null,pluginOptions:{},singularName:null,pluralName:null});W({type:M.S,actionType:o,modalType:h,data:{displayName:_,draftAndPublish:Me,kind:Pe,pluginOptions:Se,pluralName:gu,reviewWorkflows:hu??!1,singularName:yu}})}if(h==="component"&&o==="edit"){const _=z($e,w,{});W({type:M.S,actionType:o,modalType:h,data:{displayName:_.schema.displayName,category:_.category,icon:_.schema.icon}})}if(h==="addComponentToDynamicZone"&&o==="edit"){const _={...Ie,components:[],name:c,createComponent:!1,componentToCreate:{type:"component"}};W({type:M.d,attributeToEdit:_})}if(d){const Me={...Wt(z($e,Oe,[]),l),name:l};d==="component"&&o==="edit"&&(Me.repeatable||xr(Me,"repeatable",!1)),W(h==="customField"?{type:M.e,customField:R,isEditing:o==="edit",modifiedDataToSetForEditing:Me,forTarget:f}:{type:M.f,attributeType:d,nameToSetForRelation:z(Y,["0","title"],"error"),targetUid:z(Y,["0","uid"],"error"),isEditing:o==="edit",modifiedDataToSetForEditing:Me,step:A,forTarget:f})}}else W({type:M.R})},[o,l,d,g,c,f,x,h]);const G=h==="contentType",Ce=h==="component",Ae=h==="attribute",Ne=h==="customField",Ve=d==="component"&&Ae,_e=o==="create",Ke=z(j,"createComponent",!1)||yt,ot=A==="1",ls=h==="editCategory",ds=h==="chooseAttribute",Zn=(0,M.b)(j.displayName||""),Ln=z($e,[...w,"schema","attributes"],null),tu=async()=>{let Y;const Oe=Ke&&A==="1"?z(j,"componentToCreate",{}):j;if(G)Y=He.contentType.schema(Object.keys(st),o==="edit",z($e,[...w,"uid"],null),Ye,le,st);else if(Ce)Y=He.component.schema(Object.keys(gt),j.category||"",Ye,o==="edit",z($e,[...w,"uid"],null),le);else if(Ne)Y=He.customField.schema({schemaAttributes:z($e,[...w,"schema","attributes"],[]),attributeType:R.type,reservedNames:Ye,schemaData:{modifiedData:j,initialData:je},ctbFormsAPI:le,customFieldValidator:R.options?.validator});else if(Ve&&Ke&&ot)Y=He.component.schema(Object.keys(gt),z(j,"componentToCreate.category",""),Ye,le);else if(Ae&&!ot){const Ie=d==="relation"?"relation":j.type;let _=[];if(Ie==="relation"){const Me=z(j,["target"],null);_=z(st,[Me,"schema","attributes"],[]).filter(({name:Se})=>o!=="edit"?!0:Se!==je.targetAttribute)}Y=He.attribute.schema(z($e,w,{}),Ie,Ye,_,{modifiedData:j,initialData:je},le)}else if(ls)Y=He.editCategory.schema(P,je,le);else if(ot&&Ke)Y=He.component.schema(Object.keys(gt),z(j,"componentToCreate.category",""),Ye,le);else return;await Y.validate(Oe,{abortEarly:!1})},us=(0,p.useCallback)(({target:{name:Y,value:Oe,type:Ie,..._}})=>{const Me=["enumName","max","min","maxLength","minLength","regex","default"];let Pe;Me.includes(Y)&&Oe===""?Pe=null:Pe=Oe;const Se=Object.assign({},Ue);Y==="max"&&delete Se.min,Y==="maxLength"&&delete Se.minLength,delete Se[Y],W({type:M.h,errors:Se}),W({type:M.j,keys:Y.split("."),value:Pe,..._})},[W,Ue]),Fe=async(Y,Oe=_e)=>{Y.preventDefault();try{await tu(),su(Oe);const Ie=f==="components"?B:Zn;if(G)if(_e)at({...j,kind:v},h,Zn),be({pathname:`/plugins/${M.p}/content-types/${Zn}`}),t({forTarget:f,targetUid:Ie});else{Fd($e,j)?(e(),Rn(j)):X({type:"warning",message:{id:"notification.contentType.relations.conflict"}});return}else if(h==="component")if(_e){const _=(0,M.c)(j.displayName,j.category),{category:Me,...Pe}=j;at(Pe,"component",_,Me),be({pathname:`/plugins/${M.p}/component-categories/${Me}/${_}`}),t({forTarget:f,targetUid:_})}else{At(j,h,B),e();return}else if(ls){if(Cr(je.name)===Cr(j.name)){e();return}jn(je.name,j);return}else if(Ne){const _={attributeToSet:{...j,customField:u},forTarget:f,targetUid:B,initialAttribute:je};o==="edit"?Mn(_):Re(_),Oe?t({forTarget:f,targetUid:Ie}):e();return}else if(Ae&&!Ke){if(d==="dynamiczone"){We(j,f,B,o==="edit",je),_e?(W({type:M.k}),F.current._handlers.setSelectedTabIndex(0),n({dynamicZoneTarget:j.name})):e();return}if(!Ve){We(j,f,B,o==="edit",je),Oe?t({forTarget:f,targetUid:Ie}):e();return}if(ot){s(),W({type:M.l,forTarget:f});return}We(j,f,B,o==="edit",je,!0),Oe?t({forTarget:f,targetUid:B}):e()}else if(Ae&&Ke){if(ot){q("willCreateComponentFromAttributesModal"),W({type:M.m,forTarget:f}),s();return}const{category:_,type:Me,...Pe}=ht,Se=(0,M.c)(ht.displayName,_);at(Pe,Me,Se,_,Ke),We(j,f,B,!1),W({type:M.R}),Oe?t({forTarget:"components",targetUid:Se}):e();return}else{if(ot)if(Ke){const{category:_,type:Me,...Pe}=j.componentToCreate,Se=(0,M.c)(j.componentToCreate.displayName,_);at(Pe,Me,Se,_,Ke),oe(c,[Se]),t({forTarget:"components",targetUid:Se})}else Cn(c,j.components),e();else console.error("This case is not handled");return}W({type:M.R})}catch(Ie){const _=(0,I.CJ)(Ie);console.log({err:Ie,errors:_}),W({type:M.h,errors:_})}},nu=()=>{window.confirm(Te({id:"window.confirm.close-modal.file",defaultMessage:"Are you sure? Your changes will be lost."}))&&(e(),W({type:M.R}))},cs=()=>{Bt(j,je)?(e(),W({type:M.R})):nu()},ru=Y=>{if(Y==="advanced"){if(G){q("didSelectContentTypeSettings");return}f==="contentType"&&q("didSelectContentTypeFieldSettings")}},su=Y=>{h==="attribute"&&f==="contentType"&&d!=="dynamiczone"&&Y&&q("willAddMoreFieldToContentType")},au=()=>!!(h==="editCategory"||h==="component"||Pl(j,"createComponent")),ou=Id(f,B,$n);if(!x||!h)return null;const ps=z(He,[h,"form"],{advanced:()=>({sections:[]}),base:()=>({sections:[]})}),iu=f==="components"||f==="component",ms={customInputs:{"allowed-types-select":Ut,"boolean-radio-group":Or,"checkbox-with-number-field":Gt,"icon-picker":Jt,"content-type-radio-group":Er,"radio-group":pt,relation:Ir,"select-category":nn,"select-component":rn,"select-components":Pr,"select-default-boolean":qt,"select-number":an,"select-date":sn,"toggle-draft-publish":Ht,"text-plural":_t,"text-singular":on,"textarea-enum":dn,...ve},componentToCreate:ht,dynamicZoneTarget:c,formErrors:Ue,isAddingAComponentToAnotherComponent:iu,isCreatingComponentWhileAddingAField:yt,mainBoxHeader:z($e,[...w,"schema","displayName"],""),modifiedData:j,naturePickerType:f,isCreating:_e,targetUid:B,forTarget:f},fs=ps.advanced({data:j,type:d,step:A,actionType:o,attributes:Ln,extensions:le,forTarget:f,contentTypeSchema:$e.contentType||{},customField:R}).sections,gs=ps.base({data:j,type:d,step:A,actionType:o,attributes:Ln,extensions:le,forTarget:f,contentTypeSchema:$e.contentType||{},customField:R}).sections,lu=Qr(gs),du=Qr(fs),uu=Object.keys(Ue).some(Y=>lu.includes(Y)),cu=Object.keys(Ue).some(Y=>du.includes(Y)),pu=z(st,[B,"schema","kind"]),mu=()=>o==="edit"&&Ln.every(({name:Y})=>Y!==j?.name),fu=()=>{mu()&&q("didEditFieldNameOnContentType")};return(0,r.jsxs)(Rs.P,{onClose:cs,labelledBy:"title",children:[(0,r.jsx)(Kt,{actionType:o,attributeName:l,categoryName:g,contentTypeKind:v,dynamicZoneTarget:c,modalType:h,forTarget:f,targetUid:B,attributeType:d,customFieldUid:u,showBackLink:C}),ds&&(0,r.jsx)(Nr,{attributes:ou,forTarget:f,kind:pu||"collectionType"}),!ds&&(0,r.jsxs)("form",{onSubmit:Fe,children:[(0,r.jsx)(ue.f,{children:(0,r.jsxs)(ce.v,{label:"todo",id:"tabs",variant:"simple",ref:F,onTabChange:Y=>{Y===1&&ru("advanced")},children:[(0,r.jsxs)(b.k,{justifyContent:"space-between",children:[(0,r.jsx)(Qt,{actionType:o,forTarget:f,kind:v,step:A,modalType:h,attributeType:d,attributeName:l,customField:R}),(0,r.jsxs)(H.m,{children:[(0,r.jsx)(H.O,{hasError:uu,children:Te({id:m("popUpForm.navContainer.base"),defaultMessage:"Basic settings"})}),(0,r.jsx)(H.O,{hasError:cu,disabled:au(),children:Te({id:m("popUpForm.navContainer.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,r.jsx)(ee.i,{}),(0,r.jsx)(y.x,{paddingTop:6,children:(0,r.jsxs)(se.n,{children:[(0,r.jsx)(se.x,{children:(0,r.jsx)(b.k,{direction:"column",alignItems:"stretch",gap:6,children:(0,r.jsx)(ln,{form:gs,formErrors:Ue,genericInputProps:ms,modifiedData:j,onChange:us})})}),(0,r.jsx)(se.x,{children:(0,r.jsx)(b.k,{direction:"column",alignItems:"stretch",gap:6,children:(0,r.jsx)(ln,{form:fs,formErrors:Ue,genericInputProps:ms,modifiedData:j,onChange:us})})})]})})]})}),(0,r.jsx)($s.m,{endActions:(0,r.jsx)(Yt,{deleteCategory:Tn,deleteContentType:$t,deleteComponent:$t,categoryName:je.name,isAttributeModal:h==="attribute",isCustomFieldModal:h==="customField",isComponentToDzModal:h==="addComponentToDynamicZone",isComponentAttribute:d==="component",isComponentModal:h==="component",isContentTypeModal:h==="contentType",isCreatingComponent:o==="create",isCreatingDz:o==="create",isCreatingComponentAttribute:j.createComponent||!1,isCreatingComponentInDz:j.createComponent||!1,isCreatingComponentWhileAddingAField:yt,isCreatingContentType:o==="create",isEditingAttribute:o==="edit",isDzAttribute:d==="dynamiczone",isEditingCategory:h==="editCategory",isInFirstComponentStep:A==="1",onSubmitAddComponentAttribute:Fe,onSubmitAddComponentToDz:Fe,onSubmitCreateComponent:Fe,onSubmitCreateContentType:Fe,onSubmitCreateDz:Fe,onSubmitEditAttribute:Fe,onSubmitEditCategory:Fe,onSubmitEditComponent:Fe,onSubmitEditContentType:Fe,onSubmitEditCustomFieldAttribute:Fe,onSubmitEditDz:Fe,onClickFinish:fu}),startActions:(0,r.jsx)(pe.z,{variant:"tertiary",onClick:cs,children:Te({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})]})},Dd=()=>e=>e[`${M.p}_dataManagerProvider`]||M.o,wd=()=>Vr(Dd(),e=>e),Bd=(e,t)=>{const n=Object.keys(e).filter(s=>{const o=z(e,s,{}),l=z(t,s,{}),d=z(o,["isTemporary"],!1),u=!Bt(o,l);return d||u});return(0,M.q)(n)},kd=(e,t)=>{const n=Jr(z(e,"schema.attributes",[]),t),s=z(e,"isTemporary",!1)?{tmpUID:e.uid}:{uid:e.uid};return Object.assign({},s,{category:e.category},jr(e.schema,"attributes"),{attributes:n})},Xr=(e,t=!1)=>{const n=z(e,"uid",null),s=Jr(z(e,"schema.attributes",[]),n),o=t?{category:z(e,"category","")}:{},l=Object.assign(o,jr(e.schema,"attributes"),{attributes:s});return delete l.uid,delete l.isTemporary,delete l.visible,delete l.restrictRelationsTo,l},Jr=(e,t)=>e.reduce((n,{name:s,...o})=>{const l=o,d=l.target===t,u=l.type==="relation",g=z(l,"targetAttribute",null);if(!d)if(u){const c=Object.assign({},l,{targetAttribute:_r(g)});n[s]=Rt(c)}else n[s]=Rt(l);if(d){const c=l.target,f=Object.assign({},l,{target:c,targetAttribute:_r(g)});n[s]=Rt(f)}if(l.customField){const c={...l,type:"customField"};n[s]=Rt(c)}return n},{}),_r=e=>e==="-"?null:e,Rt=e=>Object.keys(e).reduce((t,n)=>(e[n]!==null&&n!=="plugin"&&(t[n]=e[n]),t),{}),zd=(e,t,n,s=!1)=>Bd(e,t).map(d=>{const u=z(e,d,{});return kd(u,n)}),Wd=e=>Wl(Object.keys(e).map(t=>({visible:e[t].schema.visible,name:t,title:e[t].schema.displayName,plugin:e[t].plugin||null,uid:t,to:`/plugins/${M.p}/content-types/${t}`,kind:e[t].schema.kind,restrictRelationsTo:e[t].schema.restrictRelationsTo})).filter(t=>t!==null),t=>zl(t.title)),es=e=>e.reduce((t,n)=>(t[n.uid]=n,t),{}),Ud=(e,t,n,s)=>{const o=t.reduce((u,g)=>{const c=z(n,g,{});return u[g]=c,u},{});return{[s?"contentType":"component"]:e,components:o}},ts=e=>Object.keys(e).reduce((t,n)=>{const s=e[n].schema;return t[n]={...e[n],schema:{...s,attributes:Vd(s.attributes)}},t},{}),Vd=e=>Object.keys(e).reduce((t,n)=>(t.push({...e[n],name:n}),t),[]),qd=e=>{const t=Object.keys(e).reduce((n,s)=>{const o=z(e,[s],{}),l=o.uid;return Gd(o)&&n.push(l),n},[]);return(0,M.q)(t)},Gd=e=>z(e,["schema","attributes"],[]).some(n=>{const{type:s}=n;return s==="component"}),ns=e=>{const t=Object.keys(e).reduce((n,s)=>{const o=e?.[s]?.schema?.attributes??[],l=Hd(o);return[...n,...l]},[]);return(0,M.q)(t)},Hd=e=>e.reduce((t,n)=>{const{type:s,component:o}=n;return s==="component"&&t.push(o),t},[]),Yd=(e,t)=>{const n=Object.keys(e).map(s=>z(e,[s,...t],""));return(0,M.q)(n)},rs="did-not-kill-server",Kd="server is down";function ft(e,t){return new Promise(n=>{fetch(`${window.strapi.backendURL}/_health`,{method:"HEAD",mode:"no-cors",headers:{"Content-Type":"application/json","Keep-Alive":!1}}).then(s=>{if(s.status>=400)throw new Error(Kd);if(!t)throw new Error(rs);n(e)}).catch(s=>{setTimeout(()=>ft(e,s.message!==rs).then(n),100)})})}const Qd=e=>Object.values(e.attributes).filter(({type:n})=>n==="dynamiczone").every(({components:n})=>Array.isArray(n)&&n.length>0),ss=({children:e})=>{const t=(0,Qe.I0)(),{components:n,contentTypes:s,isLoading:o,isLoadingForDataToBeSet:l,initialData:d,modifiedData:u,reservedNames:g}=(0,Qe.v9)(wd()),c=(0,I.lm)(),{lockAppWithAutoreload:f,unlockAppWithAutoreload:h}=(0,I.Vu)(),{setCurrentStep:x}=(0,I.c1)(),{getPlugin:C}=(0,I.j1)(),{apis:v}=C(M.p),{autoReload:A}=(0,I.L7)(),{formatMessage:B}=(0,te.Z)(),{trackUsage:R}=(0,I.rS)(),{refetchPermissions:F}=(0,I.vn)(),{pathname:N}=(0,Ze.TH)(),{onCloseModal:W}=Xe(),X=(0,Ze.$B)(`/plugins/${M.p}/content-types/:uid`),de=(0,Ze.$B)(`/plugins/${M.p}/component-categories/:categoryUid/:componentUid`),be=(0,I.kY)(),{put:q,post:Te,del:J}=be,ie=(0,p.useRef)();ie.current=B;const le=A,ve=X!==null,We=ve?"contentType":"component",Re=ve?z(X,"params.uid",null):z(de,"params.componentUid",null),oe=(0,p.useRef)(),P=ve?"content-types":"components";oe.current=async()=>{try{const[{data:{data:j}},{data:{data:w}},{data:G}]=await Promise.all(["components","content-types","reserved-names"].map(_e=>be.get(`/${M.p}/${_e}`))),Ce=es(j),Ae=ts(Ce),Ne=es(w),Ve=ts(Ne);t({type:M.G,components:Ae,contentTypes:Ve,reservedNames:G})}catch(j){console.error({err:j}),c({type:"warning",message:{id:"notification.error"}})}},(0,p.useEffect)(()=>(oe.current(),()=>{t({type:M.r})}),[]),(0,p.useEffect)(()=>{!o&&Re&&At()},[o,N,Re]),(0,p.useEffect)(()=>{A||c({type:"info",message:{id:m("notification.info.autoreaload-disable")}})},[A,c]);const Cn=(j,w,G,Ce=!1,Ae,Ne=!1)=>{const Ve=Ce?M.w:M.x;t({type:Ve,attributeToSet:j,forTarget:w,targetUid:G,initialAttribute:Ae,shouldAddComponentToData:Ne})},st=({attributeToSet:j,forTarget:w,targetUid:G,initialAttribute:Ce})=>{t({type:M.A,attributeToSet:j,forTarget:w,targetUid:G,initialAttribute:Ce})},gt=({attributeToSet:j,forTarget:w,targetUid:G,initialAttribute:Ce})=>{t({type:M.E,attributeToSet:j,forTarget:w,targetUid:G,initialAttribute:Ce})},at=(j,w)=>{t({type:M.u,dynamicZoneTarget:j,componentsToAdd:w})},Tn=(j,w,G,Ce,Ae=!1)=>{const Ne=w==="contentType"?M.y:M.z;t({type:Ne,data:j,componentCategory:Ce,schemaType:w,uid:G,shouldAddComponentToData:Ae})},$t=(j,w)=>{t({type:M.C,dynamicZoneTarget:j,newComponents:w})},jn=(j,w,G="")=>{const Ce=j==="components"?M.B:M.F;j==="contentType"&&R("willDeleteFieldOfContentType"),t({type:Ce,mainDataKey:j,attributeToRemoveName:w,componentUid:G})},Mn=async j=>{try{const w=`/${M.p}/component-categories/${j}`,G=window.confirm(B({id:m("popUpWarning.bodyMessage.category.delete")}));W(),G&&(f(),await J(w),await ft(!0),await h(),await je())}catch(w){console.error({err:w}),c({type:"warning",message:{id:"notification.error"}})}finally{h()}},Rn=async()=>{try{const j=`/${M.p}/${P}/${Re}`,w=z(u,[We,"isTemporary"],!1),G=window.confirm(B({id:m(`popUpWarning.bodyMessage.${ve?"contentType":"component"}.delete`)}));if(W(),G){if(w){t({type:M.D});return}f(),await J(j),await ft(!0),await h(),await je()}}catch(j){console.error({err:j}),c({type:"warning",message:{id:"notification.error"}})}finally{h()}},$e=async(j,w)=>{try{const G=`/${M.p}/component-categories/${j}`;W(),f(),await q(G,w),await ft(!0),await h(),await je()}catch(G){console.error({err:G}),c({type:"warning",message:{id:"notification.error"}})}finally{h()}},$n=()=>{const j=Object.assign({},n,u.components);if(!ve){const G=z(u,"component",{});xr(j,z(G,["uid"],""),G)}const w=qd(j);return(0,M.q)(w)},An=()=>{const j=ns(n),w=ns(u.components||{});return(0,M.q)([...w,...j])},Sn=(j,w)=>{t({type:M.v,dzName:j,componentToRemoveIndex:w})},At=()=>{const w=z(ve?s:n,Re,{schema:{attributes:[]}}),G=(0,M.s)(w.schema.attributes,n),Ce=Ud(w,G,n,ve),Ae=z(w,"isTemporary",!1)&&Il(z(w,"schema.attributes",[]))===0;t({type:M.t,schemaToSet:Ce,hasJustCreatedSchema:Ae})},Ye=(0,p.useMemo)(()=>{const j=ve?s:n;return Re==="create-content-type"?!1:!Object.keys(j).includes(Re)&&!o},[n,s,Re,ve,o]),ht=(0,p.useMemo)(()=>{const j=Object.keys(s).filter(w=>z(s,[w,"schema","visible"],!0)).sort();return z(j,"0","create-content-type")},[s]);if(Ye)return(0,r.jsx)(Ze.l_,{to:`/plugins/${M.p}/content-types/${ht}`});const Ue=async j=>{try{const w=z(u,[We,"isTemporary"],!1),G={components:zd(u.components,n,Re,w)};if(ve){const Ne=v.forms.mutateContentTypeSchema({...Xr(u.contentType),...j},d.contentType);if(!Qd(Ne)){c({type:"warning",message:{id:m("notification.error.dynamiczone-min.validation"),defaultMessage:"At least one component is required in a dynamic zone to be able to save a content type"}});return}G.contentType=Ne,R("willSaveContentType")}else G.component=Xr(u.component,!0),R("willSaveComponent");f();const Ce=`/${M.p}/${P}`,Ae=w?Ce:`${Ce}/${Re}`;if(w?await Te(Ae,G):await q(Ae,G),await ft(!0),await h(),w&&(d.contentType?.schema.kind==="collectionType"||d.contentType?.schema.kind==="singleType")&&x("contentTypeBuilder.success"),ve){R("didSaveContentType");const Ne=z(G,["contentType","schema","name"],""),Ve=z(d,["contentType","schema","name"],"");!w&&Ne!==Ve&&R("didEditNameOfContentType")}else R("didSaveComponent");await je()}catch(w){ve||R("didNotSaveComponent"),console.error({err:w.response}),c({type:"warning",message:{id:"notification.error"}})}finally{h()}},je=async()=>{await F()},yt=(j,w,G)=>{t({type:M.U,data:j,schemaType:w,uid:G})};return(0,r.jsx)(Mr.Provider,{value:{addAttribute:Cn,addCustomFieldAttribute:st,addCreatedComponentToDynamicZone:at,allComponentsCategories:Yd(n,["category"]),changeDynamicZoneComponents:$t,components:n,componentsGroupedByCategory:Fl(n,"category"),componentsThatHaveOtherComponentInTheirAttributes:$n(),contentTypes:s,createSchema:Tn,deleteCategory:Mn,deleteData:Rn,editCategory:$e,editCustomFieldAttribute:gt,isInDevelopmentMode:le,initialData:d,isInContentTypeView:ve,modifiedData:u,nestedComponents:An(),removeAttribute:jn,removeComponentFromDynamicZone:Sn,reservedNames:g,setModifiedData:At,sortedContentTypesList:Wd(s),submitData:Ue,updateSchema:yt},children:l?(0,r.jsx)(I.dO,{}):(0,r.jsxs)(r.Fragment,{children:[e,le&&(0,r.jsx)(Pd,{})]})})};ss.propTypes={children:i.node.isRequired};const Xd=(0,p.memo)(ss),as={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,modalType:null,isOpen:!1,showBackLink:!1,kind:null,step:null,targetUid:null,customFieldUid:null},os=({children:e})=>{const[t,n]=(0,p.useState)(as),{trackUsage:s}=(0,I.rS)(),o=({attributeType:R,customFieldUid:F})=>{n(N=>({...N,actionType:"create",modalType:"customField",attributeType:R,customFieldUid:F}))},l=({attributeType:R,step:F})=>{t.forTarget==="contentType"&&s("didSelectContentTypeFieldType",{type:R}),n(N=>({...N,actionType:"create",modalType:"attribute",step:F,attributeType:R,showBackLink:!0}))},d=({dynamicZoneTarget:R,targetUid:F})=>{n(N=>({...N,dynamicZoneTarget:R,targetUid:F,modalType:"addComponentToDynamicZone",forTarget:"contentType",step:"1",actionType:"edit",isOpen:!0}))},u=({forTarget:R,targetUid:F})=>{n(N=>({...N,actionType:"create",forTarget:R,targetUid:F,modalType:"chooseAttribute",isOpen:!0,showBackLink:!1}))},g=R=>{n(F=>({...F,...R,isOpen:!0}))},c=R=>{n(F=>({...F,categoryName:R,actionType:"edit",modalType:"editCategory",isOpen:!0}))},f=({forTarget:R,targetUid:F,attributeName:N,attributeType:W,customFieldUid:X})=>{n(de=>({...de,modalType:"customField",customFieldUid:X,actionType:"edit",forTarget:R,targetUid:F,attributeName:N,attributeType:W,isOpen:!0}))},h=({forTarget:R,targetUid:F,attributeName:N,attributeType:W,step:X})=>{n(de=>({...de,modalType:"attribute",actionType:"edit",forTarget:R,targetUid:F,attributeName:N,attributeType:W,step:X,isOpen:!0}))},x=({modalType:R,forTarget:F,targetUid:N,kind:W})=>{n(X=>({...X,modalType:R,actionType:"edit",forTarget:F,targetUid:N,kind:W,isOpen:!0}))},C=()=>{n(as)},v=({forTarget:R,targetUid:F})=>{n(N=>({...N,forTarget:R,targetUid:F,modalType:"chooseAttribute"}))},A=()=>{n(R=>({...R,attributeType:"component",modalType:"attribute",step:"2"}))},B=({dynamicZoneTarget:R})=>{n(F=>({...F,dynamicZoneTarget:R,modalType:"addComponentToDynamicZone",actionType:"create",step:"1",attributeType:null,attributeName:null}))};return(0,r.jsx)(Rr.Provider,{value:{...t,onClickSelectField:l,onClickSelectCustomField:o,onCloseModal:C,onNavigateToChooseAttributeModal:v,onNavigateToAddCompoToDZModal:B,onOpenModalAddComponentsToDZ:d,onNavigateToCreateComponentStep2:A,onOpenModalAddField:u,onOpenModalCreateSchema:g,onOpenModalEditCategory:c,onOpenModalEditField:h,onOpenModalEditCustomField:f,onOpenModalEditSchema:x,setFormModalNavigationState:n},children:e})};os.propTypes={children:i.node.isRequired};const Jd=(0,p.lazy)(()=>a.e(9553).then(a.bind(a,69553))),_d=()=>{const{url:e}=(0,Ze.$B)(),{categoryUid:t}=(0,Ze.UO)();return(0,r.jsx)(p.Suspense,{fallback:(0,r.jsx)(I.dO,{}),children:(0,r.jsx)(Ze.rs,{children:(0,r.jsx)(Ze.AW,{path:`${e}/:componentUid`,children:(0,r.jsx)(Jd,{categoryId:t})})})})},is=(0,p.lazy)(()=>a.e(9553).then(a.bind(a,69553))),eu=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{formatMessage:e}=(0,te.Z)(),t=e({id:`${M.p}.plugin.name`,defaultMessage:"Content Types Builder"}),{startSection:n}=(0,I.c1)(),s=(0,p.useRef)(n);return(0,p.useEffect)(()=>{s.current&&s.current("contentTypeBuilder")},[]),(0,r.jsxs)(I.O4,{permissions:M.P.main,children:[(0,r.jsx)(Ss.q,{title:t}),(0,r.jsx)(os,{children:(0,r.jsx)(Xd,{children:(0,r.jsx)(As.A,{sideNav:(0,r.jsx)(Vl,{}),children:(0,r.jsx)(p.Suspense,{fallback:(0,r.jsx)(I.dO,{}),children:(0,r.jsxs)(Ze.rs,{children:[(0,r.jsx)(Ze.AW,{path:`/plugins/${M.p}/content-types/create-content-type`,component:is}),(0,r.jsx)(Ze.AW,{path:`/plugins/${M.p}/content-types/:uid`,component:is}),(0,r.jsx)(Ze.AW,{path:`/plugins/${M.p}/component-categories/:categoryUid`,component:_d})]})})})})})]})}},Symbol.toStringTag,{value:"Module"}))}}]);
