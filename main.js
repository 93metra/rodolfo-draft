(()=>{"use strict";var e=document.querySelector(".logo__img-wrapper"),t=document.querySelector(".title"),n=document.querySelector(".chart__image");function i(){e.classList.contains("animation-rotate")||(e.classList.add("animation-rotate"),setTimeout((function(){e.classList.remove("animation-rotate")}),2e3))}t.addEventListener("click",(function(){i()})),e.addEventListener("mouseover",(function(){i()})),e.addEventListener("click",(function(){i()})),n.addEventListener("click",(function(){n.classList.toggle("animation-spin")})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header"),t=document.querySelector(".up-button");new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting?t.classList.remove("is-visible"):t.classList.add("is-visible")}))}),{root:null,rootMargin:"0px",threshold:0}).observe(e)}))})();