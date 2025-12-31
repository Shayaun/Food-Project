// setup nav
const navBtn = document.getElementById("nav-icon");
const navbar = document.getElementById("bar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
  bar.classList.add("show-bar");
});

// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("show-bar");
});
