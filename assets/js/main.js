/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== Portofilio Item Details===============*/

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolioo-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
    document.querySelector(".header").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);


/*=============== Portofilio Item Details===============*/




/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1.3,
        },
        500: {
            slidesPerView: 1.6,
        },
        640: {
            slidesPerView: 1.9,
        },
        768: {
            slidesPerView: 2.4,
        },
        1024: {
            slidesPerView: 3.2,
        },
    },
});



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });



/*=============== POPULAR SWIPER ===============*/

/*=============== MIXITUP FILTER FEATURED ===============*/


/* Link active featured */


/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__title`)
sr.reveal(`.home__subtitle`, { delay: 500 })
sr.reveal(`.home__elec`, { delay: 600 })
sr.reveal(`.home__img`, { delay: 800 })
sr.reveal(`.homee__img`, { delay: 800 })
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: 'bottom' })
sr.reveal(`.home__button`, { delay: 1000, origin: 'bottom' })
sr.reveal(`.about__group`, { origin: 'left' })
sr.reveal(`.about__data`, { origin: 'right' })