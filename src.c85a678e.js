parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"sByI":[function(require,module,exports) {
const e={footerLink:document.querySelector(".mobile-menu__button"),closeModalBtn:document.querySelector(".btn-modal-close"),modal:document.querySelector(".modal"),body:document.querySelector("body")};function o(n){c(),e.closeModalBtn.removeEventListener("click",o),e.modal.removeEventListener("click",l),e.body.removeEventListener("keydown",t),i()}function n(){d(),i(),e.modal.addEventListener("click",l),e.body.addEventListener("keydown",t),e.closeModalBtn.addEventListener("click",o)}function l(e){e.currentTarget===e.target&&o()}function t(n){modalIsClose=e.modal.classList.contains("visually-hidden"),modalIsClose||"Escape"===n.key&&o()}function d(){e.modal.classList.remove("visually-hidden")}function c(){e.modal.classList.add("visually-hidden")}function i(){const o=e.modal.classList.contains("visually-hidden");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)}e.footerLink.addEventListener("click",n);
},{}],"N8YO":[function(require,module,exports) {
const s=document.querySelector(".js-scroll");function l(l){l.preventDefault(),window.scrollY<20?s.classList.remove("scroll--isShown"):s.classList.add("scroll--isShown")}s.addEventListener("click",()=>window.scroll(0,0)),window.addEventListener("scroll",l);
},{}],"hql5":[function(require,module,exports) {
const s=document.querySelector("#theme-switch-toggle");console.log(s);const e=document.querySelector("body"),t=document.querySelector(".modal-container"),a=document.querySelector(".aside"),c=document.querySelector(".mob-contact"),d=document.querySelector(".section"),l=document.querySelector(".mob-summary"),o=document.querySelector(".btn-modal-close"),i={LIGHT:"light-theme",DARK:"dark-theme"},{LIGHT:m,DARK:r}=i;function L(s){s.target.checked?(e.classList.add(r),t.classList.add(r),a.classList.add(r),c.classList.add(r),d.classList.add(r),l.classList.add(r),o.classList.add(r),e.classList.remove(m),t.classList.remove(m),a.classList.remove(m),c.classList.remove(m),d.classList.remove(m),l.classList.remove(m),o.classList.remove(m),localStorage.setItem("theme",r)):(e.classList.add(m),t.classList.add(m),a.classList.add(m),c.classList.add(m),d.classList.add(m),l.classList.add(m),o.classList.add(m),e.classList.remove(r),t.classList.remove(r),a.classList.remove(r),c.classList.remove(r),d.classList.remove(r),l.classList.remove(r),o.classList.remove(r),localStorage.setItem("theme",m))}s.addEventListener("change",L);let n=localStorage.getItem("theme");n||(n=m,localStorage.setItem("theme",n)),e.classList.add(n),t.classList.add(n),a.classList.add(n),c.classList.add(n),d.classList.add(n),l.classList.add(n),o.classList.add(n),s.checked=n!==m;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/mobile-menu"),require("./js/scroll"),require("./js/switcher");
},{"./sass/main.scss":"clu1","./js/mobile-menu":"sByI","./js/scroll":"N8YO","./js/switcher":"hql5"}]},{},["Focm"], null)
//# sourceMappingURL=/baierzdorf__ihor__resume/src.c85a678e.js.map