
const burgerBtn = document.querySelector('.nav__burger-btn')
const sideNavbar = document.querySelector('.nav__links-mobile')
const overlay = document.querySelector('.overlay')

burgerBtn.addEventListener('click', () => {
    const isOpened = burgerBtn.getAttribute('aria-expanded')

    sideNavbar.classList.toggle('active')
    overlay.classList.toggle('active')
    if(isOpened === 'true'){
        burgerBtn.setAttribute('aria-expanded', 'false')
    }else {
        burgerBtn.setAttribute('aria-expanded', 'true')
    }
})