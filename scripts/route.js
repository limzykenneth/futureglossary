var futures = futures || {};
var selectedModel;

futures.routes = Backbone.Router.extend({
	routes: {
		"": "noSelection",
		"html": "introHTML",
		"css": "introCSS",
		"odata": "introOpenData",
		"js": "introJavascript",
		"ruby": "introRuby",
		"git": "introGit",
		"swift": "introSwift",
		"iot": "introIot"
	},

	noSelection: function(){
		showPopup("none");
	},
	introHTML: function(){
		showPopup(iHTML);
	},
	introCSS: function(){
		showPopup(iCSS);
	},
	introOpenData: function(){
		showPopup(iOpenData);
	},
	introJavascript: function(){
		showPopup(iJavascript);
	},
	introRuby: function(){
		showPopup(iRuby);
	},
	introGit: function(){
		showPopup(iGit);
	},
	introSwift: function(){
		showPopup(iSwift);
	},
	introIot: function(){
		showPopup(iIot);
	}
});