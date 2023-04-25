"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[787],{4173:function(n,e,t){t.d(e,{u:function(){return m}});var r,o,a,i=t(2791),s=t(4164),l=t(770),d=t(168),c=t(6444),u=c.ZP.div(r||(r=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  background-color: ",";\n  overflow-y: auto;\n"])),(function(n){return n.theme.colors.backdropBackground})),f=c.ZP.div(o||(o=(0,d.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 360px;\n  max-width: 1200px;\n  max-height: 90%;\n  padding: 40px 28px;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.modalBackground}),(function(n){return n.theme.shadows.modal})),p=c.ZP.button(a||(a=(0,d.Z)(["\n  position: absolute;\n  top: 19px;\n  right: 19px;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n      color: ",";\n      transform: scale(1.1);\n    }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),x=t(3329),h=document.querySelector("#modal-root"),m=function(n){var e=n.toggleModal,t=n.children;(0,i.useEffect)((function(){var n=function(n){n instanceof KeyboardEvent&&"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow=""}}),[e]);return(0,s.createPortal)((0,x.jsx)(u,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,x.jsxs)(f,{children:[t,(0,x.jsx)(p,{type:"button",onClick:e,children:(0,x.jsx)(l.W.CloseIcon,{})})]})}),h)}},5435:function(n,e,t){t.d(e,{h:function(){return I}});var r,o,a,i,s,l,d,c,u,f,p,x,h=t(9230),m=(t(4289),t(168)),g=t(6444),b=t(1087),Y=g.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  width: 100%;\n"]))),y=g.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n"]))),v=g.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #3e85f3;\n  color: ",";\n  padding: 8px 12px;\n  border-radius: 8px;\n  min-width: 173px;\n  height: 100%;\n"])),(function(n){return n.theme.colors.white})),D=g.ZP.span(i||(i=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 0.9;\n  text-transform: uppercase;\n  color: #ffffff;\n  min-width: 24px;\n\n  &:not(:last-of-type) {\n    margin-right: 10px;\n  }\n"]))),j=(0,g.ZP)(D)(s||(s=(0,m.Z)(["\n  font-weight: bold;\n"]))),Z=g.ZP.div(l||(l=(0,m.Z)(["\n  margin-left: 16px;\n  display: flex;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.125;\n"]))),M=g.ZP.button(d||(d=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  color: #616161;\n\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n"]))),k=g.ZP.button(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.125;\n  color: #616161;\n\n  margin-left: 16px;\n"]))),w=(g.ZP.button(u||(u=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n\n  color: #616161;\n"]))),(0,g.ZP)(b.OL)(f||(f=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: #3e85f3;\n  padding: 9px 16px;\n  background-color: #e3f3ff;\n  min-width: 82px;\n  &.active.act {\n    background-color: #3e85f350;\n  }\n"])))),P=(0,g.ZP)(w)(p||(p=(0,m.Z)(["\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n"]))),S=(0,g.ZP)(w)(x||(x=(0,m.Z)(["\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n"]))),C=t(770),E=t(7689),O=t(3329),I=function(n){var e=n.today,t=n.prevHandler,r=n.nextHandler,o=n.todayHandler,a=n.currentDay,i=n.nextDisabled,s=n.prevDisabled,l=(0,h.$G)().t,d=(0,E.TH)().pathname;return(0,O.jsxs)(Y,{children:[(0,O.jsxs)(y,{children:[(0,O.jsxs)(v,{children:[a&&(0,O.jsx)(D,{children:e.format("D")}),(0,O.jsx)(j,{children:e.format("MMMM")}),(0,O.jsx)(D,{children:e.format("YYYY")})]}),(0,O.jsxs)(Z,{children:[(0,O.jsx)(M,{type:"button",onClick:t,disabled:s,style:{transform:"rotate(180deg)",color:s?"#DCE3E5":"#616161"},children:(0,O.jsx)(C.W.Chevron,{})}),(0,O.jsx)(M,{type:"button",onClick:r,disabled:i,style:{color:i?"#DCE3E5":"#616161"},children:(0,O.jsx)(C.W.Chevron,{})})]}),(0,O.jsx)(k,{type:"button",onClick:o,children:l("Today")})]}),(0,O.jsxs)(Z,{children:[(0,O.jsx)(P,{className:d.includes("day")?"":"act",to:"/user/calendar/month",children:l("Month")}),(0,O.jsx)(S,{className:d.includes("day")?"act":"",to:"/user/calendar/month/day/".concat(e.format("YYYY-MM-DD")),children:l("Day")})]})]})}},787:function(n,e,t){t.r(e),t.d(e,{CurrentDayPage:function(){return R}});var r,o,a,i,s,l,d,c,u,f=t(3433),p=t(9439),x=t(2426),h=t.n(x),m=(t(4289),t(2791)),g=t(7689),b=t(9230),Y=t(5435),y=t(168),v=t(6444),D=v.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 32px;\n  padding-right: 32px;\n"]))),j=v.ZP.div(o||(o=(0,y.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  ","\n  width: 27px;\n  height: 26px;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.125;\n  color: #343434;\n"])),(function(n){return n.isHeader&&"text-align:center"})),Z=v.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.normal})),M=v.ZP.ul(i||(i=(0,y.Z)(["\n  list-style: none;\n  display: flex;\n\n  justify-content: space-between;\n  width: 100%;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n  padding: 10px 46px;\n\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.286;\n  color: #616161;\n"]))),k=v.ZP.li(s||(s=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n"]))),w=t(1413),P=t(4173),S=t(1134),C=t(6782),E=t(9085),O=t(3329),I=["low","medium","high"],W=h()(Date.now()).format("hh:mm"),z=function(n){var e,t,r,o,a,i=n.fieldsData,s=localStorage.getItem("i18nextLng"),l=h()((a=30,+Date.now()+60*a*1e3)).format("hh:mm"),d=(0,g.UO)().current,c=(0,m.useState)(null!==(e=null===i||void 0===i?void 0:i.title)&&void 0!==e?e:""),u=(0,p.Z)(c,2),f=u[0],x=u[1],b=(0,m.useState)(null!==(t=null===i||void 0===i?void 0:i.start)&&void 0!==t?t:W),Y=(0,p.Z)(b,2),y=Y[0],v=Y[1],D=(0,m.useState)(null!==(r=null===i||void 0===i?void 0:i.end)&&void 0!==r?r:l),j=(0,p.Z)(D,2),Z=j[0],M=j[1],k=(0,m.useState)(null!==(o=null===i||void 0===i?void 0:i.priority)&&void 0!==o?o:""),P=(0,p.Z)(k,2),z=P[0],A=P[1],H=(0,C.I6)(),L=(0,p.Z)(H,2),q=L[0],T=L[1].isLoading,B=i.title?"Edit ".concat(i.status):"Add ".concat(i.status),F=(0,S.cI)(),U=F.register,N=F.handleSubmit,_=F.formState.errors;console.log("errors :>> ",_);var G=function(n){switch(console.log("e.target.name :>> ",n.target.name),n.target.name){case"title":x(n.target.value);break;case"start":v(n.target.value);break;case"end":M(n.target.value)}};return(0,O.jsxs)("form",{style:{width:"303px",paddingTop:"48px",paddingBottom:"40px",paddingLeft:"18px",paddingRight:"18px",backgroundColor:"white"},onSubmit:N((function(n,e){var t=y<=Z;y>=W||(E.Am.error("Start time can't be in past!"),v(W)),t||(E.Am.error("End time can't be lower of start time!"),M(l)),console.log("formData :>> ",n);var r=(0,w.Z)((0,w.Z)({},n),{},{status:i.status,date:d});console.log("formData :>> ",r),q({data:r,lang:s})}),(function(n,e){Object.keys(n).forEach((function(e){var t;E.Am.error("Field ".concat(e," ").concat(null===(t=n[e])||void 0===t?void 0:t.message))}))})),children:[(0,O.jsxs)("label",{children:["Title",(0,O.jsx)("input",(0,w.Z)((0,w.Z)({type:"text",placeholder:"Enter text"},U("title",{required:" is requared!",maxLength:{value:250,message:"must be lower then 250 chars!"}})),{},{name:"title",value:f,onInput:G}))]}),(0,O.jsxs)("label",{children:["Start",(0,O.jsx)("input",(0,w.Z)((0,w.Z)({type:"time"},U("start",{required:"is requared!"})),{},{value:y,onInput:G}))]}),(0,O.jsxs)("label",{children:["End",(0,O.jsx)("input",(0,w.Z)((0,w.Z)({},U("end",{required:"is requared!"})),{},{type:"time",value:Z,onInput:G}))]}),(0,O.jsx)("div",{children:I.map((function(n,e){var t=I[e]===I[0],r=z?I[e].includes(z):t;return(0,O.jsxs)("label",{children:[(0,O.jsx)("input",(0,w.Z)((0,w.Z)({},U("priority",{validate:{priority:function(n){return I.includes(n)||"is not valid"}}})),{},{type:"radio",value:n,defaultChecked:r,onChange:function(n){return A(n.target.value)}})),n]},n)}))}),!T&&(0,O.jsx)("button",{type:"submit",children:B})]})},A=function(n){var e=n.status,t=n.data,r=(0,m.useState)(!1),o=(0,p.Z)(r,2),a=o[0],i=o[1],s=(0,w.Z)((0,w.Z)({},t),{},{status:e}),l=function(){i(!a)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("button",{type:"button",onClick:l,children:["Open modal for ",e]}),a&&(0,O.jsx)(P.u,{toggleModal:l,children:(0,O.jsx)(z,{fieldsData:s})})]})},H=t(770),L=v.ZP.button(l||(l=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 52px;\n  gap: 8px;\n\n  font-family: 'Inter';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.29;\n\n  text-align: center;\n\n  color: #111111;\n\n  background-color: #e3f3ff;\n  border: 1px dashed #3e85f3;\n  border-radius: 8px;\n"]))),q=function(){return(0,O.jsxs)(L,{type:"button",children:[(0,O.jsx)(H.W.AddIcon,{}),"Add task"]})},T=v.ZP.p(d||(d=(0,y.Z)(["\n  margin: 7px 0px 28px 0px;\n  font-size: 20px;\n  line-height: 1.2;\n  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',\n    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  font-weight: 700;\n  color: #111111;\n  &:first-letter {\n    text-transform: uppercase;\n  }\n"]))),B=function(n){var e=n.name;return(0,O.jsx)(T,{children:e})},F=function(n){var e=n.tasks,t=n.status,r=null===e||void 0===e?void 0:e.filter((function(n){return n.status===t}));return(0,O.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(n){return(0,O.jsx)("li",{style:{listStyle:"none"},children:n.title},n.title)}))})},U=v.ZP.li(c||(c=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 18px 23px 28px 20px;\n  width: 100%;\n  margin-top: 16px;\n  list-style: none;\n\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n"]))),N=function(n){var e=n.name,t=n.tasks,r=n.status;switch(e){case"todo":e="To do";break;case"inprogress":e="In progress";break;case"done":e="Done";break;default:return}return(0,O.jsxs)(U,{children:[(0,O.jsx)(B,{name:e}),(0,O.jsx)(F,{tasks:t,status:r}),(0,O.jsx)(q,{})]})},_=v.ZP.ul(u||(u=(0,y.Z)(["\n  display: flex;\n  list-style: none;\n  width: 100%;\n  gap: 27px;\n  min-height: 100%;\n"]))),G=function(n){var e=n.items,t=n.currentDate,r=(0,C.mN)().data,o=null===r||void 0===r?void 0:r.filter((function(n){return n.date===t}));return(0,O.jsx)(_,{children:e.map((function(n){return(0,O.jsx)(N,{name:n,tasks:o,status:n},n)}))})},R=function(){var n=(0,g.UO)().current,e=(0,g.s0)(),t=(0,b.$G)().t,r=["todo","inprogress","done"],o={title:"Edit me",start:"11:00",end:"12:00",date:"2023-04-25",priority:"low"};h().updateLocale("en",{day:{dow:1}}),h().locale(t("lang"));var a=(0,m.useState)(h()(n)),i=(0,p.Z)(a,2),s=i[0],l=i[1],d=s.clone().startOf("isoWeek"),c=d.clone().subtract(1,"day"),u=(0,f.Z)(Array(7)).map((function(){return c.add(1,"day").clone()})),x=(0,m.useState)((function(){return!!s.clone().add(1,"day").isAfter(d.clone().add(6,"day"))})),y=(0,p.Z)(x,2),v=y[0],w=y[1],P=(0,m.useState)((function(){return!!s.clone().subtract(1,"day").isBefore(d)})),S=(0,p.Z)(P,2),C=S[0],E=S[1],I=function(n){return s.isSame(n,"day")},W=Object.keys(o).length?o:null;return(0,O.jsxs)("main",{style:{width:"1151px"},children:[(0,O.jsxs)(D,{children:[(0,O.jsx)(Y.h,{prevHandler:function(){var n=s.clone().subtract(1,"day");n.clone().format("YYYY-MM-DD")===s.clone().startOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==s.clone().endOf("isoWeek").format("YYYY-MM-DD")&&E(!0),n.isBefore(d)?(E(!0),l(d),e("/user/calendar/month/day/".concat(d.format("YYYY-MM-DD")))):(w(!1),l(n),e("/user/calendar/month/day/".concat(n.format("YYYY-MM-DD"))))},nextHandler:function(){var n=s.clone().add(1,"day");n.clone().format("YYYY-MM-DD")===s.clone().endOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==s.clone().startOf("isoWeek").format("YYYY-MM-DD")?(w(!0),l(d.clone().add(6,"day")),e("/user/calendar/month/day/".concat(d.clone().add(6,"day").format("YYYY-MM-DD")))):(E(!1),l(n),e("/user/calendar/month/day/".concat(n.format("YYYY-MM-DD"))))},todayHandler:function(){E(!1),w(!1),l(h()()),e("/user/calendar/month/day/".concat(h()().format("YYYY-MM-DD")))},today:s,currentDay:!0,nextDisabled:v,prevDisabled:C}),(0,O.jsx)(M,{children:u.map((function(n){return(0,O.jsxs)(k,{children:[(0,O.jsx)("span",{children:n.format("ddd").toUpperCase()}),(0,O.jsx)(j,{onClick:function(){return function(n){n.clone().format("YYYY-MM-DD")===s.clone().startOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==s.clone().endOf("isoWeek").format("YYYY-MM-DD")?(E(!0),w(!1)):n.clone().format("YYYY-MM-DD")===s.clone().endOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==s.clone().startOf("isoWeek").format("YYYY-MM-DD")?(w(!0),E(!1)):(E(!1),w(!1)),l(h()(n.format("YYYY-MM-DD"))),e("/user/calendar/month/day/".concat(n.format("YYYY-MM-DD")))}(n)},children:I(n)?(0,O.jsx)(Z,{children:n.format("D")}):n.format("D")})]},n.format("DDMMYY"))}))}),(0,O.jsx)(G,{items:r,currentDate:n})]}),(0,O.jsx)("ul",{children:r.map((function(n){return(0,O.jsx)("li",{children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("p",{children:["ADD task button",(0,O.jsx)(A,{status:n,data:null})]}),(0,O.jsxs)("p",{children:["EDIT task button",(0,O.jsx)(A,{status:n,data:W})]}),(0,O.jsx)("br",{})]})},n)}))})]})}}}]);
//# sourceMappingURL=787.da125e8e.chunk.js.map