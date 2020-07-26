
const btn = document.getElementById('tabs');
const tabContents = document
  .getElementById('tabs-content')
  .getElementsByTagName('section');
const tabHeader = btn.getElementsByTagName('button');

btn.addEventListener('click', (e) => {
  const button = e.target.nodeName === 'BUTTON';
  if (!button) return;
  const tabs = e.target.dataset.tab;
  const tabContent = document.getElementById(`tabSection-${tabs}`);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tabContents.length; i++) {
    if (tabContents[i] !== tabContents[tabs - 1]) {
      tabContents[i].classList.remove('show-tab');
    }
    tabContent.classList.add('show-tab');
  }
});
export { btn, tabContents, tabHeader };