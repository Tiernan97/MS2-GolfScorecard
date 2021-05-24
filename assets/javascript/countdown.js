
// The deadline date
var deadline = new Date("May 27, 2022 12:10:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
 
  // Establishes today's time and date
  var now = new Date().getTime(); 
    
  // Finds the timeframe between now and the deadline
  var time = deadline - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
    
  // The time left is then displayed in day,hour,minute,seconds format
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, this text appears 
  if (time < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "The second leg of this tournament is over!";
  }
}, 1000); 

