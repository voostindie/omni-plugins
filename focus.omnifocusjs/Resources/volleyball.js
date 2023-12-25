(() => {
	const action = new PlugIn.Action(async function(selection, sender) {
		this.focus.switchFocus(
			folderNamed("🏐 TweeVV"),
			projectNamed("🤖 Routine")
		);
	});
	return action;
})();
