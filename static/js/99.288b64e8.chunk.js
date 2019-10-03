(window["webpackJsonpfuse-react-app"]=window["webpackJsonpfuse-react-app"]||[]).push([[99],{2320:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(0),c=a.n(n),o=a(895),l=a(885),s=a(140),i=a(883),u=a(122),m=a(892),p=a(908),f=a(893),d=a(462),b=a(470),h=a(129),g=a(7),v=a(3),O=a(168),E=a(312),y=a(42),j=a.n(y),w="[CHAT APP] GET CONTACTS",x="[CHAT APP] SET SELECTED CONTACT ID",N="[CHAT APP] REMOVE SELECTED CONTACT ID";var P="[CHAT APP] GET USER DATA",C="[CHAT APP] UPDATE USER DATA";function k(e){var t=j.a.post("/api/chat/user/data",e);return function(e){return t.then(function(t){return e({type:C,payload:t.data})})}}var D="[CHAT APP] GET CHAT",S="[CHAT APP] REMOVE CHAT",A="[CHAT APP] SEND MESSAGE";function T(e){return function(t,a){var r=a().chatPanel.user.id;return j.a.get("/api/chat/get-chat",{params:{contactId:e,userId:r}}).then(function(a){return t(function(e){return{type:x,payload:e}}(e)),t(Object(E.h)()),t({type:D,chat:a.data.chat,userChatData:a.data.userChatData})})}}var R=a(14),I=a(889),L=a(13),B=a(66),M=a.n(B),H=a(862),z=Object(H.a)(function(e){return{messageRow:{"&.contact":{"& .bubble":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderTopRightRadius:20,borderBottomRightRadius:20,"& .time":{marginLeft:12}},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20}}},"&.me":{paddingLeft:40,"& .avatar":{order:2,margin:"0 0 0 16px"},"& .bubble":{marginLeft:"auto",backgroundColor:e.palette.grey[300],color:e.palette.getContrastText(e.palette.grey[300]),borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:5,borderBottomRightRadius:5,"& .time":{justifyContent:"flex-end",right:0,marginRight:12}},"&.first-of-group":{"& .bubble":{borderTopRightRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomRightRadius:20}}},"&.contact + .me, &.me + .contact":{paddingTop:20,marginTop:20},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20,paddingTop:13}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20,paddingBottom:13,"& .time":{display:"flex"}}}}}});var W=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.contacts.entities}),r=Object(g.c)(function(e){return e.chatApp.contacts.selectedContactId}),o=Object(g.c)(function(e){return e.chatApp.chat}),l=Object(g.c)(function(e){return e.chatApp.user}),m=z(e),p=Object(n.useRef)(null),f=Object(n.useState)(""),h=Object(R.a)(f,2),O=h[0],E=h[1];function y(e,t){return 0===t||o.dialog[t-1]&&o.dialog[t-1].who!==e.who}function w(e,t){return t===o.dialog.length-1||o.dialog[t+1]&&o.dialog[t+1].who!==e.who}return Object(n.useEffect)(function(){o&&(p.current.scrollTop=p.current.scrollHeight)},[o]),c.a.createElement("div",{className:Object(v.a)("flex flex-col relative",e.className)},c.a.createElement(L.u,{ref:p,className:"flex flex-1 flex-col overflow-y-auto"},o&&o.dialog.length>0?c.a.createElement("div",{className:"flex flex-col pt-16 pl-56 pr-16 pb-40"},o.dialog.map(function(e,t){var n=e.who===l.id?l:a.find(function(t){return t.id===e.who});return c.a.createElement("div",{key:e.time,className:Object(v.a)(m.messageRow,"flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative pr-16 pb-4 pl-16",{me:e.who===l.id},{contact:e.who!==l.id},{"first-of-group":y(e,t)},{"last-of-group":w(e,t)},t+1===o.dialog.length&&"pb-96")},function(e,t){return e.who===r&&(o.dialog[t+1]&&o.dialog[t+1].who!==r||!o.dialog[t+1])}(e,t)&&c.a.createElement(b.a,{className:"avatar absolute left-0 m-0 -ml-32",src:n.avatar}),c.a.createElement("div",{className:"bubble flex relative items-center justify-center p-12 max-w-full"},c.a.createElement("div",{className:"leading-tight whitespace-pre-wrap"},e.message),c.a.createElement(u.a,{className:"time absolute hidden w-full text-11 mt-8 -mb-24 left-0 bottom-0 whitespace-no-wrap",color:"textSecondary"},M()(e.time).format("MMMM Do YYYY, h:mm:ss a"))))})):c.a.createElement("div",{className:"flex flex-col flex-1"},c.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center"},c.a.createElement(i.a,{className:"text-128",color:"disabled"},"chat")),c.a.createElement(u.a,{className:"px-16 pb-24 text-center",color:"textSecondary"},"Start a conversation by typing your message below."))),o&&c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==O&&t(function(e,t,a){var r={who:a,message:e,time:new Date},n=j.a.post("/api/chat/send-message",{chatId:t,message:r});return function(e){return n.then(function(t){return e({type:A,message:t.data.message,userChatData:t.data.userChatData})})}}(O,o.id,l.id)).then(function(){E("")})},className:"absolute bottom-0 right-0 left-0 py-16 px-8"},c.a.createElement(s.a,{className:"flex items-center relative rounded-24",elevation:1},c.a.createElement(I.a,{autoFocus:!1,id:"message-input",className:"flex-1",InputProps:{disableUnderline:!0,classes:{root:"flex flex-grow flex-shrink-0 ml-16 mr-48 my-8",input:""},placeholder:"Type your message"},InputLabelProps:{shrink:!1,className:m.bootstrapFormLabel},onChange:function(e){E(e.target.value)},value:O}),c.a.createElement(d.a,{className:"absolute right-0 top-0",type:"submit"},c.a.createElement(i.a,{className:"text-24",color:"action"},"send")))))},U=a(10),_=a(307),F=a(884),G=a(910),Y=a(886),J=a(309),V=a(476);var q=function(e){switch(e.status){case"online":return c.a.createElement(i.a,{className:"block text-16 text-green bg-white rounded-full"},"check_circle");case"away":return c.a.createElement(i.a,{className:"block text-16 text-white bg-yellow-700 rounded-full"},"access_time");case"do-not-disturb":return c.a.createElement(i.a,{className:"block text-16 text-red bg-white rounded-full"},"remove_circle_outline");case"offline":return c.a.createElement(i.a,{className:"block text-16 text-grey-700 bg-white rounded-full"},"not_interested");default:return null}},K=a(477),Q=Object(H.a)(function(e){return{contactListItem:{borderBottom:"1px solid "+e.palette.divider,"&.active":{backgroundColor:e.palette.background.paper}},unreadBadge:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}});var X=function(e){var t=Q(e);return c.a.createElement(K.a,{button:!0,className:Object(v.a)(t.contactListItem,"px-16 py-12 min-h-92",{active:e.selectedContactId===e.contact.id}),onClick:function(){return e.onContactClick(e.contact.id)}},c.a.createElement("div",{className:"relative mr-16"},c.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10"},c.a.createElement(q,{status:e.contact.status})),c.a.createElement(b.a,{src:e.contact.avatar,alt:e.contact.name},e.contact.avatar&&""!==e.contact.avatar?"":e.contact.name[0])),c.a.createElement(Y.a,{classes:{root:"min-w-px",secondary:"truncate"},primary:e.contact.name,secondary:e.contact.mood}),e.contact.chatId&&c.a.createElement("div",{className:"flex flex-col justify-center items-end"},e.contact.lastMessageTime&&c.a.createElement(u.a,{className:"whitespace-no-wrap mb-8"},M()(e.contact.lastMessageTime).format("ll")),e.contact.unread&&c.a.createElement("div",{className:Object(v.a)(t.unreadBadge,"flex items-center justify-center min-w-24 h-24 rounded-full text-14 text-center")},e.contact.unread)))};function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ee=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var te=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.contacts.entities}),r=Object(g.c)(function(e){return e.chatApp.user}),o=Object(n.useState)(""),l=Object(R.a)(o,2),m=l[0],h=l[1],v=Object(n.useState)(null),O=Object(R.a)(v,2),y=O[0],j=O[1],w=Object(n.useState)(null),x=Object(R.a)(w,2),N=x[0],P=x[1];function C(e){P(null)}function D(e){h(e.target.value)}return c.a.createElement("div",{className:"flex flex-col flex-auto h-full"},c.a.createElement(p.a,{position:"static",color:"default",elevation:1},c.a.createElement(f.a,{className:"flex justify-between items-center px-16 pr-4"},r&&c.a.createElement("div",{className:"relative w-40 h-40 p-0 cursor-pointer",onClick:function(){return t(E.l())}},c.a.createElement(b.a,{src:r.avatar,alt:r.name,className:"w-40 h-40"},r.avatar&&""!==r.avatar?"":r.name[0]),c.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10 cursor-pointer","aria-owns":y?"switch-menu":null,"aria-haspopup":"true",onClick:function(e){e.preventDefault(),e.stopPropagation(),j(e.currentTarget)}},c.a.createElement(q,{status:r.status})),c.a.createElement(_.a,{id:"status-switch",anchorEl:y,open:Boolean(y),onClose:function(e){e.preventDefault(),e.stopPropagation(),j(null)}},ee.map(function(e){return c.a.createElement(F.a,{onClick:function(a){return function(e,a){e.preventDefault(),e.stopPropagation(),t(k($({},r,{status:a}))),j(null)}(a,e.value)},key:e.value},c.a.createElement(G.a,{className:"min-w-40"},c.a.createElement(q,{status:e.value})),c.a.createElement(Y.a,{primary:e.title}))}))),c.a.createElement("div",null,c.a.createElement(d.a,{"aria-owns":N?"chats-more-menu":null,"aria-haspopup":"true",onClick:function(e){P(e.currentTarget)}},c.a.createElement(i.a,null,"more_vert")),c.a.createElement(_.a,{id:"chats-more-menu",anchorEl:N,open:Boolean(N),onClose:C},c.a.createElement(F.a,{onClick:C},"Profile"),c.a.createElement(F.a,{onClick:C},"Logout")))),Object(n.useMemo)(function(){return c.a.createElement(f.a,{className:"px-16"},c.a.createElement(s.a,{className:"flex p-4 items-center w-full px-8 py-4 rounded-8",elevation:1},c.a.createElement(i.a,{className:"mr-8",color:"action"},"search"),c.a.createElement(J.a,{placeholder:"Search or start new chat",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:m,inputProps:{"aria-label":"Search"},onChange:D})))},[m])),c.a.createElement(L.u,{className:"overflow-y-auto flex-1"},c.a.createElement(V.a,{className:"w-full"},Object(n.useMemo)(function(){function e(e,t){return 0===t.length?e:L.C.filterArrayByString(e,t)}var n=a.length>0&&r&&r.chatList?r.chatList.map(function(e){return $({},e,{},a.find(function(t){return t.id===e.contactId}))}):[],o=e(Object(U.a)(a),m),l=e(Object(U.a)(n),m);return c.a.createElement(c.a.Fragment,null,c.a.createElement(L.e,{enter:{animation:"transition.expandIn"},className:"flex flex-col flex-shrink-0"},l.length>0&&c.a.createElement(u.a,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Chats"),l.map(function(e){return c.a.createElement(X,{key:e.id,contact:e,onContactClick:function(e){return t(T(e))}})}),o.length>0&&c.a.createElement(u.a,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Contacts"),o.map(function(e){return c.a.createElement(X,{key:e.id,contact:e,onContactClick:function(e){return t(T(e))}})})))},[a,r,m,t]))))};var ae=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.contacts.entities}),r=Object(g.c)(function(e){return e.chatApp.contacts.selectedContactId}),n=a.find(function(e){return e.id===r});return n?c.a.createElement("div",{className:"flex flex-col flex-auto h-full"},c.a.createElement(p.a,{position:"static",color:"primary",elevation:1},c.a.createElement(f.a,{className:"flex justify-between items-center px-16 pr-4"},c.a.createElement(u.a,{color:"inherit",variant:"subtitle1"},"Contact Info"),c.a.createElement(d.a,{onClick:function(){return t(E.g())},color:"inherit"},c.a.createElement(i.a,null,"close"))),c.a.createElement(f.a,{className:"flex flex-col justify-center items-center p-24"},c.a.createElement(b.a,{src:n.avatar,alt:n.name,className:"w-96 h-96"},n.avatar&&""!==n.avatar?"":n.name[0]),c.a.createElement(u.a,{color:"inherit",className:"mt-16",variant:"h6"},n.name))),c.a.createElement(L.u,{className:"overflow-y-auto flex-1 p-24"},c.a.createElement(I.a,{label:"Mood",className:"w-full",value:n.mood,margin:"normal",disabled:!0,multiline:!0}))):null},re=a(461),ne=a(482),ce=a(905),oe=a(887),le=a(916),se=a(128);function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var ue=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var me=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.user}),n=Object(se.b)(!!a&&function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a)),o=n.form,l=n.handleChange,s=Object(se.a)(function(e){t(k(e))},500);return Object(se.d)(function(){s(o)},[o,s]),o?c.a.createElement("div",{className:"flex flex-col flex-auto h-full"},c.a.createElement(p.a,{position:"static",color:"primary",elevation:1},c.a.createElement(f.a,{className:"flex justify-between items-center px-16 pr-4"},c.a.createElement(u.a,{color:"inherit",variant:"subtitle1"},"User Info"),c.a.createElement(d.a,{onClick:function(){return t(E.i())},color:"inherit"},c.a.createElement(i.a,null,"close"))),c.a.createElement(f.a,{className:"flex flex-col justify-center items-center p-24"},c.a.createElement(b.a,{src:a.avatar,alt:a.name,className:"w-96 h-96"},a.avatar&&""!==a.avatar?"":a.name[0]),c.a.createElement(u.a,{color:"inherit",className:"mt-16",variant:"h6"},a.name))),c.a.createElement(L.u,{className:"overflow-y-auto flex-1 p-24"},c.a.createElement("form",null,c.a.createElement(re.a,{component:"fieldset",className:"w-full mb-16"},c.a.createElement(I.a,{label:"Mood",name:"mood",className:"w-full",value:o.mood,margin:"normal",multiline:!0,onChange:l})),c.a.createElement(re.a,{component:"fieldset",className:"w-full mb-16"},c.a.createElement(ne.a,{component:"legend"},"Status"),c.a.createElement(ce.a,{"aria-label":"Status",name:"status",className:"",value:o.status,onChange:l},ue.map(function(e){return c.a.createElement(oe.a,{key:e.value,value:e.value,control:c.a.createElement(le.a,null),label:c.a.createElement("div",{className:"flex items-center"},c.a.createElement(q,{status:e.value}),c.a.createElement("span",{className:"ml-8"},e.title))})})))))):null};function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var de={mobileChatsSidebarOpen:!1,userSidebarOpen:!1,contactSidebarOpen:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.e:return fe({},e,{mobileChatsSidebarOpen:!0});case E.b:return fe({},e,{mobileChatsSidebarOpen:!1});case E.f:return fe({},e,{userSidebarOpen:!0});case E.c:return fe({},e,{userSidebarOpen:!1});case E.d:return fe({},e,{contactSidebarOpen:!0});case E.a:return fe({},e,{contactSidebarOpen:!1});default:return e}},he=a(305),ge=a.n(he);function ve(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ve(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ve(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Ee(e,t){var a=ge.a.merge({},e),r=a.chatList.find(function(e){return e.contactId===t.userChatData.contactId});return a.chatList=r?a.chatList.map(function(e){return e.contactId===t.userChatData.contactId?t.userChatData:e}):[t.userChatData].concat(Object(U.a)(a.chatList)),a}var ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:case C:return Oe({},t.payload);case D:case A:return Ee(e,t);default:return e}};function je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?je(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):je(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var xe={entities:[],selectedContactId:null},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return we({},e,{entities:Object(U.a)(t.payload)});case x:return we({},e,{selectedContactId:t.payload});case N:return we({},e,{selectedContactId:null});default:return e}};function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function Ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Ce({},t.chat);case S:return null;case A:return Ce({},e,{dialog:[].concat(Object(U.a)(e.dialog),[t.message])});default:return e}},De=a(46),Se=Object(De.d)({sidebars:be,user:ye,contacts:Ne,chat:ke}),Ae=Object(H.a)(function(e){var t;return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},topBg:{position:"absolute",left:0,right:0,top:0,height:200,backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:e.palette.primary.dark,backgroundSize:"cover",pointerEvents:"none"},contentCardWrapper:(t={position:"relative",padding:24,maxWidth:1400,display:"flex",flexDirection:"column",flex:"1 0 auto",width:"100%",minWidth:"0",maxHeight:"100%",margin:"0 auto"},Object(r.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(r.a)(t,e.breakpoints.down("xs"),{padding:12}),t),contentCard:{display:"flex",position:"relative",flex:"1 1 100%",flexDirection:"row",backgroundImage:'url("/assets/images/patterns/rain-grey.png")',backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:8,minHeight:0,overflow:"hidden"},drawerPaper:Object(r.a)({width:400,maxWidth:"100%",overflow:"hidden",height:"100%"},e.breakpoints.up("md"),{position:"relative"}),contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 100%",zIndex:10,background:"linear-gradient(to bottom, ".concat(Object(h.fade)(e.palette.background.paper,.8)," 0,").concat(Object(h.fade)(e.palette.background.paper,.6)," 20%,").concat(Object(h.fade)(e.palette.background.paper,.8),")")},content:{display:"flex",flex:"1 1 100%",minHeight:0}}});t.default=Object(O.a)("chatApp",Se)(function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.chat}),r=Object(g.c)(function(e){return e.chatApp.contacts.entities}),h=Object(g.c)(function(e){return e.chatApp.contacts.selectedContactId}),O=Object(g.c)(function(e){return e.chatApp.sidebars.mobileChatsSidebarOpen}),y=Object(g.c)(function(e){return e.chatApp.sidebars.userSidebarOpen}),x=Object(g.c)(function(e){return e.chatApp.sidebars.contactSidebarOpen}),N=Ae(e),C=r.find(function(e){return e.id===h});return Object(n.useEffect)(function(){t(function(){var e=j.a.get("/api/chat/user");return function(t){return e.then(function(e){return t({type:P,payload:e.data})})}}()),t(function(){var e=j.a.get("/api/chat/contacts");return function(t){return e.then(function(e){return t({type:w,payload:e.data})})}}())},[t]),c.a.createElement("div",{className:Object(v.a)(N.root)},c.a.createElement("div",{className:N.topBg}),c.a.createElement("div",{className:Object(v.a)(N.contentCardWrapper,"container")},c.a.createElement("div",{className:N.contentCard},c.a.createElement(o.a,{mdUp:!0},c.a.createElement(l.a,{className:"h-full absolute z-20",variant:"temporary",anchor:"left",open:O,onClose:function(){return t(E.h())},classes:{paper:Object(v.a)(N.drawerPaper,"absolute left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},c.a.createElement(te,null))),c.a.createElement(o.a,{smDown:!0},c.a.createElement(l.a,{className:"h-full z-20",variant:"permanent",open:!0,classes:{paper:N.drawerPaper}},c.a.createElement(te,null))),c.a.createElement(l.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"left",open:y,onClose:function(){return t(E.i())},classes:{paper:Object(v.a)(N.drawerPaper,"absolute left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!1,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},c.a.createElement(me,null)),c.a.createElement("main",{className:Object(v.a)(N.contentWrapper,"z-10")},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{className:"w-full",position:"static",elevation:1},c.a.createElement(f.a,{className:"px-16"},c.a.createElement(d.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return t(E.k())},className:"flex md:hidden"},c.a.createElement(i.a,null,"chat")),c.a.createElement("div",{className:"flex items-center cursor-pointer",onClick:function(){return t(E.j())}},c.a.createElement("div",{className:"relative ml-8 mr-12"},c.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10"},c.a.createElement(q,{status:C.status})),c.a.createElement(b.a,{src:C.avatar,alt:C.name},C.avatar&&""!==C.avatar?"":C.name[0])),c.a.createElement(u.a,{color:"inherit",className:"text-18 font-600"},C.name)))),c.a.createElement("div",{className:N.content},c.a.createElement(W,{className:"flex flex-1 z-10"}))):c.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center p-24"},c.a.createElement(s.a,{className:"rounded-full p-48"},c.a.createElement(i.a,{className:"block text-64",color:"secondary"},"chat")),c.a.createElement(u.a,{variant:"h6",className:"my-24"},"Chat App"),c.a.createElement(u.a,{className:"hidden md:flex px-16 pb-24 mt-24 text-center",color:"textSecondary"},"Select a contact to start a conversation!.."),c.a.createElement(m.a,{variant:"outlined",color:"primary",className:"flex md:hidden normal-case",onClick:function(){return t(E.k())}},"Select a contact to start a conversation!.."))),c.a.createElement(l.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"right",open:x,onClose:function(){return t(E.g())},classes:{paper:Object(v.a)(N.drawerPaper,"absolute right-0")},style:{position:"absolute"},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},c.a.createElement(ae,null)))))})}}]);