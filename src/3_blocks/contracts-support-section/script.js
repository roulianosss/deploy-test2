// mock-data
const data = {
  assuranceVie: {
    titresVie: {
      euro: [
        {
          title: "Fonds euros SwissLife",
          percentageRate: "-7.83%",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/swisslife--fit.svg"
        }
      ]
    },
    digitalViePrime: {
      euro: [
        {
          title: "Suravenir Opportunité 2",
          percentageRate: "-7.83%",
          informations: "PPerformances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/swisslife--fit.svg"
        },
        {
          title: "Suravenir Rendement 2",
          percentageRate: "-6.83%",
          informations: "Performances nettes⁽¹⁾;en 2022",
          iconUrl: "./assets/logos/swisslife--fit.svg"
        }
      ]
    },
    altaprofitsVie: {
      euro: [
        {
          title: "Netissima",
          percentageRate: "Jusqu'à&nbsp;3.06%",
          informations:
            "Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",
          iconUrl: "./assets/logos/generali--fit.svg"
        },
        {
          title: "Eurossima",
          percentageRate: "1.30%(3)<br/>1.35%(4)",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/generali--fit.svg"
        }
      ]
    },
    espaceLuxVie: {
      euro: [
        {
          title: "Fonds Général",
          percentageRate: "-7.83%",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/generali--fit.svg"
        }
      ]
    }
  },
  capitalisation: {
    altaprofitsCapitalisation: {
      euro: [
        {
          title: "Netissima",
          percentageRate: "-7.83%",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/generali--fit.svg"
        },
        {
          title: "Eurossima",
          percentageRate: "-7.83%",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/generali--fit.svg"
        }
      ]
    },
    titreCapi: {
      euro: [
        {
          title: "Fonds euros Swisslife",
          percentageRate: "-7.83%",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/swisslife--fit.svg"
        }
      ]
    },
    digitalCapiPrime: {
      euro: [
        {
          title: "Suravenir Opportunité 2",
          percentageRate: "-7.83%",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/swisslife--fit.svg"
        },
        {
          title: "Suravenir Rendement 2",
          percentageRate: "-5.83%",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/swisslife--fit.svg"
        }
      ]
    }
  },
  planEpargneRetraite: {
    titrePER: {
      euro: [
        {
          title: "Fonds euros SwissLife spécial PER",
          percentageRate: "-7.83%",
          informations: "Performances nettes⁽¹⁾ en 2022",
          iconUrl: "./assets/logos/swisslife--fit.svg"
        }
      ]
    }
  }
};

//objet qui enregistre les choix de l'utilisateur
const userChoices = {
  firstChoice: "",
  secondChoice: "",
  thirdChoice: ""
};

//Mise en place des events listener
const btnsFirstChoice = document.querySelectorAll(
  ".support-btns-container__first-choice-container__btn"
);
const btnsSecondChoiceContainer = document.querySelector(
  ".support-btns-container__second-choice-container"
);
const btnsTypeSecondChoiceContainer = document.querySelectorAll(
  ".support-btns-container__second-choice-container__btns-type-second-choice-container"
);
const btnsThirdChoiceContainer = document.querySelector(
  ".btns-third-choice-container"
);
const btnsSecondChoice = document.querySelectorAll(
  ".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"
);
const btnsThirdChoice = document.querySelectorAll(".btns-third-choice-container__btn");
const btnsAccountUnit = document.querySelectorAll(
  ".account-unit-container__btns-container__btn"
);
const euroFundContainer = document.querySelector(".euro-fund-container");
const growthFundContainer = document.querySelector(".growth-fund-container");
const netissimaContainer = document.querySelector(".euro-fund-container__netissima-container");
1;
const netissimaGrowthContainer = document.querySelector(
  ".growth-container"
);
const gridRows = document.querySelectorAll(".grid-row-body");
const structuredFundsContainer = document.querySelector(
  ".structured-fund-container"
);
const accountUnitContainer = document.querySelector(".account-unit-container");
const opcContainer = document.querySelector(".tunnel-array-container");
const cardsContainer = document.querySelector(".euro-fund-container__cards-container");
const allCards = document.querySelectorAll(".support-card-container");
const whiteCardPlaceholder = document.querySelector(".white-card-container");
const arrayPlaceholder = document.querySelector(".array-container");


