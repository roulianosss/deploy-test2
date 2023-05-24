const S=document.querySelectorAll(".management-others-card");if(S){let c=0;S.forEach(d=>{const a=d.querySelectorAll(".management-others-card__explaination");for(let u=0;u<a.length;u++){const e=a[u].offsetHeight;e>c&&(c=e)}c>0&&d.querySelector(".management-others-card__explainations").style.setProperty("height",`calc(${c}px + var(--spacing-8))`),d.querySelectorAll(".management-others-card__link").forEach(u=>{let n=u.dataset.name,e=d.querySelector(".management-others-card__explaination[data-name="+n+"]");u.addEventListener("mouseenter",()=>{e.classList.add("active")}),u.addEventListener("mouseleave",()=>{e.classList.remove("active")})})});const r=document.querySelectorAll(".management-guided-card");r.length&&S.length&&r[0].offsetWidth!=S[0].offsetWidth&&(r[0].offsetHeight>S[0].offsetHeight?S[0].style.height=r[0].offsetHeight-15+"px":r[0].style.height=S[0].offsetHeight+15+"px")}const E=document.querySelector(".header");if(E){let o=function(){y(c),u(c),n()},u=function(_){_.forEach(l=>{l.querySelector(".menu__name").addEventListener("click",h=>{h.preventDefault(),p(l)})})},n=function(){a.addEventListener("click",()=>{e()})},e=function(){const _=document.querySelector(".menu__item.active");_&&(_.classList.remove("active"),a.classList.remove("active"))},p=function(_){const l=document.querySelector(".menu__item.active");l===_?(_.classList.remove("active"),a.classList.remove("active")):l?(l.classList.remove("active"),_.classList.add("active")):(_.classList.add("active"),a.classList.add("active"))},m=function(_){const l=_.getBoundingClientRect(),h=E.getBoundingClientRect();return l.left-h.left},v=function(_){const l=_.getBoundingClientRect(),h=E.getBoundingClientRect();return l.right-h.left},y=function(_){const l=parseInt(window.getComputedStyle(E).getPropertyValue("padding-left"),10),h=parseInt(window.getComputedStyle(d).getPropertyValue("padding-left"),10);_.forEach(f=>{const L=f.querySelector(".expand-menu");if(f.classList.contains("menu__item--full")){const w=m(f);L.style.left=`${l+h-w}px`}else E.offsetWidth-v(L)<l?(f.classList.add("menu__item--right"),f.classList.remove("menu__item--left")):(f.classList.remove("menu__item--right"),f.getAttribute("data-position")==="left"&&f.classList.add("menu__item--left"))})};var init=o,displayExpandMenuItems=u,handleOverlayClick=n,closeMenu=e,toogleMenuItem=p,getElementLeftPosition=m,getElementRightPosition=v,positionMenuItems=y;const c=document.querySelectorAll(".menu__item"),r=document.querySelectorAll(".expand-menu__sub-menu"),d=document.querySelector(".header__menu"),a=document.querySelector(".header__overlay");window.addEventListener("resize",()=>{y(c)}),o(),r&&r.forEach(_=>{_.querySelectorAll(".link--arrow").forEach(h=>{let f=h.dataset.name,L=_.querySelector(".link--arrow[data-name="+f+"]");h.addEventListener("click",()=>{_.querySelector(".link--arrow").classList.remove("active"),h.classList.remove("active"),L.classList.add("active"),$(".expand-menu__sub-item").classList.remove("visible"),$(".expand-menu__sub-item[data-name="+f+"]").classList.add("visible")})})})}const R={speed:200},z=document.querySelectorAll(".awards-section");z&&z.forEach(c=>{const r=c.querySelector(".awards-section__content"),d=r.cloneNode(!0);r.classList.add("primary"),d.classList.add("secondary"),r.parentNode.appendChild(d);const a=r.querySelectorAll(".award-item").length;r.style.setProperty("animation",`awards-section--primary ${a*1e3/R.speed}s linear infinite`),d.style.setProperty("animation",`awards-section--secondary ${a*1e3/R.speed}s linear infinite`)});if(document.querySelector(".contracts-piloted-section-container")){let _=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const i=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${i}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=_;const c={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:8,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},r=document.querySelectorAll(".btns-container__first-choice-container__btn"),d=document.querySelector(".btns-container__second-choice-container"),a=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),o=document.querySelectorAll(".filters-container__btns-container__btn"),u=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),n=document.querySelector(".results-container"),e=document.querySelectorAll(".toggle-button"),p=document.querySelectorAll(".card-container, .grid-row-body"),m=document.querySelector(".cards-display-container"),v=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body"),document.querySelector(".distribution-funds-array-section__btn").addEventListener("click",_);const l={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};r.forEach(i=>i.addEventListener("click",()=>h(i))),a.forEach(i=>i.addEventListener("click",()=>f(i))),o.forEach(i=>i.addEventListener("click",()=>L(i))),e.forEach(i=>i.addEventListener("click",()=>P())),p.forEach(i=>i.addEventListener("click",()=>x(i)));const h=i=>{l.secondChoice="",a.forEach(t=>t.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),r.forEach(t=>t.classList.remove("btns-container__first-choice-container__btn--active")),u.forEach(t=>t.classList.add("hidden")),i.classList.add("btns-container__first-choice-container__btn--active"),l.firstChoice=i.getAttribute("data-attr"),d.classList.remove("hidden"),document.querySelector(`.${i.getAttribute("data-attr")}`).classList.remove("hidden"),w()},f=i=>{a.forEach(t=>t.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),l.secondChoice=i.getAttribute("data-attr"),i.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),w()},L=i=>{l.thirdChoice=i.getAttribute("data-attr"),o.forEach(t=>t.classList.remove("filters-container__btns-container__btn--active")),i.classList.add("filters-container__btns-container__btn--active"),w()},w=()=>{l.firstChoice!==""&&l.secondChoice!==""?n.classList.remove("hidden"):n.classList.add("hidden"),v.innerHTML="",m.innerHTML="";const i=c[l.firstChoice][l.secondChoice][l.thirdChoice];i.map(t=>m.innerHTML+=`
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
    `,i.map(t=>v.innerHTML+=`
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
`,i.map(t=>v.innerHTML+=`
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
  `),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:first-child").forEach(t=>t.addEventListener("click",()=>q("prev"))),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:last-child").forEach(t=>t.addEventListener("click",()=>q("next"))),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.addEventListener("click",()=>x(t)))};let b=0;const q=i=>{i==="prev"&&b!==0?b+=100:i==="prev"&&b===0&&(b=-600,console.log(b)),i==="next"&&b>-600?b-=100:i==="next"&&b<=-600&&(b=0),console.log(`translate(${b}%)`),document.querySelectorAll(".grid-container-mobile__grid-header__items__label-container").forEach(C=>C.style.transform=`translate(${b}%)`),document.querySelectorAll(".grid-row-body-mobile__grid-profil-items-container__item-container").forEach(C=>C.style.transform=`translate(${b}%)`)},P=i=>{e.forEach(t=>{t.classList.toggle("toggle-button--active")}),A()},x=i=>{A(),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.classList.remove("card-container--active")),i.classList.add("card-container--active")},A=()=>{e.forEach(i=>{i.classList.contains("btn-parameter1")&&i.classList.contains("toggle-button--active")?m.classList.remove("hidden"):i.classList.contains("btn-parameter1")&&!i.classList.contains("toggle-button--active")&&m.classList.add("hidden"),i.classList.contains("btn-parameter2")&&i.classList.contains("toggle-button--active")?v.classList.remove("hidden"):i.classList.contains("btn-parameter2")&&!i.classList.contains("toggle-button--active")&&v.classList.add("hidden")})}}if(document.querySelector(".contracts-support-section-container")){const c={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},r={firstChoice:"",secondChoice:"",thirdChoice:""},d=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),a=document.querySelector(".support-btns-container__second-choice-container"),o=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),u=document.querySelector(".btns-third-choice-container"),n=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),e=document.querySelectorAll(".btns-third-choice-container__btn"),p=document.querySelectorAll(".account-unit-container__btns-container__btn"),m=document.querySelector(".euro-fund-container"),v=document.querySelector(".growth-fund-container"),y=document.querySelector(".euro-fund-container__netissima-container"),_=document.querySelector(".growth-container"),l=document.querySelectorAll(".grid-row-body"),h=document.querySelector(".structured-fund-container"),f=document.querySelector(".account-unit-container"),L=document.querySelector(".tunnel-array-container"),w=document.querySelector(".euro-fund-container__cards-container"),b=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container"),document.querySelector(".array-container"),d.forEach(s=>s.addEventListener("click",()=>q(s))),n.forEach(s=>s.addEventListener("click",()=>P(s))),e.forEach(s=>s.addEventListener("click",()=>x(s))),p.forEach(s=>s.addEventListener("click",()=>A(s))),b.forEach(s=>s.addEventListener("click",()=>i(s))),l.forEach(s=>s.addEventListener("click",()=>setActiveRow(s)));const q=s=>{d.forEach(g=>g.classList.remove("support-btns-container__first-choice-container__btn--active")),n.forEach(g=>g.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),e.forEach(g=>g.classList.remove("btns-third-choice-container__btn--active")),m.classList.add("hidden"),f.classList.add("hidden"),v.classList.add("hidden"),u.classList.add("hidden"),s.classList.add("support-btns-container__first-choice-container__btn--active"),a.classList.remove("hidden"),o.forEach(g=>g.classList.add("hidden")),r.secondChoice="",r.thirdChoice="",r.firstChoice=s.getAttribute("data-attr"),a.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${s.getAttribute("data-attr")}`).classList.remove("hidden"),t()},P=s=>{e.forEach(g=>g.classList.remove("btns-third-choice-container__btn--active")),u.classList.add("hidden"),m.classList.add("hidden"),f.classList.add("hidden"),v.classList.add("hidden"),n.forEach(g=>g.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),r.secondChoice=s.getAttribute("data-attr"),s.classList.add("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),u.classList.remove("hidden"),t(),C()},x=s=>{r.thirdChoice=s.getAttribute("data-attr"),e.forEach(g=>g.classList.remove("btns-third-choice-container__btn--active")),s.classList.add("btns-third-choice-container__btn--active"),F(s.getAttribute("data-attr")),C()},A=s=>{p.forEach(g=>g.classList.remove("account-unit-container__btns-container__btn--active")),s.classList.add("account-unit-container__btns-container__btn--active"),s.getAttribute("data-attr")!=="structured-funds"?(L.classList.remove("hidden"),h.classList.add("hidden")):(L.classList.add("hidden"),h.classList.remove("hidden"))},i=s=>{document.querySelectorAll(".support-card-container").forEach(g=>g.classList.remove("support-card-container--active")),s.classList.add("support-card-container--active"),s.getAttribute("data-attr")==="Netissima"?y.classList.remove("hidden"):y.classList.add("hidden"),s.getAttribute("data-attr")==="growth-netissima"?_.classList.remove("hidden"):_.classList.add("hidden")},t=()=>{r.firstChoice==="assuranceVie"&&r.secondChoice==="altaprofitsVie"||r.firstChoice==="capitalisation"&&r.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),r.firstChoice!=="planEpargneRetraite"&&r.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},F=s=>{s==="euro"?(m.classList.remove("hidden"),C()):m.classList.add("hidden"),s==="growth"?v.classList.remove("hidden"):v.classList.add("hidden"),s==="unit"?f.classList.remove("hidden"):f.classList.add("hidden")},C=()=>{w.innerHTML="";const s=c[r.firstChoice][r.secondChoice][r.thirdChoice];s==null||s.map(g=>w.innerHTML+=`
    <div class="support-card-container" data-attr="${g.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${g.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${g.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${g.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${g.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(g=>g.addEventListener("click",()=>i(g)))}}if(document.querySelector(".alta-news-talking-about-container")){let u=function(n){a.forEach(e=>{e.getAttribute("data-attr")===n&&e.classList.add("activePage")}),o.innerHTML="",c.slice((n-1)*4,n*4).forEach(e=>o.innerHTML+=`
        <div class="alta-news-talking-about-container__left-container__card">
        <div
        class="alta-news-talking-about-container__left-container__card__logo-container"
        >
            <img src="${e.logoUrl}" alt="logo">
        </div>
        <div
        class="alta-news-talking-about-container__left-container__card__informations-container"
        >
            <p>${e.date}</p>
            <h3><span class="alta-news-talking-about-container__left-container__card__informations-container__underline">${e.title}</h3></span>
            <p>${e.description}</p>
        </div>
    </div>  
`)};var displayNews=u;const c=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juin 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"2 Juin 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"15 Mai 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"10 Mai 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"26 Avril 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"31 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"11 Mars 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"10 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Février 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"12 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"10 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"9 Janvier 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],r=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),d=Math.ceil(c.length/4);r.innerHTML="";for(let n=1;n<=d;n++)r.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${n===1?"activePage":""}' data-attr="${n}" >${n}</p>
        `;const a=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");a.forEach(n=>n.addEventListener("click",e=>{a.forEach(p=>p.classList.remove("activePage")),u(e.target.getAttribute("data-attr"))}));const o=document.querySelector(".alta-news-talking-about-container__left-container__news-container");u(1)}if(document.querySelector(".experts-voice-section")){let u=function(e){a.forEach(p=>{p.getAttribute("data-attr")===e&&p.classList.add("active")}),o.innerHTML="",c.slice((e-1)*3,e*3).forEach(p=>o.innerHTML+=`
        <a class="article-card article-card--horizontal article-card--large" href="#">
            <img class="article-card__image" src="/assets/images/article_default.jpg">
            <div class="article-card__content">
                <p class="article-card__date">Publié le <span>${p.date}</span></p>
                <div class="article-card__title">
                    <h5 class="link">${p.title}</h5>
                </div>
                <p class="article-card__excerpt">${p.description}</p>
                <p class="article-card__author">${p.author}</p>
            </div>
        </a>
`)};var displayNews=u;const c=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises constituent des zones d’investissement recherchées pour les investisseurs en quête de rendement et de diversification.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],r=document.querySelector(".experts-voice-section__pagination"),d=Math.ceil(c.length/3);r.innerHTML="";for(let e=1;e<=d;e++)r.innerHTML+=`
        <p class='experts-voice-section__page ${e===1?"active":""}' data-attr="${e}" >${e}</p>
        `;const a=document.querySelectorAll(".experts-voice-section__page");a.forEach(e=>e.addEventListener("click",p=>{a.forEach(m=>m.classList.remove("active")),u(p.target.getAttribute("data-attr"))}));const o=document.querySelector(".experts-voice-section__content");u(1)}if(document.querySelector(".questions-container")){let d=function(o){this.nextElementSibling.style.maxHeight?(this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="")):(this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD"))};var handleClick=d;const c=document.querySelectorAll(".accordion-container__accordion-btn");document.querySelectorAll(".accordion-container__content__question-container__question").forEach(o=>o.addEventListener("click",d)),c.forEach(o=>o.addEventListener("click",d))}if(document.querySelector(".history-section")){let u=function(){let n=0;window.screen.width<1280?n=(d.length-1)*-100:n=(d.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&o>n?o-=100:this.classList.contains("history-section__cards-section__right-arrow")&&o<=n?o=0:this.classList.contains("history-section__cards-section__left-arrow")&&o<0?o+=100:this.classList.contains("history-section__cards-section__left-arrow")&&o===0&&(o=n),d.forEach(e=>e.style.transform=`translateX(${o}%)`)};var handleArrowClick=u;const c=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];c.reverse();const r=document.querySelector(".history-section__cards-section__cards");c.forEach(n=>{r.innerHTML+=`
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${n.year}</h3>
      </div>
      <div class="history-section__cards-section__cards__card__body">
        <p>
          ${n.description}
        </p>
      </div>
    </div>
  `});const d=document.querySelectorAll(".history-section__cards-section__cards__card");document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow").forEach(n=>n.addEventListener("click",u));let o=0}if(document.querySelector(".discover-our-job")){let o=function(){let n=0;n=(r.length-1)*-100,this.classList.contains("discover-our-job__card-section__right-arrow")&&a>n?a-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&a<=n?a=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&a<0?a+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&a===0&&(a=n),r.forEach(e=>e.style.transform=`translateX(${a}%)`)};var handleArrowClick=o;[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}].forEach(n=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
  <div class="discover-our-job__card-section__cards__card">
  <div class="discover-our-job__card-section__cards__card__text-container">
    <div class="discover-our-job__card-section__cards__card__text-container__title">
      <h3>${n.name}</h3>
      <p>${n.job}</p>
    </div>
    <div class="discover-our-job__card-section__cards__card__text-container__description">
      ${n.description}
    </div>
    <div class="discover-our-job__card-section__cards__card__profile-container">
    <img src="${n.photoUrl}" alt="">
  </div>
  </div>
  
</div>
  `}),document.querySelector(".discover-our-job__card-section__cards");const r=document.querySelectorAll(".discover-our-job__card-section__cards__card");document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow").forEach(n=>n.addEventListener("click",o));let a=0}if(document.querySelector(".join-the-team-section")){let r=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const a=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${a}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var handleClick=r;document.querySelectorAll(".join-the-team-section__offer-container__offer-btn").forEach(a=>a.addEventListener("click",r))}if(document.querySelector(".piloted-graph-section")){let a=function(){r.innerHTML="",d.forEach(m=>m.classList.remove("piloted-graph-section__btns-container__btn--active")),this.classList.add("piloted-graph-section__btns-container__btn--active");const e=this.getAttribute("data-attr"),p=c[e][c[e].length-1].percentage;c[e].forEach((m,v)=>{const y=m.percentage*100/p;r.innerHTML+=`
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
    </div>`;const _=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${v}`);_.style.maxHeight="0",_.style.opacity="0",setTimeout(()=>{const l=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${v}`);l.style.maxHeight=`${y}%`,l.style.opacity="1",o(l,m.percentage,500)},10)})},o=function(e,p,m){const _=m/10;let l=0;const h=(p-0)/_;function f(){l+=h,l>=p?e.textContent=`${p} %`:(e.textContent=`${l.toFixed(1)} %`,setTimeout(f,10))}f()};var handleClick=a,animateNumber=o;const c=[[{percentage:3.3,description:"Prudent"},{percentage:8.4,description:"Equilibré"},{percentage:11.9,description:"Dynamique"}],[{percentage:5.3,description:"Prudent"},{percentage:9.4,description:"Equilibré"},{percentage:15.8,description:"Dynamique"}],[{percentage:7.3,description:"Prudent"},{percentage:10.4,description:"Equilibré"},{percentage:16.9,description:"Dynamique"}]];document.querySelector(".piloted-graph-section__btns-container");const r=document.querySelector(".piloted-graph-section__graph-container"),d=document.querySelectorAll(".piloted-graph-section__btns-container__btn");d.forEach(e=>e.addEventListener("click",a));const u=c[1][c[1].length-1].percentage;c[1].forEach(e=>{const p=e.percentage*100/u;r.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${p}%"
      >
        ${e.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${e.description}
      </div>
    </div>
        `})}
