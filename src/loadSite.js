function loadSite() {
// delete div with id = content
  const old = document.querySelector('#content');
  old.parentNode.removeChild(old);

  // create new content div
  const content = document.createElement('div');
  content.id = 'content';

  // create page content
  const title2 = document.createElement('h2');
  title2.textContent = 'Hello, I am Alex Cole. Buy my hole!';

  const logo = document.createElement('img');
  logo.src = './images/holes.png';
  logo.id = 'logo';

  const title = document.createElement('h1');
  title.textContent = 'Alex Cole\'s Donut Holes';

  const copy = document.createElement('p');
  copy.textContent = 'Welcome to my donut shop. We sell the greatest quality donut holes in all of the United States. Our mission is to provide you with the fluffiest, glaziest, most scrumptious holes you have ever laid your tongue upon.';

  const copy2 = document.createElement('p');
  copy2.textContent = 'We source our flour from the great plains of the sky, ensuring our holes are the fluffiest. We gather our yeast from... other holes, ensuring it is natural and GMO free. We use glaze with shine that rivals that of a mirror. Lastly, our sugar. We use the finest grain, pixie dust-esque, almost inhalable sugar to commit to the promise of being the most scrumptious hole ever to have the pleasure of being inside you.';

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