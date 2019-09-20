!function(e){function t(t){for(var r,a,c=t[0],o=t[1],i=t[2],l=0,s=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(R,a)&&R[a]&&s.push(R[a][0]),R[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(C&&C(t);s.length;)s.shift()();return I.push.apply(I,i||[]),n()}function n(){for(var e,t=0;t<I.length;t++){for(var n=I[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==R[c]&&(r=!1)}r&&(I.splice(t--,1),e=x(x.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!O[e])return;for(var n in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--b&&0===g&&D()}(e,t),r&&r(e,t)};var a,c=!0,o="24e4a445752d40e4fbe3",i=1e4,l={},s=[],u=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:N,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:l[e]};return a=void 0,t}var d=[],f="idle";function m(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var y,h,E,b=0,g=0,v={},O={},_={};function w(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,m("check"),(t=i,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=x.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return m("idle"),null;O={},v={},_=e.c,E=e.h,m("prepare");var t=new Promise((function(e,t){y={resolve:e,reject:t}}));for(var n in h={},R)P(n);return"prepare"===f&&0===g&&0===b&&D(),t}));var t}function P(e){_[e]?(O[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=x.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function D(){m("ready");var e=y;if(y=null,e)if(c)Promise.resolve().then((function(){return N(c)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function N(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,c,i;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((c=S[o])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var l=0;l<c.parents.length;l++){var s=c.parents[l],u=S[s];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([s]),moduleId:o,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[o]?(n[s]||(n[s]=[]),p(n[s],[o])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var d={},y=[],b={},g=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var v in h)if(Object.prototype.hasOwnProperty.call(h,v)){var O;i=w(v);var j=!1,P=!1,D=!1,N="";switch((O=h[v]?u(i):{type:"disposed",moduleId:v}).chain&&(N="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+N));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+N));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(j=new Error("Aborted because "+i+" is not accepted"+N));break;case"accepted":t.onAccepted&&t.onAccepted(O),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return m("abort"),Promise.reject(j);if(P)for(i in b[i]=h[i],p(y,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,i)&&(d[i]||(d[i]=[]),p(d[i],O.outdatedDependencies[i]));D&&(p(y,[O.moduleId]),b[i]=g)}var I,T=[];for(r=0;r<y.length;r++)i=y[r],S[i]&&S[i].hot._selfAccepted&&b[i]!==g&&T.push({module:i,errorHandler:S[i].hot._selfAccepted});m("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete R[e]}(e)}));for(var k,A,C=y.slice();C.length>0;)if(i=C.pop(),c=S[i]){var H={},L=c.hot._disposeHandlers;for(a=0;a<L.length;a++)(n=L[a])(H);for(l[i]=H,c.hot.active=!1,delete S[i],delete d[i],a=0;a<c.children.length;a++){var U=S[c.children[a]];U&&((I=U.parents.indexOf(i))>=0&&U.parents.splice(I,1))}}for(i in d)if(Object.prototype.hasOwnProperty.call(d,i)&&(c=S[i]))for(A=d[i],a=0;a<A.length;a++)k=A[a],(I=c.children.indexOf(k))>=0&&c.children.splice(I,1);for(i in m("apply"),o=E,b)Object.prototype.hasOwnProperty.call(b,i)&&(e[i]=b[i]);var V=null;for(i in d)if(Object.prototype.hasOwnProperty.call(d,i)&&(c=S[i])){A=d[i];var q=[];for(r=0;r<A.length;r++)if(k=A[r],n=c.hot._acceptedDependencies[k]){if(-1!==q.indexOf(n))continue;q.push(n)}for(r=0;r<q.length;r++){n=q[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:i,dependencyId:A[r],error:e}),t.ignoreErrored||V||(V=e)}}}for(r=0;r<T.length;r++){var M=T[r];i=M.module,s=[i];try{x(i)}catch(e){if("function"==typeof M.errorHandler)try{M.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:n,originalError:e}),t.ignoreErrored||V||(V=n),V||(V=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:i,error:e}),t.ignoreErrored||V||(V=e)}}return V?(m("fail"),Promise.reject(V)):(m("idle"),new Promise((function(e){e(y)})))}var S={},R={0:0},I=[];function x(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:p(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return x;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),x(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(t){x[e]=t}}};for(var c in x)Object.prototype.hasOwnProperty.call(x,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,r(c));return n.e=function(e){return"ready"===f&&m("prepare"),g++,x.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===f&&(v[e]||P(e),0===g&&0===b&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),x.t(e,-2&t)},n}(t)),n.l=!0,n.exports}x.m=e,x.c=S,x.d=function(e,t,n){x.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,t){if(1&t&&(e=x(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(x.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)x.d(n,r,function(t){return e[t]}.bind(null,r));return n},x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,"a",t),t},x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},x.p="/",x.h=function(){return o};var T=window.webpackJsonp=window.webpackJsonp||[],k=T.push.bind(T);T.push=t,T=T.slice();for(var A=0;A<T.length;A++)t(T[A]);var C=k;I.push([53,1]),n()}({25:function(e,t,n){e.exports=n.p+"assets/7104263cc7ae188d7e1275934c32a378.png"},26:function(e,t,n){e.exports=n.p+"assets/5a89d07e023cabc9bd46b8ef3e33b9c3.png"},28:function(e,t,n){e.exports=n.p+"assets/9a1e4bf4f3cb0556c15a96c17808dbf7.png"},29:function(e,t,n){e.exports=n.p+"assets/82e73f0c9de0d9e64a4f7eb6917fe799.png"},30:function(e,t,n){e.exports=n.p+"assets/1baf6f54be269d1d45a5ebb09a788ded.png"},31:function(e,t,n){e.exports=n.p+"assets/87fee39f3ffc377fa871d31587cc532c.png"},32:function(e,t,n){e.exports=n.p+"assets/0103ef81347edc3344acec319325eb81.png"},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),o=n(3),i=n(12),l=n(9),s=n(4);function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e,t){switch(t.type){case"SET_FAVORITE":return d({},e,{myList:[].concat(u(e.myList),[t.payload])});case"DELETE_FAVORITE":return d({},e,{myList:e.myList.filter((function(e){return e.id!==t.payload}))});case"LOGIN_REQUEST":case"LOGOUT_REQUEST":case"REGISTER_REQUEST":return d({},e,{user:t.payload});case"GET_VIDEO_SOURCE":return d({},e,{playing:e.trends.find((function(e){return e.id===Number(t.payload)}))||e.originals.find((function(e){return e.id===Number(t.payload)}))||[]});case"SEARCH_VIDEO_SOURCE":return""===t.payload?d({},e,{search:[]}):d({},e,{search:e.content.filter((function(e){return e.title.toLowerCase().includes(t.payload.toLowerCase())}))||[]});default:return e}},y=n(8),h=n(13),E=n.n(h),b=n(24),g=n.n(b),v=function(e){var t=e.trim().toLowerCase(),n=g()(t,{encoding:"binary"});return"".concat("https://gravatar.com/avatar/").concat(n)},O=(n(43),n(25)),_=n.n(O),w=n(26),j=n.n(w),P={logoutRequest:function(e){return{type:"LOGOUT_REQUEST",payload:e}}},D=Object(o.b)((function(e){return{user:e.user}}),P)((function(e){var t=e.user,n=e.isLogin,r=e.isRegister,c=Object.keys(t).length>0,o=E()("header",{isLogin:n,isRegister:r});return a.a.createElement("header",{className:o},a.a.createElement(y.b,{to:"/"},a.a.createElement("img",{className:"header__img",src:_.a,alt:"Platzi Video"})),a.a.createElement("div",{className:"header__menu"},a.a.createElement("div",{className:"header__menu--profile"},c?a.a.createElement("img",{src:v(t.email),alt:t.email}):a.a.createElement("img",{src:j.a,alt:""}),a.a.createElement("p",null,"Perfil")),a.a.createElement("ul",null,c?a.a.createElement("li",null,a.a.createElement("a",{href:"/"},t.name)):null,c?a.a.createElement("li",null,a.a.createElement("a",{href:"#logout",onClick:function(){e.logoutRequest({})}},"Cerrar Sesión")):a.a.createElement("li",null,a.a.createElement(y.b,{to:"/login"},"Iniciar sesión")))))})),N=(n(45),function(e){var t=e.children,n=e.title;return a.a.createElement("div",{className:"categories"},a.a.createElement("h3",{className:"categories__title"},n),t)}),S=(n(46),function(e){var t=e.children;return a.a.createElement("section",{className:"carousel"},a.a.createElement("div",{className:"carousel__container"},t))}),R=n(2),I=n.n(R),x=(n(47),n(28)),T=n.n(x),k=n(29),A=n.n(k),C=n(30),H=n.n(C),L=function(e){var t=e.id,n=e.cover,r=e.title,c=e.year,o=e.contentRating,i=e.duration,l=e.isList;return a.a.createElement("div",{className:"carousel-item"},a.a.createElement("img",{className:"carousel-item__img",src:n,alt:r}),a.a.createElement("div",{className:"carousel-item__details"},a.a.createElement("div",null,a.a.createElement(y.b,{to:"/player/".concat(t)},a.a.createElement("img",{className:"carousel-item__details--img",src:T.a,alt:"Play Icon"})),l?a.a.createElement("img",{className:"carousel-item__details--img",src:H.a,alt:"Plus Icon",onClick:function(){return n=t,void e.deleteFavorite(n);var n}}):a.a.createElement("img",{className:"carousel-item__details--img",src:A.a,alt:"Plus Icon",onClick:function(){e.setFavorite({id:t,cover:n,title:r,year:c,contentRating:o,duration:i})}})),a.a.createElement("p",{className:"carousel-item__details--title"},r),a.a.createElement("p",{className:"carousel-item__details--subtitle"},"".concat(c," ").concat(o," ").concat(i))))};L.propTypes={cover:I.a.string,title:I.a.string,year:I.a.number,contentRating:I.a.string,duration:I.a.number};var U={setFavorite:function(e){return{type:"SET_FAVORITE",payload:e}},deleteFavorite:function(e){return{type:"DELETE_FAVORITE",payload:e}}},V=Object(o.b)(null,U)(L);n(48);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M={searchVideoSource:function(e){return{type:"SEARCH_VIDEO_SOURCE",payload:e}}},F=Object(o.b)((function(e){return{search:e.search}}),M)((function(e){var t=e.isHome,n=e.search,r=e.isSearch,c=Object.keys(n).length>0,o=E()("inputSearch",{isHome:t}),i=E()("categories",{isSearch:r});return a.a.createElement("section",{className:"main"},a.a.createElement("h2",{className:"main__title"},"¿Qué quieres ver hoy?"),a.a.createElement("input",{type:"text",name:"search",className:o,placeholder:"Buscar...",onChange:function(t){e.searchVideoSource(t.target.value)}}),c?a.a.createElement(N,{title:"Resultados",className:i},a.a.createElement(S,null,n.map((function(e,t){return a.a.createElement(V,q({key:t},e))})))):null)}));function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Q=Object(o.b)((function(e){return{myList:e.myList,trends:e.trends,originals:e.originals}}),null)((function(e){var t=e.myList,n=e.trends,r=e.originals;return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,null),a.a.createElement(F,{isHome:!0}),t.length>0&&a.a.createElement(N,{title:"Mi Lista"},a.a.createElement(S,null,t.map((function(e){return a.a.createElement(V,G({key:e.id},e,{isList:!0}))})))),a.a.createElement(N,{title:"Tendencias"},a.a.createElement(S,null,n.map((function(e){return a.a.createElement(V,G({key:e.id},e))})))),a.a.createElement(N,{title:"Originales de Platzi Video"},a.a.createElement(S,null,r.map((function(e){return a.a.createElement(V,G({key:e.id},e))})))))})),B=(n(49),n(31)),J=n.n(B),z=n(32),X=n.n(z);function K(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Z={loginRequest:function(e){return{type:"LOGIN_REQUEST",payload:e}}},$=Object(o.b)(null,Z)((function(e){var t=Y(Object(r.useState)({email:""}),2),n=t[0],c=t[1],o=function(e){c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,W({},e.target.name,e.target.value)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{isLogin:!0}),a.a.createElement("section",{className:"login"},a.a.createElement("section",{className:"login__container"},a.a.createElement("h2",null,"Inicia sesión"),a.a.createElement("form",{className:"login__container--form",onSubmit:function(t){t.preventDefault(),e.loginRequest(n),e.history.push("/")}},a.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:o}),a.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:o}),"// eslint-disable-next-line react/button-has-type",a.a.createElement("button",{className:"button"},"Iniciar sesión"),a.a.createElement("div",{className:"login__container--remember-me"},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",id:"cbox1",value:"first_checkbox"})," ","Recuérdame"),a.a.createElement("a",{href:"/"},"Olvidé mi contraseña"))),a.a.createElement("section",{className:"login__container--social-media"},a.a.createElement("div",null,a.a.createElement("img",{src:J.a})," ","Inicia sesión con Google"),a.a.createElement("div",null,a.a.createElement("img",{src:X.a})," ","Inicia sesión con Twitter")),a.a.createElement("p",{className:"login__container--register"},"No tienes ninguna cuenta"," "," ",a.a.createElement(y.b,{to:"/register"},"Regístrate")))))}));n(50);function ee(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var re={registerRequest:function(e){return{type:"REGISTER_REQUEST",payload:e}}},ae=Object(o.b)(null,re)((function(e){var t=ne(Object(r.useState)({email:"",name:"",password:""}),2),n=t[0],c=t[1],o=function(e){c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,te({},e.target.name,e.target.value)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{isRegister:!0}),a.a.createElement("section",{className:"register"},a.a.createElement("section",{className:"register__container"},a.a.createElement("h2",null,"Regístrate"),a.a.createElement("form",{className:"register__container--form",onSubmit:function(t){t.preventDefault(),e.registerRequest(n),e.history.push("/")}},a.a.createElement("input",{name:"name",className:"input",type:"text",placeholder:"Nombre",onChange:o}),a.a.createElement("input",{name:"email",className:"input",type:"text",placeholder:"Correo",onChange:o}),a.a.createElement("input",{name:"password",className:"input",type:"password",placeholder:"Contraseña",onChange:o}),a.a.createElement("button",{className:"button"},"Registrarme")),a.a.createElement(y.b,{to:"/login"},"Iniciar sesión"))))})),ce=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"No Encontrado"),a.a.createElement("h2",null,"Regresa al Home"))},oe=(n(51),{getVideoSource:function(e){return{type:"GET_VIDEO_SOURCE",payload:e}}}),ie=Object(o.b)((function(e){return{playing:e.playing}}),oe)((function(e){var t=e.match.params.id,n=Object.keys(e.playing).length>0;return Object(r.useEffect)((function(){e.getVideoSource(t)}),[]),n?a.a.createElement("div",{className:"Player"},a.a.createElement("video",{controls:!0,autoPlay:!0},a.a.createElement("source",{src:e.playing.source,type:"video/mp4"})),a.a.createElement("div",{className:"Player-back"},a.a.createElement("button",{type:"button",onClick:function(){return e.history.goBack()}},"Regresar"))):a.a.createElement(ce,null)})),le=(n(52),function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("a",{href:"/"},"Terminos de uso"),a.a.createElement("a",{href:"/"},"Declaración de privacidad"),a.a.createElement("a",{href:"/"},"Centro de ayuda"))}),se=function(e){var t=e.children;return a.a.createElement("div",{className:"App"},t,a.a.createElement(le,null))},ue=function(){return a.a.createElement(y.a,null,a.a.createElement(se,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:Q}),a.a.createElement(l.a,{exact:!0,path:"/login",component:$}),a.a.createElement(l.a,{exact:!0,path:"/register",component:ae}),a.a.createElement(l.a,{exact:!0,path:"/player/:id",component:ie}),a.a.createElement(l.a,{component:ce}))))};if("undefined"!=typeof window){var pe;pe=i.b;var de=window.__PRELOADED_STATE__,fe=Object(i.c)(m,de,pe()),me=Object(s.a)();Object(c.hydrate)(a.a.createElement(o.a,{store:fe},a.a.createElement(l.b,{history:me},a.a.createElement(ue,null))),document.getElementById("app"))}}});