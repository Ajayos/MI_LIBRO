"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[710],{7495:function(e,n,r){r.r(n),r.d(n,{default:function(){return re}});var t=r(4165),i=r(5861),a=r(9439),o=r(2791),l=r(7621),s=r(9281),c=r(9836),d=r(3382),h=r(5855),u=r(3994),x=r(7047),Z=r(9174),p=r(6314),g=r(3044),m=r(890),j=r(3400),f=r(9617),v=r(3786),b=r(6812),y=r(3579),w=r(4860),P=r(9785),S=r(1413),k=r(6890),C=r(720),R=r(4554),I=r(184),D={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function O(e){var n=e.order,r=e.orderBy,t=e.rowCount,i=e.headLabel,a=e.numSelected,o=e.onRequestSort,l=e.onSelectAllClick;return(0,I.jsx)(k.Z,{children:(0,I.jsxs)(h.Z,{children:[(0,I.jsx)(u.Z,{padding:"checkbox",children:(0,I.jsx)(Z.Z,{indeterminate:a>0&&a<t,checked:t>0&&a===t,onChange:l})}),i.map((function(e){return(0,I.jsx)(u.Z,{align:e.alignRight?"right":"left",sortDirection:r===e.id&&n,children:(0,I.jsxs)(C.Z,{hideSortIcon:!0,active:r===e.id,direction:r===e.id?n:"asc",onClick:(t=e.id,function(e){o(e,t)}),children:[e.label,r===e.id?(0,I.jsx)(R.Z,{sx:(0,S.Z)({},D),children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t}))]})})}var F=r(6934),A=r(2065),z=r(4663),E=r(8029),N=r(3466),q=r(1703),B=(0,F.ZP)(z.Z)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),L=(0,F.ZP)(E.Z)((function(e){var n=e.theme;return{width:240,transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:n.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat((0,A.Fq)(n.palette.grey[500],.32)," !important")}}}));function W(e){var n=e.numSelected,r=e.filterName,t=e.onFilterName;return(0,I.jsx)(B,{sx:(0,S.Z)({},n>0&&{color:"primary.main",bgcolor:"primary.lighter"}),children:n>0?(0,I.jsxs)(m.Z,{component:"div",variant:"subtitle1",children:[n," selected"]}):(0,I.jsx)(L,{value:r,onChange:t,placeholder:"Search user...",startAdornment:(0,I.jsx)(N.Z,{position:"start",children:(0,I.jsx)(q.Z,{})})})})}var M=r(6907),T=r(9164),U=r(2898),H=r(7247),G=r(1286),V=r(1889),X=r(4721),J=r(493),K=r(5021),Q=r(9900),Y=function(e){var n=e.user,r=n.name,t=n.email,i=n.phoneNumber,a=n.dob,o=n.age,l=n.education,s=n.address,c=n.place,d=n.contactDetails,h=n.returnDate;return(0,I.jsx)(R.Z,{p:2,minWidth:400,children:(0,I.jsxs)(V.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(V.ZP,{item:!0,children:(0,I.jsx)(g.Z,{alt:r,src:n.pic})}),(0,I.jsxs)(V.ZP,{item:!0,xs:12,sm:!0,container:!0,direction:"column",children:[(0,I.jsxs)(V.ZP,{item:!0,xs:!0,children:[(0,I.jsx)(m.Z,{variant:"subtitle1",children:r}),(0,I.jsx)(m.Z,{variant:"body2",children:t}),(0,I.jsx)(m.Z,{variant:"body2",children:i})]}),(0,I.jsxs)(V.ZP,{item:!0,xs:!0,children:[(0,I.jsx)(m.Z,{variant:"subtitle2",children:"Personal Details"}),(0,I.jsx)(X.Z,{}),(0,I.jsxs)(J.Z,{dense:!0,children:[(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Name",secondary:r})}),(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Phone",secondary:i})}),(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Date of Birth",secondary:a})}),(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Age",secondary:o})}),(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Education",secondary:l})}),(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Address",secondary:s})}),(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Place",secondary:c})}),(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Contact Details",secondary:d})}),(0,I.jsx)(K.ZP,{children:(0,I.jsx)(Q.Z,{primary:"Return Date",secondary:h})})]})]})]})]})})},$=r(3575),_=r(3026),ee=[{id:"name",label:"Name",alignRight:!1},{id:"email",label:"Email",alignRight:!1},{id:"phone",label:"Phone",alignRight:!1},{id:"status",label:"Status",alignRight:!1},{id:"seen",label:"Seen",alignRight:!1},{id:"actions",label:"Actions",alignRight:!0}],ne=[];var re=function(){var e=(0,$.a)(),n=(e.isAuthenticated,e.IsPermit),r=(e.user,e.GetDashboradData,e.adminHomeData,(0,o.useState)(ne)),S=(0,a.Z)(r,2),k=S[0],C=S[1],R=(0,o.useState)(""),D=(0,a.Z)(R,2),F=D[0],A=D[1],z=(0,o.useState)([]),E=(0,a.Z)(z,2),N=E[0],q=E[1],B=(0,o.useState)("asc"),L=(0,a.Z)(B,2),V=L[0],X=L[1],J=(0,o.useState)(""),K=(0,a.Z)(J,2),Q=K[0],re=K[1],te=(0,o.useState)(0),ie=(0,a.Z)(te,2),ae=ie[0],oe=ie[1],le=(0,o.useState)(10),se=(0,a.Z)(le,2),ce=se[0],de=se[1],he=(0,o.useState)(null),ue=(0,a.Z)(he,2),xe=ue[0],Ze=ue[1],pe=(0,o.useState)(null),ge=(0,a.Z)(pe,2),me=ge[0],je=ge[1],fe=(0,o.useState)(!0),ve=(0,a.Z)(fe,2),be=ve[0],ye=ve[1];(0,o.useEffect)((function(){n(!0);var e=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.Z.get("/admins/users");case 3:n=e.sent,C(n.data),ye(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error: ",e.t0),ye(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var we=function(e){Ze(e.currentTarget)},Pe=function(){Ze(null)},Se=k.filter((function(e){return e.name.toLowerCase().includes(F.toLowerCase())||e.email.toLowerCase().includes(F.toLowerCase())})),ke=ce-Math.min(ce,Se.length-ae*ce),Ce=0===Se.length;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(M.ql,{children:(0,I.jsx)("title",{children:"User | MI LIBRO"})}),(0,I.jsx)(T.Z,{children:(0,I.jsxs)(l.Z,{children:[(0,I.jsx)(W,{numSelected:N.length,filterName:F,onFilterName:function(e){A(e.target.value)}}),(0,I.jsx)(P.Z,{children:(0,I.jsx)(s.Z,{sx:{minWidth:800},children:(0,I.jsxs)(c.Z,{children:[(0,I.jsx)(O,{order:V,orderBy:Q,headLabel:ee,rowCount:ne.length,numSelected:N.length,onRequestSort:function(e){X(Q===e&&"asc"===V?"desc":"asc"),re(e)},onSelectAllClick:function(e){if(e.target.checked){var n=k.map((function(e){return e.name}));q(n)}else q([])}}),(0,I.jsxs)(d.Z,{children:[be?(0,I.jsx)(h.Z,{children:(0,I.jsxs)(u.Z,{colSpan:7,children:[(0,I.jsx)(x.Z,{animation:"wave",height:50}),(0,I.jsx)(x.Z,{animation:"wave",height:50}),(0,I.jsx)(x.Z,{animation:"wave",height:50}),(0,I.jsx)(x.Z,{animation:"wave",height:50}),(0,I.jsx)(x.Z,{animation:"wave",height:50})]})}):Se.slice(ae*ce,ae*ce+ce).map((function(e){var n=e.id,r=e.name,t=(e.status,e.pic),i=e.phoneNumber,a=e.email,o=e.seen,l=e.access,s=-1!==N.indexOf(r);return(0,I.jsxs)(h.Z,{hover:!0,tabIndex:-1,role:"checkbox",selected:s,children:[(0,I.jsx)(u.Z,{padding:"checkbox",children:(0,I.jsx)(Z.Z,{checked:s,onChange:function(e){return function(e,n){var r=N.indexOf(n),t=[];-1===r?t=t.concat(N,n):0===r?t=t.concat(N.slice(1)):r===N.length-1?t=t.concat(N.slice(0,-1)):r>0&&(t=t.concat(N.slice(0,r),N.slice(r+1))),q(t)}(0,r)}})}),(0,I.jsx)(u.Z,{component:"th",scope:"row",padding:"none",children:(0,I.jsxs)(p.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,I.jsx)(g.Z,{alt:r,src:t}),(0,I.jsx)(m.Z,{variant:"subtitle2",noWrap:!0,children:r})]})}),(0,I.jsx)(u.Z,{align:"left",children:a}),(0,I.jsx)(u.Z,{align:"left",children:i}),(0,I.jsx)(u.Z,{align:"center",children:(0,I.jsx)(w.Z,{variant:"filled",color:l?"success":"error",children:l?"Access":"Blocked"})}),(0,I.jsx)(u.Z,{align:"left",children:o}),(0,I.jsxs)(u.Z,{align:"right",children:[(0,I.jsx)(j.Z,{"aria-label":"View Details",onClick:function(){return function(e){je(e)}(e)},children:(0,I.jsx)(y.Z,{})}),(0,I.jsx)(j.Z,{"aria-label":"Edit User",onClick:function(){return function(e){console.log("Edit user:",e)}(e)},children:(0,I.jsx)(G.Z,{})}),(0,I.jsx)(j.Z,{"aria-label":"Delete User",onClick:we,children:(0,I.jsx)(U.Z,{})}),(0,I.jsx)(f.ZP,{open:null!==xe&&xe===e.id,anchorEl:xe,onClose:Pe,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,I.jsxs)(v.Z,{onClick:function(){return function(e){console.log("Delete user:",e)}(e)},children:[(0,I.jsx)(H.Z,{color:"error"}),"Delete User"]})})]})]},n)})),ke>0&&(0,I.jsx)(h.Z,{style:{height:53*ke},children:(0,I.jsx)(u.Z,{colSpan:7})}),Ce&&!be&&(0,I.jsx)(h.Z,{children:(0,I.jsx)(u.Z,{align:"center",colSpan:7,sx:{py:3},children:"No users found."})})]})]})})}),!Ce&&!be&&(0,I.jsx)(b.Z,{rowsPerPageOptions:[10,25,50,100],component:"div",count:Se.length,rowsPerPage:ce,page:ae,onPageChange:function(e,n){oe(n)},onRowsPerPageChange:function(e){de(parseInt(e.target.value,10)),oe(0)}})]})}),(0,I.jsx)(f.ZP,{open:null!==me,anchorEl:me,onClose:function(){je(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:me&&(0,I.jsx)(Y,{user:me})})]})}},4860:function(e,n,r){r.d(n,{Z:function(){return x}});var t=r(1413),i=r(5987),a=r(2791),o=r(3967),l=r(4554),s=r(6934),c=r(2065),d=(0,s.ZP)(l.Z)((function(e){var n=e.theme,r=e.ownerState,i="light"===n.palette.mode,a="filled"===r.variant,o="outlined"===r.variant,l="soft"===r.variant,s=(0,t.Z)({},"default"===r.color&&(0,t.Z)((0,t.Z)({},o&&{backgroundColor:"transparent",color:n.palette.text.primary,border:"1px solid ".concat((0,c.Fq)(n.palette.grey[500],.32))}),l&&{color:i?n.palette.text.primary:n.palette.common.white,backgroundColor:(0,c.Fq)(n.palette.grey[500],.16)})),d=(0,t.Z)({},"default"!==r.color&&(0,t.Z)((0,t.Z)((0,t.Z)({},a&&{color:n.palette[r.color].contrastText,backgroundColor:n.palette[r.color].main}),o&&{backgroundColor:"transparent",color:n.palette[r.color].main,border:"1px solid ".concat(n.palette[r.color].main)}),l&&{color:n.palette[r.color][i?"dark":"light"],backgroundColor:(0,c.Fq)(n.palette[r.color].main,.16)}));return(0,t.Z)((0,t.Z)({height:24,minWidth:22,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:n.spacing(0,1),color:n.palette.grey[800],fontSize:n.typography.pxToRem(12),fontFamily:n.typography.fontFamily,backgroundColor:n.palette.grey[300],fontWeight:n.typography.fontWeightBold},d),s)})),h=r(184),u=["children","color","variant","startIcon","endIcon","sx"],x=(0,a.forwardRef)((function(e,n){var r=e.children,a=e.color,s=void 0===a?"default":a,c=e.variant,x=void 0===c?"soft":c,Z=e.startIcon,p=e.endIcon,g=e.sx,m=(0,i.Z)(e,u),j=(0,o.Z)(),f={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,h.jsxs)(d,(0,t.Z)((0,t.Z)({ref:n,component:"span",ownerState:{color:s,variant:x},sx:(0,t.Z)((0,t.Z)((0,t.Z)({},Z&&{pl:.75}),p&&{pr:.75}),g),theme:j},m),{},{children:[Z&&(0,h.jsxs)(l.Z,{sx:(0,t.Z)({mr:.75},f),children:[" ",Z," "]}),r,p&&(0,h.jsxs)(l.Z,{sx:(0,t.Z)({ml:.75},f),children:[" ",p," "]})]}))}))},9785:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(1413),i=r(5987),a=r(2791),o=r(4554),l=r(9953),s=r(6934),c=r(2065),d=(0,s.ZP)("div")((function(){return{flexGrow:1,height:"100%",overflow:"hidden"}})),h=(0,s.ZP)(l.Z)((function(e){var n=e.theme;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,c.Fq)(n.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-track.simplebar-vertical":{width:10},"& .simplebar-track.simplebar-horizontal .simplebar-scrollbar":{height:6},"& .simplebar-mask":{zIndex:"inherit"}}})),u=r(184),x=["children","sx"];function Z(e){var n=e.children,r=e.sx,a=(0,i.Z)(e,x),l="undefined"===typeof navigator?"SSR":navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l)?(0,u.jsx)(o.Z,(0,t.Z)((0,t.Z)({sx:(0,t.Z)({overflowX:"auto"},r)},a),{},{children:n})):(0,u.jsx)(d,{children:(0,u.jsx)(h,(0,t.Z)((0,t.Z)({timeout:500,clickOnTrack:!1,sx:r},a),{},{children:n}))})}var p=(0,a.memo)(Z)}}]);
//# sourceMappingURL=710.7b155828.chunk.js.map