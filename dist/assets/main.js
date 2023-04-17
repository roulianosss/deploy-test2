const U=document.querySelectorAll(".management-others-card");if(U){let e=0;U.forEach(t=>{const n=t.querySelectorAll(".management-others-card__explaination");for(let i=0;i<n.length;i++){const s=n[i].offsetHeight;s>e&&(e=s)}t.querySelector(".management-others-card__explainations").style.setProperty("height",`calc(${e}px + var(--spacing-8))`),t.querySelectorAll(".management-others-card__link").forEach(i=>{let d=i.dataset.name,s=t.querySelector(".management-others-card__explaination[data-name="+d+"]");i.addEventListener("mouseenter",()=>{s.classList.add("active")}),i.addEventListener("mouseleave",()=>{s.classList.remove("active")})})})}const R={speed:200},$=document.querySelectorAll(".awards-section");$&&$.forEach(e=>{const t=e.querySelector(".awards-section__content"),n=t.cloneNode(!0);t.classList.add("primary"),n.classList.add("secondary"),t.parentNode.appendChild(n);const l=t.querySelectorAll(".award-item").length;t.style.setProperty("animation",`awards-section--primary ${l*1e3/R.speed}s linear infinite`),n.style.setProperty("animation",`awards-section--secondary ${l*1e3/R.speed}s linear infinite`)});const ae={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},F=document.querySelectorAll(".btns-container__first-choice-container__btn"),oe=document.querySelector(".btns-container__second-choice-container"),C=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),I=document.querySelectorAll(".filters-container__btns-container__btn"),ce=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),T=document.querySelector(".results-container"),S=document.querySelectorAll(".toggle-button"),le=document.querySelectorAll(".card-container, .grid-row-body"),g=document.querySelector(".cards-display-container"),_=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body");const de=document.querySelector(".distribution-funds-array-section__btn");de.addEventListener("click",ue);function ue(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const e=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${e}px`,this.lastElementChild.style.transform="rotate(180deg)"}}const c={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};F.forEach(e=>e.addEventListener("click",()=>_e(e)));C.forEach(e=>e.addEventListener("click",()=>ge(e)));I.forEach(e=>e.addEventListener("click",()=>pe(e)));S.forEach(e=>e.addEventListener("click",()=>me()));le.forEach(e=>e.addEventListener("click",()=>D(e)));const _e=e=>{c.secondChoice="",C.forEach(t=>t.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),F.forEach(t=>t.classList.remove("btns-container__first-choice-container__btn--active")),ce.forEach(t=>t.classList.add("hidden")),e.classList.add("btns-container__first-choice-container__btn--active"),c.firstChoice=e.getAttribute("data-attr"),oe.classList.remove("hidden"),document.querySelector(`.${e.getAttribute("data-attr")}`).classList.remove("hidden"),A()},ge=e=>{C.forEach(t=>t.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),c.secondChoice=e.getAttribute("data-attr"),e.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),A()},pe=e=>{c.thirdChoice=e.getAttribute("data-attr"),I.forEach(t=>t.classList.remove("filters-container__btns-container__btn--active")),e.classList.add("filters-container__btns-container__btn--active"),A()},A=()=>{c.firstChoice!==""&&c.secondChoice!==""?T.classList.remove("hidden"):T.classList.add("hidden"),_.innerHTML="",g.innerHTML="";const e=ae[c.firstChoice][c.secondChoice][c.thirdChoice];e.map(t=>g.innerHTML+=`
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
    `),_.innerHTML+=`
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
    `,e.map(t=>_.innerHTML+=`
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
    `),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.addEventListener("click",()=>D(t)))},me=e=>{S.forEach(t=>{t.classList.toggle("toggle-button--active")}),j()},D=e=>{j(),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.classList.remove("card-container--active")),e.classList.add("card-container--active")},j=()=>{S.forEach(e=>{e.classList.contains("btn-parameter1")&&e.classList.contains("toggle-button--active")?g.classList.remove("hidden"):e.classList.contains("btn-parameter1")&&!e.classList.contains("toggle-button--active")&&g.classList.add("hidden"),e.classList.contains("btn-parameter2")&&e.classList.contains("toggle-button--active")?_.classList.remove("hidden"):e.classList.contains("btn-parameter2")&&!e.classList.contains("toggle-button--active")&&_.classList.add("hidden")})},fe={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},r={firstChoice:"",secondChoice:"",thirdChoice:""},G=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),w=document.querySelector(".support-btns-container__second-choice-container"),he=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),b=document.querySelector(".btns-third-choice-container"),P=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),h=document.querySelectorAll(".btns-third-choice-container__btn"),J=document.querySelectorAll(".account-unit-container__btns-container__btn"),p=document.querySelector(".euro-fund-container"),m=document.querySelector(".growth-fund-container"),N=document.querySelector(".euro-fund-container__netissima-container"),H=document.querySelector(".growth-container"),ve=document.querySelectorAll(".grid-row-body"),M=document.querySelector(".structured-fund-container"),f=document.querySelector(".account-unit-container"),O=document.querySelector(".tunnel-array-container"),z=document.querySelector(".euro-fund-container__cards-container"),be=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container");document.querySelector(".array-container");G.forEach(e=>e.addEventListener("click",()=>Ee(e)));P.forEach(e=>e.addEventListener("click",()=>ye(e)));h.forEach(e=>e.addEventListener("click",()=>Le(e)));J.forEach(e=>e.addEventListener("click",()=>Ce(e)));be.forEach(e=>e.addEventListener("click",()=>Q(e)));ve.forEach(e=>e.addEventListener("click",()=>setActiveRow(e)));const Ee=e=>{G.forEach(t=>t.classList.remove("support-btns-container__first-choice-container__btn--active")),P.forEach(t=>t.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),h.forEach(t=>t.classList.remove("btns-third-choice-container__btn--active")),p.classList.add("hidden"),f.classList.add("hidden"),m.classList.add("hidden"),b.classList.add("hidden"),e.classList.add("support-btns-container__first-choice-container__btn--active"),w.classList.remove("hidden"),he.forEach(t=>t.classList.add("hidden")),r.secondChoice="",r.thirdChoice="",r.firstChoice=e.getAttribute("data-attr"),w.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${e.getAttribute("data-attr")}`).classList.remove("hidden"),X()},ye=e=>{h.forEach(t=>t.classList.remove("btns-third-choice-container__btn--active")),b.classList.add("hidden"),p.classList.add("hidden"),f.classList.add("hidden"),m.classList.add("hidden"),P.forEach(t=>t.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),r.secondChoice=e.getAttribute("data-attr"),e.classList.add("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),b.classList.remove("hidden"),X(),q()},Le=e=>{r.thirdChoice=e.getAttribute("data-attr"),h.forEach(t=>t.classList.remove("btns-third-choice-container__btn--active")),e.classList.add("btns-third-choice-container__btn--active"),Se(e.getAttribute("data-attr")),q()},Ce=e=>{J.forEach(t=>t.classList.remove("account-unit-container__btns-container__btn--active")),e.classList.add("account-unit-container__btns-container__btn--active"),e.getAttribute("data-attr")!=="structured-funds"?(O.classList.remove("hidden"),M.classList.add("hidden")):(O.classList.add("hidden"),M.classList.remove("hidden"))},Q=e=>{document.querySelectorAll(".support-card-container").forEach(t=>t.classList.remove("support-card-container--active")),e.classList.add("support-card-container--active"),e.getAttribute("data-attr")==="Netissima"?N.classList.remove("hidden"):N.classList.add("hidden"),e.getAttribute("data-attr")==="growth-netissima"?H.classList.remove("hidden"):H.classList.add("hidden")},X=()=>{r.firstChoice==="assuranceVie"&&r.secondChoice==="altaprofitsVie"||r.firstChoice==="capitalisation"&&r.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),r.firstChoice!=="planEpargneRetraite"&&r.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},Se=e=>{e==="euro"?(p.classList.remove("hidden"),q()):p.classList.add("hidden"),e==="growth"?m.classList.remove("hidden"):m.classList.add("hidden"),e==="unit"?f.classList.remove("hidden"):f.classList.add("hidden")},q=()=>{z.innerHTML="";const e=fe[r.firstChoice][r.secondChoice][r.thirdChoice];e==null||e.map(t=>z.innerHTML+=`
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
  `),document.querySelectorAll(".support-card-container").forEach(t=>t.addEventListener("click",()=>Q(t)))},W=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juin 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"2 Juin 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"15 Mai 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"10 Mai 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"26 Avril 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"31 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"11 Mars 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"10 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Février 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"12 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"10 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"9 Janvier 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],Y=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),Ae=Math.ceil(W.length/4);Y.innerHTML="";for(let e=1;e<=Ae;e++)Y.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${e===1?"activePage":""}' data-attr="${e}" >${e}</p>
        `;const E=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");E.forEach(e=>e.addEventListener("click",t=>{E.forEach(n=>n.classList.remove("activePage")),Z(t.target.getAttribute("data-attr"))}));const V=document.querySelector(".alta-news-talking-about-container__left-container__news-container");function Z(e){E.forEach(t=>{t.getAttribute("data-attr")===e&&t.classList.add("activePage")}),V.innerHTML="",W.slice((e-1)*4,e*4).forEach(t=>V.innerHTML+=`
        <div class="alta-news-talking-about-container__left-container__card">
        <div
        class="alta-news-talking-about-container__left-container__card__logo-container"
        >
            <img src="${t.logoUrl}" alt="logo">
        </div>
        <div
        class="alta-news-talking-about-container__left-container__card__informations-container"
        >
            <p>${t.date}</p>
            <h3><span class="alta-news-talking-about-container__left-container__card__informations-container__underline">${t.title}</h3></span>
            <p>${t.description}</p>
        </div>
    </div>  
`)}Z(1);const K=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises CONSTITUENT DES ZONES D’INVESTISSEMENT RECHERCHÉES POUR LES INVESTISSEURS EN QUÊTE DE RENDEMENT ET DE DIVERSIFICATION.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],ee=document.querySelector(".experts-voice-container__pages-navigation__pages-numbers"),Pe=Math.ceil(K.length/3);ee.innerHTML="";for(let e=1;e<=Pe;e++)ee.innerHTML+=`
        <p class='experts-voice-container__pages-navigation__pages-numbers__btn ${e===1?"activePage":""}' data-attr="${e}" >${e}</p>
        `;const y=document.querySelectorAll(".experts-voice-container__pages-navigation__pages-numbers__btn");y.forEach(e=>e.addEventListener("click",t=>{y.forEach(n=>n.classList.remove("activePage")),te(t.target.getAttribute("data-attr"))}));const B=document.querySelector(".experts-voice-container__news-container");function te(e){y.forEach(t=>{t.getAttribute("data-attr")===e&&t.classList.add("activePage")}),B.innerHTML="",K.slice((e-1)*3,e*3).forEach(t=>B.innerHTML+=`
        <div class="experts-voice-container__card">
        <div
        class="experts-voice-container__card__logo-container"
        >
            <img src="${t.logoUrl}" alt="logo">
        </div>
        <div
        class="experts-voice-container__card__informations-container"
        >
            <p>${t.date}</p>
            <h3><span class="experts-voice-container__card__informations-container__underline">${t.title}</h3></span>
            <p>${t.description}</p>
            <p>${t.author}</p>
        </div>
    </div>  
`)}te(1);const qe=document.querySelectorAll(".accordion-container__accordion-btn"),xe=document.querySelectorAll(".accordion-container__content__question-container__question");xe.forEach(e=>e.addEventListener("click",ne));qe.forEach(e=>e.addEventListener("click",ne));function ne(e){if(this.nextElementSibling.style.maxHeight){this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="");return}else this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD")}const re=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];re.reverse();const Ue=document.querySelector(".history-section__cards-section__cards");re.forEach(e=>{Ue.innerHTML+=`
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
  `});const v=document.querySelectorAll(".history-section__cards-section__cards__card"),Re=document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow");Re.forEach(e=>e.addEventListener("click",$e));let a=0;function $e(){let e=0;window.screen.width<1280?e=(v.length-1)*-100:e=(v.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&a>e?a-=100:this.classList.contains("history-section__cards-section__right-arrow")&&a<=e?a=0:this.classList.contains("history-section__cards-section__left-arrow")&&a<0?a+=100:this.classList.contains("history-section__cards-section__left-arrow")&&a===0&&(a=e),v.forEach(t=>t.style.transform=`translateX(${a}%)`)}const Te=[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}];Te.forEach(e=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
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
  `});document.querySelector(".discover-our-job__card-section__cards");const k=document.querySelectorAll(".discover-our-job__card-section__cards__card"),we=document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow");we.forEach(e=>e.addEventListener("click",Ne));let o=0;function Ne(){let e=0;e=(k.length-1)*-100,this.classList.contains("discover-our-job__card-section__right-arrow")&&o>e?o-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&o<=e?o=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&o<0?o+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&o===0&&(o=e),k.forEach(t=>t.style.transform=`translateX(${o}%)`)}const He=document.querySelectorAll(".join-the-team-section__offer-container__offer-btn");He.forEach(e=>e.addEventListener("click",Me));function Me(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const e=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${e}px`,this.lastElementChild.style.transform="rotate(180deg)"}}const u=[[{percentage:3.3,description:"Prudent"},{percentage:8.4,description:"Equilibré"},{percentage:11.9,description:"Dynamique"}],[{percentage:5.3,description:"Prudent"},{percentage:9.4,description:"Equilibré"},{percentage:15.8,description:"Dynamique"}],[{percentage:7.3,description:"Prudent"},{percentage:10.4,description:"Equilibré"},{percentage:16.9,description:"Dynamique"}]],L=document.querySelector(".piloted-graph-section__graph-container"),se=document.querySelectorAll(".piloted-graph-section__btns-container__btn");se.forEach(e=>e.addEventListener("click",Oe));function Oe(){L.innerHTML="",se.forEach(n=>n.classList.remove("piloted-graph-section__btns-container__btn--active")),this.classList.add("piloted-graph-section__btns-container__btn--active");const e=this.getAttribute("data-attr"),t=u[e][u[e].length-1].percentage;u[e].forEach((n,l)=>{const i=n.percentage*100/t;L.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"
      
    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${l}"
        
      >
        ${n.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${n.description}
      </div>
    </div>`;const d=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${l}`);d.style.maxHeight="0",d.style.opacity="0",setTimeout(()=>{const s=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${l}`);s.style.maxHeight=`${i}%`,s.style.opacity="1",ze(s,n.percentage,500)},10)})}function ze(e,t,n){const d=n/10;let s=0;const ie=(t-0)/d;function x(){s+=ie,s>=t?e.textContent=`${t} %`:(e.textContent=`${s.toFixed(1)} %`,setTimeout(x,10))}x()}const Ve=u[1][u[1].length-1].percentage;u[1].forEach(e=>{const t=e.percentage*100/Ve;L.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"
      
    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${t}%"
      >
        ${e.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${e.description}
      </div>
    </div>
        `});
