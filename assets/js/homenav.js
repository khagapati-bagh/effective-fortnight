var eg = $('.logo-ng');
var nitk = $('.logo-nitk');

var bgnav = $('.ig-background-nav');
var menu = $('#menu');

var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var headernav = $('.header-nav');
var nitklogo = $('.header-logo-main img');
var intro = $('.page-title');/* main page title */
var subhead = $('.page-subheading');
var register = $('.register');
var pal = $('.page-article-left');
var ral = $('.page-article-right');


/* starting animation after rendering of full html page */
$(document).ready(function(){
	headernav.addClass('animated bounceInRight').one(animationend, function(){
		headernav.removeClass('animated bounceInRight');
		/* animation for nitk logo */
		nitklogo.show();
		nitklogo.addClass('animated bounceInUp').one(animationend, function(){
			nitklogo.removeClass('animated bounceInUp');
			/* animation for main page title */
			intro.show();
			// Timeout for crypto text
      		SPY.text( 'op' );
			/* animation for register button */
			register.show();
			register.addClass('animated bounceInDown').one(animationend, function(){
				register.removeClass('animated bounceInDown');
				pal.show();ral.show();
				pal.addClass('animated bounceInRight');
				ral.addClass('animated bounceInLeft');
			});/*register*/
		
	});/*nitklogo*/
	});/*headernav*/
});


/* starting animation after rendering of full html page 
$(document).ready(function(){
	headernav.addClass('animated bounceInRight').one(animationend, function(){
		headernav.removeClass('animated bounceInRight');
		/* animation for nitk logo 
		nitklogo.show();
		nitklogo.addClass('animated bounceInUp').one(animationend, function(){
		nitklogo.removeClass('animated bounceInUp');
		/* animation for main page title 
		intro.show();
		intro.addClass('animated bounceInLeft').one(animationend, function(){
			intro.removeClass('animated bounceInLeft');
			/*animation for .page-subheading 
			subhead.css('display','flex');
			subhead.addClass('animated bounceInRight').one(animationend, function(){
				subhead.removeClass('animationend bounceOutRight');

				/* animation for register button 
				register.show();
				register.addClass('animated bounceInUp').one(animationend, function(){
					register.removeClass('animated bounceInUp');
				});/*register*
			});/*subhead*
		});/*intro*
	});/*nitklogo*
	});/*headernav*
});*/