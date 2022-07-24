if (document.querySelector('.accordionBtn.is-active')) {
	document.querySelector('.accordionBtn.is-active').nextElementSibling.style.maxHeight = `${document.querySelector('.accordionPanel').scrollHeight/10}rem`;
}

function accordion(options) {
	let def = {
		closeAll: false,
	};

	let setting = extend(def, options);

	function extend() {
		for (let i = 1; i < arguments.length; i++) {
			for (let key in arguments[i]) {
				// eslint-disable-next-line no-prototype-builtins
				if (arguments[i].hasOwnProperty(key)) {
					arguments[0][key] = arguments[i][key];
				}
			}
		}

		return arguments[0];
	}

	(function() {
		const acc = document.getElementsByClassName('accordionBtn');
		let i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener('click', function() {
				let panel = this.nextElementSibling;

				if (panel.style.maxHeight) {
					this.classList.remove('is-active');
					panel.style.maxHeight = null;
				} else {
					if (setting.closeAll) {
						const accPanel = this.closest('.accordion').querySelectorAll('.accordionPanel');
						const accButton = this.closest('.accordion').querySelectorAll('.accordionBtn');

						accPanel.forEach(item => item.style.maxHeight = null);
						accButton.forEach(item => item.classList.remove('is-active'));
					}

					panel.style.maxHeight = `${panel.scrollHeight/10}rem`;
					this.classList.add('is-active');
				}
			});
		}
	})();
}

accordion({
	closeAll: true, // close all items if current element is open
});
