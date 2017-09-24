var dis = $('ev-description')
var img = $('ev-img');
var head = $('ev-head')
var show = $('show-event');
var event = $('.code');/*by default show codexter */
var clk = $('.b');
var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
clk.click(function(){
	new_event = $(this).attr('event-code');
	new_event = $('.'+new_event);//important don't remove it
	event.addClass('animated bounceOutDown').one(animationend, function(){
		event.removeClass('animated bounceOutDown');
		event.hide();
	//	alert('e = '+event+',e2 = ',new_event);
		event = new_event;
		event.show();
		event.addClass('animated bounceInDown').one(animationend, function(){
			event.removeClass('animated bounceInDown');
		});
	});
});
