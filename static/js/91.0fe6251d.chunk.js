"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[91],{1452:function(u,D,n){n.d(D,{R:function(){return l}});var e,t,r=n(9230),i=n(6549),o=n(7403),F=n(5346),s=n(168),C=n(6444),A=C.ZP.div(e||(e=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n"]))),E=C.ZP.button(t||(t=(0,s.Z)(["\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: transform 300ms linear;\n\n  :hover {\n    transform: scale(1.4);\n  }\n"]))),a=n(3329),l=function(){var u=(0,r.$G)().i18n,D=(0,i.E)().setSearchParams,n=function(n){var e=n.currentTarget.name;D({lang:e}),u.changeLanguage(e)};return(0,a.jsxs)(A,{children:[(0,a.jsx)(E,{type:"button",onClick:n,name:"en",children:(0,a.jsx)("img",{src:o,alt:"usa flag",style:{width:"24px"}})}),(0,a.jsx)("span",{children:"/"}),(0,a.jsx)(E,{type:"button",onClick:n,name:"ua",children:(0,a.jsx)("img",{src:F,alt:"usa flag",style:{width:"24px"}})})]})}},6549:function(u,D,n){n.d(D,{E:function(){return r}});var e=n(9439),t=n(1087),r=function(){var u,D,n=(0,t.lr)(),r=(0,e.Z)(n,2),i=r[0],o=r[1];return{lang:null!==(u=i.get("lang"))&&void 0!==u?u:"en",token:null!==(D=i.get("token"))&&void 0!==D?D:"",setSearchParams:o}}},3527:function(u,D,n){n.d(D,{G:function(){return i}});var e=n(1413),t=n(9439),r=n(2791),i=function(u,D){var n=(0,r.useState)(u),i=(0,t.Z)(n,2),o=i[0],F=i[1],s=(0,r.useState)(!1),C=(0,t.Z)(s,2),A=C[0],E=C[1],a=function(u,D){var n=(0,r.useState)(!1),e=(0,t.Z)(n,2),i=e[0],o=e[1],F=(0,r.useState)(!1),s=(0,t.Z)(F,2),C=s[0],A=s[1],E=(0,r.useState)(!1),a=(0,t.Z)(E,2),l=a[0],c=a[1],B=(0,r.useState)(!1),d=(0,t.Z)(B,2),h=d[0],m=d[1],f=(0,r.useState)(!1),x=(0,t.Z)(f,2),p=x[0],g=x[1];return(0,r.useEffect)((function(){for(var n in D)switch(n){case"isEmail":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(u).toLowerCase())?o(!1):o(!0);break;case"isSamePassword":u===D[n]?A(!1):A(!0);break;case"isName":/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])+$/.test(String(u).toLowerCase())?c(!1):c(!0);break;case"isPassword":/^(?=.*)[^\s]{7,32}$/.test(String(u).toLowerCase())?m(!1):m(!0);break;default:console.log("\u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438")}}),[u,D]),(0,r.useEffect)((function(){g(!(i||l||h||C))}),[i,l,h,C]),{emailError:i,confirmError:C,nameError:l,passwordError:h,validForm:p}}(o,D);return(0,e.Z)({value:o,onChange:function(u){F(u.target.value)},onBlur:function(u){E(!0)},isDirty:A},a)}},4091:function(u,D,n){n.r(D),n.d(D,{RegisterPage:function(){return Y}});var e,t,r,i,o,F,s,C,A,E,a,l,c,B,d,h=n(9439),m=n(9230),f=n(5048),x=n(1693),p=n(3527),g=n(3728),w=n(2791),y=n(8617),b=n(168),v=n(6444),j=n(1087),Z=v.ZP.div(e||(e=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: ",";\n"])),(function(u){return u.theme.colors.blue2})),P=v.ZP.div(t||(t=(0,b.Z)(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n"]))),S=v.ZP.form(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 335px;\n  padding: 40px 24px;\n  margin-bottom: 18px;\n  background-color: ",";\n  border-radius: ",";\n  @media (min-width: 768px) {\n    width: 480px;\n    padding: 40px;\n    margin-bottom: 24px;\n  }\n"])),(function(u){return u.theme.colors.white}),(function(u){return u.theme.radii.normal})),z=v.ZP.h2(i||(i=(0,b.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  color: ",";\n  // margin-bottom: 32px;\n  @media (min-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(u){return u.theme.fontSizes.l}),(function(u){return u.theme.fontWeights.semiBold}),(function(u){return u.theme.lineHeights.xl}),(function(u){return u.theme.colors.blue}),(function(u){return u.theme.fontSizes.xxxl})),k=v.ZP.label(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  color: ",";\n   @media (min-width: 768px) {\n    font-size: ",";\n  }\n"])),(function(u){return u.theme.fontSizes.xs}),(function(u){return u.theme.fontWeights.semiBold}),(function(u){return u.theme.lineHeights.l}),(function(u){return u.theme.colors.black2}),(function(u){return u.theme.fontSizes.s})),L=v.ZP.input(F||(F=(0,b.Z)(["\n  outline: none;\n  width: 100%;\n  border: ",";\n  border-radius: ",";\n  margin-top: ","px;\n  padding: 14px;\n  &::placeholder {\n    font-weight: ",";\n    font-size: ",";\n    line-height: ",";\n    color: ",";\n    @media (min-width: 768px) {\n    font-size: ",";\n  }\n  }\n"])),(function(u){return u.theme.borders.task}),(function(u){return u.theme.radii.normal}),(function(u){return u.theme.space[3]}),(function(u){return u.theme.fontWeights.regular}),(function(u){return u.theme.fontSizes.s}),(function(u){return u.theme.lineHeights.xl}),(function(u){return u.theme.colors.grey4}),(function(u){return u.theme.fontSizes.m})),G=v.ZP.button(s||(s=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 287px;\n  height: 44px;\n  padding: 14px;\n  margin-top: ","px;\n\n  border: none;\n  border-radius: ",";\n  background: ",";\n  color: ",";\n  box-shadow: ",";\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  svg {\n    margin-left: ","px;\n    width: 18px;\n    height: 18px;\n  }\n  &:hover,\n  &:focus {\n    background-color: #ffee00;\n    color: ",";\n  }\n  }\n  @media (min-width: 768px) {\n    width: 400px;\n    height: 56px;\n    font-size: ",";\n  }\n"])),(function(u){return u.theme.space[5]}),(function(u){return u.theme.radii.medium}),(function(u){return u.theme.colors.blue}),(function(u){return u.theme.colors.white}),(function(u){return u.theme.shadows.button}),(function(u){return u.theme.fontWeights.semiBold}),(function(u){return u.theme.fontSizes.s}),(function(u){return u.theme.lineHeights.xl}),(function(u){return u.theme.space[3]}),(function(u){return u.theme.colors.blue}),(function(u){return u.theme.fontSizes.l})),H=v.ZP.div(C||(C=(0,b.Z)(["\nposition: relative;\n@media (max-width: 767px) { \n    margin-bottom: 24px;\n};\n@media (min-width: 768px) { \n    margin-bottom: 40px;\n};\n"]))),W=v.ZP.span(A||(A=(0,b.Z)(["\nposition: absolute;\nfont-size: 12px;\nleft: 20px;\nbottom: -40%;\n"]))),R=v.ZP.a(E||(E=(0,b.Z)(["\n//  margin-bottom: 13px;\n height: 24px;\n text-decoration: none;\n color: ",";\n font-family: ",";\n"])),(function(u){return u.theme.colors.blue}),(function(u){return u.theme.fontFamily.logo})),$=v.ZP.span(a||(a=(0,b.Z)(["\n    position: absolute;\n    right: 15px;\n    top: 70%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    color: ",";\n\n    @media (min-width: 768px) {\n        right: 20px;  \n    }\n"])),(function(u){return u.theme.colors.blue})),q=v.ZP.img(l||(l=(0,b.Z)(["\n  display: none;\n  @media (min-width: 1440px) {\n    display: block;\n    position: fixed;\n    left: 50px;\n    bottom: 0px;\n    width: 400px;\n    height: 450px;\n  }\n"]))),I=(0,v.ZP)(j.OL)(c||(c=(0,b.Z)(["\n   font-size: ",";\n   font-weight: ",";\n   line-height: ",";\n   color: ",";\n    @media (min-width: 768px) {\n       font-size: ",";\n        line-height: ",";\n    }\n"])),(function(u){return u.theme.fontSizes.s}),(function(u){return u.theme.fontWeights.semiBold}),(function(u){return u.theme.lineHeights.xl}),(function(u){return u.theme.colors.blue}),(function(u){return u.theme.fontSizes.l}),(function(u){return u.theme.lineHeights.m})),N=v.ZP.div(B||(B=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 32px;\n"]))),_=v.ZP.span(d||(d=(0,b.Z)(["\nfont-size: ","\n"])),(function(u){return u.theme.fontSizes.xl})),M=n(603),U=n(1452),J=n(770),O=n(3329),T=function(){var u=(0,f.I0)(),D=(0,m.$G)().t,n=(0,w.useState)("password"),e=(0,h.Z)(n,2),t=e[0],r=e[1],i=(0,w.useState)("password"),o=(0,h.Z)(i,2),F=o[0],s=o[1],C=(0,p.G)("",{isName:!0}),A=(0,p.G)("",{isEmail:!0}),E=(0,p.G)("",{isPassword:!0}),a=(0,p.G)("",{isSamePassword:E.value});return(0,O.jsx)(Z,{children:(0,O.jsxs)(P,{children:[(0,O.jsxs)(S,{onSubmit:function(D){D.preventDefault();var n={name:C.value,email:A.value.toLowerCase(),password:E.value};u((0,x.y1)(n))},autoComplete:"off",children:[(0,O.jsxs)(N,{children:[(0,O.jsx)(z,{children:D("Sign Up")}),(0,O.jsx)(U.R,{}),(0,O.jsxs)(R,{href:"https://your-tasks-hv5t.onrender.com/api/auth/google",children:[(0,O.jsx)(g.JM8,{style:{width:"1.5em",height:"1.5em"}}),(0,O.jsxs)(_,{children:[(0,O.jsx)("i",{children:"oo"}),"gle"]})]})]}),(0,O.jsxs)(H,{children:[(0,O.jsxs)(k,{children:[D("Name"),(0,O.jsx)(L,{style:{border:C.isDirty&&!C.nameError?"1px solid green":C.isDirty&&C.nameError&&"1px solid red"},onChange:function(u){return C.onChange(u)},onBlur:function(u){return C.onBlur(u)},value:C.value,type:"text",name:"name",id:"name",placeholder:D("Enter your name"),required:!0})]}),C.isDirty&&C.nameError&&(0,O.jsx)(W,{style:{color:"red"},children:D("Enter your name pls")}),C.isDirty&&!C.nameError&&(0,O.jsx)(W,{style:{color:"green"},children:D("Name is valid")})]}),(0,O.jsxs)(H,{children:[(0,O.jsxs)(k,{children:[D("Email"),(0,O.jsx)(L,{style:{border:A.isDirty&&!A.emailError?"1px solid green":A.isDirty&&A.emailError&&"1px solid red"},type:"email",value:A.value,onChange:function(u){return A.onChange(u)},onBlur:function(u){return A.onBlur(u)},name:"email",placeholder:D("Enter your email"),required:!0})]}),A.isDirty&&A.emailError&&(0,O.jsx)(W,{style:{color:"red"},children:D("Enter a valid Email")})||A.isDirty&&!A.emailError&&(0,O.jsx)(W,{style:{color:"green"},children:D("Email is correct")})]}),(0,O.jsxs)(H,{children:[(0,O.jsxs)(k,{children:[D("Password"),(0,O.jsx)(L,{style:{border:E.isDirty&&!E.passwordError?"1px solid green":E.isDirty&&E.passwordError&&"1px solid red"},type:t,value:E.value,onChange:function(u){return E.onChange(u)},onBlur:function(u){return E.onBlur(u)},name:"password",placeholder:D("Enter your password"),required:!0})]}),E.isDirty&&E.passwordError&&(0,O.jsx)(W,{style:{color:"red"},children:D("Enter a valid Password")}),E.isDirty&&!E.passwordError&&(0,O.jsx)(W,{style:{color:"green"},children:D("Password is correct")}),(0,O.jsx)($,{onClick:function(){r("password"===t?"text":"password")},children:"password"===t?(0,O.jsx)(y.Rbo,{}):(0,O.jsx)(y.MBb,{})})]}),(0,O.jsxs)(H,{children:[(0,O.jsxs)(k,{children:[D("Confirm Password"),(0,O.jsx)(L,{style:{border:a.isDirty&&E.value===a.value?"1px solid green":a.isDirty&&E.value!==a.value&&"1px solid red"},type:F,value:a.value,onChange:function(u){return a.onChange(u)},onBlur:function(u){return a.onBlur(u)},name:"confirmPassword",placeholder:D("Confirm Password"),required:!0})]}),a.isDirty&&E.value===a.value&&(0,O.jsx)(W,{style:{color:"green"},children:D("confirmPassword is correct")}),a.isDirty&&E.value!==a.value&&(0,O.jsx)(W,{style:{color:"red"},children:D("confirmPassword is not correct")}),(0,O.jsx)($,{onClick:function(){s("password"===F?"text":"password")},children:"password"===F?(0,O.jsx)(y.Rbo,{}):(0,O.jsx)(y.MBb,{})})]}),(0,O.jsxs)(G,{disabled:!A.validForm||!E.validForm||!C.validForm||!a.validForm,type:"submit",children:[D("Sign Up"),(0,O.jsx)(J.W.LogInIcon,{})]})]}),(0,O.jsx)(I,{to:"/login",children:D("Log In")}),(0,O.jsx)(q,{src:M,alt:"goose"})]})})},Y=function(){return(0,O.jsx)(T,{})}},5346:function(u,D,n){u.exports=n.p+"static/media/ukraine.2e3c2042a52f18722d17.png"},7403:function(u,D,n){u.exports=n.p+"static/media/usa.0533c9838a1213a1ec75.png"},603:function(u,D,n){u.exports=n.p+"static/media/register.1aedececc7c0f148895c.png"}}]);
//# sourceMappingURL=91.0fe6251d.chunk.js.map