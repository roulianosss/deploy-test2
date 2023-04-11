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
import breadcrumb from "./2_patterns/breadcrumb/template.html?raw"
import tabsNavigation from "./2_patterns/tabs-navigation/template.html?raw"
import keypointCard from "./2_patterns/keypoint-card/template.html?raw"
import articleCard from "./2_patterns/article-card/template.html?raw"
import awardItem from "./2_patterns/award-item/template.html?raw"
import feeCard from "./2_patterns/fee-card/template.html?raw"
import managementGuidedCard from "./2_patterns/management-guided-card/template.html?raw"
import managementOthersCard from "./2_patterns/management-others-card/template.html?raw"


const patterns = [
    {
        name: "breadcrumb",
        template: breadcrumb
    },
    {
        name: "tabsNavigation",
        template: tabsNavigation
    },
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
        name: "managementGuidedCard",
        template: managementGuidedCard
    },
    {
        name: "managementOthersCard",
        template: managementOthersCard
    }
]

// BLOCKS
// import header from "./3_blocks/header/template.html?raw"
import footer from "./3_blocks/footer/template.html?raw"
import wrapper from "./3_blocks/wrapper/template.html?raw"
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
import productManagementSection from "./3_blocks/product-management-section/template.html?raw"
import productAdvantagesSection from "./3_blocks/product-advantages-section/template.html?raw"
import productFeesSection from "./3_blocks/product-fees-section/template.html?raw"
import faqRedirectionSection from "./3_blocks/faq-redirection-section/template.html?raw"
import managementAdvantagesSection from "./3_blocks/management-advantages-section/template.html?raw"
import managementPlusSection from "./3_blocks/management-plus-section/template.html?raw"
import assetsSupportSection from "./3_blocks/assets-support-section/template.html?raw"
import assetsPilotedSection from "./3_blocks/assets-piloted-section/template.html?raw"
import partnerPilotedSection from "./3_blocks/partner-piloted-section/template.html?raw"
import headerPilotedSection from "./3_blocks/header-piloted-section/template.html?raw"
import headerSupportSection from "./3_blocks/header-support-section/template.html?raw"
import contractsPilotedSection from "./3_blocks/contracts-piloted-section/template.html?raw"
import contractsSupportSection from "./3_blocks/contracts-support-section/template.html?raw"
import altaNewsTalkingAboutSection from "./3_blocks/alta-news-talking-about-section/template.html?raw"
import webconferencesSection from "./3_blocks/webconferences-section/template.html?raw"
import pressSection from "./3_blocks/press-section/template.html?raw"
import expertsVoiceSection from "./3_blocks/experts-voice-section/template.html?raw"
import headerExpertsVoiceSection from "./3_blocks/header-experts-voice-section/template.html?raw"
import discoverIntegrationProgramSection from "./3_blocks/discover-integration-program-section/template.html?raw"
import questionsSection from "./3_blocks/questions-section/template.html?raw"
import squadSection from "./3_blocks/squad-section/template.html?raw"
import altaInNumberSection from "./3_blocks/alta-in-number-section/template.html?raw"

const blocks = [
    {
        name: "footer",
        template: footer
    },
    {
        name: "wrapper",
        template: wrapper
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
        name: "productManagementSection",
        template: productManagementSection
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
        name: "managementAdvantagesSection",
        template: managementAdvantagesSection
    },
    {
        name: "managementPlusSection",
        template: managementPlusSection
    },
    {
        name: "assetsSupportSection",
        template: assetsSupportSection
    },
    {
        name: "assetsPilotedSection",
        template: assetsPilotedSection
    },
    {
        name: "partnerPilotedSection",
        template: partnerPilotedSection
    },
    {
        name: "headerPilotedSection",
        template: headerPilotedSection
    },
    {
        name: "headerSupportSection",
        template: headerSupportSection
    },
    {
        name: "contractsPilotedSection",
        template: contractsPilotedSection
    },
    {
        name: "contractsSupportSection",
        template: contractsSupportSection
    },
    {
        name: "altaNewsTalkingAboutSection",
        template: altaNewsTalkingAboutSection
    },
    {
        name: "webconferencesSection",
        template: webconferencesSection
    },
    {
        name: "pressSection",
        template: pressSection
    },
    {
        name: "expertsVoiceSection",
        template: expertsVoiceSection
    },
    {
        name: "headerExpertsVoiceSection",
        template: headerExpertsVoiceSection
    },
    {
        name: "discoverIntegrationProgramSection",
        template: discoverIntegrationProgramSection
    },
    {
        name: "questionsSection",
        template: questionsSection
    },
    {
        name: "squadSection",
        template: squadSection
    },
    {
        name: "altaInNumberSection",
        template: altaInNumberSection
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