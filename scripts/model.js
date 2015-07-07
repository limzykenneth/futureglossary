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
	name: "HTML",
	link: "html",
	tier: 1,
	explain: "HTML is a computer language devised to allow website creation.",
	intro: '<p>HTML is short for "HyperText Markup Language". That may sound scary, but it simply means it is a language for describing web-pages using ordinary text. HTML is not a complex programming language.</p><p>Every web page is actually a HTML file. Each HTML file is just a plain-text file, but with a .html file extension instead of .txt, and is made up of many HTML tags as well as the content for a web page.</p><p>A web site will often contain many html files that link to each other. You can edit HTML files with your favourite editor.</p>',
	application: "http://www.motherfuckingwebsite.com",
	workshops: {
		path: "http://www.codecademy.com/courses/web-beginner-en-HZA3b/0/1?curriculum_id=50579fb998b470000202dc8b",
		name: "Codeacademy"
	}
});

var iCSS = new futures.glossary({
	name: "CSS",
	link: "css",
	tier: 1,
	explain: "CSS is a style sheet language used for describing the look and formatting of a document written in a markup language.",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: "",
	workshops: {
		path: "https://www.codeschool.com/paths/html-css",
		name: "Code School"
	}
});

var iOpenData = new futures.glossary({
	name: "Open Data",
	link: "odata",
	tier: 2,
	explain: "Open data is data that can be freely used, re-used and redistributed by anyone",
	intro: "This is intro to Open Data",
	application: "",
	workshops: {
		name: "Wikipedia",
		path: "https://en.wikipedia.org/wiki/Open_data"
	}
});

var iJavascript = new futures.glossary({
	name: "Javascript",
	link: "js",
	tier: 1,
	explain: "An object-oriented computer programming language commonly used to create interactive effects within web browsers.",
	intro: "JavaScript is the programming language of HTML and the Web.",
	application: "",
	workshops: {
		name: "Codeacademy",
		path: "http://www.codecademy.com/en/tracks/javascript"
	}
});

var iRuby = new futures.glossary({
	name: "Ruby",
	link: "ruby",
	tier: 3,
	explain: "A dynamic, interpreted, open source programming language with a focus on simplicity and productivity",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: "",
	workshops: {
		name: "Code School",
		path: "https://www.codeschool.com/paths/ruby"
	}
});

var iGit = new futures.glossary({
	name: "Git",
	link: "git",
	tier: 2,
	explain: "Git is the most popular version control system that developers use to track and share code.",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: "",
	workshops: {
		name: "Code School",
		path: "https://www.codeschool.com/paths/git"
	}
});

var iSwift = new futures.glossary({
	name: "Swift",
	link: "swift",
	tier: 3,
	explain: "Swift is an innovative new programming language for iOS and OS X with concise yet expressive syntax that produces lightning-fast apps.",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: "",
	workshops: {
		name: "Apple",
		path: "https://developer.apple.com/swift/"
	}
});

var iIot = new futures.glossary({
	name: "IoT",
	link: "iot",
	tier: 2,
	explain: "A proposed development of the Internet where everyday objects have network connectivity to send and receive data.",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: "",
	workshops: {
		name: "Wikipedia",
		path: "https://en.wikipedia.org/wiki/Internet_of_Things"
	}
});

