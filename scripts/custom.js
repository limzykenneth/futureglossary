$(document).ready(function($) {
	var glossaryGroup = new futures.collection([
			iHTML, iOpenData, iJavascript, iRuby
		]);

	var glossaryGroupView = new futures.allView({collection: glossaryGroup});

	$("#wrapper").html(glossaryGroupView.render().$el);

	var glossaryRouter = new futures.routes();

	Backbone.history.start();
});

function showPopup(selectedModel){
	$("#popup").dialog({
		autoOpen: false,
		appendTo: "#wrapper",
		height: 500,
		width: 800,
		hide: { effect: "slideUp", duration: 500 },
		show: { effect: "slideDown", duration: 500 },
		resizable: false,
		dialogClass: 'noTitleStuff',

		buttons: [
		    {
				text: "Close",
				icons: {
					primary: "ui-icon-close"
				},
				click: function() {
					location.hash="";
					showPopup("none");
				},

				// Uncommenting the following line would hide the text,
				// resulting in the label being used as a tooltip
				showText: false
		    }
		]
	});

	if (selectedModel == "none"){
		$("#popup").dialog("close");
		return true;
	}

	var glossaryDetailsView = new futures.detailsView({model: selectedModel});

	$("#popup").dialog("open").html(glossaryDetailsView.render().$el);
	$("#tabs").tabs({
		collapsible: false
	});
}
