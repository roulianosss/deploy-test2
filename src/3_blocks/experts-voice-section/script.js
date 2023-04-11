// data des news
const data = [
  {
    date: "13 novembre 2022",
    title: "Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",
    description: `Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. `,
    author: 'Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi',
    logoUrl: "/assets/images/parole-d-expert.png"
  },
  {
    date: "21 novembre 2022",
    title: "SCPI : en quoi l’immobilier en région est source d’opportunités ?",
    description: `Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises CONSTITUENT DES ZONES D’INVESTISSEMENT RECHERCHÉES POUR LES INVESTISSEURS EN QUÊTE DE RENDEMENT ET DE DIVERSIFICATION.`,
    author: 'Par <b>Jean-Marie Souclier</b>, Président chez Sogenial',
    logoUrl: "/assets/images/parole-d-expert.png"
  },
  {
    date: "13 décembre 2022",
    title: "Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",
    description: `AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?`,
    author: 'Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM',
    logoUrl: "/assets/images/parole-d-expert.png"
  },
  {
    date: "13 décembre 2022",
    title: "Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",
    description: `AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?`,
    author: 'Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM',
    logoUrl: "/assets/images/parole-d-expert.png"
  },
  {
    date: "13 décembre 2022",
    title: "Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",
    description: `AVEC LA REMONTÉE DES TAUX, LES RENDEMENTS DES OBLIGATIONS SONT REDEVENUS ATTRACTIFS. POURQUOI CELA CONSTITUE UN ENVIRONNEMENT FAVORABLE POUR LES FONDS À ÉCHÉANCE ?`,
    author: 'Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM',
    logoUrl: "/assets/images/parole-d-expert.png"
  },
];

// Création des buttons de navigation des pages
const pagesNavigationContainer = document.querySelector(
  ".experts-voice-container__pages-navigation__pages-numbers"
);
const numberOfPages = Math.ceil(data.length / 3);
pagesNavigationContainer.innerHTML = "";
for (let i = 1; i <= numberOfPages; i++) {
  pagesNavigationContainer.innerHTML += `
        <p class='experts-voice-container__pages-navigation__pages-numbers__btn ${i === 1 ? "activePage" : ''}' data-attr="${i}" >${i}</p>
        `;
}
const allPagesBtns = document.querySelectorAll(
  ".experts-voice-container__pages-navigation__pages-numbers__btn"
);
allPagesBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    allPagesBtns.forEach((btn) => btn.classList.remove("activePage"));
    displayNews(e.target.getAttribute("data-attr"));
  })
);

//affichage des articles
const newsContainer = document.querySelector(
  ".experts-voice-container__news-container"
);
function displayNews(activePage) {
  
  allPagesBtns.forEach((btn) => {
    if (btn.getAttribute("data-attr") === activePage) {
      btn.classList.add("activePage");
    }
  });
  newsContainer.innerHTML = "";
  data.slice((activePage - 1) * 3, activePage * 3).forEach(
    (card) =>
      (newsContainer.innerHTML += `
        <div class="experts-voice-container__card">
        <div
        class="experts-voice-container__card__logo-container"
        >
            <img src="${card.logoUrl}" alt="logo">
        </div>
        <div
        class="experts-voice-container__card__informations-container"
        >
            <p>${card.date}</p>
            <h3><span class="experts-voice-container__card__informations-container__underline">${card.title}</h3></span>
            <p>${card.description}</p>
            <p>${card.author}</p>
        </div>
    </div>  
`)
  );
}
displayNews(1);
