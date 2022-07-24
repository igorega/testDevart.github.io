function ready() {
	const block = document.querySelector('#sticky');
	const top = block.offsetTop - `${parseInt(getComputedStyle(document.body).getPropertyValue('--nav-height'))}0`;

	function scroll() {
		const y = document['documentElement' || 'body'].scrollTop;

		if (y >= top) {
			block.classList.add('is-sticky');
		} else {
			block.classList.remove('is-sticky');
		}
	}

	window.addEventListener('scroll', scroll);
}

ready();

window.addEventListener('DOMContentLoaded', ready);
