const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load",() => {
    preloader.classList.add("remove");
});


// Add event on multiple elements

const addEventOnElements = function (elements,eventType,callBack){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType,callBack);
    }
} 


// navbar toggler for mobile

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers,"click", toggleNav);

// Header

const header = document.querySelector("[data-header]");
window.addEventListener("scroll",function () {
    header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active")
})