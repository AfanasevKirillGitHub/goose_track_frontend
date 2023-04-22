"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[898],{1452:function(u,D,n){n.d(D,{R:function(){return B}});var e,t,F=n(9230),A=n(6549),C=n(1550),o=n(168),r=n(6444),i=r.ZP.div(e||(e=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n"]))),E=r.ZP.button(t||(t=(0,o.Z)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: transform 300ms linear;\n\n  :hover {\n    transform: scale(1.4);\n  }\n"]))),s=n(3329),B=function(){var u=(0,F.$G)().i18n,D=(0,A.E)().setSearchParams,n=function(n){var e=n.currentTarget.name;D({lang:e}),u.changeLanguage(e)};return(0,s.jsxs)(i,{children:[(0,s.jsx)(E,{type:"button",onClick:n,name:"en",children:(0,s.jsx)("img",{src:C,alt:"usa flag",style:{width:"20px"}})}),(0,s.jsx)("span",{children:"/"}),(0,s.jsx)(E,{type:"button",onClick:n,name:"ua",children:"\ud83d\udc9b\ud83d\udc99"})]})}},6549:function(u,D,n){n.d(D,{E:function(){return F}});var e=n(9439),t=n(1087),F=function(){var u,D,n,F=(0,t.lr)(),A=(0,e.Z)(F,2),C=A[0],o=A[1];return{lang:null!==(u=C.get("lang"))&&void 0!==u?u:"en",keyword:null!==(D=C.get("key"))&&void 0!==D?D:"",token:null!==(n=C.get("token"))&&void 0!==n?n:"",setSearchParams:o}}},3527:function(u,D,n){n.d(D,{G:function(){return A}});var e=n(1413),t=n(9439),F=n(2791),A=function(u,D){var n=(0,F.useState)(u),A=(0,t.Z)(n,2),C=A[0],o=A[1],r=(0,F.useState)(!1),i=(0,t.Z)(r,2),E=i[0],s=i[1],B=function(u,D){var n=(0,F.useState)(!1),e=(0,t.Z)(n,2),A=e[0],C=e[1],o=(0,F.useState)(!1),r=(0,t.Z)(o,2),i=r[0],E=r[1],s=(0,F.useState)(!1),B=(0,t.Z)(s,2),a=B[0],h=B[1],l=(0,F.useState)(!1),c=(0,t.Z)(l,2),d=c[0],f=c[1],m=(0,F.useState)(!1),x=(0,t.Z)(m,2),g=x[0],p=x[1];return(0,F.useEffect)((function(){for(var n in D)switch(n){case"isEmail":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(u).toLowerCase())?C(!1):C(!0);break;case"isSamePassword":u===D[n]?E(!1):E(!0);break;case"isName":/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])+$/.test(String(u).toLowerCase())?h(!1):h(!0);break;case"isPassword":/^(?=.*)[^\s]{7,32}$/.test(String(u).toLowerCase())?f(!1):f(!0);break;default:console.log("\u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438")}}),[u,D]),(0,F.useEffect)((function(){p(!(A||a||d||i))}),[A,a,d,i]),{emailError:A,confirmError:i,nameError:a,passwordError:d,validForm:g}}(C,D);return(0,e.Z)({value:C,onChange:function(u){o(u.target.value)},onBlur:function(u){s(!0)},isDirty:E},B)}},5898:function(u,D,n){n.r(D),n.d(D,{LoginPage:function(){return X}});var e,t,F,A,C,o,r,i,E,s,B,a,h,l=n(9439),c=n(9230),d=n(5048),f=n(5322),m=n(168),x=n(6444),g=n(1087),p=x.ZP.div(e||(e=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: ",";\n"])),(function(u){return u.theme.colors.blue2})),w=x.ZP.div(t||(t=(0,m.Z)(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n"]))),S=x.ZP.form(F||(F=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 335px;\n  padding: 40px 24px;\n  margin-bottom: 18px;\n  background-color: ",";\n  border-radius: ",";\n  @media (min-width: 768px) {\n    width: 480px;\n    padding: 40px;\n    margin-bottom: 24px;\n  }\n"])),(function(u){return u.theme.colors.white}),(function(u){return u.theme.radii.normal})),b=x.ZP.h2(A||(A=(0,m.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  color: ",";\n  margin-bottom: 32px;\n  @media (min-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(u){return u.theme.fontSizes.l}),(function(u){return u.theme.fontWeights.semiBold}),(function(u){return u.theme.lineHeights.xl}),(function(u){return u.theme.colors.blue}),(function(u){return u.theme.fontSizes.xxxl})),j=x.ZP.label(C||(C=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  color: ",";\n   @media (min-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(u){return u.theme.fontSizes.xs}),(function(u){return u.theme.fontWeights.semiBold}),(function(u){return u.theme.lineHeights.l}),(function(u){return u.theme.colors.black2}),(function(u){return u.theme.fontSizes.s})),v=x.ZP.input(o||(o=(0,m.Z)(["\n  outline: none;\n  width: 100%;\n  border: ",";\n  border-radius: ",";\n  margin-top: ","px;\n  padding: 14px;\n  &::placeholder {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n    color: ",";\n    @media (min-width: 768px) {\n    font-size: ",";\n  }\n  }\n"])),(function(u){return u.theme.borders.task}),(function(u){return u.theme.radii.normal}),(function(u){return u.theme.space[3]}),(function(u){return u.theme.fontWeights.regular}),(function(u){return u.theme.fontSizes.s}),(function(u){return u.theme.lineHeights.xl}),(function(u){return u.theme.colors.grey4}),(function(u){return u.theme.fontSizes.m})),Z=x.ZP.button(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 287px;\n  height: 44px;\n  padding: 14px;\n  margin-top: ","px;\n\n  border: none;\n  border-radius: ",";\n  background: ",";\n  color: ",";\n  box-shadow: ",";\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  svg {\n    margin-left: ","px;\n    width: 18px;\n    height: 18px;\n  }\n  &:hover,\n  :focus {\n    transform: scale(1.05);\n  }\n  @media (min-width: 768px) {\n    width: 400px;\n    height: 56px;\n    font-size: ",";\n  }\n"])),(function(u){return u.theme.space[5]}),(function(u){return u.theme.radii.medium}),(function(u){return u.theme.colors.blue}),(function(u){return u.theme.colors.white}),(function(u){return u.theme.shadows.button}),(function(u){return u.theme.fontWeights.semiBold}),(function(u){return u.theme.fontSizes.s}),(function(u){return u.theme.lineHeights.xl}),(function(u){return u.theme.space[3]}),(function(u){return u.theme.fontSizes.l})),z=x.ZP.div(i||(i=(0,m.Z)(["\nposition: relative;\n@media (max-width: 767px) { \n    margin-bottom: 24px;\n};\n@media (min-width: 768px) { \n    margin-bottom: 40px;\n};\n"]))),I=x.ZP.span(E||(E=(0,m.Z)(["\nposition: absolute;\nfont-size: 12px;\nleft: 20px;\nbottom: -40%;\n"]))),R=x.ZP.a(s||(s=(0,m.Z)(["\n margin-bottom: 13px;\n height: 24px\n"]))),V=x.ZP.span(B||(B=(0,m.Z)(["\n    position: absolute;\n    right: 15px;\n    top: 70%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    color: ",";\n\n    @media (min-width: 768px) {\n        right: 20px;  \n    }\n"])),(function(u){return u.theme.colors.blue})),H=x.ZP.img(a||(a=(0,m.Z)(["\n  display: none;\n  @media (min-width: 1440px) {\n    display: block;\n    position: fixed;\n    right: 60px;\n    bottom: 20px;\n    width: 370px;\n    height: 520px;\n  }\n"]))),U=(0,x.ZP)(g.OL)(h||(h=(0,m.Z)(["\n   font-size: ",";\n   font-weight: ",";\n   line-height: ",";\n   color: ",";\n    @media (min-width: 768px) {\n       font-size: ",";\n        line-height: ",";\n    }\n"])),(function(u){return u.theme.fontSizes.s}),(function(u){return u.theme.fontWeights.semiBold}),(function(u){return u.theme.lineHeights.xl}),(function(u){return u.theme.colors.blue}),(function(u){return u.theme.fontSizes.l}),(function(u){return u.theme.lineHeights.m})),q=n(3527),y=n(3728),Y=n(8617),k=n(2791),G=n(6856),Q=n(4039),P=n(1452),M=n(3329),O=function(){var u=(0,d.I0)(),D=(0,c.$G)().t,n=(0,k.useState)("password"),e=(0,l.Z)(n,2),t=e[0],F=e[1],A=(0,q.G)("",{isEmail:!0}),C=(0,q.G)("",{isPassword:!0});return(0,M.jsxs)(p,{children:[(0,M.jsx)(P.R,{}),(0,M.jsxs)(w,{children:[(0,M.jsxs)(S,{onSubmit:function(D){D.preventDefault();var n={email:A.value.toLowerCase(),password:C.value};u((0,f.zB)(n))},autoComplete:"off",children:[(0,M.jsx)(b,{children:D("Log In")}),(0,M.jsx)(R,{href:"https://your-tasks-hv5t.onrender.com/api/auth/google",children:(0,M.jsx)(y.JM8,{style:{width:"1.5em",height:"1.5em"}})}),(0,M.jsxs)(z,{children:[(0,M.jsxs)(j,{children:[D("Email"),(0,M.jsx)(v,{style:{border:A.isDirty&&!A.emailError?"1px solid green":A.isDirty&&A.emailError&&"1px solid red"},onChange:function(u){return A.onChange(u)},onBlur:function(u){return A.onBlur(u)},type:"email",value:A.value,name:"email",placeholder:D("Example@gmail.com"),required:!0})]}),A.isDirty&&A.emailError&&(0,M.jsx)(I,{style:{color:"red"},children:D("Enter a valid Email")})||A.isDirty&&!A.emailError&&(0,M.jsx)(I,{style:{color:"green"},children:D("Email is correct")})]}),(0,M.jsxs)(z,{children:[(0,M.jsxs)(j,{children:[D("Password"),(0,M.jsx)(v,{style:{border:C.isDirty&&C.passwordError?"1px solid red":C.isDirty&&!C.passwordError&&"1px solid green"},onChange:function(u){return C.onChange(u)},onBlur:function(u){return C.onBlur(u)},type:t,value:C.value,name:"password",placeholder:D("Password"),required:!0})]}),C.isDirty&&C.passwordError&&(0,M.jsx)(I,{style:{color:"red"},children:D("Enter a valid Password")}),C.isDirty&&!C.passwordError&&(0,M.jsx)(I,{style:{color:"green"},children:D("Password is correct")}),(0,M.jsx)(V,{onClick:function(){F("password"===t?"text":"password")},children:"password"===t?(0,M.jsx)(Y.Rbo,{}):(0,M.jsx)(Y.MBb,{})})]}),(0,M.jsxs)(Z,{type:"submit",disabled:!A.validForm||!C.validForm,children:[D("Log In"),(0,M.jsx)(G.HOZ,{})]})]}),(0,M.jsx)(U,{to:"/registration",children:D("Sign Up")}),(0,M.jsx)(H,{src:Q,alt:"goose"})]})]})},X=function(){return(0,M.jsx)(O,{})}},1550:function(u){u.exports="data:image/png;base64,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"},4039:function(u,D,n){u.exports=n.p+"static/media/rocket.b4670060498c1e79cd6c.png"}}]);
//# sourceMappingURL=898.f6ea0128.chunk.js.map