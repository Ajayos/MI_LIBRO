"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[426],{426:function(e,r,n){n.r(r);var t=n(4165),a=n(1413),o=n(5861),u=n(9439),i=n(2791),c=n(220),s=n(3400),f=n(7621),l=n(3579),d=n(9164),v=n(3026),Z=n(4268),h=n(39),m=n(2654),p=n(3536),x=n(184);r.default=function(){var e=(0,p._)().setTitle,r=(0,i.useState)([]),n=(0,u.Z)(r,2),w=n[0],M=n[1];(0,i.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var r,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Z.get("/books");case 3:r=e.sent,n=r.data.map((function(e){return(0,a.Z)({id:e._id},e)})),M(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var y=[{field:"image",headerName:"Avatar",flex:.5,renderCell:function(e){return(0,x.jsx)(c.Z,{src:e.row.pic,alt:e.row.title})}},{field:"title",headerName:"Title",flex:1},{field:"author",headerName:"Author",flex:1},{field:"genre",headerName:"Genre",flex:1},{field:"status",headerName:"Status",flex:1},{field:"publicationDate",headerName:"Published Date",flex:2,valueGetter:function(e){return(0,m.zM)(e.row.publicationDate)}},{field:"actions",headerName:"Actions",flex:1,renderCell:function(e){return(0,x.jsx)(s.Z,{onClick:function(){return r=e.row,void console.log(r);var r},color:"primary",children:(0,x.jsx)(l.Z,{})})}}];return e("Books"),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(d.Z,{children:(0,x.jsx)(f.Z,{children:(0,x.jsx)(Z._,{rows:w,columns:y,components:{Toolbar:h.n}})})})})}},2654:function(e,r,n){n.d(r,{DY:function(){return i},Mu:function(){return o},zM:function(){return u}});var t=n(1482),a=n(5939);function o(e,r){var n=r||"dd MMM yyyy";return e?(0,t.Z)(new Date(e),n):""}function u(e,r){var n=r||"dd MMM yyyy p";return e?(0,t.Z)(new Date(e),n):""}function i(e){return e?(0,a.Z)(new Date(e),{addSuffix:!0}):""}},7621:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(7462),a=n(3366),o=n(2791),u=n(8182),i=n(4419),c=n(6934),s=n(1402),f=n(5527),l=n(5878),d=n(1217);function v(e){return(0,d.Z)("MuiCard",e)}(0,l.Z)("MuiCard",["root"]);var Z=n(184),h=["className","raised"],m=(0,c.ZP)(f.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),p=o.forwardRef((function(e,r){var n=(0,s.Z)({props:e,name:"MuiCard"}),o=n.className,c=n.raised,f=void 0!==c&&c,l=(0,a.Z)(n,h),d=(0,t.Z)({},n,{raised:f}),p=function(e){var r=e.classes;return(0,i.Z)({root:["root"]},v,r)}(d);return(0,Z.jsx)(m,(0,t.Z)({className:(0,u.Z)(p.root,o),elevation:f?8:void 0,ref:r,ownerState:d},l))}))}}]);
//# sourceMappingURL=426.a161a422.chunk.js.map