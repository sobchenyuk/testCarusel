const Slider = {
	initCarousel() {
		this.carouselItem = document.querySelector('.carousel-item');
		this.images = this.carouselItem.querySelectorAll('.images');
		this.WIDTH = this.carouselItem.getBoundingClientRect().width;
		this.COUNT_SLIDER = this.images.length;
		this.count = 0;
		this.WC = this.WIDTH * this.COUNT_SLIDER;

		this.carouselItem.style.cssText = `width: ${this.WC}px; left: ${this.count};`;

		this.buttons = document.querySelector('.buttons');
		this.btnLeft = this.buttons.querySelector('.button.left');
		this.btnRight = this.buttons.querySelector('.button.right');
		
	},
	changePosition(arg) {

		const RW = parseInt(`-${this.WC}`);

		if (arg === '-') {
			this.count = this.count - this.WIDTH
		} else if (arg === '+') {
			this.count = this.count + this.WIDTH
		}

		if (RW > this.count - this.WIDTH) {
			this.count = this.count + this.WIDTH
		} else if(this.count > 0) {
			this.count = 0
		} else {
			this.count;
		}

		return this.count;
	},
	left(btn) {
		this.listen(btn)
	},
	right(btn) {
		this.listen(btn)
	},
	init() {
		this.initCarousel();
		this.left(this.btnLeft);
		this.right(this.btnRight);
	},
	listen(btn) {
		btn.addEventListener('click', () => this.carouselItem.style.cssText += `left: ${btn.innerHTML === 'Left' ? this.changePosition('-') : this.changePosition('+') }px`)
	}
};

Slider.init();