
const tabHeader = document.querySelectorAll('.tabHeader');


const changeTabHeader = () => {
  let button = document.getElementById('button');
  let tab = button.getAttribute('data-tab');
    const tabNumber = parseInt(tab);
  
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

tabHeader.forEach((button) => {
  button.onclick = changeTabHeader;
});
  export {tabHeader, changeTabHeader};

  