(window.webpackJsonp=window.webpackJsonp||[]).push([["97a8"],{"2kLn":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),u=n("p0XB"),i=n.n(u),c=n("O40h"),o=n("0iUn"),l=n("sLSF"),s=n("MI3g"),p=n("a7VT"),f=n("Tit0"),d=n("hfKm"),m=n.n(d);var b,h,w,v,E=n("q1tI"),j=n("apO0"),O=n("3WjR"),y=function(e){var t=e.item;return E.createElement("div",null,E.createElement("h1",null,"Detail for ",t.name),E.createElement("p",null,"ID: ",t.id))},k=function(e){function t(){return Object(o.default)(this,t),Object(s.default)(this,Object(p.default)(t).apply(this,arguments))}return Object(f.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.errors;return n?E.createElement(j.a,{title:"Error | Next.js + TypeScript Example"},E.createElement("p",null,E.createElement("span",{style:{color:"red"}},"Error:")," ",n)):E.createElement(j.a,{title:"".concat(t?t.name:"Detail"," | Next.js + TypeScript Example")},t&&E.createElement(y,{item:t}))}}]),t}(E.Component);h=k,w="getInitialProps",b=Object(c.default)(a.a.mark(function e(t){var n,r,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,e.prev=1,r=n.id,e.next=5,Object(O.b)(i()(r)?r[0]:r);case 5:return u=e.sent,e.abrupt("return",{item:u});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{errors:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[1,9]])})),v=function(e){return b.apply(this,arguments)},w in h?m()(h,w,{value:v,enumerable:!0,configurable:!0,writable:!0}):h[w]=v;t.default=k},"3WjR":function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return p});var r=n("p0XB"),a=n.n(r),u=n("ln6h"),i=n.n(u),c=n("O40h"),o=[{id:101,name:"Alice"},{id:102,name:"Bob"},{id:103,name:"Caroline"},{id:104,name:"Dave"}];function l(e){return s.apply(this,arguments)}function s(){return(s=Object(c.default)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.find(function(e){return e.id===Number(t)})){e.next=3;break}throw new Error("Cannot find user");case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=Object(c.default)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a()(o)){e.next=2;break}throw new Error("Cannot find users");case 2:return e.abrupt("return",o);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}},gXs9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail",function(){var e=n("2kLn");return{page:e.default||e}}])}},[["gXs9","5d41","9da1"]]]);