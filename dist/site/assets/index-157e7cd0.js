(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const _=`<a class="button button--primary" href="#"> Button</a>\r
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
`,u=`<a class="icon-button icon-button--light-theme" href="#">\r
    <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
</a>\r
\r
<a class="icon-button icon-button--dark-theme" href="#">\r
    <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
</a>\r
`,m=`<button class="toggle-button toggle-button--primary">\r
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
`,v=`<a class="tab">\r
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
</button>`,g=`<a class="link" href="#">Link</a>\r
\r
<a class="link link--arrow" href="#">Link</a>`,h='<a class="file-link" href="#">FileLink</a>',f='<span class="tag">Tag</span>',b=`<div class="breadcrumb">\r
    <a class="link" href="#">Notre offre</a>\r
    <span class="breadcrumb__separator">/</span>\r
    <a class="link" href="#">Assurance vie</a>\r
    <span class="breadcrumb__separator">/</span>\r
    <a class="link" href="#">Altaprofits Vie</a>\r
</div>`,w=`<div class="tabs-navigation">\r
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
</div>`,y=`<div class="keypoint-card">\r
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
`,k=`<a class="article-card" href="#">\r
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
`,I=`<div class="award-item">\r
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
`,E=`<div class="fee-card">\r
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
</div>`,L=`<div class="management-guided-card">\r
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
</div>`,x=`<div class="management-others-card">\r
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
</div>`,P=`<footer class="footer">\r
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
</footer>`,C=`<div class="wrapper wrapper--66-33">\r
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
</div>`,T=`<section class="home-hero-banner">\r
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
</section>`,R=`<section class="promo-banner">\r
    <a class="promo-banner__item" href="#">\r
        <img alt="Promo" class="promo-banner__image" src="/assets/images/promo_banner.jpg">\r
    </a>\r
</section>`,A=`<section class="company-value-section">\r
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
</section>`,V=`<section class="advices-section">\r
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
</section>`,B=`<section class="insurance-partners-section">\r
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
</section>`,S=`<section class="investment-disclaimer-section investment-disclaimer-section--info">\r
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
</section>`,j=`<section class="awards-section">\r
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
</section>`,q=`<section class="reviews-section">\r
    <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
    <div class="reviews-section__content">\r
        //TRUSTPILOT WIDGET\r
    </div>\r
    <a class="button button--secondary button--light-theme" href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
        tous les avis</a>\r
</section>`,D=`<section class="partners-news-section">\r
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
</section>`,z=`<section class="product-hero-banner">\r
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
</section>`,G=`<section class="product-insurance-partner-section">\r
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
</section>`,F=`<section class="product-contractual-documentation-section">\r
    <h3 class="product-contractual-documentation-section__title">Documentation contractuelle du contrat <span\r
            class="product-contractual-documentation-section__name">Altaprofits Vie</span>\r
    </h3>\r
    <div class="product-contractual-documentation-section__content">\r
        <a class="file-link" href="#">Conditions générales</a>\r
        <a class="file-link" href="#">Document d’Informations Clés (DIC)</a>\r
        <a class="file-link" href="#">Liste des supports financiers</a>\r
        <a class="file-link" href="#">Performances de la gestion pilotée</a>\r
    </div>\r
</section>`,N=`<div class="product-management-section">\r
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
</div>`,U=`<section class="product-advantages-section">\r
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
</section>`,M=`<section class="product-fees-section">\r
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
</section>`,O=`<section class="faq-redirection-section">\r
    <h3 class="faq-redirection-section__title">Vos questions les plus fréquentes</h3>\r
    <a class="button button--secondary button--dark-theme button--arrow" href="#">Consulter la FAQ</a>\r
</section>`,H=`<section class="management-advantages-section">\r
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
</section>`,W=`<section class="management-plus-section">\r
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
`,K=[{name:"button",template:_},{name:"iconButton",template:u},{name:"toggleButton",template:m},{name:"tab",template:v},{name:"link",template:g},{name:"fileLink",template:h},{name:"tag",template:f}],Q=[{name:"breadcrumb",template:b},{name:"tabsNavigation",template:w},{name:"keypointCard",template:y},{name:"articleCard",template:k},{name:"awardItem",template:I},{name:"feeCard",template:E},{name:"managementGuidedCard",template:L},{name:"managementOthersCard",template:x}],$=[{name:"footer",template:P},{name:"wrapper",template:C},{name:"homeHeroBanner",template:T},{name:"promoBanner",template:R},{name:"companyValueSection",template:A},{name:"advicesSection",template:V},{name:"insurancePartnersSection",template:B},{name:"investmentDisclaimerSection",template:S},{name:"awardsSection",template:j},{name:"reviewsSection",template:q},{name:"partnerNewsSection",template:D},{name:"productHeroBanner",template:z},{name:"productAdvantagesSection",template:U},{name:"productManagementSection",template:N},{name:"productInsurancePartnerSection",template:G},{name:"productContractualDocumentationSection",template:F},{name:"productFeesSection",template:M},{name:"faqRedirectionSection",template:O},{name:"managementAdvantagesSection",template:H},{name:"managementPlusSection",template:W}],J=[{name:"components",value:K},{name:"patterns",value:Q},{name:"blocks",value:$}];J.forEach(a=>{const n=document.createElement("section");n.classList.add("ads");const r=document.createElement("h3");r.innerText=a.name.toUpperCase(),n.appendChild(r);const t=document.createElement("div");t.classList.add("ads",a.name),n.appendChild(t),a.value.forEach(e=>{const s=document.createElement("div");s.id=e.name,s.classList.add("section","ads");const i=document.createElement("h4");i.innerText=e.name,s.appendChild(i);const l=document.createElement("div");l.innerHTML=e.template,l.classList.add("sub-section","ads"),s.appendChild(l),n.appendChild(s)}),document.querySelector("main.ads").appendChild(n)});const o=document.querySelector(".management-others-card__explainations");if(o){let a=0;const n=o.querySelectorAll(".management-others-card__explaination");for(let r=0;r<n.length;r++){const e=n[r].offsetHeight;e>a&&(a=e)}o.style.setProperty("height",`calc(${a}px + 2*var(--spacing-8))`)}const d=document.querySelectorAll(".management-others-card__link");d&&d.forEach(a=>{let n=a.dataset.name,r=o.querySelector(".management-others-card__explaination[data-name="+n+"]");a.addEventListener("mouseenter",()=>{r.classList.add("active")}),a.addEventListener("mouseleave",()=>{r.classList.remove("active")})});const p={speed:200},c=document.querySelector(".awards-section__content");if(c){const a=c.cloneNode(!0);c.classList.add("primary"),a.classList.add("secondary"),c.parentNode.appendChild(a);const n=c.querySelectorAll(".award-item").length;c.style.setProperty("animation",`awards-section--primary ${n*1e3/p.speed}s linear infinite`),a.style.setProperty("animation",`awards-section--secondary ${n*1e3/p.speed}s linear infinite`)}
