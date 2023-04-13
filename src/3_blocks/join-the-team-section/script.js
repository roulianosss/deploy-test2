const allOfferBtns = document.querySelectorAll('.join-the-team-section__offer-container__offer-btn')

allOfferBtns.forEach(btn => btn.addEventListener('click', handleClick))


function handleClick() {
    console.log(this.nextElementSibling.style.maxHeight)
    if (this.nextElementSibling.style.maxHeight) {
        
        console.dir(this.nextElementSibling)
        this.nextElementSibling.style.maxHeight = ''
    } else {
        const contentHeight = this.nextElementSibling.scrollHeight
        this.nextElementSibling.style.maxHeight = `${contentHeight}px`
    }
}