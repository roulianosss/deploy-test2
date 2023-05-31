const q=document.querySelectorAll(".management-others-card");if(q){let c=0;q.forEach(g=>{const a=g.querySelectorAll(".management-others-card__explaination");for(let _=0;_<a.length;_++){const r=a[_].offsetHeight;r>c&&(c=r)}c>0&&g.querySelector(".management-others-card__explainations").style.setProperty("height",`calc(${c}px + var(--spacing-8))`),g.querySelectorAll(".management-others-card__link").forEach(_=>{let t=_.dataset.name,r=g.querySelector(".management-others-card__explaination[data-name="+t+"]");_.addEventListener("mouseenter",()=>{r.classList.add("active")}),_.addEventListener("mouseleave",()=>{r.classList.remove("active")})})});const n=document.querySelectorAll(".management-guided-card");n.length&&q.length&&n[0].offsetWidth!=q[0].offsetWidth&&(n[0].offsetHeight>q[0].offsetHeight?q[0].style.height=n[0].offsetHeight-15+"px":n[0].style.height=q[0].offsetHeight+15+"px")}const x=document.querySelector(".header");if(x){let l=function(){y(c),_(c),t()},_=function(m){m.forEach(i=>{i.querySelector(".menu__name").addEventListener("click",p=>{p.preventDefault(),h(i)})})},t=function(){a.addEventListener("click",()=>{r()})},r=function(){const m=document.querySelector(".menu__item.active");m&&(m.classList.remove("active"),a.classList.remove("active"))},h=function(m){const i=document.querySelector(".menu__item.active");i===m?(m.classList.remove("active"),a.classList.remove("active")):i?(i.classList.remove("active"),m.classList.add("active")):(m.classList.add("active"),a.classList.add("active"))},d=function(m){const i=m.getBoundingClientRect(),p=x.getBoundingClientRect();return i.left-p.left},f=function(m){const i=m.getBoundingClientRect(),p=x.getBoundingClientRect();return i.right-p.left},y=function(m){const i=parseInt(window.getComputedStyle(x).getPropertyValue("padding-left"),10),p=parseInt(window.getComputedStyle(g).getPropertyValue("padding-left"),10);m.forEach(u=>{const L=u.querySelector(".expand-menu");if(u.classList.contains("menu__item--full")){const S=d(u);L.style.left=`${i+p-S}px`}else x.offsetWidth-f(L)<i?(u.classList.add("menu__item--right"),u.classList.remove("menu__item--left")):(u.classList.remove("menu__item--right"),u.getAttribute("data-position")==="left"&&u.classList.add("menu__item--left"))})};var init=l,displayExpandMenuItems=_,handleOverlayClick=t,closeMenu=r,toogleMenuItem=h,getElementLeftPosition=d,getElementRightPosition=f,positionMenuItems=y;const c=document.querySelectorAll(".menu__item"),n=document.querySelectorAll(".expand-menu__sub-menu"),g=document.querySelector(".header__menu"),a=document.querySelector(".header__overlay");window.addEventListener("resize",()=>{y(c)}),l(),n&&n.forEach(m=>{m.querySelectorAll(".link--arrow").forEach(p=>{let u=p.dataset.name,L=m.querySelector(".link--arrow[data-name="+u+"]");p.addEventListener("click",()=>{m.querySelector(".link--arrow").classList.remove("active"),p.classList.remove("active"),L.classList.add("active"),$(".expand-menu__sub-item").classList.remove("visible"),$(".expand-menu__sub-item[data-name="+u+"]").classList.add("visible")})})})}const R={speed:200},z=document.querySelectorAll(".awards-section");z&&z.forEach(c=>{const n=c.querySelector(".awards-section__content"),g=n.cloneNode(!0);n.classList.add("primary"),g.classList.add("secondary"),n.parentNode.appendChild(g);const a=n.querySelectorAll(".award-item").length;n.style.setProperty("animation",`awards-section--primary ${a*1e3/R.speed}s linear infinite`),g.style.setProperty("animation",`awards-section--secondary ${a*1e3/R.speed}s linear infinite`)});if(document.querySelector(".contracts-piloted-section-container")){let m=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const s=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${s}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=m;const c={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:8,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},n=document.querySelectorAll(".btns-container__first-choice-container__btn"),g=document.querySelector(".btns-container__second-choice-container"),a=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),l=document.querySelectorAll(".filters-container__btns-container__btn"),_=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),t=document.querySelector(".results-container"),r=document.querySelectorAll(".toggle-button"),h=document.querySelectorAll(".card-container, .grid-row-body"),d=document.querySelector(".cards-display-container"),f=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body"),document.querySelector(".distribution-funds-array-section__btn").addEventListener("click",m);const i={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};n.forEach(s=>s.addEventListener("click",()=>p(s))),a.forEach(s=>s.addEventListener("click",()=>u(s))),l.forEach(s=>s.addEventListener("click",()=>L(s))),r.forEach(s=>s.addEventListener("click",()=>E())),h.forEach(s=>s.addEventListener("click",()=>w(s)));const p=s=>{i.secondChoice="",a.forEach(e=>e.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),n.forEach(e=>e.classList.remove("btns-container__first-choice-container__btn--active")),_.forEach(e=>e.classList.add("hidden")),s.classList.add("btns-container__first-choice-container__btn--active"),i.firstChoice=s.getAttribute("data-attr"),g.classList.remove("hidden"),document.querySelector(`.${s.getAttribute("data-attr")}`).classList.remove("hidden"),S()},u=s=>{a.forEach(e=>e.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),i.secondChoice=s.getAttribute("data-attr"),s.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),S()},L=s=>{i.thirdChoice=s.getAttribute("data-attr"),l.forEach(e=>e.classList.remove("filters-container__btns-container__btn--active")),s.classList.add("filters-container__btns-container__btn--active"),S()},S=()=>{i.firstChoice!==""&&i.secondChoice!==""?t.classList.remove("hidden"):t.classList.add("hidden"),f.innerHTML="",d.innerHTML="";const s=c[i.firstChoice][i.secondChoice][i.thirdChoice];s.map(e=>d.innerHTML+=`
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
    `),f.innerHTML+=`
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
    `,s.map(e=>f.innerHTML+=`
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
    `),f.innerHTML+=`
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
`,s.map(e=>f.innerHTML+=`
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
  `),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:first-child").forEach(e=>e.addEventListener("click",()=>C("prev"))),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:last-child").forEach(e=>e.addEventListener("click",()=>C("next"))),document.querySelectorAll(".card-container, .grid-row-body").forEach(e=>e.addEventListener("click",()=>w(e)))};let b=0;const C=s=>{s==="prev"&&b!==0?b+=100:s==="prev"&&b===0&&(b=-600,console.log(b)),s==="next"&&b>-600?b-=100:s==="next"&&b<=-600&&(b=0),console.log(`translate(${b}%)`),document.querySelectorAll(".grid-container-mobile__grid-header__items__label-container").forEach(A=>A.style.transform=`translate(${b}%)`),document.querySelectorAll(".grid-row-body-mobile__grid-profil-items-container__item-container").forEach(A=>A.style.transform=`translate(${b}%)`)},E=s=>{r.forEach(e=>{e.classList.toggle("toggle-button--active")}),P()},w=s=>{P(),document.querySelectorAll(".card-container, .grid-row-body").forEach(e=>e.classList.remove("card-container--active")),s.classList.add("card-container--active")},P=()=>{r.forEach(s=>{s.classList.contains("btn-parameter1")&&s.classList.contains("toggle-button--active")?d.classList.remove("hidden"):s.classList.contains("btn-parameter1")&&!s.classList.contains("toggle-button--active")&&d.classList.add("hidden"),s.classList.contains("btn-parameter2")&&s.classList.contains("toggle-button--active")?f.classList.remove("hidden"):s.classList.contains("btn-parameter2")&&!s.classList.contains("toggle-button--active")&&f.classList.add("hidden")})}}if(document.querySelector(".contracts-support-section-container")){const c={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},n={firstChoice:"",secondChoice:"",thirdChoice:""},g=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),a=document.querySelector(".support-btns-container__second-choice-container"),l=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),_=document.querySelector(".btns-third-choice-container"),t=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),r=document.querySelectorAll(".btns-third-choice-container__btn"),h=document.querySelectorAll(".account-unit-container__btns-container__btn"),d=document.querySelector(".euro-fund-container"),f=document.querySelector(".growth-fund-container"),y=document.querySelector(".euro-fund-container__netissima-container"),m=document.querySelector(".growth-container"),i=document.querySelectorAll(".grid-row-body"),p=document.querySelector(".structured-fund-container"),u=document.querySelector(".account-unit-container"),L=document.querySelector(".tunnel-array-container"),S=document.querySelector(".euro-fund-container__cards-container"),b=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container"),document.querySelector(".array-container"),g.forEach(o=>o.addEventListener("click",()=>C(o))),t.forEach(o=>o.addEventListener("click",()=>E(o))),r.forEach(o=>o.addEventListener("click",()=>w(o))),h.forEach(o=>o.addEventListener("click",()=>P(o))),b.forEach(o=>o.addEventListener("click",()=>s(o))),i.forEach(o=>o.addEventListener("click",()=>setActiveRow(o)));const C=o=>{g.forEach(v=>v.classList.remove("support-btns-container__first-choice-container__btn--active")),t.forEach(v=>v.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),r.forEach(v=>v.classList.remove("btns-third-choice-container__btn--active")),d.classList.add("hidden"),u.classList.add("hidden"),f.classList.add("hidden"),_.classList.add("hidden"),o.classList.add("support-btns-container__first-choice-container__btn--active"),a.classList.remove("hidden"),l.forEach(v=>v.classList.add("hidden")),n.secondChoice="",n.thirdChoice="",n.firstChoice=o.getAttribute("data-attr"),a.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${o.getAttribute("data-attr")}`).classList.remove("hidden"),e()},E=o=>{r.forEach(v=>v.classList.remove("btns-third-choice-container__btn--active")),_.classList.add("hidden"),d.classList.add("hidden"),u.classList.add("hidden"),f.classList.add("hidden"),t.forEach(v=>v.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),n.secondChoice=o.getAttribute("data-attr"),o.classList.add("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),_.classList.remove("hidden"),e(),A()},w=o=>{n.thirdChoice=o.getAttribute("data-attr"),r.forEach(v=>v.classList.remove("btns-third-choice-container__btn--active")),o.classList.add("btns-third-choice-container__btn--active"),F(o.getAttribute("data-attr")),A()},P=o=>{h.forEach(v=>v.classList.remove("account-unit-container__btns-container__btn--active")),o.classList.add("account-unit-container__btns-container__btn--active"),o.getAttribute("data-attr")!=="structured-funds"?(L.classList.remove("hidden"),p.classList.add("hidden")):(L.classList.add("hidden"),p.classList.remove("hidden"))},s=o=>{document.querySelectorAll(".support-card-container").forEach(v=>v.classList.remove("support-card-container--active")),o.classList.add("support-card-container--active"),o.getAttribute("data-attr")==="Netissima"?y.classList.remove("hidden"):y.classList.add("hidden"),o.getAttribute("data-attr")==="growth-netissima"?m.classList.remove("hidden"):m.classList.add("hidden")},e=()=>{n.firstChoice==="assuranceVie"&&n.secondChoice==="altaprofitsVie"||n.firstChoice==="capitalisation"&&n.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),n.firstChoice!=="planEpargneRetraite"&&n.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},F=o=>{o==="euro"?(d.classList.remove("hidden"),A()):d.classList.add("hidden"),o==="growth"?f.classList.remove("hidden"):f.classList.add("hidden"),o==="unit"?u.classList.remove("hidden"):u.classList.add("hidden")},A=()=>{S.innerHTML="";const o=c[n.firstChoice][n.secondChoice][n.thirdChoice];o==null||o.map(v=>S.innerHTML+=`
    <div class="support-card-container" data-attr="${v.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${v.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${v.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${v.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${v.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(v=>v.addEventListener("click",()=>s(v)))}}if(document.querySelector(".alta-news-talking-about-container")){let _=function(t){a.forEach(r=>{r.getAttribute("data-attr")===t&&r.classList.add("activePage")}),l.innerHTML="",c.slice((t-1)*4,t*4).forEach(r=>l.innerHTML+=`
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
`)};var displayNews=_;const c=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juin 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"2 Juin 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"15 Mai 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"10 Mai 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"26 Avril 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"31 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"11 Mars 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"10 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Février 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"12 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"10 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"9 Janvier 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],n=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),g=Math.ceil(c.length/4);n.innerHTML="";for(let t=1;t<=g;t++)n.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${t===1?"activePage":""}' data-attr="${t}" >${t}</p>
        `;const a=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");a.forEach(t=>t.addEventListener("click",r=>{a.forEach(h=>h.classList.remove("activePage")),_(r.target.getAttribute("data-attr"))}));const l=document.querySelector(".alta-news-talking-about-container__left-container__news-container");_(1)}if(document.querySelector(".experts-voice-section")){let _=function(r){a.forEach(h=>{h.getAttribute("data-attr")===r&&h.classList.add("active")}),l.innerHTML="",c.slice((r-1)*3,r*3).forEach(h=>l.innerHTML+=`
        <a class="article-card article-card--horizontal article-card--large" href="#">
            <img class="article-card__image" src="/assets/images/article_default.jpg">
            <div class="article-card__content">
                <p class="article-card__date">Publié le <span>${h.date}</span></p>
                <div class="article-card__title">
                    <h5 class="link">${h.title}</h5>
                </div>
                <p class="article-card__excerpt">${h.description}</p>
                <p class="article-card__author">${h.author}</p>
            </div>
        </a>
`)};var displayNews=_;const c=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises constituent des zones d’investissement recherchées pour les investisseurs en quête de rendement et de diversification.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],n=document.querySelector(".experts-voice-section__pagination"),g=Math.ceil(c.length/3);n.innerHTML="";for(let r=1;r<=g;r++)n.innerHTML+=`
        <p class='experts-voice-section__page ${r===1?"active":""}' data-attr="${r}" >${r}</p>
        `;const a=document.querySelectorAll(".experts-voice-section__page");a.forEach(r=>r.addEventListener("click",h=>{a.forEach(d=>d.classList.remove("active")),_(h.target.getAttribute("data-attr"))}));const l=document.querySelector(".experts-voice-section__content");_(1)}if(document.querySelector(".questions-container")){let g=function(l){this.nextElementSibling.style.maxHeight?(this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="")):(this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD"))};var handleClick=g;const c=document.querySelectorAll(".accordion-container__accordion-btn");document.querySelectorAll(".accordion-container__content__question-container__question").forEach(l=>l.addEventListener("click",g)),c.forEach(l=>l.addEventListener("click",g))}if(document.querySelector(".history-section")){let _=function(){let t=0;window.screen.width<1280?t=(g.length-1)*-100:t=(g.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&l>t?l-=100:this.classList.contains("history-section__cards-section__right-arrow")&&l<=t?l=0:this.classList.contains("history-section__cards-section__left-arrow")&&l<0?l+=100:this.classList.contains("history-section__cards-section__left-arrow")&&l===0&&(l=t),g.forEach(r=>r.style.transform=`translateX(${l}%)`)};var handleArrowClick=_;const c=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];c.reverse();const n=document.querySelector(".history-section__cards-section__cards");c.forEach(t=>{n.innerHTML+=`
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${t.year}</h3>
      </div>
      <div class="history-section__cards-section__cards__card__body">
        <p>
          ${t.description}
        </p>
      </div>
    </div>
  `});const g=document.querySelectorAll(".history-section__cards-section__cards__card");document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow").forEach(t=>t.addEventListener("click",_));let l=0}if(document.querySelector(".discover-our-job")){let l=function(){let t=0;t=(n.length-1)*-100,this.classList.contains("discover-our-job__card-section__right-arrow")&&a>t?a-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&a<=t?a=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&a<0?a+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&a===0&&(a=t),n.forEach(r=>r.style.transform=`translateX(${a}%)`)};var handleArrowClick=l;[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}].forEach(t=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
  <div class="discover-our-job__card-section__cards__card">
  <div class="discover-our-job__card-section__cards__card__text-container">
    <div class="discover-our-job__card-section__cards__card__text-container__title">
      <h3>${t.name}</h3>
      <p>${t.job}</p>
    </div>
    <div class="discover-our-job__card-section__cards__card__text-container__description">
      ${t.description}
    </div>
    <div class="discover-our-job__card-section__cards__card__profile-container">
    <img src="${t.photoUrl}" alt="">
  </div>
  </div>
  
</div>
  `}),document.querySelector(".discover-our-job__card-section__cards");const n=document.querySelectorAll(".discover-our-job__card-section__cards__card");document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow").forEach(t=>t.addEventListener("click",l));let a=0}if(document.querySelector(".join-the-team-section")){let n=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const a=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${a}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=n;document.querySelectorAll(".join-the-team-section__offer-container__offer-btn").forEach(a=>a.addEventListener("click",n))}document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".piloted-graph-section")){let f=function(){r.innerHTML="",d.forEach(u=>u.classList.remove("piloted-graph-section__btns-container__btn--active")),this.classList.add("piloted-graph-section__btns-container__btn--active");const i=this.getAttribute("data-attr"),p=c[i][c[i].length-1].percentage;h.textContent=c[i][c[i].length-1].conditions,c[i].forEach((u,L)=>{const S=u.percentage*100/p;r.innerHTML+=`
      <div class="piloted-graph-section__graph-container__bar-container">
        <div class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${L}">
          ${u.percentage}%
        </div>
        <div class="piloted-graph-section__graph-container__bar-container__bar-information">
         ${u.description}
        </div>
      </div>`;const b=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${L}`);b.style.maxHeight="0",b.style.opacity="0",setTimeout(()=>{const C=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${L}`);C.style.maxHeight=`${S}%`,C.style.opacity="1",y(C,u.percentage,500)},10)})},y=function(i,p,u){const b=u/10;let C=0;const E=(p-0)/b;function w(){C+=E,C>=p?i.textContent=`${p} %`:(i.textContent=`${C.toFixed(1)} %`,setTimeout(w,10))}w()};var n=f,g=y;const a=[[{titre:"Sur 3 ans",percentage:3.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3",condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{titre:"Sur 5 ans",percentage:8.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4",active:!0,condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{titre:"depuis l'origine",percentage:11.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5",condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}],[{percentage:5.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:9.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:15.8,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"}],[{percentage:7.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:10.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:16.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"}]],l=JSON.stringify(a),_=document.querySelector(".piloted-graph-section__btns-container");if(_.hasAttribute("data-content").length){const i=JSON.parse(_.getAttribute("data-content").replace(/\\r\\n/g,""));var c=JSON.parse(i)}else{_.setAttribute("data-content",l);var c=a}let t=c[0];const r=document.querySelector(".piloted-graph-section__graph-container");_.innerHTML="",t.forEach((i,p)=>{let u=i.active==1?"piloted-graph-section__btns-container__btn--active":"";_.innerHTML+='<div class="piloted-graph-section__btns-container__btn '+u+'" data-attr="'+p+'">'+i.titre+"</div>"});const h=document.querySelector(".piloted-graph-section__conditions p"),d=document.querySelectorAll(".piloted-graph-section__btns-container__btn");d.forEach((i,p)=>{i.innerHTML=c[0][p].titre}),d.forEach(i=>i.addEventListener("click",f));const m=c[1][c[1].length-1].percentage;c[1].forEach(i=>{const p=i.percentage*100/m;r.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${p}%"
      >
        ${i.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${i.description}
      </div>
    </div>
        `})}});if(document.querySelector(".capital-calculator-section")){let t=function(){let d=g.valueAsNumber;const f=l.valueAsNumber,y=_.valueAsNumber/100,m=a.valueAsNumber;for(let p=0;p<f;p++)for(let u=0;u<12;u++){const L=y*d;d+=L*(1/12)+m}d=Math.round(d/1e3)*1e3,d.toString().split("").splice(-3,0," "),r(c,d,500)},r=function(d,f,y){const p=y/10;let u=0;const L=(f-0)/p;function S(){u+=L,u>=f?d.textContent=`${h(f)} €`:(d.textContent=`${h(u.toFixed(0))} €`,setTimeout(S,10))}S()},h=function(d){return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};var calculateResult=t,animateNumber=r,numberWithSpaces=h;const c=document.querySelector(".capital-calculator-section__result-value"),n=document.querySelectorAll(".capital-calculator-section__cursors-container__cursor-container input"),g=document.querySelector("#first-range"),a=document.querySelector("#second-range"),l=document.querySelector("#third-range"),_=document.querySelector("#fourth-range");n.forEach(d=>d.addEventListener("input",function(){const f=(this.value-this.min)/(this.max-this.min)*100,y=d.value.split("");y.splice(-3,0," "),(d.name="first-range")&&(d.labels[0].textContent=`${y.join("")} ${d.getAttribute("data-attr")}`),this.style.background=`linear-gradient(to right, #ff6442 0%, #ff6442 ${f}%, #fbe1da ${f}%, #fbe1da 100%)`,t()})),t()}
