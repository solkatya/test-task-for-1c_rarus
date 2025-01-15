//carousel menu
const $jsCarousel = $('.js-carousel');
if ($jsCarousel.length > 0) {
    ((_root) => {
        const self = {
            carousel: _root.find('.owl-carousel'),
        };

        self.carousel.owlCarousel({
            nav: true,
            dots: false,
            
            center: false,
            autoWidth: true, 
            margin: 20, 
            items: 1, 

            responsive: {
                0: {
                    items: 3,
                },
                760: {
                    items: 5,
                },
                1200: {
                    items: 8, 
                },
            },
        });
    })($jsCarousel);
}

// //mobile menu - burger
// document.addEventListener('DOMContentLoaded', function () {
//     const mobileMenu = document.querySelector('.menu-burger');
//     const menu = document.querySelector('.mobile-menu__catalog');

//     if (mobileMenu && menu) {
//         mobileMenu.addEventListener('click', function () {
//             this.classList.toggle('active');
//             menu.classList.toggle('open');
//         });
//     } else {
//         console.warn('Не найден элемент .menu-burger или .mobile-menu__catalog');
//     }
// });

// //mobile menu
// const mobileMenuLinks = document.querySelectorAll('.mobile-menu__catalog a');
// const currentURL = window.location.pathname;

// /** @param {HTMLElement} element */
// function highlightMobileMenuItem(element) {
//     const parentLi = element.closest('li');
//     if (parentLi) {
//         parentLi.classList.add('active');
//     }
// }

// mobileMenuLinks.forEach((link) => {
//     if (link.getAttribute('href') === currentURL) {
//         highlightMobileMenuItem(link);
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.menu-burger');
    const menu = document.querySelector('.mobile-menu__catalog');
    const closeButton = document.querySelector('.mobile-menu__close');

    if (mobileMenu && menu) {
        mobileMenu.addEventListener('click', function () {
            this.classList.toggle('active');
            menu.classList.toggle('open');
        });
    } else {
        console.warn('Не найден элемент .menu-burger или .mobile-menu__catalog');
    }

    // Close mobile menu when clicking on the close button
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            menu.classList.remove('open'); // Закрываем меню
            mobileMenu.classList.remove('active'); // Убираем активный класс у бургер-меню
        });
    }
});

// Highlight active menu item
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__catalog a');
const currentURL = window.location.pathname;

/** @param {HTMLElement} element */
function highlightMobileMenuItem(element) {
    const parentLi = element.closest('li');
    if (parentLi) {
        parentLi.classList.add('active');
    }
}

mobileMenuLinks.forEach((link) => {
    if (link.getAttribute('href') === currentURL) {
        highlightMobileMenuItem(link);
    }
});

