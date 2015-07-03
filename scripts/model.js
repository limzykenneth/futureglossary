var futures = futures || {};

futures.glossary = Backbone.Model.extend({
	defaults: {
		"name": "",
		"intro": "",
		"application": "",
		"workshops": []
	},
});

var iHTML = new futures.glossary({
	name: "HTML",
	link: "html",
	intro: "Every webpage you look at is written in a language called HTML. You can think of HTML as the skeleton that gives every webpage structure.",
	application: "http://www.motherfuckingwebsite.com",
	workshops: [{
		"Codeacademy": "http://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1?curriculum_id=50579fb998b470000202dc8b"
	}]
});

var iOpenData = new futures.glossary({
	name: "Open Data",
	link: "odata",
	intro: "This is intro to Open Data",
	application: "",
	workshops: [{
		"Wikipedia": "https://en.wikipedia.org/wiki/Open_data"
	}]
});

var iJavascript = new futures.glossary({
	name: "Javascript",
	link: "js",
	intro: "JavaScript is the programming language of HTML and the Web.",
	application: "",
	workshops: [{
		"Codeacademy": "http://www.codecademy.com/en/tracks/javascript"
	}]
});

var iRuby = new futures.glossary({
	name: "Ruby",
	link: "ruby",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: "",
	workshops: [{
		"Code School": "https://www.codeschool.com/paths/ruby"
	}]
});