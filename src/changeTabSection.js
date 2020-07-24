
function changeTabSection(tabNumber) {
  const currentTab = document.querySelector('.show-tab');
  currentTab.classList.remove('show-tab');
  currentTab.classList.add('hide-tab');

  const newSection = document.getElementById(`tabSection-${tabNumber}`);

  newSection.classList.remove('hide-tab');
  newSection.classList.add('show-tab');
}
export default {changeTabSection};