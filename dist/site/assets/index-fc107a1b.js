(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const F=`<a class="button button--primary" href="#"> Button</a>\r
\r
<a class="button button--primary button--small" href="#">Button</a>\r
\r
<a class="button button--secondary button--light-theme" href="#">Button</a>\r
\r
<a class="button button--secondary button--light-theme button--arrow" href="#">Button</a>\r
\r
<a class="button button--secondary button--light-theme button--small" href="#">Button</a>\r
\r
<a class="button button--secondary button--dark-theme" href="#">Button</a>\r
\r
<a class="button button--secondary button--dark-theme button--arrow" href="#">Button</a>\r
\r
<a class="button button--secondary button--dark-theme button--small" href="#">Button</a>\r
\r
<a class="button button--secondary button--dark-theme button--small button--arrow" href="#">Button</a>\r
\r
<button class="button button--secondary button--light-theme button--arrow" type="button">Button 'button'</button>\r
\r
<div class="input-button">\r
    <input class="button button--secondary button--light-theme button--arrow" type="submit" value="Button 'input'">\r
</div>\r
\r
<div class="input-button">\r
    <input class="button button--secondary button--dark-theme button--small button--arrow" type="submit"\r
           value="Button 'input'">\r
</div>\r
\r
\r
`,O=`<a class="icon-button icon-button--light-theme" href="#">\r
    <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
</a>\r
\r
<a class="icon-button icon-button--dark-theme" href="#">\r
    <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
</a>\r
`,H=`<button class="toggle-button toggle-button--primary">\r
    <span class="toggle-button__text">ToggleButton</span>\r
</button>\r
<button class="toggle-button toggle-button--primary toggle-button--active">\r
    <span class="toggle-button__text">ToggleButton</span>\r
</button>\r
\r
<button class="toggle-button toggle-button--secondary">\r
    <span class="toggle-button__text">ToggleButton</span>\r
</button>\r
<button class="toggle-button toggle-button--secondary toggle-button--active">\r
    <span class="toggle-button__text">ToggleButton</span>\r
</button>\r
\r
<button class="toggle-button toggle-button--secondary toggle-button--icon">\r
    <i class="toggle-button__icon fa-solid fa-grip"></i>\r
</button>\r
\r
<button class="toggle-button toggle-button--secondary toggle-button--icon toggle-button--active">\r
    <i class="toggle-button__icon fa-solid fa-grip"></i>\r
</button>\r
\r
`,$=`<a class="tab">\r
    <span class="tab__text">Tab</span>\r
</a>\r
\r
<button class="tab">\r
    <span class="tab__text">Tab</span>\r
</button>\r
\r
<button class="tab tab--active">\r
    <span class="tab__text">Tab</span>\r
</button>\r
\r
<button class="tab tab--pictogram">\r
    <svg class="tab__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <span class="tab__text">Tab</span>\r
</button>\r
\r
<button class="tab tab--active tab--pictogram">\r
    <svg class="tab__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <span class="tab__text">Tab</span>\r
</button>\r
\r
<button class="tab tab--active tab--pictogram tab--styled">\r
    <svg class="tab__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <span class="tab__text">Tab</span>\r
</button>`,J=`<a class="link" href="#">Link</a>\r
\r
<a class="link link--arrow" href="#">Link</a>`,Q='<a class="file-link" href="#">FileLink</a>',Y='<span class="tag">Tag</span>',W=`<div class="breadcrumb">\r
    <a class="link" href="#">Notre offre</a>\r
    <span class="breadcrumb__separator">/</span>\r
    <a class="link" href="#">Assurance vie</a>\r
    <span class="breadcrumb__separator">/</span>\r
    <a class="link" href="#">Altaprofits Vie</a>\r
</div>`,K=`<div class="tabs-navigation">\r
    <a class="tab tab--active" href="#">\r
        <span class="tab__text">L'essentiel</span>\r
    </a>\r
    <a class="tab" href="#">\r
        <span class="tab__text">J'investis</span>\r
    </a>\r
    <a class="tab" href="#">\r
        <span class="tab__text">Tarification</span>\r
    </a>\r
    <a class="tab" href="#">\r
        <span class="tab__text">Fonctionnement</span>\r
    </a>\r
</div>`,Z=`<div class="keypoint-card">\r
    <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <div class="keypoint-card__content">\r
        <h5 class="keypoint-card__title">Keypoint</h5>\r
        <p class="keypoint-card__description">A keypoint is a short and concise statement that summarizes the main idea\r
            of a text</p>\r
    </div>\r
</div>\r
\r
<div class="keypoint-card">\r
    <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <div class="keypoint-card__content">\r
        <p class="keypoint-card__description">A <b>keypoint</b> is a short and concise statement that <b>summarizes the\r
            main idea</b> of a text</p>\r
    </div>\r
</div>\r
\r
<div class="keypoint-card keypoint-card--small">\r
    <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <div class="keypoint-card__content">\r
        <h5 class="keypoint-card__title">Keypoint</h5>\r
        <p class="keypoint-card__description">A keypoint is a short and concise statement that summarizes the main idea\r
            of a text</p>\r
    </div>\r
</div>\r
\r
<div class="keypoint-card keypoint-card--large">\r
    <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <div class="keypoint-card__content">\r
        <h5 class="keypoint-card__title">Keypoint</h5>\r
        <p class="keypoint-card__description">A keypoint is a short and concise statement that summarizes the main idea\r
            of a text</p>\r
    </div>\r
</div>\r
`,X=`<a class="article-card" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <h5 class="article-card__title">Article</h5>\r
        <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit\r
            amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
    </div>\r
</a>\r
\r
<a class="article-card" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <h5 class="article-card__title">Article</h5>\r
        <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit\r
            amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
    </div>\r
    <div class="article-card__tags">\r
        <span class="tag">Category</span>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--reversed" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <div class="article-card__tags">\r
            <span class="tag">Category</span>\r
        </div>\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <h5 class="article-card__title">Article</h5>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--horizontal" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <h5 class="article-card__title">Article</h5>\r
        <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit\r
            amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
        <div class="article-card__tags">\r
            <span class="tag">Category</span>\r
        </div>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--background" href="#">\r
    <div class="article-card__content">\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <h5 class="article-card__title">Article</h5>\r
    </div>\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__tags">\r
        <span class="tag">Category</span>\r
        <span class="tag">Category</span>\r
    </div>\r
</a>\r
\r
`,nn=`<div class="award-item">\r
    <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
    <div class="award-item__content">\r
        <h5 class="award-item__title">Titres@PER</h5>\r
        <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
        <p class="award-item__jury">LE REVENU</p>\r
        <p class="award-item__date">2022</p>\r
    </div>\r
</div>\r
<div class="award-item">\r
    <img class="award-item__image" src="/assets/images/award_default.svg">\r
    <div class="award-item__content">\r
        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
        <p class="award-item__jury">LE PARTICULIER</p>\r
        <p class="award-item__date">2022</p>\r
    </div>\r
</div>\r
`,rn=`<div class="fee-card">\r
    <div class="fee-card__value">\r
        <span class="fee-card__number">0,30</span>\r
        <span class="fee-card__unit">%</span>\r
    </div>\r
    <p class="fee-card__list">Frais de mandat de gestion<br> du montant investi au titre de la Taxe<br> sur les\r
        transactions financières\r
    </p>\r
</div>\r
\r
<div class="fee-card fee-card--highlight">\r
    <div class="fee-card__value">\r
        <span class="fee-card__number">0</span>\r
        <span class="fee-card__unit">€</span>\r
    </div>\r
    <p class="fee-card__list">Frais d’entrée<br>Frais de versement<br>Frais d’arbitrage<br>Frais de sortie ou\r
        rachat\r
    </p>\r
</div>`,en=`<div class="management-guided-card">\r
    <div class="management-guided-card__content">\r
        <h4 class="management-guided-card__title">Gestion pilotée</h4>\r
        <p class="management-guided-card__description">Déléguez la gestion de votre épargne à l’assureur qui\r
            prend conseil auprès d’une société de gestion d’actifs</p>\r
        <div class="management-guided-card__logos">\r
            <svg class="logo">\r
                <use href="/assets/logos/generali_ws.svg#logo"></use>\r
            </svg>\r
            <svg class="logo">\r
                <use href="/assets/logos/lazard_freres_gestion.svg#logo"></use>\r
            </svg>\r
        </div>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir la gestion pilotée</a>\r
</div>`,sn=`<div class="management-others-card">\r
    <div class="management-others-card__content">\r
        <h4 class="management-others-card__title">Autres supports d’investissement</h4>\r
        <p class="management-others-card__description">Vous choisissez librement les supports d'investissement qui\r
            composent votre contrat puis les gérez en toute autonomie</p>\r
        <div class="management-others-card__links">\r
            <a class="management-others-card__link" data-name="fonds-euros" href="#">Fonds en euros</a>\r
            <a class="management-others-card__link" data-name="fonds-croissance" href="#">Fonds croissance</a>\r
            <a class="management-others-card__link" data-name="unites-compte" href="#">Unités de compte</a>\r
        </div>\r
        <div class="management-others-card__explainations">\r
            <div class="management-others-card__explaination" data-name="fonds-euros"><p>Géré par l’assureur, le <b><a\r
                    class="link" href="#">fonds en euros</a></b> propose une gestion prudente qui associe une garantie\r
                en capital et un rendement définitivement acquis annuellement</p></div>\r
            <div class="management-others-card__explaination" data-name="fonds-croissance"><p>Géré par l’assureur, le\r
                <b><a class="link" href="#">fonds en euros</a></b> propose une gestion prudente qui associe une\r
                garantie en capital et un rendement définitivement acquis annuellement</p></div>\r
            <div class="management-others-card__explaination" data-name="unites-compte"><p>Géré par l’assureur, le <b><a\r
                    class="link" href="#">fonds en euros</a></b> propose une gestion prudente qui associe une garantie\r
                en capital et un rendement définitivement acquis annuellement</p></div>\r
\r
        </div>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir les autres supports\r
        d’investissement</a>\r
</div>`,tn=`<footer class="footer">\r
    <div class="footer__socials socials">\r
        <h5 class="socials__title">Retrouvez nous sur les réseaux sociaux</h5>\r
        <div class="socials__content">\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-twitter"></i>\r
            </a>\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-facebook"></i>\r
            </a>\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-linkedin"></i>\r
            </a>\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-instagram"></i>\r
            </a>\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-youtube"></i>\r
            </a>\r
        </div>\r
    </div>\r
    <div class="footer__navigation navigation">\r
        <div class="navigation__project">\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Quel est votre projet d’épargne&nbsp;?</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Me construire un patrimoine</a></li>\r
                        <li><a class="link" href="#">Financer un projet</a></li>\r
                        <li><a class="link" href="#">Préparer ma retraite</a></li>\r
                        <li><a class="link" href="#">Transmettre un patrimoine particulier</a></li>\r
                        <li><a class="link" href="#">Obtenir des revenus réguliers immédiatement</a></li>\r
                    </ul>\r
                </div>\r
                <a class="button button--primary button--small" href="#">Faire une simulation</a>\r
            </div>\r
        </div>\r
        <div class="navigation__menu">\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Assurance Vie</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Altaprofits Vie</a></li>\r
                        <li><a class="link" href="#">Digital Vie Prime</a></li>\r
                        <li><a class="link" href="#">Titres@Vie</a></li>\r
                        <li><a class="link" href="#">Autres</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">Retraite</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Titres@PER</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">SCPI</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Notre sélection de SCPI</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">Capitalisation</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Altaprofits Capitalisation</a></li>\r
                        <li><a class="link" href="#">Digital Capi Prime</a></li>\r
                        <li><a class="link" href="#">Titres@Capi</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">Défiscalisation</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Les atouts de la défiscalisation</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Supports d’investissements</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Gestion pilotée</a></li>\r
                        <li><a class="link" href="#">Autres supports d'investissements</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">L’épargne et vous</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Guide de l’épargne</a></li>\r
                        <li><a class="link" href="#">Conseils d’épargne</a></li>\r
                        <li><a class="link" href="#">FAQ</a></li>\r
                        <li><a class="link" href="#">Lexique</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Alta News</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Actualités économiques</a></li>\r
                        <li><a class="link" href="#">Paroles d’experts</a></li>\r
                        <li><a class="link" href="#">La presse en parle</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Nous connaître</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Qui sommes-nous ?</a></li>\r
                        <li><a class="link" href="#">Nos engagements durables</a></li>\r
                        <li><a class="link" href="#">Nos partenaires</a></li>\r
                        <li><a class="link" href="#">Nous rejoindre</a></li>\r
                        <li><a class="link" href="#">Contactez-nous</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">Vous êtes journaliste ?</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Espace presse</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <a class="icon-button icon-button--dark-theme" href="#">\r
                <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
            </a>\r
        </div>\r
    </div>\r
    <div class="footer__resume resume">\r
        <img alt="" class="resume__logo" src="/assets/logos/altaprofits_full--dark-theme.svg">\r
        <p class="resume__description">\r
            Société de Conseil en Gestion de Patrimoine sur internet depuis 1999\r
        </p>\r
        <div class="resume__contact contact">\r
            <p class="contact__title">Nous restons à votre disposition</p>\r
            <ul class="contact__content">\r
                <li><p>Du lundi au Vendredi de 9h à 19h</p></li>\r
                <li><a class="link" href="#">01 44 77 12 14</a></li>\r
            </ul>\r
        </div>\r
        <div class="resume__trustpilot">\r
            //WIDGET TRUSTPILOT\r
        </div>\r
    </div>\r
    <div class="footer__legal legal">\r
        <p>© Altaprofits 2022</p>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">35 rue de Rome 75008 Paris</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">information@altaprofits.fr</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">Informations légales</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">Réclamations</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">Cookies</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">Vos données personnelles</a>\r
    </div>\r
</footer>`,an=`<div class="wrapper wrapper--66-33">\r
    <section class="awards-section">\r
        <h3 class="awards-section__title">Déjà récompensé 10 fois en 2022</h3>\r
        <div class="awards-section__slider">\r
            <div class="awards-section__content">\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">Titres@PER</h5>\r
                        <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
                        <p class="award-item__jury">LE REVENU</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <a class="button button--secondary button--dark-theme" href="#">Voir les récompenses</a>\r
    </section>\r
    <section class="reviews-section">\r
        <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
        <div class="reviews-section__content">\r
            //TRUSTPILOT WIDGET\r
        </div>\r
        <a class="button button--secondary button--light-theme"\r
           href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
            tous les avis</a>\r
    </section>\r
</div>\r
\r
<div class="wrapper wrapper--50-50">\r
    <section class="awards-section">\r
        <h3 class="awards-section__title">Déjà récompensé 10 fois en 2022</h3>\r
        <div class="awards-section__slider">\r
            <div class="awards-section__content">\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">Titres@PER</h5>\r
                        <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
                        <p class="award-item__jury">LE REVENU</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <a class="button button--secondary button--dark-theme" href="#">Voir les récompenses</a>\r
    </section>\r
    <section class="reviews-section">\r
        <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
        <div class="reviews-section__content">\r
            //TRUSTPILOT WIDGET\r
        </div>\r
        <a class="button button--secondary button--light-theme"\r
           href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
            tous les avis</a>\r
    </section>\r
</div>\r
\r
<div class="wrapper wrapper--33-66">\r
    <section class="awards-section">\r
        <h3 class="awards-section__title">Déjà récompensé 10 fois en 2022</h3>\r
        <div class="awards-section__slider">\r
            <div class="awards-section__content">\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">Titres@PER</h5>\r
                        <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
                        <p class="award-item__jury">LE REVENU</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
                <div class="award-item">\r
                    <img class="award-item__image" src="/assets/images/award_default.svg">\r
                    <div class="award-item__content">\r
                        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                        <p class="award-item__jury">LE PARTICULIER</p>\r
                        <p class="award-item__date">2022</p>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <a class="button button--secondary button--dark-theme" href="#">Voir les récompenses</a>\r
    </section>\r
    <section class="reviews-section">\r
        <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
        <div class="reviews-section__content">\r
            //TRUSTPILOT WIDGET\r
        </div>\r
        <a class="button button--secondary button--light-theme"\r
           href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
            tous les avis</a>\r
    </section>\r
</div>`,cn=`<section class="home-hero-banner">\r
    <div class="home-hero-banner__slides">\r
        <div class="home-hero-banner__slide" data-name="finance-project">\r
            <div class="home-hero-banner__content">\r
                <h1 class="home-hero-banner__title --display">Immobilier, études des enfants, voyage...<br>\r
                    Comment financer vos projets ?</h1>\r
                <a class="button button--primary" href="#">Faire une simulation</a>\r
            </div>\r
            <img alt="Altaprofits Vie" class="home-hero-banner__image"\r
                 src="/assets/images/generali_espace_lux_vie_france_banner.jpg">\r
        </div>\r
    </div>\r
    <div class="home-hero-banner__navigation">\r
        <button class="tab tab--pictogram" data-name="build-heritage">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/home.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Constituer un patrimoine</span>\r
        </button>\r
        <button class="tab tab--pictogram" data-name="finance-project">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/suitcase.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Financer un projet</span>\r
        </button>\r
        <button class="tab tab--pictogram" data-name="prepare-retirement">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/holiday.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Préparer ma retraite</span>\r
        </button>\r
        <button class="tab tab--pictogram" data-name="transmit-heritage">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/family.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Transmettre un patrimoine</span>\r
        </button>\r
        <button class="tab tab--pictogram" data-name="obtain-regular-income">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/hand_euro.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Obtenir des revenus réguliers</span>\r
        </button>\r
    </div>\r
</section>`,on=`<section class="promo-banner">\r
    <a class="promo-banner__item" href="#">\r
        <img alt="Promo" class="promo-banner__image" src="/assets/images/promo_banner.jpg">\r
    </a>\r
</section>`,ln=`<section class="company-value-section">\r
    <h2 class="company-value-section__title">Vos besoins sont nos priorités</h2>\r
    <div class="company-value-section__content">\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/award.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <h5 class="keypoint-card__title">ENGAGÉ</h5>\r
                <p class="keypoint-card__description">Élu Meilleur Conseil Epargne en 2022</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/advisor.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <h5 class="keypoint-card__title">PROCHE</h5>\r
                <p class="keypoint-card__description">Des conseillers en gestion de patrimoine disponibles pour vous\r
                    accompagner dans vos projets</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/phone.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <h5 class="keypoint-card__title">SIMPLE</h5>\r
                <p class="keypoint-card__description">Souscription, transaction et consultation 100% en ligne</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/offensive.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <h5 class="keypoint-card__title">INNOVANT</h5>\r
                <p class="keypoint-card__description">Des offres d'épargne multi-assureurs, multirécompensées</p>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,dn=`<section class="advices-section">\r
    <h2 class="advices-section__title">Consultez nos conseils d’épargne</h2>\r
    <div class="advices-section__content">\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_assurance_vie.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <h5 class="article-card__title">L’assurance vie : un outil pour transmettre votre patrimoine à un proche\r
                    sans lien de parenté</h5>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
            <span class="article-card__tag tag">Assurance Vie</span>\r
        </a>\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_per.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <h5 class="article-card__title">3 raisons d’ouvrir une assurance vie ou un PER à votre enfant\r
                    mineur</h5>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
            <span class="article-card__tag tag">PER</span>\r
        </a>\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_scpi.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <h5 class="article-card__title">Donation : transmettez de votre vivant pour optimiser l’aide apportée à\r
                    vos proches</h5>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
            <span class="article-card__tag tag">SCPI</span>\r
        </a>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrez tous nos conseils</a>\r
</section>`,pn=`<section class="insurance-partners-section">\r
    <h3 class="insurance-partners-section__title">Plus de 20 ans d’expertise à votre service avec des partenaires\r
        assureurs</h3>\r
    <div class="insurance-partners-section__content">\r
        <svg class="insurance-partners-section__logo logo" viewBox="0 0 124 108">\r
            <use href="/assets/logos/generali--fit.svg#logo"></use>\r
        </svg>\r
        <svg class="insurance-partners-section__logo logo" viewBox="0 0 206 78">\r
            <use href="/assets/logos/suravenir--fit.svg#logo"></use>\r
        </svg>\r
        <svg class="insurance-partners-section__logo logo" viewBox="0 0 140 108">\r
            <use href="/assets/logos/swisslife--fit.svg#logo"></use>\r
        </svg>\r
    </div>\r
</section>`,_n=`<section class="investment-disclaimer-section investment-disclaimer-section--info">\r
    <h3 class="investment-disclaimer-section__title">Ce qu'il faut savoir avant d'investir</h3>\r
    <div class="investment-disclaimer-section__content">\r
        <div class="investment-disclaimer-section__text"><p>Produit présentant un risque de perte en capital.<br><br>\r
            Les performances passées ne préjugent pas des performances futures et ne sont pas constantes dans le temps.\r
            Les performances sont nettes de frais de gestion des contrats.<br><br>\r
            L'investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur\r
            valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l'évolution des\r
            marchés financiers.<br><br>\r
            L'assureur s'engage sur le nombre d'unités de compte et non sur leur valeur qu'il ne garantit pas.<br><br>\r
            Document publicitaire dépourvu de valeur contractuelle.</p></div>\r
    </div>\r
</section>`,un=`<section class="awards-section">\r
    <h3 class="awards-section__title">Déjà récompensé 10 fois en 2022</h3>\r
    <div class="awards-section__slider">\r
        <div class="awards-section__content">\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">Titres@PER</h5>\r
                    <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
                    <p class="award-item__jury">LE REVENU</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_default.svg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                    <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                    <p class="award-item__jury">LE PARTICULIER</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_default.svg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                    <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                    <p class="award-item__jury">LE PARTICULIER</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_default.svg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                    <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                    <p class="award-item__jury">LE PARTICULIER</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_default.svg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                    <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                    <p class="award-item__jury">LE PARTICULIER</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <a class="button button--secondary button--dark-theme" href="#">Voir les récompenses</a>\r
</section>`,mn=`<section class="reviews-section">\r
    <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
    <div class="reviews-section__content">\r
        //TRUSTPILOT WIDGET\r
    </div>\r
    <a class="button button--secondary button--light-theme" href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
        tous les avis</a>\r
</section>`,vn=`<section class="partners-news-section">\r
    <div class="partners-news-section__header">\r
        <h2 class="partners-news-section__title">Actualités</h2>\r
        <p class="partners-news-section__subtitle">Lazard Frères Gestion analyse au travers des actualités, la situation\r
            et\r
            les perspectives à court terme de l'économie nationale et internationale.</p>\r
    </div>\r
    <div class="partners-news-section__content">\r
        <a class="article-card article-card--horizontal" href="#">\r
            <img class="article-card__image" src="/assets/images/article_default.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
                <h5 class="article-card__title">Article</h5>\r
                <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,\r
                    nunc sit\r
                    amet ultricies\r
                    lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
                <span class="article-card__tag tag">Category</span>\r
            </div>\r
        </a>\r
        <a class="article-card article-card--horizontal" href="#">\r
            <img class="article-card__image" src="/assets/images/article_default.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
                <h5 class="article-card__title">Article</h5>\r
                <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,\r
                    nunc\r
                    sit\r
                    amet ultricies\r
                    lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
                <span class="article-card__tag tag">Category</span>\r
            </div>\r
        </a>\r
    </div>\r
</section>`,gn=`<section class="product-hero-banner">\r
    <div class="breadcrumb">\r
        <a class="link" href="#">Notre offre</a>\r
        <span class="breadcrumb__separator">/</span>\r
        <a class="link" href="#">Assurance vie</a>\r
        <span class="breadcrumb__separator">/</span>\r
        <a class="link" href="#">Generali Espace Lux Vie France</a>\r
    </div>\r
    <div class="product-hero-banner__content">\r
        <div class="product-hero-banner__column">\r
            <div class="product-hero-banner__row">\r
                <h1 class="product-hero-banner__title --display">Generali Espace Lux Vie France</h1>\r
                <svg class="product-hero-banner__logo logo" viewBox="0 0 128 128">\r
                    <use href="/assets/logos/generali.svg#logo"></use>\r
                </svg>\r
            </div>\r
            <h4 class="product-hero-banner__catchline --light">Les atouts du Luxembourg en un clic</h4>\r
        </div>\r
        <a class="button button--primary" href="#">Faire une simulation</a>\r
    </div>\r
    <img alt="Altaprofits Vie" class="product-hero-banner__image"\r
         src="/assets/images/generali_espace_lux_vie_france_banner.jpg">\r
</section>`,hn=`<section class="product-insurance-partner-section">\r
    <h3 class="product-insurance-partner-section__title"><span\r
            class="product-insurance-partner-section__name">GENERALI</span>, le partenaire assureur</h3>\r
    <div class="product-insurance-partner-section__content">\r
        <div class="product-insurance-partner-section__logo_container">\r
            <svg class="product-insurance-partner-section__logo logo">\r
                <use href="/assets/logos/generali--fit.svg#logo"></use>\r
            </svg>\r
        </div>\r
        <p class="product-insurance-partner-section__description">Generali Vie est une filiale à 100% de Generali\r
            France, implantée en France depuis près de deux siècles. Sa solidité financière, sa dynamique\r
            d’innovation mais aussi son implantation historique dans l'Hexagone en font un acteur incontournable.\r
            C’est notamment le 1er assureur sur le marché Internet de l’épargne.</p>\r
    </div>\r
</section>`,bn=`<section class="product-contractual-documentation-section">\r
    <h3 class="product-contractual-documentation-section__title">Documentation contractuelle du contrat <span\r
            class="product-contractual-documentation-section__name">Altaprofits Vie</span>\r
    </h3>\r
    <div class="product-contractual-documentation-section__content">\r
        <a class="file-link" href="#">Conditions générales</a>\r
        <a class="file-link" href="#">Document d’Informations Clés (DIC)</a>\r
        <a class="file-link" href="#">Liste des supports financiers</a>\r
        <a class="file-link" href="#">Performances de la gestion pilotée</a>\r
    </div>\r
</section>`,fn=`<div class="product-management-section">\r
    <h2 class="product-management-section__title">Choisissez le mode de gestion de votre contrat</h2>\r
    <div class="product-management-section__content product-management-section__content--two">\r
        <div class="management-guided-card">\r
            <div class="management-guided-card__content">\r
                <h4 class="management-guided-card__title">Gestion pilotée</h4>\r
                <p class="management-guided-card__description">Déléguez la gestion de votre épargne à l’assureur qui\r
                    prend conseil auprès d’une société de gestion d’actifs</p>\r
                <div class="management-guided-card__logos">\r
                    <svg class="logo">\r
                        <use href="/assets/logos/generali_ws.svg#logo"></use>\r
                    </svg>\r
                    <svg class="logo">\r
                        <use href="/assets/logos/lazard_freres_gestion.svg#logo"></use>\r
                    </svg>\r
                </div>\r
            </div>\r
            <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir la gestion\r
                pilotée</a>\r
        </div>\r
        <div class="management-others-card">\r
            <div class="management-others-card__content">\r
                <h4 class="management-others-card__title">Autres supports d’investissement</h4>\r
                <p class="management-others-card__description">Vous choisissez librement les supports d'investissement\r
                    qui\r
                    composent votre contrat puis les gérez en toute autonomie</p>\r
                <div class="management-others-card__links">\r
                    <a class="management-others-card__link" data-name="fonds-euros" href="#">Fonds en euros</a>\r
                    <a class="management-others-card__link" data-name="fonds-croissance" href="#">Fonds croissance</a>\r
                    <a class="management-others-card__link" data-name="unites-compte" href="#">Unités de compte</a>\r
                </div>\r
                <div class="management-others-card__explainations">\r
                    <div class="management-others-card__explaination" data-name="fonds-euros"><p>Géré par l’assureur, le\r
                        <b><a\r
                                class="link" href="#">fonds en euros</a></b> propose une gestion prudente qui associe\r
                        une garantie\r
                        en capital et un rendement définitivement acquis annuellement</p></div>\r
                    <div class="management-others-card__explaination" data-name="fonds-croissance"><p>Géré par\r
                        l’assureur, le\r
                        <b><a class="link" href="#">fonds en euros</a></b> propose une gestion prudente qui associe une\r
                        garantie en capital et un rendement définitivement acquis annuellement</p></div>\r
                    <div class="management-others-card__explaination" data-name="unites-compte"><p>Géré par l’assureur,\r
                        le <b><a\r
                                class="link" href="#">fonds en euros</a></b> propose une gestion prudente qui associe\r
                        une garantie\r
                        en capital et un rendement définitivement acquis annuellement</p></div>\r
\r
                </div>\r
            </div>\r
            <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir les autres supports\r
                d’investissement</a>\r
        </div>\r
    </div>\r
</div>`,wn=`<section class="product-advantages-section">\r
    <h2 class="product-advantages-section__title">Les atouts <span class="product-advantages-section__name">Altaprofits Vie</span>\r
    </h2>\r
    <div class="product-advantages-section__content">\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/money.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Accessible dès 300€ à l’ouverture et 100 % en ligne</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/zero_euro.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Droit d’entrée, frais d’arbitrage, frais de versement</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/defensive.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">2 fonds euros et 1 fonds Croissance privilégiant la sécurité de\r
                    votre épargne</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/holiday.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Sérénité et simplicité avec la gestion pilotée</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/association.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Investir tout en agissant pour le climat</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/award.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Un contrat récompensé par la presse spécialisée</p>\r
            </div>\r
        </div>\r
    </div>\r
    <a class="button button--secondary button--light-theme" href="#">Télécharger la brochure</a>\r
</section>`,yn=`<section class="product-fees-section">\r
    <h2 class="product-fees-section__title">Optimisez vos rendements avec des frais réduits</h2>\r
    <div class="product-fees-section__content">\r
        <div class="fee-card fee-card--highlight">\r
            <div class="fee-card__value">\r
                <span class="fee-card__number">0</span>\r
                <span class="fee-card__unit">€</span>\r
            </div>\r
            <p class="fee-card__list">Frais d’entrée<br>Frais de versement<br>Frais d’arbitrage<br>Frais de sortie ou\r
                rachat\r
            </p>\r
        </div>\r
        <a class="button button--primary" href="#">Faire une simulation</a>\r
        <div class="product-fees-section__other-fees">\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">0,30</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de mandat de gestion<br> du montant investi au titre de la Taxe<br> sur\r
                    les transactions financières\r
                </p>\r
            </div>\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">0,75</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de gestion sur les fonds euros<br>\r
                    Frais de gestion sur les unités de compte en gestion libre\r
            </div>\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">0,84</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de gestion sur les fonds euros<br>\r
                    Frais de gestion sur les unités de compte en gestion libre\r
                </p>\r
            </div>\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">0,94</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de gestion sur les actions (titres vifs)</p>\r
            </div>\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">1,04</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de gestion sur les ETF</p>\r
            </div>\r
        </div>\r
        <a class="file-link" href="#">Pour plus de transparence, consultez l'annexe des frais du contrat Altaprofits\r
            Vie</a>\r
    </div>\r
</section>`,xn=`<section class="faq-redirection-section">\r
    <h3 class="faq-redirection-section__title">Vos questions les plus fréquentes</h3>\r
    <a class="button button--secondary button--dark-theme button--arrow" href="#">Consulter la FAQ</a>\r
</section>`,Cn=`<section class="management-advantages-section">\r
    <div class="management-advantages-section__header">\r
        <h2 class="management-advantages-section__title">Composez votre portefeuille</h2>\r
        <p class="management-advantages-section__subtitle"> Si vous souhaiter gérer vous même en toute autonomie votre\r
            contrat</p>\r
    </div>\r
    <div class="management-advantages-section__content">\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/advisor.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description"><b>Vous avez accès au détail de votre profil,</b> aux opérations\r
                    réalisées et à un rapport trimestriel</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/bank_cards.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description"><b>Vous sélectionnez des supports d’investissement</b> par zones\r
                    géographiques et secteurs d’activités</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/couple.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description"><b>Vous choisissez un profil</b> qui correspond le mieux à votre\r
                    profil investisseur et vos objectifs.</p>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,Ln=`<section class="management-plus-section">\r
    <h3 class="management-plus-section__title">Les + Altaprofits</h3>\r
    <div class="management-plus-section__content">\r
        <ul>\r
            <li>Fonds croissance, ETF, actions (CAC40, SBF120, Eurostoxx50), Private\r
                Equity présents dans les contrats,\r
            </li>\r
            <li>Des supports immobiliers, fonds structurés, fonds Croissance ou encore\r
                fonds euros compatibles avec des mandats de gestion pilotée,\r
            </li>\r
            <li>De l’information financière en temps réel,</li>\r
            <li>Une veille financière et des référencements de supports\r
                d’investissement permanents,\r
            </li>\r
            <li>La possibilité d’arbitrer en ligne. Un mouvement passé avant 16h\r
                réalisé dès le lendemain,\r
            </li>\r
            <li>Des supports d’investissements durables.</li>\r
        </ul>\r
    </div>\r
</section>\r
`,kn=`<section class="assets-support">\r
    <div class="assets-support__left-container">\r
      <h3 class="assets-support__left-container__title">Composez votre portefeuille</h3>\r
      <p class="assets-support__left-container__description">\r
        Si vous souhaiter gérer vous même en toute autonomie votre contrat\r
      </p>\r
      <div class="assets-support__left-container__icons-container">\r
        <div class="assets-support__left-container__icons-container__icon">\r
          <svg class="assets-support__left-container__icons-container__icon__picto" viewBox="0 0 64 64">\r
              <use href="/assets/pictograms/advisor.svg#picto"></use>\r
          </svg>\r
          <p class="assets-support__left-container__icons-container__icon__text">\r
            <span>Vous avez accès au détail de votre profil, </span>aux opérations\r
            réalisées et à un rapport trimestriel\r
          </p>\r
        </div>\r
        <div class="assets-support__left-container__icons-container__icon">\r
          <svg class="assets-support__left-container__icons-container__icon__picto" viewBox="0 0 64 64">\r
              <use href="/assets/pictograms/bank_cards.svg#picto"></use>\r
          </svg>\r
          <p\r
            class="assets-support__left-container__icons-container__icon__text assets-support__left-container__icons-container__icon__text--another-width"\r
          >\r
            <span>Vous sélectionnez des supports d’investissement</span> par zones\r
            géographiques et secteurs d’activités\r
          </p>\r
        </div>\r
  \r
        <div class="assets-support__left-container__icons-container__icon">\r
          <svg class="assets-support__left-container__icons-container__icon__picto" viewBox="0 0 64 64">\r
              <use href="/assets/pictograms/couple.svg#picto"></use>\r
          </svg>\r
          <p class="assets-support__left-container__icons-container__icon__text">\r
            <span>Vous choisissez un profil</span> qui correspond le mieux à votre\r
            profil investisseur et vos objectifs.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="assets-support__right-container">\r
      <h3 class="assets-support__right-container__title">Les + Altaprofits</h3>\r
      <ul class="assets-support__right-container__items-container">\r
        <li class="assets-support__right-container__items-container__item">\r
          Fonds croissance, ETF, actions (CAC40, SBF120, Eurostoxx50), Private\r
          Equity présents dans les contrats,\r
        </li>\r
        <li class="assets-support__right-container__items-container__item">\r
          Des supports immobiliers, fonds structurés, fonds Croissance ou encore\r
          fonds euros compatibles avec des mandats de gestion pilotée,\r
        </li>\r
        <li class="assets-support__right-container__items-container__item">\r
          De l’information financière en temps réel,\r
        </li>\r
        <li class="assets-support__right-container__items-container__item">\r
          Une veille financière et des référencements de supports d’investissement\r
          permanents,\r
        </li>\r
        <li class="assets-support__right-container__items-container__item">\r
          La possibilité d’arbitrer en ligne. Un mouvement passé avant 16h réalisé\r
          dès le lendemain,\r
        </li>\r
        <li class="assets-support__right-container__items-container__item">Des supports d’investissements durables.</li>\r
      </ul>\r
    </div>\r
  </section>\r
  `,En=`<section class="assets-piloted">\r
  <div class="assets-piloted__left-container">\r
    <h3 class="assets-piloted__left-container__title">\r
      Les atouts de la gestion pilotée\r
    </h3>\r
    <p class="assets-piloted__left-container__description">\r
      Si vous manquez de temps, d’envie ou de connaissances financières pour\r
      sélectionner vos supports d’investissements, vous pouvez confier la\r
      gestion de votre contrat à l’assureur qui prendra conseil auprès d’un\r
      professionnel d’une société de gestion.\r
    </p>\r
    <div class="assets-piloted__left-container__icons-container">\r
      <div class="keypoint-card">\r
        <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
          <use href="/assets/pictograms/bank_cards.svg#picto"></use>\r
        </svg>\r
        <div class="keypoint-card__content">\r
          <p class="keypoint-card__description">\r
            <b>Vous gardez la maîtrise de votre contrat</b> vous pouvez à tout moment changer pour la gestion libre\r
          </p>\r
        </div>\r
      </div>\r
      <div class="keypoint-card">\r
        <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
          <use href="/assets/pictograms/file.svg#picto"></use>\r
        </svg>\r
        <div class="keypoint-card__content">\r
          <p class="keypoint-card__description">\r
            <b>Vous avez accès au détail de votre profil,</b> aux opérations réalisées et à un rapport trimestriel \r
          </p>\r
        </div>\r
      </div>\r
      <div class="keypoint-card">\r
        <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
          <use href="/assets/pictograms/couple.svg#picto"></use>\r
        </svg>\r
        <div class="keypoint-card__content">\r
          <p class="keypoint-card__description">\r
            <b>Vous choisissez un profil</b> qui correspond le mieux à votre profil investisseur et vos objectifs.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="assets-piloted__right-container">\r
    <h3 class="assets-piloted__right-container__title">Les + Altaprofits</h3>\r
    <ul class="assets-piloted__right-container__items-container">\r
      <li class="assets-piloted__right-container__items-container__item">\r
        Accessible dès 300€\r
      </li>\r
      <li class="assets-piloted__right-container__items-container__item">\r
        Des mandats de gestion en accord avec vos convictions : des profils ETF ISR avec Amundi, une gestion « cœur satellite » dans les mandats proposés par Generali Wealth Solutions et un savoir-faire patrimonial avec Lazard Frères Gestion.\r
      </li>\r
      <li class="assets-piloted__right-container__items-container__item">\r
        La possibilité d’associer fonds en euros, fonds croissance, fonds structuré, immobilier, Private Equity avec un mandat de gestion pilotée.\r
      </li>\r
      <li class="assets-piloted__right-container__items-container__item">\r
        Des reportings mensuels ou trimestriels sur la performance et la stratégie du gérant et une webconférence semestrielle pour répondre à toutes vos questions.\r
      </li>\r
    </ul>\r
  </div>\r
</section>\r
`,Pn=`<section class="partners-piloted-container">\r
  <div class="partners-piloted-container__text-container">\r
    <h3 class="partners-piloted-container__text-container__title">\r
      Nos partenaires de gestion pilotée\r
    </h3>\r
    <p class="partners-piloted-container__text-container__description">\r
      Déléguez la gestion de votre épargne à l’assureur qui prend conseil auprès\r
      d’une société de gestion d’actifs\r
    </p>\r
  </div>\r
  <div class="partners-piloted-container__partners-logos">\r
    <svg class="partners-piloted-container__partners-logos__logo" >\r
      <use href="/assets/logos/amundi_am--fit.svg#logo"></use>\r
    </svg>\r
    <svg class="partners-piloted-container__partners-logos__logo" >\r
      <use href="/assets/logos/generali_ws--fit.svg#logo"></use>\r
    </svg>\r
    <svg class="partners-piloted-container__partners-logos__logo" >\r
      <use href="/assets/logos/lazard_freres_gestion--fit.svg#logo"></use>\r
    </svg>\r
  </div>\r
</section>\r
`,Rn=`<section class="piloted-header-container">\r
  <p class="piloted-header-container__breadcrumb">\r
    Accueil supports d’investissement /<b> Gestion pilotée</b>\r
  </p>\r
  <h2 class="piloted-header-container__title">La gestion pilotée</h2>\r
  <p class="piloted-header-container__sub-title">Déléguez la gestion de vos contrats</p>\r
</section>\r
`,An=`<section class="support-header-container">\r
  <p class="support-header-container__breadcrumb">\r
    Accueil supports d’investissement /<b> Autres supports d'investissements</b>\r
  </p>\r
  <h2 class="support-header-container__title">Autres supports d’investissements</h2>\r
  <p class="support-header-container__sub-title">Sélectionnez et gérez vous-même<br/>vos supports d’investissements en toute autonomie</p>\r
</section>\r
`,In=`<section class="contracts-piloted-section-container">\r
  <div class="contracts-piloted-container">\r
    <h3 class="contracts-piloted-container__title">\r
      Investissez facilement en déléguant la gestion de votre contrat\r
    </h3>\r
    <p class="contracts-piloted-container__description">\r
      Choisissez votre type de contrat\r
    </p>\r
    <div class="btns-container">\r
      <div class="btns-container__first-choice-container">\r
        <div\r
          class="btns-container__first-choice-container__btn"\r
          data-attr="assuranceVie"\r
        >\r
          <p class="btns-container__first-choice-container__btn__title">\r
            Assurance Vie\r
          </p>\r
        </div>\r
        <div\r
          class="btns-container__first-choice-container__btn"\r
          data-attr="capitalisation"\r
        >\r
          <p class="btns-container__first-choice-container__btn__title">\r
            Capitalisation\r
          </p>\r
        </div>\r
        <div\r
          class="btns-container__first-choice-container__btn"\r
          data-attr="planEpargneRetraite"\r
        >\r
          <p class="btns-container__first-choice-container__btn__title">\r
            Plan Épargne Retraite (PER)\r
          </p>\r
        </div>\r
      </div>\r
      <div class="btns-container__second-choice-container hidden">\r
        <div\r
          class="btns-container__second-choice-container__btns-type-second-choice-container assuranceVie"\r
        >\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titresVie"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@Vie\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              un contrat pour les experts\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="altaprofitsVie"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Altaprofits Vie\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              En un clic, le meilleur de l’assurance vie\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="digitalViePrime"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Digital Vie Prime\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat ciblant les critères environnementaux et sociaux\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="espaceLuxVie"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Generali Espace Lux Vie\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Les atouts du Luxembourg en un clic\r
            </p>\r
          </div>\r
        </div>\r
        <div\r
          class="btns-container__second-choice-container__btns-type-second-choice-container capitalisation hidden"\r
        >\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titreCapi"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@Capi\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat pour les experts\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="altaprofitsCapitalisation"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Altaprofits Capitalisation\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              En un clic, le meilleur de l’assurance vie\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="digitalCapiPrime"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Digital Capi Prime\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat ciblant les critères environnementaux et sociaux\r
            </p>\r
          </div>\r
        </div>\r
        <div\r
          class="btns-container__second-choice-container__btns-type-second-choice-container planEpargneRetraite hidden"\r
        >\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titrePER"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@PER\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat pour les experts\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="results-container hidden">\r
    <div class="filters-container">\r
      <div class="filters-container__btns-container">\r
        <div\r
          class="filters-container__btns-container__btn active"\r
          data-attr="prudent"\r
        >\r
          <p class="filters-container__btns-container__btn__title">\r
            Profil prudent\r
          </p>\r
        </div>\r
        <div\r
          class="filters-container__btns-container__btn"\r
          data-attr="balanced"\r
        >\r
          <p class="filters-container__btns-container__btn__title">\r
            Profil équilibré\r
          </p>\r
        </div>\r
        <div class="filters-container__btns-container__btn" data-attr="dynamic">\r
          <p class="filters-container__btns-container__btn__title">\r
            Profil dynamique\r
          </p>\r
        </div>\r
      </div>\r
      <div class="filters-container__parameters-container">\r
        \r
          <button\r
            class="toggle-button toggle-button--secondary toggle-button--icon toggle-button--active btn-parameter1"\r
          >\r
            <i class="toggle-button__icon fa-solid fa-grip"></i>\r
          </button>\r
          <button\r
            class="toggle-button toggle-button--secondary toggle-button--icon btn-parameter2"\r
          >\r
            <i class="toggle-button__icon fa-solid fa-equals"></i>\r
          </button>\r
        \r
        <div\r
          class="filters-container__parameters-container__btn-date-container"\r
        >\r
          <select\r
            class="filters-container__parameters-container__btn-date-container__btn-date"\r
            name="year"\r
            id=""\r
          >\r
            <option value="2022">2022</option>\r
            <option value="2022">2021</option>\r
          </select>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="cards-display-container"></div>\r
    <div class="array-display-container hidden"></div>\r
    <div class="white-card-container">\r
      <h3 class="white-card-container__title">Carte Blanche</h3>\r
      <img\r
        src="./assets/images/graphique-placeholder.png"\r
        alt="placeholder"\r
      />\r
      <p class="white-card-container__description">\r
        L'orientation de Gestion Pilotée (mandat d'arbitrage) que vous avez\r
        choisie est risque 5. Équilibré entre produits de taux et actions, ce\r
        profil est destiné aux souscripteurs qui recherchent de la souplesse\r
        dans l'allocation de leur investissement. L'horizon de placement\r
        conseillé pour ce type de gestion est au minimum de cinq (5) ans.\r
      </p>\r
      <img\r
        src="./assets/images/accordion-placeholder.png"\r
        alt="placeholder"\r
      />\r
    </div>\r
\r
    <div class="btn-subscribe-container">\r
      <div class="btn-subscribe-container__btn">\r
        <p class="btn-subscribe-container__btn__title">Souscrire en ligne</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,Sn=`<section class="contracts-support-section-container">\r
  <div class="contracts-support-container">\r
    <h3 class="contracts-support-container__title">\r
      Investissez sereinement, <br />\r
      gérez votre épargne en toute autonomie\r
    </h3>\r
    <p class="contracts-support-container__description">\r
      Choisissez votre type de contrat\r
    </p>\r
    <div class="support-btns-container">\r
      <div class="support-btns-container__first-choice-container">\r
        <div\r
          class="support-btns-container__first-choice-container__btn"\r
          data-attr="assuranceVie"\r
        >\r
          <p class="support-btns-container__first-choice-container__btn__title">\r
            Assurance Vie\r
          </p>\r
        </div>\r
        <div\r
          class="support-btns-container__first-choice-container__btn"\r
          data-attr="capitalisation"\r
        >\r
          <p class="support-btns-container__first-choice-container__btn__title">\r
            Capitalisation\r
          </p>\r
        </div>\r
        <div\r
          class="support-btns-container__first-choice-container__btn"\r
          data-attr="planEpargneRetraite"\r
        >\r
          <p class="support-btns-container__first-choice-container__btn__title">\r
            Plan Épargne Retraite (PER)\r
          </p>\r
        </div>\r
      </div>\r
      <div class="support-btns-container__second-choice-container hidden">\r
        <div\r
          class="support-btns-container__second-choice-container__btns-type-second-choice-container assuranceVie"\r
        >\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titresVie"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@Vie\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              un contrat pour les experts\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="altaprofitsVie"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Altaprofits Vie\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              En un clic, le meilleur de l’assurance vie\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="digitalViePrime"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Digital Vie Prime\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat ciblant les critères environnementaux et sociaux\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="espaceLuxVie"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Generali Espace Lux Vie\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Les atouts du Luxembourg en un clic\r
            </p>\r
          </div>\r
        </div>\r
        <div\r
          class="support-btns-container__second-choice-container__btns-type-second-choice-container capitalisation hidden"\r
        >\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titreCapi"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@Capi\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat pour les experts\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="altaprofitsCapitalisation"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Altaprofits Capitalisation\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              En un clic, le meilleur de l’assurance vie\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="digitalCapiPrime"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Digital Capi Prime\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat ciblant les critères environnementaux et sociaux\r
            </p>\r
          </div>\r
        </div>\r
        <div\r
          class="support-btns-container__second-choice-container__btns-type-second-choice-container planEpargneRetraite hidden"\r
        >\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titrePER"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@PER\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat pour les experts\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="btns-third-choice-container hidden">\r
    <div class="btns-third-choice-container__btn euro" data-attr="euro">\r
      <p>Fonds en euros</p>\r
    </div>\r
    <div class="btns-third-choice-container__btn growth hidden" data-attr="growth">\r
      <p>Fonds Croissance</p>\r
    </div>\r
    <div class="btns-third-choice-container__btn unit" data-attr="unit">\r
      <p>Unités de compte</p>\r
    </div>\r
  </div>\r
  <div class="result-container">\r
    <div class="euro-fund-container hidden">\r
      <div class="euro-fund-container__text-container">\r
        <h3>Qu’est-ce qu’un fonds en euros ?</h3>\r
        <p>\r
          Géré par l’assureur, le fonds Euros propose une gestion prudente qui\r
          associe une garantie en capital et un rendement définitivement acquis\r
          annuellement.\r
        </p>\r
        <div class="euro-fund-container__text-container__lexicon-btn">\r
          <p>Voir la définition du lexique</p>\r
        </div>\r
        <h3>Nos fonds en euros disponibles</h3>\r
      </div>\r
      <div class="euro-fund-container__cards-container"></div>\r
      <p class="euro-fund-container__netissima-conditions">\r
        ⁽¹⁾ Taux de participation aux bénéfices servi par l'assureur net de\r
        frais de gestion et hors prélèvement sociaux ; les performances passées\r
        ne préjugent pas de celles à venir. ⁽²⁾ L’accès au fonds en euros\r
        NETISSIMA requiert un investissement minimum de 30% en supports en\r
        unités de compte (UC) devient : requiert un investissement minimum sur\r
        les supports en unités de compte (UC) qui sera compris entre 40 et 70%\r
        de l'investissement, ce taux est déterminé par l'assureur une fois par\r
        an. Les supports en unités de compte ne garantissent pas le capital\r
        versé et sont soumis aux fluctuations des marchés financiers à la hausse\r
        comme à la baisse. ⁽³⁾ Taux du Fonds Eurossima avec 0.60% de frais de\r
        gestion par an et disponible pour les contrats Altaprofits PEP,\r
        Altaprofits Madelin. Ainsi que les contrats Altaprofits Vie et\r
        Altaprofits Capitalisation ouverts jusqu’au 02/01/2017. ⁽⁴⁾ Taux du\r
        Fonds Eurossima avec 0.75% de frais de gestion par an et disponible pour\r
        les contrats Altaprofits Vie et Altaprofits Capitalisation ouverts à\r
        compter du 03/01/2017. ⁽⁵⁾ Taux minimum garanti uniquement en cas de\r
        sortie totale du fonds en euros en cours d'année. Ce taux sera diminué\r
        des frais de gestion annuels prélevés, prorata temporis, à la date de\r
        l'opération. ⁽⁶⁾ L’accès au fonds en euros Suravenir Opportunités 2\r
        requiert un investissement minimum de 50% en supports en unités de\r
        compte (UC) dès le premier euro, et est accessible uniquement par\r
        versement. Les supports en unités de compte ne garantissent pas le\r
        capital versé et sont soumis aux fluctuations des marchés financiers à\r
        la hausse comme à la baisse.L’accès au fonds en euros Suravenir\r
        Rendement 2 requiert un investissement minimum de 30% en supports en\r
        unités de compte (UC) dès le premier euro, et est accessible uniquement\r
        par versement ou par arbitrage. Les supports en unités de compte ne\r
        garantissent pas le capital versé et sont soumis aux fluctuations des\r
        marchés financiers à la hausse comme à la baisse.\r
      </p>\r
      <div class="euro-fund-container__netissima-container hidden">\r
        <div class="euro-fund-container__netissima-container__informations-container">\r
          <h3>Fonds en euros Netissima</h3>\r
          <div class="netissima-global-container">\r
            <div class="netissima-global-container__left-container">\r
              <div class="netissima-global-container__left-container__text-container">\r
                <p>\r
                  <strong>PERFORMANCES NETTES 2022 (1)</strong>\r
                  <br /><br />Chaque année, les performances de ce fonds en\r
                  euros varient en fonction du pourcentage d’unités de compte\r
                  dans le contrat. Pour l’année 2022 :\r
                </p>\r
              </div>\r
              <img\r
                src="/assets/images/netissima-left-placeholder.png"\r
                alt="placeholder"\r
              />\r
              <p>\r
                <strong>·</strong> Frais de gestion par an :\r
                <strong>0,75%</strong>\r
              </p>\r
            </div>\r
            <div class="netissima-global-container__right-container">\r
              <div class="netissima-global-container__right-container__text-container">\r
                <p>\r
                  <strong>Condition d'accès au fonds Netissima</strong>\r
                  <br />L’accès au fonds en euros Netissima est possible par\r
                  <strong> arbitrage et par versement</strong> et est\r
                  conditionné à un investissement minimum de\r
                  <strong\r
                    >50% sur les supports en unités de compte qui supportent un\r
                    risque de perte en capital.</strong\r
                  ><br /><br />Chaque année, les performances de ce fonds en\r
                  euros varient en fonction du pourcentage d’unités de compte\r
                  dans le contrat.\r
                </p>\r
              </div>\r
              <img\r
                src="/assets/images/netissima-right-placeholder.png"\r
                alt="placeholder"\r
              />\r
              <div class="btns-netissima-right-container">\r
                <div class="btns-netissima-right-container__btn">\r
                  <p>Rapport annuel</p>\r
                  <svg\r
                    width="16"\r
                    height="11"\r
                    viewBox="0 0 16 11"\r
                    fill="none"\r
                    xmlns="http://www.w3.org/2000/svg"\r
                  >\r
                    <path\r
                      d="M15.7063 5.70859C16.0969 5.31797 16.0969 4.68359 15.7063 4.29297L11.7063 0.292969C11.3156 -0.0976562 10.6812 -0.0976562 10.2906 0.292969C9.9 0.683594 9.9 1.31797 10.2906 1.70859L12.5844 4.00234H1C0.446875 4.00234 0 4.44922 0 5.00234C0 5.55547 0.446875 6.00234 1 6.00234H12.5844L10.2906 8.29609C9.9 8.68672 9.9 9.32109 10.2906 9.71172C10.6812 10.1023 11.3156 10.1023 11.7063 9.71172L15.7063 5.71172V5.70859Z"\r
                      fill="currentColor"\r
                    />\r
                  </svg>\r
                </div>\r
                <div class="btns-netissima-right-container__btn">\r
                  <p>Fiche du fonds</p>\r
                  <svg\r
                    width="16"\r
                    height="11"\r
                    viewBox="0 0 16 11"\r
                    fill="none"\r
                    xmlns="http://www.w3.org/2000/svg"\r
                  >\r
                    <path\r
                      d="M15.7063 5.70859C16.0969 5.31797 16.0969 4.68359 15.7063 4.29297L11.7063 0.292969C11.3156 -0.0976562 10.6812 -0.0976562 10.2906 0.292969C9.9 0.683594 9.9 1.31797 10.2906 1.70859L12.5844 4.00234H1C0.446875 4.00234 0 4.44922 0 5.00234C0 5.55547 0.446875 6.00234 1 6.00234H12.5844L10.2906 8.29609C9.9 8.68672 9.9 9.32109 10.2906 9.71172C10.6812 10.1023 11.3156 10.1023 11.7063 9.71172L15.7063 5.71172V5.70859Z"\r
                      fill="currentColor"\r
                    />\r
                  </svg>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <img src="./autres-support-files/offre-booster.png" alt="" />\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="growth-fund-container hidden">\r
    <div class="growth-fund-container__text-container">\r
      <h3>Qu’est-ce qu’un fonds croissance ?</h3>\r
      <p>\r
        Géré par un assureur, le fonds croissance associe une gestion prudente\r
        avec une garantie en capital au terme d’une période et une poche de\r
        diversification offrant un moteur de performance et un risque de perte\r
        en capital.\r
      </p>\r
      <div class="growth-fund-container__text-container__btn-lexicon">\r
        <p>Voir la définition du lexique</p>\r
      </div>\r
      <h3>Nos fonds croissance disponibles</h3>\r
    </div>\r
    <div class="growth-fund-container__cards-growth-container">\r
      <div class="growth-fund-container__cards-growth-container__cards-row-container">\r
        <div class="support-card-container" data-attr="growth-netissima">\r
          <div class="support-card-container__card-header">\r
            <p class="support-card-container__card-header__title">Générations Croiss@nce durable</p>\r
          </div>\r
          <div class="support-card-container__informations">\r
            <p class="support-card-container__informations__percentage-rate">Jusqu’à 3,06%</p>\r
            <p class="support-card-container__informations__information-text">\r
              de performances nettes ⁽¹⁾ en 2022 <br />\r
              Voir conditions d’accès\r
            </p>\r
            \r
            <svg class="card-container__card-informations__logo">\r
              <use href="./assets/logos/lazard_freres_gestion--fit.svg#logo"></use>\r
          </svg>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="growth-container hidden">\r
      <div class="growth-container__informations-container">\r
        <h3>Générations Croissance durable</h3>\r
        <div class="growth-global-container">\r
          <div class="growth-global-container__left">\r
            <p>\r
              Proposé par <strong>Generali Vie</strong>, Entreprise régie par le\r
              Code des Assurances,\r
              <strong>Générations Croiss@nce durable</strong> est un fonds\r
              croissance de nouvelle génération conforme à la loi PACTE (Plan\r
              d’Action pour la Croissance et la Transformation des Entreprises).\r
              Il bénéficie du savoir-faire et l’expertise de Generali Vie,\r
              précurseur dans ce domaine. (1) <br /><br />\r
              <strong>Générations Croiss@nce durable</strong> offre une garantie\r
              partielle en capital à hauteur de 80 %, au terme de l’engagement\r
              compris entre 8 et 30 ans, choisi par le client. Le capital reste\r
              disponible à tout moment2, mais la garantie partielle du capital\r
              ne s’applique pas et expose à une perte en capital, total ou\r
              partiel. <br /><br />\r
              <strong>Générations Croiss@nce durable</strong> accompagne la\r
              relance économique avec une exposition marquée aux PME. Il repose\r
              sur une allocation d’actifs dynamique, diversifiée et durable\r
              intégrant des critères ESG (environnementaux, sociaux et de\r
              gouvernance). La croissance bénéficie d’un mécanisme de\r
              provisionnement (Provision Collective Différée) qui peut permettre\r
              de lisser la performance dans le temps en cas de forte volatilité\r
              des marchés et peut être source de performance complémentaire car\r
              elle est investie dans des actifs potentiellement dynamiques.\r
            </p>\r
          </div>\r
          <div class="growth-global-container__right">\r
            <img\r
              src="/assets/images/fond-croissance-icons-placeholder.png"\r
              alt="placeholder"\r
            />\r
            <div class="growth-global-container__right__btns-container">\r
              <div class="growth-global-container__right__btns-container__btn">\r
                <p>Reporting</p>\r
                <svg\r
                  width="16"\r
                  height="11"\r
                  viewBox="0 0 16 11"\r
                  fill="none"\r
                  xmlns="http://www.w3.org/2000/svg"\r
                >\r
                  <path\r
                    d="M15.7063 5.70859C16.0969 5.31797 16.0969 4.68359 15.7063 4.29297L11.7063 0.292969C11.3156 -0.0976562 10.6812 -0.0976562 10.2906 0.292969C9.9 0.683594 9.9 1.31797 10.2906 1.70859L12.5844 4.00234H1C0.446875 4.00234 0 4.44922 0 5.00234C0 5.55547 0.446875 6.00234 1 6.00234H12.5844L10.2906 8.29609C9.9 8.68672 9.9 9.32109 10.2906 9.71172C10.6812 10.1023 11.3156 10.1023 11.7063 9.71172L15.7063 5.71172V5.70859Z"\r
                    fill="currentColor"\r
                  />\r
                </svg>\r
              </div>\r
              <div class="growth-global-container__right__btns-container__btn">\r
                <p>Brochure</p>\r
                <svg\r
                  width="16"\r
                  height="11"\r
                  viewBox="0 0 16 11"\r
                  fill="none"\r
                  xmlns="http://www.w3.org/2000/svg"\r
                >\r
                  <path\r
                    d="M15.7063 5.70859C16.0969 5.31797 16.0969 4.68359 15.7063 4.29297L11.7063 0.292969C11.3156 -0.0976562 10.6812 -0.0976562 10.2906 0.292969C9.9 0.683594 9.9 1.31797 10.2906 1.70859L12.5844 4.00234H1C0.446875 4.00234 0 4.44922 0 5.00234C0 5.55547 0.446875 6.00234 1 6.00234H12.5844L10.2906 8.29609C9.9 8.68672 9.9 9.32109 10.2906 9.71172C10.6812 10.1023 11.3156 10.1023 11.7063 9.71172L15.7063 5.71172V5.70859Z"\r
                    fill="currentColor"\r
                  />\r
                </svg>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <img src="/assets/images/offre-booster.png" alt="" />\r
      </div>\r
    </div>\r
  </div>\r
  <div class="account-unit-container hidden">\r
    <div class="account-unit-container__btns-container">\r
      <div class="account-unit-container__btns-container__btn" data-attr="opc">\r
        <p class="account-unit-container__btns-container__btn__text">OPC</p>\r
      </div>\r
      <div class="account-unit-container__btns-container__btn" data-attr="sci">\r
        <p class="account-unit-container__btns-container__btn__text">SCI / SCPI / OPCI</p>\r
      </div>\r
      <div class="account-unit-container__btns-container__btn" data-attr="action">\r
        <p class="account-unit-container__btns-container__btn__text">Actions</p>\r
      </div>\r
      <div class="account-unit-container__btns-container__btn" data-attr="structured-funds">\r
        <p class="account-unit-container__btns-container__btn__text">Fonds structurés</p>\r
      </div>\r
      <div class="account-unit-container__btns-container__btn" data-attr="private-equity">\r
        <p class="account-unit-container__btns-container__btn__text">Private Equity</p>\r
      </div>\r
    </div>\r
    <div class="tunnel-array-container hidden">\r
      <div class="table_wrapper">\r
        <!--ARRAY LIBELLE-->\r
        <div class="table_tr libelle">\r
          <div class="table_td bigGrow">\r
            <p>Libellé</p>\r
          </div>\r
          <div class="table_td mediumGrow">\r
            <a href="#jsModal3" id="popup3" class="jsModalTrigger info_popup"\r
              >Notation Morningstar</a\r
            >\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td mediumGrow">\r
            <p>Valeur de la part <small>(et date de valeur)</small></p>\r
          </div>\r
          <div class="table_td">\r
            <a href="#jsModal4" id="popup4" class="jsModalTrigger info_popup"\r
              >SRRI</a\r
            >\r
          </div>\r
          <div class="table_td">\r
            <p>Risque <small>sur&nbsp;5&nbsp;ans</small></p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td performance">\r
            <p><small>Cours précédent</small></p>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt">\r
              <small>Depuis le 1er janvier</small>\r
            </p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt"><small>Sur 1 an glissant</small></p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt">\r
              <small>Sur<br />5 ans</small>\r
            </p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt">\r
              <small>Depuis le 1er janvier</small>\r
            </p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt"><small>Sur 1 an glissant</small></p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt">\r
              <small>Sur<br />5 ans</small>\r
            </p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
        <!--END ARRAY LIBELLE-->\r
\r
        <!--SEPARATOR TITLE ARRAY-->\r
        <div class="title_separator">\r
          <strong>Actions Asie Pacifique</strong>\r
          <p>Zones Particulières</p>\r
        </div>\r
        <!--END SEPARATOR TITLE ARRAY-->\r
\r
        <!--CONTENT ARRAY-->\r
\r
        <!--TR-->\r
        <div class="table_tr label_isr">\r
          <!--AJOUT PANIER / FAVORIS / ALERTE-->\r
          <div class="panel_shop">\r
            <div class="add_obj add_shop addtocart">\r
              <!--<span class="cart-item"></span>-->\r
              <svg\r
                class="picto panier"\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(-5.76 -7.367)">\r
                  <circle class="st_orange" cx="43.3" cy="44.9" r="37.5" />\r
                  <path\r
                    class="st_white"\r
                    d="M62.2,34.4c-0.1-2-1.9-3.5-3.9-3.4h-4.4v-2.4c-0.4-4.9-4.6-8.7-9.6-8.4c-4.9-0.3-9.2,3.4-9.6,8.4V31h-4.3\r
                              c-2-0.1-3.7,1.4-3.9,3.4l0,0l-2,24.3c0.2,2,1.9,3.5,3.9,3.4h31.9c2,0.1,3.8-1.4,3.9-3.4L62.2,34.4z M37.6,28.6\r
                              c0.3-3.5,3.3-6.2,6.8-6c3.5-0.2,6.6,2.4,6.8,6V31H37.6V28.6z M29.4,34.4c0-0.6,0.6-1,1.1-1h27.8c0.6,0,1.1,0.4,1.1,1l0,0V36\r
                              c0.1,7.3-6.7,13.3-15.1,13.4c-8.3,0-15.2-5.9-15.3-13.2l0,0L29.4,34.4z M60.4,59.7h-32c-0.6,0-1.1-0.4-1.2-1l1.3-15.4\r
                              c4.7,7.6,15.5,10.5,24.3,6.4c3-1.4,5.6-3.6,7.3-6.4l1.3,15.5C61.4,59.3,60.9,59.7,60.4,59.7L60.4,59.7z"\r
                  />\r
                </g>\r
              </svg>\r
              <svg\r
                class="picto corbeille"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <circle\r
                  id="Ellipse_162"\r
                  class="st_orange"\r
                  cx="37.5"\r
                  cy="37.5"\r
                  r="37.5"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M31.8,48.8v-16c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3C32.4,50.1,31.8,49.5,31.8,48.8\r
                          z"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M40.7,48.8v-16c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3S40.7,49.5,40.7,48.8z"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M54.8,20h-9.3v-2.7c0-1.4-1.1-2.6-2.6-2.7H32.2c-1.5,0-2.7,1.2-2.7,2.7V20h-9.3c-0.7,0-1.3,0.6-1.3,1.3\r
                          s0.6,1.3,1.3,1.3h2.7v27.3c0,2.6,2.1,4.7,4.7,4.7h20c2.6,0,4.6-2.1,4.6-4.7V22.7h2.7c0.7,0,1.3-0.6,1.3-1.3\r
                          C56.1,20.6,55.6,20,54.8,20z M32.2,17.3h10.7V20H32.2V17.3z M49.5,49.9c0,1.1-0.9,2-2,2h-20c-1.1,0-2-0.9-2-2V22.7h24V49.9z"\r
                />\r
              </svg>\r
              <p>Ajouter à ma sélection</p>\r
            </div>\r
            <div class="add_obj add_alert">\r
              <svg\r
                class="picto"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 212.6 212.6"\r
                style="enable-background: new 0 0 212.6 212.6"\r
                xml:space="preserve"\r
              >\r
                <circle class="st_white" cx="106.3" cy="106.3" r="106.3" />\r
                <g>\r
                  <path\r
                    class="st_cyan"\r
                    d="M172.3,154.1l-9.7-19.8c-3.1-6.4-4.7-13.4-4.7-20.6V80.1c-1.6-26.8-24-47.7-50.9-47.4h-1.1\r
c-26.9-0.3-49.3,20.5-50.9,47.4v33.6c0,7.1-1.7,14.1-4.9,20.5l-9.7,19.9c-0.9,1.7-0.2,3.8,1.5,4.6c0.5,0.2,1,0.4,1.6,0.4h40.7\r
c0.8,11.7,10.5,20.8,22.2,20.8c5.9,0,11.2-2.3,15.2-6c4-3.7,6.6-9,7-14.8h40.7c1.9,0,3.5-1.5,3.5-3.4\r
C172.6,155.1,172.5,154.6,172.3,154.1z M117.1,168.5c-2.9,2.9-6.8,4.5-10.8,4.5c-4,0-7.6-1.6-10.3-4c-2.7-2.5-4.6-6-5-9.9h30.6\r
C121.3,162.6,119.7,166,117.1,168.5z M49,152.2l7.4-14.8c3.6-7.3,5.4-15.4,5.5-23.5V80.4c1.4-23.2,20.8-41.2,44-40.8h1.1\r
c23.2-0.3,42.6,17.7,44,40.8v33.3c0,8.2,1.9,16.2,5.5,23.5l7.3,14.9L49,152.2z"\r
                  />\r
                  <path\r
                    class="st_white act"\r
                    d="M121.6,159.1c-0.3,3.6-1.9,6.9-4.5,9.4c-2.9,2.9-6.8,4.5-10.8,4.5c-4,0-7.6-1.6-10.3-4c-2.7-2.5-4.6-6-5-9.9\r
H121.6z"\r
                  />\r
                  <path\r
                    class="st_white act"\r
                    d="M163.6,152.2l-114.7,0l7.4-14.8c3.6-7.3,5.4-15.4,5.5-23.5V80.4c1.4-23.2,20.8-41.2,44-40.8h1.1\r
c23.2-0.3,42.6,17.7,44,40.8v33.3c0,8.2,1.9,16.2,5.5,23.5L163.6,152.2z"\r
                  />\r
                </g>\r
              </svg>\r
              <p>Créer une alerte</p>\r
            </div>\r
            <div class="add_obj add_fav">\r
              <svg\r
                class="picto"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <circle class="st_white" cx="37.5" cy="37.5" r="37.5" />\r
                <g>\r
                  <g>\r
                    <path\r
                      class="st_white active"\r
                      d="M61.4,27.9c0,12-19.5,26.2-24,29.3C33,54.1,13.6,39.8,13.6,27.9c0-4.5,2.5-8.6,6.6-10.7\r
                                      c1.7-0.9,3.6-1.3,5.3-1.3c4.3,0,8.4,2.4,10.5,6.6l1.4,2.9l1.4-2.9c2-4,6.2-6.6,10.7-6.6C56.1,16.1,61.4,21.4,61.4,27.9z"\r
                    />\r
                    <path\r
                      class="st_cyan"\r
                      d="M48.6,15.2c-4.4,0-8.6,2.1-11.2,5.6c-4-5.4-11.2-7.2-17.4-4.1c-4.8,2.4-7.7,7.2-7.7,12.5\r
                                      c0,13.9,23.3,29.5,24.3,30.1l0.8,0.5l0.8-0.5c1-0.6,24.4-16.1,24.4-30.1C62.6,21.5,56.4,15.2,48.6,15.2z M21.4,19.3\r
                                      c1.6-0.8,3.3-1.2,5-1.2c4,0,7.8,2.2,9.7,6.1l1.3,2.7l1.3-2.7c1.8-3.7,5.7-6.1,9.9-6.1c6.1,0,11,4.9,11,11\r
                                      c0,11.1-18.1,24.2-22.2,27.1c-4.1-2.9-22.1-16.1-22.1-27.1C15.4,25,17.7,21.2,21.4,19.3z"\r
                    />\r
                  </g>\r
                </g>\r
              </svg>\r
              <p>Ajouter à mes favoris</p>\r
            </div>\r
          </div>\r
          <!--END AJOUT PANIER / FAVORIS / ALERTE-->\r
\r
          <div class="table_td bigGrow mob_line_cpc">\r
            <div class="actions">\r
              <a href="#jsModal8" id="popup8" class="jsModalTrigger info_popup">\r
                <strong>AMILTON PREMIUM EUROPE R</strong>\r
                <p>FR0010687749</p>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="table_td mediumGrow star mob_morningstar">\r
            <p class="libelle_mob_t">\r
              <strong>Notation Morningstar&nbsp;:</strong>\r
            </p>\r
            <div class="note_star">\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
            </div>\r
          </div>\r
          <div class="table_td mediumGrow value_part mob_line_cpc">\r
            <p class="libelle_mob_t">\r
              <strong>Valeur de la part</strong> au 15/09/2021&nbsp;:\r
            </p>\r
            <strong>68,39€</strong>\r
            <p class="hidden">15/09/2021</p>\r
          </div>\r
          <div class="table_td mob_ssri">\r
            <p class="libelle_mob_t"><strong>SRRI&nbsp;:</strong></p>\r
            <p><strong>3</strong>/7</p>\r
          </div>\r
          <div class="table_td mob_risque">\r
            <p class="libelle_mob_t">\r
              <strong>Risque</strong> sur 5 ans&nbsp;:\r
            </p>\r
            <strong>20,29%</strong>\r
          </div>\r
          <div class="table_td mob_performance libelle_perf">\r
            <p class="libelle_mob_t">Cours précédent</p>\r
            <p>1,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Depuis le 1er janvier</p>\r
            <p>2,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 3 mois</p>\r
            <p>3,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 1 an</p>\r
            <p>4,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 3 ans</p>\r
            <p>5,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 5 ans</p>\r
            <p>6,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 10 ans</p>\r
            <p>7,57%</p>\r
          </div>\r
        </div>\r
        <!--END TR-->\r
\r
        <!--TR-->\r
        <div class="table_tr label_isr">\r
          <!--AJOUT PANIER / FAVORIS / ALERTE-->\r
          <div class="panel_shop">\r
            <div class="add_obj add_shop addtocart">\r
              <!--<span class="cart-item"></span>-->\r
              <svg\r
                class="picto panier"\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(-5.76 -7.367)">\r
                  <circle class="st_orange" cx="43.3" cy="44.9" r="37.5" />\r
                  <path\r
                    class="st_white"\r
                    d="M62.2,34.4c-0.1-2-1.9-3.5-3.9-3.4h-4.4v-2.4c-0.4-4.9-4.6-8.7-9.6-8.4c-4.9-0.3-9.2,3.4-9.6,8.4V31h-4.3\r
                              c-2-0.1-3.7,1.4-3.9,3.4l0,0l-2,24.3c0.2,2,1.9,3.5,3.9,3.4h31.9c2,0.1,3.8-1.4,3.9-3.4L62.2,34.4z M37.6,28.6\r
                              c0.3-3.5,3.3-6.2,6.8-6c3.5-0.2,6.6,2.4,6.8,6V31H37.6V28.6z M29.4,34.4c0-0.6,0.6-1,1.1-1h27.8c0.6,0,1.1,0.4,1.1,1l0,0V36\r
                              c0.1,7.3-6.7,13.3-15.1,13.4c-8.3,0-15.2-5.9-15.3-13.2l0,0L29.4,34.4z M60.4,59.7h-32c-0.6,0-1.1-0.4-1.2-1l1.3-15.4\r
                              c4.7,7.6,15.5,10.5,24.3,6.4c3-1.4,5.6-3.6,7.3-6.4l1.3,15.5C61.4,59.3,60.9,59.7,60.4,59.7L60.4,59.7z"\r
                  />\r
                </g>\r
              </svg>\r
              <svg\r
                class="picto corbeille"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <circle\r
                  id="Ellipse_162"\r
                  class="st_orange"\r
                  cx="37.5"\r
                  cy="37.5"\r
                  r="37.5"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M31.8,48.8v-16c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3C32.4,50.1,31.8,49.5,31.8,48.8\r
                          z"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M40.7,48.8v-16c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3S40.7,49.5,40.7,48.8z"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M54.8,20h-9.3v-2.7c0-1.4-1.1-2.6-2.6-2.7H32.2c-1.5,0-2.7,1.2-2.7,2.7V20h-9.3c-0.7,0-1.3,0.6-1.3,1.3\r
                          s0.6,1.3,1.3,1.3h2.7v27.3c0,2.6,2.1,4.7,4.7,4.7h20c2.6,0,4.6-2.1,4.6-4.7V22.7h2.7c0.7,0,1.3-0.6,1.3-1.3\r
                          C56.1,20.6,55.6,20,54.8,20z M32.2,17.3h10.7V20H32.2V17.3z M49.5,49.9c0,1.1-0.9,2-2,2h-20c-1.1,0-2-0.9-2-2V22.7h24V49.9z"\r
                />\r
              </svg>\r
              <p>Ajouter à ma sélection</p>\r
            </div>\r
            <div class="add_obj add_alert">\r
              <svg\r
                class="picto"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 212.6 212.6"\r
                style="enable-background: new 0 0 212.6 212.6"\r
                xml:space="preserve"\r
              >\r
                <circle class="st_white" cx="106.3" cy="106.3" r="106.3" />\r
                <g>\r
                  <path\r
                    class="st_cyan"\r
                    d="M172.3,154.1l-9.7-19.8c-3.1-6.4-4.7-13.4-4.7-20.6V80.1c-1.6-26.8-24-47.7-50.9-47.4h-1.1\r
c-26.9-0.3-49.3,20.5-50.9,47.4v33.6c0,7.1-1.7,14.1-4.9,20.5l-9.7,19.9c-0.9,1.7-0.2,3.8,1.5,4.6c0.5,0.2,1,0.4,1.6,0.4h40.7\r
c0.8,11.7,10.5,20.8,22.2,20.8c5.9,0,11.2-2.3,15.2-6c4-3.7,6.6-9,7-14.8h40.7c1.9,0,3.5-1.5,3.5-3.4\r
C172.6,155.1,172.5,154.6,172.3,154.1z M117.1,168.5c-2.9,2.9-6.8,4.5-10.8,4.5c-4,0-7.6-1.6-10.3-4c-2.7-2.5-4.6-6-5-9.9h30.6\r
C121.3,162.6,119.7,166,117.1,168.5z M49,152.2l7.4-14.8c3.6-7.3,5.4-15.4,5.5-23.5V80.4c1.4-23.2,20.8-41.2,44-40.8h1.1\r
c23.2-0.3,42.6,17.7,44,40.8v33.3c0,8.2,1.9,16.2,5.5,23.5l7.3,14.9L49,152.2z"\r
                  />\r
                  <path\r
                    class="st_white act"\r
                    d="M121.6,159.1c-0.3,3.6-1.9,6.9-4.5,9.4c-2.9,2.9-6.8,4.5-10.8,4.5c-4,0-7.6-1.6-10.3-4c-2.7-2.5-4.6-6-5-9.9\r
H121.6z"\r
                  />\r
                  <path\r
                    class="st_white act"\r
                    d="M163.6,152.2l-114.7,0l7.4-14.8c3.6-7.3,5.4-15.4,5.5-23.5V80.4c1.4-23.2,20.8-41.2,44-40.8h1.1\r
c23.2-0.3,42.6,17.7,44,40.8v33.3c0,8.2,1.9,16.2,5.5,23.5L163.6,152.2z"\r
                  />\r
                </g>\r
              </svg>\r
              <p>Créer une alerte</p>\r
            </div>\r
            <div class="add_obj add_fav">\r
              <svg\r
                class="picto"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <circle class="st_white" cx="37.5" cy="37.5" r="37.5" />\r
                <g>\r
                  <g>\r
                    <path\r
                      class="st_white active"\r
                      d="M61.4,27.9c0,12-19.5,26.2-24,29.3C33,54.1,13.6,39.8,13.6,27.9c0-4.5,2.5-8.6,6.6-10.7\r
                                      c1.7-0.9,3.6-1.3,5.3-1.3c4.3,0,8.4,2.4,10.5,6.6l1.4,2.9l1.4-2.9c2-4,6.2-6.6,10.7-6.6C56.1,16.1,61.4,21.4,61.4,27.9z"\r
                    />\r
                    <path\r
                      class="st_cyan"\r
                      d="M48.6,15.2c-4.4,0-8.6,2.1-11.2,5.6c-4-5.4-11.2-7.2-17.4-4.1c-4.8,2.4-7.7,7.2-7.7,12.5\r
                                      c0,13.9,23.3,29.5,24.3,30.1l0.8,0.5l0.8-0.5c1-0.6,24.4-16.1,24.4-30.1C62.6,21.5,56.4,15.2,48.6,15.2z M21.4,19.3\r
                                      c1.6-0.8,3.3-1.2,5-1.2c4,0,7.8,2.2,9.7,6.1l1.3,2.7l1.3-2.7c1.8-3.7,5.7-6.1,9.9-6.1c6.1,0,11,4.9,11,11\r
                                      c0,11.1-18.1,24.2-22.2,27.1c-4.1-2.9-22.1-16.1-22.1-27.1C15.4,25,17.7,21.2,21.4,19.3z"\r
                    />\r
                  </g>\r
                </g>\r
              </svg>\r
              <p>Ajouter à mes favoris</p>\r
            </div>\r
          </div>\r
          <!--END AJOUT PANIER / FAVORIS / ALERTE-->\r
\r
          <div class="table_td bigGrow mob_line_cpc">\r
            <div class="actions">\r
              <a\r
                href="#jsModal10"\r
                id="popup10"\r
                class="jsModalTrigger info_popup"\r
              >\r
                <strong>AMILTON PREMIUM EUROPE R</strong>\r
                <p>FR0010687749</p>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="table_td mediumGrow star mob_morningstar">\r
            <p class="libelle_mob_t">\r
              <strong>Notation Morningstar&nbsp;:</strong>\r
            </p>\r
            <div class="note_star">\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
            </div>\r
          </div>\r
          <div class="table_td mediumGrow value_part mob_line_cpc">\r
            <p class="libelle_mob_t">\r
              <strong>Valeur de la part</strong> au 15/09/2021&nbsp;:\r
            </p>\r
            <strong>68,39€</strong>\r
            <p class="hidden">15/09/2021</p>\r
          </div>\r
          <div class="table_td mob_ssri">\r
            <p class="libelle_mob_t"><strong>SRRI&nbsp;:</strong></p>\r
            <p><strong>3</strong>/7</p>\r
          </div>\r
          <div class="table_td mob_risque">\r
            <p class="libelle_mob_t">\r
              <strong>Risque</strong> sur 5 ans&nbsp;:\r
            </p>\r
            <strong>20,29%</strong>\r
          </div>\r
          <div class="table_td mob_performance libelle_perf">\r
            <p class="libelle_mob_t">Cours précédent</p>\r
            <p>1,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Depuis le 1er janvier</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 3 mois</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 1 an</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 3 ans</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 5 ans</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 10 ans</p>\r
            <p>112,57%</p>\r
          </div>\r
        </div>\r
        <!--END TR-->\r
\r
        <!--END CONTENT ARRAY-->\r
      </div>\r
    </div>\r
    <div class="structured-fund-container hidden">\r
      <div class="structured-fund-container__text-container">\r
        <h3>Que sont les fonds structurés ?</h3>\r
        <p>\r
          Un produit structuré est un assemblage arrayContainerde plusieurs\r
          instruments financiers qui permettent à une banque ou une institution\r
          financière de proposer à ses clients différents couples\r
          rendement/risque en fonction de leurs attentes. Le rendement du\r
          produit structuré dépend d’un sous-jacent. Celui-ci peut être un\r
          indice (CAC 40, Eurostoxx 50,…) un panier d’actions voire la signature\r
          d’une ou plusieurs entreprises…\r
        </p>\r
        <div class="structured-fund-container__text-container__btn-lexicon">\r
          <p>Voir la définition du lexique</p>\r
        </div>\r
        <h3>Nos fonds structurés à saisir</h3>\r
\r
        <div class="structured-fund-cards-container">\r
          <div class="structured-fund-cards-container__row-container">\r
            <div class="structured-fund-cards-container__row-container__card-container">\r
              <div class="structured-fund-cards-container__row-container__card-container__header">\r
                <p>Opportunité Rendement Mars 2028</p>\r
              </div>\r
              <div class="structured-fund-cards-container__row-container__card-container__body">\r
                <div class="structured-fund-cards-container__row-container__card-container__body__text-container">\r
                  <p><b>Disponible jusqu’au : </b>31/03/2023</p>\r
                  <p><b>Indice sous-jacent : </b>EURO STOXX 50</p>\r
                  <p><b>Maturité : </b> 5 ans</p>\r
                  <p>\r
                    <b>Disponible sur : </b>Altaprofits Vie, Altaprofits\r
                    Capitalisation, Altaprofits PEP, Altaprofits Madelin,\r
                    Generali Epargne.\r
                  </p>\r
                  <p>\r
                    <b>Garantie du capital : </b>100% garanti à échéance\r
                  </p>\r
                  <p><b>Objectif de gain : </b>17% brut à échéance.</p>\r
                </div>\r
                <div class="structured-fund-cards-container__row-container__card-container__body__btns-container">\r
                  <div class="structured-fund-cards-container__row-container__card-container__body__btns-container__btn">\r
                    <p>A saisir</p>\r
                  </div>\r
                  <div class="structured-fund-cards-container__row-container__card-container__body__btns-container__btn--light">\r
                    <p>En savoir plus</p>\r
                  </div>\r
                </div>\r
                <div class="structured-fund-cards-container__row-container__card-container__body__text-container-end">\r
                  <a>Document d’information clé</a>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <h3>Nos fonds structurés en cours</h3>\r
        <div class="structured-fund-grid-container">\r
          <div class="structured-fund-grid-container__header">\r
            <p>Support</p>\r
            <p>Objectif</p>\r
            <p>Date de lancement⁽¹⁾</p>\r
            <p>Date de remboursement</p>\r
            <p>performance réalisé⁽²⁾</p>\r
          </div>\r
\r
          <div class="structured-fund-grid-container__body">\r
            <p>Athéna transition janvier 2023</p>\r
            <p>6%</p>\r
            <p>27/01/2023</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Athéna transition septembre 2022</p>\r
            <p>6%</p>\r
            <p>30/09/2022</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Athena oxygene avril 2022</p>\r
            <p>6.5%</p>\r
            <p>14/04/2022</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2022</p>\r
            <p>5%</p>\r
            <p>25/02/2022</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2021</p>\r
            <p>8%</p>\r
            <p>15/08/2021</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
        </div>\r
        <div class="structured-fund-grid-text-container">\r
          <p>⁽¹⁾ Date de constation initiale.</p>\r
          <p>⁽²⁾ Performance hors frais de gestion du contrat et fiscalité.</p>\r
        </div>\r
        <h3>Nos fonds structurés clôturés</h3>\r
        <div class="structured-fund-grid-container">\r
          <div class="structured-fund-grid-container__header">\r
            <p>Support</p>\r
            <p>Objectif</p>\r
            <p>Date de lancement⁽¹⁾</p>\r
            <p>Date de remboursement</p>\r
            <p>performance réalisé⁽²⁾</p>\r
          </div>\r
\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2020</p>\r
            <p>8%</p>\r
            <p>15/12/2020</p>\r
            <p>15/12/2021</p>\r
            <p>8%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2019</p>\r
            <p>8%</p>\r
            <p>20/12/2019</p>\r
            <p>21/06/2021</p>\r
            <p>12%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2018</p>\r
            <p>8%</p>\r
            <p>30/10/2018</p>\r
            <p>13/11/2019</p>\r
            <p>8%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2017</p>\r
            <p>6%</p>\r
            <p>02/06/2017</p>\r
            <p>18/06/2018</p>\r
            <p>6%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2</p>\r
            <p>10.5%</p>\r
            <p>29/06/2011</p>\r
            <p>29/04/2016</p>\r
            <p>-10%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement1</p>\r
            <p>10.5%</p>\r
            <p>27/01/2011</p>\r
            <p>27/01/2016</p>\r
            <p>-10%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>AltaMultioblig2</p>\r
            <p>6.61%</p>\r
            <p>30/06/2010</p>\r
            <p>30/06/2015</p>\r
            <p>33.05%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>AltaMultioblig1</p>\r
            <p>7.31%</p>\r
            <p>21/12/2009</p>\r
            <p>21/12/2017</p>\r
            <p>47.55%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Gamme absolue 5 ans</p>\r
            <p>6.20%</p>\r
            <p>30/06/2009</p>\r
            <p>03/09/2014</p>\r
            <p>32.09%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Gamme absolue 5 ans</p>\r
            <p>6.20%</p>\r
            <p>30/06/2009</p>\r
            <p>03/09/2014</p>\r
            <p>32.09%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Gamme absolue 5 ans</p>\r
            <p>6.20%</p>\r
            <p>30/06/2009</p>\r
            <p>03/09/2014</p>\r
            <p>32.09%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Harmonie Juillet 2020</p>\r
            <p>2.80%/trimestre</p>\r
            <p>-</p>\r
            <p>-</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Europe Opportunité</p>\r
            <p>3%/trimestre</p>\r
            <p>-</p>\r
            <p>-</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Calypso Juin 2020 Part HO</p>\r
            <p>1.5%/trimestre (soit 6% par an)</p>\r
            <p>24/06/2020</p>\r
            <p>13/07/2032</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>K Euro Solutions Mai 2020 Part G</p>\r
            <p>1%/trimestre (soit 4% par an)</p>\r
            <p>25/05/2020</p>\r
            <p>12/06/2030</p>\r
            <p>-</p>\r
          </div>\r
        </div>\r
        <div class="structured-fund-grid-text-container">\r
          <p>⁽¹⁾ Date de constation initiale.</p>\r
          <p>⁽²⁾ Performance hors frais de gestion du contrat et fiscalité.</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,Vn=[{name:"button",template:F},{name:"iconButton",template:O},{name:"toggleButton",template:H},{name:"tab",template:$},{name:"link",template:J},{name:"fileLink",template:Q},{name:"tag",template:Y}],Tn=[{name:"breadcrumb",template:W},{name:"tabsNavigation",template:K},{name:"keypointCard",template:Z},{name:"articleCard",template:X},{name:"awardItem",template:nn},{name:"feeCard",template:rn},{name:"managementGuidedCard",template:en},{name:"managementOthersCard",template:sn}],zn=[{name:"footer",template:tn},{name:"wrapper",template:an},{name:"homeHeroBanner",template:cn},{name:"promoBanner",template:on},{name:"companyValueSection",template:ln},{name:"advicesSection",template:dn},{name:"insurancePartnersSection",template:pn},{name:"investmentDisclaimerSection",template:_n},{name:"awardsSection",template:un},{name:"reviewsSection",template:mn},{name:"partnerNewsSection",template:vn},{name:"productHeroBanner",template:gn},{name:"productAdvantagesSection",template:wn},{name:"productManagementSection",template:fn},{name:"productInsurancePartnerSection",template:hn},{name:"productContractualDocumentationSection",template:bn},{name:"productFeesSection",template:yn},{name:"faqRedirectionSection",template:xn},{name:"managementAdvantagesSection",template:Cn},{name:"managementPlusSection",template:Ln},{name:"assetsSupportSection",template:kn},{name:"assetsPilotedSection",template:En},{name:"partnerPilotedSection",template:Pn},{name:"headerPilotedSection",template:Rn},{name:"headerSupportSection",template:An},{name:"contractsPilotedSection",template:In},{name:"contractsSupportSection",template:Sn}],qn=[{name:"components",value:Vn},{name:"patterns",value:Tn},{name:"blocks",value:zn}];qn.forEach(n=>{const r=document.createElement("section");r.classList.add("ads");const a=document.createElement("h3");a.innerText=n.name.toUpperCase(),r.appendChild(a);const c=document.createElement("div");c.classList.add("ads",n.name),r.appendChild(c),n.value.forEach(e=>{const s=document.createElement("div");s.id=e.name,s.classList.add("section","ads");const o=document.createElement("h4");o.innerText=e.name,s.appendChild(o);const h=document.createElement("div");h.innerHTML=e.template,h.classList.add("sub-section","ads"),s.appendChild(h),r.appendChild(s)}),document.querySelector("main.ads").appendChild(r)});const p=document.querySelector(".management-others-card__explainations");if(p){let n=0;const r=p.querySelectorAll(".management-others-card__explaination");for(let a=0;a<r.length;a++){const e=r[a].offsetHeight;e>n&&(n=e)}p.style.setProperty("height",`calc(${n}px + 2*var(--spacing-8))`)}const E=document.querySelectorAll(".management-others-card__link");E&&E.forEach(n=>{let r=n.dataset.name,a=p.querySelector(".management-others-card__explaination[data-name="+r+"]");n.addEventListener("mouseenter",()=>{a.classList.add("active")}),n.addEventListener("mouseleave",()=>{a.classList.remove("active")})});const P={speed:200},l=document.querySelector(".awards-section__content");if(l){const n=l.cloneNode(!0);l.classList.add("primary"),n.classList.add("secondary"),l.parentNode.appendChild(n);const r=l.querySelectorAll(".award-item").length;l.style.setProperty("animation",`awards-section--primary ${r*1e3/P.speed}s linear infinite`),n.style.setProperty("animation",`awards-section--secondary ${r*1e3/P.speed}s linear infinite`)}const Bn={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.23%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},B=document.querySelectorAll(".btns-container__first-choice-container__btn"),R=document.querySelector(".btns-container__second-choice-container"),y=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),M=document.querySelectorAll(".filters-container__btns-container__btn"),Mn=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),A=document.querySelector(".results-container"),x=document.querySelectorAll(".toggle-button"),Un=document.querySelectorAll(".card-container, .grid-row-body"),_=document.querySelector(".cards-display-container"),d=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body");const i={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};B.forEach(n=>n.addEventListener("click",()=>jn(n)));y.forEach(n=>n.addEventListener("click",()=>Dn(n)));M.forEach(n=>n.addEventListener("click",()=>Nn(n)));x.forEach(n=>n.addEventListener("click",()=>Gn()));Un.forEach(n=>n.addEventListener("click",()=>U(n)));const jn=n=>{console.log(R),i.secondChoice="",y.forEach(r=>r.classList.remove("active")),B.forEach(r=>r.classList.remove("active")),Mn.forEach(r=>r.classList.add("hidden")),n.classList.add("active"),i.firstChoice=n.getAttribute("data-attr"),R.classList.remove("hidden"),document.querySelector(`.${n.getAttribute("data-attr")}`).classList.remove("hidden"),C()},Dn=n=>{y.forEach(r=>r.classList.remove("active")),i.secondChoice=n.getAttribute("data-attr"),n.classList.add("active"),C()},Nn=n=>{i.thirdChoice=n.getAttribute("data-attr"),M.forEach(r=>r.classList.remove("active")),n.classList.add("active"),C()},C=()=>{i.firstChoice!==""&&i.secondChoice!==""?A.classList.remove("hidden"):A.classList.add("hidden"),d.innerHTML="",_.innerHTML="";const n=Bn[i.firstChoice][i.secondChoice][i.thirdChoice];n.map(r=>_.innerHTML+=`
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${r.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===1?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===2?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===3?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===4?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===5?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===6?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${r.srri===7?"active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">7</p>
                  </div>
                </div>
              </div>
              <div class="card-container__card-informations">
                <p class="card-container__card-informations__percentage-rate">${r.percentageRate}</p>
                <p class="card-container__card-informations__card-information-text">
                  ${r.informations}
                </p>
                <svg class="card-container__card-informations__logo">
                    <use href="${r.iconUrl}#logo"></use>
                </svg>
              </div>
            </div>
    `),d.innerHTML+=`
                <div class="grid-container">
                  <div class="grid-container__grid-header">
                    <div>
                      <p></p>
                    </div>
                    <div>
                      <p>SRRI</p>
                    </div>
                    <div>
                      <p>YTD</p>
                    </div>
                    <div>
                      <p>N-1</p>
                    </div>
                    <div>
                      <p>Perf. 3ans</p>
                      <p>cumulé</p>
                    </div>
                    <div>
                      <p>Perf. 5ans</p>
                      <p>cumulé</p>
                    </div>
                    <div>
                      <p>Perf.</p>
                      <p>depuis création</p>
                    </div>
                    <div>
                      <p>Volatilité</p>
                      <p>depuis création</p>
                    </div>
                  </div>
                </div>
    `,n.map(r=>d.innerHTML+=`
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${r.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${r.srri}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-ytd-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-n1-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf3year-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf5year-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf-item-container">
                    <p></p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-volatility-item-container">
                    <p></p>
                  </div>
                </div>
    `),document.querySelectorAll(".card-container, .grid-row-body").forEach(r=>r.addEventListener("click",()=>U(r)))},Gn=n=>{x.forEach(r=>{r.classList.toggle("toggle-button--active")}),j()},U=n=>{console.log("ok"),j(),document.querySelectorAll(".card-container, .grid-row-body").forEach(r=>r.classList.remove("active")),n.classList.add("active")},j=()=>{x.forEach(n=>{n.classList.contains("btn-parameter1")&&n.classList.contains("toggle-button--active")?_.classList.remove("hidden"):n.classList.contains("btn-parameter1")&&!n.classList.contains("toggle-button--active")&&_.classList.add("hidden"),n.classList.contains("btn-parameter2")&&n.classList.contains("toggle-button--active")?d.classList.remove("hidden"):n.classList.contains("btn-parameter2")&&!n.classList.contains("toggle-button--active")&&d.classList.add("hidden")})},Fn={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},t={firstChoice:"",secondChoice:"",thirdChoice:""},b=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),I=document.querySelector(".support-btns-container__second-choice-container"),On=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),f=document.querySelector(".btns-third-choice-container"),L=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),g=document.querySelectorAll(".btns-third-choice-container__btn"),w=document.querySelectorAll(".account-unit-container__btns-container__btn"),u=document.querySelector(".euro-fund-container"),m=document.querySelector(".growth-fund-container"),S=document.querySelector(".euro-fund-container__netissima-container"),V=document.querySelector(".growth-container"),D=document.querySelectorAll(".grid-row-body"),T=document.querySelector(".structured-fund-container"),v=document.querySelector(".account-unit-container"),z=document.querySelector(".tunnel-array-container"),q=document.querySelector(".euro-fund-container__cards-container"),Hn=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container");document.querySelector(".array-container");b.forEach(n=>n.addEventListener("click",()=>$n(n)));L.forEach(n=>n.addEventListener("click",()=>Jn(n)));g.forEach(n=>n.addEventListener("click",()=>Qn(n)));w.forEach(n=>n.addEventListener("click",()=>Yn(n)));Hn.forEach(n=>n.addEventListener("click",()=>N(n)));D.forEach(n=>n.addEventListener("click",()=>Wn(n)));const $n=n=>{g.forEach(r=>r.classList.remove("active")),b.forEach(r=>r.classList.remove("active")),u.classList.add("hidden"),v.classList.add("hidden"),m.classList.add("hidden"),f.classList.add("hidden"),n.classList.add("active"),I.classList.remove("hidden"),t.secondChoice="",t.thirdChoice="",L.forEach(r=>r.classList.remove("active")),b.forEach(r=>r.classList.remove("active")),On.forEach(r=>r.classList.add("hidden")),n.classList.add("active"),t.firstChoice=n.getAttribute("data-attr"),I.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${n.getAttribute("data-attr")}`).classList.remove("hidden"),G()},Jn=n=>{console.log("test"),g.forEach(r=>r.classList.remove("active")),f.classList.add("hidden"),u.classList.add("hidden"),v.classList.add("hidden"),m.classList.add("hidden"),L.forEach(r=>r.classList.remove("active")),t.secondChoice=n.getAttribute("data-attr"),n.classList.add("active"),f.classList.remove("hidden"),console.log(t),G(),k()},Qn=n=>{t.thirdChoice=n.getAttribute("data-attr"),g.forEach(r=>r.classList.remove("active")),n.classList.add("active"),Kn(n.getAttribute("data-attr")),k()},Yn=n=>{console.log(w),w.forEach(r=>r.classList.remove("active")),n.classList.add("active"),n.getAttribute("data-attr")!=="structured-funds"?(z.classList.remove("hidden"),T.classList.add("hidden")):(z.classList.add("hidden"),T.classList.remove("hidden"))},N=n=>{console.log("test"),document.querySelectorAll(".support-card-container").forEach(r=>r.classList.remove("active")),n.classList.add("active"),console.log(n),n.getAttribute("data-attr")==="Netissima"?S.classList.remove("hidden"):S.classList.add("hidden"),n.getAttribute("data-attr")==="growth-netissima"?V.classList.remove("hidden"):V.classList.add("hidden")},Wn=n=>{D.forEach(r=>r.classList.remove("active")),n.classList.add("active")},G=()=>{t.firstChoice==="assuranceVie"&&t.secondChoice==="altaprofitsVie"||t.firstChoice==="capitalisation"&&t.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),t.firstChoice!=="planEpargneRetraite"&&t.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},Kn=n=>{console.log("enter"),n==="euro"?(u.classList.remove("hidden"),k()):u.classList.add("hidden"),n==="growth"?m.classList.remove("hidden"):m.classList.add("hidden"),n==="unit"?v.classList.remove("hidden"):v.classList.add("hidden")},k=()=>{q.innerHTML="";const n=Fn[t.firstChoice][t.secondChoice][t.thirdChoice];n==null||n.map(r=>q.innerHTML+=`
    <div class="support-card-container" data-attr="${r.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${r.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${r.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${r.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${r.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(r=>r.addEventListener("click",()=>N(r)))};
