// COMPONENTS
import button from "./1_components/button/template.html?raw"
import iconButton from "./1_components/icon-button/template.html?raw"
import toggleButton from "./1_components/toggle-button/template.html?raw"
import tab from "./1_components/tab/template.html?raw"
import link from "./1_components/link/template.html?raw"
import fileLink from "./1_components/file-link/template.html?raw"
import tag from "./1_components/tag/template.html?raw"

const components = [
    {
        name: "button",
        template: button
    },
    {
        name: "iconButton",
        template: iconButton
    },
    {
        name: "toggleButton",
        template: toggleButton
    },
    {
        name: "tab",
        template: tab
    },
    {
        name: "link",
        template: link
    },
    {
        name: "fileLink",
        template: fileLink
    },
    {
        name: "tag",
        template: tag
    }

]

// PATTERNS
import keypointCard from "./2_patterns/keypoint-card/template.html?raw"
import articleCard from "./2_patterns/article-card/template.html?raw"

const patterns = [
    {
        name: "keypointCard",
        template: keypointCard
    },
    {
        name: "articleCard",
        template: articleCard
    }
]

// BLOCKS
// import header from "./3_blocks/header/template.html?raw"
// import footer from "./3_blocks/footer/template.html?raw"
import companyValueSection from "./3_blocks/company-value-section/template.html?raw"
import advicesSection from "./3_blocks/advices-section/template.html?raw"

const blocks = [
    {
        name: "companyValueSection",
        template: companyValueSection
    },
    {
        name: "advicesSection",
        template: advicesSection
    }
]


// RENDER

const categories = [
    {
        name: "components",
        value: components
    },
    {
        name: "patterns",
        value: patterns
    },
    {
        name: "blocks",
        value: blocks
    }
]

categories.forEach((category) => {

    const categorySection = document.createElement("section")
    categorySection.classList.add("ads")

    const categoryTitle = document.createElement("h3")
    categoryTitle.innerText = category.name.toUpperCase()
    categorySection.appendChild(categoryTitle)

    const categoryContainer = document.createElement("div")
    categoryContainer.classList.add("ads", category.name)
    categorySection.appendChild(categoryContainer)

    category.value.forEach((element) => {
        const elementSection = document.createElement("div")
        elementSection.id = element.name
        elementSection.classList.add("section", "ads")

        const elementTitle = document.createElement("h4")
        elementTitle.innerText = element.name
        elementSection.appendChild(elementTitle)

        const elementTemplate = document.createElement("div")
        elementTemplate.innerHTML = element.template
        elementTemplate.classList.add("sub-section", "ads")

        elementSection.appendChild(elementTemplate)

        categorySection.appendChild(elementSection)
    })

    document.querySelector("main.ads").appendChild(categorySection)
})