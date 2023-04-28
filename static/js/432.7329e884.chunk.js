"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[432],{4173:function(n,e,t){t.d(e,{u:function(){return x}});var r,i,o,s=t(2791),a=t(4164),u=t(1023),l=t(168),d=t(6444),c=d.ZP.div(r||(r=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  background-color: ",";\n  overflow-y: auto;\n"])),(function(n){return n.theme.colors.backdropBackground})),h=d.ZP.div(i||(i=(0,l.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 360px;\n  max-width: 1200px;\n  max-height: 90%;\n  padding: 40px 28px;\n  border-radius: ",";\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.modalBackground}),(function(n){return n.theme.shadows.modal})),m=d.ZP.button(o||(o=(0,l.Z)(["\n  position: absolute;\n  top: 19px;\n  right: 19px;\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),p=t(3329),f=document.querySelector("#modal-root"),x=function(n){var e=n.toggleModal,t=n.children;(0,s.useEffect)((function(){var n=function(n){n instanceof KeyboardEvent&&"Escape"===n.code&&e()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n);var e=document.querySelector("#menuContainer");null!==e&&void 0!==e&&e.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow=""}}),[e]);return(0,a.createPortal)((0,p.jsx)(c,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,p.jsxs)(h,{children:[t,(0,p.jsx)(m,{type:"button",onClick:e,children:(0,p.jsx)(u.W.CloseIcon,{})})]})}),f)}},3527:function(n,e,t){t.d(e,{G:function(){return s}});var r=t(1413),i=t(9439),o=t(2791),s=function(n,e){var t=(0,o.useState)(n),s=(0,i.Z)(t,2),a=s[0],u=s[1],l=(0,o.useState)(!1),d=(0,i.Z)(l,2),c=d[0],h=d[1],m=function(n,e){var t=(0,o.useState)(!1),r=(0,i.Z)(t,2),s=r[0],a=r[1],u=(0,o.useState)(!1),l=(0,i.Z)(u,2),d=l[0],c=l[1],h=(0,o.useState)(!1),m=(0,i.Z)(h,2),p=m[0],f=m[1],x=(0,o.useState)(!1),g=(0,i.Z)(x,2),b=g[0],y=g[1],w=(0,o.useState)(!1),v=(0,i.Z)(w,2),Z=v[0],j=v[1],k=(0,o.useState)(!1),S=(0,i.Z)(k,2),E=S[0],z=S[1],P=(0,o.useState)(!1),D=(0,i.Z)(P,2),C=D[0],B=D[1];return(0,o.useEffect)((function(){for(var t in e)switch(t){case"isEmail":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())?a(!1):a(!0);break;case"isSamePassword":n===e[t]?c(!1):c(!0);break;case"isName":/^['A-Za-z\u0410-\u044F\u0454\u0456\u0457\u0491]{2,}( ['A-Za-z\u0410-\u044F\u0454\u0456\u0457\u0491]{2,})?$/.test(String(n).toLowerCase())?f(!1):f(!0);break;case"isPassword":/^(?=.*)[^\s]{7,32}$/.test(String(n).toLowerCase())?y(!1):y(!0);break;case"isSkype":/^.{1,16}$/.test(String(n).toLowerCase())?z(!1):z(!0);break;case"isPhone":/^(\+38)?[0-9]{10}$/.test(n)?B(!1):B(!0);break;default:return}}),[n,e]),(0,o.useEffect)((function(){j(!(s||p||b||d||E||C))}),[s,p,b,d,E,C]),{emailError:s,confirmError:d,nameError:p,passwordError:b,validForm:Z,skypeError:E,phoneError:C}}(a,e);return(0,r.Z)({value:a,onChange:function(n){u(n.target.value)},onBlur:function(n){h(!0)},isDirty:c},m)}},432:function(n,e,t){t.r(e),t.d(e,{AccountPage:function(){return fn}});var r,i,o,s,a,u,l,d,c,h,m,p,f,x,g,b,y,w,v,Z,j,k,S,E,z=t(9439),P=t(5048),D=t(2791),C=t(4371),B=t(3527),L=t(1693),F=t(168),H=t(6444),W=t(9513),I=t.n(W),U=(t(8639),H.ZP.div(r||(r=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 335px;\n  height: 730px;\n  background: ",";\n  border-radius: 16px;\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    height: 920px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 1087px;\n    height: 760px;\n  }\n"])),(function(n){return n.theme.colors.white}))),A=H.ZP.form(i||(i=(0,F.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),G=H.ZP.div(o||(o=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border: ",";\n  border-radius: 50%;\n  overflow: hidden;\n\n  @media screen and (max-width: 767px) {\n    position: absolute;\n    top: -36px;\n    left: 132px;\n    background-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n    margin-bottom: 20px;\n    width: 124px;\n    height: 124px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 60px;\n    margin-bottom: 20px;\n    width: 124px;\n    height: 124px;\n  }\n"])),(function(n){return n.theme.borders.avatar}),(function(n){return n.theme.colors.white})),R=H.ZP.img(s||(s=(0,F.Z)(["\n\n"]))),$=H.ZP.h2(a||(a=(0,F.Z)(["\n  margin-bottom: 4px;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  @media screen and (max-width: 767px) {\n    margin-top: 59px;\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black5})),M=H.ZP.p(u||(u=(0,F.Z)(["\n  margin-bottom: 40px;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl})),q=H.ZP.label(l||(l=(0,F.Z)(["\n  position: absolute;\n  @media screen and (max-width: 767px) {\n    left: 177px;\n    top: 23px;\n  }\n  @media screen and (min-width: 768px) {\n    left: 200px;\n    top: 143px;\n  }\n  @media screen and (min-width: 1440px) {\n    left: 400px;\n    top: 160px;\n  }\n"]))),N=H.ZP.div(d||(d=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 14px;\n  height: 14px;\n  background-color: ",";\n  border-radius: 50%;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white})),_=H.ZP.div(c||(c=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 767px) {\n    width: 8px;\n    height: 8px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n"]))),T=H.ZP.input(h||(h=(0,F.Z)(["\n  opacity: 0;\n  height: 0;\n  width: 0;\n  line-height: 0;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n"]))),K=H.ZP.div(m||(m=(0,F.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    min-height: 458px;\n    justify-content: space-between;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 758px;\n    min-height: 264px;\n  }\n"]))),O=H.ZP.div(p||(p=(0,F.Z)(["\n  position: relative;\n  @media (max-width: 767px) {\n    margin-bottom: 28px;\n  }\n  @media (min-width: 768px) {\n    margin-bottom: 26px;\n  }\n"]))),J=H.ZP.input(f||(f=(0,F.Z)(["\n  width: 299px;\n  height: 42px;\n  padding: 12px 14px;\n  border: ",";\n  border-radius:","; \n  background-color: ",";\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height:  ",";\n  color: ",";\n  margin-top: 8px;\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    height: 46px;\n    padding: 14px 18px;\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.borders.userInput}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black2}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.s})),Q=H.ZP.label(x||(x=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.lineHeights.m}),(function(n){return n.theme.colors.black2}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl})),V=(0,H.ZP)(I())(g||(g=(0,F.Z)(["\n  width: 299px;\n  height: 42px;\n  padding-left: 18px;\n  margin-top: 8px;\n  border: ",";\n  border-radius: 8px;\n  background-color: ",";\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    height: 46px;\n    font-size: ",";\n  }\n"])),(function(n){return(n.birthDay?n.birthDay&&null===n.selected&&"1px solid red":"1px solid rgba(17, 17, 17, 0.15)")||n.birthDay&&null!==n.selected&&"1px solid green"}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.black5}),(function(n){return n.theme.fontSizes.m})),X=H.ZP.button(b||(b=(0,F.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  padding: 0;\n  width: 195px;\n  height: 46px;\n  border-radius: 16px;\n  border: none;\n  cursor: pointer;\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  background-color: ",";\n  color: ",";\n  &:disabled {\n    background-color: rgba(62, 133, 243, 0.5);\n  }\n  &:disabled:hover {\n    background-color: rgba(62, 133, 243, 0.5);\n    color: ",";\n    cursor: not-allowed;\n  }\n  &:disabled:focus {\n    background-color: rgba(62, 133, 243, 0.5);\n    color: ",";\n  }\n  :hover,\n  :focus {\n    background: gold;\n    color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    width: 262px;\n    height: 48px;\n    margin-top: 25px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 50px;\n  }\n"])),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue})),Y=H.ZP.span(y||(y=(0,F.Z)(["\n  position: absolute;\n  font-size: 12px;\n  left: 20px;\n  bottom: -35%;\n"]))),nn=H.ZP.div(w||(w=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),en=H.ZP.button(v||(v=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  padding: 8px 10px;\n  border-radius: ",";\n  border: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  box-shadow: 0 0 15px rgba(236, 236, 236, 0.5);\n  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n    transform: scale(1.02);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: ","px;\n    height: ","px;\n  }\n"])),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.design?"14px":n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.hoverBackground}),(function(n){return n.design?"150":"170"}),(function(n){return n.design?"37":"46"})),tn=t(9230),rn=t(1023),on=t(74),sn=H.ZP.form(Z||(Z=(0,F.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n\n"]))),an=H.ZP.label(j||(j=(0,F.Z)(["\ndisplay: flex;\nflex-direction: column;\nfont-size: ",";\nline-height: ",";\nfont-weight: ",";\ncolor: ",";\n"])),(function(n){return n.design?"14px":n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.colors.grey})),un=H.ZP.textarea(k||(k=(0,F.Z)(["\n    resize:none;\n    outline: none;\n    width: 100%;\n    padding: 12px 16px;\n    border-radius: ","; \n    margin-bottom:20px;\n    :focus {\n        outline: none;\n        border-color:",";\n    }\n"])),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.colors.blue})),ln=H.ZP.input(S||(S=(0,F.Z)(["\n   margin-bottom:20px;\n"]))),dn=H.ZP.button(E||(E=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 10px;\n  border-radius: ",";\n  border: ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  box-shadow: ",";\n  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n    transform: scale(1.02);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: ","px;\n    height: ","px;\n  }\n"])),(function(n){return n.theme.radii.medium}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.blue}),(function(n){return n.design?"14px":n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.xl}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.shadows.button}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.hoverBackground}),(function(n){return n.design?"150":"170"}),(function(n){return n.design?"37":"46"})),cn=t(3329),hn=function(){var n=(0,on.MS)(),e=(0,z.Z)(n,2),t=e[0],r=e[1].isLoading,i=(0,D.useState)(""),o=(0,z.Z)(i,2),s=o[0],a=o[1],u=(0,D.useState)(""),l=(0,z.Z)(u,2),d=l[0],c=l[1],h=(0,tn.$G)().t,m=function(n){var e=n.target,t=e.value;switch(e.name){case"review":return a(t);case"stars":return c(t);default:return}};return(0,cn.jsxs)(sn,{onSubmit:function(n){n.preventDefault(),t({reviewText:s,stars:d}),a(""),c("")},children:[(0,cn.jsxs)(an,{children:[h("Leave your review"),(0,cn.jsx)(un,{onChange:m,value:s,name:"review",maxLength:"200",cols:"30",rows:"7"})]}),(0,cn.jsxs)(an,{children:[h("Rating"),(0,cn.jsx)(ln,{onChange:m,type:"number",value:d,name:"stars",min:"1",max:"5"})]}),(0,cn.jsxs)(dn,{type:"submit",disabled:r||""===s||""===d,children:[" ",h("Add review")]})]})},mn=t(4173),pn=function(){var n,e,t,r,i,o=(0,tn.$G)().t,s=(0,C.a)().user,a=(0,D.useState)(s.birthday?new Date(s.birthday):""),u=(0,z.Z)(a,2),l=u[0],d=u[1],c=(0,D.useState)(null),h=(0,z.Z)(c,2),m=h[0],p=h[1],f=(0,B.G)(null!==(n=s.name)&&void 0!==n?n:"",{isName:!0}),x=(0,B.G)(null!==(e=s.email)&&void 0!==e?e:"",{isEmail:!0}),g=(0,B.G)(null!==(t=s.skype)&&void 0!==t?t:"",{isSkype:!0}),b=(0,B.G)(null!==(r=s.phone)&&void 0!==r?r:"",{isPhone:!0}),y=(0,B.G)(l,{}),w=(0,P.I0)(),v=(0,D.useState)(!1),Z=(0,z.Z)(v,2),j=Z[0],k=Z[1],S=function(){k(!j)};return(0,cn.jsx)(U,{children:(0,cn.jsxs)(A,{autoComplete:"off",onSubmit:function(){var n=new FormData;n.append("name",f.value),n.append("email",x.value),n.append("phone",b.value),n.append("skype",g.value),n.append("birthday",l),n.append("avatar",m||s.avatarURL),w((0,L.rn)(n))},children:[(0,cn.jsx)(G,{children:m?(0,cn.jsx)(R,{src:URL.createObjectURL(m),alt:"avatar"}):s.avatarURL?(0,cn.jsx)(R,{src:s.avatarURL,alt:"avatar"}):(0,cn.jsx)(rn.W.UserAvatar,{})}),(0,cn.jsxs)(q,{htmlFor:"avatar",children:[(0,cn.jsx)(N,{children:(0,cn.jsx)(_,{children:(0,cn.jsx)(rn.W.AddIcon,{})})}),(0,cn.jsx)(T,{id:"avatar",type:"file",onChange:function(n){var e=n.target,t=e.name,r=e.files;"avatarURL"!==t||p(r[0])},accept:"image/*,.png,.jpg,.jpeg,.webp",name:"avatarURL"})]}),(0,cn.jsxs)($,{children:[" ",null!==(i=null===s||void 0===s?void 0:s.name)&&void 0!==i?i:" "," "]}),(0,cn.jsxs)(M,{children:[" ",o("User")," "]}),(0,cn.jsxs)(K,{children:[(0,cn.jsxs)(O,{children:[(0,cn.jsxs)(Q,{htmlFor:"username",children:[o("Name"),(0,cn.jsx)(J,{style:{border:f.isDirty&&!f.nameError?"1px solid green":f.isDirty&&f.nameError&&"1px solid red"},type:"text",value:f.value,name:"name",id:"name",onChange:function(n){return f.onChange(n)},onBlur:function(n){return f.onBlur(n)},placeholder:o("Enter your name"),required:!0})]}),f.isDirty&&f.nameError&&(0,cn.jsx)(Y,{style:{color:"red"},children:o("Enter your name pls")}),f.isDirty&&!f.nameError&&(0,cn.jsx)(Y,{style:{color:"green"},children:o("Name is valid")})]}),(0,cn.jsxs)(O,{children:[(0,cn.jsxs)(Q,{htmlFor:"phone",children:[o("Phone"),(0,cn.jsx)(J,{style:{border:b.isDirty&&!b.phoneError?"1px solid green":b.isDirty&&b.phoneError&&"1px solid red"},type:"tel",name:"phone",id:"phone",value:b.value,onChange:function(n){return b.onChange(n)},onBlur:function(n){return b.onBlur(n)}})]}),b.isDirty&&b.phoneError&&(0,cn.jsx)(Y,{style:{color:"red"},children:o("Enter your phone pls")}),b.isDirty&&!b.phoneError&&(0,cn.jsx)(Y,{style:{color:"green"},children:o("Phone is valid")})]}),(0,cn.jsxs)(O,{children:[(0,cn.jsxs)(Q,{htmlFor:"birthday",children:[o("Birthday"),(0,cn.jsx)(V,{name:"birthday",id:"date",type:"date",input:!0,birthDay:y.isDirty,selected:l,onBlur:function(n){return y.onBlur(n)},onChange:function(n){return d(n)},dateFormat:"yyyy-MM-dd"})]}),y.isDirty&&null===l&&(0,cn.jsx)(Y,{style:{color:"red"},children:o("Enter your birthday pls")}),y.isDirty&&null!==l&&(0,cn.jsx)(Y,{style:{color:"green"},children:o("birthday is valid")})]}),(0,cn.jsxs)(O,{children:[(0,cn.jsxs)(Q,{htmlFor:"skype",children:["Skype",(0,cn.jsx)(J,{style:{border:g.isDirty&&!g.skypeError?"1px solid green":g.isDirty&&g.skypeError&&"1px solid red"},type:"text",name:"skype",id:"skype",value:g.value,onChange:function(n){return g.onChange(n)},onBlur:function(n){return g.onBlur(n)}})]}),g.isDirty&&g.skypeError&&(0,cn.jsx)(Y,{style:{color:"red"},children:o("Enter your skype pls")}),g.isDirty&&!g.skypeError&&(0,cn.jsx)(Y,{style:{color:"green"},children:o("Skype is valid")})]}),(0,cn.jsxs)(O,{children:[(0,cn.jsxs)(Q,{htmlFor:"email",children:[o("Email"),(0,cn.jsx)(J,{style:{border:x.isDirty&&!x.emailError?"1px solid green":x.isDirty&&x.emailError&&"1px solid red"},type:"email",name:"email",id:"email",value:x.value,onChange:function(n){return x.onChange(n)},onBlur:function(n){return x.onBlur(n)},placeholder:o("Enter your email"),required:!0})]}),x.isDirty&&x.emailError&&(0,cn.jsx)(Y,{style:{color:"red"},children:o("Enter a valid Email")})||x.isDirty&&!x.emailError&&(0,cn.jsx)(Y,{style:{color:"green"},children:o("Email is correct")})]})]}),(0,cn.jsxs)(nn,{children:[(0,cn.jsx)(X,{type:"submit",disabled:!x.validForm||!f.validForm,children:o("Save changes")}),(0,cn.jsx)(en,{onClick:S,type:"button",children:o("Leave review")})]}),j&&(0,cn.jsx)(mn.u,{toggleModal:S,children:(0,cn.jsx)(hn,{})})]})})},fn=function(){return(0,cn.jsx)("div",{children:(0,cn.jsx)(pn,{})})}}}]);
//# sourceMappingURL=432.7329e884.chunk.js.map