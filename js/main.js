const path = window.location.pathname;
let page = path.split("/").pop().split(".")[0]; 
if (page === "index") page = "Home";
else page = page.toUpperCase();

document.title = `ShirtHouse - ${page}`;

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});





