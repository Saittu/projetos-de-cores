function ActivatedMenu() {
    let menuMobile = document.querySelector('.mobile-ul') 
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = 'assets/images/menu-burger.png'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'assets/images/close-menu.png'

    }
}

const scrollDown = document.querySelector('.navigation');

function opacityScroll() {
    scrollDown.classList.toggle('opacitySc', scrollY > 0);
}

window.addEventListener('scroll', opacityScroll);