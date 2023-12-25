(() => {
	const action = new PlugIn.Action(async function(selection, sender) {
		this.focus.switchFocus(
			folderNamed("💼 Rabobank"),
			projectNamed("🤖 Routine")
		);
	});
	return action;
})();
