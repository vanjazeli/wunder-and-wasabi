import gsap from 'gsap';

const openingAnimation = {
	firstStageElements: document.querySelectorAll('.js-opening-animation-first-stage-element'),
	secondStageElements: document.querySelectorAll('.js-opening-animation-second-stage-element'),
	thirdStageElements: document.querySelectorAll('.js-opening-animation-third-stage-element'),

	init: function () {
		this.animationSettings();
	},

	animationSettings: function () {
		window.addEventListener('load', () => {
			// eslint-disable-next-line
			const timeLine = gsap
				.timeline()
				.add('first-stage')
				.add(gsap.fromTo(this.firstStageElements, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }), 'first-stage')
				.add('second-stage')
				.add(gsap.fromTo(this.secondStageElements, { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.05 }), 'second-stage')
				.add('third-stage')
				.add(gsap.set(this.thirdStageElements, { transformOrigin: 'center left' }), 'third-stage')
				.add(gsap.fromTo(this.thirdStageElements, { opacity: 0, y: -10, rotate: -5 }, { opacity: 1, y: 0, rotate: 0, stagger: 0.05 }), 'third-stage');
		});
	},
};

export default openingAnimation;
