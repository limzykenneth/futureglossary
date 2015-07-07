$(document).ready(function($) {
	var glossaryGroup = new futures.collection([
			iHTML, iCSS, iOpenData, iJavascript, iRuby, iGit, iSwift, iIot
		]);

	var glossaryGroupView = new futures.allView({collection: glossaryGroup});

	$("#wrapper").html(glossaryGroupView.render().$el);

	var glossaryRouter = new futures.routes();
	Backbone.history.start();

	$(".button").hover(function(event) {
		/* Stuff to do when the mouse enters the element */
		var id = $(this).index() + 1;
		var cid = "c"+id;
		var expanded = glossaryGroup.get(cid).toJSON().expanded;

		if (expanded == "false"){
			$(this).find('.explanation').css('display', 'block');
		}
	}, function(event) {
		/* Stuff to do when the mouse leaves the element */
		var id = $(this).index() + 1;
		var cid = "c"+id;
		var expanded = glossaryGroup.get(cid).toJSON().expanded;

		if (expanded == "false"){
			$(this).find('.explanation').css('display', 'none');
		}
	});

	// Expand and contract on click
	$(".button").on("click", function(e) {
		var id = $(this).index() + 1;
		var cid = "c"+id;

		$(this).find('.explanation').html(glossaryGroup.get(cid).toJSON().intro);
		$(this).find('.explanation').css('display', 'block').css('text-align','left');
		glossaryGroup.get(cid).set("expanded","true");

		var w = 430;
		var h = 430;

		if ($(this).width() == 430){
			w = 200;
			h = 200;
			$(this).find('.explanation').html(glossaryGroup.get(cid).toJSON().explain);
			$(this).find('.explanation').css('display', 'none').css('text-align','center');
			glossaryGroup.get(cid).set("expanded","false");
		}
		$(this).animate({width: w, height: h}, 100, function(){
			$("#wall").masonry({});
		});
	});

	$("#beginner").click(function(e) {
		showHideTiers(1);
	});
	$("#intermediate").click(function(e) {
		showHideTiers(2);
	});
	$("#advanced").click(function(e) {
		showHideTiers(3);
	});
	$("#all").click(function(e) {
		$(".button").each(function(){
			animateToShow($(this));
		});
	});

	function showHideTiers(index){
		for (i=0; i < glossaryGroup.length; i++){
			if (glossaryGroup.at(i).toJSON().tier == index){
				animateToShow($(".button:eq("+i+")"));
			}else{
				animateToHide($(".button:eq("+i+")"));
			}
		}
	}

	function animateToShow($item){
		$item.animate({
			width: '200px',
			height: '200px',
			padding: '10px',
			margin: '5px',
			'font-size': '1em',
			display: 'block'
		}, 200, function(){
			$("#wall").masonry({});
		});
	}

	function animateToHide($item){
		$item.animate({
			width: '0',
			height: '0',
			padding: '0',
			margin: '0',
			'font-size': '0em',
			display: 'none'
		}, 200, function(){
			$("#wall").masonry({});
		});
	}

	$("#wall").masonry({
		itemSelector: '.button',
		columnWidth: 230,
		isAnimated: true,
		animationOptions: {
		    duration: 200
		}
	});

});



// Custom functions
function showPopup(selectedModel){
	// if(selectedModel != "none"){
	// 	var glossaryGroup = new futures.collection([
	// 			iHTML, iCSS, iOpenData, iJavascript, iRuby, iGit, iSwift, iIot
	// 		]);

	// 	index = glossaryGroup.indexOf(selectedModel);
	// 	var id = index + 1;
	// 	var cid = "c"+id;

	// 	$(".button:eq("+index+")").find('.explanation').html(glossaryGroup.get(cid).toJSON().intro);
	// 	$(".button:eq("+index+")").find('.explanation').css('display', 'block');
	// 	glossaryGroup.get(cid).set("expanded","true");

	// 	var w = 430;
	// 	var h = 430;

	// 	if ($(".button:eq("+index+")").width() == 430){
	// 		w = 200;
	// 		h = 200;
	// 		$(".button:eq("+index+")").find('.explanation').html(glossaryGroup.get(cid).toJSON().explain);
	// 		$(".button:eq("+index+")").find('.explanation').css('display', 'none');
	// 		glossaryGroup.get(cid).set("expanded","false");
	// 	}
	// 	$(".button:eq("+index+")").animate({width: w, height: h}, 100, function(){
	// 		$("#wall").masonry({});
	// 	});
	// }
}
