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

components.forEach((component) => {
    const section = document.createElement("div")
    section.id = component.name
    section.classList.add("section", "ads")

    const title = document.createElement("h4")
    title.innerText = component.name
    section.appendChild(title)

    const template = document.createElement("div")
    template.innerHTML = component.template
    template.classList.add("sub-section", "ads")

    section.appendChild(template)

    document.querySelector(".components").appendChild(section)
})


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

patterns.forEach((pattern) => {
    const section = document.createElement("div")
    section.id = pattern.name
    section.classList.add("section", "ads")

    const title = document.createElement("h4")
    title.innerText = pattern.name
    section.appendChild(title)

    const template = document.createElement("div")
    template.innerHTML = pattern.template
    template.classList.add("sub-section", "ads")

    section.appendChild(template)

    document.querySelector(".patterns").appendChild(section)
})