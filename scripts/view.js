var futures = futures || {};

futures.singleView = Backbone.View.extend({
	className: "button",

	template: _.template( $("#allView").html() ),

	render: function(){
		var glossaryTemplate = this.template(this.model.toJSON());
		this.$el.html(glossaryTemplate);
		return this;
	}
});

futures.allView = Backbone.View.extend({
	tagName: "section",
	id: "wall",

	render: function(){
		this.collection.each(this.addGlossary, this);
		return this;
	},

	addGlossary: function(glossary){
		var glossaryView = new futures.singleView({model: glossary});
		this.$el.append(glossaryView.render().$el);
	}
});

futures.detailsView = Backbone.View.extend({
	id: "tabs",

	template: _.template($("#tabsView").html()),

	render: function(){
		var glossaryTab = this.template(this.model.toJSON());
		this.$el.html(glossaryTab);
		return this;
	}
});