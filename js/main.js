const navigation = document.querySelector('.nav');
const navButton = document.querySelector('.nav__button');
const navButtonImg = document.querySelector('.nav__button-img');

navButton.onclick  = () => {
    if(navigation.classList.toggle('open')) {
        navButtonImg.src = "./img/svg/nav-close.svg"
    } else {
        navButtonImg.src = "./img/svg/burger.svg"
    }
}

// Чтобы анимация сработала 1 раз once:true
AOS.init({
    once:true
});
