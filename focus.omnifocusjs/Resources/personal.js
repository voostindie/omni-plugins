(() => {
	const action = new PlugIn.Action(async function(selection, sender) {
		this.focus.switchFocus(
			folderNamed("👨🏻‍💻 Persoonlijk"),
			projectNamed("🤖 Routine")
		);
	});
	return action;
})();
