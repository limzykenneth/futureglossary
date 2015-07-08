var futures = futures || {};

futures.glossary = Backbone.Model.extend({
	defaults: {
		"name": "",
		"intro": "",
		"application": "",
		"workshops": [],
		"expanded": "false"
	},
});

var iHTML = new futures.glossary({
	name: "HTML/CSS",
	link: "html",
	tier: 1,
	explain: "HTML is a computer language devised to allow website creation.",
	intro: '<p>Every webpage on the internet is written in HTML or Hypertext Markup Language. HTML is essentially the structure and content of the webpage.</p><p>CSS or Cascading Stylesheets is the way that a webpage describe how the structures and contents on the webpage should be styled. Whether the paragraph uses Helvetica or Georgia as the font or the photo on the webpage is 200 pixels high, these are defined in CSS.</p>',
	application: [{
		name: "DOM Tree",
		path: "http://hakim.se/experiments/css/domtree/"
	},{
		name: "Typographic Rain",
		path: "http://andrew-hoyer.com/experiments/rain/"
	},{
		name: "Madmanimation",
		path: "http://stuffandnonsense.co.uk/content/demo/madmanimation/"
	}],
	workshops: [{
		path: "http://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1?curriculum_id=50579fb998b470000202dc8b",
		name: "Codeacademy"
	}]
});

// var iCSS = new futures.glossary({
// 	name: "CSS",
// 	link: "css",
// 	tier: 1,
// 	explain: "CSS is a style sheet language used for describing the look and formatting of a document written in a markup language.",
// 	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
// 	application: [{
// 		name: "",
// 		path: ""
// 	}],
// 	workshops: [{
// 		path: "https://www.codeschool.com/paths/html-css",
// 		name: "Code School"
// 	}]
// });

var iOpenData = new futures.glossary({
	name: "Open Data",
	link: "odata",
	tier: 2,
	explain: "Open data is data that can be freely used, re-used and redistributed by anyone",
	intro: "This is intro to Open Data",
	application: [{
		name: "",
		path: ""
	}],
	workshops: [{
		name: "Wikipedia",
		path: "https://en.wikipedia.org/wiki/Open_data"
	}]
});

var iJavascript = new futures.glossary({
	name: "Javascript",
	link: "js",
	tier: 1,
	explain: "An object-oriented computer programming language commonly used to create interactive effects within web browsers.",
	intro: "JavaScript is the programming language of HTML and the Web.",
	application: [{
		name: "",
		path: ""
	}],
	workshops: [{
		name: "Codeacademy",
		path: "http://www.codecademy.com/en/tracks/javascript"
	}]
});

var iRuby = new futures.glossary({
	name: "Ruby",
	link: "ruby",
	tier: 3,
	explain: "A dynamic, interpreted, open source programming language with a focus on simplicity and productivity",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: [{
		name: "",
		path: ""
	}],
	workshops: [{
		name: "Code School",
		path: "https://www.codeschool.com/paths/ruby"
	}]
});

var iGit = new futures.glossary({
	name: "Git",
	link: "git",
	tier: 2,
	explain: "Git is the most popular version control system that developers use to track and share code.",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: [{
		name: "",
		path: ""
	}],
	workshops: [{
		name: "Code School",
		path: "https://www.codeschool.com/paths/git"
	}]
});

var iSwift = new futures.glossary({
	name: "Swift",
	link: "swift",
	tier: 3,
	explain: "Swift is an innovative new programming language for iOS and OS X with concise yet expressive syntax that produces lightning-fast apps.",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: [{
		name: "",
		path: ""
	}],
	workshops: [{
		name: "Apple",
		path: "https://developer.apple.com/swift/"
	}]
});

var iIot = new futures.glossary({
	name: "IoT",
	link: "iot",
	tier: 2,
	explain: "A proposed development of the Internet where everyday objects have network connectivity to send and receive data.",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: [{
		name: "",
		path: ""
	}],
	workshops: [{
		name: "Wikipedia",
		path: "https://en.wikipedia.org/wiki/Internet_of_Things"
	}]
});

