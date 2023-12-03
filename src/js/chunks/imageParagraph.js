import helpers from '../helpers';
import gsap from 'gsap';

const imageParagraph = {
	blocks: document.querySelectorAll('.js-image-paragraph-block'),
	images: document.querySelectorAll('.js-image-paragraph-image-wrap'),

	init: function () {
		this.settings();
	},

	settings: function () {
		window.addEventListener('scroll', () => {
			this.blocks.forEach((block) => {
				const element = block.querySelector('.js-image-paragraph-image-wrap');

				const scrollTop = helpers.getPosition(element).y - window.innerHeight;
				const scrollBottom = helpers.getPosition(element).y + element.offsetHeight;
				const animationRange = 100;

				const currentScrollPosition = window.scrollY;

				if (currentScrollPosition >= scrollTop && currentScrollPosition <= scrollBottom) {
					const scrollRange = scrollBottom - scrollTop;
					const currentScrollPerc = (currentScrollPosition - scrollTop) / scrollRange;
					const animationPositionPerc = -(animationRange * currentScrollPerc);
					gsap.to(element, { y: animationPositionPerc });
				}
			});
		});
	},
};

export default imageParagraph;
