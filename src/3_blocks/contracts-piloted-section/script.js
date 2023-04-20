if (document.querySelector(".contracts-piloted-section-container")) {
// mock-data
    const data = {
        assuranceVie: {
            titresVie: {
                prudent: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.13%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 1",
                        srri: 6,
                        percentageRate: "-5.53%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 2",
                        srri: 3,
                        percentageRate: "-3%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 3",
                        srri: 3,
                        percentageRate: "-3%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                balanced: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                dynamic: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 1",
                        srri: 6,
                        percentageRate: "-5.53%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ]
            },
            altaprofitsVie: {
                prudent: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 1",
                        srri: 6,
                        percentageRate: "-5.53%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 2",
                        srri: 7,
                        percentageRate: "-4.53%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 3",
                        srri: 6,
                        percentageRate: "-9.53%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 1",
                        srri: 6,
                        percentageRate: "-5.53%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                balanced: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                dynamic: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ]
            },
            digitalViePrime: {
                prudent: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                balanced: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                dynamic: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ]
            },
            espaceLuxVie: {
                prudent: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 1",
                        srri: 6,
                        percentageRate: "-5.53%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 2",
                        srri: 3,
                        percentageRate: "-3%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                balanced: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                dynamic: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    },
                    {
                        title: "Profil 1",
                        srri: 6,
                        percentageRate: "-5.53%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ]
            }
        },
        capitalisation: {
            titreCapi: {
                prudent: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                balanced: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                dynamic: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ]
            },
            altaprofitsCapitalisation: {
                prudent: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                balanced: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                dynamic: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ]
            },
            digitalCapiPrime: {
                prudent: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                balanced: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                dynamic: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ]
            }
        },
        planEpargneRetraite: {
            titrePER: {
                prudent: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                balanced: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ],
                dynamic: [
                    {
                        title: "Carte Blanche",
                        srri: 5,
                        percentageRate: "-7.33%",
                        informations: "Performances cumulées sur 5 ans",
                        iconUrl: "./assets/logos/lazard_freres_gestion--fit.svg"
                    }
                ]
            }
        }
    }

    const btnsFirstChoice = document.querySelectorAll(
        ".btns-container__first-choice-container__btn"
    )
    const btnsSecondChoiceContainer = document.querySelector(
        ".btns-container__second-choice-container"
    )
    const btnsSecondChoice = document.querySelectorAll(
        ".btns-container__second-choice-container__btns-type-second-choice-container__btn"
    )
    const btnsThirdChoice = document.querySelectorAll(
        ".filters-container__btns-container__btn"
    )
    const btnsTypeSecondChoiceContainer = document.querySelectorAll(
        ".btns-container__second-choice-container__btns-type-second-choice-container"
    )
    const resultsContainer = document.querySelector(".results-container")
    const btnsParameters = document.querySelectorAll(".toggle-button")
    const allCards = document.querySelectorAll(".card-container, .grid-row-body")
    const cardsContainer = document.querySelector(".cards-display-container")
    const arrayContainer = document.querySelector(".array-display-container")
    const allArrayRows = document.querySelectorAll(".grid-row-body")

    const distributionFundsArray = document.querySelector(".distribution-funds-array-section__btn")

    distributionFundsArray.addEventListener("click",
        handleClick)


    function handleClick() {
        console.dir(this)
        if (this.nextElementSibling.style.maxHeight) {

            console.dir(this.nextElementSibling)
            this.nextElementSibling.style.maxHeight = ""
            this.lastElementChild.style.transform = "rotate(0deg)"
        } else {
            const contentHeight = this.nextElementSibling.scrollHeight
            this.nextElementSibling.style.maxHeight = `${contentHeight}px`
            this.lastElementChild.style.transform = "rotate(180deg)"

        }
    }

//objet qui enregistre les choix de l'utilisateur
    const userChoices = {
        firstChoice: "",
        secondChoice: "",
        thirdChoice: "prudent"
    }

//Mise en place des events listener
    btnsFirstChoice.forEach((btn) =>
        btn.addEventListener("click",
            () => setActiveBtnFirstChoice(btn))
    )
    btnsSecondChoice.forEach((btn) =>
        btn.addEventListener("click",
            () => setActiveBtnSecondChoice(btn))
    )
    btnsThirdChoice.forEach((btn) =>
        btn.addEventListener("click",
            () => setActiveBtnThridChoice(btn))
    )
    btnsParameters.forEach((btn) =>
        btn.addEventListener("click",
            () => setActiveBtnParameter(btn))
    )
    allCards.forEach((card) =>
        card.addEventListener("click",
            () => setActiveCard(card))
    )
// allArrayRows.forEach((row) => row.addEventListener("click", () => setActiveRow(row)))

