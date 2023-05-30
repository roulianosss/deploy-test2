document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector(".piloted-graph-section")) {
        const defaultData = [
            [
                {
                    titre : "Sur 3 ans",
                    percentage: 3.3,
                    description: "Profil 1<br>Lazard Frères Gestion<br>SRI 3"
                },
                {
                    titre : "Sur 5 ans",
                    percentage: 8.4,
                    description: "Profil 7<br>Lazard Frères Gestion<br>SRI 4",
                    active: true
                },
                {
                    titre : "depuis l'origine",
                    percentage: 11.9,
                    description: "Conviction<br>Generali Wealth Solutions<br>SRI 5"
                }
            ],
            [
                {
                    percentage: 5.3,
                    description: "Profil 1<br>Lazard Frères Gestion<br>SRI 3"
                },
                {
                    percentage: 9.4,
                    description: "Profil 7<br>Lazard Frères Gestion<br>SRI 4"
                },
                {
                    percentage: 15.8,
                    description: "Conviction<br>Generali Wealth Solutions<br>SRI 5"
                }
            ],
            [
                {
                    percentage: 7.3,
                    description: "Profil 1<br>Lazard Frères Gestion<br>SRI 3"
                },
                {
                    percentage: 10.4,
                    description: "Profil 7<br>Lazard Frères Gestion<br>SRI 4"
                },
                {
                    percentage: 16.9,
                    description: "Conviction<br>Generali Wealth Solutions<br>SRI 5"
                }
            ]
        ];
        const parsedData = JSON.stringify(defaultData);
        const element = document.querySelector(".piloted-graph-section__btns-container");
        if(element.getAttribute('data-content').length == 0){
            element.setAttribute("data-content", parsedData);
        }

        const data = JSON.parse(JSON.parse(element.getAttribute('data-content').replace(/\\r\\n/g, '')));
        const graphContainer = document.querySelector(
            ".piloted-graph-section__graph-container"
        )
        element.innerHTML = '';
        data[0].forEach((donnee, i) => {
            let active = donnee['active'] == 1 ? 'piloted-graph-section__btns-container__btn--active' : '';
            element.innerHTML += '<div class="piloted-graph-section__btns-container__btn '+active+'" data-attr="'+i+'">'+donnee['titre']+'</div>';
        });

        const allGraphBtns = document.querySelectorAll(
            ".piloted-graph-section__btns-container__btn"
        )

        allGraphBtns.forEach((btn, index) => {
            btn.innerHTML = data[0][index]['titre'];
        });
        /* */
        allGraphBtns.forEach((btn) => btn.addEventListener("click",
            handleClick))

        function handleClick() {
            graphContainer.innerHTML = ""

            allGraphBtns.forEach((btn) =>
                btn.classList.remove("piloted-graph-section__btns-container__btn--active")
            )

            this.classList.add("piloted-graph-section__btns-container__btn--active")

            const btnActive = this.getAttribute("data-attr")
            const maxPercentage =
                data[btnActive][data[btnActive].length - 1].percentage

            data[btnActive].forEach((graphBar,
                                     index
            ) => {
                const graphBarHeight = (graphBar.percentage * 100) / maxPercentage
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
    </div>`

                const bar = document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${index}`)
                bar.style.maxHeight = `0`
                bar.style.opacity = `0`

                setTimeout(() => {
                        const bar = document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${index}`)
                        bar.style.maxHeight = `${graphBarHeight}%`
                        bar.style.opacity = `1`
                        animateNumber(bar,
                            graphBar.percentage,
                            500)
                    },
                    10)
            })
        }

        function animateNumber(element,
                               endValue,
                               duration
        ) {
            const startValue = 0
            const interval = 10
            const iterations = duration / interval
            let currentValue = startValue
            const increment = (endValue - startValue) / iterations

            function updateValue() {
                currentValue += increment
                if (currentValue >= endValue) {
                    element.textContent = `${endValue} %`
                } else {
                    element.textContent = `${currentValue.toFixed(1)} %`
                    setTimeout(updateValue,
                        interval)
                }
            }

            updateValue()
        }

        const maxPercentage = data[1][data[1].length - 1].percentage
        data[1].forEach((graphBar) => {
            const graphBarHeight = (graphBar.percentage * 100) / maxPercentage
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
        `
        })

    }
});