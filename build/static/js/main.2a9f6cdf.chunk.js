(this["webpackJsonppuzzle-game"]=this["webpackJsonppuzzle-game"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(5),o=n.n(a),i=(n(19),n(7)),r=n(10),u=n(2),l=(n(20),n.p+"static/media/fruit.367f788c.svg"),d=n(0),f=c.a.forwardRef((function(t,e){var n=function(e){var n=e.target,s=Number(n.innerText);t.rightAnswer===s?(t.onClick(s,n),n.style.background="#90f73b"):(n.style.background="#f94e4e",t.onClick(s)),setTimeout((function(){n.style.removeProperty("background")}),700)};return Object(d.jsx)("div",{className:"num-rows",ref:e,children:function(){for(var t=[],e=1;e<=8;e++)t.push(Object(d.jsx)("div",{className:"btn-num",onClick:n,children:e},e));return t}()})})),b=n(14),j=n.n(b),m=function(t){if(t.draggable)return Object(d.jsx)(j.a,{onStart:t.onStart,onDrag:t.onDrag,onStop:t.onStop,disabled:t.disabled,position:t.position,onClick:t.onClick,children:Object(d.jsx)("div",{className:"button-plate plate".concat(t.index," ").concat(t.disabled?"matched":""),children:Object(d.jsxs)("div",{className:"button-cont",children:[Object(d.jsx)("div",{className:"button-img"}),Object(d.jsx)("div",{className:"button-sewed"}),Object(d.jsx)("div",{className:"button-green"})]})})});var e=t.rightAnswer===t.position.slot,n={transform:"translate(".concat(t.position.x,"px, ").concat(t.position.y,"px)"),cursor:e?"pointer":"default"},s="button-plate plate".concat(t.index," ");return t.disabled&&(s+=" matched ".concat(t.className)),Object(d.jsx)("div",{className:s,style:n,"data-slot-id":t.position.slot,onClick:function(n){var s=n.target.closest(".button-plate");e&&(s.classList.add("green"),t.onClick(n))},children:Object(d.jsxs)("div",{className:"button-cont",children:[Object(d.jsx)("div",{className:"button-img"}),Object(d.jsx)("div",{className:"button-sewed"}),Object(d.jsx)("div",{className:"button-green"})]})})},v=function(){var t=Object(s.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],a=Object(s.useState)(null),o=Object(u.a)(a,2),b=o[0],j=o[1],v=Object(s.useState)([]),O=Object(u.a)(v,2),x=O[0],g=O[1],y=Object(s.useState)([]),p=Object(u.a)(y,2),h=p[0],L=p[1],N=Object(s.useState)(!1),T=Object(u.a)(N,2),S=T[0],k=T[1],C=Object(s.useState)(null),w=Object(u.a)(C,2),R=w[0],B=w[1],D=Object(s.useState)(1),E=Object(u.a)(D,2),A=E[0],F=E[1],P=Object(s.useState)(null),z=Object(u.a)(P,2),H=z[0],I=z[1],J=Object(s.useState)(!1),G=Object(u.a)(J,2),q=G[0],K=G[1],M=Object(s.useState)(!1),Q=Object(u.a)(M,2),U=Q[0],V=Q[1],W=Object(s.useState)(!1),X=Object(u.a)(W,2),Y=X[0],Z=X[1],$=Object(s.useState)(!1),_=Object(u.a)($,2),tt=_[0],et=_[1],nt=Object(s.useRef)(null),st=Object(s.useRef)(null),ct=Object(s.useRef)(null),at=Object(s.useRef)(null),ot=Object(s.useRef)(null),it=Object(s.useRef)(null),rt=Object(s.useRef)(null),ut=Object(s.useRef)(null),lt=Object(s.useRef)(null),dt=Object(s.useState)([{x:986,y:80,slot:0},{x:686,y:160,slot:0},{x:786,y:240,slot:0},{x:900,y:360,slot:0},{x:934,y:200,slot:0},{x:986,y:400,slot:0},{x:700,y:400,slot:0},{x:840,y:120,slot:0}]),ft=Object(u.a)(dt,2),bt=ft[0],jt=ft[1],mt=null;Object(s.useEffect)((function(){5===x.length&&(S||(k(!0),x.map((function(t){var e=t.classList.toString().match(/plate[0-9]/)[0].match(/[0-9]/)[0],n=bt[e-1],s=Object(r.a)(Object(r.a)({},n),{},{y:n.y-10*(n.slot-1)});return jt((function(t){return t[e-1]=s,t})),t.style.transitionDuration="1000ms",t.style.trasitionDelay="500ms",setTimeout((function(){t.style.removeProperty("transition-duration")}),1e3),null})),Rt(),setTimeout((function(){wt("How many buttons?"),Et()}),500)))}),[x]),Object(s.useEffect)((function(){q&&(R?St():R||Y||setTimeout((function(){kt()}),500))}),[R]),Object(s.useEffect)((function(){U&&(setTimeout((function(){rt.current.firstChild.classList.remove("rotate"),rt.current.firstChild.classList.add("shake")}),2e3),setTimeout((function(){V(!1),K(!1)}),4e3))}),[U]);var vt=function(t){!t||n.length>4||c((function(e){return e.push(t),e}))},Ot=function(t){var e=!0;return x.forEach((function(n){n.classList.contains("plate".concat(t))&&(e=!1)})),e},xt=function(t){var e=!1;return h.forEach((function(n){n.classList.contains("slot".concat(t))&&(e=!0)})),e},gt=function(t){t.target.closest(".button-plate").style.cursor="grabbing"},yt=function(t){mt=mt||t.target.closest(".button-plate"),n.map((function(t){return t.style.background="#00000000",null})),ht(mt),b&&(b.style.background="#00000050")},pt=function(t){var e=mt||t.target.closest(".button-plate"),n=e.classList.toString().match(/plate[0-9]/)[0].match(/[0-9]/)[0];if(b){var s=Number(b.classList.toString().match(/slot[0-9]/)[0].match(/[0-9]/)[0]);e.style.cursor="default",b.style.background="#00000000";var c={x:b.offsetLeft-17,y:b.offsetTop-78,slot:s};jt((function(t){return t[n-1]=c,t})),g((function(t){return[].concat(Object(i.a)(t),[e])})),L((function(t){return[].concat(Object(i.a)(t),[b])}))}else e.style.cursor="grab",e.style.transitionDuration="1000ms",setTimeout((function(){e.style.removeProperty("transition-duration")}),1e3);mt=null,j(null)},ht=function(t){var e=zt(t.getBoundingClientRect()),s=Object(i.a)(null!==n&&void 0!==n?n:[]),c=!1;s.forEach((function(t){if(!t.classList.contains("matched")){var n=zt(t.getBoundingClientRect());return Lt(e,n)&&Nt(e,n)?(c=!0,void j(t)):(c||j(null),null)}}))},Lt=function(t,e){return e.x<t.x&&e.x+40>t.x||e.x>t.x&&e.x-40<t.x},Nt=function(t,e){return e.y>t.y&&e.y-40<t.y||e.y<t.y&&e.y+40>t.y},Tt=function(t){Dt(),setTimeout((function(){at.current.classList.add("green"),wt("How many green buttons?")}),500),setTimeout((function(){Pt(),Et()}),500)},St=function(){var t=ot.current,e=nt.current;t.innerText=H.innerText;var n=H.getBoundingClientRect(),s=e.getBoundingClientRect();t.style.transform="translate(".concat(n.x-s.x,"px, ").concat(n.y,"px)"),t.style.opacity=1,setTimeout((function(){var e=at.current.getBoundingClientRect(),n=e.width/1.4+(s.x-e.x),c=e.y+10;t.style.transition="transform 1000ms",t.style.transform="translate(".concat(n,"px, ").concat(c,"px)")}),500),setTimeout((function(){At()}),2e3),setTimeout((function(){Ct()}),2500)},kt=function(){Rt(),At(),Bt(),Z(!0)},Ct=function(){et(!0),Rt(),Pt(),At(),ot.current.classList.add("fade-out"),x.map((function(t,e){return t.classList.add("fade-out"),null})),setTimeout((function(){V(!0)}),500)},wt=function(t){var e=at.current;e.innerText=t,e.style.animationDuration="1s",e.classList.remove("fade-out"),e.classList.add("fade-in")},Rt=function(){var t=at.current;t.classList.remove("fade-in"),t.classList.add("fade-out")},Bt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout((function(){var e=n[t].getBoundingClientRect(),s=nt.current.getBoundingClientRect(),c=ut.current,a=e.top-10*t,o=e.left-s.left-144-20;c.style.left=o+"px",c.style.top=a+"px",c.style.display="block",c.classList.remove("fade-out"),c.classList.add("fade-in")}),500)},Dt=function(){setTimeout((function(){var t=ut.current;t.classList.remove("fade-in"),t.classList.add("fade-out"),setTimeout((function(){t.style.display="none"}),500)}),500)},Et=function(){var t=it.current;t.style.display="flex",t.classList.remove("fade-out-bottom"),t.classList.add("fade-in-bottom")},At=function(){var t=it.current;setTimeout((function(){t.classList.remove("fade-in-bottom"),t.classList.add("fade-out-bottom")}),500),setTimeout((function(){t.style.display="none"}),900)},Ft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=lt.current;e.innerText="".concat(t," button").concat(t>1?"s":""),e.classList.remove("fade-out"),e.classList.add("fade-in")},Pt=function(){var t=lt.current;t.classList.remove("fade-in"),t.classList.add("fade-out")},zt=function(t){return{x:t.x+t.width/2,y:t.y+t.height/2}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"play-button-wall",ref:st}),Object(d.jsx)("div",{className:"play-button",onClick:function(){var t=st.current,e=ct.current;t.classList.add("fade-out"),e.classList.add("fade-out"),setTimeout((function(){t.style.display="none",console.log(t),e.style.display="none"}),500),K(!0)},ref:ct}),Object(d.jsxs)("div",{className:"board ".concat(S?"all-matched":""),ref:nt,children:[Object(d.jsx)("div",{ref:at,className:"header",children:"Sew the buttons on the jacket"}),Object(d.jsx)("div",{className:"jacket"}),function(){for(var t=[],e=1;e<=5;e++)t.push(Object(d.jsx)("div",{ref:vt,className:"slot slot".concat(e," ").concat(xt(e)?"matched":"")},e));return t}(),function(){for(var t=[],e=1;e<=8;e++){var n=!Ot(e),s=q&&!1!==R;t.push(Object(d.jsx)(m,{draggable:s,onStart:gt,onDrag:yt,onStop:pt,disabled:n,position:bt[e-1],rightAnswer:A,onClick:Tt,className:tt?"fade-out":"",index:e},e))}return t}(),Object(d.jsx)(f,{rightAnswer:Y?A:5,onClick:function(t,e){if(null===R)return B((function(e){return 5===t})),void I(e);if(Y||5!==t){if(t===A){if(F((function(t){return t+1})),Ft(A),5!==t)return At(),void Bt(A);Rt(),setTimeout((function(){at.current.classList.remove("green"),wt("How many buttons?")}),600),Z(!1)}}else setTimeout((function(){Ct()}),500)},ref:it}),Object(d.jsx)("div",{ref:ot,className:"right-answer"}),Object(d.jsxs)("div",{ref:ut,className:"hint-wrong",children:[Object(d.jsx)("div",{className:"content",children:"Tap to color"}),Object(d.jsx)("div",{className:"corner"})]}),Object(d.jsx)("div",{className:"hint-label",ref:lt}),U&&Object(d.jsx)("div",{className:"end-animation",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"title",children:"Great!"}),Object(d.jsx)("div",{className:"fruit bounce-left-right",ref:rt,children:Object(d.jsx)("img",{src:l,alt:"Fruit",className:"rotate"})}),Object(d.jsx)("div",{className:"mask"})]})})]})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),a(t),o(t)}))};o.a.render(Object(d.jsx)(v,{}),document.getElementById("root")),O()}},[[28,1,2]]]);
//# sourceMappingURL=main.2a9f6cdf.chunk.js.map