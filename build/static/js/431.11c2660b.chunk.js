"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[431],{2431:function(e,r,n){n.r(r);var t=n(4165),a=n(1413),i=n(5861),s=n(9439),c=n(2791),o=n(220),l=n(3400),d=n(7621),u=n(5473),x=n(3579),h=n(6907),Z=n(9164),f=n(2814),j=n(3575),m=n(3026),p=n(4268),y=n(39),v=n(2654),P=n(184);r.default=function(){var e=(0,j.a)(),r=(e.GetDashboradData,e.adminHomeData,(0,c.useState)([])),n=(0,s.Z)(r,2),D=n[0],b=n[1],w=(0,c.useState)(null),g=(0,s.Z)(w,2),M=g[0],N=g[1],k=(0,c.useState)(!0),C=(0,s.Z)(k,2),S=(C[0],C[1]),A=(0,c.useState)(!1),E=(0,s.Z)(A,2);E[0],E[1];(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.post("/users/mybooks");case 3:r=e.sent,console.log("Response: ",r.data),n=r.data.map((function(e){return(0,a.Z)({id:e._id},e)})),b(n),S(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error: ",e.t0),S(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var z=[{field:"image",headerName:"Avatar",flex:.5,renderCell:function(e){return(0,P.jsx)(o.Z,{src:e.row.pic,alt:e.row.name})}},{field:"title",headerName:"Title",flex:1},{field:"author",headerName:"Author",flex:1},{field:"genre",headerName:"Genre",flex:1},{field:"status",headerName:"Status",flex:1},{field:"publicationDate",headerName:"Published Date",flex:2,valueGetter:function(e){return(0,v.Mu)(e.row.publicationDate)}},{field:"actions",headerName:"Actions",flex:1,renderCell:function(e){return(0,P.jsx)(l.Z,{onClick:function(){return r=e.row,void N(r);var r},color:"primary",children:(0,P.jsx)(x.Z,{})})}}];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(h.ql,{children:(0,P.jsx)("title",{children:"User | MI LIBRO"})}),(0,P.jsx)(Z.Z,{children:(0,P.jsx)(d.Z,{children:(0,P.jsx)(p._,{rows:D,columns:z,components:{Toolbar:y.n}})})}),(0,P.jsx)(u.ZP,{open:null!==M,anchorEl:M,onClose:function(){N(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:M&&(0,P.jsx)(f.Z,{user:M})})]})}},2814:function(e,r,n){n(2791);var t=n(4554),a=n(1889),i=n(220),s=n(890),c=n(4721),o=n(493),l=n(5021),d=n(9900),u=n(184);r.Z=function(e){var r=e.user,n=r.name,x=r.email,h=r.phoneNumber,Z=r.dob,f=r.age,j=r.education,m=r.address,p=r.place,y=r.contactDetails,v=r.returnDate;return(0,u.jsx)(t.Z,{p:2,minWidth:400,children:(0,u.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,u.jsx)(a.ZP,{item:!0,children:(0,u.jsx)(i.Z,{alt:n,src:r.pic})}),(0,u.jsxs)(a.ZP,{item:!0,xs:12,sm:!0,container:!0,direction:"column",children:[(0,u.jsxs)(a.ZP,{item:!0,xs:!0,children:[(0,u.jsx)(s.Z,{variant:"subtitle1",children:n}),(0,u.jsx)(s.Z,{variant:"body2",children:x}),(0,u.jsx)(s.Z,{variant:"body2",children:h})]}),(0,u.jsxs)(a.ZP,{item:!0,xs:!0,children:[(0,u.jsx)(s.Z,{variant:"subtitle2",children:"Personal Details"}),(0,u.jsx)(c.Z,{}),(0,u.jsxs)(o.Z,{dense:!0,children:[(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Name",secondary:n})}),(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Phone",secondary:h})}),(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Date of Birth",secondary:Z})}),(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Age",secondary:f})}),(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Education",secondary:j})}),(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Address",secondary:m})}),(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Place",secondary:p})}),(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Contact Details",secondary:y})}),(0,u.jsx)(l.ZP,{children:(0,u.jsx)(d.Z,{primary:"Return Date",secondary:v})})]})]})]})]})})}},2654:function(e,r,n){n.d(r,{DY:function(){return c},Mu:function(){return i},zM:function(){return s}});var t=n(1482),a=n(5939);function i(e,r){var n=r||"dd MMM yyyy";return e?(0,t.Z)(new Date(e),n):""}function s(e,r){var n=r||"dd MMM yyyy p";return e?(0,t.Z)(new Date(e),n):""}function c(e){return e?(0,a.Z)(new Date(e),{addSuffix:!0}):""}}}]);
//# sourceMappingURL=431.11c2660b.chunk.js.map