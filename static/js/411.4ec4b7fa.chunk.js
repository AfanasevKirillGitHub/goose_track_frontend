"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[411],{3527:function(n,i,e){e.d(i,{G:function(){return d}});var t=e(1413),r=e(9439),o=e(2791),d=function(n,i){var e=(0,o.useState)(n),d=(0,r.Z)(e,2),p=d[0],a=d[1],x=(0,o.useState)(!1),s=(0,r.Z)(x,2),h=s[0],g=s[1],l=function(n,i){var e=(0,o.useState)(!1),t=(0,r.Z)(e,2),d=t[0],p=t[1],a=(0,o.useState)(!1),x=(0,r.Z)(a,2),s=x[0],h=x[1],g=(0,o.useState)(!1),l=(0,r.Z)(g,2),m=l[0],c=l[1];return(0,o.useEffect)((function(){for(var e in i)switch(e){case"minLength":n.length<i[e]?p(!0):p(!1);break;case"isEmail":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())?h(!1):h(!0);break;case"isSamePassword":n===i[e]&&""!==n?c(!0):c(!1);break;default:console.log("\u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438")}}),[n,i]),{minLengthError:d,emailError:s,confirmError:m}}(p,i);return(0,o.useEffect)((function(){g(""!==p)}),[p]),(0,t.Z)({value:p,onChange:function(n){a(n.target.value)},isDirty:h},l)}},6411:function(n,i,e){e.r(i),e.d(i,{RegisterPage:function(){return X}});var t,r,o,d,p,a,x,s,h,g,l,m,c,u,f,b,w,y,v=e(9439),Z=e(9230),j=e(1087),E=e(168),L=e(6444),P=L.ZP.input(t||(t=(0,E.Z)(["\nborder-radius: 40px;\nborder: 1px solid rgba(245, 146, 86, 0.5);\nbackground-color: rgba(253, 247, 242, 1);\noutline: none;\n\n\n\n@media (max-width: 767px) {\n    padding-top: 11px;\n    padding-right: 14px;\n    padding-bottom: 12px;\n    padding-left: 14px;\n    height: 40px;\n    width: 280px;\n    font-weight: 400;\n    font-size: 14px;  \n    line-height: 1.35;  \n    // margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n    padding-top: 14px;\n    padding-right: 32px;\n    padding-bottom: 13px;\n    padding-left: 32px;\n    height: 52;\n    width: 448px;\n    font-weight: 400;\n    font-size: 18px;  \n    line-height: 1.39;\n    // margin-bottom: 40px;\n}\n\n"]))),D=L.ZP.button(r||(r=(0,E.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n:disabled {\n    background-color: rgba(245,146,86,0.5);\n    border: none\n}\n\n@media (max-width: 767px) {\n    // padding-top: 11px;\n    // padding-right: 14px;\n    // padding-bottom: 12px;\n    // padding-left: 14px;\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 40px;\n    margin-top: 16px;\n\n};\n@media (min-width: 768px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 40px;\n};\n@media (min-width: 1280px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 48px;\n    // width: 458px;\n    // font-weight: 400;\n    // font-size: 18px;  \n    // line-height: 1.39;\n};\n"]))),C=L.ZP.div(o||(o=(0,E.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n\n@media (max-width: 767px) {\n    width: 100%;\n    height: 100vh\n};\n@media (min-width: 768px) {\n    background-color: #FFF;\n    padding-top: 60px;\n    padding-right: 80px;\n    padding-bottom: 60px;\n    padding-left: 80px;\n    width: 608;\n    height: 583;\n    border-radius: 40px;\n}\n@media (min-width: 1280px) {\n    width: 618px;\n    // height: 587px;\n};\n\n"]))),k=(L.ZP.form(d||(d=(0,E.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n"]))),L.ZP.h2(p||(p=(0,E.Z)(["\n    margin-bottom: 13px;\n\n@media (max-width: 767px) {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.375;\n    \n};\n@media (min-width: 768px) {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.36;\n};\n\n"])))),z=L.ZP.div(a||(a=(0,E.Z)(["\nposition: relative;\n@media (max-width: 767px) { \n    margin-bottom: 24px;\n};\n@media (min-width: 768px) { \n    margin-bottom: 40px;\n};\n"]))),F=L.ZP.span(x||(x=(0,E.Z)(["\nposition: absolute;\nfont-size: 12px;\nleft: 20px;\nbottom: -40%;\n"]))),S=L.ZP.a(s||(s=(0,E.Z)(["\n margin-bottom: 13px;\n height: 24px\n\n"]))),G=L.ZP.span(h||(h=(0,E.Z)(["\n    position: absolute;\n    right: 15px;\n    top: 55%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    color: #F59256;\n\n    @media (min-width: 768px) {\n        right: 20px;  \n    }\n"]))),R=e(3527),q=e(3728),T=e(2791),A=e(8617),M=e(3329),_=function(n){var i=n.onToggle,e=n.getData,t=(0,Z.$G)().t,r=(0,T.useState)("password"),o=(0,v.Z)(r,2),d=o[0],p=o[1],a=(0,T.useState)("password"),x=(0,v.Z)(a,2),s=x[0],h=x[1],g=(0,R.G)("",{isEmail:!0}),l=(0,R.G)("",{minLength:6}),m=(0,R.G)("",{isSamePassword:l.value});return(0,M.jsxs)(C,{children:[(0,M.jsx)(k,{children:t("Registration")}),(0,M.jsxs)(S,{href:"https://your-pets.onrender.com/api/users/google",children:[" ",(0,M.jsx)(q.JM8,{style:{width:"1.5em",height:"1.5em"}})]}),(0,M.jsxs)(z,{children:[(0,M.jsx)(P,{style:{border:g.isDirty&&!g.emailError?"1px solid green":g.isDirty&&g.emailError&&"1px solid red"},type:"email",value:g.value,onChange:function(n){return g.onChange(n)},name:"email",placeholder:t("Email"),required:!0}),g.isDirty&&g.emailError&&(0,M.jsx)(F,{style:{color:"red"},children:t("Enter a valid Email")})||g.isDirty&&!g.emailError&&(0,M.jsx)(F,{style:{color:"green"},children:t("Email is correct")})]}),(0,M.jsxs)(z,{children:[(0,M.jsx)(P,{style:{border:l.isDirty&&!l.minLengthError?"1px solid green":l.isDirty&&l.minLengthError&&"1px solid red"},type:d,value:l.value,onChange:function(n){return l.onChange(n)},name:"password",placeholder:t("Password"),required:!0}),l.isDirty&&l.minLengthError&&(0,M.jsx)(F,{style:{color:"red"},children:t("Enter a valid Password")}),l.isDirty&&!l.minLengthError&&(0,M.jsx)(F,{style:{color:"green"},children:t("Password is correct")}),(0,M.jsx)(G,{onClick:function(){p("password"===d?"text":"password")},children:"password"===d?(0,M.jsx)(A.Rbo,{}):(0,M.jsx)(A.MBb,{})})]}),(0,M.jsxs)(z,{children:[(0,M.jsx)(P,{style:{border:m.isDirty&&l.value===m.value?"1px solid green":m.isDirty&&l.value!==m.value&&"1px solid red"},type:s,value:m.value,onChange:function(n){return m.onChange(n)},name:"confirmPassword",placeholder:t("Confirm Password"),required:!0}),m.isDirty&&l.value===m.value&&(0,M.jsx)(F,{style:{color:"green"},children:t("confirmPassword is correct")}),m.isDirty&&l.value!==m.value&&(0,M.jsx)(F,{style:{color:"red"},children:t("confirmPassword is not correct")}),(0,M.jsx)(G,{onClick:function(){h("password"===s?"text":"password")},children:"password"===s?(0,M.jsx)(A.Rbo,{}):(0,M.jsx)(A.MBb,{})})]}),(0,M.jsx)(D,{disabled:!m.confirmError,type:"button",onClick:function(){e({email:g.value,password:l.value}),i()},children:t("Next")}),(0,M.jsxs)("p",{children:[t("Already have an account"),"? ",(0,M.jsx)(j.OL,{to:"/login",children:t("Login")})]})]})},B=e(1413),N=e(5048),$=e(5322),O=L.ZP.input(g||(g=(0,E.Z)(["\nborder-radius: 40px;\nborder: 1px solid rgba(245, 146, 86, 0.5);\nbackground-color: rgba(253, 247, 242, 1);\noutline: none;\n\n\n@media (max-width: 767px) {\n    padding-top: 11px;\n    padding-right: 14px;\n    padding-bottom: 12px;\n    padding-left: 14px;\n    height: 40px;\n    width: 280px;\n    font-weight: 400;\n    font-size: 14px;  \n    line-height: 1.35;  \n    // margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n    padding-top: 14px;\n    padding-right: 32px;\n    padding-bottom: 13px;\n    padding-left: 32px;\n    height: 52;\n    width: 448px;\n    font-weight: 400;\n    font-size: 18px;  \n    line-height: 1.39;\n    // margin-bottom: 40px;\n}\n\n"]))),I=L.ZP.button(l||(l=(0,E.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n// margin-bottom:not(:last-child) : 12px\n:disabled {\n    background-color: rgba(245,146,86,0.5);\n    border: none\n}\n\n\n@media (max-width: 767px) {\n    // padding-top: 11px;\n    // padding-right: 14px;\n    // padding-bottom: 12px;\n    // padding-left: 14px;\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 12px;\n    margin-top: 16px;\n};\n@media (min-width: 768px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 16px;\n};\n@media (min-width: 1280px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 48px;\n    // width: 458px;\n    // font-weight: 400;\n    // font-size: 18px;  \n    // line-height: 1.39;\n};\n"]))),J=L.ZP.button(m||(m=(0,E.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n\n\n\n@media (max-width: 767px) {\n    // padding-top: 11px;\n    // padding-right: 14px;\n    // padding-bottom: 12px;\n    // padding-left: 14px;\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 40px;\n    margin-top: 16px;\n};\n@media (min-width: 768px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 40px;\n};\n@media (min-width: 1280px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 48px;\n    // width: 458px;\n    // font-weight: 400;\n    // font-size: 18px;  \n    // line-height: 1.39;\n};\n"]))),Y=L.ZP.div(c||(c=(0,E.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n\n@media (max-width: 767px) {\n    width: 100%;\n    height: 100vh\n};\n@media (min-width: 768px) {\n    background-color: #FFF;\n    padding-top: 60px;\n    padding-right: 80px;\n    padding-bottom: 60px;\n    padding-left: 80px;\n    width: 608px;\n    height: 643px;\n    border-radius: 40px;\n}\n@media (min-width: 1280px) {\n    width: 618px;\n    height: 667px;\n};\n\n"]))),H=L.ZP.form(u||(u=(0,E.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n"]))),K=L.ZP.h2(f||(f=(0,E.Z)(["\n    margin-bottom: 40px;\n\n@media (max-width: 767px) {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.375;\n    \n};\n@media (min-width: 768px) {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.36;\n};\n"]))),Q=L.ZP.div(b||(b=(0,E.Z)(["\nposition: relative;\n@media (max-width: 767px) { \n    margin-bottom: 24px;\n};\n@media (min-width: 768px) { \n    margin-bottom: 40px;\n};\n"]))),U=L.ZP.span(w||(w=(0,E.Z)(["\nposition: absolute;\nfont-size: 12px;\nleft: 20px;\nbottom: -40%;\n"]))),V=function(n){var i=n.onToggle,e=n.dataForm1,t=(0,N.I0)(),r=(0,Z.$G)().t,o=(0,R.G)("",{minLength:2}),d=(0,R.G)("",{minLength:3}),p=(0,R.G)("",{minLength:10});return(0,M.jsxs)(Y,{children:[(0,M.jsx)(K,{children:r("Registration")}),(0,M.jsxs)(H,{onSubmit:function(n){n.preventDefault();var i=n.currentTarget,r=(0,B.Z)((0,B.Z)({},e),{},{name:o.value,city:d.value,phone:p.value});t((0,$.y1)(r)),i.reset()},autoComplete:"off",children:[(0,M.jsxs)(Q,{children:[(0,M.jsx)(O,{style:{border:o.isDirty&&!o.minLengthError?"1px solid green":o.isDirty&&o.minLengthError&&"1px solid red"},onChange:function(n){return o.onChange(n)},value:o.value,type:"text",name:"name",placeholder:r("Name"),required:!0}),o.isDirty&&o.minLengthError&&(0,M.jsx)(U,{style:{color:"red"},children:r("Enter your name pls")}),o.isDirty&&!o.minLengthError&&(0,M.jsx)(U,{style:{color:"green"},children:r("Name is valid")})]}),(0,M.jsxs)(Q,{children:[(0,M.jsx)(O,{style:{border:d.isDirty&&!d.minLengthError?"1px solid green":d.isDirty&&d.minLengthError&&"1px solid red"},onChange:function(n){return d.onChange(n)},value:d.value,type:"text",name:"city",placeholder:r("City, Region"),required:!0}),d.isDirty&&d.minLengthError&&(0,M.jsx)(U,{style:{color:"red"},children:r("Enter your city pls")}),d.isDirty&&!d.minLengthError&&(0,M.jsx)(U,{style:{color:"green"},children:r("City is valid")})]}),(0,M.jsxs)(Q,{children:[(0,M.jsx)(O,{style:{border:p.isDirty&&!p.minLengthError?"1px solid green":p.isDirty&&p.minLengthError&&"1px solid red"},onChange:function(n){return p.onChange(n)},value:p.value,type:"tel",name:"phone",placeholder:r("Mobile Phone"),required:!0}),p.isDirty&&p.minLengthError&&(0,M.jsx)(U,{style:{color:"red"},children:r("Enter your phone pls")}),p.isDirty&&!p.minLengthError&&(0,M.jsx)(U,{style:{color:"green"},children:r("Phone is valid")})]}),(0,M.jsx)(I,{disabled:o.minLengthError||d.minLengthError||p.minLengthError,type:"submit",children:r("Registration")}),(0,M.jsx)(J,{onClick:i,type:"button",children:r("Back")})]}),(0,M.jsxs)("p",{children:[r("Already have an account"),"?",(0,M.jsx)(j.OL,{to:"/login",children:r("Login")})]})]})},W=L.ZP.main(y||(y=(0,E.Z)(["\n    display: flex;\n    justify-content: center;\n\n    @media (min-width: 768px) {\n        padding-top: 200px;\n    }\n    @media (min-width: 1280px) {\n        padding-top: 80px;\n    };\n}\n\n"]))),X=function(){var n=(0,T.useState)(!0),i=(0,v.Z)(n,2),e=i[0],t=i[1],r=(0,T.useState)({}),o=(0,v.Z)(r,2),d=o[0],p=o[1],a=function(){t(!e)};return(0,M.jsx)(W,{children:e?(0,M.jsx)(_,{getData:function(n){p(n)},onToggle:a}):(0,M.jsx)(V,{dataForm1:d,onToggle:a})})}}}]);
//# sourceMappingURL=411.4ec4b7fa.chunk.js.map