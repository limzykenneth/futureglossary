var futures = futures || {};
var selectedModel;

futures.routes = Backbone.Router.extend({
	routes: {
		"": "noSelection",
		"html": "introHTML",
		"odata": "introOpenData",
		"js": "introJavascript",
		"ruby": "introRuby"
	},

	noSelection: function(){
		showPopup("none");
	},
	introHTML: function(){
		showPopup(iHTML);
	},
	introOpenData: function(){
		showPopup(iOpenData);
	},
	introJavascript: function(){
		showPopup(iJavascript);
	},
	introRuby: function(){
		showPopup(iRuby);
	}
});