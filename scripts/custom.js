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
	if(selectedModel != "none"){
		var glossaryDetailsView = new futures.detailsView({model: selectedModel});

		$("#wrapper").html(glossaryDetailsView.render().$el);
		console.log(selectedModel.toJSON().workshops.length);
	}
}

function countProperties(obj) {
	var prop;
	var propCount = 0;

	for (prop in obj) {
		propCount++;
	}
	return propCount;
}