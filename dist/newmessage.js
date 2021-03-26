(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(645),o=r.n(t)()((function(e){return e[1]}));o.push([e.id,"body {\r\n    font-family: Helvetica, sans-serif;\r\n}\r\n\r\n.header {\r\n    font-size: 36px;\r\n    font-weight:bold;\r\n    text-align: center;\r\n    margin-bottom: 0.7em;\r\n    margin-top: 0.4em;\r\n}\r\n\r\n.topNav {\r\n    padding: 1em;\r\n    margin-left: 15em;\r\n    margin-right: 15em;\r\n    text-align: right;\r\n    border-style: solid;\r\n    border-width: 0.02em;\r\n    border-color: #4b4b4b; \r\n    border-radius: 0.4em;  \r\n}\r\n\r\n\r\n/* Messages part */\r\n\r\n.newMessage {\r\n    margin-right: 2em;\r\n    text-decoration:none;\r\n    color:black;\r\n    font-weight: bolder;\r\n}\r\n\r\n.newMessage:hover {\r\n    color: #4267B2;\r\n}\r\n\r\n.allMessages {\r\n    margin-right: 2em;\r\n    text-decoration: none;\r\n    color:black;\r\n    font-weight: bolder;\r\n}\r\n\r\n.allMessages:hover {\r\n    color: #4267B2;\r\n}\r\n\r\n.messageCounter {\r\n    text-align: center;\r\n    color: red;\r\n    padding: 2em;\r\n}\r\n\r\n.messageDisplay {\r\n    display: block;\r\n    padding: 0.5em;\r\n    margin-bottom: 2em;\r\n    margin-right: 10em;\r\n    margin-left: 10em;\r\n    border-style: solid;\r\n    border-width: 0.02em;\r\n    border-color: #4b4b4b; \r\n    border-radius: 0.4em;\r\n    box-shadow:0 0 0 0.2em rgba(0,0,0,0.06);\r\n}\r\n\r\n.messageDisplay:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.messageDisplay > p {\r\n    margin-left: 1em;\r\n}\r\n\r\n\r\n/* Form part */\r\n\r\n.formWrapper {  \r\n    margin-top: 3em;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\nform {\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\ninput[type=text] {\r\n    margin-top: 0.5em;\r\n    width: 90%;\r\n    padding: 1em;\r\n    border-radius: 0.7em;\r\n    border-width: 0.02em;\r\n} \r\n\r\n #submitMessageBtn {\r\n    margin: 1em;\r\n    padding: 0.7em;\r\n    width: 20%;\r\n    font-weight: bold;\r\n    border-radius: 0.7em;\r\n    border-width: 0.02em;\r\n    background-color: #4267B2;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n} \r\n\r\n\r\n\r\n\r\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},379:(e,n,r)=>{var t,o=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),a=[];function i(e){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===e){n=r;break}return n}function s(e,n){for(var r={},t=[],o=0;o<e.length;o++){var s=e[o],c=n.base?s[0]+n.base:s[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var m=i(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(a[m].references++,a[m].updater(u)):a.push({identifier:d,updater:g(u,n),references:1}),t.push(d)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function m(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function u(e,n,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,p=0;function g(e,n){var r,t,o;if(n.singleton){var a=p++;r=f||(f=c(n)),t=m.bind(null,r,a,!1),o=m.bind(null,r,a,!0)}else r=c(n),t=u.bind(null,r,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var o=i(r[t]);a[o].references--}for(var c=s(e,n),l=0;l<r.length;l++){var d=i(r[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=c}}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}let n=new class{constructor(){e(this,"value",0),e(this,"observers",void 0),this.observers=[]}subscribe(e){this.observers.push(e)}unsubscribe(e){this.observers=this.observers.filter((n=>n!==e))}notify(e){this.observers.forEach((n=>n(e)))}},t=JSON.parse(localStorage.getItem("allmessages")||"[]");function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}class a{constructor(e,n,r){o(this,"messageTitle",void 0),o(this,"messageBody",void 0),o(this,"isRead",void 0),this.messageTitle=e,this.messageBody=n,this.isRead=r}}var i=r(379),s=r.n(i),c=r(426);s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,function(){const e=document.createElement("div");e.className="header",e.textContent="Messenger VeryLite",document.body.appendChild(e)}(),function(){const e=document.createElement("div");e.className="topNav";const n=document.createElement("a");n.className="allMessages",n.href="home.html",n.textContent="Messages";const r=document.createElement("a");r.className="newMessage",r.href="newmessage.html",r.textContent="Add new message",document.body.appendChild(e),e.appendChild(r),e.appendChild(n)}(),function(){const e=document.createElement("div");e.className="formWrapper";const r=document.createElement("form");r.id="messageform";const o=document.createElement("input");o.type="text",o.name="messageTitle",o.placeholder="Title";const i=document.createElement("input");i.type="text",i.name="messageBody",i.placeholder="Message";const s=document.createElement("button");s.id="submitMessageBtn",s.textContent="Send",document.body.appendChild(e),e.appendChild(r),r.appendChild(o),r.appendChild(i),r.appendChild(s),r.addEventListener("submit",(function(e){e.preventDefault();const o=new FormData(r);var i;i=new a(o.get("messageTitle").toString(),o.get("messageBody").toString(),!1),t.push(i),localStorage.setItem("allmessages",JSON.stringify(t)),n.notify(n.value),r.reset()}))}()})()})();