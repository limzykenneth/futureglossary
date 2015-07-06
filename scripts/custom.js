$(document).ready(function($) {
	var glossaryGroup = new futures.collection([
			iHTML, iCSS, iOpenData, iJavascript, iRuby, iGit, iSwift, iIot
		]);

	var glossaryGroupView = new futures.allView({collection: glossaryGroup});

	$("#wrapper").html(glossaryGroupView.render().$el);

	var glossaryRouter = new futures.routes();

	Backbone.history.start();

	$(".button .square").hover(function(event) {
		/* Stuff to do when the mouse enters the element */
		$(this).children('.explanation').css('display', 'block');
		// alert(this.id);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(".button .square .explanation").css('display', 'none');
	});

	// $(window).bind('click', function(e) {
	// 	if(jQuery('#popup').dialog('isOpen') && !jQuery(e.target).is('.ui-dialog, a') && !jQuery(e.target).closest('.ui-dialog').length){
	// 		$("#popup").dialog('close');
	// 	}
	// });

	$(".button").click(function(e) {
		var w = 430;
		var h = 430;
		if ($(this).width() == 430){
			w = 200;
			h = 200;
		}
		$(this).animate({width: w, height: h}, 100, function(){
			$("#wall").masonry({});
		});
	});

	$("#wall").masonry({
		itemSelector: '.button',
		columnWidth: 230,
		isAnimated: true,
		animationOptions: {
		    duration: 400
		}
	});

});



// Custom functions
function showPopup(selectedModel){
	// $("#popup").dialog({
	// 	autoOpen: false,
	// 	appendTo: "#wrapper",
	// 	height: 500,
	// 	width: 800,
	// 	hide: { effect: "slideUp", duration: 200 },
	// 	show: { effect: "slideDown", duration: 200 },
	// 	resizable: false,
	// 	dialogClass: 'noTitleStuff',

	// 	buttons: [
	// 	    {
	// 			text: "X",
				
	// 			click: function() {
	// 				location.hash="";
	// 				showPopup("none");
	// 			},

	// 			// Uncommenting the following line would hide the text,
	// 			// resulting in the label being used as a tooltip
	// 			// showText: false
	// 	    }
	// 	]
	// });

	// if (selectedModel == "none"){
	// 	$("#popup").dialog("close");
	// 	return true;
	// }

	// var glossaryDetailsView = new futures.detailsView({model: selectedModel});

	// $("#popup").dialog("open").html(glossaryDetailsView.render().$el);
	// $("#tabs").tabs({
	// 	collapsible: false
	// });
}
