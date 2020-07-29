function show(id) {
  document.getElementById(id).style.visibility = 'visible';
}
function hide(id) {
  document.getElementById(id).style.visibility = 'hidden';
}

export {show, hide };