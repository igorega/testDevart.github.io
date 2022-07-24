const tabsItems = document.querySelectorAll('.tabs__items');

tabsItems.forEach((item) => {
	item.addEventListener('click', function(e) {
		const {target} = e;

		if (target &&
			target.classList.contains('tabs__item') &&
			!target.classList.contains('is-active')) {

			// remove & add class to active tab
			[...this.children].map((item) => item.classList.remove('is-active'));
			target.classList.add('is-active');

			const tabIndex = [...this.children].indexOf(target);
			const tabsContents = this.closest('.tabs').getElementsByClassName('tabs__contents')[0].children;

			// remove & add class to active tab content
			[...tabsContents].map((item) => item.classList.remove('is-active'));
			tabsContents[tabIndex].classList.add('is-active');
		}
	});
});
