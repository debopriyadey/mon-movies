(this["webpackJsonpmon-movies"]=this["webpackJsonpmon-movies"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(9),r=a.n(n),o=a(16),i=a(40),l=a(79),s=a(65),j=a(24),d="WATCHLATER",b="WATCHED",h="DELETEWATCHLATER",O="DELETEWATCHED",u={watchlater:null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),watched:null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched"))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{watchlater:[t.payload].concat(Object(s.a)(e.watchlater))});case b:return Object(j.a)(Object(j.a)({},e),{},{watched:[t.payload].concat(Object(s.a)(e.watched))});case h:return Object(j.a)(Object(j.a)({},e),{},{watchlater:e.watchlater.filter((function(e){return e.id!==t.payload}))});case O:return Object(j.a)(Object(j.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},p=a(33),f=a(12),x=a(46),g=a(128),v=a(143),S=a(26),y=a(131),w=a(133),N=a(134),W=a(135),I=a(136),J=a(56),k=a.n(J),C=a(2),M=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",flexGrow:"1"},appbar:{backgroundColor:"#232423",opacity:"0.9"},appbarWrapper:{width:"80%",margin:"0 auto",justifyContent:"space-between"},appbarTitle:Object(S.a)({flexGrow:"1"},e.breakpoints.down("xs"),{fontSize:"20px"}),icon:Object(S.a)({color:"#fff",fontSize:"1.5rem",padding:e.spacing(1)},e.breakpoints.down("xs"),{fontSize:"18px"}),button:{margin:e.spacing(1)},colorText:{color:"yellow"},container:{textAlign:"center"},title:Object(S.a)({color:"#fff",fontSize:"4.5rem",fontFamily:"Lemonada"},e.breakpoints.down("xs"),{fontSize:"30px"}),subtitle:Object(S.a)({fontSize:"4rem"},e.breakpoints.down("xs"),{fontSize:"27px"}),goDown:Object(S.a)({color:"#295ed9",fontSize:"3.6rem"},e.breakpoints.down("xs"),{fontSize:"40px"})}}));function D(){var e=M(),t=Object(o.c)((function(e){return e.watchlater})),a=Object(o.c)((function(e){return e.watched})),c=t.length,n=a.length;return Object(C.jsx)("div",{className:e.root,id:"header",children:Object(C.jsx)(y.a,{className:e.appbar,elevation:0,children:Object(C.jsxs)(w.a,{className:e.appbarWrapper,children:[Object(C.jsx)(p.b,{to:"/MonMovies",style:{textDecoration:"none",color:"inherit"},children:Object(C.jsxs)("h1",{className:e.appbarTitle,children:["Mon",Object(C.jsx)("span",{className:e.colorText,children:"Movies"})]})}),Object(C.jsxs)(N.a,{children:[Object(C.jsx)(p.b,{to:"/MonMovies/watchlater",className:e.icon,style:{textDecoration:"none"},children:Object(C.jsx)(W.a,{varient:"contained",color:"secondary",size:"small",children:Object(C.jsx)(I.a,{badgeContent:c,color:"primary",children:"Watchlater"})})}),",",Object(C.jsx)(p.b,{to:"/MonMovies/watched",className:e.icon,style:{textDecoration:"none"},children:Object(C.jsx)(W.a,{varient:"contained",color:"secondary",size:"small",children:Object(C.jsx)(I.a,{badgeContent:n,color:"primary",children:"Watched"})})}),Object(C.jsx)(p.b,{to:"/MonMovies/search",className:e.icon,style:{textDecoration:"none"},children:Object(C.jsx)(W.a,{varient:"contained",color:"secondary",size:"small",children:Object(C.jsx)(k.a,{})})})]})]})})})}var T=a(21),z=a(137),E=a(138),_=a(142),A=a(140),G=a(139),L=a(141),q=a(57),B=a.n(q),H=a(58),R=a.n(H);var U=function(e){return function(e){var t=JSON.parse(localStorage.getItem("Watchlater"));null==t&&(t=[]),t.push(e),localStorage.setItem("Watchlater",JSON.stringify(t))}(e),{type:d,payload:e}},F=function(e){return function(e){var t=JSON.parse(localStorage.getItem("Watched"));null==t&&(t=[]),t.push(e),localStorage.setItem("Watched",JSON.stringify(t))}(e),{type:b,payload:e}},K=function(e){return function(e){var t,a=0,c=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),n=Object(T.a)(c);try{for(n.s();!(t=n.n()).done;){if(t.value.id===e.id){var r=JSON.parse(localStorage.getItem("Watchlater"));r.splice(a,1),localStorage.setItem("Watchlater",JSON.stringify(r)),console.log("removed");break}a+=1}}catch(o){n.e(o)}finally{n.f()}}(e),{type:h,payload:e.id}},P=function(e){return function(e){var t,a=0,c=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),n=Object(T.a)(c);try{for(n.s();!(t=n.n()).done;){if(t.value.id===e.id){var r=JSON.parse(localStorage.getItem("Watched"));r.splice(a,1),localStorage.setItem("Watched",JSON.stringify(r)),console.log("removed");break}a+=1}}catch(o){n.e(o)}finally{n.f()}}(e),{type:O,payload:e.id}},Q=Object(g.a)({root:{maxWidth:345},media:{height:140}});function V(e){var t=e.movie,a=Q(),c=Object(o.b)();return Object(C.jsxs)(z.a,{className:a.root,children:[Object(C.jsxs)(E.a,{children:[Object(C.jsx)(G.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(C.jsxs)(A.a,{children:[Object(C.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(C.jsx)("small",{children:t.release_date}),Object(C.jsx)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(C.jsxs)(_.a,{disableSpacing:!0,children:[Object(C.jsx)(W.a,{title:"add to watchlater",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),r=!0,o=Object(T.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(U(t))):alert("movie already added into watchlater")},children:Object(C.jsx)(N.a,{"aria-label":"add to favorites",children:Object(C.jsx)(B.a,{})})}),Object(C.jsx)(W.a,{title:"add to watched",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),r=!0,o=Object(T.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(F(t))):alert("movie already added into watched")},children:Object(C.jsx)(N.a,{"aria-label":"share",children:Object(C.jsx)(R.a,{})})})]})]})}var X=Object(g.a)((function(e){return{root:{flexGrow:1},container:{justifyContent:"center",marginTop:"3%"},card:{margin:"2%"}}}));function Y(){var e=X(),t=Object(c.useState)([]),a=Object(x.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false").then((function(e){return e.json()})).then((function(e){r(e.results)}))}),[]),Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(D,{}),Object(C.jsx)("div",{children:Object(C.jsx)(v.a,{container:!0,spacing:3,className:e.container,children:n.length>0&&n.map((function(t){return Object(C.jsx)(v.a,{className:e.card,children:Object(C.jsx)(V,{movie:t})},t.id)}))})})]})}var Z=a(144),$=Object(g.a)((function(e){return{root:{justifyContent:"center",alignItems:"center"},margin:{justifyContent:"center",alignItems:"center",marginTop:"18%"}}}));function ee(){var e=$(),t=Object(c.useState)({movie:""}),a=Object(x.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)([]),i=Object(x.a)(o,2),l=i[0],s=i[1];return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(D,{}),Object(C.jsx)("div",{className:e.margin,children:Object(C.jsxs)(v.a,{container:!0,spacing:2,alignItems:"flex-end",children:[Object(C.jsx)(v.a,{item:!0,children:Object(C.jsx)(k.a,{})}),Object(C.jsx)(v.a,{item:!0,children:Object(C.jsx)(Z.a,{name:"query",variant:"outlined",autoComplete:"query",id:"query",placeholder:"Search the movie",value:n.movie,onChange:function(e){e.preventDefault(),r(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?s([]):s(e.results)}))}})})]})}),Object(C.jsx)("div",{children:l.length>0&&l.map((function(e){return Object(C.jsx)(v.a,{children:Object(C.jsx)(V,{movie:e})},e.id)}))})]})}var te=a(59),ae=a.n(te),ce=Object(g.a)({root:{maxWidth:345},media:{height:140}});function ne(e){var t=e.movie,a=ce(),c=Object(o.b)();return Object(C.jsxs)(z.a,{className:a.root,children:[Object(C.jsxs)(E.a,{children:[Object(C.jsx)(G.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(C.jsxs)(A.a,{children:[Object(C.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(C.jsx)("small",{children:t.release_date}),Object(C.jsx)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(C.jsxs)(_.a,{disableSpacing:!0,children:[Object(C.jsx)(W.a,{title:"add to watchlater",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watchlater"))?[]:JSON.parse(localStorage.getItem("Watchlater")),r=!0,o=Object(T.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(U(t))):alert("movie already added into watchlater")},children:Object(C.jsx)(N.a,{"aria-label":"add to favorites",children:Object(C.jsx)(B.a,{})})}),Object(C.jsx)(W.a,{title:"delete from watched",onClick:function(e){e.preventDefault(),c(P(t))},children:Object(C.jsx)(N.a,{children:Object(C.jsx)(ae.a,{})})})]})]})}var re=Object(g.a)((function(e){return{root:{flexGrow:1},container:{justifyContent:"center",marginTop:"3%"},card:{margin:"2%"}}}));function oe(){var e=re(),t=Object(o.c)((function(e){return e.watched}));return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(D,{}),Object(C.jsx)("div",{children:Object(C.jsx)(v.a,{container:!0,spacing:3,className:e.container,children:t.length>0&&t.map((function(t){return Object(C.jsx)(v.a,{className:e.card,children:Object(C.jsx)(ne,{movie:t})},t.id)}))})})]})}var ie=Object(g.a)({root:{maxWidth:345},media:{height:140}});function le(e){var t=e.movie,a=ie(),c=Object(o.b)();return Object(C.jsxs)(z.a,{className:a.root,children:[Object(C.jsxs)(E.a,{children:[Object(C.jsx)(G.a,{className:a.media,image:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),title:t.title}),Object(C.jsxs)(A.a,{children:[Object(C.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(C.jsx)("small",{children:t.release_date}),Object(C.jsx)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]}),Object(C.jsxs)(_.a,{disableSpacing:!0,children:[Object(C.jsx)(W.a,{title:"delete from watchlater",onClick:function(e){e.preventDefault(),c(K(t))},children:Object(C.jsx)(N.a,{children:Object(C.jsx)(ae.a,{})})}),Object(C.jsx)(W.a,{title:"add to watched",onClick:function(e){var a,n=null===JSON.parse(localStorage.getItem("Watched"))?[]:JSON.parse(localStorage.getItem("Watched")),r=!0,o=Object(T.a)(n);try{for(o.s();!(a=o.n()).done;){if(a.value.id===t.id){console.log("present"),r=!1;break}}}catch(i){o.e(i)}finally{o.f()}r?(e.preventDefault(),c(F(t))):alert("movie already added into watched")},children:Object(C.jsx)(N.a,{"aria-label":"add to favorites",children:Object(C.jsx)(R.a,{})})})]})]})}var se=Object(g.a)((function(e){return{root:{flexGrow:1},container:{justifyContent:"center",marginTop:"3%"},card:{margin:"2%"}}}));function je(){var e=se(),t=Object(o.c)((function(e){return e.watchlater}));return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(D,{}),Object(C.jsx)("div",{children:Object(C.jsx)(v.a,{container:!0,spacing:3,className:e.container,children:t.length>0&&t.map((function(t){return Object(C.jsx)(v.a,{className:e.card,children:Object(C.jsx)(le,{movie:t})},t.id)}))})})]})}function de(){return Object(C.jsx)("div",{children:Object(C.jsx)(Y,{})})}var be=function(){return Object(C.jsx)(p.a,{children:Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(f.c,{children:[Object(C.jsx)(f.a,{path:"/MonMovies",exact:!0,component:de}),Object(C.jsx)(f.a,{path:"/MonMovies/search",component:ee}),Object(C.jsx)(f.a,{path:"/MonMovies/watched",component:oe}),Object(C.jsx)(f.a,{path:"/MonMovies/watchlater",component:je})]})})})},he=Object(i.d)(m,Object(i.c)(Object(i.a)(l.a)));r.a.render(Object(C.jsx)(o.a,{store:he,children:Object(C.jsx)(be,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.417c27be.chunk.js.map