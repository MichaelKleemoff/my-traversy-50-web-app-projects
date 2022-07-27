/** @format */

// Bring all the panels into our JavaScript file. The `querySelectorAll()` creates a NodeList which has similar properties to an array.
const panels = document.querySelectorAll('.panel');

// Loop through our NodeList. We will use a `forEach()` method which is a higher order array method.
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		// Before addding a class of `active`, we need to remove this class from all of the other `panels`.
		removeActiveClasses();

		// So when a particular `panel` gets clicked, it adds a class of `active`, which increases the width to 5 via the `active` class.
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
