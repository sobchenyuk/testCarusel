const initCarousel = () => {
	const carouselItem = document.querySelector('.carousel-item');
	const images = carouselItem.querySelectorAll('.images');
	carouselItem.style.cssText = `width: ${carouselItem.getBoundingClientRect().width * images.length}px`;
};

initCarousel();