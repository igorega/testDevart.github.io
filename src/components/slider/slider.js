import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.slider', {
	slidesPerView: 1,

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		formatFractionCurrent: function(number) {
			return (`0${number}`).slice(-2);
		},
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},

		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});
