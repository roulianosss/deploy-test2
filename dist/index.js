import"./altaprofits.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(n){if(n.ep)return;n.ep=!0;const e=a(n);fetch(n.href,e)}})();const o=`<a class="button button--primary" href="#">\r
    <p>Button</p>\r
</a>\r
\r
<a class="button button--primary button--small" href="#">\r
    <p>Button</p>\r
</a>\r
\r
<a class="button button--secondary button--light-theme" href="#">\r
    <p>Button</p>\r
</a>\r
\r
<a class="button button--secondary button--light-theme" href="#">\r
    <p>Button</p>\r
    <i class="fa-solid fa-arrow-right-long"></i>\r
</a>\r
\r
<a class="button button--secondary button--light-theme button--small" href="#">\r
    <p>Button</p>\r
</a>\r
\r
<a class="button button--secondary button--dark-theme" href="#">\r
    <p>Button</p>\r
</a>\r
\r
<a class="button button--secondary button--dark-theme" href="#">\r
    <p>Button</p>\r
    <i class="fa-solid fa-arrow-right-long"></i>\r
</a>\r
\r
<a class="button button--secondary button--dark-theme button--small" href="#">\r
    <p>Button</p>\r
</a>\r
\r
`,c=`<a class="icon-button icon-button--light-theme" href="#">\r
    <i class="fa-solid fa-arrow-up-long"></i>\r
</a>\r
\r
<a class="icon-button icon-button--dark-theme" href="#">\r
    <i class="fa-solid fa-arrow-up-long"></i>\r
</a>\r
`,l=`<button class="toggle-button toggle-button--primary">ToggleButton</button>\r
<button class="toggle-button toggle-button--primary toggle-button--active">ToggleButton</button>\r
\r
<button class="toggle-button toggle-button--secondary">ToggleButton</button>\r
<button class="toggle-button toggle-button--secondary toggle-button--active">ToggleButton</button>\r
\r
<button class="toggle-button toggle-button--secondary toggle-button--icon">\r
    <i class="fa-solid fa-grip"></i>\r
</button>\r
\r
<button class="toggle-button toggle-button--secondary toggle-button--icon toggle-button--active">\r
    <i class="fa-solid fa-grip"></i>\r
</button>\r
\r
`,u=`<button class="tab">Tab</button>\r
<button class="tab tab--active">Tab</button>\r
\r
<button class="tab tab--pictogram">\r
    <svg viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#icon"></use>\r
    </svg>\r
    Tab\r
</button>\r
\r
<button class="tab tab--active tab--pictogram">\r
    <svg viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#icon"></use>\r
    </svg>\r
    Tab\r
</button>\r
\r
\r
<button class="tab tab--active tab--pictogram tab--styled">\r
    <svg viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#icon"></use>\r
    </svg>\r
    Tab\r
</button>`,d=`<a class="link" href="#">Link</a>\r
\r
<a class="link link--arrow" href="#">Link <i class="fa-solid fa-chevron-right"></i></a>`,p='<a class="file-link" href="#">FileLink</a>',m='<span class="tag">Tag</span>',g=`<div class="keypoint-card">\r
    <svg viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#icon"></use>\r
    </svg>\r
    <div class="text">\r
        <h5>Keypoint</h5>\r
        <p>A keypoint is a short and concise statement that summarizes the main idea of a text.</p>\r
    </div>\r
</div>\r
\r
<div class="keypoint-card keypoint-card">\r
    <svg viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#icon"></use>\r
    </svg>\r
    <div class="text">\r
        <p>A keypoint is a short and concise statement that summarizes the main idea of a text.</p>\r
    </div>\r
</div>\r
\r
<div class="keypoint-card keypoint-card--small">\r
    <svg viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#icon"></use>\r
    </svg>\r
    <div class="text">\r
        <h5>Keypoint</h5>\r
        <p>A keypoint is a short and concise statement that summarizes the main idea of a text.</p>\r
    </div>\r
</div>\r
\r
\r
<div class="keypoint-card keypoint-card--large">\r
    <svg viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#icon"></use>\r
    </svg>\r
    <div class="text">\r
        <h5>Keypoint</h5>\r
        <p>A keypoint is a short and concise statement that summarizes the main idea of a text.</p>\r
    </div>\r
</div>\r
\r
`,b=`<a class="article-card" href="#">\r
    <img src="/assets/images/article_default.jpg">\r
    <div class="text">\r
        <p class="date">1/02/2023</p>\r
        <h5>Article</h5>\r
        <p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
    </div>\r
</a>\r
\r
<a class="article-card" href="#">\r
    <img src="/assets/images/article_default.jpg">\r
    <div class="text">\r
        <span class="tag">Category</span>\r
        <p class="date">1/02/2023</p>\r
        <h5>Article</h5>\r
        <p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--horizontal" href="#">\r
    <img src="/assets/images/article_default.jpg">\r
    <div class="text">\r
        <span class="tag">Category</span>\r
        <p class="date">1/02/2023</p>\r
        <h5>Article</h5>\r
        <p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
    </div>\r
</a>\r
\r
\r
`,f=[{name:"button",template:o},{name:"iconButton",template:c},{name:"toggleButton",template:l},{name:"tab",template:u},{name:"link",template:d},{name:"fileLink",template:p},{name:"tag",template:m}];f.forEach(r=>{const t=document.createElement("div");t.id=r.name,t.classList.add("section","ads");const a=document.createElement("h4");a.innerText=r.name,t.appendChild(a);const s=document.createElement("div");s.innerHTML=r.template,s.classList.add("sub-section","ads"),t.appendChild(s),document.querySelector(".components").appendChild(t)});const h=[{name:"keypointCard",template:g},{name:"articleCard",template:b}];h.forEach(r=>{const t=document.createElement("div");t.id=r.name,t.classList.add("section","ads");const a=document.createElement("h4");a.innerText=r.name,t.appendChild(a);const s=document.createElement("div");s.innerHTML=r.template,s.classList.add("sub-section","ads"),t.appendChild(s),document.querySelector(".patterns").appendChild(t)});
