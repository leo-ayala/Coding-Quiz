## Coding Quiz

# Overview
This project was about demonstrating the ability to dynamically change the HTML with JavaScript. 

# Link to Quiz


# Components 

Here we have the code that allows for the timer to run down when we press the Start! button.

``` ruby
var countDown = function () {
    var timeLeft = 10;

var timeInterval = setInterval(function() {
    if (timeLeft > 0 ) {
        timerButtonEl.textContent = timeLeft;
        timeLeft--;
    } else {
        clearInterval(timeInterval);
        alert("time is over!")
    } 
}, 1000);
}
```