const i=document.querySelector(".management-others-card__explainations");if(i){let e=0;const r=i.querySelectorAll(".management-others-card__explaination");for(let s=0;s<r.length;s++){const _=r[s].offsetHeight;_>e&&(e=_)}i.style.setProperty("height",`calc(${e}px + 2*var(--spacing-8))`)}const g=document.querySelectorAll(".management-others-card__link");g&&g.forEach(e=>{let r=e.dataset.name,s=i.querySelector(".management-others-card__explaination[data-name="+r+"]");e.addEventListener("mouseenter",()=>{s.classList.add("active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("active")})});const m={speed:200},t=document.querySelector(".awards-section__content");if(t){const e=t.cloneNode(!0);t.classList.add("primary"),e.classList.add("secondary"),t.parentNode.appendChild(e);const r=t.querySelectorAll(".award-item").length;t.style.setProperty("animation",`awards-section--primary ${r*1e3/m.speed}s linear infinite`),e.style.setProperty("animation",`awards-section--secondary ${r*1e3/m.speed}s linear infinite`)}const y={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.83%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},p=document.querySelectorAll(".btns-container__first-choice-container__btn"),u=document.querySelector(".btns-container__second-choice-container"),c=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),v=document.querySelectorAll(".filters-container__btns-container__btn"),C=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),f=document.querySelector(".results-container"),l=document.querySelectorAll(".toggle-button"),P=document.querySelectorAll(".card-container, .grid-row-body"),o=document.querySelector(".cards-display-container"),n=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body");const a={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};p.forEach(e=>e.addEventListener("click",()=>L(e)));c.forEach(e=>e.addEventListener("click",()=>R(e)));v.forEach(e=>e.addEventListener("click",()=>U(e)));l.forEach(e=>e.addEventListener("click",()=>z()));P.forEach(e=>e.addEventListener("click",()=>h(e)));const L=e=>{console.log(u),a.secondChoice="",c.forEach(r=>r.classList.remove("active")),p.forEach(r=>r.classList.remove("active")),C.forEach(r=>r.classList.add("hidden")),e.classList.add("active"),a.firstChoice=e.getAttribute("data-attr"),u.classList.remove("hidden"),document.querySelector(`.${e.getAttribute("data-attr")}`).classList.remove("hidden"),d()},R=e=>{c.forEach(r=>r.classList.remove("active")),a.secondChoice=e.getAttribute("data-attr"),e.classList.add("active"),d()},U=e=>{a.thirdChoice=e.getAttribute("data-attr"),v.forEach(r=>r.classList.remove("active")),e.classList.add("active"),d()},d=()=>{a.firstChoice!==""&&a.secondChoice!==""?f.classList.remove("hidden"):f.classList.add("hidden"),n.innerHTML="",o.innerHTML="";const e=y[a.firstChoice][a.secondChoice][a.thirdChoice];e.map(r=>o.innerHTML+=`
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${r.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===1?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===2?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===3?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===4?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===5?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===6?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===7?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">7</p>
                  </div>
                </div>
              </div>
              <div class="card-container__card-informations">
                <p class="card-container__card-informations__percentage-rate">${r.percentageRate}</p>
                <p class="card-container__card-informations__card-information-text">
                  ${r.informations}
                </p>
                <svg class="card-container__card-informations__logo">
                    <use href="${r.iconUrl}#logo"></use>
                </svg>
              </div>
            </div>
    `),n.innerHTML+=`
                <div class="grid-container">
                  <div class="grid-container__grid-header">
                    <div>
                      <p></p>
                    </div>
                    <div>
                      <p>SRRI</p>
                    </div>
                    <div>
                      <p>YTD</p>
                    </div>
                    <div>
                      <p>N-1</p>
                    </div>
                    <div>
                      <p>Perf. 3ans</p>
                      <p>cumulé</p>
                    </div>
                    <div>
                      <p>Perf. 5ans</p>
                      <p>cumulé</p>
                    </div>
                    <div>
                      <p>Perf.</p>
                      <p>depuis création</p>
                    </div>
                    <div>
                      <p>Volatilité</p>
                      <p>depuis création</p>
                    </div>
                  </div>
                </div>
    `,e.map(r=>n.innerHTML+=`
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${r.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${r.srri}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-ytd-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-n1-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf3year-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf5year-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-volatility-item-container">
                    <p></p>
                  </div>
                </div>
    `),document.querySelectorAll(".card-container, .grid-row-body").forEach(r=>r.addEventListener("click",()=>h(r)))},z=e=>{l.forEach(r=>{r.classList.toggle("toggle-button--active")}),b()},h=e=>{console.log("ok"),b(),document.querySelectorAll(".card-container, .grid-row-body").forEach(r=>r.classList.remove("active")),e.classList.add("active")},b=()=>{l.forEach(e=>{e.classList.contains("btn-parameter1")&&e.classList.contains("toggle-button--active")?o.classList.remove("hidden"):e.classList.contains("btn-parameter1")&&!e.classList.contains("toggle-button--active")&&o.classList.add("hidden"),e.classList.contains("btn-parameter2")&&e.classList.contains("toggle-button--active")?n.classList.remove("hidden"):e.classList.contains("btn-parameter2")&&!e.classList.contains("toggle-button--active")&&n.classList.add("hidden")})};
