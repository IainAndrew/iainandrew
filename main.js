$(document).ready(function() {
	function preloadImg(src) {
    	$('<img/>')[0].src = src;
	}
	preloadImg("images/about_icon_100x94.png", "images/work_icon_100x97.png", "images/hire_icon_90x90.png", "images/about_icon_red_100x94.png", "images/work_icon_red_100x97.png", "images/hire_icon_red_90x90.png");



/* MAIN MENU ANIMATIONS */

	$("#aboutbutton").hover(function() {
		$("#abouticon").stop().animate({left:"-6.250em"}, {duration:250});
		$("#abouticon_red").stop().animate({left:"1.250em"}, {duration:250});
		$("#about_text").stop().animate({top:"8.438em"}, {duration:250});
		$("#about_underline").stop().animate({top:"10.625em"}, {duration:400});
	}, function() {
		$("#abouticon").stop().animate({left:"1.250em"}, {duration:250});
		$("#abouticon_red").stop().animate({left:"8.750em"}, {duration:250});
		$("#about_text").stop().animate({top:"-6.250em"}, {duration:150});
		$("#about_underline").stop().animate({top:"-6.250em"}, {duration:250});
	});
	$("#workbutton").hover(function() {
		$("#workicon").stop().animate({top:"-6em"}, {duration:250});
		$("#workicon_red").stop().animate({top:"1em"}, {duration:250});
		$("#work_text").stop().animate({top:"8.438em"}, {duration:250});
		$("#work_underline").stop().animate({top:"10.625em"}, {duration:400});
	}, function() {
		$("#workicon").stop().animate({top:"1em"}, {duration:250});
		$("#workicon_red").stop().animate({top:"8.750em"}, {duration:250});
		$("#work_text").stop().animate({top:"-6.250em"}, {duration:150});
		$("#work_underline").stop().animate({top:"-6.250em"}, {duration:150});
	});
	$("#hirebutton").hover(function() {
		$("#hireicon").stop().animate({left:"8.750em"}, {duration:250});
		$("#hireicon_red").stop().animate({left:"1.375em"}, {duration:250});
		$("#hire_text").stop().animate({top:"8.438em"}, {duration:250});
		$("#hire_underline").stop().animate({top:"10.625em"}, {duration:400});
	}, function() {
		$("#hireicon").stop().animate({left:"1.375em"}, {duration:250});
		$("#hireicon_red").stop().animate({left:"-5.625em"}, {duration:250});
		$("#hire_text").stop().animate({top:"-6.250em"}, {duration:150});
		$("#hire_underline").stop().animate({top:"-6.250em"}, {duration:150});
	});

	/* SIDE MENU ANIMATIONS */

	$(".sidemenu").hover(function() {
		$(this).stop().animate({opacity:1}, {duration:300});
	}, function() {
		$(this).stop().animate({opacity:0.5}, {duration:300});
	});

	$("#side_aboutbutton").hover(function() {
		$("#side_abouticon").stop().animate({left:"-6.250em"}, {duration:250});
		$("#side_abouticon_red").stop().animate({left:"0.625em"}, {duration:250});
		$("#side_about_text").stop().animate({left:"4.063em"}, {duration:250});
		$("#side_about_underline").stop().animate({left:"5.000em"}, {duration:400});
	}, function() {
		$("#side_abouticon").stop().animate({left:"0.625em"}, {duration:250});
		$("#side_abouticon_red").stop().animate({left:"8.750em"}, {duration:250});
		$("#side_about_text").stop().animate({left:"-6.250em"}, {duration:150});
		$("#side_about_underline").stop().animate({left:"-6.250em"}, {duration:250});
	});
	$("#side_workbutton").hover(function() {
		$("#side_workicon").stop().animate({top:"-6.000em"}, {duration:250});
		$("#side_workicon_red").stop().animate({top:"0.500em"}, {duration:250});
		$("#side_work_text").stop().animate({left:"4.063em"}, {duration:250});
		$("#side_work_underline").stop().animate({left:"5.000em"}, {duration:400});
	}, function() {
		$("#side_workicon").stop().animate({top:"0.500em"}, {duration:250});
		$("#side_workicon_red").stop().animate({top:"8.750em"}, {duration:250});
		$("#side_work_text").stop().animate({left:"-6.250em"}, {duration:150});
		$("#side_work_underline").stop().animate({left:"-6.250em"}, {duration:150});
	});
	$("#side_hirebutton").hover(function() {
		$("#side_hireicon").stop().animate({left:"8.750em"}, {duration:250});
		$("#side_hireicon_red").stop().animate({left:"0.688em"}, {duration:250});
		$("#side_hire_text").stop().animate({left:"4.063em"}, {duration:250});
		$("#side_hire_underline").stop().animate({left:"5.000em"}, {duration:400});
	}, function() {
		$("#side_hireicon").stop().animate({left:"0.688em"}, {duration:250});
		$("#side_hireicon_red").stop().animate({left:"-5.625em"}, {duration:250});
		$("#side_hire_text").stop().animate({left:"-6.250em"}, {duration:150});
		$("#side_hire_underline").stop().animate({left:"-6.250em"}, {duration:150});
	});


	/* WAYPOINTS */

	/*---------------------------------------------------- SIDE MENU */
	$("#wptrigger1").waypoint(function(direction) {
  		if (direction == "down") {
  			$(".sidemenu").stop().animate({left:0}, {duration:500});
  		} else if (direction == "up") {
  			$(".sidemenu").stop().animate({left:"-5.000em"}, {duration:1000});
  		}
	});
	/*---------------------------------------------------- ABOUT SECTION */
	$("#about").waypoint(function(direction) {
		if (direction == "down"){
			$("#speech").stop().animate({opacity:1}, {duration:500});
		} else if (direction == "up") {
			$("#speech").stop().animate({opacity:0}, {duration:300});
			$("#iainskates").stop().animate({left:"7.500em"}, {duration:1000});
			$("#mbtext").animate({opacity:0}, {duration:200});
			$("#mbscreen").animate({opacity:0}, {duration:200});
			$("#aboutcopy").animate({opacity:0}, {duration:1000});
		}
	});

	window.onkeydown = function(e) { 
    	return !(e.keyCode == 32);
	};
	$(function(e){
    	var keys = {};
    	var $usb = $("#iainskates");
    	var $mbtext = $("#mbtext");
    	var $mbscreen = $("#mbscreen");
    	var $speech = $("#speech");
    	var $copy = $("#aboutcopy")
    
    	$(document).keydown(function(event) {
        	keys[event.which] = true;
    	}).keyup(function(event) {
       		delete keys[event.which];
    });
    
    function gameLoop() {
    	if (keys[32]) {     // spacebar
        	$usb.stop().animate({left:"17.750em"}, {duration:1000});
            $mbscreen.delay(1020).animate({opacity:1}, {duration:300});
            $mbtext.delay(1500).animate({opacity:1}, {duration:300});
            $speech.stop().animate({opacity:0}, {duration:300});
            $copy.stop().animate({opacity:1}, {duration:2500});
        }
    	setTimeout(gameLoop, 20);
    }
    gameLoop();
        
    $(document).focus();
    
    });

	/* SLOW SCROLL ON ANCHOR LINKS */

	var aboutScroll = $('#about').offset().top;
	var workScroll = $('#work').offset().top;
	/*var hireScroll = $('#hire').offset().top;*/
	
	$('.aboutscroll').click(function(){
		$('html, body').animate({scrollTop:aboutScroll}, 1000, 'easeInExpo');
		return false;
	});
	$('.workscroll').click(function(){
		$('html, body').animate({scrollTop:workScroll}, 1000, 'easeInExpo');
		return false;
	});
	$('.hirescroll').click(function(){
		$('html, body').animate({scrollTop:hireScroll}, 1000, 'easeInExpo');
		return false;
	});

});