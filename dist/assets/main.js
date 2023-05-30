const E=document.querySelectorAll(".management-others-card");if(E){let g=0;E.forEach(p=>{const a=p.querySelectorAll(".management-others-card__explaination");for(let d=0;d<a.length;d++){const r=a[d].offsetHeight;r>g&&(g=r)}g>0&&p.querySelector(".management-others-card__explainations").style.setProperty("height",`calc(${g}px + var(--spacing-8))`),p.querySelectorAll(".management-others-card__link").forEach(d=>{let e=d.dataset.name,r=p.querySelector(".management-others-card__explaination[data-name="+e+"]");d.addEventListener("mouseenter",()=>{r.classList.add("active")}),d.addEventListener("mouseleave",()=>{r.classList.remove("active")})})});const i=document.querySelectorAll(".management-guided-card");i.length&&E.length&&i[0].offsetWidth!=E[0].offsetWidth&&(i[0].offsetHeight>E[0].offsetHeight?E[0].style.height=i[0].offsetHeight-15+"px":i[0].style.height=E[0].offsetHeight+15+"px")}const A=document.querySelector(".header");if(A){let o=function(){_(g),d(g),e()},d=function(c){c.forEach(l=>{l.querySelector(".menu__name").addEventListener("click",h=>{h.preventDefault(),m(l)})})},e=function(){a.addEventListener("click",()=>{r()})},r=function(){const c=document.querySelector(".menu__item.active");c&&(c.classList.remove("active"),a.classList.remove("active"))},m=function(c){const l=document.querySelector(".menu__item.active");l===c?(c.classList.remove("active"),a.classList.remove("active")):l?(l.classList.remove("active"),c.classList.add("active")):(c.classList.add("active"),a.classList.add("active"))},u=function(c){const l=c.getBoundingClientRect(),h=A.getBoundingClientRect();return l.left-h.left},v=function(c){const l=c.getBoundingClientRect(),h=A.getBoundingClientRect();return l.right-h.left},_=function(c){const l=parseInt(window.getComputedStyle(A).getPropertyValue("padding-left"),10),h=parseInt(window.getComputedStyle(p).getPropertyValue("padding-left"),10);c.forEach(f=>{const L=f.querySelector(".expand-menu");if(f.classList.contains("menu__item--full")){const y=u(f);L.style.left=`${l+h-y}px`}else A.offsetWidth-v(L)<l?(f.classList.add("menu__item--right"),f.classList.remove("menu__item--left")):(f.classList.remove("menu__item--right"),f.getAttribute("data-position")==="left"&&f.classList.add("menu__item--left"))})};var init=o,displayExpandMenuItems=d,handleOverlayClick=e,closeMenu=r,toogleMenuItem=m,getElementLeftPosition=u,getElementRightPosition=v,positionMenuItems=_;const g=document.querySelectorAll(".menu__item"),i=document.querySelectorAll(".expand-menu__sub-menu"),p=document.querySelector(".header__menu"),a=document.querySelector(".header__overlay");window.addEventListener("resize",()=>{_(g)}),o(),i&&i.forEach(c=>{c.querySelectorAll(".link--arrow").forEach(h=>{let f=h.dataset.name,L=c.querySelector(".link--arrow[data-name="+f+"]");h.addEventListener("click",()=>{c.querySelector(".link--arrow").classList.remove("active"),h.classList.remove("active"),L.classList.add("active"),$(".expand-menu__sub-item").classList.remove("visible"),$(".expand-menu__sub-item[data-name="+f+"]").classList.add("visible")})})})}const R={speed:200},z=document.querySelectorAll(".awards-section");z&&z.forEach(g=>{const i=g.querySelector(".awards-section__content"),p=i.cloneNode(!0);i.classList.add("primary"),p.classList.add("secondary"),i.parentNode.appendChild(p);const a=i.querySelectorAll(".award-item").length;i.style.setProperty("animation",`awards-section--primary ${a*1e3/R.speed}s linear infinite`),p.style.setProperty("animation",`awards-section--secondary ${a*1e3/R.speed}s linear infinite`)});if(document.querySelector(".contracts-piloted-section-container")){let c=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const n=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${n}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=c;const g={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:8,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},i=document.querySelectorAll(".btns-container__first-choice-container__btn"),p=document.querySelector(".btns-container__second-choice-container"),a=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),o=document.querySelectorAll(".filters-container__btns-container__btn"),d=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),e=document.querySelector(".results-container"),r=document.querySelectorAll(".toggle-button"),m=document.querySelectorAll(".card-container, .grid-row-body"),u=document.querySelector(".cards-display-container"),v=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body"),document.querySelector(".distribution-funds-array-section__btn").addEventListener("click",c);const l={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};i.forEach(n=>n.addEventListener("click",()=>h(n))),a.forEach(n=>n.addEventListener("click",()=>f(n))),o.forEach(n=>n.addEventListener("click",()=>L(n))),r.forEach(n=>n.addEventListener("click",()=>P())),m.forEach(n=>n.addEventListener("click",()=>x(n)));const h=n=>{l.secondChoice="",a.forEach(t=>t.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),i.forEach(t=>t.classList.remove("btns-container__first-choice-container__btn--active")),d.forEach(t=>t.classList.add("hidden")),n.classList.add("btns-container__first-choice-container__btn--active"),l.firstChoice=n.getAttribute("data-attr"),p.classList.remove("hidden"),document.querySelector(`.${n.getAttribute("data-attr")}`).classList.remove("hidden"),y()},f=n=>{a.forEach(t=>t.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),l.secondChoice=n.getAttribute("data-attr"),n.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),y()},L=n=>{l.thirdChoice=n.getAttribute("data-attr"),o.forEach(t=>t.classList.remove("filters-container__btns-container__btn--active")),n.classList.add("filters-container__btns-container__btn--active"),y()},y=()=>{l.firstChoice!==""&&l.secondChoice!==""?e.classList.remove("hidden"):e.classList.add("hidden"),v.innerHTML="",u.innerHTML="";const n=g[l.firstChoice][l.secondChoice][l.thirdChoice];n.map(t=>u.innerHTML+=`
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${t.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===1?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===2?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===3?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===4?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===5?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===6?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===7?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">7</p>
                  </div>
                </div>
              </div>
              <div class="card-container__card-informations">
                <p class="card-container__card-informations__percentage-rate">${t.percentageRate}</p>
                <p class="card-container__card-informations__card-information-text">
                  ${t.informations}
                </p>
                <svg class="card-container__card-informations__logo">
                    <use href="${t.iconUrl}#logo"></use>
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
    `,n.map(t=>v.innerHTML+=`
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${t.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${t.srri}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-ytd-item-container">
                    <p>${t.ytd}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-n1-item-container">
                    <p>${t.nOne}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf3year-item-container">
                    <p>${t.perfThreeYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf5year-item-container">
                    <p>${t.perfFiveYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf-item-container">
                    <p>${t.perf}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-volatility-item-container">
                    <p>${t.volatility}</p>
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
`,n.map(t=>v.innerHTML+=`
              <div class="grid-row-body-mobile">
                <div class="grid-row-body-mobile__grid-profil-label-container">
                  <h3>${t.title}</h3>
                  <p>${t.name}</p>
                </div>
                <div class='grid-row-body-mobile__grid-profil-items-container'>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container grid-row-body-mobile__grid-profil-items-container__item-container--srri">
                        <p>${t.srri}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${t.ytd}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${t.nOne}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${t.perfThreeYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${t.perfFiveYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${t.perf}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${t.volatility}</p>
                    </div>
                </div>
                
              </div>
  `),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:first-child").forEach(t=>t.addEventListener("click",()=>C("prev"))),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:last-child").forEach(t=>t.addEventListener("click",()=>C("next"))),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.addEventListener("click",()=>x(t)))};let S=0;const C=n=>{n==="prev"&&S!==0?S+=100:n==="prev"&&S===0&&(S=-600,console.log(S)),n==="next"&&S>-600?S-=100:n==="next"&&S<=-600&&(S=0),console.log(`translate(${S}%)`),document.querySelectorAll(".grid-container-mobile__grid-header__items__label-container").forEach(w=>w.style.transform=`translate(${S}%)`),document.querySelectorAll(".grid-row-body-mobile__grid-profil-items-container__item-container").forEach(w=>w.style.transform=`translate(${S}%)`)},P=n=>{r.forEach(t=>{t.classList.toggle("toggle-button--active")}),q()},x=n=>{q(),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.classList.remove("card-container--active")),n.classList.add("card-container--active")},q=()=>{r.forEach(n=>{n.classList.contains("btn-parameter1")&&n.classList.contains("toggle-button--active")?u.classList.remove("hidden"):n.classList.contains("btn-parameter1")&&!n.classList.contains("toggle-button--active")&&u.classList.add("hidden"),n.classList.contains("btn-parameter2")&&n.classList.contains("toggle-button--active")?v.classList.remove("hidden"):n.classList.contains("btn-parameter2")&&!n.classList.contains("toggle-button--active")&&v.classList.add("hidden")})}}if(document.querySelector(".contracts-support-section-container")){const g={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},i={firstChoice:"",secondChoice:"",thirdChoice:""},p=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),a=document.querySelector(".support-btns-container__second-choice-container"),o=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),d=document.querySelector(".btns-third-choice-container"),e=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),r=document.querySelectorAll(".btns-third-choice-container__btn"),m=document.querySelectorAll(".account-unit-container__btns-container__btn"),u=document.querySelector(".euro-fund-container"),v=document.querySelector(".growth-fund-container"),_=document.querySelector(".euro-fund-container__netissima-container"),c=document.querySelector(".growth-container"),l=document.querySelectorAll(".grid-row-body"),h=document.querySelector(".structured-fund-container"),f=document.querySelector(".account-unit-container"),L=document.querySelector(".tunnel-array-container"),y=document.querySelector(".euro-fund-container__cards-container"),S=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container"),document.querySelector(".array-container"),p.forEach(s=>s.addEventListener("click",()=>C(s))),e.forEach(s=>s.addEventListener("click",()=>P(s))),r.forEach(s=>s.addEventListener("click",()=>x(s))),m.forEach(s=>s.addEventListener("click",()=>q(s))),S.forEach(s=>s.addEventListener("click",()=>n(s))),l.forEach(s=>s.addEventListener("click",()=>setActiveRow(s)));const C=s=>{p.forEach(b=>b.classList.remove("support-btns-container__first-choice-container__btn--active")),e.forEach(b=>b.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),r.forEach(b=>b.classList.remove("btns-third-choice-container__btn--active")),u.classList.add("hidden"),f.classList.add("hidden"),v.classList.add("hidden"),d.classList.add("hidden"),s.classList.add("support-btns-container__first-choice-container__btn--active"),a.classList.remove("hidden"),o.forEach(b=>b.classList.add("hidden")),i.secondChoice="",i.thirdChoice="",i.firstChoice=s.getAttribute("data-attr"),a.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${s.getAttribute("data-attr")}`).classList.remove("hidden"),t()},P=s=>{r.forEach(b=>b.classList.remove("btns-third-choice-container__btn--active")),d.classList.add("hidden"),u.classList.add("hidden"),f.classList.add("hidden"),v.classList.add("hidden"),e.forEach(b=>b.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),i.secondChoice=s.getAttribute("data-attr"),s.classList.add("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),d.classList.remove("hidden"),t(),w()},x=s=>{i.thirdChoice=s.getAttribute("data-attr"),r.forEach(b=>b.classList.remove("btns-third-choice-container__btn--active")),s.classList.add("btns-third-choice-container__btn--active"),F(s.getAttribute("data-attr")),w()},q=s=>{m.forEach(b=>b.classList.remove("account-unit-container__btns-container__btn--active")),s.classList.add("account-unit-container__btns-container__btn--active"),s.getAttribute("data-attr")!=="structured-funds"?(L.classList.remove("hidden"),h.classList.add("hidden")):(L.classList.add("hidden"),h.classList.remove("hidden"))},n=s=>{document.querySelectorAll(".support-card-container").forEach(b=>b.classList.remove("support-card-container--active")),s.classList.add("support-card-container--active"),s.getAttribute("data-attr")==="Netissima"?_.classList.remove("hidden"):_.classList.add("hidden"),s.getAttribute("data-attr")==="growth-netissima"?c.classList.remove("hidden"):c.classList.add("hidden")},t=()=>{i.firstChoice==="assuranceVie"&&i.secondChoice==="altaprofitsVie"||i.firstChoice==="capitalisation"&&i.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),i.firstChoice!=="planEpargneRetraite"&&i.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},F=s=>{s==="euro"?(u.classList.remove("hidden"),w()):u.classList.add("hidden"),s==="growth"?v.classList.remove("hidden"):v.classList.add("hidden"),s==="unit"?f.classList.remove("hidden"):f.classList.add("hidden")},w=()=>{y.innerHTML="";const s=g[i.firstChoice][i.secondChoice][i.thirdChoice];s==null||s.map(b=>y.innerHTML+=`
    <div class="support-card-container" data-attr="${b.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${b.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${b.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${b.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${b.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(b=>b.addEventListener("click",()=>n(b)))}}if(document.querySelector(".alta-news-talking-about-container")){let d=function(e){a.forEach(r=>{r.getAttribute("data-attr")===e&&r.classList.add("activePage")}),o.innerHTML="",g.slice((e-1)*4,e*4).forEach(r=>o.innerHTML+=`
        <div class="alta-news-talking-about-container__left-container__card">
        <div
        class="alta-news-talking-about-container__left-container__card__logo-container"
        >
            <img src="${r.logoUrl}" alt="logo">
        </div>
        <div
        class="alta-news-talking-about-container__left-container__card__informations-container"
        >
            <p>${r.date}</p>
            <h3><span class="alta-news-talking-about-container__left-container__card__informations-container__underline">${r.title}</h3></span>
            <p>${r.description}</p>
        </div>
    </div>  
`)};var displayNews=d;const g=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juin 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"2 Juin 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"15 Mai 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"10 Mai 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"26 Avril 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"31 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"11 Mars 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"10 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Février 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"12 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"10 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"9 Janvier 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],i=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),p=Math.ceil(g.length/4);i.innerHTML="";for(let e=1;e<=p;e++)i.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${e===1?"activePage":""}' data-attr="${e}" >${e}</p>
        `;const a=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");a.forEach(e=>e.addEventListener("click",r=>{a.forEach(m=>m.classList.remove("activePage")),d(r.target.getAttribute("data-attr"))}));const o=document.querySelector(".alta-news-talking-about-container__left-container__news-container");d(1)}if(document.querySelector(".experts-voice-section")){let d=function(r){a.forEach(m=>{m.getAttribute("data-attr")===r&&m.classList.add("active")}),o.innerHTML="",g.slice((r-1)*3,r*3).forEach(m=>o.innerHTML+=`
        <a class="article-card article-card--horizontal article-card--large" href="#">
            <img class="article-card__image" src="/assets/images/article_default.jpg">
            <div class="article-card__content">
                <p class="article-card__date">Publié le <span>${m.date}</span></p>
                <div class="article-card__title">
                    <h5 class="link">${m.title}</h5>
                </div>
                <p class="article-card__excerpt">${m.description}</p>
                <p class="article-card__author">${m.author}</p>
            </div>
        </a>
`)};var displayNews=d;const g=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises constituent des zones d’investissement recherchées pour les investisseurs en quête de rendement et de diversification.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],i=document.querySelector(".experts-voice-section__pagination"),p=Math.ceil(g.length/3);i.innerHTML="";for(let r=1;r<=p;r++)i.innerHTML+=`
        <p class='experts-voice-section__page ${r===1?"active":""}' data-attr="${r}" >${r}</p>
        `;const a=document.querySelectorAll(".experts-voice-section__page");a.forEach(r=>r.addEventListener("click",m=>{a.forEach(u=>u.classList.remove("active")),d(m.target.getAttribute("data-attr"))}));const o=document.querySelector(".experts-voice-section__content");d(1)}if(document.querySelector(".questions-container")){let p=function(o){this.nextElementSibling.style.maxHeight?(this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="")):(this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD"))};var handleClick=p;const g=document.querySelectorAll(".accordion-container__accordion-btn");document.querySelectorAll(".accordion-container__content__question-container__question").forEach(o=>o.addEventListener("click",p)),g.forEach(o=>o.addEventListener("click",p))}if(document.querySelector(".history-section")){let d=function(){let e=0;window.screen.width<1280?e=(p.length-1)*-100:e=(p.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&o>e?o-=100:this.classList.contains("history-section__cards-section__right-arrow")&&o<=e?o=0:this.classList.contains("history-section__cards-section__left-arrow")&&o<0?o+=100:this.classList.contains("history-section__cards-section__left-arrow")&&o===0&&(o=e),p.forEach(r=>r.style.transform=`translateX(${o}%)`)};var handleArrowClick=d;const g=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];g.reverse();const i=document.querySelector(".history-section__cards-section__cards");g.forEach(e=>{i.innerHTML+=`
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${e.year}</h3>
      </div>
      <div class="history-section__cards-section__cards__card__body">
        <p>
          ${e.description}
        </p>
      </div>
    </div>
  `});const p=document.querySelectorAll(".history-section__cards-section__cards__card");document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow").forEach(e=>e.addEventListener("click",d));let o=0}if(document.querySelector(".discover-our-job")){let o=function(){let e=0;e=(i.length-1)*-100,this.classList.contains("discover-our-job__card-section__right-arrow")&&a>e?a-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&a<=e?a=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&a<0?a+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&a===0&&(a=e),i.forEach(r=>r.style.transform=`translateX(${a}%)`)};var handleArrowClick=o;[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}].forEach(e=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
  <div class="discover-our-job__card-section__cards__card">
  <div class="discover-our-job__card-section__cards__card__text-container">
    <div class="discover-our-job__card-section__cards__card__text-container__title">
      <h3>${e.name}</h3>
      <p>${e.job}</p>
    </div>
    <div class="discover-our-job__card-section__cards__card__text-container__description">
      ${e.description}
    </div>
    <div class="discover-our-job__card-section__cards__card__profile-container">
    <img src="${e.photoUrl}" alt="">
  </div>
  </div>
  
</div>
  `}),document.querySelector(".discover-our-job__card-section__cards");const i=document.querySelectorAll(".discover-our-job__card-section__cards__card");document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow").forEach(e=>e.addEventListener("click",o));let a=0}if(document.querySelector(".join-the-team-section")){let i=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const a=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${a}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=i;document.querySelectorAll(".join-the-team-section__offer-container__offer-btn").forEach(a=>a.addEventListener("click",i))}document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".piloted-graph-section")){let m=function(){e.innerHTML="",r.forEach(l=>l.classList.remove("piloted-graph-section__btns-container__btn--active")),this.classList.add("piloted-graph-section__btns-container__btn--active");const _=this.getAttribute("data-attr"),c=d[_][d[_].length-1].percentage;d[_].forEach((l,h)=>{const f=l.percentage*100/c;e.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${h}"

      >
        ${l.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${l.description}
      </div>
    </div>`;const L=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${h}`);L.style.maxHeight="0",L.style.opacity="0",setTimeout(()=>{const y=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${h}`);y.style.maxHeight=`${f}%`,y.style.opacity="1",u(y,l.percentage,500)},10)})},u=function(_,c,l){const L=l/10;let y=0;const S=(c-0)/L;function C(){y+=S,y>=c?_.textContent=`${c} %`:(_.textContent=`${y.toFixed(1)} %`,setTimeout(C,10))}C()};var g=m,i=u;const a=JSON.stringify([[{titre:"Sur 3 ans",percentage:3.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{titre:"Sur 5 ans",percentage:8.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4",active:!0},{titre:"depuis l'origine",percentage:11.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"}],[{percentage:5.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:9.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:15.8,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"}],[{percentage:7.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:10.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:16.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"}]]),o=document.querySelector(".piloted-graph-section__btns-container");o.getAttribute("data-content").length==0&&o.setAttribute("data-content",a);const d=JSON.parse(JSON.parse(o.getAttribute("data-content").replace(/\\r\\n/g,""))),e=document.querySelector(".piloted-graph-section__graph-container");o.innerHTML="",d[0].forEach((_,c)=>{let l=_.active==1?"piloted-graph-section__btns-container__btn--active":"";o.innerHTML+='<div class="piloted-graph-section__btns-container__btn '+l+'" data-attr="'+c+'">'+_.titre+"</div>"});const r=document.querySelectorAll(".piloted-graph-section__btns-container__btn");r.forEach((_,c)=>{_.innerHTML=d[0][c].titre}),r.forEach(_=>_.addEventListener("click",m));const v=d[1][d[1].length-1].percentage;d[1].forEach(_=>{const c=_.percentage*100/v;e.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${c}%"
      >
        ${_.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${_.description}
      </div>
    </div>
        `})}});if(document.querySelector(".capital-calculator-section")){let e=function(){let u=p.valueAsNumber;const v=o.valueAsNumber,_=d.valueAsNumber/100,c=a.valueAsNumber;for(let h=0;h<v;h++)for(let f=0;f<12;f++){const L=_*u;u+=L*(1/12)+c}u=Math.round(u/1e3)*1e3,u.toString().split("").splice(-3,0," "),r(g,u,500)},r=function(u,v,_){const h=_/10;let f=0;const L=(v-0)/h;function y(){f+=L,f>=v?u.textContent=`${m(v)} €`:(u.textContent=`${m(f.toFixed(0))} €`,setTimeout(y,10))}y()},m=function(u){return u.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};var calculateResult=e,animateNumber=r,numberWithSpaces=m;const g=document.querySelector(".capital-calculator-section__result-value"),i=document.querySelectorAll(".capital-calculator-section__cursors-container__cursor-container input"),p=document.querySelector("#first-range"),a=document.querySelector("#second-range"),o=document.querySelector("#third-range"),d=document.querySelector("#fourth-range");i.forEach(u=>u.addEventListener("input",function(){const v=(this.value-this.min)/(this.max-this.min)*100,_=u.value.split("");_.splice(-3,0," "),(u.name="first-range")&&(u.labels[0].textContent=`${_.join("")} ${u.getAttribute("data-attr")}`),this.style.background=`linear-gradient(to right, #ff6442 0%, #ff6442 ${v}%, #fbe1da ${v}%, #fbe1da 100%)`,e()})),e()}
