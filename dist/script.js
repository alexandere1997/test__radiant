!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);console.log(document.documentElement.clientWidth);var r=()=>{const e=document.querySelectorAll(".notranja__arrow"),t=document.querySelectorAll(".notranja__item"),n=document.querySelector(".notranja__ad");e.forEach((e,r)=>{e.addEventListener("click",()=>{t.forEach((t,o)=>{r==o&&(t.classList.toggle("active"),e.classList.toggle("active__btn"),n.classList.toggle("active__ad"))})})})};var o=()=>{const e=document.querySelector(".nav"),t=document.querySelector(".header__line");t.addEventListener("click",()=>{e.classList.toggle("nav__active"),t.classList.toggle("header__line_active")})};var a=()=>{new Swiper(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".slider__next",prevEl:".slider__prev"}})};var c=()=>{document.querySelectorAll(".header__link").forEach(e=>{e.addEventListener("mouseover",t=>{t.preventDefault(),console.log(e.offsetWidth);let n=e.offsetWidth;e.style.setProperty("--sq-color",n+"px")})})};(()=>{const e=document.querySelectorAll(".notranja__button a");document.documentElement.clientWidth<575||e.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let n=document.querySelector(e.getAttribute("href"));document.querySelector("#tabNav .notranja__active").classList.remove("notranja__active"),document.querySelector("#tabsWrap .notranja__box_active").classList.remove("notranja__box_active"),e.classList.add("notranja__active"),n.classList.add("notranja__box_active")})})})(),r(),o(),a(),c()}]);