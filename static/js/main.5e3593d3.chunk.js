(this["webpackJsonpmon-movies"]=this["webpackJsonpmon-movies"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(9),r=a.n(n),o=a(17),i=a(42),l=a(81),s=a(68),d=a(26),j="WATCHLATER",h="WATCHED",b="DELETEWATCHLATER",O="DELETEWATCHED",m={watchlater:null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),watched:null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched"))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{watchlater:[t.payload].concat(Object(s.a)(e.watchlater))});case h:return Object(d.a)(Object(d.a)({},e),{},{watched:[t.payload].concat(Object(s.a)(e.watched))});case b:return Object(d.a)(Object(d.a)({},e),{},{watchlater:e.watchlater.filter((function(e){return e.id!==t.payload}))});case O:return Object(d.a)(Object(d.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},u=a(35),g=a(13),x=a(48),f=a(11),v=a(131),S=a(145),w=a(134),y=a(136),N=a(137),k=a(138),W=a(139),I=a(58),J=a.n(I),C=a(2),T=Object(v.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",flexGrow:"1"},appbar:Object(f.a)({backgroundColor:"#232423",opacity:"0.9"},e.breakpoints.down("xs"),{height:"5%"}),appbarWrapper:{width:"80%",margin:"0 auto",justifyContent:"space-between"},appbarTitle:Object(f.a)({flexGrow:"1"},e.breakpoints.down("xs"),{marginTop:"0",fontSize:"15px"}),icon:{color:"#fff",fontSize:"1.5rem"},iconSize:Object(f.a)({},e.breakpoints.down("xs"),{marginTop:"0",fontSize:"8px"}),button:{margin:e.spacing(1)},colorText:{color:"yellow"},container:{textAlign:"center"}}}));function z(){var e=T(),t=Object(o.c)((function(e){return e.watchlater})),a=Object(o.c)((function(e){return e.watched})),c=t.length,n=a.length;return Object(C.jsx)("div",{className:e.root,id:"header",children:Object(C.jsx)(w.a,{className:e.appbar,elevation:0,children:Object(C.jsxs)(y.a,{className:e.appbarWrapper,children:[Object(C.jsx)(u.b,{to:"/MonMovies",style:{textDecoration:"none",color:"inherit"},children:Object(C.jsxs)("h1",{className:e.appbarTitle,children:["Mon",Object(C.jsx)("span",{className:e.colorText,children:"Movies"})]})}),Object(C.jsxs)(N.a,{children:[Object(C.jsx)(u.b,{to:"/MonMovies/watchlater",className:e.icon,style:{textDecoration:"none"},children:Object(C.jsx)(k.a,{varient:"contained",color:"secondary",size:"small",children:Object(C.jsx)("h3",{className:e.iconSize,children:Object(C.jsx)(W.a,{badgeContent:c,color:"primary",children:"Watchlater"})})})}),",",Object(C.jsx)(u.b,{to:"/MonMovies/watched",className:e.icon,style:{textDecoration:"none"},children:Object(C.jsx)(k.a,{varient:"contained",color:"secondary",size:"small",children:Object(C.jsx)("h3",{className:e.iconSize,children:Object(C.jsx)(W.a,{badgeContent:n,color:"primary",children:"Watched"})})})}),Object(C.jsx)(u.b,{to:"/MonMovies/search",className:e.icon,style:{textDecoration:"none"},children:Object(C.jsx)(k.a,{varient:"contained",color:"secondary",size:"small",children:Object(C.jsx)("h3",{className:e.iconSize,children:Object(C.jsx)(J.a,{})})})})]})]})})})}var M=a(22),D=a(140),A=a(141),E=a(144),_=a(143),R=a(142),B=a(105),H=a(59),L=a.n(H),q=a(60),G=a.n(q);var U=function(e){return function(e){var t=JSON.parse(localStorage.getItem("Watchlater"));null==t&&(t=[]),t.push(e),localStorage.setItem("Watchlater",JSON.stringify(t))}(e),{type:j,payload:e}},P=function(e){return function(e){var t=JSON.parse(localStorage.getItem("Watched"));null==t&&(t=[]),t.push(e),localStorage.setItem("Watched",JSON.stringify(t))}(e),{type:h,payload:e}},F=function(e){return function(e){var t,a=0,c=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),n=Object(M.a)(c);try{for(n.s();!(t=n.n()).done;){if(t.value.id===e.id){var r=JSON.parse(localStorage.getItem("Watchlater"));r.splice(a,1),localStorage.setItem("Watchlater",JSON.stringify(r)),console.log("removed");break}a+=1}}catch(o){n.e(o)}finally{n.f()}}(e),{type:b,payload:e.id}},K=function(e){return function(e){var t,a=0,c=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),n=Object(M.a)(c);try{for(n.s();!(t=n.n()).done;){if(t.value.id===e.id){var r=JSON.parse(localStorage.getItem("Watched"));r.splice(a,1),localStorage.setItem("Watched",JSON.stringify(r)),console.log("removed");break}a+=1}}catch(o){n.e(o)}finally{n.f()}}(e),{type:O,payload:e.id}},Q=Object(v.a)({root:{maxWidth:345},media:{height:140}});function V(e){var t=e.movie,a=Q(),c=Object(o.b)();return Object(C.jsxs)(D.a,{className:a.root,children:[Object(C.jsxs)(A.a,{children:[Object(C.jsx)(R.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(C.jsxs)(_.a,{children:[Object(C.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(C.jsx)("small",{children:t.release_date}),Object(C.jsx)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(C.jsxs)(E.a,{disableSpacing:!0,children:[Object(C.jsx)(k.a,{title:"add to watchlater",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),r=!0,o=Object(M.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(U(t))):alert("movie already added into watchlater")},children:Object(C.jsx)(N.a,{"aria-label":"add to favorites",children:Object(C.jsx)(L.a,{})})}),Object(C.jsx)(k.a,{title:"add to watched",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),r=!0,o=Object(M.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(P(t))):alert("movie already added into watched")},children:Object(C.jsx)(N.a,{"aria-label":"share",children:Object(C.jsx)(G.a,{})})})]})]})}var X=a.p+"static/media/heroimage.8b253059.jpg",Y=Object(v.a)((function(e){var t,a;return{root:{overflow:"hidden",margin:0},container:{justifyContent:"center",marginTop:"5%"},image:(t={width:"100vw",height:"60vh",display:"flex",backgroundImage:"url(".concat(X,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",borderBottom:"solid 10px white"},Object(f.a)(t,e.breakpoints.down("md"),{height:"40vh"}),Object(f.a)(t,e.breakpoints.down("sm"),{height:"30vh"}),Object(f.a)(t,e.breakpoints.down("xs"),{height:"20vh"}),t),introText:(a={alignSelf:"center",textAlign:"center",margin:"0 auto",fontSize:"4em",fontWeight:"700",lineHeight:"1",color:"white"},Object(f.a)(a,e.breakpoints.down("md"),{fontSize:"3em"}),Object(f.a)(a,e.breakpoints.down("xs"),{fontSize:"2em",fontWeight:"500"}),a),colorText:{color:"yellow"},card:{margin:"2%"}}}));function Z(){var e=Y(),t=Object(c.useState)([]),a=Object(x.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false").then((function(e){return e.json()})).then((function(e){r(e.results)}))}),[]),Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(z,{}),Object(C.jsx)("div",{className:e.image,children:Object(C.jsxs)("h1",{className:e.introText,children:[" Welcome, to Mon",Object(C.jsx)("span",{className:e.colorText,children:"Movies"})," "]})}),Object(C.jsx)("div",{children:Object(C.jsx)(S.a,{container:!0,spacing:3,className:e.container,children:n.length>0&&n.map((function(t){return Object(C.jsx)(S.a,{className:e.card,children:Object(C.jsx)(V,{movie:t})},t.id)}))})})]})}var $=a(146),ee=a(148),te=a(147),ae=a.p+"static/media/searchbg.33249e5c.jpg",ce=Object(v.a)((function(e){var t,a,c,n;return{root:{overflow:"hidden",color:"white"},container:{justifyContent:"center",marginTop:"5%"},card:{margin:"2%"},search:(t={width:"100vw",height:"60vh",display:"grid",backgroundImage:"url(".concat(ae,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",borderBottom:"solid 10px white",marginLeft:0},Object(f.a)(t,e.breakpoints.down("md"),{height:"40vh"}),Object(f.a)(t,e.breakpoints.down("sm"),{height:"30vh"}),Object(f.a)(t,e.breakpoints.down("xs"),{height:"20vh"}),t),searchContent:(a={alignSelf:"center",textAlign:"center",color:"currentcolor"},Object(f.a)(a,e.breakpoints.down("md"),{fontSize:"0.6em"}),Object(f.a)(a,e.breakpoints.down("xs"),{fontSize:"0.4em"}),a),inputRoot:(c={color:"white",border:"2px solid white",borderRadius:"30px"},Object(f.a)(c,e.breakpoints.down("xs"),{height:"40px"}),Object(f.a)(c,e.breakpoints.down("sm"),{height:"35px"}),Object(f.a)(c,e.breakpoints.down("xs"),{height:"30px"}),c),inputInput:(n={alignSelf:"center",textAlign:"center",margin:"0 auto",fontSize:"4em",fontWeight:"700",lineHeight:"1",width:"80%"},Object(f.a)(n,e.breakpoints.down("md"),{fontSize:"3em"}),Object(f.a)(n,e.breakpoints.down("xs"),{fontSize:"2em",fontWeight:"500"}),n),margin:{margin:e.spacing(1)}}}));function ne(){var e=ce(),t=Object(c.useState)({movie:""}),a=Object(x.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)([]),i=Object(x.a)(o,2),l=i[0],s=i[1];return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(z,{}),Object(C.jsx)("div",{children:Object(C.jsx)(S.a,{container:!0,children:Object(C.jsx)("div",{className:e.search,children:Object(C.jsxs)("div",{className:e.searchContent,children:[Object(C.jsx)("h1",{children:" Search a movie "}),Object(C.jsx)($.a,{className:e.inputInput,children:Object(C.jsx)(ee.a,{name:"query",variant:"outlined",autoComplete:"query",id:"query",value:n.movie,onChange:function(e){e.preventDefault(),r(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?s([]):s(e.results)}))},InputProps:{endAdornment:Object(C.jsxs)(te.a,{position:"end",children:[" ",Object(C.jsxs)("h1",{style:{color:"white"},children:[Object(C.jsx)(J.a,{})," "]})]}),className:e.inputRoot},color:"secondary"})})]})})})}),Object(C.jsx)("div",{children:Object(C.jsx)(S.a,{container:!0,spacing:3,className:e.container,children:l.length>0&&l.map((function(t){return Object(C.jsx)(S.a,{className:e.card,children:Object(C.jsx)(V,{movie:t})},t.id)}))})})]})}var re=a(61),oe=a.n(re),ie=Object(v.a)({root:{maxWidth:345},media:{height:140}});function le(e){var t=e.movie,a=ie(),c=Object(o.b)();return Object(C.jsxs)(D.a,{className:a.root,children:[Object(C.jsxs)(A.a,{children:[Object(C.jsx)(R.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(C.jsxs)(_.a,{children:[Object(C.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(C.jsx)("small",{children:t.release_date}),Object(C.jsx)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(C.jsxs)(E.a,{disableSpacing:!0,children:[Object(C.jsx)(k.a,{title:"add to watchlater",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),r=!0,o=Object(M.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(U(t))):alert("movie already added into watchlater")},children:Object(C.jsx)(N.a,{"aria-label":"add to favorites",children:Object(C.jsx)(L.a,{})})}),Object(C.jsx)(k.a,{title:"delete from watched",onClick:function(e){e.preventDefault(),c(K(t))},children:Object(C.jsx)(N.a,{children:Object(C.jsx)(oe.a,{})})})]})]})}var se=Object(v.a)((function(e){return{root:{overflow:"hidden",margin:0},container:{justifyContent:"center",marginTop:"5%"},card:{margin:"2%"}}}));function de(){var e=se(),t=Object(o.c)((function(e){return e.watched}));return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(z,{}),Object(C.jsx)("div",{children:Object(C.jsx)(S.a,{container:!0,spacing:3,className:e.container,children:t.length>0&&t.map((function(t){return Object(C.jsx)(S.a,{className:e.card,children:Object(C.jsx)(le,{movie:t})},t.id)}))})})]})}var je=Object(v.a)({root:{maxWidth:345},media:{height:140}});function he(e){var t=e.movie,a=je(),c=Object(o.b)();return Object(C.jsxs)(D.a,{className:a.root,children:[Object(C.jsxs)(A.a,{children:[Object(C.jsx)(R.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(C.jsxs)(_.a,{children:[Object(C.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(C.jsx)("small",{children:t.release_date}),Object(C.jsx)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(C.jsxs)(E.a,{disableSpacing:!0,children:[Object(C.jsx)(k.a,{title:"delete from watchlater",onClick:function(e){e.preventDefault(),c(F(t))},children:Object(C.jsx)(N.a,{children:Object(C.jsx)(oe.a,{})})}),Object(C.jsx)(k.a,{title:"add to watched",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),r=!0,o=Object(M.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(P(t))):alert("movie already added into watched")},children:Object(C.jsx)(N.a,{"aria-label":"add to favorites",children:Object(C.jsx)(G.a,{})})})]})]})}var be=Object(v.a)((function(e){return{root:{overflow:"hidden",margin:0},container:{justifyContent:"center",marginTop:"5%"},card:{margin:"2%"}}}));function Oe(){var e=be(),t=Object(o.c)((function(e){return e.watchlater}));return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(z,{}),Object(C.jsx)("div",{children:Object(C.jsx)(S.a,{container:!0,spacing:3,className:e.container,children:t.length>0&&t.map((function(t){return Object(C.jsx)(S.a,{className:e.card,children:Object(C.jsx)(he,{movie:t})},t.id)}))})})]})}function me(){return Object(C.jsx)("div",{children:Object(C.jsx)(Z,{})})}var pe=function(){return Object(C.jsx)(u.a,{children:Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(g.c,{children:[Object(C.jsx)(g.a,{path:"/MonMovies",exact:!0,component:me}),Object(C.jsx)(g.a,{path:"/MonMovies/search",component:ne}),Object(C.jsx)(g.a,{path:"/MonMovies/watched",component:de}),Object(C.jsx)(g.a,{path:"/MonMovies/watchlater",component:Oe})]})})})},ue=Object(i.d)(p,Object(i.c)(Object(i.a)(l.a)));r.a.render(Object(C.jsx)(o.a,{store:ue,children:Object(C.jsx)(pe,{})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.5e3593d3.chunk.js.map