/*=============== LOADER ===============*/
onload = () => {
    const load = document.getElementById("load");

    setTimeout(() => {
        load.style.display = "none";
    }, 2500);
};

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
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350vh, add the 'show-scroll' class to the 'a' tag, with the 'scroll-top' class
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// ============ SHOW CART ===============
const cart = document.getElementById("cart");
const cartShop = document.getElementById("cart-shop");
const cartClose = document.getElementById("cart-close");
// === CART SHOW ===
// Validate if constant exist
if (cartShop) {
    cartShop.addEventListener("click", () => {});
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);
