"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[142],{4173:function(n,e,t){t.d(e,{u:function(){return x}});var r,o,i,a=t(2791),d=t(4164),s=t(5788),c=t(168),l=t(6444),u=l.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  background-color: ",";\n  overflow-y: auto;\n"])),(function(n){return n.theme.colors.backdropBackground})),h=l.ZP.div(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 360px;\n  max-width: 1200px;\n  max-height: 90%;\n  padding: 40px 28px;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.modalBackground}),(function(n){return n.theme.shadows.modal})),p=l.ZP.button(i||(i=(0,c.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 8px;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),m=t(3329),f=document.querySelector("#modal-root"),x=function(n){var e=n.toggleModal,t=n.children;(0,a.useEffect)((function(){var n=function(n){n instanceof KeyboardEvent&&"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n);var e=document.querySelector("#menuContainer");null!==e&&void 0!==e&&e.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow=""}}),[e]);return(0,d.createPortal)((0,m.jsx)(u,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,m.jsxs)(h,{children:[t,(0,m.jsx)(p,{type:"button",onClick:e,children:(0,m.jsx)(s.W.CloseIcon,{})})]})}),f)}},5435:function(n,e,t){t.d(e,{h:function(){return L}});var r,o,i,a,d,s,c,l,u,h,p,m,f,x,g=t(9230),b=(t(4289),t(168)),y=t(6444),w=t(1087),Z=y.ZP.div(r||(r=(0,b.Z)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"]))),v=y.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 767px) {\n    justify-content: space-between;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 16px;\n  }\n"]))),j=y.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n\n  color: ",";\n  padding: 8px 12px;\n  border-radius: 8px;\n  height: 100%;\n  min-width: 155px;\n\n  @media screen and (min-width: 768px) {\n    min-width: 173px;\n  }\n"])),(function(n){return n.theme.colors.currentDay}),(function(n){return n.theme.colors.white})),k=y.ZP.span(a||(a=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.286;\n\n  text-transform: uppercase;\n\n  color: ",";\n  min-width: 24px;\n\n  &:not(:last-of-type) {\n    margin-right: 10px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.125;\n  }\n"])),(function(n){return n.theme.colors.white3})),Y=(0,y.ZP)(k)(d||(d=(0,b.Z)(["\n  font-weight: bold;\n"]))),M=y.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.125;\n\n  @media screen and (max-width: 767px) {\n    margin-top: 16px;\n  }\n"]))),D=y.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n"]))),P=y.ZP.button(l||(l=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  padding: 7px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  background-color: ",";\n  color: ",";\n\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n\n  &:disabled {\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 8px 16px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey9})),z=y.ZP.span(u||(u=(0,b.Z)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n\n  :active,\n  :focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    white-space: normal;\n    width: auto;\n  }\n"]))),W=y.ZP.button(h||(h=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.1667;\n  background-color: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 8px 16px;\n    font-size: 16px;\n    line-height: 1.125;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey})),S=(y.ZP.button(p||(p=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  padding: 8px 16px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n\n  color: #616161;\n"]))),(0,y.ZP)(w.OL)(m||(m=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: ",";\n  padding: 9px 16px;\n  background-color: ",";\n  min-width: 82px;\n  &.active.act {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.navLink}),(function(n){return n.theme.colors.monitorLink}),(function(n){return n.theme.colors.monitorActiveLink}))),O=(0,y.ZP)(S)(f||(f=(0,b.Z)(["\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n"]))),C=(0,y.ZP)(S)(x||(x=(0,b.Z)(["\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n"]))),H=t(5788),I=t(7689),E=t(3329),L=function(n){var e=n.today,t=n.prevHandler,r=n.nextHandler,o=n.todayHandler,i=n.currentDay,a=n.nextDisabled,d=n.prevDisabled,s=(0,g.$G)().t,c=(0,I.TH)().pathname;return e.locale(s("lang")),(0,E.jsxs)(Z,{children:[(0,E.jsxs)(v,{children:[(0,E.jsxs)(j,{children:[i&&(0,E.jsx)(k,{children:e.format("D")}),(0,E.jsx)(Y,{children:e.format("MMMM")}),(0,E.jsx)(k,{children:e.format("YYYY")})]}),(0,E.jsxs)(D,{children:[(0,E.jsxs)(P,{type:"button",onClick:t,disabled:d,style:{transform:"rotate(180deg)"},children:[(0,E.jsx)(H.W.Chevron,{}),(0,E.jsx)(z,{children:"Previous"})]}),(0,E.jsxs)(P,{type:"button",onClick:r,disabled:a,children:[(0,E.jsx)(H.W.Chevron,{}),(0,E.jsx)(z,{children:"Next"})]})]}),(0,E.jsx)(W,{type:"button",onClick:o,children:s("Today")})]}),(0,E.jsxs)(M,{children:[(0,E.jsx)(O,{className:c.includes("day")?"":"act",to:"/user/calendar",children:s("Month")}),(0,E.jsx)(C,{className:c.includes("day")?"act":"",to:"/user/calendar/day/".concat(e.format("YYYY-MM-DD")),children:s("Day")})]})]})}},2557:function(n,e,t){t.r(e),t.d(e,{CurrentDayPage:function(){return ue}});var r,o,i,a,d,s,c,l,u,h,p,m,f,x,g,b,y,w,Z,v,j,k,Y,M,D,P,z,W,S=t(3433),O=t(9439),C=t(2426),H=t.n(C),I=(t(4289),t(2791)),E=t(7689),L=t(5435),A=t(168),B=t(6444),F=B.ZP.div(r||(r=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),T=B.ZP.div(o||(o=(0,A.Z)(["\n  padding-top: 16px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"]))),N=B.ZP.div(i||(i=(0,A.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  ","\n  width: 27px;\n  height: 26px;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.125;\n  color: ",";\n"])),(function(n){return n.isHeader&&"text-align:center"}),(function(n){return n.theme.colors.black})),G=B.ZP.div(a||(a=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.colors.currentDay}),(function(n){return n.theme.colors.white3}),(function(n){return n.theme.radii.normal})),R=B.ZP.ul(d||(d=(0,A.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 14px 18px;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.286;\n\n  background-color: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 10px 46px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey3})),_=B.ZP.li(s||(s=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n\n  :nth-last-child(1) > span,\n  :nth-last-child(2) > span {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.blue})),q=t(9230),U=function(){var n=(0,I.useState)(!1),e=(0,O.Z)(n,2),t=e[0],r=e[1];return{isOpenModal:t,toggleModal:function(){r(!t)}}},$=t(5788),K=B.ZP.button(c||(c=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 52px;\n  gap: 8px;\n  margin-top: auto;\n\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n\n  text-align: center;\n\n  color: ",";\n\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n\n  cursor: pointer;\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black2}),(function(n){return n.theme.colors.blue3}),(function(n){return n.theme.borders.addButton}),(function(n){return n.theme.radii.normal})),V=t(3329),J=function(n){var e=n.onClick,t=(0,q.$G)().t;return(0,V.jsxs)(K,{type:"button",onClick:e,children:[(0,V.jsx)($.W.AddIcon,{}),t("Add task")]})},Q=B.ZP.p(l||(l=(0,A.Z)(["\n  margin: 7px 0px 28px 0px;\n  font-size: ",";\n  line-height: ",";\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n  &:first-letter {\n    text-transform: uppercase;\n  }\n"])),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.columnHeader})),X=function(n){var e=n.name;return(0,V.jsx)(Q,{children:e})},nn=t(4371),en=B.ZP.article(u||(u=(0,A.Z)(["\n  width: 100%;\n\n  padding-top: 14px;\n  padding-bottom: 18px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  background-color: ",";\n\n  border: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.colors.taskCardBackground}),(function(n){return n.theme.borders.tasks}),(function(n){return n.theme.radii.normal})),tn=B.ZP.h3(h||(h=(0,A.Z)(["\n  margin-bottom: 28px;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.l}),(function(n){return n.theme.colors.columnHeader})),rn=B.ZP.div(p||(p=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n\n  gap: ","px;\n"])),(function(n){return n.theme.space[3]})),on=B.ZP.div(m||(m=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: ","px;\n  height: ","px;\n\n  overflow: hidden;\n\n  border: ",";\n  border-radius: ",";\n\n  background-color: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.borders.avatar}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.white})),an=B.ZP.img(f||(f=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),dn=B.ZP.div(x||(x=(0,A.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: 12px;\n  padding-right: 12px;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n\n  border-radius: ",";\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.l}),(function(n){return n.theme.colors.white2}),(function(n){switch(n.name){case"low":return n.theme.colors.blue5;case"medium":return n.theme.colors.yellow;case"high":return n.theme.colors.pink;default:return n.theme.colors.grey4}}),(function(n){return n.theme.radii.small})),sn=t(1807),cn=t(4911),ln=t(1413),un=t(4173),hn=t(1134),pn=t(9085),mn=B.ZP.form(g||(g=(0,A.Z)(["\n  width: 303px;\n  padding-top: 8px;\n\n  font-family: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 396px;\n    padding-top: 0px;\n  }\n"])),(function(n){return n.theme.fontFamily.main})),fn=B.ZP.span(b||(b=(0,A.Z)(["\n  display: block;\n  width: 100%;\n"]))),xn=B.ZP.span(y||(y=(0,A.Z)(["\n  display: block;\n  margin-bottom: ","px;\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.xs})),gn=B.ZP.input(w||(w=(0,A.Z)(["\n  display: block;\n  width: 100%;\n\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  margin-bottom: ","px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: ","px;\n  }\n\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n  outline: ",";\n\n  border: none;\n  border-radius: ",";\n\n  &::placeholder {\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n\n    color: ",";\n    background-color: ",";\n  }\n\n  &::-webkit-calendar-picker-indicator {\n    display: none;\n  }\n\n  &:disabled {\n    color: ",";\n  }\n"])),(function(n){return"time"===n.type?n.theme.space[0]:n.theme.space[4]}),(function(n){return"time"===n.type?n.theme.space[0]:18}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey8}),(function(n){return n.theme.borders.modalInput}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.grey8}),(function(n){return n.theme.colors.disabled})),bn=B.ZP.div(Z||(Z=(0,A.Z)(["\n  display: flex;\n  gap: 15px;\n\n  width: 100%;\n\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"]))),yn=B.ZP.ul(v||(v=(0,A.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: center;\n\n  width: 100%;\n\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]})),wn=B.ZP.li(j||(j=(0,A.Z)(["\n  list-style: none;\n"]))),Zn=B.ZP.input(k||(k=(0,A.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n\n  &:disabled {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.disabled})),vn=B.ZP.span(Y||(Y=(0,A.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: start;\n\n  color: ",";\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n\n  border-radius: ",";\n"])),(function(n){switch(n.name){case"low":return n.theme.colors.blue5;case"medium":return n.theme.colors.yellow;case"high":return n.theme.colors.pink;default:return n.theme.colors.grey4}}),(function(n){return n.theme.radii.round})),jn=B.ZP.label(M||(M=(0,A.Z)(["\n  display: flex;\n  gap: 6px;\n  align-items: center;\n\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-transform: capitalize;\n\n  color: ",";\n\n  cursor: pointer;\n\n  :hover {\n    text-decoration: underline;\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.colors.grey})),kn=B.ZP.div(D||(D=(0,A.Z)(["\n  display: flex;\n  gap: 14px;\n  width: 100%;\n"]))),Yn=B.ZP.button(P||(P=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n\n  padding: 12px;\n\n  width: 100%;\n\n  text-transform: capitalize;\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n  background-color: ",";\n\n  border-radius: ",";\n  border: none;\n  outline: none;\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 15px;\n  }\n"])),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.lineHeights.xl}),(function(n){return"button"===n.type?n.theme.colors.black1:n.theme.colors.white3}),(function(n){return"button"===n.type?n.theme.colors.grey2:n.theme.colors.blue}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.hoverYellow}),(function(n){return n.theme.colors.blue})),Mn=function(n){var e=n.children,t=n.type,r=n.onClick,o=n.disabled;return(0,V.jsx)(Yn,{type:t,onClick:r,disabled:o,children:e})};!function(n){n.TODO="todo",n.INPROGRESS="inprogress",n.DONE="done"}(z||(z={})),function(n){n.LOW="low",n.MEDIUM="medium",n.HIGH="high"}(W||(W={}));var Dn,Pn,zn,Wn,Sn,On,Cn,Hn,In,En,Ln,An=[z.TODO,z.INPROGRESS,z.DONE],Bn=[W.LOW,W.MEDIUM,W.HIGH],Fn=t(8825),Tn=function(n){var e,t,r,o,i,a=n.fieldsData,d=n.toggleModal,s=(0,E.UO)().current,c=null!==a&&void 0!==a&&a.date?a.date:s,l=H()(Date.now()).format("YYYY-MM-DD"),u=localStorage.getItem("i18nextLng"),h=a.title?"edit":"add",p=null!==a&&void 0!==a&&a.start?a.start:H()(Date.now()).format("HH:mm"),m=H()((i=60,Date.now()+60*i*1e3)).format("HH:mm"),f=(0,I.useState)(null!==(e=null===a||void 0===a?void 0:a.title)&&void 0!==e?e:""),x=(0,O.Z)(f,2),g=x[0],b=x[1],y=(0,I.useState)(null!==(t=null===a||void 0===a?void 0:a.start)&&void 0!==t?t:p),w=(0,O.Z)(y,2),Z=w[0],v=w[1],j=(0,I.useState)(null!==(r=null===a||void 0===a?void 0:a.end)&&void 0!==r?r:m),k=(0,O.Z)(j,2),Y=k[0],M=k[1],D=(0,I.useState)(null!==(o=null===a||void 0===a?void 0:a.priority)&&void 0!==o?o:""),P=(0,O.Z)(D,2),z=P[0],W=P[1],S=(0,cn.I6)(),C=(0,O.Z)(S,2),L=C[0],A=C[1].isLoading,B=(0,cn._n)(),F=(0,O.Z)(B,2),T=F[0],N=F[1].isLoading,G=(0,hn.cI)(),R=G.register,_=G.handleSubmit,q=function(n,e){return n===l&&e>=p||(n>l||void 0)},U=Z<=Y,K=function(n){switch(n.target.name){case"title":b(n.target.value);break;case"start":v(n.target.value);break;case"end":M(n.target.value)}};return(0,V.jsxs)(mn,{onSubmit:_((function(n,e){if("edit"===h){if(!q(c,Z))return pn.Am.error((0,Fn.t)("taskModalMsg.editInPast")),void v(p);if(!U)return pn.Am.error((0,Fn.t)("taskModalMsg.endTimeWrong")),void M(m);T((0,ln.Z)((0,ln.Z)({},a),n)),d()}else{if(!q(c,Z))return pn.Am.error((0,Fn.t)("taskModalMsg.startTimeInPast")),void v(p);if(!U)return pn.Am.error((0,Fn.t)("taskModalMsg.endTimeWrong")),void M(m);var t=(0,ln.Z)((0,ln.Z)({},n),{},{status:a.status,date:s});L({data:t,lang:u}),d()}}),(function(n,e){Object.keys(n).forEach((function(e){var t;pn.Am.error("".concat((0,Fn.t)("taskModalMsg.Field")," ").concat((0,Fn.t)("taskModalMsg.".concat(e))," ").concat(null===(t=n[e])||void 0===t?void 0:t.message))}))})),children:[(0,V.jsxs)(fn,{children:[(0,V.jsx)(xn,{children:(0,Fn.t)("Title")}),(0,V.jsx)(gn,(0,ln.Z)((0,ln.Z)({type:"text",placeholder:(0,Fn.t)("Enter text")},R("title",{required:(0,Fn.t)("taskModalMsg.requared"),maxLength:{value:250,message:(0,Fn.t)("taskModalMsg.maxLength")}})),{},{name:"title",value:g,onInput:K}))]}),(0,V.jsxs)(bn,{children:[(0,V.jsxs)(fn,{children:[(0,V.jsx)(xn,{children:(0,Fn.t)("Start")}),(0,V.jsx)(gn,(0,ln.Z)((0,ln.Z)({type:"time"},R("start",{required:(0,Fn.t)("taskModalMsg.requared")})),{},{value:Z,onInput:K}))]}),(0,V.jsxs)(fn,{children:[(0,V.jsx)(xn,{children:(0,Fn.t)("End")}),(0,V.jsx)(gn,(0,ln.Z)((0,ln.Z)({},R("end",{required:(0,Fn.t)("taskModalMsg.requared")})),{},{type:"time",value:Y,onInput:K}))]})]}),(0,V.jsx)(yn,{children:Bn.map((function(n,e){var t=Bn[e]===Bn[0],r=z?Bn[e].includes(z):t;return(0,V.jsx)(wn,{children:(0,V.jsxs)(jn,{children:[(0,V.jsx)(Zn,(0,ln.Z)((0,ln.Z)({},R("priority",{validate:{priority:function(n){return Bn.includes(n)||(0,Fn.t)("taskModalMsg.priorityIsNotValid")}}})),{},{type:"radio",value:n,defaultChecked:r,onChange:function(n){return W(n.target.value)}})),(0,V.jsx)(vn,{name:n,children:r?(0,V.jsx)($.W.RadioButtonActive,{}):(0,V.jsx)($.W.RadioButton,{})}),(0,Fn.t)(n)]})},n)}))}),(0,V.jsxs)(kn,{children:[(0,V.jsxs)(Mn,{type:"submit",disabled:A||N,children:["add"===h?(0,V.jsx)($.W.AddIcon,{width:"18px",height:"18px"}):(0,V.jsx)($.W.EditIcon,{}),(0,Fn.t)(h)]}),"add"===h&&(0,V.jsx)(Mn,{type:"button",onClick:d,children:(0,Fn.t)("Cancel")})]})]})},Nn=function(n){var e,t=n.status,r=n.data,o=n.toggleModal;return e=r?(0,ln.Z)((0,ln.Z)({},r),{},{status:t}):{status:t},(0,V.jsx)(un.u,{toggleModal:o,children:(0,V.jsx)(Tn,{fieldsData:e,toggleModal:o})})},Gn=(t(7366),t(7467)),Rn=B.ZP.button(Dn||(Dn=(0,A.Z)(["\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),_n=(0,B.ZP)(Gn.Z)(Pn||(Pn=(0,A.Z)(["\n  &-content {\n  }\n"]))),qn=B.ZP.ul(zn||(zn=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n\n  padding-top: 12px;\n  padding-bottom: 14px;\n  padding-left: 14px;\n  padding-right: 14px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"]))),Un=B.ZP.li(Wn||(Wn=(0,A.Z)(["\n  list-style: none;\n  width: 100%;\n"]))),$n=B.ZP.button(Sn||(Sn=(0,A.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0;\n  gap: ","px;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  font-style: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n\n  color: ",";\n\n  cursor: pointer;\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover &:not(:disabled) {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-style: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.colors.popup}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.grey4}),(function(n){return n.theme.fontFamily.main}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.lineHeights.l})),Kn=t(348),Vn=function(n){var e=n.taskData,t=(0,cn._n)(),r=(0,O.Z)(t,2),o=r[0],i=r[1].isLoading,a=(0,Kn.a)("screen and (min-width: 768px)"),d=(0,q.$G)().t;return(0,V.jsx)(_n,{trigger:(0,V.jsx)(Rn,{children:(0,V.jsx)($.W.ArrowCircle,{})}),position:"top center",arrow:!1,offsetY:a?14:27,lockScroll:!0,closeOnDocumentClick:!0,closeOnEscape:!0,contentStyle:{width:"auto",height:a?"90px":"70px",padding:0,borderRadius:"8px",boxShadow:"0px 4px 16px rgba(17, 17, 17, 0.1)"},children:(0,V.jsx)(qn,{children:An.filter((function(n){return n!==e.status})).map((function(n){var t=n;switch(t){case z.TODO:t=d("To do");break;case z.INPROGRESS:t=d("In progress");break;case z.DONE:t=d("Done");break;default:return null}return(0,V.jsx)(Un,{children:(0,V.jsxs)($n,{onClick:function(){return function(n){var t=(0,ln.Z)((0,ln.Z)({},e),{},{status:n});o(t)}(n)},disabled:i,children:[t," ",(0,V.jsx)($.W.ArrowCircle,{width:a?"14px":"12px",height:a?"14px":"12px"})]})},n)}))})})},Jn=B.ZP.div(On||(On=(0,A.Z)(["\n  display: flex;\n  align-items: end;\n  gap: 10px;\n"]))),Qn=B.ZP.button(Cn||(Cn=(0,A.Z)(["\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  cursor: pointer;\n\n  color: ",";\n\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),Xn=function(n){var e=n.taskData,t=U(),r=t.isOpenModal,o=t.toggleModal,i=(0,cn.gu)(),a=(0,O.Z)(i,2),d=a[0],s=a[1].isLoading,c=(0,cn._n)(),l=(0,O.Z)(c,2)[1].isLoading;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(Jn,{children:[(0,V.jsx)(Vn,{taskData:e}),(0,V.jsx)(Qn,{type:"button",onClick:o,disabled:s||l,children:(0,V.jsx)($.W.EditIcon,{})}),(0,V.jsx)(Qn,{type:"button",onClick:function(){return d(e._id)},disabled:s||l,children:(0,V.jsx)($.W.Delete,{})})]}),r&&(0,V.jsx)(Nn,{status:e.status,data:e,toggleModal:o})]})},ne=function(n){var e=n.taskData,t=(0,nn.a)().user.avatarURL;return(0,V.jsxs)(en,{children:[(0,V.jsx)(tn,{children:(0,V.jsx)(sn.default,{text:e.title,length:30,tooltip:"true"})}),(0,V.jsxs)(rn,{children:[(0,V.jsxs)(rn,{children:[(0,V.jsx)(on,{children:t?(0,V.jsx)(an,{src:t,alt:"user"}):(0,V.jsx)($.W.UserAvatar,{width:"16px",higth:"16px"})}),(0,V.jsx)(dn,{name:e.priority,children:(0,Fn.t)(e.priority)})]}),(0,V.jsx)(Xn,{taskData:e})]})]})},ee=t(1495),te=(0,B.ZP)(ee.E)(Hn||(Hn=(0,A.Z)(["\n  max-height: 290px;\n\n  margin-bottom: 8;\n\n  @media screen and (min-width: 768px) {\n    max-height: 378px;\n    margin-bottom: ","px;\n\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.white})),re=B.ZP.li(In||(In=(0,A.Z)(["\n  list-style: none;\n  :not(:last-child) {\n    margin-bottom: 14px;\n  }\n\n  @media screen and (min-width: 768px) {\n    :not(:last-child) {\n      margin-bottom: 18px;\n    }\n  }\n"]))),oe={theme:"os-theme-dark",visibility:"auto",autoHide:"move",autoHideDelay:700,dragScroll:!0},ie=function(n){var e=n.tasks,t=n.status,r=null===e||void 0===e?void 0:e.filter((function(n){return n.status===t}));return(0,V.jsx)(te,{element:"ul",options:{scrollbars:oe},children:null===r||void 0===r?void 0:r.map((function(n){return(0,V.jsx)(re,{children:(0,V.jsx)(ne,{taskData:n})},n._id)}))})},ae=B.ZP.li(En||(En=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 18px 18px 10px 18px;\n  min-width: 335px;\n  width: 100%;\n  max-height: 432px;\n  list-style: none;\n  overflow-y: auto;\n\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n\n  background-color: ",";\n\n  scroll-snap-align: start;\n\n  @media screen and (min-width: 768px) {\n    min-width: 344px;\n    max-height: 568px;\n    padding: 18px 20px 28px 20px;\n  }\n"])),(function(n){return n.theme.colors.white})),de=function(n){var e=n.name,t=n.tasks,r=n.status,o=U(),i=o.isOpenModal,a=o.toggleModal,d=(0,q.$G)().t,s=e;switch(e){case"todo":e=d("To do");break;case"inprogress":e=d("In progress");break;case"done":e=d("Done");break;default:return null}return(0,V.jsxs)(ae,{children:[(0,V.jsx)(X,{name:e}),(0,V.jsx)(ie,{tasks:t,status:r}),i&&(0,V.jsx)(Nn,{status:s,data:null,toggleModal:a}),(0,V.jsx)(J,{onClick:a})]})},se=t(2092),ce=B.ZP.ul(Ln||(Ln=(0,A.Z)(["\n  display: flex;\n  list-style: none;\n  width: 100%;\n  gap: 16px;\n  min-height: 100%;\n  margin-top: 16px;\n\n  overflow: hidden;\n  overflow-x: auto;\n\n  scroll-snap-type: x mandatory;\n\n  @media screen and (min-width: 1440px) {\n    gap: 27px;\n  }\n"]))),le=function(n){var e=n.items,t=n.currentDate,r=(0,cn.mN)(null),o=r.data,i=r.isLoading,a=null===o||void 0===o?void 0:o.filter((function(n){return n.date===t}));return(0,V.jsxs)(V.Fragment,{children:[i&&(0,V.jsx)(se.a,{}),(0,V.jsx)(ce,{children:e.map((function(n){return(0,V.jsx)(de,{name:n,tasks:a,status:n},n)}))})]})},ue=function(){var n=(0,E.UO)().current,e=(0,E.s0)(),t=(0,q.$G)().t;H().updateLocale("en",{day:{dow:1}});var r=(0,I.useState)(H()(n)),o=(0,O.Z)(r,2),i=o[0],a=o[1];i.locale(t("lang"));var d=i.clone().startOf("isoWeek"),s=d.clone().subtract(1,"day"),c=(0,S.Z)(Array(7)).map((function(){return s.add(1,"day").clone()})),l=(0,I.useState)((function(){return!!i.clone().add(1,"day").isAfter(d.clone().add(6,"day"))})),u=(0,O.Z)(l,2),h=u[0],p=u[1],m=(0,I.useState)((function(){return!!i.clone().subtract(1,"day").isBefore(d)})),f=(0,O.Z)(m,2),x=f[0],g=f[1],b=function(n){return i.isSame(n,"day")},y=window.innerWidth<768;return(0,V.jsxs)(F,{children:[(0,V.jsx)(L.h,{prevHandler:function(){var n=i.clone().subtract(1,"day");n.clone().format("YYYY-MM-DD")===i.clone().startOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==i.clone().endOf("isoWeek").format("YYYY-MM-DD")&&g(!0),n.isBefore(d)?(g(!0),a(d),e("/user/calendar/day/".concat(d.format("YYYY-MM-DD")))):(p(!1),a(n),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD"))))},nextHandler:function(){var n=i.clone().add(1,"day");n.clone().format("YYYY-MM-DD")===i.clone().endOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==i.clone().startOf("isoWeek").format("YYYY-MM-DD")?(p(!0),a(d.clone().add(6,"day")),e("/user/calendar/day/".concat(d.clone().add(6,"day").format("YYYY-MM-DD")))):(g(!1),a(n),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD"))))},todayHandler:function(){g(!1),p(!1),a(H()()),e("/user/calendar/day/".concat(H()().format("YYYY-MM-DD")))},today:i,currentDay:!0,nextDisabled:h,prevDisabled:x}),(0,V.jsxs)(T,{children:[(0,V.jsx)(R,{children:c.map((function(n){return(0,V.jsxs)(_,{children:[(0,V.jsx)("span",{children:n.format(y?"dd":"ddd").toUpperCase()}),(0,V.jsx)(N,{onClick:function(){return function(n){n.clone().format("YYYY-MM-DD")===i.clone().startOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==i.clone().endOf("isoWeek").format("YYYY-MM-DD")?(g(!0),p(!1)):n.clone().format("YYYY-MM-DD")===i.clone().endOf("isoWeek").format("YYYY-MM-DD")&&n.clone().format("YYYY-MM-DD")!==i.clone().startOf("isoWeek").format("YYYY-MM-DD")?(p(!0),g(!1)):(g(!1),p(!1)),a(H()(n.format("YYYY-MM-DD"))),e("/user/calendar/day/".concat(n.format("YYYY-MM-DD")))}(n)},children:b(n)?(0,V.jsx)(G,{children:n.format("D")}):n.format("D")})]},n.format("DDMMYY"))}))}),(0,V.jsx)(le,{items:An,currentDate:n})]})]})}}}]);
//# sourceMappingURL=142.07f89735.chunk.js.map