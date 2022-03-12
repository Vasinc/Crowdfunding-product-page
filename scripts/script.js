const body = document.body;
const links = document.querySelector(".links");
const link = document.getElementsByClassName("link");
const hamburger = document.querySelector(".hamburger-menu");
const menuBackdrop = document.querySelector(".menu-backgrop");
const progressBar = document.querySelector(".progress");

const moneyRaised = document.getElementById('money-raised').innerText;
let NumMoneyRaised = parseInt(moneyRaised);

progressBar.style.width = `${NumMoneyRaised}%`

function toggleMenu () {
    links.classList.toggle('display-block');
    menuBackdrop.classList.toggle('display-block');
    if (links.classList.contains("display-block")) {
        hamburger.style.backgroundImage = "url('../images/icon-close-menu.svg')";
        menuBackdrop.scrollIntoView();
        body.style.overflow = "hidden";
    } else {
        hamburger.style.backgroundImage = "url('../images/icon-hamburger.svg')";
        body.style.overflow = "visible";
    }
}

hamburger.addEventListener('click', toggleMenu);

links.addEventListener('click', toggleMenu);

menuBackdrop.addEventListener('click', toggleMenu);