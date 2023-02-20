const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__items');

const navOnOff = () => {
    navMenu.classList.toggle('active');
    navItemsAnimation();
};

const navItemsAnimation = () => {
    let delayTime = 0;
    allNavItems.forEach((item) => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = `.${delayTime}s`;
        delayTime++;
    });
};

burgerBtn.addEventListener('click', navOnOff);

navItems.forEach((item) => item.addEventListener('click', navOnOff));
