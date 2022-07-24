const video = document.querySelector('#video');
const img = document.querySelector('#videoImg');
const btn = document.querySelector('#playBtn');

video.pause();

btn.addEventListener('click', () => {
	img.classList.add('is-hide');
	video.parentElement.classList.add('is-play', 'hide-bg');
	video.play();
});

video.addEventListener('click', () => {
	video.pause();
	video.parentElement.classList.remove('is-play');
});
