const menuItems = document.querySelectorAll(".menu__item")

if (menuItems) {
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click",
            (e) => {
                e.preventDefault()
                removeCurrentExpandMenu()
                toggleExpandMenu(menuItem)
            })
    })
}

function removeCurrentExpandMenu() {
    const expandMenu = document.querySelectorAll(".expand-menu")
    expandMenu.forEach((item) => {
        item.classList.remove("active")
    })
}

function toggleExpandMenu(menuItem) {
    const expandMenu = menuItem.querySelector(".expand-menu")
    expandMenu.classList.toggle("active")
}