const o=document.querySelector(".management-others-card__explainations");if(o){let e=0;const t=o.querySelectorAll(".management-others-card__explaination");for(let i=0;i<t.length;i++){const b=t[i].offsetHeight;b>e&&(e=b)}o.style.setProperty("height",`calc(${e}px + 2*var(--spacing-8))`)}const y=document.querySelectorAll(".management-others-card__link");y&&y.forEach(e=>{let t=e.dataset.name,i=o.querySelector(".management-others-card__explaination[data-name="+t+"]");e.addEventListener("mouseenter",()=>{i.classList.add("active")}),e.addEventListener("mouseleave",()=>{i.classList.remove("active")})});const P={speed:200},n=document.querySelector(".awards-section__content");if(n){const e=n.cloneNode(!0);n.classList.add("primary"),e.classList.add("secondary"),n.parentNode.appendChild(e);const t=n.querySelectorAll(".award-item").length;n.style.setProperty("animation",`awards-section--primary ${t*1e3/P.speed}s linear infinite`),e.style.setProperty("animation",`awards-section--secondary ${t*1e3/P.speed}s linear infinite`)}const H={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},$=document.querySelectorAll(".btns-container__first-choice-container__btn"),R=document.querySelector(".btns-container__second-choice-container"),p=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),B=document.querySelectorAll(".filters-container__btns-container__btn"),M=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),S=document.querySelector(".results-container"),h=document.querySelectorAll(".toggle-button"),N=document.querySelectorAll(".card-container, .grid-row-body"),c=document.querySelector(".cards-display-container"),a=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body");const s={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};$.forEach(e=>e.addEventListener("click",()=>G(e)));p.forEach(e=>e.addEventListener("click",()=>O(e)));B.forEach(e=>e.addEventListener("click",()=>D(e)));h.forEach(e=>e.addEventListener("click",()=>I()));N.forEach(e=>e.addEventListener("click",()=>T(e)));const G=e=>{console.log(R),s.secondChoice="",p.forEach(t=>t.classList.remove("active")),$.forEach(t=>t.classList.remove("active")),M.forEach(t=>t.classList.add("hidden")),e.classList.add("active"),s.firstChoice=e.getAttribute("data-attr"),R.classList.remove("hidden"),document.querySelector(`.${e.getAttribute("data-attr")}`).classList.remove("hidden"),v()},O=e=>{p.forEach(t=>t.classList.remove("active")),s.secondChoice=e.getAttribute("data-attr"),e.classList.add("active"),v()},D=e=>{s.thirdChoice=e.getAttribute("data-attr"),B.forEach(t=>t.classList.remove("active")),e.classList.add("active"),v()},v=()=>{s.firstChoice!==""&&s.secondChoice!==""?S.classList.remove("hidden"):S.classList.add("hidden"),a.innerHTML="",c.innerHTML="";const e=H[s.firstChoice][s.secondChoice][s.thirdChoice];e.map(t=>c.innerHTML+=`
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${t.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===1?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===2?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===3?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===4?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===5?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===6?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${t.srri===7?"active":""}">
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
    `),a.innerHTML+=`
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
    `,e.map(t=>a.innerHTML+=`
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${t.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${t.srri}</p>
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
    `),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.addEventListener("click",()=>T(t)))},I=e=>{h.forEach(t=>{t.classList.toggle("toggle-button--active")}),x()},T=e=>{console.log("ok"),x(),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.classList.remove("active")),e.classList.add("active")},x=()=>{h.forEach(e=>{e.classList.contains("btn-parameter1")&&e.classList.contains("toggle-button--active")?c.classList.remove("hidden"):e.classList.contains("btn-parameter1")&&!e.classList.contains("toggle-button--active")&&c.classList.add("hidden"),e.classList.contains("btn-parameter2")&&e.classList.contains("toggle-button--active")?a.classList.remove("hidden"):e.classList.contains("btn-parameter2")&&!e.classList.contains("toggle-button--active")&&a.classList.add("hidden")})},J={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},r={firstChoice:"",secondChoice:"",thirdChoice:""},g=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),E=document.querySelector(".support-btns-container__second-choice-container"),Y=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),_=document.querySelector(".btns-third-choice-container"),C=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),m=document.querySelectorAll(".btns-third-choice-container__btn"),f=document.querySelectorAll(".account-unit-container__btns-container__btn"),l=document.querySelector(".euro-fund-container"),d=document.querySelector(".growth-fund-container"),U=document.querySelector(".euro-fund-container__netissima-container"),q=document.querySelector(".growth-container"),k=document.querySelectorAll(".grid-row-body"),A=document.querySelector(".structured-fund-container"),u=document.querySelector(".account-unit-container"),w=document.querySelector(".tunnel-array-container"),z=document.querySelector(".euro-fund-container__cards-container"),j=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container");document.querySelector(".array-container");g.forEach(e=>e.addEventListener("click",()=>K(e)));C.forEach(e=>e.addEventListener("click",()=>Q(e)));m.forEach(e=>e.addEventListener("click",()=>W(e)));f.forEach(e=>e.addEventListener("click",()=>X(e)));j.forEach(e=>e.addEventListener("click",()=>V(e)));k.forEach(e=>e.addEventListener("click",()=>Z(e)));const K=e=>{m.forEach(t=>t.classList.remove("active")),g.forEach(t=>t.classList.remove("active")),l.classList.add("hidden"),u.classList.add("hidden"),d.classList.add("hidden"),_.classList.add("hidden"),e.classList.add("active"),E.classList.remove("hidden"),r.secondChoice="",r.thirdChoice="",C.forEach(t=>t.classList.remove("active")),g.forEach(t=>t.classList.remove("active")),Y.forEach(t=>t.classList.add("hidden")),e.classList.add("active"),r.firstChoice=e.getAttribute("data-attr"),E.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${e.getAttribute("data-attr")}`).classList.remove("hidden"),F()},Q=e=>{console.log("test"),m.forEach(t=>t.classList.remove("active")),_.classList.add("hidden"),l.classList.add("hidden"),u.classList.add("hidden"),d.classList.add("hidden"),C.forEach(t=>t.classList.remove("active")),r.secondChoice=e.getAttribute("data-attr"),e.classList.add("active"),_.classList.remove("hidden"),console.log(r),F(),L()},W=e=>{r.thirdChoice=e.getAttribute("data-attr"),m.forEach(t=>t.classList.remove("active")),e.classList.add("active"),ee(e.getAttribute("data-attr")),L()},X=e=>{console.log(f),f.forEach(t=>t.classList.remove("active")),e.classList.add("active"),e.getAttribute("data-attr")!=="structured-funds"?(w.classList.remove("hidden"),A.classList.add("hidden")):(w.classList.add("hidden"),A.classList.remove("hidden"))},V=e=>{console.log("test"),document.querySelectorAll(".support-card-container").forEach(t=>t.classList.remove("active")),e.classList.add("active"),console.log(e),e.getAttribute("data-attr")==="Netissima"?U.classList.remove("hidden"):U.classList.add("hidden"),e.getAttribute("data-attr")==="growth-netissima"?q.classList.remove("hidden"):q.classList.add("hidden")},Z=e=>{k.forEach(t=>t.classList.remove("active")),e.classList.add("active")},F=()=>{r.firstChoice==="assuranceVie"&&r.secondChoice==="altaprofitsVie"||r.firstChoice==="capitalisation"&&r.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),r.firstChoice!=="planEpargneRetraite"&&r.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},ee=e=>{console.log("enter"),e==="euro"?(l.classList.remove("hidden"),L()):l.classList.add("hidden"),e==="growth"?d.classList.remove("hidden"):d.classList.add("hidden"),e==="unit"?u.classList.remove("hidden"):u.classList.add("hidden")},L=()=>{z.innerHTML="";const e=J[r.firstChoice][r.secondChoice][r.thirdChoice];e==null||e.map(t=>z.innerHTML+=`
    <div class="support-card-container" data-attr="${t.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${t.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${t.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${t.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${t.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(t=>t.addEventListener("click",()=>V(t)))};
