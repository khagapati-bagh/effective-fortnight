var events = $('.show-events');
var event_list = $('.event-list');
var bg = $("#page-bg img");
var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

events.click(function(){
	if( event_list.is(':visible')){
		event_list.addClass('animated bounceInLeft')
		event_list.hide();
	}
	else{
		event_list.show();
		event_list.addClass('animated bounceInLeft');
		//bg.addClass('animated bounceInLeft');
		event_list.one(animationend, function(){
			event_list.removeClass('animated bounceInLeft');
			//bg.removeClass('animated bounceInLeft');
		});
	}
});
