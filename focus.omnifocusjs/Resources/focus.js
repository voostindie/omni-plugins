(() => {
	const library = new PlugIn.Library(new Version("1.0"));
	library.switchFocus = function(...array) {
		const targetFocus = new Set(array);
		try {
			let currentFocus = new Set(document.windows[0].focus);
			if (currentFocus.size == 0) {
				document.windows[0].focus = [...targetFocus];
				return;
			}
			if (targetFocus.symmetricDifference(currentFocus).size == 0) {
				document.windows[0].focus = [];
				return;
			}
			document.windows[0].focus = [...targetFocus];
		}
		catch (err) {
			if (!err.causedByUserCancelling) {
				console.error(err.name, err.message);
				new Alert(err.name, err.message).show();
			}
		}
	};
	return library;
})();