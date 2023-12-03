const helpers = {
	html: document.querySelector('html'),
	scrollable: true,

	disableScroll: function () {
		if (this.scrollable) {
			this.html.style.overflow = 'hidden';
			this.scrollable = false;
		}
	},

	enableScroll: function () {
		if (!this.scrollable) {
			this.html.style.overflow = '';
			this.scrollable = true;
		}
	},

	isInView: function (element) {
		const rect = element.getBoundingClientRect();
		return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0 && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.right >= 0;
	},

	getPosition: function (element) {
		let xPosition = 0;
		let yPosition = 0;
		while (element) {
			xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
			yPosition += element.offsetTop - element.scrollTop + element.clientTop;
			element = element.offsetParent;
		}
		return { x: xPosition, y: yPosition };
	},
};

export default helpers;
