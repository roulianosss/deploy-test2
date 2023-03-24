const managementOthersCardsExplainations = document.querySelector(".management-others-card__explainations")

if (managementOthersCardsExplainations) {
    let maxHeight = 0
    const explanations = managementOthersCardsExplainations.querySelectorAll(".management-others-card__explaination")

    for (let i = 0; i < explanations.length; i++) {
        const explanation = explanations[i]
        const explanationHeight = explanation.offsetHeight
        if (explanationHeight > maxHeight) {
            maxHeight = explanationHeight
        }
    }
    managementOthersCardsExplainations.style.setProperty("height", `calc(${maxHeight}px + 2*var(--spacing-8))`)
}

const managementOthersCardsLinks = document.querySelectorAll(".management-others-card__link")

if (managementOthersCardsLinks) {
    managementOthersCardsLinks.forEach((managementOthersCardsLink) => {
            let name = managementOthersCardsLink.dataset.name
            let explaination = managementOthersCardsExplainations.querySelector(".management-others-card__explaination[data-name=" + name + "]")

            managementOthersCardsLink.addEventListener("mouseenter", () => {
                explaination.classList.add("active")
            })

            managementOthersCardsLink.addEventListener("mouseleave", () => {
                explaination.classList.remove("active")
            })
        }
    )
}