(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{112:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(96),a(20)),i=a(13),u=a(65),m=a.n(u),s=m.a.initializeApp({apiKey:"AIzaSyAksLH1sOFWQ_ZVFG9G-Va9BRNPXb1CoGY",authDomain:"clients-phonebook.firebaseapp.com",databaseURL:"https://clients-phonebook.firebaseio.com",projectId:"clients-phonebook",storageBucket:"clients-phonebook.appspot.com",messagingSenderId:"463736085897",appId:"1:463736085897:web:3bff9c07e44d9438e7d558",measurementId:"G-DKFLQHVRXV"}),p=m.a.firestore(),f="phonebook/ADD_NEW_CONTACT",E="phonebook/DELETE_CONTACT",b="phonebook/FILTER_CONTACTS",d=function(e){return{type:"profile/UPLOAD_USER_PROFILE",payload:{email:e.email,uid:e.uid}}},h=function(e){return{type:"errors/ERROR_MESSAGE",payload:e}},O=a(15),v=a(27),g=a.n(v),j=a(23),N=a(41),y=a(164),k=a(165),_=function(){var e=Object(N.a)(g.a.mark((function e(t,a){var n,r,c,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.nickname,r=t.email,c=t.password,e.prev=1,e.next=4,s.auth().createUserWithEmailAndPassword(r,c);case 4:s.auth().currentUser.updateProfile({displayName:n}),l=s.auth().currentUser,a(d(l)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a(h(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(N.a)(g.a.mark((function e(t,a){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.prev=1,e.next=4,s.auth().signInWithEmailAndPassword(n,r);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),a(h(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,a){return e.apply(this,arguments)}}(),C=function(e){var t=e.name,a=e.number,n=e.id,c=Object(i.c)((function(e){return e})).profile;return r.a.createElement("li",{className:"list__item"},r.a.createElement("p",{className:"text"},t,": ",a),r.a.createElement("button",{className:"btn",onClick:function(){!function(e,t){p.collection("".concat(e)).doc("".concat(t)).delete()}(c.uid,n)}},"delete"))},S=(a(112),function(e){var t=e.filteredItems,a=e.getIdForDelete,n=function(e){a(e)};return r.a.createElement(r.a.Fragment,null,0===t.length?r.a.createElement("p",null,"You don't have any contacts"):r.a.createElement(k.a,{component:"ul",className:"ContactList"},t.map((function(e){var t=e.name,a=e.number,c=e.id;return r.a.createElement(y.a,{key:c,timeout:250,classNames:"ContactItem"},r.a.createElement(C,{id:c,name:t,number:a,delItem:n}))}))))}),R=a(151),L=function(e){return e.contacts.contacts.items},x=function(e){return e.contacts.contacts.filter},F=function(e){return e.errors.message},I=Object(R.a)([x,L],(function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),A=function(e){var t=e.getNamesByFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"title"},"Find contacts by name"),r.a.createElement("input",{className:"input",onChange:t,type:"text",name:"filter",placeholder:"Enter name"}))},T=a(29),G=a(152),P=a(155),D=a(157),U=a(118),B=a(158),H=a(78),V=a.n(H),X=a(167),z=a(160),W=a(159),Y=a(166),M=a(79),J=Object(G.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function K(e){var t=e.email,a=J(),n=r.a.useState(!0),c=Object(o.a)(n,2),l=c[0],u=c[1],m=r.a.useState(null),p=Object(o.a)(m,2),f=p[0],E=p[1],b=Object(i.b)(),d=Boolean(f);return r.a.createElement("div",{className:a.root},r.a.createElement(P.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(U.a,{variant:"h6",className:a.title},"PhoneBook"),l&&r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("p",null,"Hello, ",t),r.a.createElement(B.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},color:"inherit"},r.a.createElement(V.a,null)),r.a.createElement(M.a,{id:"menu-appbar",anchorEl:f,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){E(null)}},r.a.createElement(Y.a,null,r.a.createElement(T.b,{to:"/profile"},"Profile")))),r.a.createElement(W.a,null,r.a.createElement(z.a,{control:r.a.createElement(X.a,{checked:l,onChange:function(e){u(e.target.checked),function(e){s.auth().signOut(),e({type:"profile/SIGH_OUT_USER_PROFILE",payload:!0})}(b)},"aria-label":"login switch"}),label:l?"Logout":"Login"})))))}a(76);function Q(e){var t=e.content;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"notification"},r.a.createElement("h3",null,t)))}var Z=function(){var e=Object(i.c)((function(e){return e.contacts})).contacts,t=Object(i.c)((function(e){return e})).profile,a=Object(i.b)(),c=Object(n.useState)(!1),l=Object(o.a)(c,2),u=l[0],m=l[1],s={},f=function(e){var t=e.target,a=t.name,n=t.value;s[a]=n};return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{in:u,classNames:"noti",timeout:750,onEntered:function(){return m(!1)},unmountOnExit:!0},r.a.createElement(Q,{content:"You have not completed all the fields or the values \u200b\u200bare repeated"})),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),n.target.reset(),function(e,t,a){var n=!0;return void 0===e.name||void 0===e.number?(a(h("not all fields are filled")),!1):(t.items.map((function(t){return t.name===e.name?n=!1:""})),!!n||(a(h("such contact already exists")),!1))}(s,e,a)?function(e,t){p.collection("".concat(e)).add(Object(j.a)({},t))}(t.uid,s):m(!0)}},r.a.createElement("label",{className:"text"},"Name",r.a.createElement("input",{className:"input",type:"text",placeholder:"Enter name",name:"name",onChange:f})),r.a.createElement("label",{className:"text"},"Number",r.a.createElement("input",{className:"input",type:"text",placeholder:"Enter number",name:"number",onChange:f})),r.a.createElement("button",{className:"btn",type:"submit"},"Add contact")))},q=function(){var e=Object(i.c)((function(e){return e})),t=Object(i.b)(),a=function(){var e=Object(N.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("".concat(a)).onSnapshot((function(e){var a=e.docs.map((function(e){return Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id})}));t({type:"phonebook/LOAD_ALL_CONTACTS",payload:a})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){a(e.profile.uid)}),[]);var c=function(e){return t(function(e){return{type:b,payload:e}}(e))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{email:e.profile.email}),r.a.createElement("div",{className:"section"},r.a.createElement(y.a,{in:!0,appear:!0,timeout:500,classNames:"title-anim",unmountOnExit:!0},r.a.createElement("h1",{className:"title"},"Phonebook")),r.a.createElement(Z,null),r.a.createElement("h2",{className:"title"},"Contacts"),L(e).length>=2&&r.a.createElement(A,{getNamesByFilter:function(e){var t=e.target.value;return c(t)}}),r.a.createElement(S,{filteredItems:x(e)&&L(e).length>=2?I(e):L(e)})))},$=a(161),ee=a(162),te=Object(G.a)((function(e){return{button:{margin:e.spacing(1)}}}));function ae(e){var t=e.name,a=e.type,n=e.handleClick,c=te();return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{variant:"contained",color:"primary",className:c.button,endIcon:r.a.createElement(ee.a,null,a),onClick:n},t))}var ne=a(163);function re(e){var t=e.label,a=e.value,n=e.name,c=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{id:"outlined-basic",className:"authInput",value:a,name:n,label:t,variant:"outlined",onChange:function(e){var t=e.target.value;return c(t)}}),r.a.createElement("br",null))}var ce=Object(G.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function le(){var e=ce();return r.a.createElement("div",{className:e.root},r.a.createElement(P.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(U.a,{variant:"h6",className:e.title},"Login"),r.a.createElement("p",{className:"linkText"}," ","Or you can",r.a.createElement($.a,{color:"inherit"},r.a.createElement(T.b,{to:"/register",style:{color:"white"}},"Register"))))))}var oe=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],s=u[1],p=Object(i.b)(),f=Object(i.c)((function(e){return e})),E=function(e){e.preventDefault();var t={email:a,password:m};c(""),s(""),w(t,p)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null),r.a.createElement("div",{className:"section"},r.a.createElement("form",{onSubmit:E,className:"authForm"},F(f)?r.a.createElement("p",null,F(f)):null,r.a.createElement(re,{label:"Email",name:"email",value:a,handleChange:c}),r.a.createElement(re,{label:"Password",name:"password",value:m,handleChange:s}),r.a.createElement(ae,{name:"Login",type:"send",handleClick:E}))))},ie=Object(G.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ue(){var e=ie();return r.a.createElement("div",{className:e.root},r.a.createElement(P.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(U.a,{variant:"h6",className:e.title},"Profile"))))}var me=function(){var e=Object(i.c)((function(e){return e.profile})),t=Object(O.g)().goBack;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null),r.a.createElement("div",{className:"section"},r.a.createElement("p",null,"Your email: ",e.email),r.a.createElement(ae,{name:"Go back",type:"undo",handleClick:function(){return t()}})))},se=Object(G.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));function pe(){var e=se(),t=Object(O.g)().goBack;return r.a.createElement("div",{className:e.root},r.a.createElement(P.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(U.a,{variant:"h6",className:e.title},"Register"),r.a.createElement(ae,{name:"Go back",type:"undo",handleClick:function(){return t()}}))))}var fe=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],s=u[1],p=Object(i.c)((function(e){return e})),f=Object(i.b)(),E=function(e){e.preventDefault(),_({email:a,password:m},f)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null),r.a.createElement("div",{className:"section"},r.a.createElement("form",{onSubmit:E,className:"authForm"},F(p)?r.a.createElement("p",null,F(p)):null,r.a.createElement(re,{label:"Email",name:"email",value:a,handleChange:c}),r.a.createElement(re,{label:"Password",name:"password",value:m,handleChange:s}),r.a.createElement(ae,{name:"Register",type:"send",handleClick:E}))))};function Ee(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],p=u[1],f=Object(i.b)();Object(i.c)((function(e){return e}));return Object(n.useEffect)((function(){s.auth().onAuthStateChanged((function(e){c(e)}))}),[]),Object(n.useEffect)((function(){if(a){var e={displayName:a.displayName,uid:a.uid,email:a.email};f(d(e))}p(a?r.a.createElement(O.d,null,r.a.createElement(O.b,{path:"/contacts",component:q}),r.a.createElement(O.b,{path:"/profile",component:me}),r.a.createElement(O.a,{to:"/contacts"})):r.a.createElement(O.d,null,r.a.createElement(O.b,{path:"/login",component:oe}),r.a.createElement(O.b,{path:"/register",component:fe}),r.a.createElement(O.a,{to:"/login"})))}),[a]),r.a.createElement(r.a.Fragment,null,m)}var be=a(48),de=a(51),he={contacts:{items:[],filter:""}},Oe={email:"",uid:""},ve=Object(be.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"profile/UPLOAD_USER_PROFILE":return Object(j.a)(Object(j.a)({},e),n);case"profile/SIGH_OUT_USER_PROFILE":return Oe;default:return e}},contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(j.a)({},he),t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"profile/SIGH_OUT_USER_PROFILE":return Object(j.a)({},he);case"phonebook/LOAD_ALL_CONTACTS":return{contacts:Object(j.a)(Object(j.a)({},e.contacts),{},{items:Object(de.a)(n)})};case f:return{contacts:{filter:"",items:[].concat(Object(de.a)(e.contacts.items),[n])}};case E:return{contacts:{filter:"",items:Object(de.a)(e.contacts.items.filter((function(e){return e.id!==n})))}};case b:return{contacts:{items:Object(de.a)(e.contacts.items),filter:n}};default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"profile/UPLOAD_USER_PROFILE":return"";case"errors/ERROR_MESSAGE":return n;case f:case E:case b:return"";default:return e}}}),ge=Object(be.c)(ve,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(i.a,{store:ge},r.a.createElement(T.a,null,r.a.createElement(Ee,null))),document.getElementById("root"))},76:function(e,t,a){},91:function(e,t,a){e.exports=a(116)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.e80085ef.chunk.js.map