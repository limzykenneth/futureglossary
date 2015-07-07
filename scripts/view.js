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
	tagName: "article",

	template: _.template($("#detailsView").html()),

	render: function(){
		var glossaryDetails = this.template(this.model.toJSON());
		this.$el.html(glossaryDetails);
		return this;
	}
});