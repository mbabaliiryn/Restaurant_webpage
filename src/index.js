/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

import { btn, tabContents, tabHeader } from './changeTabHeader';
import { changeTabSection } from './changeTabSection';

import '../styles/main.css';
import '../styles/index.css';

const openNav = document.querySelector('.nav-slider');
const closeNav = document.querySelector('.close-nav-slider');
const navSliderSection = document.querySelector('.nav-slider-section');
const navLinks = document.querySelectorAll('.nav-links');

openNav.onclick = function () {
  navSliderSection.classList.add('openNav');
};

closeNav.onclick = function () {
  navSliderSection.classList.remove('openNav');
};


closeNav.onclick = closeNavSlider;

navLinks.forEach((link) => {
  link.onclick = closeNavSlider;
});

function closeNavSlider() {
  navSliderSection.classList.remove('openNav');
}
const footerSection = footer();
document.appendChild(footerSection);
