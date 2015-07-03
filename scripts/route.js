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
		$("#popup").html("");
	},
	introHTML: function(){
		selectedModel = "iHTML";
	},
	introOpenData: function(){
		selectedModel = "iOpenData";
	},
	introJavascript: function(){
		selectedModel = "iJavascript";
	},
	introRuby: function(){
		selectedModel = "iRuby";
	}
});