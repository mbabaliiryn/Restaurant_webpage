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
  dozen.textContent = 'Order now at a wallet friendly price!';

  const grid = document.createElement('div');
  grid.id = 'grid';

  const item1 = document.createElement('div');
  item1.className = 'item';
  item1.id = 'foods';
  // Create hidden div for mouseover
  const menuText1 = document.createElement('div');
  menuText1.id = 'm1';
  menuText1.className = 'menuText';
  menuText1.style.visibility = 'hidden';
  // Name, price, description
  const t1 = document.createElement('h1');
  t1.textContent = 'Delicious foods ever';
  const p1 = document.createElement('h2');
  p1.textContent = '$20';
  const d1 = document.createElement('p');
  d1.textContent = 'Get yours now!';

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
  classic.src = 'https://media.gettyimages.com/photos/woman-serving-food-from-the-cuban-buffet-at-the-el-palacio-de-los-picture-id614266464?s=612x612';
  item1.appendChild(classic);
  // append to grid
  grid.appendChild(item1);

  const item2 = document.createElement('div');
  item2.className = 'item';
  item2.id = 'deserts';
  const menuText2 = document.createElement('div');
  menuText2.id = 'm2';
  menuText2.className = 'menuText';
  menuText2.style.visibility = 'hidden';
  const t2 = document.createElement('h1');
  t2.textContent = 'Best Deserts';
  const p2 = document.createElement('h2');
  p2.textContent = '$10';
  const d2 = document.createElement('p');
  d2.textContent = 'Best deserts ever!';
  menuText2.append(t2, p2, d2);
  item2.appendChild(menuText2);
  item2.onmouseover = () => {
    show('m2');
  };
  item2.onmouseleave = () => {
    hide('m2');
  };
  const cakepop = document.createElement('img');
  cakepop.src = 'https://images.unsplash.com/photo-1564638305579-5e395c9b62c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
  item2.appendChild(cakepop);
  grid.appendChild(item2);

  const item3 = document.createElement('div');
  item3.className = 'item';
  item3.id = 'drinks';
  const menuText3 = document.createElement('div');
  menuText3.id = 'm3';
  menuText3.className = 'menuText';
  menuText3.style.visibility = 'hidden';
  const t3 = document.createElement('h1');
  t3.textContent = 'Drinks';
  const p3 = document.createElement('h2');
  p3.textContent = '$18';
  const d3 = document.createElement('p');
  d3.textContent = 'Best drinks always!';
  menuText3.append(t3, p3, d3);
  item3.appendChild(menuText3);
  item3.onmouseover = () => {
    show('m3');
  };
  item3.onmouseleave = () => {
    hide('m3');
  };
  const cookie = document.createElement('img');
  cookie.src = 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/02/2020-trends-to-watch-in-us-beverage/10484034-2-eng-GB/2020-trends-to-watch-in-US-beverage_wrbm_large.jpg';
  item3.appendChild(cookie);
  grid.appendChild(item3);

  const item4 = document.createElement('div');
  item4.className = 'item';
  item4.id = 'choma';
  const menuText4 = document.createElement('div');
  menuText4.id = 'm4';
  menuText4.className = 'menuText';
  menuText4.style.visibility = 'hidden';
  const t4 = document.createElement('h1');
  t4.textContent = 'Nyama Choma';
  const p4 = document.createElement('h2');
  p4.textContent = '$8';
  const d4 = document.createElement('p');
  d4.textContent = 'Colestro free meat!';
  menuText4.append(t4, p4, d4);
  item4.appendChild(menuText4);
  item4.onmouseover = () => {
    show('m4');
  };
  item4.onmouseleave = () => {
    hide('m4');
  };
  const jelly = document.createElement('img');
  jelly.src = 'https://image.shutterstock.com/image-photo/indian-chicken-tikka-kebabs-marinated-260nw-1256541631.jpg';
  item4.appendChild(jelly);
  grid.appendChild(item4);

  const item5 = document.createElement('div');
  item5.className = 'item';
  item5.id = 'local foods';
  const menuText5 = document.createElement('div');
  menuText5.id = 'm5';
  menuText5.className = 'menuText';
  menuText5.style.visibility = 'hidden';
  const t5 = document.createElement('h1');
  t5.textContent = 'Local Foods';
  const p5 = document.createElement('h2');
  p5.textContent = '$10';
  const d5 = document.createElement('p');
  d5.textContent = 'Fried free local foods!';
  menuText5.append(t5, p5, d5);
  item5.appendChild(menuText5);
  item5.onmouseover = () => {
    show('m5');
  };
  item5.onmouseleave = () => {
    hide('m5');
  };
  const mummy = document.createElement('img');
  mummy.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkqnWSI7yjn_gp-FTy081X5xl02rAWXtyyVQ&usqp=CAU';
  item5.appendChild(mummy);
  grid.appendChild(item5);

  const item6 = document.createElement('div');
  item6.className = 'item';
  item6.id = 'Appetiser';
  const menuText6 = document.createElement('div');
  menuText6.id = 'm6';
  menuText6.className = 'menuText';
  menuText6.style.visibility = 'hidden';
  const t6 = document.createElement('h1');
  t6.textContent = 'Appetisers';
  const p6 = document.createElement('h2');
  p6.textContent = '$12';
  const d6 = document.createElement('p');
  d6.textContent = 'Appetisers!';
  menuText6.append(t6, p6, d6);
  item6.appendChild(menuText6);
  item6.onmouseover = () => {
    show('m6');
  };
  item6.onmouseleave = () => {
    hide('m6');
  };
  const vegan = document.createElement('img');
  vegan.src = 'https://www.bbcgoodfood.com/sites/default/files/baked-camembert-with-bacon-wrapped-breadsticks_0.jpg';
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