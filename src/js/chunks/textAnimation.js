import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const textAnimation = {
	splitElements: document.querySelectorAll('.js-split'),
	split: null,

	init: function () {
		gsap.registerPlugin(ScrollTrigger);
		setTimeout(() => {
			this.handleSplit();
			this.handleEvents();
		}, 500);
	},

	handleSplit: function () {
		this.split = new SplitType('.js-split');
	},

	handleEvents: function () {
		const animationTriggers = document.querySelectorAll('.js-animation-trigger');
		animationTriggers.forEach((animationTrigger) => {
			this.handleWordAnimation(animationTrigger);
		});
	},

	handleWordAnimation: function (animationTrigger) {
		const preAnimationElements = animationTrigger.querySelectorAll('.js-pre-animation-element');
		const words = animationTrigger.querySelectorAll('.word');
		const postAnimationElements = animationTrigger.querySelectorAll('.js-post-animation-element');
		// eslint-disable-next-line
		const tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: animationTrigger,
					start: 'top 90%',
				},
			})
			.add('pre-animation')
			.add(gsap.fromTo(preAnimationElements, { opacity: 0, y: '50px' }, { opacity: 1, y: '0px', duration: 0.5, stagger: 0.2 }), 'pre-animation')
			.add('words-animation')
			.add(gsap.fromTo(words, { y: '200%', rotate: '20deg', opacity: 0 }, { y: '0%', rotate: '0deg', opacity: 1, duration: 0.5, stagger: 0.03 }), 'words-animation')
			.add('post-animation')
			.add(gsap.fromTo(postAnimationElements, { opacity: 0, y: '50px' }, { opacity: 1, y: '0px', duration: 0.5, stagger: 0.2 }), 'post-animation');
	},
};

export default textAnimation;
