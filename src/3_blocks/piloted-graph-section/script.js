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

const graphContainer = document.querySelector(
  ".piloted-graph-section__graph-container"
);
const allGraphBtns = document.querySelectorAll(
  ".piloted-graph-section__btns-container__btn"
);

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

    const bar = document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${index}`)
    bar.style.maxHeight = `0`
    bar.style.opacity = `0`
    
    setTimeout(()=> {
      const bar = document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${index}`)
      bar.style.maxHeight = `${graphBarHeight}%`
    bar.style.opacity = `1`
    animateNumber(bar, graphBar.percentage, 500)
  }, 10)
  });
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
