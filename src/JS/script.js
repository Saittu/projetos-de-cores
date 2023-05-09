function ActivatedMenu() {
    let menuMobile = document.querySelector('.mobile-ul') 
    let menuUl = menuMobile.querySelectorAll('a')
    let iconNav = document.querySelector('.icon')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        iconNav.src = 'src/assets/images/menu-burger.png'
    } else {
        menuMobile.classList.add('open')
        iconNav.src = 'src/assets/images/close-menu.png'
        menuUl.forEach((option) =>{
            option.addEventListener('click', () =>{
                menuMobile.classList.remove('open')
                iconNav.src = 'src/assets/images/menu-burger.png'
            })
        })

    }
}

function copyText() {
    let buttonColors = document.querySelector('.colors')
    let text = buttonColors.innerHTML

    navigator.clipboard.writeText(text)
    .then( () => {
        console.log('texto copiado para a área de transferencia!')
    })
    .catch( (error) =>{
        console.error("erro ao copiar texto: ",error)
    })
    
}

const scrollDown = document.querySelector('.navigation');

function opacityScroll() {
    scrollDown.classList.toggle('opacitySc', scrollY > 0);
}

window.addEventListener('scroll', opacityScroll);