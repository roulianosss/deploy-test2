const s=document.querySelector(".management-others-card__explainations");if(s){let e=0;const t=s.querySelectorAll(".management-others-card__explaination");for(let a=0;a<t.length;a++){const o=t[a].offsetHeight;o>e&&(e=o)}s.style.setProperty("height",`calc(${e}px + 2*var(--spacing-8))`)}const i=document.querySelectorAll(".management-others-card__link");i&&i.forEach(e=>{let t=e.dataset.name,a=s.querySelector(".management-others-card__explaination[data-name="+t+"]");e.addEventListener("mouseenter",()=>{a.classList.add("active")}),e.addEventListener("mouseleave",()=>{a.classList.remove("active")})});const r={speed:200},n=document.querySelector(".awards-section__content");if(n){const e=n.cloneNode(!0);n.classList.add("primary"),e.classList.add("secondary"),n.parentNode.appendChild(e);const t=n.querySelectorAll(".award-item").length;n.style.setProperty("animation",`awards-section--primary ${t*1e3/r.speed}s linear infinite`),e.style.setProperty("animation",`awards-section--secondary ${t*1e3/r.speed}s linear infinite`)}