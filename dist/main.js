!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function c(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],s=e.base?a[0]+e.base:a[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var g=null,m=0;function v(n,e){var t,r,o;if(e.singleton){var a=m++;t=g||(g=l(e)),r=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var a=s(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=a}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){var r=t(0),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);n.exports=o.locals||{}},function(n,e,t){(e=t(1)(!1)).push([n.i,"body {\n  margin: 0;\n  padding: 0;\n}\n\n/* landing page */\n\n#landing-page {\n  background-image: url(/dist/images/bestr.jpeg);\n  background-size: cover;\n  height: 100vh;\n  background-repeat: no-repeat;\n}\n\nh2 {\n  color: rgb(229, 235, 240);\n  padding: 20px;\n  margin: 0 auto;\n  width: fit-content;\n}\n\n.title {\n  text-align: center;\n  font-size: 3rem;\n}\n\n/* nav-slider */\n\n.line {\n  background: rgb(239, 239, 240);\n  height: 5px;\n  margin: 5px;\n  width: 30px;\n}\n\n.line:nth-child(1) {\n  margin-top: 0;\n}\n\n.nav-slider {\n  cursor: pointer;\n  padding: 15px;\n}\n\n/* nav-slider-section */\n\n.nav-slider-section {\n  background: rgb(24, 23, 23);\n  height: 100%;\n  left: 0;\n  position: fixed;\n  transform: translateX(-100%);\n  top: 0;\n  width: 100%;\n}\n\n.close-nav-slider {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: rgb(6, 116, 12);\n  font-size: 2em;\n  float: right;\n  outline: none;\n  padding: 15px;\n}\n\n.nav-links-container {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n}\n\n.nav-links-container li {\n  text-decoration: none;\n  text-align: center;\n  padding: 10px;\n}\n\n.nav-links-container,\n.nav-links-container ul {\n  font-size: 2rem;\n  list-style: none;\n}\n\n.nav-links-container a {\n  color: white;\n  text-decoration: none;\n}\n\n.openNav {\n  animation: openNav 0.5s forwards;\n}\n\n.closeNav {\n  animation: openNav 0.5s forwards;\n}\n\n@keyframes openNav {\n  100% {\n    transform: translateX(0%);\n  }\n}\n\n@keyframes closeNav {\n  0% {\n    transform: translateX(0%);\n  }\n\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n/* menu */\n\n#menu {\n  background: rgb(22, 22, 24);\n}\n\n.menu-title {\n  color: rgb(227, 220, 235);\n  font-size: 2rem;\n  padding: 25px;\n  text-align: center;\n}\n\np {\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  width: 95%;\n  font-size: 1.5rem;\n}\n\n.menu-price {\n  float: left;\n}\n\n/* restaurant-info */\n\n#restaurant-info {\n  background: rgb(31, 31, 32);\n  padding: 20px;\n}\n\n.restaurant-info-title {\n  color: #fff;\n  margin: 0 auto;\n}\n\n.info-container {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.address-content,\n.business-hours,\n.contact-content {\n  padding: 10px;\n}\n\n.address,\n.hours {\n  font-size: 1.3rem;\n  text-align: center;\n  margin-left: 100px;\n}\n\n.contact {\n  margin: 0 auto;\n  font-size: 1.3em;\n  text-align: center;\n  margin-left: 100px;\n}\n\n@media screen and (min-width: 768px) {\n  .info-container {\n    grid-template-columns: 1fr 1fr 1fr;\n    text-align: center;\n  }\n\n  .address-content,\n  .business-hours {\n    border-right: 1px solid #fff;\n    padding: 30px;\n    margin-left: 50px;\n    text-align: center;\n  }\n\n  .contact-content {\n    padding: 30px;\n    text-align: center;\n  }\n}\n",""]),n.exports=e},function(n,e,t){var r=t(0),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);n.exports=o.locals||{}},function(n,e,t){(e=t(1)(!1)).push([n.i,".tabs-container {\n  margin: auto;\n  padding-bottom: 20px;\n  width: 100%;\n}\n\n.tabHeader {\n  background: transparent;\n  border: none;\n  color: aqua;\n  cursor: pointer;\n  font-size: 1.5rem;\n  outline: none;\n  padding: 6px 12px;\n}\n\n.tabSection {\n  border: 1px solid #fff;\n  padding: 15px;\n  display: none;\n}\n\n.show-tab {\n  display: block;\n}\n",""]),n.exports=e},function(n,e,t){"use strict";t.r(e);const r=document.getElementById("tabs"),o=document.getElementById("tabs-content").getElementsByTagName("section");r.getElementsByTagName("button");r.addEventListener("click",n=>{if(!("BUTTON"===n.target.nodeName))return;const e=n.target.dataset.tab,t=document.getElementById("tabSection-"+e);for(let n=0;n<o.length;n++)o[n]!==o[e-1]&&o[n].classList.remove("show-tab"),t.classList.add("show-tab")});t(2),t(4);const a=document.querySelector(".nav-slider"),i=document.querySelector(".close-nav-slider"),c=document.querySelector(".nav-slider-section"),s=document.querySelectorAll(".nav-links");function l(){c.classList.remove("openNav")}a.onclick=function(){c.classList.add("openNav")},i.onclick=function(){c.classList.remove("openNav")},i.onclick=l,s.forEach(n=>{n.onclick=l});const u=footer();document.appendChild(u)}]);