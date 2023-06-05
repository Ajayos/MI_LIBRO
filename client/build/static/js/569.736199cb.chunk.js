"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[569],{569:function(e,n,r){r.r(n),r.d(n,{default:function(){return J}});var t=r(4165),s=r(5861),i=r(9439),c=r(2791),a=r(4554),o=r(9124),l=r(3896),x=r(9164),d=r(7047),u=r(6314),h=r(6151),Z=r(4721),j=r(6388),m=r(1310),g=r(2654),p=r(184),f=function(e){var n=e.bookData,r=10,t=!1,s=!1,i=function(){};return(0,p.jsx)(a.Z,{children:(0,p.jsxs)(u.Z,{direction:"row",spacing:4,sx:{marginBottom:2},children:[(0,p.jsx)(u.Z,{direction:"column",spacing:2,sx:{width:"30%"},children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)("img",{src:n.pic,alt:n.title,style:{width:"50%",height:"50%",marginLeft:30}}),(0,p.jsx)(x.Z,{children:(0,p.jsxs)(a.Z,{sx:{marginBottom:2},children:[(0,p.jsx)("br",{}),(0,p.jsxs)(a.Z,{children:["Title: ",n.title]}),(0,p.jsxs)(a.Z,{children:["Author: ",n.author]}),(0,p.jsxs)(a.Z,{children:["Published Date: ",(0,g.Mu)(n.publicationDate)]}),(0,p.jsxs)(a.Z,{children:["ISBN: ",n.ISBN]}),(0,p.jsxs)(a.Z,{children:["Genre: ",n.genre]})]})}),(0,p.jsxs)(a.Z,{direction:"column",spacing:2,sx:{display:"flex",alignItems:"center"},children:[(0,p.jsx)(h.Z,{variant:"contained",color:t?"error":"primary",onClick:i,startIcon:(0,p.jsx)(j.Z,{}),children:r})," ","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,p.jsx)(h.Z,{variant:"contained",color:t?"error":"primary",onClick:i,startIcon:(0,p.jsx)(m.Z,{}),children:r})]})]})}),(0,p.jsx)(Z.Z,{orientation:"vertical",flexItem:!0}),(0,p.jsxs)(a.Z,{sx:{width:"50%"},children:[(0,p.jsx)(u.Z,{direction:"row",justifyContent:"flex-end",sx:{marginTop:3},children:(0,p.jsx)(h.Z,{variant:"contained",onClick:function(){},children:n.available?"Get Book":s?"Request Book":"Book Unavailable"})}),(0,p.jsx)(u.Z,{direction:"column",sx:{marginTop:-5},children:(0,p.jsx)(a.Z,{sx:{display:"flex",alignItems:"center"},children:(0,p.jsx)(a.Z,{component:"h1",sx:{marginRight:2},children:n.title})})}),(0,p.jsx)(x.Z,{children:(0,p.jsx)(u.Z,{direction:"column",spacing:2,children:(0,p.jsx)(a.Z,{sx:{marginBottom:2},children:(0,p.jsxs)(u.Z,{direction:"column",spacing:2,children:[(0,p.jsx)(Z.Z,{component:"h1"}),(0,p.jsxs)(a.Z,{children:["Author: ",n.author]}),(0,p.jsxs)(a.Z,{children:["Published Date: ",(0,g.Mu)(n.publicationDate)]}),(0,p.jsxs)(a.Z,{children:["ISBN: ",n.ISBN]}),(0,p.jsxs)(a.Z,{children:["Genre: ",n.genre]}),(0,p.jsxs)(a.Z,{children:["Description: ",n.description]})]})})})})]})]})})},v=r(3536),D=r(3433),b=r(8550),y=r(3026),w=r(3575),k=function(e){var n=e.bookData,r=(0,c.useState)(""),o=(0,i.Z)(r,2),l=o[0],x=o[1],d=(0,w.a)().user,j=(0,c.useState)([]),m=(0,i.Z)(j,2),g=m[0],f=m[1],v=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:n._id,user:d.name,pic:d.pic,comment:l,time:(new Date).toLocaleString()},f((function(e){return[].concat((0,D.Z)(e),[r])})),e.next=4,y.Z.post("/users/books/comment",JSON.stringify(r));case 4:x("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(u.Z,{direction:"column",spacing:2,sx:{marginBottom:2},children:(0,p.jsxs)(a.Z,{display:"flex",alignItems:"center",children:[(0,p.jsx)(a.Z,{marginRight:1,children:(0,p.jsx)("img",{src:d.pic,alt:d.name,style:{width:"40px",height:"40px",borderRadius:"50%"}})}),(0,p.jsx)(a.Z,{flexGrow:1,children:(0,p.jsx)(b.Z,{label:"Type your comment",value:l,onChange:function(e){x(e.target.value)},fullWidth:!0})}),(0,p.jsx)(a.Z,{marginLeft:1,children:(0,p.jsx)(h.Z,{variant:"contained",sx:{bgcolor:"green",color:"white"},onClick:v,children:"Send"})})]})}),(0,p.jsx)(Z.Z,{}),(0,p.jsx)(a.Z,{children:g.map((function(e,n){return(0,p.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",padding:1,borderBottom:"1px solid grey",boxShadow:1},children:[(0,p.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,p.jsx)("img",{src:e.pic,alt:e.user,style:{width:"40px",height:"40px",borderRadius:"50%"}}),(0,p.jsx)(a.Z,{sx:{marginLeft:1},children:e.user}),(0,p.jsx)(a.Z,{sx:{marginLeft:1},children:e.time})]}),(0,p.jsx)("br",{})," ",(0,p.jsx)("br",{}),(0,p.jsx)(a.Z,{sx:{marginLeft:8,height:8},children:e.comment})]},n)}))})]})},S=r(9281),B=r(5527),I=r(9836),N=r(6890),M=r(5855),C=r(3994),P=r(3382),R=function(){return(0,p.jsx)(a.Z,{children:(0,p.jsx)(x.Z,{children:(0,p.jsx)(S.Z,{component:B.Z,sx:{marginBottom:2},children:(0,p.jsxs)(I.Z,{children:[(0,p.jsx)(N.Z,{children:(0,p.jsxs)(M.Z,{children:[(0,p.jsx)(C.Z,{children:"User Pic"}),(0,p.jsx)(C.Z,{children:"User Name"}),(0,p.jsx)(C.Z,{children:"Rent Date"}),(0,p.jsx)(C.Z,{children:"Return Date"}),(0,p.jsx)(C.Z,{children:"Stars"})]})}),(0,p.jsx)(P.Z,{children:[{userPic:"user1.jpg",userName:"John Doe",rentDate:"2023-05-01",returnDate:"2023-05-08",stars:4},{userPic:"user2.jpg",userName:"Jane Smith",rentDate:"2023-05-10",returnDate:"2023-05-15",stars:5}].map((function(e,n){return(0,p.jsxs)(M.Z,{children:[(0,p.jsx)(C.Z,{children:(0,p.jsx)("img",{src:e.userPic,alt:"User Profile",style:{width:"40px",height:"40px",borderRadius:"50%"}})}),(0,p.jsx)(C.Z,{children:e.userName}),(0,p.jsx)(C.Z,{children:e.rentDate}),(0,p.jsx)(C.Z,{children:e.returnDate}),(0,p.jsx)(C.Z,{children:e.stars})]},n)}))})]})})})})},L=r(7689),J=function(){var e=(0,L.UO)().id,n=(0,v._)().setTitle,r=(0,c.useState)(null),u=(0,i.Z)(r,2),h=u[0],Z=u[1],j=(0,c.useState)(!0),m=(0,i.Z)(j,2),g=m[0],D=m[1];(0,c.useEffect)((function(){var n=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.Z.get("/users/book/".concat(e));case 3:r=n.sent,console.log(r.data),Z(r.data),D(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();e&&n()}),[e]);var b=(0,c.useState)(0),w=(0,i.Z)(b,2),S=w[0],B=w[1];return n("Book"),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(o.Z,{value:S,onChange:function(e,n){B(n)},centered:!0,children:[(0,p.jsx)(l.Z,{label:"Details"}),(0,p.jsx)(l.Z,{label:"Review"}),(0,p.jsx)(l.Z,{label:"History"})]}),0===S&&(0,p.jsx)(x.Z,{children:g?(0,p.jsx)(d.Z,{variant:"rectangular",height:200}):(0,p.jsx)(f,{bookData:h})}),1===S&&(0,p.jsx)(x.Z,{children:g?(0,p.jsx)(d.Z,{variant:"rectangular",height:200}):(0,p.jsx)(k,{bookData:h})}),2===S&&(0,p.jsx)(x.Z,{children:g?(0,p.jsx)(d.Z,{variant:"rectangular",height:200}):(0,p.jsx)(R,{historyData:[{userPic:"user1.jpg",userName:"John Doe",rentDate:"2023-05-01",returnDate:"2023-05-08",stars:4},{userPic:"user2.jpg",userName:"Jane Smith",rentDate:"2023-05-10",returnDate:"2023-05-15",stars:5}]})})]})}},2654:function(e,n,r){r.d(n,{DY:function(){return a},Mu:function(){return i},zM:function(){return c}});var t=r(1482),s=r(5939);function i(e,n){var r=n||"dd MMM yyyy";return e?(0,t.Z)(new Date(e),r):""}function c(e,n){var r=n||"dd MMM yyyy p";return e?(0,t.Z)(new Date(e),r):""}function a(e){return e?(0,s.Z)(new Date(e),{addSuffix:!0}):""}}}]);
//# sourceMappingURL=569.736199cb.chunk.js.map