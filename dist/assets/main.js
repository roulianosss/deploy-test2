const F=document.querySelectorAll(".management-others-card");if(F){let l=0;F.forEach(t=>{const _=t.querySelectorAll(".management-others-card__explaination");for(let s=0;s<_.length;s++){const r=_[s].offsetHeight;r>l&&(l=r)}t.querySelector(".management-others-card__explainations").style.setProperty("height",`calc(${l}px + var(--spacing-8))`),t.querySelectorAll(".management-others-card__link").forEach(s=>{let g=s.dataset.name,r=t.querySelector(".management-others-card__explaination[data-name="+g+"]");s.addEventListener("mouseenter",()=>{r.classList.add("active")}),s.addEventListener("mouseleave",()=>{r.classList.remove("active")})})})}const S=document.querySelector(".header");if(S){let s=function(){y(l),g(l),r()},g=function(d){d.forEach(c=>{c.querySelector(".menu__name").addEventListener("click",h=>{h.preventDefault(),u(c)})})},r=function(){o.addEventListener("click",()=>{i()})},i=function(){const d=document.querySelector(".menu__item.active");d&&(d.classList.remove("active"),o.classList.remove("active"))},u=function(d){const c=document.querySelector(".menu__item.active");c===d?(d.classList.remove("active"),o.classList.remove("active")):c?(c.classList.remove("active"),d.classList.add("active")):(d.classList.add("active"),o.classList.add("active"))},m=function(d){const c=d.getBoundingClientRect(),h=S.getBoundingClientRect();return c.left-h.left},v=function(d){const c=d.getBoundingClientRect(),h=S.getBoundingClientRect();return c.right-h.left},y=function(d){const c=parseInt(window.getComputedStyle(S).getPropertyValue("padding-left"),10),h=parseInt(window.getComputedStyle(_).getPropertyValue("padding-left"),10);d.forEach(f=>{const L=f.querySelector(".expand-menu");if(f.classList.contains("menu__item--full")){const w=m(f);L.style.left=`${c+h-w}px`}else S.offsetWidth-v(L)<c?(f.classList.add("menu__item--right"),f.classList.remove("menu__item--left")):(f.classList.remove("menu__item--right"),f.getAttribute("data-position")==="left"&&f.classList.add("menu__item--left"))})};var init=s,displayExpandMenuItems=g,handleOverlayClick=r,closeMenu=i,toogleMenuItem=u,getElementLeftPosition=m,getElementRightPosition=v,positionMenuItems=y;const l=document.querySelectorAll(".menu__item"),t=document.querySelectorAll(".expand-menu__sub-menu"),_=document.querySelector(".header__menu"),o=document.querySelector(".header__overlay");window.addEventListener("resize",()=>{console.log("resizz"),y(l)}),s(),t&&t.forEach(d=>{d.querySelectorAll(".link--arrow").forEach(h=>{let f=h.dataset.name,L=d.querySelector(".link--arrow[data-name="+f+"]");h.addEventListener("click",()=>{d.querySelector(".link--arrow").classList.remove("active"),h.classList.remove("active"),L.classList.add("active"),$(".expand-menu__sub-item").classList.remove("visible"),$(".expand-menu__sub-item[data-name="+f+"]").classList.add("visible")})})})}const z={speed:200},R=document.querySelectorAll(".awards-section");R&&R.forEach(l=>{const t=l.querySelector(".awards-section__content"),_=t.cloneNode(!0);t.classList.add("primary"),_.classList.add("secondary"),t.parentNode.appendChild(_);const o=t.querySelectorAll(".award-item").length;t.style.setProperty("animation",`awards-section--primary ${o*1e3/z.speed}s linear infinite`),_.style.setProperty("animation",`awards-section--secondary ${o*1e3/z.speed}s linear infinite`)});if(document.querySelector(".contracts-piloted-section-container")){let d=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const n=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${n}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=d;const l={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:8,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},t=document.querySelectorAll(".btns-container__first-choice-container__btn"),_=document.querySelector(".btns-container__second-choice-container"),o=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),s=document.querySelectorAll(".filters-container__btns-container__btn"),g=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),r=document.querySelector(".results-container"),i=document.querySelectorAll(".toggle-button"),u=document.querySelectorAll(".card-container, .grid-row-body"),m=document.querySelector(".cards-display-container"),v=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body"),document.querySelector(".distribution-funds-array-section__btn").addEventListener("click",d);const c={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};t.forEach(n=>n.addEventListener("click",()=>h(n))),o.forEach(n=>n.addEventListener("click",()=>f(n))),s.forEach(n=>n.addEventListener("click",()=>L(n))),i.forEach(n=>n.addEventListener("click",()=>A())),u.forEach(n=>n.addEventListener("click",()=>q(n)));const h=n=>{c.secondChoice="",o.forEach(e=>e.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),t.forEach(e=>e.classList.remove("btns-container__first-choice-container__btn--active")),g.forEach(e=>e.classList.add("hidden")),n.classList.add("btns-container__first-choice-container__btn--active"),c.firstChoice=n.getAttribute("data-attr"),_.classList.remove("hidden"),document.querySelector(`.${n.getAttribute("data-attr")}`).classList.remove("hidden"),w()},f=n=>{o.forEach(e=>e.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),c.secondChoice=n.getAttribute("data-attr"),n.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),w()},L=n=>{c.thirdChoice=n.getAttribute("data-attr"),s.forEach(e=>e.classList.remove("filters-container__btns-container__btn--active")),n.classList.add("filters-container__btns-container__btn--active"),w()},w=()=>{c.firstChoice!==""&&c.secondChoice!==""?r.classList.remove("hidden"):r.classList.add("hidden"),v.innerHTML="",m.innerHTML="";const n=l[c.firstChoice][c.secondChoice][c.thirdChoice];n.map(e=>m.innerHTML+=`
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${e.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===1?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===2?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===3?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===4?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===5?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===6?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${e.srri===7?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">7</p>
                  </div>
                </div>
              </div>
              <div class="card-container__card-informations">
                <p class="card-container__card-informations__percentage-rate">${e.percentageRate}</p>
                <p class="card-container__card-informations__card-information-text">
                  ${e.informations}
                </p>
                <svg class="card-container__card-informations__logo">
                    <use href="${e.iconUrl}#logo"></use>
                </svg>
              </div>
            </div>
    `),v.innerHTML+=`
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
    `,n.map(e=>v.innerHTML+=`
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${e.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${e.srri}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-ytd-item-container">
                    <p>${e.ytd}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-n1-item-container">
                    <p>${e.nOne}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf3year-item-container">
                    <p>${e.perfThreeYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf5year-item-container">
                    <p>${e.perfFiveYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf-item-container">
                    <p>${e.perf}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-volatility-item-container">
                    <p>${e.volatility}</p>
                  </div>
                </div>
    `),v.innerHTML+=`
        <div class="grid-container-mobile">
          <div class="grid-container-mobile__grid-header">
            <div class="grid-container-mobile__grid-header__whiteLabel">
              <p></p>
            </div>
            <div class="grid-container-mobile__grid-header__items">
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>SRRI</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>YTD</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>N-1</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf. 3ans</p>
                        <p>cumulé</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf. 5ans</p>
                        <p>cumulé</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf.</p>
                        <p>depuis création</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Volatilité</p>
                        <p>depuis création</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
            </div>
          </div>
        </div>
`,n.map(e=>v.innerHTML+=`
              <div class="grid-row-body-mobile">
                <div class="grid-row-body-mobile__grid-profil-label-container">
                  <h3>${e.title}</h3>
                  <p>${e.name}</p>
                </div>
                <div class='grid-row-body-mobile__grid-profil-items-container'>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container grid-row-body-mobile__grid-profil-items-container__item-container--srri">
                        <p>${e.srri}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.ytd}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.nOne}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.perfThreeYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.perfFiveYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.perf}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${e.volatility}</p>
                    </div>
                </div>
                
              </div>
  `),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:first-child").forEach(e=>e.addEventListener("click",()=>E("prev"))),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:last-child").forEach(e=>e.addEventListener("click",()=>E("next"))),document.querySelectorAll(".card-container, .grid-row-body").forEach(e=>e.addEventListener("click",()=>q(e)))};let b=0;const E=n=>{n==="prev"&&b!==0?b+=100:n==="prev"&&b===0&&(b=-600,console.log(b)),n==="next"&&b>-600?b-=100:n==="next"&&b<=-600&&(b=0),console.log(`translate(${b}%)`),document.querySelectorAll(".grid-container-mobile__grid-header__items__label-container").forEach(C=>C.style.transform=`translate(${b}%)`),document.querySelectorAll(".grid-row-body-mobile__grid-profil-items-container__item-container").forEach(C=>C.style.transform=`translate(${b}%)`)},A=n=>{i.forEach(e=>{e.classList.toggle("toggle-button--active")}),x()},q=n=>{x(),document.querySelectorAll(".card-container, .grid-row-body").forEach(e=>e.classList.remove("card-container--active")),n.classList.add("card-container--active")},x=()=>{i.forEach(n=>{n.classList.contains("btn-parameter1")&&n.classList.contains("toggle-button--active")?m.classList.remove("hidden"):n.classList.contains("btn-parameter1")&&!n.classList.contains("toggle-button--active")&&m.classList.add("hidden"),n.classList.contains("btn-parameter2")&&n.classList.contains("toggle-button--active")?v.classList.remove("hidden"):n.classList.contains("btn-parameter2")&&!n.classList.contains("toggle-button--active")&&v.classList.add("hidden")})}}if(document.querySelector(".contracts-support-section-container")){const l={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},t={firstChoice:"",secondChoice:"",thirdChoice:""},_=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),o=document.querySelector(".support-btns-container__second-choice-container"),s=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),g=document.querySelector(".btns-third-choice-container"),r=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),i=document.querySelectorAll(".btns-third-choice-container__btn"),u=document.querySelectorAll(".account-unit-container__btns-container__btn"),m=document.querySelector(".euro-fund-container"),v=document.querySelector(".growth-fund-container"),y=document.querySelector(".euro-fund-container__netissima-container"),d=document.querySelector(".growth-container"),c=document.querySelectorAll(".grid-row-body"),h=document.querySelector(".structured-fund-container"),f=document.querySelector(".account-unit-container"),L=document.querySelector(".tunnel-array-container"),w=document.querySelector(".euro-fund-container__cards-container"),b=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container"),document.querySelector(".array-container"),_.forEach(a=>a.addEventListener("click",()=>E(a))),r.forEach(a=>a.addEventListener("click",()=>A(a))),i.forEach(a=>a.addEventListener("click",()=>q(a))),u.forEach(a=>a.addEventListener("click",()=>x(a))),b.forEach(a=>a.addEventListener("click",()=>n(a))),c.forEach(a=>a.addEventListener("click",()=>setActiveRow(a)));const E=a=>{_.forEach(p=>p.classList.remove("support-btns-container__first-choice-container__btn--active")),r.forEach(p=>p.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),i.forEach(p=>p.classList.remove("btns-third-choice-container__btn--active")),m.classList.add("hidden"),f.classList.add("hidden"),v.classList.add("hidden"),g.classList.add("hidden"),a.classList.add("support-btns-container__first-choice-container__btn--active"),o.classList.remove("hidden"),s.forEach(p=>p.classList.add("hidden")),t.secondChoice="",t.thirdChoice="",t.firstChoice=a.getAttribute("data-attr"),o.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${a.getAttribute("data-attr")}`).classList.remove("hidden"),e()},A=a=>{i.forEach(p=>p.classList.remove("btns-third-choice-container__btn--active")),g.classList.add("hidden"),m.classList.add("hidden"),f.classList.add("hidden"),v.classList.add("hidden"),r.forEach(p=>p.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),t.secondChoice=a.getAttribute("data-attr"),a.classList.add("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),g.classList.remove("hidden"),e(),C()},q=a=>{t.thirdChoice=a.getAttribute("data-attr"),i.forEach(p=>p.classList.remove("btns-third-choice-container__btn--active")),a.classList.add("btns-third-choice-container__btn--active"),P(a.getAttribute("data-attr")),C()},x=a=>{u.forEach(p=>p.classList.remove("account-unit-container__btns-container__btn--active")),a.classList.add("account-unit-container__btns-container__btn--active"),a.getAttribute("data-attr")!=="structured-funds"?(L.classList.remove("hidden"),h.classList.add("hidden")):(L.classList.add("hidden"),h.classList.remove("hidden"))},n=a=>{document.querySelectorAll(".support-card-container").forEach(p=>p.classList.remove("support-card-container--active")),a.classList.add("support-card-container--active"),a.getAttribute("data-attr")==="Netissima"?y.classList.remove("hidden"):y.classList.add("hidden"),a.getAttribute("data-attr")==="growth-netissima"?d.classList.remove("hidden"):d.classList.add("hidden")},e=()=>{t.firstChoice==="assuranceVie"&&t.secondChoice==="altaprofitsVie"||t.firstChoice==="capitalisation"&&t.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),t.firstChoice!=="planEpargneRetraite"&&t.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},P=a=>{a==="euro"?(m.classList.remove("hidden"),C()):m.classList.add("hidden"),a==="growth"?v.classList.remove("hidden"):v.classList.add("hidden"),a==="unit"?f.classList.remove("hidden"):f.classList.add("hidden")},C=()=>{w.innerHTML="";const a=l[t.firstChoice][t.secondChoice][t.thirdChoice];a==null||a.map(p=>w.innerHTML+=`
    <div class="support-card-container" data-attr="${p.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${p.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${p.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${p.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${p.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(p=>p.addEventListener("click",()=>n(p)))}}if(document.querySelector(".alta-news-talking-about-container")){let g=function(r){o.forEach(i=>{i.getAttribute("data-attr")===r&&i.classList.add("activePage")}),s.innerHTML="",l.slice((r-1)*4,r*4).forEach(i=>s.innerHTML+=`
        <div class="alta-news-talking-about-container__left-container__card">
        <div
        class="alta-news-talking-about-container__left-container__card__logo-container"
        >
            <img src="${i.logoUrl}" alt="logo">
        </div>
        <div
        class="alta-news-talking-about-container__left-container__card__informations-container"
        >
            <p>${i.date}</p>
            <h3><span class="alta-news-talking-about-container__left-container__card__informations-container__underline">${i.title}</h3></span>
            <p>${i.description}</p>
        </div>
    </div>  
`)};var displayNews=g;const l=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juin 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"2 Juin 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"15 Mai 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"10 Mai 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"26 Avril 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"31 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"11 Mars 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"10 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Février 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"12 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"10 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"9 Janvier 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],t=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),_=Math.ceil(l.length/4);t.innerHTML="";for(let r=1;r<=_;r++)t.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${r===1?"activePage":""}' data-attr="${r}" >${r}</p>
        `;const o=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");o.forEach(r=>r.addEventListener("click",i=>{o.forEach(u=>u.classList.remove("activePage")),g(i.target.getAttribute("data-attr"))}));const s=document.querySelector(".alta-news-talking-about-container__left-container__news-container");g(1)}if(document.querySelector(".experts-voice-section")){let g=function(i){o.forEach(u=>{u.getAttribute("data-attr")===i&&u.classList.add("active")}),s.innerHTML="",l.slice((i-1)*3,i*3).forEach(u=>s.innerHTML+=`
        <a class="article-card article-card--horizontal article-card--large" href="#">
            <img class="article-card__image" src="/assets/images/article_default.jpg">
            <div class="article-card__content">
                <p class="article-card__date">Publié le <span>${u.date}</span></p>
                <div class="article-card__title">
                    <h5 class="link">${u.title}</h5>
                </div>
                <p class="article-card__excerpt">${u.description}</p>
                <p class="article-card__author">${u.author}</p>
            </div>
        </a>
`)};var displayNews=g;const l=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises constituent des zones d’investissement recherchées pour les investisseurs en quête de rendement et de diversification.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],t=document.querySelector(".experts-voice-section__pagination"),_=Math.ceil(l.length/3);t.innerHTML="";for(let i=1;i<=_;i++)t.innerHTML+=`
        <p class='experts-voice-section__page ${i===1?"active":""}' data-attr="${i}" >${i}</p>
        `;const o=document.querySelectorAll(".experts-voice-section__page");o.forEach(i=>i.addEventListener("click",u=>{o.forEach(m=>m.classList.remove("active")),g(u.target.getAttribute("data-attr"))}));const s=document.querySelector(".experts-voice-section__content");g(1)}if(document.querySelector(".questions-container")){let _=function(s){this.nextElementSibling.style.maxHeight?(this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="")):(this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD"))};var handleClick=_;const l=document.querySelectorAll(".accordion-container__accordion-btn");document.querySelectorAll(".accordion-container__content__question-container__question").forEach(s=>s.addEventListener("click",_)),l.forEach(s=>s.addEventListener("click",_))}if(document.querySelector(".history-section")){let g=function(){let r=0;window.screen.width<1280?r=(_.length-1)*-100:r=(_.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&s>r?s-=100:this.classList.contains("history-section__cards-section__right-arrow")&&s<=r?s=0:this.classList.contains("history-section__cards-section__left-arrow")&&s<0?s+=100:this.classList.contains("history-section__cards-section__left-arrow")&&s===0&&(s=r),_.forEach(i=>i.style.transform=`translateX(${s}%)`)};var handleArrowClick=g;const l=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];l.reverse();const t=document.querySelector(".history-section__cards-section__cards");l.forEach(r=>{t.innerHTML+=`
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${r.year}</h3>
      </div>
      <div class="history-section__cards-section__cards__card__body">
        <p>
          ${r.description}
        </p>
      </div>
    </div>
  `});const _=document.querySelectorAll(".history-section__cards-section__cards__card");document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow").forEach(r=>r.addEventListener("click",g));let s=0}if(document.querySelector(".discover-our-job")){let s=function(){let r=0;r=(t.length-1)*-100,this.classList.contains("discover-our-job__card-section__right-arrow")&&o>r?o-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&o<=r?o=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&o<0?o+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&o===0&&(o=r),t.forEach(i=>i.style.transform=`translateX(${o}%)`)};var handleArrowClick=s;[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}].forEach(r=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
  <div class="discover-our-job__card-section__cards__card">
  <div class="discover-our-job__card-section__cards__card__text-container">
    <div class="discover-our-job__card-section__cards__card__text-container__title">
      <h3>${r.name}</h3>
      <p>${r.job}</p>
    </div>
    <div class="discover-our-job__card-section__cards__card__text-container__description">
      ${r.description}
    </div>
    <div class="discover-our-job__card-section__cards__card__profile-container">
    <img src="${r.photoUrl}" alt="">
  </div>
  </div>
  
</div>
  `}),document.querySelector(".discover-our-job__card-section__cards");const t=document.querySelectorAll(".discover-our-job__card-section__cards__card");document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow").forEach(r=>r.addEventListener("click",s));let o=0}if(document.querySelector(".join-the-team-section")){let t=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const o=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${o}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=t;document.querySelectorAll(".join-the-team-section__offer-container__offer-btn").forEach(o=>o.addEventListener("click",t))}if(document.querySelector(".piloted-graph-section")){let o=function(){t.innerHTML="",_.forEach(m=>m.classList.remove("piloted-graph-section__btns-container__btn--active")),this.classList.add("piloted-graph-section__btns-container__btn--active");const i=this.getAttribute("data-attr"),u=l[i][l[i].length-1].percentage;l[i].forEach((m,v)=>{const y=m.percentage*100/u;t.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${v}"

      >
        ${m.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${m.description}
      </div>
    </div>`;const d=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${v}`);d.style.maxHeight="0",d.style.opacity="0",setTimeout(()=>{const c=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${v}`);c.style.maxHeight=`${y}%`,c.style.opacity="1",s(c,m.percentage,500)},10)})},s=function(i,u,m){const d=m/10;let c=0;const h=(u-0)/d;function f(){c+=h,c>=u?i.textContent=`${u} %`:(i.textContent=`${c.toFixed(1)} %`,setTimeout(f,10))}f()};var handleClick=o,animateNumber=s;const l=[[{percentage:3.3,description:"Prudent"},{percentage:8.4,description:"Equilibré"},{percentage:11.9,description:"Dynamique"}],[{percentage:5.3,description:"Prudent"},{percentage:9.4,description:"Equilibré"},{percentage:15.8,description:"Dynamique"}],[{percentage:7.3,description:"Prudent"},{percentage:10.4,description:"Equilibré"},{percentage:16.9,description:"Dynamique"}]];document.querySelector(".piloted-graph-section__btns-container");const t=document.querySelector(".piloted-graph-section__graph-container"),_=document.querySelectorAll(".piloted-graph-section__btns-container__btn");_.forEach(i=>i.addEventListener("click",o));const g=l[1][l[1].length-1].percentage;l[1].forEach(i=>{const u=i.percentage*100/g;t.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${u}%"
      >
        ${i.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${i.description}
      </div>
    </div>
        `})}
