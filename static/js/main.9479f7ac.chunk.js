(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],{172:function(e,t,c){},409:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(57),r=c.n(i),o=(c(172),c(7)),s=c(419),j=c(5);function a(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(s.a,{src:"./assets/bg.jpg",alt:"bg",zIndex:"-2",width:"100vw",height:"100vh",position:"fixed",filter:"brightness(40%)"})})}var l=c(423),h=c(424),b=c(438),x=c(436),d=c(425),O=c(434),u=c(422),p=c(60),f=c(154);function m(e){return Object(j.jsxs)(O.a,{onClose:e.onClose,isOpen:e.isOpen,isCentered:!0,children:[Object(j.jsx)(O.f,{}),Object(j.jsxs)(O.d,{children:[Object(j.jsx)(O.e,{children:"Contact Me!!"}),Object(j.jsx)(O.c,{}),Object(j.jsx)(O.b,{children:Object(j.jsxs)(b.c,{spacing:"5vh",children:[Object(j.jsx)(x.a,{leftIcon:Object(j.jsx)(p.b,{}),colorScheme:"teal",variant:"link",size:"lg",children:Object(j.jsx)(u.a,{href:"https://www.linkedin.com/in/p-r-hebbar",isExternal:!0,children:"Linkedin"})}),Object(j.jsx)(x.a,{leftIcon:Object(j.jsx)(f.a,{}),colorScheme:"teal",variant:"link",size:"lg",children:Object(j.jsx)(u.a,{href:"mailto: r.hebbar1998@gmail.com",isExternal:!0,children:"My Email"})})]})})]})]})}function g(e){var t=Object(l.a)(),c=t.isOpen,n=t.onOpen,i=t.onClose;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h.a,{flexDir:"row-reverse",h:"5vh",children:Object(j.jsxs)(b.a,{spacing:"5vh",children:[Object(j.jsx)(x.a,{onClick:function(){return e.setOption("home")},colorScheme:"transparent",_focus:{outline:"none",boxShadow:"none"},children:Object(j.jsx)(d.a,{fontSize:"2xl",color:"home"===e.option?"cyan":"white",cursor:"pointer",children:"Home"})}),Object(j.jsx)(x.a,{onClick:function(){return e.setOption("exp")},colorScheme:"transparent",_focus:{outline:"none",boxShadow:"none"},children:Object(j.jsx)(d.a,{fontSize:"2xl",color:"exp"===e.option?"cyan":"white",cursor:"pointer",children:"Experience"})}),Object(j.jsx)(x.a,{onClick:function(){return e.setOption("achi")},colorScheme:"transparent",_focus:{outline:"none",boxShadow:"none"},children:Object(j.jsx)(d.a,{fontSize:"2xl",color:"achi"===e.option?"cyan":"white",cursor:"pointer",children:"Achievements"})}),Object(j.jsx)(x.a,{onClick:function(){return e.setOption("tech")},colorScheme:"transparent",_focus:{outline:"none",boxShadow:"none"},children:Object(j.jsx)(d.a,{fontSize:"2xl",color:"tech"===e.option?"cyan":"white",cursor:"pointer",children:"Technical Skills"})}),Object(j.jsx)(x.a,{fontSize:"2xl",colorScheme:"teal",variant:"solid",_hover:{bgColor:"orange.500"},onClick:n,children:"Contact"}),Object(j.jsx)(m,{onClose:i,isOpen:c})]})})})}var v=c(155),w=c.n(v),S=c(426);function z(){return Object(j.jsx)(S.a,{position:"fixed",t:"0",l:"0",zIndex:"-1",children:Object(j.jsx)(w.a,{params:{particles:{number:{value:80},size:{value:3}}},width:"100vw",height:"100vh"})})}var C=c(427),k=c(428),y=c(429),E=c(430);function I(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){return fetch("".concat(".","/data/TechData.json")).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(b.c,{spacing:"3vh",children:[Object(j.jsx)(C.a,{size:"xl",color:"white",children:"My Skills and Expertise"}),Object(j.jsx)(k.a,{justify:"center",spacing:"5vh",children:c?c.map((function(e,t){return Object(j.jsx)(k.b,{children:Object(j.jsxs)(S.a,{bg:e.color,p:4,maxWidth:"30vw",borderRadius:"lg",overflow:"hidden",children:[Object(j.jsx)(C.a,{p:2,color:"white",font:"lg",orientation:"horizontal",children:e.name}),Object(j.jsx)(y.b,{color:"white",children:e.ls.map((function(e){return Object(j.jsxs)(b.b,{direction:"row",children:[Object(j.jsx)(y.a,{children:e[0]}),Object(j.jsx)(E.a,{ml:"1",variant:"subtle",colorScheme:"green",h:"3vh",children:e[1]})]})}))}),Object(j.jsx)(k.a,{spacing:"2vh",justify:"center",children:e.img.map((function(e){return Object(j.jsx)(k.b,{children:Object(j.jsx)(s.a,{boxSize:"15vh",src:"."+e,alt:e.split("/")[-1],p:2})})}))})]})})})):""})]})})}var P=c(433),D=c(431),T=c(411);function F(){return Object(j.jsxs)(b.c,{spacing:8,children:[Object(j.jsx)(D.a,{size:"2xl",name:"prof",src:"./assets/Photo.jpg"}),Object(j.jsx)(d.a,{color:"white",fontSize:"4xl",children:"I'm Rahul"}),Object(j.jsx)(d.a,{color:"white",fontSize:"3xl",children:"B.Tech Graduate from IIIT Trichy - ECE"}),Object(j.jsxs)(b.a,{spacing:5,children:[Object(j.jsx)(u.a,{href:"https://github.com/rahul-hebbar",isExternal:!0,children:Object(j.jsx)(T.a,{as:p.a,boxSize:"2em",color:"white"})}),Object(j.jsx)(u.a,{href:"https://www.linkedin.com/in/p-r-hebbar",isExternal:!0,children:Object(j.jsx)(T.a,{as:p.b,boxSize:"2em",color:"white"})})]})]})}var R=c(432);function _(){var e=Object(l.a)(),t=e.isOpen,c=e.onOpen,i=e.onClose,r=Object(n.useState)(0),a=Object(o.a)(r,2),u=a[0],p=a[1],f=Object(n.useState)(null),m=Object(o.a)(f,2),g=m[0],v=m[1];function w(e){p(e.target.id),c()}return Object(n.useEffect)((function(){return fetch("".concat(".","/data/AchiData.json")).then((function(e){return e.json()})).then((function(e){return v(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(b.c,{spacing:"3vh",children:[Object(j.jsx)(k.a,{justify:"center",spacing:"5vh",children:g?g.map((function(e,t){return Object(j.jsx)(k.b,{children:Object(j.jsxs)(S.a,{bg:"teal.500",p:4,maxWidth:"30vw",borderRadius:"lg",overflow:"hidden",children:[Object(j.jsx)(C.a,{size:"md",color:"white",paddingBottom:2,children:e.name}),Object(j.jsxs)(b.a,{spacing:"2vh",children:[Object(j.jsxs)(R.a,{children:[Object(j.jsxs)(d.a,{size:"sm",color:"gold",children:[Object(j.jsx)("b",{children:"Year:"})," ",e.year]}),Object(j.jsxs)(d.a,{size:"sm",color:"white",children:[Object(j.jsx)("b",{children:"Position:"})," ",e.pos]}),Object(j.jsxs)(d.a,{size:"sm",color:"gold",children:[Object(j.jsx)("b",{children:"Project Category:"})," ",e.projcat]}),Object(j.jsxs)(d.a,{size:"sm",color:"white",children:[Object(j.jsx)("b",{children:"Project:"})," ",e.proj]})]}),Object(j.jsx)(D.a,{size:"xl",src:"."+e.logo})]}),Object(j.jsx)(h.a,{flexDirection:"row-reverse",children:Object(j.jsx)(x.a,{colorScheme:"teal",variant:"solid",id:t,onClick:w,children:"View Certificate"})})]})})})):""}),Object(j.jsx)(d.a,{size:"xs",color:"white",children:"Project links can be found in Experience page"})]}),Object(j.jsxs)(O.a,{isOpen:t,onClose:i,size:"2xl",children:[Object(j.jsx)(O.f,{}),Object(j.jsx)(O.d,{children:Object(j.jsx)(O.b,{children:Object(j.jsx)(s.a,{src:g?"."+g[u].img:"",onContextMenu:function(e){return e.preventDefault()}})})})]})]})}var M=c(435);function A(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){return fetch("".concat(".","/data/ExpData.json")).then((function(e){return e.json()})).then((function(e){console.log(e),i(e)}))}),[]),Object(j.jsx)(S.a,{bg:"teal",width:"95vw",children:Object(j.jsx)(M.a,{allowToggle:!0,color:"white",children:Object(j.jsx)(k.a,{spacing:"2vw",justify:"center",p:4,children:c?c.map((function(e){return Object(j.jsx)(k.b,{children:Object(j.jsxs)(M.d,{width:"25vw",borderColor:"white",borderWidth:"2px",borderRadius:"md",p:1,children:[Object(j.jsxs)(M.b,{children:[Object(j.jsx)(d.a,{flex:"1",textAlign:"left",fontSize:"md",children:Object(j.jsx)("b",{children:e.name})}),Object(j.jsx)(M.c,{})]}),Object(j.jsx)(M.e,{children:Object(j.jsxs)(b.c,{children:[Object(j.jsx)(d.a,{children:e.desc}),Object(j.jsx)(k.a,{spacing:"1vh",children:e.lib.map((function(e){return Object(j.jsx)(k.b,{children:Object(j.jsx)(E.a,{colorScheme:"purple",children:e})})}))}),Object(j.jsx)(u.a,{href:e.link,isExternal:!0,children:"View Project"})]})})]})})})):""})})})}function B(){var e=Object(n.useState)("home"),t=Object(o.a)(e,2),c=t[0],i=t[1];function r(e){return"home"===e.option?Object(j.jsx)(F,{}):"tech"===e.option?Object(j.jsx)(I,{}):"achi"===e.option?Object(j.jsx)(_,{}):"exp"===e.option?Object(j.jsx)(A,{}):void 0}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(a,{}),Object(j.jsx)(z,{}),Object(j.jsxs)(S.a,{position:"relative",padding:"2vh",color:"blue",children:[Object(j.jsx)(g,{option:c,setOption:i}),Object(j.jsxs)(h.a,{align:"center",h:"90vh",children:[Object(j.jsx)(P.a,{}),Object(j.jsx)(r,{option:c}),Object(j.jsx)(P.a,{})]}),Object(j.jsx)(S.a,{position:"absolute",bottom:"0",right:"0",children:Object(j.jsx)(d.a,{fontSize:"xs",color:"white",opacity:"30%",children:"Photo by Joshua Reddekopp on Unsplash"})})]})]})}var J=c(437);r.a.render(Object(j.jsx)(J.a,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}},[[409,1,2]]]);
//# sourceMappingURL=main.9479f7ac.chunk.js.map