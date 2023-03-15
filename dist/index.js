import"./altaprofits.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const o=`<a class="button button--primary" href="#"> Button</a>\r
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
`,l=`<a class="icon-button icon-button--light-theme" href="#">\r
    <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
</a>\r
\r
<a class="icon-button icon-button--dark-theme" href="#">\r
    <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
</a>\r
`,p=`<button class="toggle-button toggle-button--primary">\r
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
`,d=`<button class="tab">\r
    <span class="tab__text">Tab</span>\r
</button>\r
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
</button>`,u=`<a class="link" href="#">Link</a>\r
\r
<a class="link link--arrow" href="#">Link</a>`,g=`<a class="file-link" href="#">\r
    <span class="file-link__text">FileLink</span>\r
</a>`,_=`<span class="tag">\r
    <span class="tag__text">Tag</span>\r
</span>`,m=`<div class="keypoint-card">\r
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
`,v=`<a class="article-card" href="#">\r
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
        <span class="article-card__tag tag"><span class="tag__text">Category</span></span>\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <h5 class="article-card__title">Article</h5>\r
        <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit\r
            amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--reversed" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <span class="article-card__tag tag"><span class="tag__text">Category</span></span>\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <h5 class="article-card__title">Article</h5>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--horizontal" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <span class="article-card__tag tag"><span class="tag__text">Category</span></span>\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <h5 class="article-card__title">Article</h5>\r
        <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit\r
            amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
    </div>\r
</a>\r
\r
`,b=`<section class="company-value-section">\r
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
</section>`,h=`<section class="advices-section">\r
    <h2 class="advices-section__title">Consultez nos conseils d’épargne</h2>\r
    <div class="advices-section__content">\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_default.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <h5 class="article-card__title">L’assurance vie : un outil pour transmettre votre patrimoine à un proche\r
                    sans lien de parenté</h5>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
        </a>\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_default.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <h5 class="article-card__title">L’assurance vie : un outil pour transmettre votre patrimoine à un proche\r
                    sans lien de parenté</h5>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
        </a>\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_default.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <h5 class="article-card__title">L’assurance vie : un outil pour transmettre votre patrimoine à un proche\r
                    sans lien de parenté</h5>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
        </a>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrez tous nos conseils</a>\r
</section>`,f=`<section class="insurance-partners-section">\r
    <h3 class="insurance-partners-section__title">Plus de 20 ans d’expertise à votre service<br> avec des partenaires\r
        assureurs</h3>\r
    <div class="insurance-partners-section__content">\r
        <svg class="logo logo--2x" viewBox="0 0 128 128">\r
            <use href="/assets/logos/generali.svg#logo"></use>\r
        </svg>\r
        <svg class="logo logo--2x" viewBox="0 0 128 128">\r
            <use href="/assets/logos/suravenir.svg#logo"></use>\r
        </svg>\r
        <svg class="logo logo--2x" viewBox="0 0 128 128">\r
            <use href="/assets/logos/swisslife.svg#logo"></use>\r
        </svg>\r
    </div>\r
</section>`,y=[{name:"button",template:o},{name:"iconButton",template:l},{name:"toggleButton",template:p},{name:"tab",template:d},{name:"link",template:u},{name:"fileLink",template:g},{name:"tag",template:_}],k=[{name:"keypointCard",template:m},{name:"articleCard",template:v}],x=[{name:"companyValueSection",template:b},{name:"advicesSection",template:h},{name:"insurancePartnersSection",template:f}],B=[{name:"components",value:y},{name:"patterns",value:k},{name:"blocks",value:x}];B.forEach(r=>{const e=document.createElement("section");e.classList.add("ads");const i=document.createElement("h3");i.innerText=r.name.toUpperCase(),e.appendChild(i);const a=document.createElement("div");a.classList.add("ads",r.name),e.appendChild(a),r.value.forEach(t=>{const n=document.createElement("div");n.id=t.name,n.classList.add("section","ads");const s=document.createElement("h4");s.innerText=t.name,n.appendChild(s);const c=document.createElement("div");c.innerHTML=t.template,c.classList.add("sub-section","ads"),n.appendChild(c),e.appendChild(n)}),document.querySelector("main.ads").appendChild(e)});
