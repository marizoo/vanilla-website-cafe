/*=============== LOADER ===============*/

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu Show
// validate if constant exist
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// Menu Hidden
// Validate if constant exists
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // when we click on each nav__link, we'll remove the show-menu class
    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    // when the scroll is greater than 50vh, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup(".products__content", {
    selectors: {
        target: ".products__card",
    },
    animation: {
        duration: 300,
    },
});
/* Default filter products */
mixerProducts.filter(".delicacies");

/* Link active products */
// target the title
const linkProducts = document.querySelectorAll(".products__item");

function activeProducts() {
    linkProducts.forEach((title) => title.classList.remove("active-product"));
    this.classList.add("active-product");
}

linkProducts.forEach((l) => l.addEventListener("click", activeProducts));

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
