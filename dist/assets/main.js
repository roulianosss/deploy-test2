const o=document.querySelector(".management-others-card__explainations");if(o){let e=0;const t=o.querySelectorAll(".management-others-card__explaination");for(let r=0;r<t.length;r++){const S=t[r].offsetHeight;S>e&&(e=S)}o.style.setProperty("height",`calc(${e}px + 2*var(--spacing-8))`)}const A=document.querySelectorAll(".management-others-card__link");A&&A.forEach(e=>{let t=e.dataset.name,r=o.querySelector(".management-others-card__explaination[data-name="+t+"]");e.addEventListener("mouseenter",()=>{r.classList.add("active")}),e.addEventListener("mouseleave",()=>{r.classList.remove("active")})});const y={speed:200},n=document.querySelector(".awards-section__content");if(n){const e=n.cloneNode(!0);n.classList.add("primary"),e.classList.add("secondary"),n.parentNode.appendChild(e);const t=n.querySelectorAll(".award-item").length;n.style.setProperty("animation",`awards-section--primary ${t*1e3/y.speed}s linear infinite`),e.style.setProperty("animation",`awards-section--secondary ${t*1e3/y.speed}s linear infinite`)}const j={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},O=document.querySelectorAll(".btns-container__first-choice-container__btn"),P=document.querySelector(".btns-container__second-choice-container"),h=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),B=document.querySelectorAll(".filters-container__btns-container__btn"),Y=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),U=document.querySelector(".results-container"),b=document.querySelectorAll(".toggle-button"),Z=document.querySelectorAll(".card-container, .grid-row-body"),c=document.querySelector(".cards-display-container"),i=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body");const a={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};O.forEach(e=>e.addEventListener("click",()=>K(e)));h.forEach(e=>e.addEventListener("click",()=>W(e)));B.forEach(e=>e.addEventListener("click",()=>ee(e)));b.forEach(e=>e.addEventListener("click",()=>te()));Z.forEach(e=>e.addEventListener("click",()=>M(e)));const K=e=>{console.log(P),a.secondChoice="",h.forEach(t=>t.classList.remove("active")),O.forEach(t=>t.classList.remove("active")),Y.forEach(t=>t.classList.add("hidden")),e.classList.add("active"),a.firstChoice=e.getAttribute("data-attr"),P.classList.remove("hidden"),document.querySelector(`.${e.getAttribute("data-attr")}`).classList.remove("hidden"),L()},W=e=>{h.forEach(t=>t.classList.remove("active")),a.secondChoice=e.getAttribute("data-attr"),e.classList.add("active"),L()},ee=e=>{a.thirdChoice=e.getAttribute("data-attr"),B.forEach(t=>t.classList.remove("active")),e.classList.add("active"),L()},L=()=>{a.firstChoice!==""&&a.secondChoice!==""?U.classList.remove("hidden"):U.classList.add("hidden"),i.innerHTML="",c.innerHTML="";const e=j[a.firstChoice][a.secondChoice][a.thirdChoice];e.map(t=>c.innerHTML+=`
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
    `),i.innerHTML+=`
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
    `,e.map(t=>i.innerHTML+=`
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
    `),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.addEventListener("click",()=>M(t)))},te=e=>{b.forEach(t=>{t.classList.toggle("toggle-button--active")}),I()},M=e=>{console.log("ok"),I(),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.classList.remove("active")),e.classList.add("active")},I=()=>{b.forEach(e=>{e.classList.contains("btn-parameter1")&&e.classList.contains("toggle-button--active")?c.classList.remove("hidden"):e.classList.contains("btn-parameter1")&&!e.classList.contains("toggle-button--active")&&c.classList.add("hidden"),e.classList.contains("btn-parameter2")&&e.classList.contains("toggle-button--active")?i.classList.remove("hidden"):e.classList.contains("btn-parameter2")&&!e.classList.contains("toggle-button--active")&&i.classList.add("hidden")})},se={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},s={firstChoice:"",secondChoice:"",thirdChoice:""},p=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),R=document.querySelector(".support-btns-container__second-choice-container"),re=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),_=document.querySelector(".btns-third-choice-container"),E=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),g=document.querySelectorAll(".btns-third-choice-container__btn"),m=document.querySelectorAll(".account-unit-container__btns-container__btn"),l=document.querySelector(".euro-fund-container"),d=document.querySelector(".growth-fund-container"),q=document.querySelector(".euro-fund-container__netissima-container"),T=document.querySelector(".growth-container"),V=document.querySelectorAll(".grid-row-body"),N=document.querySelector(".structured-fund-container"),u=document.querySelector(".account-unit-container"),$=document.querySelector(".tunnel-array-container"),x=document.querySelector(".euro-fund-container__cards-container"),ae=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container");document.querySelector(".array-container");p.forEach(e=>e.addEventListener("click",()=>ne(e)));E.forEach(e=>e.addEventListener("click",()=>ie(e)));g.forEach(e=>e.addEventListener("click",()=>oe(e)));m.forEach(e=>e.addEventListener("click",()=>ce(e)));ae.forEach(e=>e.addEventListener("click",()=>k(e)));V.forEach(e=>e.addEventListener("click",()=>le(e)));const ne=e=>{g.forEach(t=>t.classList.remove("active")),p.forEach(t=>t.classList.remove("active")),l.classList.add("hidden"),u.classList.add("hidden"),d.classList.add("hidden"),_.classList.add("hidden"),e.classList.add("active"),R.classList.remove("hidden"),s.secondChoice="",s.thirdChoice="",E.forEach(t=>t.classList.remove("active")),p.forEach(t=>t.classList.remove("active")),re.forEach(t=>t.classList.add("hidden")),e.classList.add("active"),s.firstChoice=e.getAttribute("data-attr"),R.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${e.getAttribute("data-attr")}`).classList.remove("hidden"),F()},ie=e=>{console.log("test"),g.forEach(t=>t.classList.remove("active")),_.classList.add("hidden"),l.classList.add("hidden"),u.classList.add("hidden"),d.classList.add("hidden"),E.forEach(t=>t.classList.remove("active")),s.secondChoice=e.getAttribute("data-attr"),e.classList.add("active"),_.classList.remove("hidden"),console.log(s),F(),C()},oe=e=>{s.thirdChoice=e.getAttribute("data-attr"),g.forEach(t=>t.classList.remove("active")),e.classList.add("active"),de(e.getAttribute("data-attr")),C()},ce=e=>{console.log(m),m.forEach(t=>t.classList.remove("active")),e.classList.add("active"),e.getAttribute("data-attr")!=="structured-funds"?($.classList.remove("hidden"),N.classList.add("hidden")):($.classList.add("hidden"),N.classList.remove("hidden"))},k=e=>{console.log("test"),document.querySelectorAll(".support-card-container").forEach(t=>t.classList.remove("active")),e.classList.add("active"),console.log(e),e.getAttribute("data-attr")==="Netissima"?q.classList.remove("hidden"):q.classList.add("hidden"),e.getAttribute("data-attr")==="growth-netissima"?T.classList.remove("hidden"):T.classList.add("hidden")},le=e=>{V.forEach(t=>t.classList.remove("active")),e.classList.add("active")},F=()=>{s.firstChoice==="assuranceVie"&&s.secondChoice==="altaprofitsVie"||s.firstChoice==="capitalisation"&&s.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),s.firstChoice!=="planEpargneRetraite"&&s.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},de=e=>{console.log("enter"),e==="euro"?(l.classList.remove("hidden"),C()):l.classList.add("hidden"),e==="growth"?d.classList.remove("hidden"):d.classList.add("hidden"),e==="unit"?u.classList.remove("hidden"):u.classList.add("hidden")},C=()=>{x.innerHTML="";const e=se[s.firstChoice][s.secondChoice][s.thirdChoice];e==null||e.map(t=>x.innerHTML+=`
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
  `),document.querySelectorAll(".support-card-container").forEach(t=>t.addEventListener("click",()=>k(t)))},H=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/money_vox.png"},{date:"22 Juillet 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/capital.png"},{date:"21 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/le_revenu.png"},{date:"22 Juillet 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/bfm_business.png"},{date:"21 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/le_revenu.png"},{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/money_vox.png"},{date:"22 Juillet 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/bfm_business.png"},{date:"22 Juillet 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/capital.png"},{date:"22 Juillet 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/bfm_business.png"},{date:"22 Juillet 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/capital.png"},{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/money_vox.png"},{date:"21 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/le_revenu.png"},{date:"21 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"/assets/logos/le_revenu.png"}],D=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),ue=Math.ceil(H.length/4);D.innerHTML="";for(let e=1;e<=ue;e++)D.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${e===1?"activePage":""}' data-attr="${e}" >${e}</p>
        `;const f=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");f.forEach(e=>e.addEventListener("click",t=>{f.forEach(r=>r.classList.remove("activePage")),J(t.target.getAttribute("data-attr"))}));const w=document.querySelector(".alta-news-talking-about-container__left-container__news-container");function J(e){f.forEach(t=>{t.getAttribute("data-attr")===e&&t.classList.add("activePage")}),w.innerHTML="",H.slice((e-1)*4,e*4).forEach(t=>w.innerHTML+=`
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
            <h3>${t.title}</h3>
            <p>${t.description}</p>
        </div>
    </div>  
