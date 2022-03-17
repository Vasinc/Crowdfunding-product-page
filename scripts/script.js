const body = document.body;
const links = document.querySelector(".links");
const link = document.getElementsByClassName("link");
const hamburger = document.querySelector(".hamburger-menu");
const menuBackdrop = document.querySelector(".menu-backgrop");
const progressBar = document.querySelector(".progress");

const backProjectBtn = document.querySelector("#backProject");
const closeModalBtn = document.querySelector('.close-modal')
const backgrop = document.querySelector(".backdrop");
const modalSection = document.querySelector(".modals-section");
const modals = document.querySelectorAll('.selectable-modal');

const modalSucces = document.querySelector('.modal-succes');
const modalSuccesBtn = modalSucces.querySelector('.button');

let BambooStand = 101;
let BlackEditionStand = 64;

let HAS_EVENT_LISTENER = false;

function toggleMenu () {
    links.classList.toggle('display-block');
    menuBackdrop.classList.toggle('display-block');
    if (links.classList.contains("display-block")) {
        hamburger.style.backgroundImage = "url('./images/icon-close-menu.svg')";
        menuBackdrop.scrollIntoView();
        body.style.overflow = "hidden";
    } else {
        hamburger.style.backgroundImage = "url('./images/icon-hamburger.svg')";
        body.style.overflow = "visible";
    }
}

function toggleModal () {
    modalSection.classList.toggle('display-block');
    backgrop.classList.toggle('display-block');
}

hamburger.addEventListener('click', toggleMenu);

links.addEventListener('click', () => {
    if ( body.clientWidth < 800  && HAS_EVENT_LISTENER) {
        links.removeEventListener('click', toggleMenu);
        HAS_EVENT_LISTENER = false;
    } else {
        links.addEventListener('click', toggleMenu);
        HAS_EVENT_LISTENER = true;
    }
});

menuBackdrop.addEventListener('click', toggleMenu);

backProjectBtn.addEventListener('click', toggleModal);

closeModalBtn.addEventListener('click', toggleModal);

backgrop.addEventListener('click', () => {
    modalSection.classList.remove('display-block');
    backgrop.classList.remove('display-block');
    modalSucces.classList.remove('display-block');
});

modalSuccesBtn.addEventListener('click', () => {
    backgrop.classList.remove('display-block');
    modalSucces.classList.remove('display-block');
})

modals.forEach(modal => {
    const bamboo = modal.querySelector('.bamboo');
    const blackEdition = modal.querySelector('.blackEdition')
    modal.children[0].addEventListener('click', () => {
        const modalCircleBtn = modal.firstElementChild.firstElementChild;
        const modalLowerSection = modal.lastElementChild;
        if (modalCircleBtn.style.background == 'white') {
            modalCircleBtn.style.background = 'hsl(176, 50%, 47%)';
            modal.style.border = '2px solid hsl(176, 50%, 47%)';
            modalLowerSection.classList.add('display-block');
        } else{
            modalCircleBtn.style.background = 'white';
            modal.style.border = 'none';
            modalLowerSection.classList.remove('display-block');
        }
    })
    modal.children[1].addEventListener('click', () => {
        const modalCircleBtn = modal.firstElementChild.firstElementChild;
        const modalLowerSection = modal.lastElementChild;
        if (modalCircleBtn.style.background == 'white') {
            modalCircleBtn.style.background = 'hsl(176, 50%, 47%)';
            modal.style.border = '2px solid hsl(176, 50%, 47%)';
            modalLowerSection.classList.add('display-block');
        } else{
            modalCircleBtn.style.background = 'white';
            modal.style.border = 'none';
            modalLowerSection.classList.remove('display-block');
        }
    })
    modal.lastElementChild.querySelector('.button').addEventListener('click', () => {
        const modalCircleBtn = modal.firstElementChild.firstElementChild;
        const modalLowerSection = modal.lastElementChild;
        const inputValue = parseInt(modal.lastElementChild.querySelector('.lower-section__money').value);
        let moneyRaised = parseInt(document.getElementById('money-raised').innerText);
        let moneyLeft = 100000 - moneyRaised;

        if ( inputValue <= moneyLeft ) {
            moneyRaised += inputValue;
            document.getElementById('money-raised').innerText = moneyRaised;
            console.log(moneyRaised);
            modalCircleBtn.style.background = 'white';
            modal.style.border = 'none';
            modalLowerSection.classList.remove('display-block');
            modal.lastElementChild.querySelector('.button').style.background = 'hsl(176, 50%, 47%)';
            modal.style.border = 'none';
            modalSection.classList.toggle('display-block');
            modalSucces.classList.add('display-block');
            body.scrollIntoView();
            progressBar.style.width = `${moneyRaised / 1000}%`
            if(modal.contains(bamboo)) {
                BambooStand--;
                document.querySelectorAll('.bamboo').forEach(bamboo => {
                    bamboo.innerText = BambooStand;
                })
            } else if (modal.contains(blackEdition)) {
                BlackEditionStand--;
                document.querySelectorAll('.blackEdition').forEach(blackEdition => {
                    blackEdition.innerText = BlackEditionStand;
                })
            }
        } else {
            modal.lastElementChild.querySelector('.button').style.background = 'red';
            modal.style.border = '2px solid red';
        }

    })
});