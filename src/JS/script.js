function ActivatedMenu() {
    let menuMobile = document.querySelector('.mobile-ul') 
    let menuUl = menuMobile.querySelectorAll('a')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = 'src/assets/images/menu-burger.png'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'src/assets/images/close-menu.png'
        menuUl.forEach((option) =>{
            option.addEventListener('click', () =>{
                menuMobile.classList.remove('open')
            })
        })

    }
}

const scrollDown = document.querySelector('.navigation');

function opacityScroll() {
    scrollDown.classList.toggle('opacitySc', scrollY > 0);
}

window.addEventListener('scroll', opacityScroll);