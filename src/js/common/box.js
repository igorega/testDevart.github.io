const boxBtn = document.querySelectorAll('.box__btn');
const boxBack = document.querySelectorAll('.box__back');

boxBtn.forEach(item => {
	item.addEventListener('click', () => {
		if (item.parentElement.classList.contains('is-active')) {
			item.parentElement.classList.remove('is-active');
		} else {
			boxBtn.forEach(boxs => {
				boxs.parentElement.classList.remove('is-active');
			});

			item.parentElement.classList.add('is-active');
		}
	});
});

boxBack.forEach(item => {
	item.addEventListener('click', (e) => {
		e.target.closest('.box').classList.remove('is-active');
	});
});

// close box keyboard
document.addEventListener('keydown', (e) => {
	const boxActive = document.querySelector('.box.is-active');

	if (e.code === 'Escape' && boxActive) {
		boxActive.classList.remove('is-active');
	}
});

// close box outside
document.addEventListener('click', (e) => {
	const boxActive = document.querySelector('.box.is-active');

	if (!e.target.closest('.box') && boxActive) {
		boxActive.classList.remove('is-active');
	}
});
