const restoreUrl = () => {
    return {
        name: "inject-script", transformIndexHtml(html) {
            return html.replace("</body>",
                `<script>document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[href], [src]").forEach((function(t){let e=t.getAttribute("href");if(e&&e.startsWith("/")){let r=window.location.href+e;t.hasAttribute("href")?t.href=r:t.setAttribute("href",r)}let r=t.getAttribute("src");if(r&&r.startsWith("/")){let e=window.location.href+r;t.hasAttribute("src")?t.src=e:t.setAttribute("src",e)}}))}));</script></body>`)
        }
    }
}

export default restoreUrl
