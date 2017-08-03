"use strict";

//  Date("Sep 15, 2017 15:00:00")
var icoDate = 1505476800000;
var countdown = function() {
   var now 	= new Date().getTime();
   var distance 	= icoDate - now;
   var days 		= 0,
       hours 		= 0,
       minutes 	= 0,
       seconds 	= 0;

   if(distance > 0) {
      days = zeroPad(Math.floor(distance / (1000 * 60 * 60 * 24)));
      hours = zeroPad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      minutes = zeroPad(Math.floor((distance % (1000 * 60 * 60) ) / (1000 * 60)));
      seconds = zeroPad(Math.floor((distance % (1000 * 60) ) / 1000));
   }
   else {
      clearInterval(update);
   }

   $("#ico-days").html(days);
   $("#ico-hours").html(hours);
   $("#ico-minutes").html(minutes);
   $("#ico-seconds").html(seconds);
};

function zeroPad( num ) {
   return ('00'+ num).substring(num.toString( ).length);
}

var update 	= setInterval(countdown, 1000);
countdown();
