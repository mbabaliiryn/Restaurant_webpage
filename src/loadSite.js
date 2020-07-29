function loadSite() {
// delete div with id = content
  const old = document.querySelector('#content');
  old.parentNode.removeChild(old);

  // create new content div
  const content = document.createElement('div');
  content.id = 'content';

  // create page content
  const title2 = document.createElement('h2');
  title2.textContent = 'Hello, I am Irene, welcome to my Restuarant!';

  const logo = document.createElement('img');
  logo.src = 'https://www.mumbaifoodie.com/wp-content/uploads/2018/10/Global-Fusion.jpg';
  logo.id = 'logo';

  const title = document.createElement('h1');
  title.textContent = 'Delicious Buffet Restaurant';

  const copy = document.createElement('p');
  copy.textContent = 'Welcome to my delicious buffet restaurant. We sell the greatest quality buffets. Our mission is to provide you with the  most scrumptious foods you have ever laid your tongue upon.';

  const copy2 = document.createElement('p');
  copy2.textContent = 'We source our products from the great plains of the sky.';

  // Adds elements in proper order
  content.appendChild(title);
  content.appendChild(logo);
  content.appendChild(title2);
  content.appendChild(copy);
  content.appendChild(copy2);

  // append new, filled content div
  const nav = document.querySelector('#nav');
  nav.parentNode.insertBefore(content, nav.nextSibling);
}

export default loadSite;