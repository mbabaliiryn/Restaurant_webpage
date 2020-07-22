let openNav = document.querySelector('.nav-slider');
let closeNav = document.querySelector('.close-nav-slider');
let navSliderSection = document.querySelector('.nav-slider-section');
let navLinks = document.querySelectorAll('.nav-links');

openNav.onclick = function() {
    navSliderSection.classList.remove('openNav');
    navSliderSection.classList.add('closeNav');
}

closeNav.onclick = closeNavSlider;

navLinks.forEach((link) => {
    link.onclick = closeNavSlider;
});

function closeNavSlider() {
    console.log(navSliderSection.classList);
    navSliderSection.classList.remove('openNav');
    navSliderSection.classList.add('closeNav');
}
