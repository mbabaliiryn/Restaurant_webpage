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
  address1.textContent = '5th street, buglobi Industrial area';

  const email = document.createElement('h1');
  email.textContent = 'E-mail';

  const email1 = document.createElement('h2');
  email1.textContent = 'mbabaliiryn!gmail.com';

  const phone = document.createElement('h1');
  phone.textContent = 'Contact';

  const phone1 = document.createElement('h2');
  phone1.textContent = '(758) 32 - 3723';

  // create page content
  const title = document.createElement('h1');
  title.textContent = 'Reach Out!';

  // append page content to content div
  content.append(title, address, address1, email, email1, phone, phone1);

  // appends new content div after nav div
  const nav = document.querySelector('#nav');
  nav.parentNode.insertBefore(content, nav.nextSibling);
}

export default loadContact;