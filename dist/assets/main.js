const d=document.querySelector(".management-others-card__explainations");if(d){let e=0;const t=d.querySelectorAll(".management-others-card__explaination");for(let r=0;r<t.length;r++){const q=t[r].offsetHeight;q>e&&(e=q)}d.style.setProperty("height",`calc(${e}px + 2*var(--spacing-8))`)}const U=document.querySelectorAll(".management-others-card__link");U&&U.forEach(e=>{let t=e.dataset.name,r=d.querySelector(".management-others-card__explaination[data-name="+t+"]");e.addEventListener("mouseenter",()=>{r.classList.add("active")}),e.addEventListener("mouseleave",()=>{r.classList.remove("active")})});const R={speed:200},o=document.querySelector(".awards-section__content");if(o){const e=o.cloneNode(!0);o.classList.add("primary"),e.classList.add("secondary"),o.parentNode.appendChild(e);const t=o.querySelectorAll(".award-item").length;o.style.setProperty("animation",`awards-section--primary ${t*1e3/R.speed}s linear infinite`),e.style.setProperty("animation",`awards-section--secondary ${t*1e3/R.speed}s linear infinite`)}const te={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},k=document.querySelectorAll(".btns-container__first-choice-container__btn"),x=document.querySelector(".btns-container__second-choice-container"),y=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),M=document.querySelectorAll(".filters-container__btns-container__btn"),se=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),w=document.querySelector(".results-container"),C=document.querySelectorAll(".toggle-button"),re=document.querySelectorAll(".card-container, .grid-row-body"),u=document.querySelector(".cards-display-container"),c=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body");const a={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};k.forEach(e=>e.addEventListener("click",()=>ne(e)));y.forEach(e=>e.addEventListener("click",()=>ie(e)));M.forEach(e=>e.addEventListener("click",()=>ae(e)));C.forEach(e=>e.addEventListener("click",()=>oe()));re.forEach(e=>e.addEventListener("click",()=>I(e)));const ne=e=>{console.log(x),a.secondChoice="",y.forEach(t=>t.classList.remove("active")),k.forEach(t=>t.classList.remove("active")),se.forEach(t=>t.classList.add("hidden")),e.classList.add("active"),a.firstChoice=e.getAttribute("data-attr"),x.classList.remove("hidden"),document.querySelector(`.${e.getAttribute("data-attr")}`).classList.remove("hidden"),S()},ie=e=>{y.forEach(t=>t.classList.remove("active")),a.secondChoice=e.getAttribute("data-attr"),e.classList.add("active"),S()},ae=e=>{a.thirdChoice=e.getAttribute("data-attr"),M.forEach(t=>t.classList.remove("active")),e.classList.add("active"),S()},S=()=>{a.firstChoice!==""&&a.secondChoice!==""?w.classList.remove("hidden"):w.classList.add("hidden"),c.innerHTML="",u.innerHTML="";const e=te[a.firstChoice][a.secondChoice][a.thirdChoice];e.map(t=>u.innerHTML+=`
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
    `),c.innerHTML+=`
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
    `,e.map(t=>c.innerHTML+=`
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
    `),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.addEventListener("click",()=>I(t)))},oe=e=>{C.forEach(t=>{t.classList.toggle("toggle-button--active")}),F()},I=e=>{console.log("ok"),F(),document.querySelectorAll(".card-container, .grid-row-body").forEach(t=>t.classList.remove("active")),e.classList.add("active")},F=()=>{C.forEach(e=>{e.classList.contains("btn-parameter1")&&e.classList.contains("toggle-button--active")?u.classList.remove("hidden"):e.classList.contains("btn-parameter1")&&!e.classList.contains("toggle-button--active")&&u.classList.add("hidden"),e.classList.contains("btn-parameter2")&&e.classList.contains("toggle-button--active")?c.classList.remove("hidden"):e.classList.contains("btn-parameter2")&&!e.classList.contains("toggle-button--active")&&c.classList.add("hidden")})},ce={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},s={firstChoice:"",secondChoice:"",thirdChoice:""},h=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),T=document.querySelector(".support-btns-container__second-choice-container"),le=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),v=document.querySelector(".btns-third-choice-container"),A=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),m=document.querySelectorAll(".btns-third-choice-container__btn"),b=document.querySelectorAll(".account-unit-container__btns-container__btn"),_=document.querySelector(".euro-fund-container"),g=document.querySelector(".growth-fund-container"),$=document.querySelector(".euro-fund-container__netissima-container"),N=document.querySelector(".growth-container"),j=document.querySelectorAll(".grid-row-body"),z=document.querySelector(".structured-fund-container"),p=document.querySelector(".account-unit-container"),B=document.querySelector(".tunnel-array-container"),O=document.querySelector(".euro-fund-container__cards-container"),de=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container");document.querySelector(".array-container");h.forEach(e=>e.addEventListener("click",()=>ue(e)));A.forEach(e=>e.addEventListener("click",()=>_e(e)));m.forEach(e=>e.addEventListener("click",()=>ge(e)));b.forEach(e=>e.addEventListener("click",()=>pe(e)));de.forEach(e=>e.addEventListener("click",()=>D(e)));j.forEach(e=>e.addEventListener("click",()=>me(e)));const ue=e=>{m.forEach(t=>t.classList.remove("active")),h.forEach(t=>t.classList.remove("active")),_.classList.add("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),v.classList.add("hidden"),e.classList.add("active"),T.classList.remove("hidden"),s.secondChoice="",s.thirdChoice="",A.forEach(t=>t.classList.remove("active")),h.forEach(t=>t.classList.remove("active")),le.forEach(t=>t.classList.add("hidden")),e.classList.add("active"),s.firstChoice=e.getAttribute("data-attr"),T.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${e.getAttribute("data-attr")}`).classList.remove("hidden"),G()},_e=e=>{console.log("test"),m.forEach(t=>t.classList.remove("active")),v.classList.add("hidden"),_.classList.add("hidden"),p.classList.add("hidden"),g.classList.add("hidden"),A.forEach(t=>t.classList.remove("active")),s.secondChoice=e.getAttribute("data-attr"),e.classList.add("active"),v.classList.remove("hidden"),console.log(s),G(),P()},ge=e=>{s.thirdChoice=e.getAttribute("data-attr"),m.forEach(t=>t.classList.remove("active")),e.classList.add("active"),fe(e.getAttribute("data-attr")),P()},pe=e=>{console.log(b),b.forEach(t=>t.classList.remove("active")),e.classList.add("active"),e.getAttribute("data-attr")!=="structured-funds"?(B.classList.remove("hidden"),z.classList.add("hidden")):(B.classList.add("hidden"),z.classList.remove("hidden"))},D=e=>{console.log("test"),document.querySelectorAll(".support-card-container").forEach(t=>t.classList.remove("active")),e.classList.add("active"),console.log(e),e.getAttribute("data-attr")==="Netissima"?$.classList.remove("hidden"):$.classList.add("hidden"),e.getAttribute("data-attr")==="growth-netissima"?N.classList.remove("hidden"):N.classList.add("hidden")},me=e=>{j.forEach(t=>t.classList.remove("active")),e.classList.add("active")},G=()=>{s.firstChoice==="assuranceVie"&&s.secondChoice==="altaprofitsVie"||s.firstChoice==="capitalisation"&&s.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),s.firstChoice!=="planEpargneRetraite"&&s.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},fe=e=>{console.log("enter"),e==="euro"?(_.classList.remove("hidden"),P()):_.classList.add("hidden"),e==="growth"?g.classList.remove("hidden"):g.classList.add("hidden"),e==="unit"?p.classList.remove("hidden"):p.classList.add("hidden")},P=()=>{O.innerHTML="";const e=ce[s.firstChoice][s.secondChoice][s.thirdChoice];e==null||e.map(t=>O.innerHTML+=`
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
  `),document.querySelectorAll(".support-card-container").forEach(t=>t.addEventListener("click",()=>D(t)))},J=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"22 Juillet 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"21 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"22 Juillet 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"21 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"22 Juillet 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Juillet 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"22 Juillet 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Juillet 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"21 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],Q=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),he=Math.ceil(J.length/4);Q.innerHTML="";for(let e=1;e<=he;e++)Q.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${e===1?"activePage":""}' data-attr="${e}" >${e}</p>
        `;const E=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");E.forEach(e=>e.addEventListener("click",t=>{E.forEach(r=>r.classList.remove("activePage")),X(t.target.getAttribute("data-attr"))}));const H=document.querySelector(".alta-news-talking-about-container__left-container__news-container");function X(e){E.forEach(t=>{t.getAttribute("data-attr")===e&&t.classList.add("activePage")}),H.innerHTML="",J.slice((e-1)*4,e*4).forEach(t=>H.innerHTML+=`
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
`)}X(1);const W=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises CONSTITUENT DES ZONES D’INVESTISSEMENT RECHERCHÉES POUR LES INVESTISSEURS EN QUÊTE DE RENDEMENT ET DE DIVERSIFICATION.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],Z=document.querySelector(".experts-voice-container__pages-navigation__pages-numbers"),ve=Math.ceil(W.length/3);Z.innerHTML="";for(let e=1;e<=ve;e++)Z.innerHTML+=`
        <p class='experts-voice-container__pages-navigation__pages-numbers__btn ${e===1?"activePage":""}' data-attr="${e}" >${e}</p>
        `;const L=document.querySelectorAll(".experts-voice-container__pages-navigation__pages-numbers__btn");L.forEach(e=>e.addEventListener("click",t=>{L.forEach(r=>r.classList.remove("activePage")),Y(t.target.getAttribute("data-attr"))}));const V=document.querySelector(".experts-voice-container__news-container");function Y(e){L.forEach(t=>{t.getAttribute("data-attr")===e&&t.classList.add("activePage")}),V.innerHTML="",W.slice((e-1)*3,e*3).forEach(t=>V.innerHTML+=`
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
`)}Y(1);const be=document.querySelectorAll(".accordion-container__accordion-btn"),Ee=document.querySelectorAll(".accordion-container__content__question-container__question");Ee.forEach(e=>e.addEventListener("click",K));be.forEach(e=>e.addEventListener("click",K));function K(e){if(this.nextElementSibling.style.maxHeight){this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`,console.log(this.parentElement.parentElement.style.scrollHeight)):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="");return}else this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200),console.log(this.parentElement.parentElement.style.maxHeight)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD")}const ee=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];ee.reverse();ee.forEach(e=>{document.querySelector(".history-section__cards-section__cards").innerHTML+=`
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${e.year}</h3>
        <svg
          class="right-arrow"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.9449 12.9688C16.5262 12.9688 19.4294 10.0657 19.4294 6.48442C19.4294 2.90317 16.5262 0 12.9449 0C9.3637 0 6.46052 2.90317 6.46052 6.48442C6.46052 7.82307 6.86616 9.06698 7.56123 10.0999L0.125 16.6781L1.45015 18.1761L8.91963 11.5685C10.0255 12.4453 11.4241 12.9688 12.9449 12.9688Z"
            fill="#001329"
          />
        </svg>
      </div>
      <div class="history-section__cards-section__cards__card__body">
        <p>
          ${e.description}
        </p>
      </div>
    </div>
  `});document.querySelector(".history-section__cards-section__cards");const l=document.querySelectorAll(".history-section__cards-section__cards__card"),Le=document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow");l.forEach(e=>e.addEventListener("click",ye));Le.forEach(e=>e.addEventListener("click",Ce));let i=0;function ye(){l.forEach(t=>{t.firstElementChild.style.backgroundColor="",t.firstElementChild.firstElementChild.style.color=""});const e=this.firstElementChild;e.style.backgroundColor="#ff6442",e.firstElementChild.style.color="#fff"}function Ce(){let e=0;window.screen.width<1280?e=(l.length-1)*-100:e=(l.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&i>e?i-=100:this.classList.contains("history-section__cards-section__right-arrow")&&i<=e?i=0:this.classList.contains("history-section__cards-section__left-arrow")&&i<0?i+=100:this.classList.contains("history-section__cards-section__left-arrow")&&i===0&&(i=e),l.forEach(t=>t.style.transform=`translateX(${i}%)`)}const Se=[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}];console.log(document.querySelector(".discover-our-job__card-section__cards"));Se.forEach(e=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
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
  `});document.querySelector(".discover-our-job__card-section__cards");const f=document.querySelectorAll(".discover-our-job__card-section__cards__card"),Ae=document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow");Ae.forEach(e=>e.addEventListener("click",Pe));let n=0;function Pe(){let e=0;e=(f.length-1)*-100,console.log(n,e,f.length),this.classList.contains("discover-our-job__card-section__right-arrow")&&n>e?n-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&n<=e?n=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&n<0?n+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&n===0&&(n=e),f.forEach(t=>t.style.transform=`translateX(${n}%)`)}const qe=document.querySelectorAll(".join-the-team-section__offer-container__offer-btn");qe.forEach(e=>e.addEventListener("click",Ue));function Ue(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const e=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${e}px`,this.lastElementChild.style.transform="rotate(180deg)"}}
