if (document.querySelector(".piloted-graph-section")) {
  const data = [
    [
      {
        percentage: 3.3,
        description: "Prudent"
      },
      {
        percentage: 8.4,
        description: "Equilibré"
      },
      {
        percentage: 11.9,
        description: "Dynamique"
      }
    ],
    [
      {
        percentage: 5.3,
        description: "Prudent"
      },
      {
        percentage: 9.4,
        description: "Equilibré"
      },
      {
        percentage: 15.8,
        description: "Dynamique"
      }
    ],
    [
      {
        percentage: 7.3,
        description: "Prudent"
      },
      {
        percentage: 10.4,
        description: "Equilibré"
      },
      {
        percentage: 16.9,
        description: "Dynamique"
      }
    ]
  ];

  const conditionsData = {
    threeYear:
      "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur.",
    fiveYear:
      "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur.",
    origin:
      "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."
  };

  const element = document.querySelector(
    ".piloted-graph-section__btns-container"
  );
  // @todo debug pour affichage correct sur design system
  // const data = JSON.parse(element.getAttribute('data-content'));
  const graphContainer = document.querySelector(
    ".piloted-graph-section__graph-container"
  );
  //element.innerHTML = '';
  //data[0].forEach((donnee, i) => {
  //    let active = donnee['active'] == 1 ? 'piloted-graph-section__btns-container__btn--active' : '';
  //    element.innerHTML += '<div class="piloted-graph-section__btns-container__btn '+active+'" data-attr="'+i+'">'+donnee['titre']+'</div>';
  //});

  const conditionsText = document.querySelector(
    ".piloted-graph-section__conditions p"
  );

  const allGraphBtns = document.querySelectorAll(
    ".piloted-graph-section__btns-container__btn"
  );
  /*
      allGraphBtns.forEach((btn, index) => {
        btn.innerHTML = data[0][index]['titre'];
      });
    */
  allGraphBtns.forEach((btn) => btn.addEventListener("click", handleClick));

  function handleClick() {
    graphContainer.innerHTML = "";

    allGraphBtns.forEach((btn) =>
      btn.classList.remove("piloted-graph-section__btns-container__btn--active")
    );

    this.classList.add("piloted-graph-section__btns-container__btn--active");

    const btnActive = this.getAttribute("data-attr");
    const maxPercentage =
      data[btnActive][data[btnActive].length - 1].percentage;

    data[btnActive].forEach((graphBar, index) => {
      const graphBarHeight = (graphBar.percentage * 100) / maxPercentage;
      graphContainer.innerHTML += `
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${index}"

      >
        ${graphBar.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${graphBar.description}
      </div>
    </div>`;

      const bar = document.querySelector(
        `.piloted-graph-section__graph-container__bar-container__bar-graph--${index}`
      );
      bar.style.maxHeight = `0`;
      bar.style.opacity = `0`;

      setTimeout(() => {
        const bar = document.querySelector(
          `.piloted-graph-section__graph-container__bar-container__bar-graph--${index}`
        );
        bar.style.maxHeight = `${graphBarHeight}%`;
        bar.style.opacity = `1`;
        animateNumber(bar, graphBar.percentage, 500);
      }, 10);
    });
    switch (btnActive) {
      case "0":
        conditionsText.textContent = conditionsData.threeYear;
        break;
      case "1":
        conditionsText.textContent = conditionsData.fiveYear;
        break;
      case "2":
        conditionsText.textContent = conditionsData.origin;
        break;
      default:
        break;
    }
  }

  function animateNumber(element, endValue, duration) {
    const startValue = 0;
    const interval = 10;
    const iterations = duration / interval;
    let currentValue = startValue;
    const increment = (endValue - startValue) / iterations;

    function updateValue() {
      currentValue += increment;
      if (currentValue >= endValue) {
        element.textContent = `${endValue} %`;
      } else {
        element.textContent = `${currentValue.toFixed(1)} %`;
        setTimeout(updateValue, interval);
      }
    }
    updateValue();
  }

  const maxPercentage = data[1][data[1].length - 1].percentage;
  data[1].forEach((graphBar) => {
    const graphBarHeight = (graphBar.percentage * 100) / maxPercentage;
    graphContainer.innerHTML += `
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${graphBarHeight}%"
      >
        ${graphBar.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${graphBar.description}
      </div>
    </div>
        `;
  });
}
