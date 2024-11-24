/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    // **** SHOW MENU****
    // **** validate if icon toggle existe****

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    // **** validate if icon close existe****

    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav--link')

const linkAction = () => {

    const navMenu = document.getElementById('nav-menu')

    // **** when we click on each link we remove the show-menu class***

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))




/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader =() => {

    const header = document.getElementById('header')

    // **** when the scrool is greater than 50vh add the scroll-header class to the header ***

    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
}

window.addEventListener('scroll' , blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp =() => {

    const scrollUp = document.getElementById('scroll-up')

    // ****when the scroll is higher than 350 vh add the show-scroll class to the tag with the scroll up class ****

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll' , scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {

    const scrollY = window.pageYOffset
    sections.forEach(current => {

        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId +']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else
        {
            sectionsClass.classList.remove("active-link");
        }
    })
}

window.addEventListener('scroll', scrollActive);




/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme' /* css class*/
const iconTheme = 'ri-sun-line'

// ****Previosly selected topic (if user selected) **** 

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-Icon')

// *** we obtain the current theme that the interface has by validating the dark-theme class *** 

const getCurrentTheme = () => document.body.classList.contains(darkTheme)  ? 'dark' : 'light' 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"; 

// *** we validate if the user previosly choose a topic ***

if(selectedTheme){

    // *** if the validation is fulfilled we ask what the issue was to know if we actived or desactivated the dark ****

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// *** active and desactive theme manuell with button ***

themeButton.addEventListener('click', () => {

    // ***add and remove the dark / icon theme ***

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // *** we save the theme and the curent icon that the user chose ***

    localStorage.setItem('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon' , getCurrentIcon())

})




/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({

    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true   // animation repeat
})

sr.reveal(`.home--data,.list--container,.join--content,.footer--container`)
sr.reveal(`.home--img`, {origin:'bottom'})
sr.reveal(`.health--image , .routine--images , .follow--img-3`, {origin:'left'})
sr.reveal(`.health--data, .routine--data, .follow--img-4`, { origin: "right" });
sr.reveal(`.follow--data, .follow--content-1 img`, {interval:100})