(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),c=t.n(o),i=(t(10),t(1)),s=t(4),l=t.n(s),m="2c51f99af252cadfc2f0892a7824bd59",d="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)({}),s=Object(i.a)(c,2),u=s[0],h=s[1];return r.a.createElement("div",{className:"undefined"!=typeof u.main?u.dt<u.sys.sunset?"Rain"===u.weather[0].main?"app rainy":"Clouds"===u.weather[0].main?"app cloudy":"Snow"===u.weather[0].main?"app snowy":"Thunderstrom"===u.weather[0].main?"app thunder-rain":"app":"Rain"===u.weather[0].main?"app dark-rainy":"Clouds"===u.weather[0].main?"app dark-clouds":"Snow"===u.weather[0].main?"app dark-snowy":"Thunderstorm"===u.weather[0].main?"app dark-thunder-rain":"app dark-clear":"app"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search",onChange:function(e){return o(e.target.value)},value:t,onKeyDownCapture:function(e){"Enter"===e.key&&fetch("".concat(d,"weather?q=").concat(t,"&units=metric&APPID=").concat(m)).then((function(e){return e.json()})).then((function(e){h(e),o(""),console.log(e),console.log(e.dt)}))}})),"undefined"!=typeof u.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},u.name,", ",u.sys.country," "),r.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","TuesDay","Wednesday","Thursday","Friday","Saturday"][e.getDay()];return"".concat(a," ")}(new Date),l.a.unix(1591724481).format("LL"))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0C"),r.a.createElement("div",{className:"weather"},u.weather[0].main))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports=t(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.ffb7005a.chunk.js.map