import gsap from 'gsap';
import helpers from '../helpers';

const header = {
	hamburger: document.querySelector('.js-header-hamburger'),
	menu: document.querySelector('.js-header-menu'),
	links: document.querySelectorAll('.js-header-link'),

	openState: false,

	init: function () {
		this.events();
	},

	events: function () {
		this.hamburger.addEventListener('click', () => {
			if (!this.openState) {
				this.openMenu();
			} else {
				this.closeMenu();
			}
		});
		this.links.forEach((link) => {
			link.addEventListener('click', () => this.scrollToSection(link));
		});
	},

	openMenu: function () {
		this.hamburger.classList.add('hamburger--active');
		this.menu.classList.add('header__nav--active');
		// eslint-disable-next-line
		const timeline = gsap
			.timeline()
			.add(gsap.set(this.links, { opacity: 0, x: 50 }))
			.add(gsap.to(this.links, { opacity: 1, x: 0, delay: 0.3, stagger: 0.1, duration: 0.3 }));
		this.openState = true;
		helpers.disableScroll();
	},

	closeMenu: function () {
		this.hamburger.classList.remove('hamburger--active');
		this.menu.classList.remove('header__nav--active');
		this.links.forEach((link) => {
			link.removeAttribute('style');
		});
		this.openState = false;
		helpers.enableScroll();
	},

	scrollToSection: function (link) {
		this.closeMenu();
		const data = link.getAttribute('data-scroll-to');
		const scrollToElement = document.querySelector(`[data-scroll-id="${data}"]`);
		scrollToElement.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	},
};

export default header;
