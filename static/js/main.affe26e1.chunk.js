(window.webpackJsonpreact_test=window.webpackJsonpreact_test||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),i=n(4),l=n(3),u=(n(23),"toDo/add-point"),s="toDo/change-point";n(24);var d=n(12),f=n(6);n(25);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=function(e){var t;return r.a.createElement("div",{id:e.id,className:"point-container"},r.a.createElement("input",{value:e.name,onChange:function(t){e.status||e.updatePoint(p({},e,{},{name:t.target.value}))},className:(t=e.status,"point-input ".concat(t&&"done-input")),placeholder:"Type something...",disabled:e.status}),r.a.createElement("span",{onClick:function(){e.name.length&&e.updatePoint(p({},e,{},{status:!e.status}))}},e.status?"done":"no"))};n(26);var v=r.a.memo(function(e){var t=e.children,n=e.onClick,a=(e.disabled,e.className),o=void 0===a?"":a;return r.a.createElement("div",{className:["button",o].join(" "),onClick:n},t)});n(27);var O=function(e){var t=e.handleChange;return r.a.createElement("div",{className:"filter-container"},r.a.createElement("div",null,"Filter"),r.a.createElement("div",{className:"filter-btn-container"},r.a.createElement(v,{onClick:function(){return t("done")}},"Done"),r.a.createElement(v,{onClick:function(){return t("no")}},"No"),r.a.createElement(v,{onClick:function(){return t(!1)}},"All")))};n(28);var g=function(e){var t=Object(a.useState)({}),n=Object(d.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)(function(){c({data:e.data,filter:""})},[e.data]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O,{handleChange:function(t){if(!t)return c({data:e.data,filter:""});c("done"===t?{data:e.data.filter(function(e){return e.status}),filter:t}:{data:e.data.filter(function(e){return!e.status}),filter:t})}})),r.a.createElement("div",{className:"list-container"},o.data&&o.data.map(function(t){return r.a.createElement(b,{id:t.id,name:t.name,status:t.status,updatePoint:e.updatePoint})})))};n(29);var h=function(e){var t=e.visible;return r.a.createElement("div",{className:["blair",t?"db":"dn"].join(" ")})};var y=function(){var e=Object(i.b)(),t=Object(i.c)(function(e){return e.todo.todo}),n=Object(a.useCallback)(function(){e({type:u})},[e,t]),o=Object(a.useCallback)(function(t){e(function(e){return{type:s,payload:e}}(t))},[e,t]);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title"},"My check list"),r.a.createElement("div",{className:"header-btn"},r.a.createElement(v,{className:"btn-header",onClick:n},"Add point"))),r.a.createElement("div",null,r.a.createElement("div",{className:"all-done"},r.a.createElement(h,{visible:t.length&&t.filter(function(e){return e.status}).length===t.length}))),r.a.createElement(g,{data:t,updatePoint:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w={name:"",status:!1},P={todo:localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[]},N=Object(l.b)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n=e.todo.concat(j({id:e.todo.length},w));return j({},e,{todo:n});case s:var a=e.todo.map(function(e){return e.id===t.payload.id?j({},e,{status:t.payload.status,name:t.payload.name}):e});return j({},e,{todo:a});default:return e}}}),k=Object(l.c)(N);k.subscribe(function(){localStorage.setItem("todo",JSON.stringify(k.getState().todo.todo))}),c.a.render(r.a.createElement(i.a,{store:k},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.affe26e1.chunk.js.map