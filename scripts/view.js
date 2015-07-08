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

futures.sliderView = Backbone.View.extend({
	id: "banner",

	template: _.template( $("#sliderView").html() ),
	
	render: function(){
		var sliderTemplate = this.template(this.model.toJSON());
		this.$el.html(sliderTemplate);
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