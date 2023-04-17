import gsap from 'gsap';

const cards = {
	module: document.querySelector('.js-cards'),
	rows: document.querySelectorAll('.js-cards-row'),

	init: function () {
		this.animateOnScroll();
	},

	strToBool: function (string) {
		if (string === 'false') {
			return false;
		} else if (string === 'true') {
			return true;
		}
	},

	isInViewport: function (element) {
		const rect = element.getBoundingClientRect();
		const windowHeight = window.innerHeight || document.documentElement.clientHeight;
		const windowWidth = window.innerWidth || document.documentElement.clientWidth;

		const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
		const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

		return vertInView && horInView;
	},

	animateOnScroll: function () {
		window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY;

			this.rows.forEach((row) => {
				if (this.isInViewport(this.module)) {
					const animationDirection = this.strToBool(row.getAttribute('data-animation-direction'));

					if (animationDirection) {
						gsap.to(row, {
							y: `${scrollPosition * 0.004}vw`,
							duration: 0.5,
							ease: 'easeInOut',
						});
					} else {
						gsap.to(row, {
							y: `${-scrollPosition * 0.004}vw`,
							duration: 0.5,
							ease: 'easeInOut',
						});
					}
				}
			});
		});
	},
};

export default cards;
