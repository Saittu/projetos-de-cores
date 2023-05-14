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

function copyText(elemenText) {
    const color = elemenText.id
    elemenText.innerText = 'Copiado!'

    navigator.clipboard.writeText(color)
     setTimeout ( () => {
        elemenText.innerText = color
     }, 1000)
    
}

const colors = ['#FFDC00', '#720026', '#CE4257', '#FF7f51', '#FF9B54', 
                '#BFACAA','#02020A', '#05204A', '#B497D6', '#7FDBFF ',
                '#EAEAEA', '#893168', '#B10DC9', '#8C4EFF', '#050404',
                '#16BAC5', '#5FBFF9', '#EFE9F4', '#171D1C', '#5863F8',
                '#040F0F', '#248232', '#2BA84A', '#3D9970', '#FcFFFC']

const colorsContainer = document.querySelector('.first-pallet')

colors.forEach(color => {
    const contrast = getContrastRatio(color, "#000000");
    const textColor = contrast >= 4.5 ? "#000000" : "#ffffff";
    colorsContainer.innerHTML += `<button onclick="copyText(this)" class="colors" style="background-color: ${color}; color: ${textColor}" id="${color}">${color}</button>`
})

const scrollDown = document.querySelector('.navigation');

function opacityScroll() {
    scrollDown.classList.toggle('opacitySc', scrollY > 0);
}

window.addEventListener('scroll', opacityScroll);

function getContrastRatio(color1, color2) {
    
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

   
    const luminance1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const luminance2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

 
    const contrastRatio =
      (Math.max(luminance1, luminance2) + 0.05) /
      (Math.min(luminance1, luminance2) + 0.05);

   
    return parseFloat(contrastRatio.toFixed(2));
  }


  function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
  }

  function getLuminance(r, g, b) {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }