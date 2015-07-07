$(document).ready(function($) {
	var glossaryGroup = new futures.collection([
			iHTML, iCSS, iOpenData, iJavascript, iRuby, iGit, iSwift, iIot
		]);

	var glossaryGroupView = new futures.allView({collection: glossaryGroup});

	$("#sidebar").html(glossaryGroupView.render().$el);

	var glossaryDetail = new futures.detailsView({});
	// $("#wrapper").html(glossaryDetail.render().$el);

	var glossaryRouter = new futures.routes();

	Backbone.history.start();

	
});

function showPopup(selectedModel){
}
