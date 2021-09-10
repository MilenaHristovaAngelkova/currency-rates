(this["webpackJsonpcurrency-rates-converter"]=this["webpackJsonpcurrency-rates-converter"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),a=c.n(s),j=(c(11),c(2)),i=c(3),o=c(5),d=c(0),h=function(e){return Object(d.jsxs)("p",{children:["The amount of rates for the selected currency where exchange rates differ among them by no more than 0.5 is ",Object(d.jsx)("b",{children:function(){var t=Object.values(e.outputConversions).sort();return t.forEach((function(e){for(var c=t.length-1;c>=0;c--)Math.abs(t[c].toFixed(1)-e.toFixed(1))>=.6&&t.pop()})),t.length}()}),"."]})},l=function(e){for(var t={},c=0,n=Object.entries(e.currencyRates);c<n.length;c++){var r=Object(j.a)(n[c],2),s=r[0],a=r[1];s.includes(e.selectedOption.toUpperCase())&&(t.hasOwnProperty(e.selectedOption.toUpperCase())?t=Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},s,a)):t[s]=a)}var l={},b={},u={};return Object.entries(t).sort((function(e,t){return e[1]-t[1]})).map((function(e){return e[1].toFixed(1)<1?l[e[0]]=e[1]:e[1].toFixed(1)>=1&&e[1].toFixed(1)<1.5?b[e[0]]=e[1]:e[1].toFixed(1)>=1.5?u[e[0]]=e[1]:null})),Object(d.jsxs)("article",{className:"conversions",children:[Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("tr",{className:"table-heading",children:Object(d.jsx)("th",{colSpan:"2",children:"Exchange Rates under 1"})}),Object(d.jsxs)("tr",{className:"col-headings",children:[Object(d.jsx)("th",{children:"Currencies"}),Object(d.jsx)("th",{children:"Rate"})]})]}),Object(d.jsx)("tbody",{children:Object.entries(l).sort((function(e,t){return e[1]-t[1]})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e[0]}),Object(d.jsx)("td",{children:e[1].toFixed(1)})]},e[0])}))}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Count"}),Object(d.jsx)("td",{children:Object.keys(l).length})]})})]}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("tr",{className:"table-heading",children:Object(d.jsx)("th",{colSpan:"2",children:"Exchange Rates between 1 and 1.4"})}),Object(d.jsxs)("tr",{className:"col-headings",children:[Object(d.jsx)("th",{children:"Currencies"}),Object(d.jsx)("th",{children:"Rate"})]})]}),Object(d.jsx)("tbody",{children:Object.entries(b).sort((function(e,t){return e[1]-t[1]})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e[0]}),Object(d.jsx)("td",{children:e[1].toFixed(1)})]},e[0])}))}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Count"}),Object(d.jsx)("td",{children:Object.keys(b).length})]})})]}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("tr",{className:"table-heading",children:Object(d.jsx)("th",{colSpan:"2",children:"Exchange Rates from 1.5"})}),Object(d.jsxs)("tr",{className:"col-headings",children:[Object(d.jsx)("th",{children:"Currencies"}),Object(d.jsx)("th",{children:"Rate"})]})]}),Object(d.jsx)("tbody",{children:Object.entries(u).sort((function(e,t){return e[1]-t[1]})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e[0]}),Object(d.jsx)("td",{children:e[1].toFixed(1)})]},e[0])}))}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Count"}),Object(d.jsx)("td",{children:Object.keys(u).length})]})})]}),Object(d.jsx)(h,{outputConversions:t})]})},b=function(){var e=["usd","eur","aud","cad","chf","nzd","bgn"],t=Object(n.useState)("usd"),c=Object(j.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(!0),i=Object(j.a)(a,2),o=i[0],h=i[1],b=Object(n.useState)(""),u=Object(j.a)(b,2),O=u[0],x=u[1],f=Object(n.useState)(""),g=Object(j.a)(f,2),p=g[0],m=g[1],v=Object(n.useState)({}),y=Object(j.a)(v,2),C=y[0],S=y[1],F={},N=(new Date).toLocaleString("az-AZ",{year:"numeric",month:"2-digit",day:"2-digit"});return Object(n.useEffect)((function(){localStorage.getItem("".concat(r,"-").concat(N))&&(S(JSON.parse(localStorage.getItem("".concat(r,"-").concat(N)))),h(!1),m("success"));for(var t=function(t){for(var c=function(c){e[t]!==e[c]&&fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/".concat(e[t],"/").concat(e[c],".json")).then((function(e){if(!e.ok)throw h(!1),x("Could not peform the current fetch request."),new Error("Could not peform the current fetch request.");return e.json()})).then((function(n){var r="".concat(e[t].toUpperCase(),"-").concat(e[c].toUpperCase()),s=n[e[c]];F[r]=s,h(!1)})).catch((function(e){h(!1),x(e.message)}))},n=0;n<e.length;n++)c(n)},c=0;c<e.length;c++)t(c);S(F),m("success"),localStorage.setItem(N,JSON.stringify(C))}),[]),Object(d.jsxs)("section",{className:"home",children:[Object(d.jsx)("h1",{children:"Exchange Rates Information"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{htmlFor:"currency",children:"See currency rates for: "}),Object(d.jsx)("select",{name:"currency",id:"currency",defaultValue:"usd",onChange:function(e){return s(e.target.value)},children:e.map((function(e){return Object(d.jsx)("option",{value:e,id:e,children:e.toUpperCase()},e)}))})]}),o&&Object(d.jsx)("p",{className:"state-info",children:"Loading..."}),O&&Object(d.jsx)("p",{className:"state-info",children:O}),"success"===p?Object(d.jsx)(l,{selectedOption:r,currencyRates:C}):Object(d.jsx)("p",{className:"state-info",children:"Something went wrong."})]})};var u=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.763336d0.chunk.js.map