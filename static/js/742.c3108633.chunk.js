"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[742],{4173:function(n,e,t){t.d(e,{u:function(){return x}});var r,o,i,a=t(2791),s=t(4164),c=t(5788),l=t(168),u=t(6444),d=u.ZP.div(r||(r=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  background-color: ",";\n  overflow-y: auto;\n"])),(function(n){return n.theme.colors.backdropBackground})),h=u.ZP.div(o||(o=(0,l.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 360px;\n  max-width: 1200px;\n  max-height: 90%;\n  padding: 40px 28px;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.modalBackground}),(function(n){return n.theme.shadows.modal})),m=u.ZP.button(i||(i=(0,l.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 8px;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),p=t(3329),f=document.querySelector("#modal-root"),x=function(n){var e=n.toggleModal,t=n.children;(0,a.useEffect)((function(){var n=function(n){n instanceof KeyboardEvent&&"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n);var e=document.querySelector("#menuContainer");null!==e&&void 0!==e&&e.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow=""}}),[e]);return(0,s.createPortal)((0,p.jsx)(d,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,p.jsxs)(h,{children:[t,(0,p.jsx)(m,{type:"button",onClick:e,children:(0,p.jsx)(c.W.CloseIcon,{})})]})}),f)}},3527:function(n,e,t){t.d(e,{G:function(){return a}});var r=t(1413),o=t(9439),i=t(2791),a=function(n,e){var t=(0,i.useState)(n),a=(0,o.Z)(t,2),s=a[0],c=a[1],l=(0,i.useState)(!1),u=(0,o.Z)(l,2),d=u[0],h=u[1],m=function(n,e){var t=(0,i.useState)(!1),r=(0,o.Z)(t,2),a=r[0],s=r[1],c=(0,i.useState)(!1),l=(0,o.Z)(c,2),u=l[0],d=l[1],h=(0,i.useState)(!1),m=(0,o.Z)(h,2),p=m[0],f=m[1],x=(0,i.useState)(!1),g=(0,o.Z)(x,2),b=g[0],y=g[1],w=(0,i.useState)(!1),v=(0,o.Z)(w,2),k=v[0],Z=v[1],j=(0,i.useState)(!1),S=(0,o.Z)(j,2),E=S[0],z=S[1],P=(0,i.useState)(!1),D=(0,o.Z)(P,2),C=D[0],B=D[1];return(0,i.useEffect)((function(){for(var t in e)switch(t){case"isEmail":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())?s(!1):s(!0);break;case"isSamePassword":n===e[t]?d(!1):d(!0);break;case"isName":/^['A-Za-z\u0410-\u044F\u0454\u0456\u0457\u0491]{2,}( ['A-Za-z\u0410-\u044F\u0454\u0456\u0457\u0491]{2,})?$/.test(String(n).toLowerCase())?f(!1):f(!0);break;case"isPassword":/^(?=.*)[^\s]{7,32}$/.test(String(n).toLowerCase())?y(!1):y(!0);break;case"isSkype":/^.{1,16}$/.test(String(n).toLowerCase())?z(!1):z(!0);break;case"isPhone":/^(\+38)?[0-9]{10}$/.test(n)?B(!1):B(!0);break;default:return}}),[n,e]),(0,i.useEffect)((function(){Z(!(a||p||b||u||E||C))}),[a,p,b,u,E,C]),{emailError:a,confirmError:u,nameError:p,passwordError:b,validForm:k,skypeError:E,phoneError:C}}(s,e);return(0,r.Z)({value:s,onChange:function(n){c(n.target.value)},onBlur:function(n){h(!0)},isDirty:d},m)}},742:function(n,e,t){t.r(e),t.d(e,{AccountPage:function(){return yn}});var r,o,i,a,s,c,l,u,d,h,m,p,f,x,g,b,y,w,v,k,Z,j,S,E,z,P=t(9439),D=t(5048),C=t(2791),B=t(4371),_=t(3527),L=t(1693),F=t(168),H=t(6444),I=t(9513),W=t.n(I),U=(t(8639),H.ZP.div(r||(r=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 335px;\n  height: 730px;\n  background: ",";\n  border-radius: 16px;\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    height: 920px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 1087px;\n    height: 760px;\n  }\n"])),(function(n){return n.theme.colors.white}))),A=H.ZP.form(o||(o=(0,F.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),G=H.ZP.div(i||(i=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border: ",";\n  border-radius: 50%;\n  overflow: hidden;\n\n  @media screen and (max-width: 767px) {\n    position: absolute;\n    top: -36px;\n    left: 132px;\n    background-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n    margin-bottom: 20px;\n    width: 124px;\n    height: 124px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 60px;\n    margin-bottom: 20px;\n    width: 124px;\n    height: 124px;\n  }\n"])),(function(n){return n.theme.borders.avatar}),(function(n){return n.theme.colors.white})),R=H.ZP.img(a||(a=(0,F.Z)(["\n  padding: 20px;\n\n  @media screen and (min-width: 768px) {\n    padding: 38px;\n  }\n"]))),$=H.ZP.h2(s||(s=(0,F.Z)(["\n  margin-bottom: 4px;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  @media screen and (max-width: 767px) {\n    margin-top: 59px;\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black5})),M=H.ZP.p(c||(c=(0,F.Z)(["\n  margin-bottom: 40px;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl})),N=H.ZP.label(l||(l=(0,F.Z)(["\n  position: absolute;\n  cursor: pointer;\n  @media screen and (max-width: 767px) {\n    left: 177px;\n    top: 23px;\n  }\n  @media screen and (min-width: 768px) {\n    left: 200px;\n    top: 143px;\n  }\n  @media screen and (min-width: 1440px) {\n    left: 400px;\n    top: 160px;\n  }\n"]))),q=H.ZP.div(u||(u=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 14px;\n  height: 14px;\n  background-color: ",";\n  border-radius: 50%;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white})),T=H.ZP.div(d||(d=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 767px) {\n    width: 8px;\n    height: 8px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n"]))),Y=H.ZP.input(h||(h=(0,F.Z)(["\n  opacity: 0;\n  height: 0;\n  width: 0;\n  line-height: 0;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n"]))),K=H.ZP.span(m||(m=(0,F.Z)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n\n  :active,\n  :focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    white-space: normal;\n    width: auto;\n  }\n"]))),O=H.ZP.div(p||(p=(0,F.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    min-height: 458px;\n    justify-content: space-between;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 758px;\n    min-height: 264px;\n  }\n"]))),V=H.ZP.div(f||(f=(0,F.Z)(["\n  position: relative;\n  @media (max-width: 767px) {\n    margin-bottom: 28px;\n  }\n  @media (min-width: 768px) {\n    margin-bottom: 26px;\n  }\n"]))),J=H.ZP.input(x||(x=(0,F.Z)(["\n  width: 299px;\n  height: 42px;\n  padding: 12px 14px;\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n\n  color: ",";\n\n  margin-top: 8px;\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    height: 46px;\n    padding: 14px 18px;\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.borders.userInput}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.s})),Q=H.ZP.label(g||(g=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl})),X=(0,H.ZP)(W())(b||(b=(0,F.Z)(["\n  width: 299px;\n  height: 42px;\n  padding-left: 18px;\n  margin-top: 8px;\n  border: ",";\n  border-radius: 8px;\n  background-color: ",";\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    height: 46px;\n    font-size: ",";\n  }\n"])),(function(n){return!n.birthDay&&n.theme.borders.userInput||n.birthDay&&null===n.selected&&"1px solid red"||n.birthDay&&null!==n.selected&&"1px solid green"}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black5}),(function(n){return n.theme.fontSizes.m})),nn=H.ZP.button(y||(y=(0,F.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  padding: 0;\n  width: 195px;\n  height: 46px;\n  border-radius: 16px;\n  border: none;\n  cursor: pointer;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  background-color: ",";\n  color: ",";\n  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;\n  &:disabled {\n    background-color: rgba(62, 133, 243, 0.5);\n  }\n  &:disabled:hover {\n    background-color: rgba(62, 133, 243, 0.5);\n    color: ",";\n    cursor: not-allowed;\n  }\n  &:disabled:focus {\n    background-color: rgba(62, 133, 243, 0.5);\n    color: ",";\n  }\n  :hover,\n  :focus {\n    background: gold;\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    width: 262px;\n    height: 48px;\n    margin-top: 25px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 50px;\n  }\n"])),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue})),en=H.ZP.span(w||(w=(0,F.Z)(["\n  position: absolute;\n  font-size: 12px;\n  left: 20px;\n  bottom: -35%;\n"]))),tn=H.ZP.div(v||(v=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),rn=H.ZP.button(k||(k=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  padding: 8px 10px;\n  border-radius: ",";\n  border: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n    transform: scale(1.02);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: ","px;\n    height: ","px;\n  }\n"])),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.design?"14px":n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.hoverBackground}),(function(n){return n.design?"150":"170"}),(function(n){return n.design?"37":"46"})),on=H.ZP.div(Z||(Z=(0,F.Z)(["\n  & .react-datepicker {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n\n  & .react-datepicker .react-datepicker__header {\n    background-color: ",";\n    color: ",";\n    border-radius: 16px 16px 0 0;\n    border-bottom: 1px solid #ffffff;\n  }\n\n  & .react-datepicker__navigation-icon {\n    ::before {\n      border-color: ",";\n    }\n  }\n\n  & .react-datepicker__current-month {\n    color: ",";\n  }\n\n  & .react-datepicker__day {\n    background-color: ",";\n    color: ",";\n    :hover,\n    :focus {\n      background-color: ",";\n      color: ",";\n      border-radius: ",";\n    }\n  }\n\n  & .react-datepicker__day-name {\n    color: ",";\n  }\n\n  & .react-datepicker__day--selected {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n\n  & .react-datepicker__day--weekend {\n    color: ",";\n  }\n\n  & .react-datepicker__day--outside-month {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.lightYellow}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.lightYellow}),(function(n){return n.theme.colors.blue})),an=t(9230),sn=t(5788),cn=t(74),ln=t(6375),un=H.ZP.form(j||(j=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),dn=H.ZP.label(S||(S=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.design?"14px":n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.colors.grey})),hn=H.ZP.textarea(E||(E=(0,F.Z)(["\n  resize: none;\n  outline: none;\n  width: 100%;\n  padding: 12px 16px;\n  border-radius: ",";\n  margin-bottom: 20px;\n  margin-top: 10px;\n  background-color: ",";\n  :focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.colors.modalBackground}),(function(n){return n.theme.colors.blue})),mn=H.ZP.button(z||(z=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 10px;\n  border-radius: ",";\n  border: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n    /* transform: scale(1.02); */\n  }\n\n  @media screen and (min-width: 768px) {\n    width: ","px;\n    height: ","px;\n  }\n"])),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue}),(function(n){return n.design?"14px":n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.hoverBackground}),(function(n){return n.design?"150":"170"}),(function(n){return n.design?"37":"46"})),pn=t(3329),fn=function(){var n=(0,cn.MS)(),e=(0,P.Z)(n,2),t=e[0],r=e[1].isLoading,o=(0,C.useState)(""),i=(0,P.Z)(o,2),a=i[0],s=i[1],c=(0,C.useState)(0),l=(0,P.Z)(c,2),u=l[0],d=l[1],h=(0,an.$G)().t;return(0,pn.jsxs)(un,{onSubmit:function(n){n.preventDefault(),t({reviewText:a,stars:u}),s(""),d(0)},children:[(0,pn.jsxs)(dn,{children:[h("Leave your review"),(0,pn.jsx)(hn,{onChange:function(n){s(n.target.value)},value:a,name:"review",maxLength:200,cols:30,rows:7})]}),(0,pn.jsx)("div",{style:{marginBottom:"20px"},children:(0,pn.jsx)(ln.i,{onClick:function(n){d(n)},ratingValue:u,size:20,label:!0,transition:!0,fillColor:"orange",emptyColor:"gray",className:"foo"})}),(0,pn.jsx)(mn,{type:"submit",disabled:r||""===a||0===u,children:h("Add review")})]})},xn=t(4173),gn=t(8693),bn=function(){var n,e,t,r,o,i=(0,an.$G)().t,a=(0,B.a)().user,s=(0,C.useState)(a.birthday?new Date(a.birthday):""),c=(0,P.Z)(s,2),l=c[0],u=c[1],d=(0,C.useState)(null),h=(0,P.Z)(d,2),m=h[0],p=h[1],f=(0,_.G)(null!==(n=a.name)&&void 0!==n?n:"",{isName:!0}),x=(0,_.G)(null!==(e=a.email)&&void 0!==e?e:"",{isEmail:!0}),g=(0,_.G)(null!==(t=a.skype)&&void 0!==t?t:"",{isSkype:!0}),b=(0,_.G)(null!==(r=a.phone)&&void 0!==r?r:"",{isPhone:!0}),y=(0,_.G)(l,{}),w=(0,D.I0)(),v=(0,C.useState)(!1),k=(0,P.Z)(v,2),Z=k[0],j=k[1],S=function(){j(!Z)};return(0,pn.jsx)(U,{children:(0,pn.jsxs)(A,{autoComplete:"off",onSubmit:function(){var n=new FormData;n.append("name",f.value),n.append("email",x.value),n.append("phone",b.value),n.append("skype",g.value),n.append("birthday",l),n.append("avatar",m||a.avatarURL),w((0,L.rn)(n))},children:[(0,pn.jsx)(G,{children:m?(0,pn.jsx)(R,{src:URL.createObjectURL(m),alt:"avatar"}):(0,pn.jsx)(R,{src:null===a.avatarURL||"null"===a.avatarURL?gn.Z:a.avatarURL,alt:"avatar"})}),(0,pn.jsxs)(N,{htmlFor:"avatar",children:[(0,pn.jsx)(q,{children:(0,pn.jsx)(T,{children:(0,pn.jsx)(sn.W.AddIcon,{})})}),(0,pn.jsx)(Y,{id:"avatar",type:"file",onChange:function(n){var e=n.target,t=e.name,r=e.files;"avatarURL"!==t||p(r[0])},accept:"image/*,.png,.jpg,.jpeg,.webp",name:"avatarURL"}),(0,pn.jsx)(K,{children:"Upload Avatar"})]}),(0,pn.jsxs)($,{children:[" ",null!==(o=null===a||void 0===a?void 0:a.name)&&void 0!==o?o:" "," "]}),(0,pn.jsxs)(M,{children:[" ",i("User")," "]}),(0,pn.jsxs)(O,{children:[(0,pn.jsxs)(V,{children:[(0,pn.jsxs)(Q,{htmlFor:"username",children:[i("Name"),(0,pn.jsx)(J,{style:{border:f.isDirty&&!f.nameError?"1px solid green":f.isDirty&&f.nameError&&"1px solid red"},type:"text",value:f.value,name:"name",id:"name",onChange:function(n){return f.onChange(n)},onBlur:function(n){return f.onBlur(n)},placeholder:i("Enter your name"),required:!0})]}),f.isDirty&&f.nameError&&(0,pn.jsx)(en,{style:{color:"red"},children:i("Enter your name pls")}),f.isDirty&&!f.nameError&&(0,pn.jsx)(en,{style:{color:"green"},children:i("Name is valid")})]}),(0,pn.jsxs)(V,{children:[(0,pn.jsxs)(Q,{htmlFor:"phone",children:[i("Phone"),(0,pn.jsx)(J,{style:{border:b.isDirty&&!b.phoneError?"1px solid green":b.isDirty&&b.phoneError&&"1px solid red"},type:"tel",name:"phone",id:"phone",value:b.value,onChange:function(n){return b.onChange(n)},onBlur:function(n){return b.onBlur(n)}})]}),b.isDirty&&b.phoneError&&(0,pn.jsx)(en,{style:{color:"red"},children:i("Enter your phone pls")}),b.isDirty&&!b.phoneError&&(0,pn.jsx)(en,{style:{color:"green"},children:i("Phone is valid")})]}),(0,pn.jsxs)(V,{children:[(0,pn.jsxs)(Q,{htmlFor:"birthday",children:[i("Birthday"),(0,pn.jsx)(on,{children:(0,pn.jsx)(X,{name:"birthday",id:"date",type:"date",input:!0,birthDay:y.isDirty,selected:l,onBlur:function(n){return y.onBlur(n)},onChange:function(n){return u(n)},dateFormat:"yyyy-MM-dd",calendarStartDay:1})})]}),y.isDirty&&null===l&&(0,pn.jsx)(en,{style:{color:"red"},children:i("Enter your birthday pls")}),y.isDirty&&null!==l&&(0,pn.jsx)(en,{style:{color:"green"},children:i("birthday is valid")})]}),(0,pn.jsxs)(V,{children:[(0,pn.jsxs)(Q,{htmlFor:"skype",children:["Skype",(0,pn.jsx)(J,{style:{border:g.isDirty&&!g.skypeError?"1px solid green":g.isDirty&&g.skypeError&&"1px solid red"},type:"text",name:"skype",id:"skype",value:g.value,onChange:function(n){return g.onChange(n)},onBlur:function(n){return g.onBlur(n)}})]}),g.isDirty&&g.skypeError&&(0,pn.jsx)(en,{style:{color:"red"},children:i("Enter your skype pls")}),g.isDirty&&!g.skypeError&&(0,pn.jsx)(en,{style:{color:"green"},children:i("Skype is valid")})]}),(0,pn.jsxs)(V,{children:[(0,pn.jsxs)(Q,{htmlFor:"email",children:[i("Email"),(0,pn.jsx)(J,{style:{border:x.isDirty&&!x.emailError?"1px solid green":x.isDirty&&x.emailError&&"1px solid red"},type:"email",name:"email",id:"email",value:x.value,onChange:function(n){return x.onChange(n)},onBlur:function(n){return x.onBlur(n)},placeholder:i("Enter your email"),required:!0})]}),x.isDirty&&x.emailError&&(0,pn.jsx)(en,{style:{color:"red"},children:i("Enter a valid Email")})||x.isDirty&&!x.emailError&&(0,pn.jsx)(en,{style:{color:"green"},children:i("Email is correct")})]})]}),(0,pn.jsxs)(tn,{children:[(0,pn.jsx)(nn,{type:"submit",disabled:!x.validForm||!f.validForm,children:i("Save changes")}),(0,pn.jsx)(rn,{onClick:S,type:"button",children:i("Leave review")})]}),Z&&(0,pn.jsx)(xn.u,{toggleModal:S,children:(0,pn.jsx)(fn,{})})]})})},yn=function(){return(0,pn.jsx)("div",{children:(0,pn.jsx)(bn,{})})}}}]);
//# sourceMappingURL=742.c3108633.chunk.js.map