const nav = '.nav';
const navListContent = '#navListContent';
const navToggleBtn = document.querySelector('#navToggleBtn');
const navListContentEl = document.querySelector(navListContent);
const body = document.querySelector('body');
const html = document.querySelector('html');
const scrollPadding = `${window.innerWidth - document.documentElement.clientWidth}px`;
const style = getComputedStyle(document.body);
const transition = style.getPropertyValue('--transition');

// close menu function
const closeMenu = () => {
	navToggleBtn.setAttribute('aria-expanded', false);
	body.classList.add('close-transition');

	setTimeout(() => {
		body.classList.remove('menu-open');
		html.removeAttribute('style');
	}, parseInt(transition, 10));

	setTimeout(() => {
		body.classList.remove('close-transition');
	}, parseInt(transition, 10) * 2);
};

// toggle nav menu
navToggleBtn.addEventListener('click', () => {
	document.documentElement.style.setProperty('--scrollPadding', scrollPadding);
	navListContentEl.classList.add('transition');

	if (navToggleBtn.getAttribute('aria-expanded') === 'false') {
		navToggleBtn.setAttribute('aria-expanded', true);
		body.classList.remove('close-transition');
		body.classList.add('menu-open');
	} else {
		closeMenu();
	}
});

const detectMediaQuery = () => {
	const style = getComputedStyle(document.body);
	const L = style.getPropertyValue('--L');

	if (window.matchMedia(`(min-width: ${L}px)`).matches) {
		body.classList.remove('menu-open');
		navListContentEl.classList.remove('transition');
		navToggleBtn.setAttribute('aria-expanded', false);
	}
};

detectMediaQuery();

window.addEventListener('resize', detectMediaQuery);

// close menu outside
document.addEventListener('click', (e) => {
	if (!e.target.closest(nav) &&
		!e.target.closest(navListContent) &&
		body.classList.contains('menu-open')) {
		closeMenu();
	}
});

// close menu keyboard
document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape' &&
		body.classList.contains('menu-open')) {
		closeMenu();
	}
});
