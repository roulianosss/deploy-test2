const restoreUrl = () => {
    return {
        name: "inject-script", transformIndexHtml(html) {
            return html.replace("</body>",
                `<script>document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[href]").forEach((function(t){let e=t.getAttribute("href");e&&e.startsWith("/")&&t.setAttribute("href",window.location.href+e)}))}));</script></body>`)
        }
    }
}

export default restoreUrl
