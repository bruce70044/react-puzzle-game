(this["webpackJsonppuzzle-game"]=this["webpackJsonppuzzle-game"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(5),o=n.n(a),i=(n(19),n(7)),r=n(10),u=n(2),l=(n(20),n.p+"static/media/fruit.367f788c.svg"),f=n.p+"static/media/play1.25977739.svg",d=n.p+"static/media/jacket.a286bec7.svg",b=n(0),j=c.a.forwardRef((function(t,e){var n=function(e){var n=e.target,s=Number(n.innerText);t.rightAnswer===s?(n.style.background="#90f73b",t.onClick(s,n)):(n.style.background="#f94e4e",t.onClick(s)),setTimeout((function(){n.style.removeProperty("background")}),700)};return Object(b.jsx)("div",{className:"num-rows",ref:e,children:function(){for(var t=[],e=1;e<=8;e++)t.push(Object(b.jsx)("div",{className:"btn-num",onClick:n,children:e},e));return t}()})})),m=n(14),x=n.n(m),v=function(t){var e=Object(b.jsxs)("div",{className:"button-cont",children:[Object(b.jsx)("div",{className:"button-img"}),Object(b.jsx)("div",{className:"button-sewed"}),Object(b.jsx)("div",{className:"button-green"})]});if(t.draggable)return Object(b.jsx)(x.a,{onStart:t.onStart,onDrag:t.onDrag,onStop:t.onStop,disabled:t.disabled,position:t.position,children:Object(b.jsx)("div",{className:"button-plate plate".concat(t.index," ").concat(t.disabled?"matched":""),children:e})});var n=t.rightAnswer===t.position.slot,s={transform:"translate(".concat(t.position.x,"px, ").concat(t.position.y,"px)"),cursor:n?"pointer":"default"},c="button-plate plate".concat(t.index," ");return t.disabled&&(c+=" matched ".concat(t.className)),Object(b.jsx)("div",{className:c,style:s,"data-slot-id":t.position.slot,onClick:function(e){var s=e.target.closest(".button-plate");n&&(s.classList.add("green"),t.onClick(e))},children:e})},y=function(){var t=Object(s.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],a=Object(s.useState)(null),o=Object(u.a)(a,2),m=o[0],x=o[1],y=Object(s.useState)([]),O=Object(u.a)(y,2),g=O[0],p=O[1],h=Object(s.useState)([]),L=Object(u.a)(h,2),T=L[0],N=L[1],S=Object(s.useState)(!1),k=Object(u.a)(S,2),w=k[0],C=k[1],R=Object(s.useState)(null),B=Object(u.a)(R,2),D=B[0],E=B[1],A=Object(s.useState)(1),F=Object(u.a)(A,2),P=F[0],z=F[1],H=Object(s.useState)(null),I=Object(u.a)(H,2),J=I[0],G=I[1],W=Object(s.useState)(!1),q=Object(u.a)(W,2),K=q[0],M=q[1],Q=Object(s.useState)(!1),U=Object(u.a)(Q,2),V=U[0],X=U[1],Y=Object(s.useState)(!1),Z=Object(u.a)(Y,2),$=Z[0],_=Z[1],tt=Object(s.useState)(!1),et=Object(u.a)(tt,2),nt=et[0],st=et[1],ct=Object(s.useRef)(null),at=Object(s.useRef)(null),ot=Object(s.useRef)(null),it=Object(s.useRef)(null),rt=Object(s.useRef)(null),ut=Object(s.useRef)(null),lt=Object(s.useRef)(null),ft=Object(s.useRef)(null),dt=Object(s.useRef)(null),bt=Object(s.useState)([{x:986,y:80,slot:0},{x:686,y:160,slot:0},{x:786,y:240,slot:0},{x:900,y:360,slot:0},{x:934,y:200,slot:0},{x:986,y:400,slot:0},{x:700,y:400,slot:0},{x:840,y:120,slot:0}]),jt=Object(u.a)(bt,2),mt=jt[0],xt=jt[1],vt=window.outerWidth,yt=null;Object(s.useEffect)((function(){var t=mt;if(vt<=1024&&(t=[{x:660,y:80,slot:0},{x:622,y:160,slot:0},{x:706,y:240,slot:0},{x:600,y:260,slot:0},{x:534,y:200,slot:0},{x:492,y:95,slot:0},{x:438,y:45,slot:0},{x:465,y:212,slot:0}]),vt<=768){var e=vt/100*75,n=vt/100*54;t=[{x:e+10,y:15,slot:0},{x:e+40,y:90,slot:0},{x:e+20,y:n+100,slot:0},{x:e+40,y:350,slot:0},{x:185,y:n+50,slot:0},{x:10,y:n+95,slot:0},{x:100,y:n+45,slot:0},{x:300,y:n+60,slot:0}]}xt((function(){return t}))}),[vt]),Object(s.useEffect)((function(){5===g.length&&(w||(C(!0),g.map((function(t){var e=t.classList.toString().match(/plate[0-9]/)[0].match(/[0-9]/)[0],n=mt[e-1],s=10;vt<=1024&&(s=5),vt<=768&&(s=2);var c=Object(r.a)(Object(r.a)({},n),{},{y:n.y-(n.slot-1)*s});return xt((function(t){return t[e-1]=c,t})),t.style.transitionDuration="1000ms",t.style.trasitionDelay="500ms",setTimeout((function(){t.style.removeProperty("transition-duration")}),1e3),null})),Et(),setTimeout((function(){Dt("How many buttons?"),Pt()}),500)))}),[g]),Object(s.useEffect)((function(){K&&(D?Ct():D||$||setTimeout((function(){Rt()}),500))}),[D]),Object(s.useEffect)((function(){V&&(setTimeout((function(){lt.current.firstChild.classList.remove("rotate"),lt.current.firstChild.classList.add("shake")}),2e3),setTimeout((function(){X(!1),M(!1)}),4e3))}),[V]);var Ot=function(t){!t||n.length>4||c((function(e){return e.push(t),e}))},gt=function(t){var e=!0;return g.forEach((function(n){n.classList.contains("plate".concat(t))&&(e=!1)})),e},pt=function(t){var e=!1;return T.forEach((function(n){n.classList.contains("slot".concat(t))&&(e=!0)})),e},ht=function(t){t.target.closest(".button-plate").style.cursor="grabbing"},Lt=function(t){yt=yt||t.target.closest(".button-plate"),n.map((function(t){return t.style.background="#00000000",null})),Nt(yt),m&&(m.style.background="#00000050")},Tt=function(t){var e=yt||t.target.closest(".button-plate"),n=e.classList.toString().match(/plate[0-9]/)[0].match(/[0-9]/)[0];if(m){var s=Number(m.classList.toString().match(/slot[0-9]/)[0].match(/[0-9]/)[0]);e.style.cursor="default",m.style.background="#00000000";var c=7,a=66;vt<=768&&(c=1,a=61);var o={x:m.offsetLeft-c,y:m.offsetTop-a,slot:s};xt((function(t){return t[n-1]=o,t})),p((function(t){return[].concat(Object(i.a)(t),[e])})),N((function(t){return[].concat(Object(i.a)(t),[m])}))}else e.style.cursor="grab",e.style.transitionDuration="1000ms",setTimeout((function(){e.style.removeProperty("transition-duration")}),1e3);yt=null,x(null)},Nt=function(t){var e=Jt(t.getBoundingClientRect()),s=Object(i.a)(null!==n&&void 0!==n?n:[]),c=!1;s.forEach((function(t){if(!t.classList.contains("matched")){var n=Jt(t.getBoundingClientRect());return St(e,n)&&kt(e,n)?(c=!0,void x(t)):(c||x(null),null)}}))},St=function(t,e){return e.x<t.x&&e.x+40>t.x||e.x>t.x&&e.x-40<t.x},kt=function(t,e){return e.y>t.y&&e.y-40<t.y||e.y<t.y&&e.y+40>t.y},wt=function(t){Ft(),setTimeout((function(){it.current.classList.add("green"),Dt("How many green buttons?")}),500),setTimeout((function(){It(),Pt()}),500)},Ct=function(){var t=rt.current,e=ct.current;t.innerText=J.innerText;var n=J.getBoundingClientRect(),s=e.getBoundingClientRect();t.style.transform="translate(".concat(n.x-s.x,"px, ").concat(n.y,"px)"),t.style.opacity=1,setTimeout((function(){var e=it.current.getBoundingClientRect(),n=0;vt<=1024&&(n=vt/100);var c=e.width/1.3+(s.x-e.x)+n,a=e.y+10;t.style.transition="transform 1000ms",t.style.transform="translate(".concat(c,"px, ").concat(a,"px)")}),500),setTimeout((function(){zt()}),2e3),setTimeout((function(){Bt()}),2500)},Rt=function(){Et(),zt(),At(),_(!0)},Bt=function(){st(!0),Et(),It(),zt(),rt.current.innerText&&rt.current.classList.add("fade-out"),g.map((function(t,e){return t.classList.add("fade-out"),null})),setTimeout((function(){X(!0)}),500),setTimeout((function(){window.location.reload()}),4e3)},Dt=function(t){var e=it.current;e.innerText=t,e.style.animationDuration="1s",e.classList.remove("fade-out"),e.classList.add("fade-in")},Et=function(){var t=it.current;t.classList.remove("fade-in"),t.classList.add("fade-out")},At=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout((function(){var e=n[t].getBoundingClientRect(),s=ct.current.getBoundingClientRect(),c=ft.current,a=20,o=10;o=vt<=1024?6:o,a=vt<=768?-30:a,o=vt<=768?0:o;var i=e.left-s.left-144-a,r=e.top-t*o;r=vt>=768?r:r+(e.height-29)/2,c.style.left=i+"px",c.style.top=r+"px",c.style.display="block",c.classList.remove("fade-out"),c.classList.add("fade-in")}),500)},Ft=function(){setTimeout((function(){var t=ft.current;t.classList.remove("fade-in"),t.classList.add("fade-out"),setTimeout((function(){t.style.display="none"}),500)}),500)},Pt=function(){var t=ut.current;t.style.display="flex",t.classList.remove("fade-out-bottom"),t.classList.add("fade-in-bottom")},zt=function(){var t=ut.current;setTimeout((function(){t.classList.remove("fade-in-bottom"),t.classList.add("fade-out-bottom")}),500),setTimeout((function(){t.style.display="none"}),900)},Ht=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=dt.current;e.innerText="".concat(t," button").concat(t>1?"s":""),e.classList.remove("fade-out"),e.classList.add("fade-in")},It=function(){var t=dt.current;t.classList.remove("fade-in"),t.classList.add("fade-out")},Jt=function(t){return{x:t.x+t.width/2,y:t.y+t.height/2}};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"play-button-wall",ref:at}),Object(b.jsx)("div",{className:"play-button",onClick:function(){var t=at.current,e=ot.current;t.classList.add("fade-out"),e.classList.add("fade-out"),setTimeout((function(){t.style.display="none",e.style.display="none"}),500),M(!0)},ref:ot,children:Object(b.jsx)("img",{src:f,alt:"",className:"img"})}),Object(b.jsxs)("div",{className:"board ".concat(w?"all-matched":""),ref:ct,children:[Object(b.jsx)("div",{ref:it,className:"header",children:"Sew the buttons on the jacket"}),Object(b.jsx)("div",{className:"jacket",children:Object(b.jsx)("img",{src:d,alt:""})}),function(){for(var t=[],e=1;e<=5;e++)t.push(Object(b.jsx)("div",{ref:Ot,className:"slot slot".concat(e," ").concat(pt(e)?"matched":"")},e));return t}(),function(){for(var t=[],e=1;e<=8;e++){var n=!gt(e),s=K&&!1!==D;t.push(Object(b.jsx)(v,{draggable:s,onStart:ht,onDrag:Lt,onStop:Tt,disabled:n,position:mt[e-1],rightAnswer:P,onClick:wt,className:nt?"fade-out":"",index:e},e))}return t}(),Object(b.jsx)(j,{rightAnswer:$?P:5,onClick:function(t,e){if(null===D)return E((function(e){return 5===t})),void G(e);if($||5!==t){if(t===P){if(z((function(t){return t+1})),Ht(P),5!==t)return zt(),void At(P);Et(),setTimeout((function(){it.current.classList.remove("green"),Dt("How many buttons?")}),600),_(!1)}}else setTimeout((function(){Bt()}),500)},ref:ut}),Object(b.jsx)("div",{ref:rt,className:"right-answer"}),Object(b.jsxs)("div",{ref:ft,className:"hint-wrong",children:[Object(b.jsx)("div",{className:"content",children:"Tap to color"}),Object(b.jsx)("div",{className:"corner"})]}),Object(b.jsx)("div",{className:"hint-label",ref:dt}),V&&Object(b.jsx)("div",{className:"end-animation",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"title",children:"Great!"}),Object(b.jsx)("div",{className:"fruit bounce-left-right",ref:lt,children:Object(b.jsx)("img",{src:l,alt:"Fruit",className:"rotate"})}),Object(b.jsx)("div",{className:"mask"})]})})]})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),a(t),o(t)}))};o.a.render(Object(b.jsx)(y,{}),document.getElementById("root")),O()}},[[28,1,2]]]);
//# sourceMappingURL=main.b9a62cce.chunk.js.map