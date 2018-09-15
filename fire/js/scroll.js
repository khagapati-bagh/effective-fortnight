$.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
  
        if (typeof callback === 'function') callback();
      });
  
      return this;
    },
  });
$(document).ready(function(){
  $('#wrapper').addClass('animated fadeIn');
})

let s1 = $("#s1");
let s2 = $("#s2");
let s3 = $("#s3");
var current = $("#e1");

s1.click(function(){
  current.animateCss('slideOutLeft', function() {
        current.css('display','none');
        current = $("#e1");
        $("#e1").css('display','flex');
        $("#e1").animateCss('slideInLeft');
      })
  });

s2.click(function(){
    current.animateCss('slideOutLeft', function() {
          current.css('display','none');
          current = $("#e2");
          $("#e2").css('display','flex');
          $("#e2").animateCss('slideInLeft');
        })
    });

    s3.click(function(){
      current.animateCss('slideOutLeft', function() {
            current.css('display','none');
            current = $("#e3");
            $("#e3").css('display','flex');
            $("#e3").animateCss('slideInLeft');
          })
      });