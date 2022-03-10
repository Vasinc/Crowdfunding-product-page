const links = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener('click', () => {
    links.classList.toggle('display-block');
    if (links.classList.contains("display-block")) {
        hamburger.style.backgroundImage = "url('../images/icon-close-menu.svg')";
    } else {
        hamburger.style.backgroundImage = "url('../images/icon-hamburger.svg')";
    }
});