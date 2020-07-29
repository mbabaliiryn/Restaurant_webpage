import { show, hide } from './Visibility';

function loadMenu() {
  // remove old content div
  const old = document.querySelector('#content');
  old.parentNode.removeChild(old);

  // create new content div
  const content = document.createElement('div');
  content.id = 'content';

  // create page contents
  const title = document.createElement('h1');
  title.textContent = 'Menu';

  const dozen = document.createElement('h2');
  dozen.textContent = 'All items are sold by the dozen!';

  const grid = document.createElement('div');
  grid.id = 'grid';

  const item1 = document.createElement('div');
  item1.className = 'item';
  item1.id = 'classic';
  // Create hidden div for mouseover
  const menuText1 = document.createElement('div');
  menuText1.id = 'm1';
  menuText1.className = 'menuText';
  menuText1.style.visibility = 'hidden';
  // Name, price, description
  const t1 = document.createElement('h1');
  t1.textContent = 'Classic';
  const p1 = document.createElement('h2');
  p1.textContent = '$6';
  const d1 = document.createElement('p');
  d1.textContent = 'Our classic, fluffy, SCRUMPTIOUS holes that you love! The best hole to ever touch your tongue!';

  // appends new elements to item div
  menuText1.append(t1, p1, d1);
  item1.appendChild(menuText1);
  // show item info on mouseover
  item1.onmouseover = () => {
    show('m1');
  };
  item1.onmouseleave = () => {
    hide('m1');
  };
  // adds image
  const classic = document.createElement('img');
  classic.src = './images/classic.jpg';
  item1.appendChild(classic);
  // append to grid
  grid.appendChild(item1);

  const item2 = document.createElement('div');
  item2.className = 'item';
  item2.id = 'cakepop';
  const menuText2 = document.createElement('div');
  menuText2.id = 'm2';
  menuText2.className = 'menuText';
  menuText2.style.visibility = 'hidden';
  const t2 = document.createElement('h1');
  t2.textContent = 'Cake Pop';
  const p2 = document.createElement('h2');
  p2.textContent = '$8'
  const d2 = document.createElement('p');
  d2.textContent = 'A spin on our classic holes, coated with frosting and dipped in sprinkles topped with a stick for easy eating!';
  menuText2.append(t2, p2, d2);
  item2.appendChild(menuText2);
  item2.onmouseover = () => {
    show('m2');
  };
  item2.onmouseleave = () => {
    hide('m2');
  };
  const cakepop = document.createElement('img');
  cakepop.src = './images/cakepop.jpg';
  item2.appendChild(cakepop);
  grid.appendChild(item2);

  const item3 = document.createElement('div');
  item3.className = 'item';
  item3.id = 'cookie';
  const menuText3 = document.createElement('div');
  menuText3.id = 'm3';
  menuText3.className = 'menuText';
  menuText3.style.visibility = 'hidden';
  const t3 = document.createElement('h1');
  t3.textContent = 'Cookie Dough';
  const p3 = document.createElement('h2');
  p3.textContent = '$8';
  const d3 = document.createElement('p');
  d3.textContent = 'Our classic batter recipe filled with a rich, creamy, chocolate chip cookie dough inside!';
  menuText3.append(t3, p3, d3);
  item3.appendChild(menuText3);
  item3.onmouseover = () => {
    show('m3');
  };
  item3.onmouseleave = () => {
    hide('m3');
  };
  const cookie = document.createElement('img');
  cookie.src = './images/cookie.jpeg';
  item3.appendChild(cookie);
  grid.appendChild(item3);

  const item4 = document.createElement('div');
  item4.className = 'item';
  item4.id = 'jelly';
  const menuText4 = document.createElement('div');
  menuText4.id = 'm4';
  menuText4.className = 'menuText';
  menuText4.style.visibility = 'hidden';
  const t4 = document.createElement('h1');
  t4.textContent = 'Jelly Filled';
  const p4 = document.createElement('h2');
  p4.textContent = '$8'
  const d4 = document.createElement('p');
  d4.textContent = 'Using our classic Cloud batter, we bake then fill these holes with the finest local raspberry, grape, and apricot jellies!';
  menuText4.append(t4, p4, d4);
  item4.appendChild(menuText4);
  item4.onmouseover = () => {
    show('m4');
  };
  item4.onmouseleave = () => {
    hide('m4');
  };
  const jelly = document.createElement('img');
  jelly.src = './images/jelly.jpg';
  item4.appendChild(jelly);
  grid.appendChild(item4);

  const item5 = document.createElement('div');
  item5.className = 'item';
  item5.id = 'mummy';
  const menuText5 = document.createElement('div');
  menuText5.id = 'm5';
  menuText5.className = 'menuText';
  menuText5.style.visibility = 'hidden';
  const t5 = document.createElement('h1');
  t5.textContent = 'Mummy';
  const p5 = document.createElement('h2');
  p5.textContent = '$10';
  const d5 = document.createElement('p');
  d5.textContent = 'The signature hole you love artistically coated with buttermilk frosting and fondant eyeballs!'
  menuText5.append(t5, p5, d5);
  item5.appendChild(menuText5);
  item5.onmouseover = () => {
    show('m5');
  };
  item5.onmouseleave = () => {
    hide('m5');
  };
  const mummy = document.createElement('img');
  mummy.src = './images/mummy.jpg';
  item5.appendChild(mummy);
  grid.appendChild(item5);

  const item6 = document.createElement('div');
  item6.className = 'item';
  item6.id = 'vegan';
  const menuText6 = document.createElement('div');
  menuText6.id = 'm6';
  menuText6.className = 'menuText';
  menuText6.style.visibility = 'hidden';
  const t6 = document.createElement('h1');
  t6.textContent = 'Vegan Chocolate & Pistachio';
  const p6 = document.createElement('h2');
  p6.textContent = '$12';
  const d6 = document.createElement('p');
  d6.textContent = 'A vegan version of our Cloud batter topped with a rich chocolate sauce and crushed pistachios!';
  menuText6.append(t6, p6, d6);
  item6.appendChild(menuText6);
  item6.onmouseover = () => {
    show('m6');
  };
  item6.onmouseleave = () => {
    hide('m6');
  };
  const vegan = document.createElement('img');
  vegan.src = './images/vegan.jpg';
  item6.appendChild(vegan);
  grid.appendChild(item6);

  // appendChild page contents to content div
  content.appendChild(title);
  content.appendChild(dozen);
  content.appendChild(grid);

  // appendChild new, filled content div after nav div
  const nav = document.querySelector('#nav');
  nav.parentNode.insertBefore(content, nav.nextSibling);
}

export default loadMenu;