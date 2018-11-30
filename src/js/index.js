const initCarousel = () => {
	const carouselItem = document.querySelector('.carousel-item');
	const images = carouselItem.querySelectorAll('.images');
	const WIDTH = carouselItem.getBoundingClientRect().width;
	const COUNT_SLIDER = images.length;
	carouselItem.style.cssText = `width: ${WIDTH * COUNT_SLIDER}px`;
};

initCarousel();

const Slider = {
	initCarousel() {

	}
};