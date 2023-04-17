const managementOthersCards = document.querySelectorAll(".management-others-card")

if (managementOthersCards) {
    let maxHeight = 0
    managementOthersCards.forEach((element) => {
        const explanations = element.querySelectorAll(".management-others-card__explaination")

        for (let i = 0;
             i < explanations.length;
             i++) {
            const explanation = explanations[i]
            const explanationHeight = explanation.offsetHeight
            if (explanationHeight > maxHeight) {
                maxHeight = explanationHeight
            }
        }

        element.querySelector(".management-others-card__explainations")
            .style
            .setProperty(
                "height",
                `calc(${maxHeight}px + var(--spacing-8))`
            )

        const links = element.querySelectorAll(".management-others-card__link")

        links.forEach((link) => {
            let name = link.dataset.name
            let explaination = element.querySelector(".management-others-card__explaination[data-name=" + name + "]")

            link.addEventListener("mouseenter",
                () => {
                    explaination.classList.add("active")
                })

            link.addEventListener("mouseleave",
                () => {
                    explaination.classList.remove("active")
                })
        })

    })
}