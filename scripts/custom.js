var glossaryGroup = new futures.collection([
			iHTML, iJavascript, iRuby, iFeedback
		]);

var glossaryGroupView = new futures.allView({collection: glossaryGroup});

$(document).ready(function($) {
	$("#wrapper").html(glossaryGroupView.render().$el);

	var glossaryRouter = new futures.routes();
	Backbone.history.start();

	for (i=0; i < glossaryGroup.length; i++){
		if(glossaryGroup.at(i).toJSON().tier == 1){
			$(".button:eq("+i+")").css('background-color', '#cbffec');
		}
		if(glossaryGroup.at(i).toJSON().tier == 2){
			$(".button:eq("+i+")").css('background-color', '#bef0ff');
		}
		if(glossaryGroup.at(i).toJSON().tier == 3){
			$(".button:eq("+i+")").css('background-color', '#dedaff');
		}
	}

	$(".button").hover(function(event) {
		/* Stuff to do when the mouse enters the element */
		var id = $(this).index();
		var expanded = glossaryGroup.at(id).toJSON().expanded;

		if (expanded == "false"){
			$(this).find('.explanation').css('display', 'block');
		}
	}, function(event) {
		/* Stuff to do when the mouse leaves the element */
		var id = $(this).index();
		var expanded = glossaryGroup.at(id).toJSON().expanded;

		if (expanded == "false"){
			$(this).find('.explanation').css('display', 'none');
		}
	});

	// Expand and contract on click
	$(".button").on("click", function(e) {
		var id = $(this).index();

		var glossaryDetailsView = new futures.sliderView({model:glossaryGroup.at(id)});

		$(this).find('.explanation').html(glossaryDetailsView.render().$el);
		$(this).find('.explanation').css('display', 'block').css('text-align','left');
		glossaryGroup.at(id).set("expanded","true");

		var w = 430;
		var h = 430;

		if ($(this).width() == 430){
			w = 200;
			h = 200;
			$(this).find('.explanation').html(glossaryGroup.at(id).toJSON().explain);
			$(this).find('.explanation').css('display', 'none').css('text-align','center');
			glossaryGroup.at(id).set("expanded","false");
		}
		$(this).animate({width: w, height: h}, 100, function(){
			$("#wall").masonry({});
		});
	});

	$(".explanation").on('click', ".bullet", function(){
		$(".button").off('click');

		var i = $(this).index();
		nextPane($(this).parents("#banner").find(".slider"), i);
		$(this).parent(".bulletNav").find(".bullet").html("&#9675;");
		$(this).html("&#9679;");

		setTimeout(function(){
			$(".button").on('click', function(){
				var id = $(this).index();

				var glossaryDetailsView = new futures.sliderView({model:glossaryGroup.at(id)});

				$(this).find('.explanation').html(glossaryDetailsView.render().$el);
				$(this).find('.explanation').css('display', 'block').css('text-align','left');
				glossaryGroup.at(id).set("expanded","true");

				var w = 430;
				var h = 430;

				if ($(this).width() == 430){
					w = 200;
					h = 200;
					$(this).find('.explanation').html(glossaryGroup.at(id).toJSON().explain);
					$(this).find('.explanation').css('display', 'none').css('text-align','center');
					glossaryGroup.at(id).set("expanded","false");
				}
				$(this).animate({width: w, height: h}, 100, function(){
					$("#wall").masonry({});
				});
					});
		},10);
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
		$(".button").each(function(i){
			animateToShow($(this), i);
		});
	});


	$("#wall").masonry({
		itemSelector: '.button',
		columnWidth: 230,
		isAnimated: true,
		animationOptions: {
			duration: 200
		}
	});
});


function nextPane($item, n){
	var newPosition = 130 * n;
	var asPercentage = newPosition + "%";
	$item.css('right', asPercentage);
}

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

function showHideTiers(index){
	for (i=0; i < glossaryGroup.length; i++){
		if (glossaryGroup.at(i).toJSON().tier == index){
			animateToShow($(".button:eq("+i+")"), i);
		}else{
			animateToHide($(".button:eq("+i+")"), i);
		}
	}
}

function animateToShow($item, id){
	var w = 200;
	var h = 200;
	if ($item.width() == 430){
		w = 200;
		h = 200;
		$item.find('.explanation').html(glossaryGroup.at(id).toJSON().explain);
		$item.find('.explanation').css('display', 'none').css('text-align','center');
		glossaryGroup.at(id).set("expanded","false");
	}
	$item.animate({width: w, height: h}, 100);

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

function animateToHide($item, id){
	var w = 200;
	var h = 200;
	if ($item.width() == 430){
		w = 200;
		h = 200;
		$item.find('.explanation').html(glossaryGroup.at(id).toJSON().explain);
		$item.find('.explanation').css('display', 'none').css('text-align','center');
		glossaryGroup.at(id).set("expanded","false");
	}
	$item.animate({width: w, height: h}, 100);

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
