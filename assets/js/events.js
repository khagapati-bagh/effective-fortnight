var events = $('.show-events');
var event_list = $('.event-list');
var bg = $("#page-bg img");
var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
bg.removeClass('animated bounceInTop');

events.click(function(){
	if( event_list.is(':visible')){
		event_list.addClass('animated bounceOutLeft').one(animationend, function(){
			event_list.removeClass('animated bounceOutLeft');
			event_list.hide();
		});
		bg.show();
		bg.addClass('animated bounceInRight').one(animationend,function(){
			bg.removeClass('animated bounceInRight');
		});
	}
	else{
		event_list.show();
		event_list.addClass('animated bounceInLeft').one(animationend, function(){
			event_list.show();
		});
		bg.addClass('animated bounceOutRight').one(animationend,function(){
			bg.removeClass('animationend bounceOutRight');
			bg.hide();
		});
	}
});


var home = $('.show-home');

home.click(function(){
	if( event_list.is(':visible')){
		event_list.addClass('animated bounceOutLeft').one(animationend, function(){
			event_list.removeClass('animated bounceOutLeft');
			event_list.hide();
		});
		bg.show();
		bg.addClass('animated bounceInRight').one(animationend,function(){
			bg.removeClass('animated bounceInRight');
		});
	}
	else{
		bg.addClass('animated tada').one(animationend, function(){
			bg.removeClass('animation tada');
		});
	}
});