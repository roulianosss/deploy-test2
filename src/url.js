const restoreUrl = () => {
    return {
        name: "inject-script", transformIndexHtml(html) {
            return html.replace("</body>",
                `<script>document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[href],[src]").forEach((function(t){let e=t.getAttribute("href")||t.getAttribute("src");e&&e.startsWith("/")&&t.setAttribute("href",window.location.origin+e)}))}));</script></body>`)
        }
    }
}

export default restoreUrl