//Mise en place des event listener
btnsFirstChoice.forEach((btn) =>
  btn.addEventListener("click", () => setActiveBtnFirstChoice(btn))
);
btnsSecondChoice.forEach((btn) =>
  btn.addEventListener("click", () => setActiveBtnSecondChoice(btn))
);
btnsThirdChoice.forEach((btn) =>
  btn.addEventListener("click", () => setActiveBtnThirdChoice(btn))
);
btnsAccountUnit.forEach((btn) =>
  btn.addEventListener("click", () => setActiveBtnAccountUnit(btn))
);
allCards.forEach((card) =>
  card.addEventListener("click", () => setActiveCard(card))
);
gridRows.forEach((row) =>
  row.addEventListener("click", () => setActiveRow(row))
);


//fonction au clic du premier choix
const setActiveBtnFirstChoice = (btn) => {
  btnsThirdChoice.forEach((btn) => btn.classList.remove("activeSupportSection"));
  btnsFirstChoice.forEach((btn) => btn.classList.remove("activeSupportSection"));
  euroFundContainer.classList.add("hidden");
  accountUnitContainer.classList.add('hidden')
  growthFundContainer.classList.add('hidden')
  btnsThirdChoiceContainer.classList.add("hidden");
  btn.classList.add("activeSupportSection");
  btnsSecondChoiceContainer.classList.remove("hidden");
  userChoices.secondChoice = "";
  userChoices.thirdChoice = "";
  btnsSecondChoice.forEach((btn) => btn.classList.remove("activeSupportSection"));
  btnsFirstChoice.forEach((btn) => btn.classList.remove("activeSupportSection"));
  btnsTypeSecondChoiceContainer.forEach((btn) => btn.classList.add("hidden"));
  btn.classList.add("activeSupportSection");
  userChoices.firstChoice = btn.getAttribute("data-attr");
  btnsSecondChoiceContainer.classList.remove("hidden");
  document
    .querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${btn.getAttribute("data-attr")}`)
    .classList.remove("hidden");
  displayConditionalThirdChoice();
};

//fonction au clic du deuxieme choix
const setActiveBtnSecondChoice = (btn) => {
  console.log('test')
  btnsThirdChoice.forEach((btn) => btn.classList.remove("activeSupportSection"));
  btnsThirdChoiceContainer.classList.add("hidden");
  euroFundContainer.classList.add("hidden");
  accountUnitContainer.classList.add('hidden')
  growthFundContainer.classList.add('hidden')
  btnsSecondChoice.forEach((btn) => btn.classList.remove("activeSupportSection"));
  userChoices.secondChoice = btn.getAttribute("data-attr");
  btn.classList.add("activeSupportSection");
  btnsThirdChoiceContainer.classList.remove("hidden");
  console.log(userChoices);
  displayConditionalThirdChoice();
  displayEuroCards();
};

//fonction au clic du troisième choix
const setActiveBtnThirdChoice = (btn) => {
  userChoices.thirdChoice = btn.getAttribute("data-attr");
  btnsThirdChoice.forEach((btn) => btn.classList.remove("activeSupportSection"));
  btn.classList.add("activeSupportSection");
  displayCategoryContainer(btn.getAttribute("data-attr"));
  displayEuroCards();
};

//fonction au clic sur les sous catégories de  l' unité de compte
const setActiveBtnAccountUnit = (btn) => {
  console.log(btnsAccountUnit);
  btnsAccountUnit.forEach((btn) => btn.classList.remove("activeSupportSection"));
  btn.classList.add("activeSupportSection");
  if (btn.getAttribute("data-attr") !== "structured-funds") {
    opcContainer.classList.remove("hidden");
    structuredFundsContainer.classList.add("hidden");
  } else {
    opcContainer.classList.add("hidden");
    structuredFundsContainer.classList.remove("hidden");
  }
};

//fonction pour afficher la card cliqué
const setActiveCard = (card) => {
  console.log('test')
  document
    .querySelectorAll(".support-card-container")
    .forEach((card) => card.classList.remove("activeSupportSection"));
  card.classList.add("activeSupportSection");
  console.log(card);
  if (card.getAttribute("data-attr") === "Netissima") {
    netissimaContainer.classList.remove("hidden");
  } else {
    netissimaContainer.classList.add("hidden");
  }
  if (card.getAttribute("data-attr") === "growth-netissima") {
    netissimaGrowthContainer.classList.remove("hidden");
  } else {
    netissimaGrowthContainer.classList.add("hidden");
  }
};

//fonction pour afficher la couleur de la ligne sur le tableau au clic
const setActiveRow = (row) => {
  gridRows.forEach((row) => row.classList.remove("activeSupportSection"));
  row.classList.add("activeSupportSection");
};

//affichage des resultat des choix utilisateur
const displayResult = () => {
  btnsParameters.forEach((btn) => {
    if (
      btn.classList.contains("btn-parameter1") &&
      btn.classList.contains("activeSupportSection")
    ) {
      whiteCardPlaceholder.classList.remove("hidden");
    } else if (
      btn.classList.contains("btn-parameter1") &&
      !btn.classList.contains("activeSupportSection")
    ) {
      whiteCardPlaceholder.classList.add("hidden");
    }
    if (
      btn.classList.contains("btn-parameter2") &&
      btn.classList.contains("activeSupportSection")
    ) {
      arrayPlaceholder.classList.remove("hidden");
    } else if (
      btn.classList.contains("btn-parameter2") &&
      !btn.classList.contains("activeSupportSection")
    ) {
      arrayPlaceholder.classList.add("hidden");
    }
  });
};

//affiche les bouton disponible selon les choix utilisateur
const displayConditionalThirdChoice = () => {
  if (
    (userChoices.firstChoice === "assuranceVie" &&
      userChoices.secondChoice === "altaprofitsVie") ||
    (userChoices.firstChoice === "capitalisation" &&
      userChoices.secondChoice === "altaprofitsCapitalisation")
  ) {
    document
      .querySelector(".btns-third-choice-container__btn.growth")
      .classList.remove("hidden");
  } else {
    document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden");
  }
  if (
    userChoices.firstChoice !== "planEpargneRetraite" &&
    userChoices.secondChoice !== "titrePER"
  ) {
    document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden");
  } else {
    document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden");
  }
};

//affiche le resultat selon les categories (euro, croissance, unité de compte)
const displayCategoryContainer = (attribute) => {
  console.log("enter");
  if (attribute === "euro") {
    euroFundContainer.classList.remove("hidden");
    displayEuroCards();
  } else {
    euroFundContainer.classList.add("hidden");
  }
  if (attribute === "growth") {
    growthFundContainer.classList.remove("hidden");
  } else {
    growthFundContainer.classList.add("hidden");
  }
  if (attribute === "unit") {
    accountUnitContainer.classList.remove("hidden");
  } else {
    accountUnitContainer.classList.add("hidden");
  }
};

//display les card pour la categorie euro
const displayEuroCards = () => {
  cardsContainer.innerHTML = "";
  const dataUserSelected =
    data[userChoices.firstChoice][userChoices.secondChoice][
      userChoices.thirdChoice
    ];
  dataUserSelected?.map(
    (card) =>
      (cardsContainer.innerHTML += `
    <div class="support-card-container" data-attr="${card.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${card.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${card.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${card.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${card.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `)
  );
  document
    .querySelectorAll(".support-card-container")
    .forEach((card) =>
      card.addEventListener("click", () => setActiveCard(card))
    );
};
