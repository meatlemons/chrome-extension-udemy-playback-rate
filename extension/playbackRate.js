!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=8,r=.5,a=.5;let c,o,i=!1,s="last",d=!1,l=!1;function u(){const e=d,t=l;function u(){c=e,o=t,chrome.storage.sync.get({udemy_playback_rate:1},r=>{const c=(r.udemy_playback_rate-n)/a/-1;f(t.children[c],t),e.playbackRate=r.udemy_playback_rate})}s=d,d=l=!1,e.addEventListener("loadeddata",u),e.addEventListener("play",u),e.addEventListener("ended",u),i||(document.addEventListener("keyup",()=>{"ArrowRight"===event.code&&event.shiftKey&&c&&o&&y("increase",c,o),"ArrowLeft"===event.code&&event.shiftKey&&c&&o&&y("decrease",c,o)}),i=!0),function(){const c=Array(1+(n-r)/a).fill().reduce((e,t,r)=>e+=function(e){return`\n\t\t<li class="menu--menu--2Pw42 menu--item--2IgLt" role="menuitem" role="presentation">\n\t\t\t<a tabindex="-1" role="menuitem">\n\t\t\t\t<span class="playback-rate--playback-rate--1XOKO">\n\t\t\t\t\t${n-a*e}\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t</li>`}(r),"");t.innerHTML=c,Object.keys(t.children).forEach((r,c)=>{const o=t.children[r];o.addEventListener("click",()=>{y(n-c*a,e,t),f(o,t)})})}()}function y(e,t,c){"increase"===e||"decrease"===e?chrome.storage.sync.get({udemy_playback_rate:1},o=>{let i;"increase"===e&&(i=o.udemy_playback_rate+a),"decrease"===e&&(i=o.udemy_playback_rate-a),i>n&&(i=r),i<r&&(i=n);const s=(i-n)/a/-1;f(c.children[s],c),chrome.storage.sync.set({udemy_playback_rate:i},()=>{t.playbackRate=i,document.querySelector("[data-purpose='playback-rate-button']").innerText=i})}):chrome.storage.sync.set({udemy_playback_rate:e},()=>{t.playbackRate=e,document.querySelector("[data-purpose='playback-rate-button']").innerText=e})}function f(e,t){Object.keys(t.children).forEach(e=>{t.children[e].classList.remove("active")}),e.classList.add("active")}function p(e,t,n){if("video"===n){if(!e.target.classList)return;if(e.target.classList.contains(t)){const t=e.target.children[0];return t&&t.classList.contains("vjs-tech")?void(d=t):void 0}}if(e.children){Array.from(e.children).forEach(e=>{if(e.classList.contains(t)){if("menu"===n){if(!e.firstChild)return;return"0.5"===e.firstChild.textContent||"0.5, selected"===e.firstChild.textContent?void(l=e):void 0}chrome.storage.sync.get({udemy_playback_rate:1},t=>{e.innerText=t.udemy_playback_rate})}return p(e,t,n)})}}new MutationObserver(e=>{e.forEach(e=>{if(p(e,"video-player--video-player--1sfof","video"),e.addedNodes.length>0){Array.from(e.addedNodes).forEach(e=>{p(e,"menu--menu--2Pw42","menu"),p(e,"playback-rate--playback-rate-value--3SJ7v","rateBtn")})}d&&l&&d!==s&&u()})}).observe(document,{childList:!0,subtree:!0})}]);