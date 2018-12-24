const Slider = (function() {

let SliderConfig = {
	loop: false
};

const Slider = {
	initCarousel(config) {
		this.carouselItem = document.querySelector('.carousel-item');
		this.images = this.carouselItem.querySelectorAll('.images');
		
		this.WIDTH = this.carouselItem.getBoundingClientRect().width;
		this.COUNT_SLIDER = this.images.length;
		this.count = 0;
		this.WC = this.WIDTH * this.COUNT_SLIDER;

		if(!this.loops) this.carouselItem.style.cssText = `width: ${this.WC}px; left: ${this.count};`;

		this.buttons = document.querySelector('.buttons');
		this.btnLeft = this.buttons.querySelector('.button.left');
		this.btnRight = this.buttons.querySelector('.button.right');

		if(config !== null) {
			if(config.loop) SliderConfig.loop = config.loop;

			document.querySelector('body').classList.add('loop');

			this.images[0].classList.add('active');
		} 

		this.loops = SliderConfig.loop;
		
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
	loop(name) {

		this.active = this.carouselItem.querySelector('.active');

		if(name === 'prev') {

			if(!this.active.previousElementSibling !== true) {
				this.active.classList.remove('active')
				this.active.previousElementSibling.classList.add('active')
			} else {
				this.active.classList.remove('active')
				this.images[this.images.length - 1].classList.add('active')
			}

		} else if(name === 'next') {
			if(!this.active.nextElementSibling !== true) {
				this.active.classList.remove('active')
				this.active.nextElementSibling.classList.add('active')
			} else {
				this.active.classList.remove('active')
				this.images[0].classList.add('active')
			}
		}
	},
	handler(config) {
		this.initCarousel(config);
		this.listen(this.btnLeft);
		this.listen(this.btnRight);
	},
	listen(btn) {
		
		btn.addEventListener('click', () => {
			if (!this.loops) {
				this.carouselItem.style.cssText += `left: ${btn.innerHTML === 'Left' ? this.changePosition('-') : this.changePosition('+') }px`;
			} else {
				this.loop(btn.innerHTML === 'Left' ? 'prev' : 'next')
			}
		})
		
	}
};

return {
	init(config = null) {
		return Slider.handler(config)
	} 
}

}());

Slider.init({loop: true});