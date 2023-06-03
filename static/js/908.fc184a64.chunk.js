"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[908],{7908:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(9439),a=n(6907),i=n(3967),o=n(4554),s=n(9164),l=n(6314),d=n(7047),c=n(890),u=n(2791),v=n(3575),h=n(4165),f=n(5861),p=n(4942),m=n(1413),g=n(7621),Z=n(9585),w=n(4721),x=n(9504),b=n(8096),C=n(4925),j=n(8029),y=n(3466),S=n(3400),M=n(2363),R=n(6151),P=n(3710),k=n(9569),N=n(184);function A(){var e=(0,v.a)(),t=(e.isAuthenticated,e.updateUserPasswordFetch),n=(0,u.useState)({}),a=(0,r.Z)(n,2),i=a[0],o=a[1],s=(0,u.useState)(!1),A=(0,r.Z)(s,2),T=A[0],I=A[1],F=(0,u.useState)(!0),q=(0,r.Z)(F,2),W=q[0],z=q[1],D=(0,u.useState)({password:"",confirmPassword:""}),L=(0,r.Z)(D,2),V=L[0],B=L[1],H=function(){I(!T)},X=function(e){B((function(t){return(0,m.Z)((0,m.Z)({},t),{},(0,p.Z)({},e.target.name,e.target.value))}))},O=function(e){e.preventDefault()},U=function(){var e={},t=!0;return V.password||(t=!1,e.newPassword="New Password is required"),V.confirmPassword||(t=!1,e.confirmPassword="Confirm Password is required"),V.password!==V.confirmPassword&&(t=!1,e.confirmPassword="Passwords do not match"),o(e),t},E=function(){var e=(0,f.Z)((0,h.Z)().mark((function e(n){var r,a;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),U())try{z(!0),r=t(V.password),a=r.message,200===r.status?window.location.reload():o({password:a}),z(!1)}catch(i){z(!1),o({email:"Invalid email/username or password"})}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){var e=setTimeout((function(){z(!1)}),2e3);return function(){return clearTimeout(e)}}),[]),(0,N.jsx)("form",{onSubmit:E,children:(0,N.jsxs)(g.Z,{children:[W?(0,N.jsx)(Z.Z,{children:(0,N.jsx)(d.Z,{variant:"text",width:200,height:40})}):(0,N.jsx)(Z.Z,{subheader:"Update password",title:"Password"}),(0,N.jsx)(w.Z,{}),(0,N.jsx)(x.Z,{children:(0,N.jsx)(l.Z,{spacing:3,sx:{maxWidth:400},children:W?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.Z,{variant:"text",width:200,height:40}),(0,N.jsx)(d.Z,{variant:"rectangular",height:56}),(0,N.jsx)(d.Z,{variant:"rectangular",height:56})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(c.Z,{variant:"body2",sx:{color:"#f80202"},children:i.newPassword}),(0,N.jsxs)(b.Z,{fullWidth:!0,children:[(0,N.jsx)(C.Z,{htmlFor:"outlined-adornment-newpassword-login",children:"New Password"}),(0,N.jsx)(j.Z,{id:"outlined-adornment-newpassword-login",type:T?"text":"password",name:"password",value:V.password,onChange:X,endAdornment:(0,N.jsx)(y.Z,{position:"end",children:(0,N.jsx)(S.Z,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:O,edge:"end",size:"large",children:T?(0,N.jsx)(P.Z,{}):(0,N.jsx)(k.Z,{})})}),label:"password",error:!!i.password,helperText:i.password})]}),(0,N.jsx)(c.Z,{variant:"body2",sx:{color:"#f80202"},children:i.confirmPassword}),(0,N.jsxs)(b.Z,{fullWidth:!0,children:[(0,N.jsx)(C.Z,{htmlFor:"outlined-adornment-confirmpassword-login",children:"Confirm Password"}),(0,N.jsx)(j.Z,{id:"outlined-adornment-confirmpassword-login",type:T?"text":"password",name:"confirmPassword",value:V.confirmPassword,onChange:X,endAdornment:(0,N.jsx)(y.Z,{position:"end",children:(0,N.jsx)(S.Z,{"aria-label":"toggle password visibility",onClick:H,onMouseDown:O,edge:"end",size:"large",children:T?(0,N.jsx)(P.Z,{}):(0,N.jsx)(k.Z,{})})}),label:"Confirm Password",error:!!i.confirmPassword,helperText:i.confirmPassword})]})]})})}),(0,N.jsx)(w.Z,{}),W?(0,N.jsx)(M.Z,{sx:{justifyContent:"flex-end"},children:(0,N.jsx)(d.Z,{variant:"rectangular",height:40,width:100,sx:{justifyContent:"flex-end"}})}):(0,N.jsx)(M.Z,{sx:{justifyContent:"flex-end"},children:(0,N.jsx)(R.Z,{variant:"contained",onClick:E,children:"Update"})})]})})}function T(){(0,i.Z)(),(0,v.a)().user;var e=(0,u.useState)(!0),t=(0,r.Z)(e,2),n=t[0],h=t[1];return(0,u.useEffect)((function(){var e=setTimeout((function(){h(!1)}),2e3);return function(){return clearTimeout(e)}}),[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a.ql,{children:(0,N.jsx)("title",{children:"Settings | MI LIBRO"})}),(0,N.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,N.jsx)(s.Z,{maxWidth:"lg",children:(0,N.jsxs)(l.Z,{spacing:3,children:[n?(0,N.jsx)(d.Z,{variant:"text",width:200,height:40}):(0,N.jsx)(c.Z,{variant:"h4",children:"Settings"}),(0,N.jsx)(A,{})]})})})]})}},3710:function(e,t,n){var r=n(9201),a=n(184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,t,n){var r=n(9201),a=n(184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},7621:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7462),a=n(3366),i=n(2791),o=n(8182),s=n(4419),l=n(6934),d=n(1402),c=n(5527),u=n(5878),v=n(1217);function h(e){return(0,v.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var f=n(184),p=["className","raised"],m=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),g=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCard"}),i=n.className,l=n.raised,c=void 0!==l&&l,u=(0,a.Z)(n,p),v=(0,r.Z)({},n,{raised:c}),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},h,t)}(v);return(0,f.jsx)(m,(0,r.Z)({className:(0,o.Z)(g.root,i),elevation:c?8:void 0,ref:t,ownerState:v},u))}))},2363:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3366),a=n(7462),i=n(2791),o=n(8182),s=n(4419),l=n(6934),d=n(1402),c=n(5878),u=n(1217);function v(e){return(0,u.Z)("MuiCardActions",e)}(0,c.Z)("MuiCardActions",["root","spacing"]);var h=n(184),f=["disableSpacing","className"],p=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardActions"}),i=n.disableSpacing,l=void 0!==i&&i,c=n.className,u=(0,r.Z)(n,f),m=(0,a.Z)({},n,{disableSpacing:l}),g=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(n,v,t)}(m);return(0,h.jsx)(p,(0,a.Z)({className:(0,o.Z)(g.root,c),ownerState:m,ref:t},u))}))},9504:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(3366),i=n(2791),o=n(8182),s=n(4419),l=n(6934),d=n(1402),c=n(5878),u=n(1217);function v(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var h=n(184),f=["className","component"],p=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardContent"}),i=n.className,l=n.component,c=void 0===l?"div":l,u=(0,a.Z)(n,f),m=(0,r.Z)({},n,{component:c}),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},v,t)}(m);return(0,h.jsx)(p,(0,r.Z)({as:c,className:(0,o.Z)(g.root,i),ownerState:m,ref:t},u))}))},9585:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(4942),a=n(3366),i=n(7462),o=n(2791),s=n(8182),l=n(4419),d=n(890),c=n(1402),u=n(6934),v=n(5878),h=n(1217);function f(e){return(0,h.Z)("MuiCardHeader",e)}var p=(0,v.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=n(184),g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return(0,i.Z)((n={},(0,r.Z)(n,"& .".concat(p.title),t.title),(0,r.Z)(n,"& .".concat(p.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),w=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),C=o.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCardHeader"}),r=n.action,o=n.avatar,u=n.className,v=n.component,h=void 0===v?"div":v,p=n.disableTypography,C=void 0!==p&&p,j=n.subheader,y=n.subheaderTypographyProps,S=n.title,M=n.titleTypographyProps,R=(0,a.Z)(n,g),P=(0,i.Z)({},n,{component:h,disableTypography:C}),k=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,t)}(P),N=S;null==N||N.type===d.Z||C||(N=(0,m.jsx)(d.Z,(0,i.Z)({variant:o?"body2":"h5",className:k.title,component:"span",display:"block"},M,{children:N})));var A=j;return null==A||A.type===d.Z||C||(A=(0,m.jsx)(d.Z,(0,i.Z)({variant:o?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:A}))),(0,m.jsxs)(Z,(0,i.Z)({className:(0,s.Z)(k.root,u),as:h,ref:t,ownerState:P},R,{children:[o&&(0,m.jsx)(w,{className:k.avatar,ownerState:P,children:o}),(0,m.jsxs)(b,{className:k.content,ownerState:P,children:[N,A]}),r&&(0,m.jsx)(x,{className:k.action,ownerState:P,children:r})]}))}))},4721:function(e,t,n){var r=n(3366),a=n(7462),i=n(2791),o=n(8182),s=n(4419),l=n(2065),d=n(6934),c=n(1402),u=n(133),v=n(184),h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,l.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,a.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},n.children&&"vertical"!==n.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,a.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),p=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),m=i.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDivider"}),i=n.absolute,l=void 0!==i&&i,d=n.children,m=n.className,g=n.component,Z=void 0===g?d?"div":"hr":g,w=n.flexItem,x=void 0!==w&&w,b=n.light,C=void 0!==b&&b,j=n.orientation,y=void 0===j?"horizontal":j,S=n.role,M=void 0===S?"hr"!==Z?"separator":void 0:S,R=n.textAlign,P=void 0===R?"center":R,k=n.variant,N=void 0===k?"fullWidth":k,A=(0,r.Z)(n,h),T=(0,a.Z)({},n,{absolute:l,component:Z,flexItem:x,light:C,orientation:y,role:M,textAlign:P,variant:N}),I=function(e){var t=e.absolute,n=e.children,r=e.classes,a=e.flexItem,i=e.light,o=e.orientation,l=e.textAlign,d={root:["root",t&&"absolute",e.variant,i&&"light","vertical"===o&&"vertical",a&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,s.Z)(d,u.V,r)}(T);return(0,v.jsx)(f,(0,a.Z)({as:Z,className:(0,o.Z)(I.root,m),role:M,ref:t,ownerState:T},A,{children:d?(0,v.jsx)(p,{className:I.wrapper,ownerState:T,children:d}):null}))}));t.Z=m},133:function(e,t,n){n.d(t,{V:function(){return i}});var r=n(5878),a=n(1217);function i(e){return(0,a.Z)("MuiDivider",e)}var o=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},5527:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(3366),a=n(7462),i=n(2791),o=n(8182),s=n(4419),l=n(2065),d=n(6934),c=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},u=n(1402),v=n(5878),h=n(1217);function f(e){return(0,h.Z)("MuiPaper",e)}(0,v.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=n(184),m=["className","component","elevation","square","variant"],g=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,a.Z)({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!r.square&&{borderRadius:n.shape.borderRadius},"outlined"===r.variant&&{border:"1px solid ".concat((n.vars||n).palette.divider)},"elevation"===r.variant&&(0,a.Z)({boxShadow:(n.vars||n).shadows[r.elevation]},!n.vars&&"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,l.Fq)("#fff",c(r.elevation)),", ").concat((0,l.Fq)("#fff",c(r.elevation)),")")},n.vars&&{backgroundImage:null==(t=n.vars.overlays)?void 0:t[r.elevation]}))})),Z=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiPaper"}),i=n.className,l=n.component,d=void 0===l?"div":l,c=n.elevation,v=void 0===c?1:c,h=n.square,Z=void 0!==h&&h,w=n.variant,x=void 0===w?"elevation":w,b=(0,r.Z)(n,m),C=(0,a.Z)({},n,{component:d,elevation:v,square:Z,variant:x}),j=function(e){var t=e.square,n=e.elevation,r=e.variant,a=e.classes,i={root:["root",r,!t&&"rounded","elevation"===r&&"elevation".concat(n)]};return(0,s.Z)(i,f,a)}(C);return(0,p.jsx)(g,(0,a.Z)({as:d,ownerState:C,className:(0,o.Z)(j.root,i),ref:t},b))}))},7047:function(e,t,n){n.d(t,{Z:function(){return A}});var r=n(168),a=n(3366),i=n(7462),o=n(2791),s=n(8182),l=n(2554),d=n(4419);function c(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(e){return parseFloat(e)}var v=n(2065),h=n(6934),f=n(1402),p=n(5878),m=n(1217);function g(e){return(0,m.Z)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var Z,w,x,b,C,j,y,S,M=n(184),R=["animation","className","component","height","style","variant","width"],P=(0,l.F4)(C||(C=Z||(Z=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),k=(0,l.F4)(j||(j=w||(w=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),N=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=c(t.shape.borderRadius)||"px",a=u(t.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,v.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,l.iv)(y||(y=x||(x=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,l.iv)(S||(S=b||(b=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),k,(n.vars||n).palette.action.hover)})),A=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,o=void 0===r?"pulse":r,l=n.className,c=n.component,u=void 0===c?"span":c,v=n.height,h=n.style,p=n.variant,m=void 0===p?"text":p,Z=n.width,w=(0,a.Z)(n,R),x=(0,i.Z)({},n,{animation:o,component:u,variant:m,hasChildren:Boolean(w.children)}),b=function(e){var t=e.classes,n=e.variant,r=e.animation,a=e.hasChildren,i=e.width,o=e.height,s={root:["root",n,r,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,d.Z)(s,g,t)}(x);return(0,M.jsx)(N,(0,i.Z)({as:u,ref:t,className:(0,s.Z)(b.root,l),ownerState:x},w,{style:(0,i.Z)({width:Z,height:v},h)}))}))}}]);
//# sourceMappingURL=908.fc184a64.chunk.js.map