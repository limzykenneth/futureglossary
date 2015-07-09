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
	workshops: false
});

var iCSS = new futures.glossary({
	name: "CSS",
	link: "css",
	tier: 1,
	explain: "CSS is a style sheet language used for describing the look and formatting of a document written in a markup language.",
	intro: "Ruby is an expressive, dynamic programming language. Ruby on Rails is an open source web framework for building custom web applications. The courses in this section get you quickly up to speed with the basics of the Ruby language and on track to building your first Rails application.",
	application: [{
		name: "",
		path: ""
	}],
	workshops: false
});

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
	workshops: false
});

var iJavascript = new futures.glossary({
	name: "Javascript",
	link: "js",
	tier: 1,
	explain: "An object-oriented computer programming language commonly used to create interactive effects within web browsers.",
	intro: "<p>Javascript is one of the most popular programming language in the world. In order to make plain HTML CSS webpage more dynamic, almost all webpages on the internet have Javascript in some form. In simple terms, Javascript is the programming language of the web.</p>",
	application: [{
		name: "Every Last Drop",
		path: "http://everylastdrop.co.uk/"
	},{
		name: "Multeor",
		path: "http://multeor.com/game/"
	}],
	workshops: false
});

var iRuby = new futures.glossary({
	name: "Ruby",
	link: "ruby",
	tier: 3,
	explain: "A dynamic, interpreted, open source programming language with a focus on simplicity and productivity",
	intro: "<p>Ruby is a programming language designed to make programming more productive and also make the programmers happier. It has a clean simple look and easy to learn. Ruby gained mass popularity on the web with the Ruby on Rails framework. Ruby on Rails enables a website to talk to a web server or database to store or retrieve information.</p>",
	application: [{
		name: "Twitter",
		path: "https://twitter.com/"
	},{
		name: "Github",
		path: "https://github.com/"
	}],
	workshops: false
});

var iIot = new futures.glossary({
	name: "IoT",
	link: "iot",
	tier: 2,
	explain: "A proposed development of the Internet where everyday objects have network connectivity to send and receive data.",
	intro: "",
	application: [{
		name: "",
		path: ""
	}],
	workshops: false
});

var iFeedback = new futures.glossary({
	name: "Feedback",
	link: "feedback",
	tier: 1,
	explain: "Tell us what you think about this glossary!",
	intro: "<p>Please fill out the form available <a href='http://goo.gl/forms/MYEMWefIuw' target=_blank><u>here</u></a> to let us know what you think so that we can further improve this.</p>",
	application: false,
	workshops: false
});

// New and not added to colections
var iUX = new futures.glossary({
	name: "User Experience",
	link: "ux",
	tier: 2,
	explain: "User experience (abbreviated as UX) is how a person feels when interfacing with a system.",
	intro: "<p>UX designers) study and evaluate how users feel about a system, looking at such things as ease of use, perception of the value of the system, utility, efficiency in performing tasks and so forth.</p><p>UX designers also look at sub-systems and processes within a system. For example, they might study the checkout process of an e-commerce website to see whether users find the process of buying products from the website easy and pleasant. They could delve deeper by studying components of the sub-system, such as seeing how efficient and pleasant is the experience of users filling out input fields in a Web form.</p>",
	application: [{
		name: "What is User Experience Design?",
		path: "http://www.smashingmagazine.com/2010/10/05/what-is-user-experience-design-overview-tools-and-resources/"
	}],
	workshops: false
});

var iArduino = new futures.glossary({
	name: "Arduino",
	link: "arduino",
	tier: 3,
	explain: "Arduino is an open-source platform used for building electronics projects.",
	intro: "<p>Arduino consists of both a physical programmable circuit board (a microcontroller) and a piece of software, or IDE (Integrated Development Environment) that runs on your computer, used to write and upload computer code to the physical board.</p><p>The Arduino platform has become quite popular with people just starting out with electronics. The Arduino IDE uses a simplified version of C/C++, making it easy to learn to program. Additionally, Arduino provides a standard form factor that breaks out the functions of the micro-controller into an accessible package.</p>",
	application: [{
		name: "LED Cube",
		path: "https://www.youtube.com/watch?v=6mXM-oGggrM"
	},{
		name: "The Selfie Plant",
		path: "https://vimeo.com/129462054"
	}],
	workshops: false
});

var iProcessing = new futures.glossary({
	name: "Processing",
	link: "processing",
	tier: 1,
	explain: "Processing is a digital sketchbook and the first step for visual artist to learn code.",
	intro: '<p>From the Processing website: "Processing is a programming language, development environment, and online community." Processing was made for teaching programming to visual artist. Over time, Processing evolved into a professional visual art programming tool used by artist and designers to create interactive and engaging works. It is easy to use and easy to learn with limitless possibilities.</p>',
	application: [{
		name: "Light Kinetics, in the loop",
		path: "https://vimeo.com/122633347"
	},{
		name: "Pathfinder",
		path: "https://vimeo.com/111361109"
	}],
	workshops: false
});

var iCode = new futures.glossary({
	name: "Code",
	link: "code",
	tier: 1,
	explain: "The language of computers.",
	intro: "<p>Code is a set of rules or instructions that tells the computer what you want it to do. Everything any computer does is based around different codes. Bloomberg have an excellent article on what is code available <a href='http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/' target=_blank>here</a>. A formally constructed family of code is called a programming language.<p>",
	application: [{
		name: "Connected Worlds",
		path: "https://vimeo.com/131585517"
	}],
	workshops: false
});

var iWearables = new futures.glossary({
	name: "Wearables",
	link: "wearables",
	tier: 2,
	explain: "Technologies that can be comfortably worn and provides brand new platforms of digital engagements.",
	intro: "<p>The terms “wearable technology“, “wearable devices“, and “wearables” all refer to electronic technologies or computers that are incorporated into items of clothing and accessories which can comfortably be worn on the body. These wearable devices can perform many of the same computing tasks as mobile phones and laptop computers; however, in some cases, wearable technology can outperform these hand-held devices entirely. Wearable technology tends to be more sophisticated than hand-held technology on the market today because it can provide sensory and scanning features not typically seen in mobile and laptop devices, such as biofeedback and tracking of physiological function.</p>",
	application: [{
		name: "MUSHTARI",
		path: "https://vimeo.com/131786000"
	}],
	workshops: false
});

var iVR = new futures.glossary({
	name: "Virtual Reality",
	link: "vr",
	tier: 2,
	explain: "Virtual reality is an immersive computer simulated experience aiming to emulate real senses.",
	intro: "",
	application: [{
		name: "The Future Universe",
		path: "https://www.prote.in/en/feed/2015/07/step-into-your-screen-with-the-future-universe"
	},{
		name: "Oculus Rift",
		path: "https://www.oculus.com"
	}],
	workshops: false
});
