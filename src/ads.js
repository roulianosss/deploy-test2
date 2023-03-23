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
import awardItem from "./2_patterns/award-item/template.html?raw"
import feeCard from "./2_patterns/fee-card/template.html?raw"
import breadcrumb from "./2_patterns/breadcrumb/template.html?raw"

const patterns = [
    {
        name: "keypointCard",
        template: keypointCard
    },
    {
        name: "articleCard",
        template: articleCard
    },
    {
        name: "awardItem",
        template: awardItem
    },
    {
        name: "feeCard",
        template: feeCard
    },
    {
        name: "breadcrumb",
        template: breadcrumb
    }
]

// BLOCKS
// import header from "./3_blocks/header/template.html?raw"
import footer from "./3_blocks/footer/template.html?raw"
import homeHeroBanner from "./3_blocks/home-hero-banner/template.html?raw"
import promoBanner from "./3_blocks/promo-banner/template.html?raw"
import companyValueSection from "./3_blocks/company-value-section/template.html?raw"
import advicesSection from "./3_blocks/advices-section/template.html?raw"
import insurancePartnersSection from "./3_blocks/insurance-partners-section/template.html?raw"
import investmentDisclaimerSection from "./3_blocks/investment-disclaimer-section/template.html?raw"
import awardsSection from "./3_blocks/awards-section/template.html?raw"
import reviewsSection from "./3_blocks/reviews-section/template.html?raw"
import partnerNewsSection from "./3_blocks/partner-news-section/template.html?raw"
import productHeroBanner from "./3_blocks/product-hero-banner/template.html?raw"
import productInsurancePartnerSection from "./3_blocks/product-insurance-partner-section/template.html?raw"
import productContractualDocumentationSection
    from "./3_blocks/product-contractual-documentation-section/template.html?raw"
import productAdvantagesSection from "./3_blocks/product-advantages-section/template.html?raw"
import productFeesSection from "./3_blocks/product-fees-section/template.html?raw"
import faqRedirectionSection from "./3_blocks/faq-redirection-section/template.html?raw"
import assetsSupport from "./3_blocks/assets-support/template.html?raw"

const blocks = [
    {
        name: "footer",
        template: footer
    },
    {
        name: "homeHeroBanner",
        template: homeHeroBanner
    },
    {
        name: "promoBanner",
        template: promoBanner
    },
    {
        name: "companyValueSection",
        template: companyValueSection
    },
    {
        name: "advicesSection",
        template: advicesSection
    },
    {
        name: "insurancePartnersSection",
        template: insurancePartnersSection
    },
    {
        name: "investmentDisclaimerSection",
        template: investmentDisclaimerSection
    },
    {
        name: "awardsSection",
        template: awardsSection
    },
    {
        name: "reviewsSection",
        template: reviewsSection
    },
    {
        name: "partnerNewsSection",
        template: partnerNewsSection
    },
    {
        name: "productHeroBanner",
        template: productHeroBanner
    },
    {
        name: "productAdvantagesSection",
        template: productAdvantagesSection
    },
    {
        name: "productInsurancePartnerSection",
        template: productInsurancePartnerSection
    },
    {
        name: "productContractualDocumentationSection",
        template: productContractualDocumentationSection
    },
    {
        name: "productFeesSection",
        template: productFeesSection
    },
    {
        name: "faqRedirectionSection",
        template: faqRedirectionSection
    },
    {
        name: "assetsSupport",
        template: assetsSupport
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