function loadContact() {
// remove old content div
  const old = document.querySelector('#content');
  old.parentNode.removeChild(old);

  // creates new content div
  const content = document.createElement('div');
  content.id = 'content';

  const address = document.createElement('h1');
  address.textContent = 'Address';

  const address1 = document.createElement('h2');
  address1.textContent = '42 Hole Avenue, California, United States';

  const email = document.createElement('h1');
  email.textContent = 'E-mail';

  const email1 = document.createElement('h2');
  email1.textContent = 'MrColesHoles@gmail.com';

  const phone = document.createElement('h1');
  phone.textContent = 'Phone';

  const phone1 = document.createElement('h2');
  phone1.textContent = '(707) 342 - 6926';

  // create page content
  const title = document.createElement('h1');
  title.textContent = 'Contact Us!';

  // append page content to content div
  content.append(title, address, address1, email, email1, phone, phone1);

  // appends new content div after nav div
  const nav = document.querySelector('#nav');
  nav.parentNode.insertBefore(content, nav.nextSibling);
}

export default loadContact;