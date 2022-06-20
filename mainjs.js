var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toogle("sticky", window.scrollY > 0);
});
