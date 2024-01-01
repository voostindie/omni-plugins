(() => {
	const action = new PlugIn.Action(async function(selection, sender) {
		this.focus.switchFocus(
			folderNamed("🏐 TweeVV"),
			folderNamed("👨🏻‍💻 Personal"),
			projectNamed("🤖 Routine")
		);
	});
	return action;
})();
