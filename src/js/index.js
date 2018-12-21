const Slider = {
	initCarousel() {
		this.carouselItem = document.querySelector('.carousel-item');
		this.images = this.carouselItem.querySelectorAll('.images');
		this.WIDTH = this.carouselItem.getBoundingClientRect().width;
		this.COUNT_SLIDER = this.images.length;

		this.carouselItem.style.cssText = "width: ".concat(this.WIDTH * this.COUNT_SLIDER, "px");

		this.buttons = document.querySelector('.buttons');
		this.btnLeft = this.buttons.querySelectorAll('.button')[0];
		this.btnRight = this.buttons.querySelectorAll('.button')[1];
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

		console.log(this.WIDTH)

	},
	listen(btn) {
		btn.addEventListener('click', () => {
			switch(btn.innerHTML) {
				case 'Left':
					this.carouselItem.style.cssText += `left: -${this.WIDTH}px`;
					break;
				case 'Right':
					break;	
			}
			console.log(btn.innerHTML)
		})
	}
};

Slider.init();