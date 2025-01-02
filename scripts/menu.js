var sidemenu = document.getElementById("#sidemenu");

function openmenu() {
  sidemenu.style.left = "0";
  sidemenu.style.transition = "3s";
}

function closemenu() {
  sidemenu.style.left = "-300px";
  sidemenu.style.transition = "0.9s";
}
