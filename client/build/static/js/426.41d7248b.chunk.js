"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[426],{426:function(e,n,r){r.r(n);var t=r(4165),i=r(1413),a=r(5861),s=r(9439),o=r(2791),c=r(220),l=r(3400),d=r(7621),u=r(3590),x=r(8870),h=r(9124),f=r(3896),Z=r(8324),m=r(39),j=r(3579),p=r(266),v=r(3026),g=r(2654),b=r(3536),w=r(9671),k=r(5418),y=r(8721),D=r(184);n.default=function(){var e=(0,b._)().setTitle,n=(0,o.useState)([]),r=(0,s.Z)(n,2),M=r[0],C=r[1],N=(0,o.useState)([]),R=(0,s.Z)(N,2),B=R[0],S=R[1],z=(0,o.useState)(!1),_=(0,s.Z)(z,2),A=_[0],H=_[1],T=(0,o.useState)(0),I=(0,s.Z)(T,2),L=I[0],E=I[1];(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Z.get("/admins/books");case 3:n=e.sent,r=n.data.map((function(e){return(0,i.Z)({id:e._id},e)})),C(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var G=[{field:"image",headerName:"Avatar",flex:.5,renderCell:function(e){return(0,D.jsx)(c.Z,{src:e.row.pic,alt:e.row.title})}},{field:"title",headerName:"Title",flex:1},{field:"author",headerName:"Author",flex:1},{field:"genre",headerName:"Genre",flex:1},{field:"status",headerName:"Status",flex:1},{field:"publicationDate",headerName:"Published Date",flex:2,valueGetter:function(e){return(0,g.zM)(e.row.publicationDate)}},{field:"actions",headerName:"Actions",flex:1,renderCell:function(e){return(0,D.jsx)(l.Z,{onClick:function(){return n=e.row,S(n),void H(!0);var n},color:"primary",children:(0,D.jsx)(j.Z,{})})}}];return e("Books"),(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(p.Z,{children:[(0,D.jsx)(d.Z,{children:(0,D.jsx)(Z._,{rows:M,columns:G,components:{Toolbar:m.n},autoHeight:!0,density:"comfortable"})}),(0,D.jsx)(u.Z,{open:A,onClose:function(){H(!1),S(null)},"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:(0,D.jsx)(x.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"90%",width:"90%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3},children:(0,D.jsxs)(x.Z,{children:[(0,D.jsxs)(h.Z,{value:L,onChange:function(e,n){E(n)},centered:!0,children:[(0,D.jsx)(f.Z,{label:"Details"}),(0,D.jsx)(f.Z,{label:"Review"}),(0,D.jsx)(f.Z,{label:"History"})]}),0===L&&(0,D.jsx)(p.Z,{sx:{marginTop:5,marginBlockEnd:10},children:(0,D.jsx)(w.Z,{bookData:B})}),1===L&&(0,D.jsx)(p.Z,{children:(0,D.jsx)(k.Z,{bookData:B})}),2===L&&(0,D.jsx)(p.Z,{children:(0,D.jsx)(y.Z,{bookData:B})})]})})})]})})}},9671:function(e,n,r){var t=r(9439),i=r(2791),a=r(6388),s=r(1310),o=r(2654),c=r(3575),l=r(9281),d=r(9836),u=r(6890),x=r(5855),h=r(3994),f=r(3382),Z=r(8870),m=r(6314),j=r(266),p=r(4721),v=r(6151),g=(r(937),r(185)),b=r(184),w=function(e){var n=e.bookData;return(0,b.jsx)(l.Z,{children:(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{children:(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(h.Z,{}),(0,b.jsx)(h.Z,{})]})}),(0,b.jsxs)(f.Z,{children:[(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(h.Z,{component:"th",scope:"row",children:"Author"}),(0,b.jsx)(h.Z,{children:n.author})]}),(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(h.Z,{component:"th",scope:"row",children:"Published Date"}),(0,b.jsx)(h.Z,{children:(0,o.Mu)(n.publicationDate,"yyyy")})]}),(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(h.Z,{component:"th",scope:"row",children:"ISBN"}),(0,b.jsx)(h.Z,{children:n.ISBN})]}),(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(h.Z,{component:"th",scope:"row",children:"Genre"}),(0,b.jsx)(h.Z,{children:n.genre})]}),(0,b.jsxs)(x.Z,{children:[(0,b.jsx)(h.Z,{component:"th",scope:"row",children:"Description"}),(0,b.jsx)(h.Z,{children:n.description})]})]})]})})};n.Z=function(e){var n=e.bookData,r=(0,c.a)(),o=r.user,l=r.LikeBook,d=r.sendRequest,u=(0,i.useContext)(g.u).showToast,x=(0,i.useState)(),h=(0,t.Z)(x,2),f=h[0],k=h[1];(0,i.useEffect)((function(){k(M())}));var y=function(){l(n._id,!D)},D=function(){for(var e=!1,r=0;r<n.likes.length;r++)n.likes[r]._id===o.id&&(e=!0);return e},M=function(){var e=n.status;return"Available"===e?"Available":"Rented"===e?n.rented.user===o._id?"Return Book":"Rented":"Processing"===e?n.request===o._id?"Request send":"Book on a request":"Unavailable"===e?"Book unavailable":"Book not available"};return(0,b.jsx)(Z.Z,{children:(0,b.jsxs)(m.Z,{direction:"row",spacing:4,sx:{marginBottom:2},children:[(0,b.jsx)(m.Z,{direction:"column",spacing:2,sx:{width:"30%"},children:(0,b.jsxs)(Z.Z,{children:[(0,b.jsx)("img",{src:n.pic,alt:n.title,style:{width:"50%",height:"50%",marginLeft:30}}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(Z.Z,{sx:{marginBottom:2,padding:9},children:(0,b.jsx)(p.Z,{component:"h1"})})}),(0,b.jsxs)(Z.Z,{direction:"column",spacing:2,sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(v.Z,{variant:"contained",color:D()?"error":"primary",onClick:y,startIcon:(0,b.jsx)(a.Z,{}),children:n.likes.length}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,b.jsx)(v.Z,{variant:"contained",color:"primary",onClick:y,startIcon:(0,b.jsx)(s.Z,{}),children:n.comments.length})]})]})}),(0,b.jsx)(p.Z,{orientation:"vertical",flexItem:!0}),(0,b.jsxs)(Z.Z,{sx:{width:"50%"},children:[(0,b.jsx)(m.Z,{direction:"row",justifyContent:"flex-end",sx:{marginTop:3},children:(0,b.jsx)(v.Z,{color:"Available"===f?"primary":"Request send"===f||"Book on a request"===f?"warning":"error",variant:"contained",onClick:function(){return"Available"===n.status?(d({id:n._id}),u("Hello, Toast!","success")):u("Book Not Available for rend!","error")},children:f})}),(0,b.jsx)(m.Z,{direction:"column",sx:{marginTop:-5},children:(0,b.jsx)(Z.Z,{sx:{display:"flex",alignItems:"center"},children:(0,b.jsx)(Z.Z,{component:"h1",sx:{marginRight:2},children:n.title})})}),(0,b.jsx)(j.Z,{children:(0,b.jsx)(Z.Z,{children:(0,b.jsx)(Z.Z,{sx:{marginBottom:2},children:(0,b.jsx)(w,{bookData:n})})})})]})]})})}},8721:function(e,n,r){var t=r(3433),i=r(9439),a=r(2791),s=r(220),o=r(8870),c=r(266),l=r(7621),d=r(2654),u=r(8324),x=r(39),h=r(3575),f=r(184);n.Z=function(e){var n=e.bookData,r=(0,a.useState)([]),Z=(0,i.Z)(r,2),m=Z[0],j=Z[1],p=(0,h.a)().user;(0,a.useEffect)((function(){n.buyers.map((function(e,n){var r={id:e.id,name:e.user.name,pic:e.user.pic,rentDate:(0,d.zM)(e.rentDate),returnDate:(0,d.zM)(e.returnDate),stars:e.stars,itsYou:e.user._id===p.id};return j((function(e){return[].concat((0,t.Z)(e),[r])}))}))}),[]);var v=[{field:"image",headerName:"Avatar",flex:.5,renderCell:function(e){return(0,f.jsx)(s.Z,{src:e.row.pic,alt:e.row.name})}},{field:"name",headerName:"Name",flex:1,valueGetter:function(e){return e.row.itsYou?e.row.name+" (You)":e.row.name}},{field:"rentDate",headerName:"Rent Date",flex:1,valueGetter:function(e){return(0,d.Mu)(e.row.rentDate)}},{field:"returnDate",headerName:"Return Date",flex:1,valueGetter:function(e){return(0,d.Mu)(e.row.returnDate)}},{field:"stars",headerName:"stars",flex:1}];return(0,f.jsx)(o.Z,{children:(0,f.jsx)(c.Z,{children:(0,f.jsx)(l.Z,{children:(0,f.jsx)(u._,{rows:m,columns:v,components:{Toolbar:x.n}})})})})}},5418:function(e,n,r){var t=r(4165),i=r(5861),a=r(3433),s=r(9439),o=r(2791),c=r(8870),l=r(6314),d=r(8550),u=r(6151),x=r(4721),h=(r(3026),r(3575)),f=r(2654),Z=r(184);n.Z=function(e){var n=e.bookData,r=(0,o.useState)(""),m=(0,s.Z)(r,2),j=m[0],p=m[1],v=(0,h.a)(),g=v.user,b=v.CommentBook,w=(0,o.useState)([]),k=(0,s.Z)(w,2),y=k[0],D=k[1];(0,o.useEffect)((function(){var e=n.comments.filter((function(e){return e.message&&""!==e.message&&!y.some((function(n){return n.id===e._id}))})),r=e.map((function(e){return{id:e._id,user:e.user.name,pic:e.user.pic,message:e.message,time:(0,f.zM)(e.commentDate)}}));D((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(r))}))}),[n.comments]);var M=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:n._id,user:g.name,pic:g.pic,message:j,time:(new Date).toLocaleString()},e.next=3,b(r);case 3:D((function(e){return[].concat((0,a.Z)(e),[r])})),p("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(l.Z,{direction:"column",spacing:2,sx:{marginBottom:2},children:(0,Z.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,Z.jsx)(c.Z,{marginRight:1,children:(0,Z.jsx)("img",{src:g.pic,alt:g.name,style:{width:"40px",height:"40px",borderRadius:"50%"}})}),(0,Z.jsx)(c.Z,{flexGrow:1,children:(0,Z.jsx)(d.Z,{label:"Type your comment",value:j,onChange:function(e){p(e.target.value)},fullWidth:!0})}),(0,Z.jsx)(c.Z,{marginLeft:1,children:(0,Z.jsx)(u.Z,{variant:"contained",sx:{bgcolor:"green",color:"white"},onClick:M,children:"Send"})})]})}),(0,Z.jsx)(x.Z,{}),(0,Z.jsx)(c.Z,{children:y.map((function(e,n){return(0,Z.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",padding:1,borderBottom:"1px solid grey",boxShadow:1},children:[(0,Z.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,Z.jsx)("img",{src:e.pic,alt:e.user,style:{width:"40px",height:"40px",borderRadius:"50%"}}),(0,Z.jsx)(c.Z,{sx:{marginLeft:1},children:e.user}),(0,Z.jsx)(c.Z,{sx:{marginLeft:1},children:e.time})]}),(0,Z.jsx)("br",{})," ",(0,Z.jsx)("br",{}),(0,Z.jsx)(c.Z,{sx:{marginLeft:8,height:8},children:e.message})]},n)}))})]})}},2654:function(e,n,r){r.d(n,{DY:function(){return o},Mu:function(){return a},zM:function(){return s}});var t=r(1482),i=r(5939);function a(e,n){var r=n||"dd MMM yyyy";return e?(0,t.Z)(new Date(e),r):""}function s(e,n){var r=n||"dd MMM yyyy p";return e?(0,t.Z)(new Date(e),r):""}function o(e){return e?(0,i.Z)(new Date(e),{addSuffix:!0}):""}},1310:function(e,n,r){var t=r(4836);n.Z=void 0;var i=t(r(5649)),a=r(184),s=(0,i.default)((0,a.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"}),"CommentOutlined");n.Z=s},3579:function(e,n,r){var t=r(4836);n.Z=void 0;var i=t(r(5649)),a=r(184),s=(0,i.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");n.Z=s},6388:function(e,n,r){var t=r(4836);n.Z=void 0;var i=t(r(5649)),a=r(184),s=(0,i.default)((0,a.jsx)("path",{d:"M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"}),"ThumbUpAltOutlined");n.Z=s},7621:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(7462),i=r(3366),a=r(2791),s=r(8182),o=r(4419),c=r(6934),l=r(1402),d=r(5527),u=r(5878),x=r(1217);function h(e){return(0,x.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var f=r(184),Z=["className","raised"],m=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),j=a.forwardRef((function(e,n){var r=(0,l.Z)({props:e,name:"MuiCard"}),a=r.className,c=r.raised,d=void 0!==c&&c,u=(0,i.Z)(r,Z),x=(0,t.Z)({},r,{raised:d}),j=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},h,n)}(x);return(0,f.jsx)(m,(0,t.Z)({className:(0,s.Z)(j.root,a),elevation:d?8:void 0,ref:n,ownerState:x},u))}))}}]);
//# sourceMappingURL=426.41d7248b.chunk.js.map