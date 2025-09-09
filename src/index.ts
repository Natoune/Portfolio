import "./style.css";

/* Mobile Menu */
let mobileMenu = document.getElementById("mobile-menu")!;
let mobileMenuIcon = document.getElementById("mobile-menu-icon")!;

document
	.getElementById("mobile-menu-button")!
	.addEventListener("click", toggleMobileMenu);
document.querySelectorAll("#mobile-menu a").forEach((element) => {
	element.addEventListener("click", toggleMobileMenu);
});

function toggleMobileMenu() {
	mobileMenuIcon.children[0].classList.toggle("opacity-0");
	mobileMenuIcon.children[0].classList.toggle("translate-y-3.5");
	mobileMenuIcon.children[1].classList.toggle("rotate-45");
	mobileMenuIcon.children[2].classList.toggle("-rotate-45");
	mobileMenuIcon.children[3].classList.toggle("opacity-0");
	mobileMenuIcon.children[3].classList.toggle("-translate-y-3.5");

	mobileMenu.classList.toggle("h-0");
	mobileMenu.classList.toggle("h-full");
	mobileMenu.classList.toggle("opacity-0");
}

/* Particles */
// @ts-ignore
particlesJS.load("home-gradient", "particles.json");

/* Date */
const msDiff = new Date().getTime() - new Date("2008-01-03").getTime();
const yearsDiff = msDiff / (1000 * 60 * 60 * 24 * 365.25);
const age = Math.floor(yearsDiff);

document.querySelectorAll("#age").forEach((el) => {
	el.innerHTML = age.toString();
});
