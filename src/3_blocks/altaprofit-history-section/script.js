const data = [
  {
    year: "1999",
    description: `Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`
  },
  {
    year: "2000",
    description: `Création et développement de sa propre plate-forme technologique`
  },
  {
    year: "2000",
    description: `Création et développement de son robo-advisor`
  },
  {
    year: "2000",
    description: `Le 1er contrat d’assurance vie en ligne sans frais supplémentaire`
  },
  {
    year: "2001",
    description: `Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`
  },
  {
    year: "2001",
    description: `Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`
  },
  {
    year: "2006",
    description: `1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>`
  },
  {
    year: "2009",
    description: `Les obligations en direct pour les particuliers dans un contrat d’assurance vie`
  },
  {
    year: "2011",
    description: `1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>`
  },
  {
    year: "2015",
    description: `1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>`
  },
  {
    year: "2015",
    description: `1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>`
  },
  {
    year: "2020",
    description: `Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `
  },
  {
    year: "2020",
    description: `1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>`
  },
  {
    year: "2020",
    description: `Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers`
  },
  {
    year: "2022",
    description: `Enrichissement des contrats historiques d’assurance vie et de capitalisation `
  },
  {
    year: "2022",
    description: ` Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)`
  },
  {
    year: "2022",
    description: `Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>`
  }
];

data.reverse();
data.forEach((card) => {
  document.querySelector(
    ".history-section__cards-section__cards"
  ).innerHTML += `
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${card.year}</h3>
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
          ${card.description}
        </p>
      </div>
    </div>
  `;
});

const cardsContainer = document.querySelector(
  ".history-section__cards-section__cards"
);
const allCards = document.querySelectorAll(
  ".history-section__cards-section__cards__card"
);
const allArrows = document.querySelectorAll(
  ".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow"
);

allCards.forEach((card) => card.addEventListener("click", handleCardClick));
allArrows.forEach((arrow) => arrow.addEventListener("click", handleArrowClick));

let transformValue = 0;

function handleCardClick() {
  allCards.forEach((card) => {
    card.firstElementChild.style.backgroundColor = "";
    card.firstElementChild.firstElementChild.style.color = "";
  });
  const cardHeader = this.firstElementChild;
  cardHeader.style.backgroundColor = "#ff6442";
  cardHeader.firstElementChild.style.color = "#fff";
}

function handleArrowClick() {
  let limitTransform = 0;
  if (window.screen.width < 1280) {
    limitTransform = (allCards.length - 1) * -100;
  } else {
    limitTransform = (allCards.length - 4) * -100;
  }
  if (
    this.classList.contains("history-section__cards-section__right-arrow") &&
    transformValue > limitTransform
  ) {
    transformValue -= 100;
  } else if (
    this.classList.contains("history-section__cards-section__right-arrow") &&
    transformValue <= limitTransform
  ) {
    transformValue = 0;
  } else if (
    this.classList.contains("history-section__cards-section__left-arrow") &&
    transformValue < 0
  ) {
    transformValue += 100;
  } else if (
    this.classList.contains("history-section__cards-section__left-arrow") &&
    transformValue === 0
  ) {
    transformValue = limitTransform;
  }
  allCards.forEach(
    (card) => (card.style.transform = `translateX(${transformValue}%)`)
  );
}
