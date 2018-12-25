const Slider = (function() {

	let SliderConfig = {
		loop: false,
		infinity: false
	};

	const setBodyClass = className => document.querySelector('body').classList.add(className);

	const Slider = {
		initCarousel(config) {
			this.carouselItem = document.querySelector('.carousel-item');
			this.images = this.carouselItem.querySelectorAll('.images');
			
			this.WIDTH = this.carouselItem.getBoundingClientRect().width;
			this.COUNT_SLIDER = this.images.length;
			this.count = 0;
			this.WC = this.WIDTH * this.COUNT_SLIDER;

			this.buttons = document.querySelector('.buttons');
			this.btnLeft = this.buttons.querySelector('.button.left');
			this.btnRight = this.buttons.querySelector('.button.right');

			if(config !== null) {
				if(config.loop) {

					SliderConfig.loop = config.loop;
						 
					setBodyClass('loop')

					this.images[0].classList.add('active');

				} else if (config.infinity) {

					SliderConfig.infinity = config.infinity;

					const firstElem = this.images[this.images.length -1].cloneNode(true);
					const lastElem = this.images[0].cloneNode(true);

					firstElem.classList.add('firstElem')
					lastElem.classList.add('lastElem')


					this.carouselItem.insertBefore(firstElem, this.carouselItem.children[0]);
					this.carouselItem.appendChild(lastElem)


					this.images = this.carouselItem.querySelectorAll('.images');
			
					this.WIDTH = this.carouselItem.getBoundingClientRect().width;
					this.COUNT_SLIDER = this.images.length;
					this.count = this.WIDTH ;
					this.WC = this.WIDTH * this.COUNT_SLIDER;
					setBodyClass('infinity')

					this.carouselItem.style.cssText = `width: ${this.WC}px; left: -${this.count}px;`;


				}

			} else {
				this.carouselItem.style.cssText = `width: ${this.WC}px; left: ${this.count};`;
			}

			this.loops = SliderConfig.loop;
			this.infinity = SliderConfig.infinity;
			
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
		changePositionInfinity(arg) {

		const RW = parseInt(`-${this.WC}`);

		if (arg === '+') {

			if(this.count === this.WIDTH) {
				this.count = this.count - (this.WIDTH * 3)
			} else {
				this.count = this.count - this.WIDTH
			}

			if(this.count < (RW +500)) {
				this.count = parseInt(`-${this.WIDTH}`)
			};
			
		} else if (arg === '-') {

			if(this.count === this.WIDTH) {

				this.count = 0
	
			} else {
	
				this.count = this.count + this.WIDTH
	
			}
	
			if(this.count === 0) {
				this.count = (RW +500)
			}

		}

			return this.count;

		},
		loop(name) {

			this.active = this.carouselItem.querySelector('.active');

			if(name === '-') {

				if(!this.active.previousElementSibling !== true) {
					this.active.classList.remove('active')
					this.active.previousElementSibling.classList.add('active')
				} else {
					this.active.classList.remove('active')
					this.images[this.images.length - 1].classList.add('active')
				}

			} else if(name === '+') {
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

				if(this.loops ) {

					this.loop(btn.innerHTML === 'Left' ? '-' : '+');

				} else if(this.infinity) {

					this.carouselItem.style.cssText += `left: ${btn.innerHTML === 'Left' ? this.changePositionInfinity('-') : this.changePositionInfinity('+') }px`;

				} else {

					this.carouselItem.style.cssText += `left: ${btn.innerHTML === 'Left' ? this.changePosition('-') : this.changePosition('+') }px`;

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

Slider.init({infinity: true});