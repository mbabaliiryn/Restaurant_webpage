import loadSite from './loadSite';
import loadMenu from './loadMenu';
import loadContact from './loadContact';

import './css/styles.css';


loadSite();

function listeners() {
// Selects nav div
  const nav = document.querySelector('#nav');

  //  Creates nav radio buttons & adds event listeners
  const homeLabel = document.createElement('label');
  const homeSpan = document.createElement('span');
  homeSpan.textContent = 'Home';
  const home = document.createElement('input');
  home.setAttribute('type', 'radio');
  home.setAttribute('name', 'tab-control');
  home.checked = true;
  homeLabel.className = 'newRadio';
  homeLabel.addEventListener('click', loadSite);
  homeLabel.append(home);
  homeLabel.append(homeSpan);

  const menuLabel = document.createElement('label');
  const menuSpan = document.createElement('span');
  menuSpan.textContent = 'Menu';
  const menu = document.createElement('input');
  menu.setAttribute('type', 'radio');
  menu.setAttribute('name', 'tab-control');
  menuLabel.className = 'newRadio';
  menuLabel.addEventListener('click', loadMenu);
  menuLabel.append(menu);
  menuLabel.append(menuSpan);

  const contactLabel = document.createElement('label');
  const contactSpan = document.createElement('span');
  contactSpan.textContent = 'Contact';
  const contact = document.createElement('input');
  contact.setAttribute('type', 'radio');
  contact.setAttribute('name', 'tab-control');
  contactLabel.className = 'newRadio';
  contactLabel.addEventListener('click', loadContact);
  contactLabel.append(contact);
  contactLabel.append(contactSpan);

  // Adds elements in proper order
  nav.appendChild(homeLabel);
  nav.appendChild(menuLabel);
  nav.appendChild(contactLabel);
}

listeners();