//fonction au clic du premier choix
    const setActiveBtnFirstChoice = (btn) => {
        userChoices.secondChoice = ""
        btnsSecondChoice.forEach((btn) => btn.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"))
        btnsFirstChoice.forEach((btn) => btn.classList.remove("btns-container__first-choice-container__btn--active"))
        btnsTypeSecondChoiceContainer.forEach((btn) => btn.classList.add("hidden"))
        btn.classList.add("btns-container__first-choice-container__btn--active")
        userChoices.firstChoice = btn.getAttribute("data-attr")
        btnsSecondChoiceContainer.classList.remove("hidden")
        document
            .querySelector(`.${btn.getAttribute("data-attr")}`)
            .classList
            .remove("hidden")
        displayCards()
    }

//fonction au clic du deuxieme choix
    const setActiveBtnSecondChoice = (btn) => {
        btnsSecondChoice.forEach((btn) => btn.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"))
        userChoices.secondChoice = btn.getAttribute("data-attr")
        btn.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")
        displayCards()
    }

//fonction au clic du troisième choix
    const setActiveBtnThridChoice = (btn) => {
        userChoices.thirdChoice = btn.getAttribute("data-attr")
        btnsThirdChoice.forEach((btn) => btn.classList.remove("filters-container__btns-container__btn--active"))
        btn.classList.add("filters-container__btns-container__btn--active")
        displayCards()
    }

//fonction qui affiche les cards
    const displayCards = () => {
        if (userChoices.firstChoice !== "" && userChoices.secondChoice !== "") {
            resultsContainer.classList.remove("hidden")
        } else {
            resultsContainer.classList.add("hidden")
        }
        arrayContainer.innerHTML = ``
        cardsContainer.innerHTML = ``
        const dataUserSelected =
            data[userChoices.firstChoice][userChoices.secondChoice][
                userChoices.thirdChoice
                ]
        dataUserSelected.map(
            (card) =>
                (cardsContainer.innerHTML += `
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${card.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${
                    card.srri === 1 ? "card-container__card-header__numbers-rating-container__number-rating-container--active" : ""
                }">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${
                    card.srri === 2 ? "card-container__card-header__numbers-rating-container__number-rating-container--active" : ""
                }">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${
                    card.srri === 3 ? "card-container__card-header__numbers-rating-container__number-rating-container--active" : ""
                }">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${
                    card.srri === 4 ? "card-container__card-header__numbers-rating-container__number-rating-container--active" : ""
                }">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${
                    card.srri === 5 ? "card-container__card-header__numbers-rating-container__number-rating-container--active" : ""
                }">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${
                    card.srri === 6 ? "card-container__card-header__numbers-rating-container__number-rating-container--active" : ""
                }">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${
                    card.srri === 7 ? "card-container__card-header__numbers-rating-container__number-rating-container--active" : ""
                }">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">7</p>
                  </div>
                </div>
              </div>
              <div class="card-container__card-informations">
                <p class="card-container__card-informations__percentage-rate">${
                    card.percentageRate
                }</p>
                <p class="card-container__card-informations__card-information-text">
                  ${card.informations}
                </p>
                <svg class="card-container__card-informations__logo">
                    <use href="${card.iconUrl}#logo"></use>
                </svg>
              </div>
            </div>
    `)
        )
        arrayContainer.innerHTML += `
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
    `
        dataUserSelected.map(
            (row) =>
                (arrayContainer.innerHTML += `
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${row.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${row.srri}</p>
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
    `)
        )
        document
            .querySelectorAll(".card-container, .grid-row-body")
            .forEach((card) =>
                card.addEventListener("click",
                    () => setActiveCard(card))
            )
    }

//fonction pour passer de l'affichage cards au tableau
    const setActiveBtnParameter = (btn) => {
        btnsParameters.forEach((btn) => {
            btn.classList.toggle("toggle-button--active")
        })
        displayResult()
    }

//fonction pour afficher la card cliqué
    const setActiveCard = (card) => {
        displayResult()
        document
            .querySelectorAll(".card-container, .grid-row-body")
            .forEach((card) => card.classList.remove("card-container--active"))
        card.classList.add("card-container--active")
    }

//affichage des resultat des choix utilisateur
    const displayResult = () => {
        btnsParameters.forEach((btn) => {
            if (
                btn.classList.contains("btn-parameter1") &&
                btn.classList.contains("toggle-button--active")
            ) {
                cardsContainer.classList.remove("hidden")
            } else {
                if (
                    btn.classList.contains("btn-parameter1") &&
                    !btn.classList.contains("toggle-button--active")
                ) {
                    cardsContainer.classList.add("hidden")
                }
            }
            if (
                btn.classList.contains("btn-parameter2") &&
                btn.classList.contains("toggle-button--active")
            ) {
                arrayContainer.classList.remove("hidden")
            } else {
                if (
                    btn.classList.contains("btn-parameter2") &&
                    !btn.classList.contains("toggle-button--active")
                ) {
                    arrayContainer.classList.add("hidden");
                }
            }
        });
    };
}