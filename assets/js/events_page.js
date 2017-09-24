
var event = $('.code');/*by default show codexter */
var clk_event = $('.b');
var clk_ec = $('.event-control');
var ec = $('.ev-img');
var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
//var ec_default = $('.ec-default');

clk_event.click(function(){
//	ec_default.trigger('click');
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

clk_ec.click(function(){

	new_ec = $(this).attr('part-code');
	new_ec = $('.'+new_ec);//important don't remove it
	ec.addClass('animated bounceOutLeft').one(animationend, function(){
		ec.removeClass('animated bounceOut');
		ec.hide();
	//	alert('e = '+event+',e2 = ',new_event);
		ec = new_ec;
		ec.show();
		ec.addClass('animated bounceInRight').one(animationend, function(){
			ec.removeClass('animated bounceInRight');
		});
	});
});
