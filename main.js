(()=>{"use strict";var t=document.querySelector(".logo__img-wrapper"),e=document.querySelector(".title"),n=document.querySelector(".chart__image");function i(){t.classList.contains("animation-rotate")||(t.classList.add("animation-rotate"),setTimeout((function(){t.classList.remove("animation-rotate")}),2e3))}e.addEventListener("click",(function(){i()})),t.addEventListener("mouseover",(function(){i()})),t.addEventListener("click",(function(){i()})),n.addEventListener("click",(function(){n.classList.toggle("animation-spin")}))})();