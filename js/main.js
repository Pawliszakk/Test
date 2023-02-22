const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnBars = document.querySelector('.burger-btn__bars');
const navMenu = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__items');
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year');

const navOnOff = () => {
    navMenu.classList.toggle('active');
    burgerBtnBars.classList.remove('black-burger-bars')
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


const currentYear = () =>{
    const year = (new Date).getFullYear();
    footerYear.textContent = year;
}


const burgerSpy = () => {
        const currentSection = window.scrollY;

        allSections.forEach(section => {

            if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
                burgerBtnBars.classList.add('black-burger-bars')
            }else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
                burgerBtnBars.classList.remove('black-burger-bars')
            }

        })
}




currentYear();
burgerBtn.addEventListener('click', navOnOff);

navItems.forEach((item) => item.addEventListener('click', navOnOff));

window.addEventListener('scroll', burgerSpy);