import Typewriter from 'typewriter-effect/dist/core';

const banner = {
	textElement: document.querySelector('.js-banner-digital'),
	words: document.querySelector('.js-banner-digital').getAttribute('data-words').split(' '),
	waitTime: document.querySelector('.js-banner-digital').getAttribute('data-wait-time'),

	init: function () {
		this.typewriterEffect();
	},

	typewriterEffect: function () {
		// eslint-disable-next-line
		const typewriter = new Typewriter('.js-banner-digital', {
			strings: this.words,
			autoStart: true,
			cursor: '',
			pauseFor: this.waitTime,
			loop: true,
			deleteSpeed: 100,
		});
	},
};

export default banner;
