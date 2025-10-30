const scrollElements = document.querySelectorAll('.scroll-reveal');

const elementInView = (el, offset = 100) =>
    el.getBoundingClientRect().top <= (window.innerHeight - offset);

const displayScrollElement = el => el.classList.add('show');
const hideScrollElement = el => el.classList.remove('show');

const handleScrollAnimation = () => {
    scrollElements.forEach(el =>
        elementInView(el) ? displayScrollElement(el) : hideScrollElement(el)
    );
};

window.addEventListener('scroll', handleScrollAnimation);

