import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

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

/* Date */
const msDiff = new Date().getTime() - new Date("2008-01-03").getTime();
const yearsDiff = msDiff / (1000 * 60 * 60 * 24 * 365.25);
const age = Math.floor(yearsDiff);

document.querySelectorAll("#age").forEach((el) => {
	el.innerHTML = age.toString();
});

/* Particles */
(async () => {
	await loadSlim(tsParticles);
	await tsParticles.load({
		id: "home-gradient",
		options: {
			particles: {
				number: {
					value: 45,
					density: {
						enable: true,
						width: 900,
						height: 900,
					},
				},
				color: {
					value: "#ffffff",
				},
				shape: {
					type: "circle",
				},
				opacity: {
					value: 0.6786669718037545,
					animation: {
						enable: false,
						speed: 1,
						startValue: "random",
						sync: false,
					},
				},
				size: {
					value: {
						min: 0.1,
						max: 3,
					},
					animation: {
						enable: false,
						speed: 40,
						startValue: "random",
						sync: false,
					},
				},
				links: {
					enable: true,
					distance: 120,
					color: "#1bbef5",
					opacity: 0.6786669718037545,
					width: 1,
				},
				move: {
					enable: true,
					speed: 1,
					direction: "none",
					random: false,
					straight: false,
					outModes: {
						default: "out",
					},
				},
			},
			interactivity: {
				detectsOn: "canvas",
				events: {
					onHover: {
						enable: true,
						mode: "grab",
					},
					onClick: {
						enable: false,
						mode: "push",
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: 200,
						links: {
							opacity: 1,
						},
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
					push: {
						quantity: 4,
					},
					remove: {
						quantity: 2,
					},
				},
			},
			detectRetina: true,
		},
	});
})();
