var Fe=Object.defineProperty;var He=(c,e,t)=>e in c?Fe(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var re=(c,e,t)=>(He(c,typeof e!="symbol"?e+"":e,t),t);import{S as me,i as ge,s as ve,k as b,C as G,a as x,q as W,l as w,m,D as F,h as u,c as y,r as Q,n as l,b as P,E as n,F as ie,G as Ze,B as te,H as Ke,o as Ae,w as _e,x as pe,I as Re,y as be,f as he,t as de,J as ne,z as we,K as We,L as Qe,e as oe,u as Ge,M as Je,N as Ye,O as Xe,P as et}from"../../chunks/index-d6978d90.js";import{p as Me}from"../../chunks/stores-694ce0d6.js";import{r as tt,i as lt,g as rt,o as ot}from"../../chunks/index-0f9529d3-2d442c46.js";class ee{constructor(e,t,s,a){re(this,"id");re(this,"title");re(this,"route");re(this,"subItems");this.id=e,this.title=t,this.route=s,this.subItems=a}}let ue=[new ee(1,"Home","/",null),new ee(2,"Discover","/discover",null),new ee(3,"Flights","/flights",null),new ee(4,"Hotels","/hotels",null),new ee(5,"Trains","/trains",null),new ee(6,"About Us","DropDown",[new ee(9,"Instagram","https://instagram.com/nbrgdevelopers.pvt.ltd",null),new ee(10,"About NBRG Developers","https://nbrg-developers.web.app",null),new ee(11,"Location","https://g.page/nbrg-developers?share",null),new ee(12,"Who we are","/about",null)])];var Ee={exports:{}};(function(c,e){function t(){var r=document.querySelector("[data-toggle-theme]");(function(i=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",i),r&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(f=>{f.classList.add(r.getAttribute("data-act-class"))}))})(),r&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(i=>{i.addEventListener("click",function(){var f=i.getAttribute("data-toggle-theme");if(f){var d=f.split(",");document.documentElement.getAttribute("data-theme")==d[0]?d.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",d[1]),localStorage.setItem("theme",d[1])):(document.documentElement.setAttribute("data-theme",d[0]),localStorage.setItem("theme",d[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(h=>{h.classList.toggle(this.getAttribute("data-act-class"))})})})}function s(){(function(r=localStorage.getItem("theme")){if(r!=null&&r!="")if(localStorage.getItem("theme")&&localStorage.getItem("theme")!=""){document.documentElement.setAttribute("data-theme",r);var i=document.querySelector("[data-set-theme='"+r.toString()+"']");i&&([...document.querySelectorAll("[data-set-theme]")].forEach(f=>{f.classList.remove(f.getAttribute("data-act-class"))}),i.getAttribute("data-act-class")&&i.classList.add(i.getAttribute("data-act-class")))}else{var i=document.querySelector("[data-set-theme='']");i.getAttribute("data-act-class")&&i.classList.add(i.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(r=>{r.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(i=>{i.classList.remove(i.getAttribute("data-act-class"))}),r.getAttribute("data-act-class")&&r.classList.add(r.getAttribute("data-act-class"))})})}function a(){(function(r=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",r);var i=document.querySelector("select[data-choose-theme] [value='"+r.toString()+"']");i&&[...document.querySelectorAll("select[data-choose-theme] [value='"+r.toString()+"']")].forEach(f=>{f.selected=!0})}})(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(r=>{r.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach(i=>{i.selected=!0})})})}function o(r=!0){r===!0?document.addEventListener("DOMContentLoaded",function(i){t(),a(),s()}):(t(),a(),s())}c.exports={themeChange:o}})(Ee);function at(c){let e,t,s,a,o,r,i,f,d,h,E,_,g,I,k,A,C,S,J,T,U,N,H,Z,z;return{c(){e=b("div"),t=b("label"),s=G("svg"),a=G("path"),o=x(),r=b("div"),i=b("div"),f=b("div"),d=b("div"),h=b("div"),E=W("System Theme"),_=x(),g=b("input"),I=x(),k=b("button"),A=G("svg"),C=G("path"),J=x(),T=b("button"),U=G("svg"),N=G("path"),this.h()},l(L){e=w(L,"DIV",{class:!0});var B=m(e);t=w(B,"LABEL",{for:!0,tabindex:!0,class:!0});var M=m(t);s=F(M,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var O=m(s);a=F(O,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),m(a).forEach(u),O.forEach(u),M.forEach(u),o=y(B),r=w(B,"DIV",{class:!0});var V=m(r);i=w(V,"DIV",{class:!0});var le=m(i);f=w(le,"DIV",{class:!0});var j=m(f);d=w(j,"DIV",{class:!0});var q=m(d);h=w(q,"DIV",{class:!0});var Y=m(h);E=Q(Y,"System Theme"),Y.forEach(u),_=y(q),g=w(q,"INPUT",{type:!0,name:!0,id:!0,class:!0,title:!0}),q.forEach(u),I=y(j),k=w(j,"BUTTON",{"data-set-theme":!0,"data-act-class":!0,class:!0});var D=m(k);A=F(D,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0});var p=m(A);C=F(p,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),m(C).forEach(u),p.forEach(u),D.forEach(u),J=y(j),T=w(j,"BUTTON",{class:!0,"data-set-theme":!0,"data-act-class":!0});var $=m(T);U=F($,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0});var v=m(U);N=F(v,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),m(N).forEach(u),v.forEach(u),$.forEach(u),j.forEach(u),le.forEach(u),V.forEach(u),B.forEach(u),this.h()},h(){l(a,"stroke-linecap","round"),l(a,"stroke-linejoin","round"),l(a,"stroke-width","1"),l(a,"d",c[0]),l(s,"xmlns","http://www.w3.org/2000/svg"),l(s,"class","w-6 h-6"),l(s,"fill","none"),l(s,"viewBox","0 0 24 24"),l(s,"stroke","currentColor"),l(t,"for","dropdown-icon"),l(t,"tabindex","0"),l(t,"class","btn btn-circle btn-accent btn-xs w-10 h-10"),l(h,"class","label text-neutral-content text-center"),l(g,"type","checkbox"),l(g,"name","user-scheme-preference"),l(g,"id","user-scheme-preference"),l(g,"class","toggle ml-3 mr-3 mt-3 mb-0 toggle-accent"),l(g,"title","Enable System Theme"),g.__value=c[1],g.value=g.__value,l(d,"class","row-auto"),l(C,"stroke-linecap","round"),l(C,"stroke-linejoin","round"),l(C,"stroke-width","1"),l(C,"d",ke),l(A,"xmlns","http://www.w3.org/2000/svg"),l(A,"fill","none"),l(A,"viewBox","0 0 24 24"),l(A,"stroke","currentColor"),l(k,"data-set-theme","light"),l(k,"data-act-class","ACTIVECLASS"),l(k,"class",S="col-start-1 row-start-1 m-3 p-1 h-12 w-12 btn btn-accent "+(c[1]?"btn-disabled":"")),l(N,"stroke-linecap","round"),l(N,"stroke-linejoin","round"),l(N,"stroke-width","2"),l(N,"d",Ie),l(U,"xmlns","http://www.w3.org/2000/svg"),l(U,"fill","none"),l(U,"viewBox","0 0 24 24"),l(U,"stroke","currentColor"),l(T,"class",H="col-start-1 row-start-1 mt-0 ml-3 mr-3 mb-3 p-1 h-12 w-12 btn btn-accent "+(c[1]?"btn-disabled":"")),l(T,"data-set-theme","dark"),l(T,"data-act-class","ACTIVECLASS"),l(f,"class","card-content"),l(i,"class","card bg-neutral"),l(r,"class","dropdown-content"),l(e,"class","dropdown dropdown-end md:dropdown-hover mr-2")},m(L,B){P(L,e,B),n(e,t),n(t,s),n(s,a),n(e,o),n(e,r),n(r,i),n(i,f),n(f,d),n(d,h),n(h,E),n(d,_),n(d,g),g.checked=c[1],n(f,I),n(f,k),n(k,A),n(A,C),n(f,J),n(f,T),n(T,U),n(U,N),Z||(z=[ie(g,"change",c[4]),ie(g,"change",c[2]),ie(k,"click",Ze(c[5])),ie(T,"click",c[6])],Z=!0)},p(L,[B]){B&1&&l(a,"d",L[0]),B&2&&(g.__value=L[1],g.value=g.__value),B&2&&(g.checked=L[1]),B&2&&S!==(S="col-start-1 row-start-1 m-3 p-1 h-12 w-12 btn btn-accent "+(L[1]?"btn-disabled":""))&&l(k,"class",S),B&2&&H!==(H="col-start-1 row-start-1 mt-0 ml-3 mr-3 mb-3 p-1 h-12 w-12 btn btn-accent "+(L[1]?"btn-disabled":""))&&l(T,"class",H)},i:te,o:te,d(L){L&&u(e),Z=!1,Ke(z)}}}let ke="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",Ie="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";function st(c,e,t){let s,a;Ae(i);let o=!1;function r(){var g=localStorage.getItem("preferUserColorScheme");g!=null?t(1,o=g=="true"):localStorage.setItem("preferUserColorScheme","false")}function i(){if(Ee.exports.themeChange(!1),r(),o)s=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;else{var g=document.documentElement.getAttribute("data-theme");g=="dark"?s=!0:s=!1}t(0,a=s?Ie:ke);var I=document.documentElement;I.setAttribute("data-theme",s?"dark":"light")}function f(){console.log(`shouldPreferUserColorScheme: ${o}`);try{localStorage.removeItem("preferUserColorScheme"),localStorage.setItem("preferUserColorScheme",o?"true":"false")}catch(g){console.log(g)}console.log(`shouldPreferUserColorScheme: ${o}`),i()}function d(g,I=!0){(s==null||s==null)&&(s=!1),g!=null&&g!=null&&(s=g),s?t(0,a=Ie):t(0,a=ke),Ee.exports.themeChange(I),console.log(s,I)}function h(){o=this.checked,t(1,o)}return[a,o,f,d,h,()=>d(!1,!0),()=>d(!0,!0)]}class nt extends me{constructor(e){super(),ge(this,e,st,at,ve,{})}}const fe=class{constructor(e,t){re(this,"title");re(this,"route");this.title=e,this.route=t}static fromRoute(e){let t=ct.get(e);return t==null?fe.error:t}};let K=fe;re(K,"error",new fe("Page Not Found","/notfound"));let ct=new Map([["",new K("Home","/")],["login",new K("Login","/login")],["settings",new K("Settings","/settings")],["discover",new K("Discover","/discover")],["flights",new K("Flights","/flights")],["hotels",new K("Hotels","/hotels")],["trains",new K("Trains","/trains")],["about",new K("About Us","/about")]]);function Te(c,e,t){const s=c.slice();return s[6]=e[t],s[8]=t,s}function Ue(c,e,t){const s=c.slice();return s[9]=e[t],s}function Ve(c,e,t){const s=c.slice();return s[12]=e[t],s}function $e(c,e,t){const s=c.slice();return s[9]=e[t],s}function Ne(c,e,t){const s=c.slice();return s[12]=e[t],s}function it(c){let e,t,s=c[9].title+"",a,o;return{c(){e=b("li"),t=b("a"),a=W(s),o=x(),this.h()},l(r){e=w(r,"LI",{});var i=m(e);t=w(i,"A",{href:!0,class:!0});var f=m(t);a=Q(f,s),f.forEach(u),o=y(i),i.forEach(u),this.h()},h(){l(t,"href",c[9].route),l(t,"class","p-2")},m(r,i){P(r,e,i),n(e,t),n(t,a),n(e,o)},p:te,d(r){r&&u(e)}}}function ut(c){let e,t,s=c[9].title+"",a,o,r,i,f,d,h,E=c[9].subItems,_=[];for(let g=0;g<E.length;g+=1)_[g]=Pe(Ne(c,E,g));return{c(){e=b("li"),t=b("a"),a=W(s),o=x(),r=G("svg"),i=G("path"),f=x(),d=b("ul");for(let g=0;g<_.length;g+=1)_[g].c();h=x(),this.h()},l(g){e=w(g,"LI",{tabindex:!0});var I=m(e);t=w(I,"A",{href:!0,class:!0});var k=m(t);a=Q(k,s),o=y(k),r=F(k,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var A=m(r);i=F(A,"path",{d:!0}),m(i).forEach(u),A.forEach(u),k.forEach(u),f=y(I),d=w(I,"UL",{class:!0});var C=m(d);for(let S=0;S<_.length;S+=1)_[S].l(C);C.forEach(u),h=y(I),I.forEach(u),this.h()},h(){l(i,"d","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"),l(r,"class","fill-current"),l(r,"xmlns","http://www.w3.org/2000/svg"),l(r,"width","24"),l(r,"height","24"),l(r,"viewBox","0 0 24 24"),l(t,"href","/"),l(t,"class","justify-between"),l(d,"class","rounded-box bg-blue-300 text-black"),l(e,"tabindex",c[9].id)},m(g,I){P(g,e,I),n(e,t),n(t,a),n(t,o),n(t,r),n(r,i),n(e,f),n(e,d);for(let k=0;k<_.length;k+=1)_[k].m(d,null);n(e,h)},p(g,I){if(I&0){E=g[9].subItems;let k;for(k=0;k<E.length;k+=1){const A=Ne(g,E,k);_[k]?_[k].p(A,I):(_[k]=Pe(A),_[k].c(),_[k].m(d,null))}for(;k<_.length;k+=1)_[k].d(1);_.length=E.length}},d(g){g&&u(e),ne(_,g)}}}function Pe(c){let e,t,s=c[12].title+"",a,o;return{c(){e=b("li"),t=b("a"),a=W(s),o=x(),this.h()},l(r){e=w(r,"LI",{});var i=m(e);t=w(i,"A",{href:!0});var f=m(t);a=Q(f,s),f.forEach(u),o=y(i),i.forEach(u),this.h()},h(){l(t,"href",c[12].route)},m(r,i){P(r,e,i),n(e,t),n(t,a),n(e,o)},p:te,d(r){r&&u(e)}}}function qe(c){let e;function t(o,r){return o[9].route==="DropDown"&&o[9].subItems!=null?ut:it}let a=t(c)(c);return{c(){a.c(),e=oe()},l(o){a.l(o),e=oe()},m(o,r){a.m(o,r),P(o,e,r)},p(o,r){a.p(o,r)},d(o){a.d(o),o&&u(e)}}}function ht(c){let e,t=c[9].title+"",s;return{c(){e=b("a"),s=W(t),this.h()},l(a){e=w(a,"A",{href:!0,class:!0});var o=m(e);s=Q(o,t),o.forEach(u),this.h()},h(){l(e,"href",c[9].route),l(e,"class","btn btn-ghost")},m(a,o){P(a,e,o),n(e,s)},p:te,d(a){a&&u(e)}}}function dt(c){let e,t,s=c[9].title+"",a,o,r,i,f=c[9].subItems,d=[];for(let h=0;h<f.length;h+=1)d[h]=ze(Ve(c,f,h));return{c(){e=b("div"),t=b("button"),a=W(s),o=x(),r=b("ul");for(let h=0;h<d.length;h+=1)d[h].c();i=x(),this.h()},l(h){e=w(h,"DIV",{class:!0});var E=m(e);t=w(E,"BUTTON",{class:!0});var _=m(t);a=Q(_,s),_.forEach(u),o=y(E),r=w(E,"UL",{tabindex:!0,class:!0});var g=m(r);for(let I=0;I<d.length;I+=1)d[I].l(g);g.forEach(u),i=y(E),E.forEach(u),this.h()},h(){l(t,"class","btn rounded-btn btn-ghost"),l(r,"tabindex",c[9].id),l(r,"class","p-2 shadow menu dropdown-content bg-neutral text-neutral-content rounded-box w-52"),l(e,"class","dropdown dropdown-end dropdown-hover")},m(h,E){P(h,e,E),n(e,t),n(t,a),n(e,o),n(e,r);for(let _=0;_<d.length;_+=1)d[_].m(r,null);n(e,i)},p(h,E){if(E&0){f=h[9].subItems;let _;for(_=0;_<f.length;_+=1){const g=Ve(h,f,_);d[_]?d[_].p(g,E):(d[_]=ze(g),d[_].c(),d[_].m(r,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=f.length}},d(h){h&&u(e),ne(d,h)}}}function ze(c){let e,t,s=c[12].title+"",a,o;return{c(){e=b("li"),t=b("a"),a=W(s),o=x(),this.h()},l(r){e=w(r,"LI",{});var i=m(e);t=w(i,"A",{href:!0,class:!0});var f=m(t);a=Q(f,s),f.forEach(u),o=y(i),i.forEach(u),this.h()},h(){l(t,"href",c[12].route),l(t,"class","hover:bg-primary")},m(r,i){P(r,e,i),n(e,t),n(t,a),n(e,o)},p:te,d(r){r&&u(e)}}}function Oe(c){let e;function t(o,r){return o[9].route==="DropDown"&&o[9].subItems!=null?dt:ht}let a=t(c)(c);return{c(){a.c(),e=oe()},l(o){a.l(o),e=oe()},m(o,r){a.m(o,r),P(o,e,r)},p(o,r){a.p(o,r)},d(o){a.d(o),o&&u(e)}}}function ft(c){let e,t,s;return{c(){e=b("button"),t=b("a"),s=W("Login/Signup"),this.h()},l(a){e=w(a,"BUTTON",{class:!0});var o=m(e);t=w(o,"A",{href:!0,class:!0});var r=m(t);s=Q(r,"Login/Signup"),r.forEach(u),o.forEach(u),this.h()},h(){l(t,"href","/login"),l(t,"class","text-primary-content"),l(e,"class","btn-primary p-2 rounded-btn lg:animate-bounce")},m(a,o){P(a,e,o),n(e,t),n(t,s)},d(a){a&&u(e)}}}function mt(c){let e,t,s;return{c(){e=b("button"),t=b("a"),s=W("Settings"),this.h()},l(a){e=w(a,"BUTTON",{class:!0});var o=m(e);t=w(o,"A",{href:!0,class:!0});var r=m(t);s=Q(r,"Settings"),r.forEach(u),o.forEach(u),this.h()},h(){l(t,"href","/settings"),l(t,"class","text-primary-content"),l(e,"class","btn-primary p-2 rounded-btn lg:animate-bounce")},m(a,o){P(a,e,o),n(e,t),n(t,s)},d(a){a&&u(e)}}}function gt(c){let e,t,s=c[6].title+"",a,o;return{c(){e=b("li"),t=b("a"),a=W(s),this.h()},l(r){e=w(r,"LI",{});var i=m(e);t=w(i,"A",{href:!0});var f=m(t);a=Q(f,s),f.forEach(u),i.forEach(u),this.h()},h(){l(t,"href",o=c[6].route)},m(r,i){P(r,e,i),n(e,t),n(t,a)},p(r,i){i&2&&s!==(s=r[6].title+"")&&Ge(a,s),i&2&&o!==(o=r[6].route)&&l(t,"href",o)},d(r){r&&u(e)}}}function vt(c){let e,t=c[6].title+"",s;return{c(){e=b("li"),s=W(t)},l(a){e=w(a,"LI",{});var o=m(e);s=Q(o,t),o.forEach(u)},m(a,o){P(a,e,o),n(e,s)},p(a,o){o&2&&t!==(t=a[6].title+"")&&Ge(s,t)},d(a){a&&u(e)}}}function je(c){let e;function t(o,r){return o[1].length==o[8]?vt:gt}let s=t(c),a=s(c);return{c(){a.c(),e=oe()},l(o){a.l(o),e=oe()},m(o,r){a.m(o,r),P(o,e,r)},p(o,r){s===(s=t(o))&&a?a.p(o,r):(a.d(1),a=s(o),a&&(a.c(),a.m(e.parentNode,e)))},d(o){a.d(o),o&&u(e)}}}function _t(c){let e,t,s,a,o,r,i,f,d,h,E,_,g,I,k,A,C,S,J,T,U,N,H,Z,z,L,B=ue,M=[];for(let p=0;p<B.length;p+=1)M[p]=qe($e(c,B,p));let O=ue,V=[];for(let p=0;p<O.length;p+=1)V[p]=Oe(Ue(c,O,p));U=new nt({});function le(p,$){return p[0]?mt:ft}let j=le(c),q=j(c),Y=c[1],D=[];for(let p=0;p<Y.length;p+=1)D[p]=je(Te(c,Y,p));return{c(){e=b("div"),t=b("div"),s=b("div"),a=b("label"),o=G("svg"),r=G("path"),i=x(),f=b("ul");for(let p=0;p<M.length;p+=1)M[p].c();d=x(),h=b("div"),E=b("img"),g=x(),I=b("a"),k=W("TravNbrg"),A=x(),C=b("div"),S=b("div");for(let p=0;p<V.length;p+=1)V[p].c();J=x(),T=b("div"),_e(U.$$.fragment),N=x(),q.c(),H=x(),Z=b("div"),z=b("ul");for(let p=0;p<D.length;p+=1)D[p].c();this.h()},l(p){e=w(p,"DIV",{class:!0});var $=m(e);t=w($,"DIV",{class:!0});var v=m(t);s=w(v,"DIV",{class:!0});var R=m(s);a=w(R,"LABEL",{for:!0,tabindex:!0,class:!0});var ae=m(a);o=F(ae,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var se=m(o);r=F(se,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),m(r).forEach(u),se.forEach(u),ae.forEach(u),i=y(R),f=w(R,"UL",{tabindex:!0,class:!0});var Se=m(f);for(let X=0;X<M.length;X+=1)M[X].l(Se);Se.forEach(u),R.forEach(u),d=y(v),h=w(v,"DIV",{class:!0});var Le=m(h);E=w(Le,"IMG",{src:!0,alt:!0,width:!0,height:!0}),Le.forEach(u),g=y(v),I=w(v,"A",{href:!0,class:!0});var xe=m(I);k=Q(xe,"TravNbrg"),xe.forEach(u),v.forEach(u),A=y($),C=w($,"DIV",{class:!0});var ye=m(C);S=w(ye,"DIV",{class:!0});var De=m(S);for(let X=0;X<V.length;X+=1)V[X].l(De);De.forEach(u),ye.forEach(u),J=y($),T=w($,"DIV",{class:!0});var ce=m(T);pe(U.$$.fragment,ce),N=y(ce),q.l(ce),ce.forEach(u),$.forEach(u),H=y(p),Z=w(p,"DIV",{class:!0});var Ce=m(Z);z=w(Ce,"UL",{});var Be=m(z);for(let X=0;X<D.length;X+=1)D[X].l(Be);Be.forEach(u),Ce.forEach(u),this.h()},h(){l(r,"stroke-linecap","round"),l(r,"stroke-linejoin","round"),l(r,"stroke-width","2"),l(r,"d","M4 6h16M4 12h8m-8 6h16"),l(o,"xmlns","http://www.w3.org/2000/svg"),l(o,"class","h-5 w-5"),l(o,"fill","none"),l(o,"viewBox","0 0 24 24"),l(o,"stroke","currentColor"),l(a,"for","div-dropdown"),l(a,"tabindex","0"),l(a,"class","btn btn-ghost lg:hidden"),l(f,"tabindex","0"),l(f,"class","menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"),l(s,"class","dropdown"),Re(E.src,_="/logos/logo.png")||l(E,"src",_),l(E,"alt","TravNbrg's Logo"),l(E,"width","24"),l(E,"height","24"),l(h,"class","img"),l(I,"href","/"),l(I,"class","btn btn-ghost normal-case text-xl"),l(t,"class","navbar-start"),l(S,"class","flex-none hidden lg:flex gap-1"),l(C,"class","navbar-center hidden lg:flex"),l(T,"class","navbar-end"),l(e,"class","navbar"),l(Z,"class","text-sm breadcrumbs pl-6")},m(p,$){P(p,e,$),n(e,t),n(t,s),n(s,a),n(a,o),n(o,r),n(s,i),n(s,f);for(let v=0;v<M.length;v+=1)M[v].m(f,null);n(t,d),n(t,h),n(h,E),n(t,g),n(t,I),n(I,k),n(e,A),n(e,C),n(C,S);for(let v=0;v<V.length;v+=1)V[v].m(S,null);n(e,J),n(e,T),be(U,T,null),n(T,N),q.m(T,null),P(p,H,$),P(p,Z,$),n(Z,z);for(let v=0;v<D.length;v+=1)D[v].m(z,null);L=!0},p(p,[$]){if($&0){B=ue;let v;for(v=0;v<B.length;v+=1){const R=$e(p,B,v);M[v]?M[v].p(R,$):(M[v]=qe(R),M[v].c(),M[v].m(f,null))}for(;v<M.length;v+=1)M[v].d(1);M.length=B.length}if($&0){O=ue;let v;for(v=0;v<O.length;v+=1){const R=Ue(p,O,v);V[v]?V[v].p(R,$):(V[v]=Oe(R),V[v].c(),V[v].m(S,null))}for(;v<V.length;v+=1)V[v].d(1);V.length=O.length}if(j!==(j=le(p))&&(q.d(1),q=j(p),q&&(q.c(),q.m(T,null))),$&2){Y=p[1];let v;for(v=0;v<Y.length;v+=1){const R=Te(p,Y,v);D[v]?D[v].p(R,$):(D[v]=je(R),D[v].c(),D[v].m(z,null))}for(;v<D.length;v+=1)D[v].d(1);D.length=Y.length}},i(p){L||(he(U.$$.fragment,p),L=!0)},o(p){de(U.$$.fragment,p),L=!1},d(p){p&&u(e),ne(M,p),ne(V,p),we(U),q.d(),p&&u(H),p&&u(Z),ne(D,p)}}}function pt(c,e,t){let s;We(c,Me,d=>t(3,s=d)),Ae(i);let{login:a}=e,o,r=[];function i(){var d=s.url.pathname;let h=K.fromRoute(d);r.push(h),t(1,r),o=Me.subscribe(E=>f(E))}function f(d){var h=d.url.pathname;if(h==="/"){t(1,r=[K.fromRoute("")]);return}if(h==="/login"){t(1,r=[K.fromRoute("login")]);return}var E=[];h.split("/").forEach(_=>{console.log(_),E.push(_)}),t(1,r.length=0,r),E.forEach(_=>r.push(K.fromRoute(_))),t(1,r)}return Qe(()=>o!=null?o():null),c.$$set=d=>{"login"in d&&t(0,a=d.login)},[a,r]}class bt extends me{constructor(e){super(),ge(this,e,pt,_t,ve,{login:0})}}function wt(c){let e,t,s,a,o,r,i,f,d,h,E,_,g,I,k,A,C,S,J,T,U,N,H,Z,z,L,B;return{c(){e=b("footer"),t=b("div"),s=b("a"),a=b("img"),r=x(),i=b("p"),f=W("Copyright \xA9 2022"),d=b("br"),h=W("All right reserved by NBRG Developers Pvt. Ltd."),E=x(),_=b("div"),g=b("span"),I=W("Social and Work"),k=x(),A=b("div"),C=b("a"),S=G("svg"),J=G("path"),T=x(),U=b("a"),N=G("svg"),H=G("path"),Z=x(),z=b("a"),L=G("svg"),B=G("path"),this.h()},l(M){e=w(M,"FOOTER",{class:!0});var O=m(e);t=w(O,"DIV",{});var V=m(t);s=w(V,"A",{href:!0});var le=m(s);a=w(le,"IMG",{src:!0,alt:!0,height:!0,width:!0}),le.forEach(u),r=y(V),i=w(V,"P",{});var j=m(i);f=Q(j,"Copyright \xA9 2022"),d=w(j,"BR",{}),h=Q(j,"All right reserved by NBRG Developers Pvt. Ltd."),j.forEach(u),V.forEach(u),E=y(O),_=w(O,"DIV",{});var q=m(_);g=w(q,"SPAN",{class:!0});var Y=m(g);I=Q(Y,"Social and Work"),Y.forEach(u),k=y(q),A=w(q,"DIV",{class:!0});var D=m(A);C=w(D,"A",{href:!0});var p=m(C);S=F(p,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0});var $=m(S);J=F($,"path",{d:!0}),m(J).forEach(u),$.forEach(u),p.forEach(u),T=y(D),U=w(D,"A",{href:!0});var v=m(U);N=F(v,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var R=m(N);H=F(R,"path",{d:!0}),m(H).forEach(u),R.forEach(u),v.forEach(u),Z=y(D),z=w(D,"A",{href:!0});var ae=m(z);L=F(ae,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var se=m(L);B=F(se,"path",{d:!0}),m(B).forEach(u),se.forEach(u),ae.forEach(u),D.forEach(u),q.forEach(u),O.forEach(u),this.h()},h(){Re(a.src,o="/logos/logo.png")||l(a,"src",o),l(a,"alt","TravNbrg's Logo"),l(a,"height","50"),l(a,"width","50"),l(s,"href","/"),l(g,"class","footer-title"),l(J,"d","M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"),l(S,"xmlns","http://www.w3.org/2000/svg"),l(S,"width","24"),l(S,"height","24"),l(S,"fill","currentColor"),l(S,"class","bi bi-instagram"),l(S,"viewBox","0 0 16 16"),l(C,"href","https://instagram.com/nbrgdevelopers.pvt.ltd"),l(H,"d","M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"),l(N,"xmlns","http://www.w3.org/2000/svg"),l(N,"width","24"),l(N,"height","24"),l(N,"viewBox","0 0 24 24"),l(N,"class","fill-current"),l(U,"href","https://www.youtube.com/channel/UCCQRwtPDKRZUbDiWVtMuujQ"),l(B,"d","M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"),l(L,"xmlns","http://www.w3.org/2000/svg"),l(L,"width","24"),l(L,"height","24"),l(L,"viewBox","0 0 24 24"),l(L,"class","fill-current"),l(z,"href","https://play.google.com/store/apps/dev?id=6170079703674466665"),l(A,"class","grid grid-flow-col gap-4"),l(e,"class","footer p-10 bg-neutral text-neutral-content")},m(M,O){P(M,e,O),n(e,t),n(t,s),n(s,a),n(t,r),n(t,i),n(i,f),n(i,d),n(i,h),n(e,E),n(e,_),n(_,g),n(g,I),n(_,k),n(_,A),n(A,C),n(C,S),n(S,J),n(A,T),n(A,U),n(U,N),n(N,H),n(A,Z),n(A,z),n(z,L),n(L,B)},p:te,i:te,o:te,d(M){M&&u(e)}}}class Et extends me{constructor(e){super(),ge(this,e,null,wt,ve,{})}}var kt="firebase",It="9.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(kt,It,"app");const At={apiKey:"AIzaSyAgTtcpT7NjCIY_Vpy_chxg5yleos0zMrs",authDomain:"travnbrg.firebaseapp.com",projectId:"travnbrg",storageBucket:"travnbrg.appspot.com",messagingSenderId:"707988007414",appId:"1:707988007414:web:fa05e03d33333bff01bfd7",measurementId:"G-PTDKBETS60"},St=lt(At);function Lt(c){let e,t,s,a,o,r,i;e=new bt({props:{login:c[0]}});const f=c[2].default,d=Je(f,c,c[1],null);return r=new Et({}),{c(){_e(e.$$.fragment),t=x(),d&&d.c(),s=x(),a=b("div"),o=x(),_e(r.$$.fragment),this.h()},l(h){pe(e.$$.fragment,h),t=y(h),d&&d.l(h),s=y(h),a=w(h,"DIV",{class:!0,id:!0}),m(a).forEach(u),o=y(h),pe(r.$$.fragment,h),this.h()},h(){l(a,"class","toast toast-end"),l(a,"id","toasts")},m(h,E){be(e,h,E),P(h,t,E),d&&d.m(h,E),P(h,s,E),P(h,a,E),P(h,o,E),be(r,h,E),i=!0},p(h,[E]){const _={};E&1&&(_.login=h[0]),e.$set(_),d&&d.p&&(!i||E&2)&&Ye(d,f,h,h[1],i?et(f,h[1],E,null):Xe(h[1]),null)},i(h){i||(he(e.$$.fragment,h),he(d,h),he(r.$$.fragment,h),i=!0)},o(h){de(e.$$.fragment,h),de(d,h),de(r.$$.fragment,h),i=!1},d(h){we(e,h),h&&u(t),d&&d.d(h),h&&u(s),h&&u(a),h&&u(o),we(r,h)}}}function xt(c){console.log(c)}function yt(c,e,t){let{$$slots:s={},$$scope:a}=e;Ae(r);let o=!1;function r(){console.log(`login: ${o}`);let f=rt(St);ot(f,i,xt)}function i(f){console.log(f),f&&t(0,o=!0),console.log(`login: ${o}`)}return c.$$set=f=>{"$$scope"in f&&t(1,a=f.$$scope)},[o,a,s]}class Tt extends me{constructor(e){super(),ge(this,e,yt,Lt,ve,{})}}export{Tt as default};
