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
import itemCard from "./2_patterns/item-card/template.html?raw"


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
        name: "itemCard",
        template: itemCard
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
import header from "./3_blocks/header/template.html?raw"
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
import heroBanner from "./3_blocks/hero-banner/template.html?raw"
import productInsurancePartnerSection from "./3_blocks/product-insurance-partner-section/template.html?raw"
import productContractualDocumentationSection
    from "./3_blocks/product-contractual-documentation-section/template.html?raw"
import productManagementSection from "./3_blocks/product-management-section/template.html?raw"
import productAdvantagesSection from "./3_blocks/product-advantages-section/template.html?raw"
import productFeesSection from "./3_blocks/product-fees-section/template.html?raw"
import faqRedirectionSection from "./3_blocks/faq-redirection-section/template.html?raw"
import managementAdvantagesSection from "./3_blocks/management-advantages-section/template.html?raw"
import managementPlusSection from "./3_blocks/management-plus-section/template.html?raw"
import managementOthersOverviewSection from "./3_blocks/management-others-overview-section/template.html?raw"
import managementGuidedOverviewSection from "./3_blocks/management-guided-overview-section/template.html?raw"
import managementGuidedPartnersSection from "./3_blocks/management-guided-partners-section/template.html?raw"
import contractsPilotedSection from "./3_blocks/contracts-piloted-section/template.html?raw"
import contractsSupportSection from "./3_blocks/contracts-support-section/template.html?raw"
import altaNewsTalkingAboutSection from "./3_blocks/alta-news-talking-about-section/template.html?raw"
import webconferencesSection from "./3_blocks/webconferences-section/template.html?raw"
import pressSection from "./3_blocks/press-section/template.html?raw"
import expertsVoiceSection from "./3_blocks/experts-voice-section/template.html?raw"
import discoverIntegrationProgramSection from "./3_blocks/discover-integration-program-section/template.html?raw"
import questionsSection from "./3_blocks/questions-section/template.html?raw"
import squadSection from "./3_blocks/squad-section/template.html?raw"
import altaInNumberSection from "./3_blocks/alta-in-number-section/template.html?raw"
import altaprofitHistorySection from "./3_blocks/altaprofit-history-section/template.html?raw"
import reasonToJoinSection from "./3_blocks/reason-to-join-section/template.html?raw"
import discoverOurJobSection from "./3_blocks/discover-our-job-section/template.html?raw"
import joinTheTeamSection from "./3_blocks/join-the-team-section/template.html?raw"
import pilotedGraphSection from "./3_blocks/piloted-graph-section/template.html?raw"

const blocks = [
    {
        name: "header",
        template: header
    },
    {
        name: "footer",
        template: footer
    },
    {
        name: "wrapper (66/33) (50/50) (33/66)",
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
        name: "heroBanner (Default, Catchline, Product)",
        template: heroBanner
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
        name: "managementOthersOverviewSection",
        template: managementOthersOverviewSection
    },
    {
        name: "managementGuidedOverviewSection",
        template: managementGuidedOverviewSection
    },
    {
        name: "managementGuidedPartnersSection",
        template: managementGuidedPartnersSection
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
    },
    {
        name: "altaprofitHistorySection",
        template: altaprofitHistorySection
    },
    {
        name: "reasonToJoinSection",
        template: reasonToJoinSection
    },
    {
        name: "discoverOurJobSection",
        template: discoverOurJobSection
    },
    {
        name: "joinTheTeamSection",
        template: joinTheTeamSection
    },
    {
        name: "pilotedGraphSection",
        template: pilotedGraphSection
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
    categorySection.classList.add("ads",
        category.name)

    const categoryTitle = document.createElement("h3")
    categoryTitle.innerText = category.name.toUpperCase()
    categorySection.appendChild(categoryTitle)

    category.value.forEach((element) => {
        const elementSection = document.createElement("div")
        elementSection.id = element.name
        elementSection.classList.add("section",
            "ads")

        const elementTitle = document.createElement("h4")
        elementTitle.innerText = element.name
        elementSection.appendChild(elementTitle)

        const elementTemplate = document.createElement("div")
        elementTemplate.innerHTML = element.template
        elementTemplate.classList.add("sub-section",
            "ads")

        elementSection.appendChild(elementTemplate)

        categorySection.appendChild(elementSection)
    })

    document.querySelector("main.ads")
        .appendChild(categorySection)
})