import"./hoisted.25135171.js";import"./astro-assets-services.5d54009f.js";const t=document.getElementById("to-top-btn"),n=document.getElementById("blog-hero");function r(e){e.forEach(o=>{t.dataset.show=(!o.isIntersecting).toString()})}t.addEventListener("click",()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})});const c=new IntersectionObserver(r);c.observe(n);
