$(document).ready(function($) {
	var glossaryGroup = new futures.collection([
			iHTML, iOpenData, iJavascript, iRuby
		]);

	var glossaryGroupView = new futures.allView({collection: glossaryGroup});

	var glossaryDetailsView = new futures.detailsView({model: iHTML})


	$("#wrapper").html(glossaryGroupView.render().$el);
	$("#popup").html(glossaryDetailsView.render().$el);

	var glossaryRouter = new futures.routes();

	Backbone.history.start();

	

	$("#popup").dialog({
		autoOpen: false,
		appendTo: "#wrapper",
		height: 500,
		width: 800,
		hide: { effect: "slideUp", duration: 500 },
		show: { effect: "slideDown", duration: 500 },
		resizable: false,
		dialogClass: 'noTitleStuff'
	});

	$("#tabs").tabs({
		collapsible: false
	});

	
});