`)}J(1);const G=[{date:"13 décembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:`
    Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. 
    </br></br>Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi`,logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:`Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises CONSTITUENT DES ZONES D’INVESTISSEMENT RECHERCHÉES POUR LES INVESTISSEURS EN QUÊTE DE RENDEMENT ET DE DIVERSIFICATION.
    </br></br>Par <b>Jean-Marie Souclier</b>, Président chez Sogenial`,logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:`AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?
    </br></br>Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM`,logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:`AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?
    </br></br>Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM`,logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:`AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?
    </br></br>Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM`,logoUrl:"/assets/images/parole-d-expert.png"}],Q=document.querySelector(".experts-voice-container__pages-navigation__pages-numbers"),ge=Math.ceil(G.length/3);Q.innerHTML="";for(let e=1;e<=ge;e++)Q.innerHTML+=`
        <p class='experts-voice-container__pages-navigation__pages-numbers__btn ${e===1?"activePage":""}' data-attr="${e}" >${e}</p>
        `;const v=document.querySelectorAll(".experts-voice-container__pages-navigation__pages-numbers__btn");v.forEach(e=>e.addEventListener("click",t=>{v.forEach(r=>r.classList.remove("activePage")),X(t.target.getAttribute("data-attr"))}));const z=document.querySelector(".experts-voice-container__news-container");function X(e){v.forEach(t=>{t.getAttribute("data-attr")===e&&t.classList.add("activePage")}),z.innerHTML="",G.slice((e-1)*3,e*3).forEach(t=>z.innerHTML+=`
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
            <h3>${t.title}</h3>
            <p>${t.description}</p>
        </div>
    </div>  
`)}X(1);
