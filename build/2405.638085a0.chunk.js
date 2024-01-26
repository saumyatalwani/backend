"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2405],{1296:(T,v,t)=>{t.d(v,{A:()=>e});var i=t(74081),d=t(14094),a=t(52185);const o=(0,d.default)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,p=(0,d.default)(a.x)`
  overflow-x: hidden;
`,e=({sideNav:s,children:h})=>(0,i.jsxs)(o,{hasSideNav:Boolean(s),children:[s,(0,i.jsx)(p,{paddingBottom:10,children:h})]})},72405:(T,v,t)=>{t.r(v),t.d(v,{ProvidersPage:()=>le,default:()=>$e});var i=t(74081),d=t(27279),a=t(94707),o=t(19098),p=t(81565),e=t(37386),s=t(23851),h=t(85898),M=t(90529),L=t(49899),A=t(3785),l=t(51413),$=t(1296),K=t(796),u=t(34041),n=t(49969),N=t(92712),H=t(7609),ie=t(66016),I=t(9465),Z=t(78565),pe=t(17992),he=t(84428),me=t(2667),g=t(94486),fe=t(9663),ve=t(51943),Q=t(61020),V=t(40464),Ee=t(12692),Pe=t(64360),Me=t(71563),r=t(70627),m=t(63068),Re=t(10124),c=t(47853);const X=({description:E,disabled:U,intlLabel:R,error:y,name:x,onChange:B,placeholder:f,providerToEditName:C,type:D,value:b})=>{const{formatMessage:P}=(0,Q.Z)(),j=x==="noName"?`${window.strapi.backendURL}/api/connect/${C}/callback`:b,W=P({id:R.id,defaultMessage:R.defaultMessage},{provider:C,...R.values}),O=E?P({id:E.id,defaultMessage:E.defaultMessage},{provider:C,...E.values}):"";if(D==="bool")return(0,i.jsx)(a.s,{"aria-label":x,checked:b,disabled:U,hint:O,label:W,name:x,offLabel:P({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:P({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:z=>{B({target:{name:x,value:z.target.checked}})}});const q=f?P({id:f.id,defaultMessage:f.defaultMessage},{...f.values}):"",ee=y?P({id:y,defaultMessage:y}):"";return(0,i.jsx)(o.o,{"aria-label":x,disabled:U,error:ee,label:W,name:x,onChange:B,placeholder:q,type:D,value:j})};X.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},X.propTypes={description:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}),disabled:r.bool,error:r.string,intlLabel:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}).isRequired,name:r.string.isRequired,onChange:r.func.isRequired,placeholder:r.shape({id:r.string.isRequired,defaultMessage:r.string.isRequired,values:r.object}),providerToEditName:r.string.isRequired,type:r.string.isRequired,value:r.oneOfType([r.bool,r.string])};const G=({headerBreadcrumbs:E,initialData:U,isSubmiting:R,layout:y,isOpen:x,onSubmit:B,onToggle:f,providerToEditName:C})=>{const{formatMessage:D}=(0,Q.Z)();return x?(0,i.jsxs)(p.P,{onClose:f,labelledBy:"title",children:[(0,i.jsx)(e.x,{children:(0,i.jsx)(Ee.O,{label:E.join(", "),children:E.map((b,P,j)=>(0,i.jsx)(Pe.$,{isCurrent:P===j.length-1,children:b},b))})}),(0,i.jsx)(Me.J9,{onSubmit:b=>B(b),initialValues:U,validationSchema:y.schema,validateOnChange:!1,children:({errors:b,handleChange:P,values:j})=>(0,i.jsxs)(g.l0,{children:[(0,i.jsx)(s.f,{children:(0,i.jsx)(h.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,i.jsx)(M.r,{gap:5,children:y.form.map(W=>W.map(O=>(0,i.jsx)(L.P,{col:O.size,xs:12,children:(0,i.jsx)(X,{...O,error:b[O.name],onChange:P,value:j[O.name],providerToEditName:C})},O.name)))})})}),(0,i.jsx)(A.m,{startActions:(0,i.jsx)(l.z,{variant:"tertiary",onClick:f,type:"button",children:D({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,i.jsx)(l.z,{type:"submit",loading:R,children:D({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};G.defaultProps={initialData:null,providerToEditName:null},G.propTypes={headerBreadcrumbs:r.arrayOf(r.string).isRequired,initialData:r.object,layout:r.shape({form:r.arrayOf(r.array),schema:r.object}).isRequired,isOpen:r.bool.isRequired,isSubmiting:r.bool.isRequired,onSubmit:r.func.isRequired,onToggle:r.func.isRequired,providerToEditName:r.string};const ae={id:(0,m.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ne={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},k={id:(0,m.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,m.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},re={id:(0,m.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,m.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},S={id:(0,m.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},de={id:(0,m.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:k,size:6}]],schema:c.Ry().shape({enabled:c.Xg().required(g.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:k,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:ne,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:c.Ry().shape({enabled:c.Xg().required(g.I0.required),key:c.Z_().when("enabled",{is:!0,then:c.Z_().required(g.I0.required),otherwise:c.Z_()}),secret:c.Z_().when("enabled",{is:!0,then:c.Z_().required(g.I0.required),otherwise:c.Z_()}),callback:c.Z_().when("enabled",{is:!0,then:c.Z_().required(g.I0.required),otherwise:c.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:k,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,m.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:S,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,m.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,m.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:ne,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:c.Ry().shape({enabled:c.Xg().required(g.I0.required),key:c.Z_().when("enabled",{is:!0,then:c.Z_().required(g.I0.required),otherwise:c.Z_()}),secret:c.Z_().when("enabled",{is:!0,then:c.Z_().required(g.I0.required),otherwise:c.Z_()}),subdomain:c.Z_().when("enabled",{is:!0,then:c.Z_().required(g.I0.required),otherwise:c.Z_()}),callback:c.Z_().when("enabled",{is:!0,then:c.Z_().required(g.I0.required),otherwise:c.Z_()})})}},le=()=>{const{formatMessage:E,locale:U}=(0,Q.Z)(),R=(0,V.useQueryClient)(),{trackUsage:y}=(0,g.rS)(),[x,B]=d.useState(!1),[f,C]=d.useState(null),D=(0,g.lm)(),{lockApp:b,unlockApp:P}=(0,g.o1)(),{get:j,put:W}=(0,g.kY)(),{formatAPIError:O}=(0,g.So)(),q=(0,g.Xe)(U,{sensitivity:"base"});(0,g.go)();const{isLoading:ee,allowedActions:{canUpdate:z}}=(0,g.ss)({update:m.P.updateProviders}),{isLoading:be,data:se}=(0,V.useQuery)(["users-permissions","get-providers"],async()=>{const{data:_}=await j("/users-permissions/providers");return _},{initialData:{}}),ce=(0,V.useMutation)(_=>W("/users-permissions/providers",_),{async onSuccess(){await R.invalidateQueries(["users-permissions","providers"]),D({type:"success",message:{id:(0,m.g)("notification.success.submit")}}),y("didEditAuthenticationProvider"),te(),P()},onError(_){D({type:"warning",message:O(_)}),P()},refetchActive:!1}),F=Object.entries(se).reduce((_,[w,De])=>{const{icon:ge,enabled:Te,subdomain:Le}=De;return _.push({name:w,icon:ge==="envelope"?["fas","envelope"]:["fab",ge],enabled:Te,subdomain:Le}),_},[]).sort((_,w)=>q.compare(_.name,w.name)),xe=be||ee,ue=d.useMemo(()=>f?!!F.find(w=>w.name===f)?.subdomain:!1,[F,f]),ye=d.useMemo(()=>f==="email"?Y.email:ue?Y.providersWithSubdomain:Y.providers,[f,ue]),te=()=>{B(_=>!_)},_e=_=>{z&&(C(_.name),te())},Oe=async _=>{b(),y("willEditAuthenticationProvider"),ce.mutate({providers:{...se,[f]:_}})};return(0,i.jsxs)($.A,{children:[(0,i.jsx)(g.SL,{name:E({id:(0,m.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,i.jsxs)(K.o,{children:[(0,i.jsx)(u.T,{title:E({id:(0,m.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),xe?(0,i.jsx)(g.dO,{}):(0,i.jsx)(n.D,{children:(0,i.jsxs)(N.i,{colCount:3,rowCount:F.length+1,children:[(0,i.jsx)(H.h,{children:(0,i.jsxs)(ie.Tr,{children:[(0,i.jsx)(I.Th,{children:(0,i.jsx)(Z.Z,{variant:"sigma",textColor:"neutral600",children:E({id:"global.name",defaultMessage:"Name"})})}),(0,i.jsx)(I.Th,{children:(0,i.jsx)(Z.Z,{variant:"sigma",textColor:"neutral600",children:E({id:(0,m.g)("Providers.status"),defaultMessage:"Status"})})}),(0,i.jsx)(I.Th,{children:(0,i.jsx)(Z.Z,{variant:"sigma",children:(0,i.jsx)(pe.T,{children:E({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,i.jsx)(he.p,{children:F.map(_=>(0,i.jsxs)(ie.Tr,{...(0,g.X7)({fn:()=>_e(_),condition:z}),children:[(0,i.jsx)(I.Td,{width:"45%",children:(0,i.jsx)(Z.Z,{fontWeight:"semiBold",textColor:"neutral800",children:_.name})}),(0,i.jsx)(I.Td,{width:"65%",children:(0,i.jsx)(Z.Z,{textColor:_.enabled?"success600":"danger600","data-testid":`enable-${_.name}`,children:_.enabled?E({id:"global.enabled",defaultMessage:"Enabled"}):E({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,i.jsx)(I.Td,{...g.UW,children:z&&(0,i.jsx)(me.h,{onClick:()=>_e(_),noBorder:!0,icon:(0,i.jsx)(fe.Z,{}),label:"Edit"})})]},_.name))})]})})]}),(0,i.jsx)(G,{initialData:se[f],isOpen:x,isSubmiting:ce.isLoading,layout:ye,headerBreadcrumbs:[E({id:(0,m.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),ve(f)],onToggle:te,onSubmit:Oe,providerToEditName:f})]})},$e=()=>(0,i.jsx)(g.O4,{permissions:m.P.readProviders,children:(0,i.jsx)(le,{})})},77919:(T,v,t)=>{t.d(v,{x:()=>p});var i=t(14094),d=t(52529),a=t(812);const o={color:!0,cursor:!0,height:!0,width:!0},p=i.default.div.withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  // Font
  font-size: ${({fontSize:e,theme:s})=>(0,a.$)(s.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:s})=>(0,a.$)(e.colors,s,s)};
  color: ${({theme:e,color:s})=>(0,a.$)(e.colors,s,void 0)};

  // Spaces
  ${({theme:e,padding:s})=>(0,d.Z)("padding",s,e)}
  ${({theme:e,paddingTop:s})=>(0,d.Z)("padding-top",s,e)}
  ${({theme:e,paddingRight:s})=>(0,d.Z)("padding-right",s,e)}
  ${({theme:e,paddingBottom:s})=>(0,d.Z)("padding-bottom",s,e)}
  ${({theme:e,paddingLeft:s})=>(0,d.Z)("padding-left",s,e)}
  ${({theme:e,marginLeft:s})=>(0,d.Z)("margin-left",s,e)}
  ${({theme:e,marginRight:s})=>(0,d.Z)("margin-right",s,e)}
  ${({theme:e,marginTop:s})=>(0,d.Z)("margin-top",s,e)}
  ${({theme:e,marginBottom:s})=>(0,d.Z)("margin-bottom",s,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:s})=>s?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:s})=>s?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:s,borderRadius:h})=>s?e.borderRadius:h};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:s})=>(0,a.$)(s.colors,e,void 0)};
  border: ${({theme:e,borderColor:s,borderStyle:h,borderWidth:M})=>{if(s&&!h&&typeof M>"u")return`1px solid ${e.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:s})=>(0,a.$)(e.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:s})=>e?e(s):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  right: ${({right:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  top: ${({top:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  bottom: ${({bottom:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  min-width: ${({minWidth:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  height: ${({height:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:s})=>(0,a.$)(s.spaces,e,e)};
  min-height: ${({minHeight:e,theme:s})=>(0,a.$)(s.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:s})=>(0,a.$)(e.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},41101:(T,v,t)=>{t.d(v,{Z:()=>K});var i=t(14094);const d="alpha",a="beta",o="delta",p="epsilon",e="omega",s="pi",h="sigma",M=[d,a,o,p,e,s,h],L=({ellipsis:u=!1})=>u&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,A=({variant:u=e,theme:n})=>{switch(u){case d:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case a:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case p:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case s:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case h:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var l=t(812);const $={fontSize:!0,fontWeight:!0},K=i.default.span.withConfig({shouldForwardProp:(u,n)=>!$[u]&&n(u)})`
  ${A}
  ${L}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:u,fontWeight:n})=>(0,l.$)(u.fontWeights,n,void 0)};
  font-size: ${({theme:u,fontSize:n})=>(0,l.$)(u.fontSizes,n,void 0)};
  line-height: ${({theme:u,lineHeight:n})=>(0,l.$)(u.lineHeights,n,n)};
  color: ${({theme:u,textColor:n})=>u.colors[n||"neutral800"]};
  text-align: ${({textAlign:u})=>u};
  text-decoration: ${({textDecoration:u})=>u};
  text-transform: ${({textTransform:u})=>u};
`},52529:(T,v,t)=>{t.d(v,{Z:()=>i});const i=(d,a,o)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((h,M,L)=>{if(M)switch(L){case 0:return`${h}${d}: ${o.spaces[M]};`;case 1:return`${h}${o.mediaQueries.tablet}{${d}: ${o.spaces[M]};}`;case 2:return`${h}${o.mediaQueries.mobile}{${d}: ${o.spaces[M]};}`;default:return h}return h},"");const p=o.spaces[a]??a;return`${d}: ${p};`}},812:(T,v,t)=>{t.d(v,{$:()=>a});function i(o,p){return typeof o=="string"?!1:p in o}function d(o){return o&&typeof o=="object"&&!Array.isArray(o)}function a(o,p,e){return p&&i(o,p)?o[p]:e}},12692:(T,v,t)=>{t.d(v,{O:()=>A});var i=t(74081),d=t(27279),a=t(14094),o=t(77919),p=t(41101);const e=()=>(0,i.jsx)(o.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,i.jsx)(p.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var s=t(52529);const h={direction:!0},M=(0,a.default)(o.x).withConfig({shouldForwardProp:(l,$)=>!h[l]&&$(l)})`
  align-items: ${({alignItems:l="center"})=>l};
  display: ${({display:l="flex",inline:$})=>$?"inline-flex":l};
  flex-direction: ${({direction:l="row"})=>l};
  flex-shrink: ${({shrink:l})=>l};
  flex-wrap: ${({wrap:l})=>l};
  ${({gap:l,theme:$})=>(0,s.Z)("gap",l,$)};
  justify-content: ${({justifyContent:l})=>l};
`,L=(0,a.default)(M)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:l})=>`calc(-1*${l.spaces[2]})`};
  }
`,A=({label:l,children:$,...K})=>{const u=d.Children.toArray($);return(0,i.jsx)(o.x,{"aria-label":l,...K,children:(0,i.jsx)(L,{as:"ol",children:d.Children.map(u,(n,N)=>{const H=u.length>1&&N+1<u.length;return(0,i.jsxs)(M,{inline:!0,as:"li",children:[n,H&&(0,i.jsx)(e,{})]})})})})};A.displayName="Breadcrumbs"},64360:(T,v,t)=>{t.d(v,{$:()=>o});var i=t(74081),d=t(77919),a=t(41101);const o=({children:p,isCurrent:e=!1,...s})=>(0,i.jsx)(d.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,i.jsx)(a.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...s,children:p})});o.displayName="Crumb"}}]);
