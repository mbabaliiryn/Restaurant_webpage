const tabHeader = document.querySelectorAll('.tabHeader');

tabHeader.forEach((button) => {
  button.onclick = changeTabHeader;
});

function changeTabHeader() {
  const tabNumber = parseInt(this.dataset.tab);

  document.querySelector('.active-tab').classList.remove('active-tab');
  this.classList.add('active-tab');

  switch (tabNumber) {
    case 1:
      changeTabSection(tabNumber);
      break;
    case 2:
      changeTabSection(tabNumber);
      break;
    case 3:
      changeTabSection(tabNumber);
      break;
    case 4:
      changeTabSection(tabNumber);
      break;
    default:
      break;
  }
}

function changeTabSection(tabNumber) {
  const currentTab = document.querySelector('.show-tab');
  currentTab.classList.remove('show-tab');
  currentTab.classList.add('hide-tab');

  const newSection = document.getElementById(`tabSection-${tabNumber}`);

  newSection.classList.remove('hide-tab');
  newSection.classList.add('show-tab');
}
