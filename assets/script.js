var timerButtonEl = document.getElementById('Tbutton');
var startBtn = document.getElementById("start")
var highScoreBtn = document.getElementById('highScore')
var GameEl = document.querySelector("#gamePage")

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
console.log(QuizArray)

}

var QuizArray = [
    {q: 'event.preventDefault() stops the page from reseting when the page is refreshed.', a: 't'},
    {q: '.getItem and .setItem are the way to save and load information in the LocalStorage.', a: 't'},
    {q: 'JavaScript directly changes the original CSS file.', a: 'f'},
    {q: 'LocalStorage can store values, objects, and strings.', a: 'f'},
    {q: 'JSON.stringify allows you to convert [Objects] to strings for LocalStorage', a: 't'},
]

var startGame = function () {
    for (i = 0; i < QuizArray.length; i++)
    console.log(QuizArray)
}


var scorePage = function() {
    console.log("hello");
};
// create array of questions and answers
// create div element in JS to house question/answer
// dynamically change div to questions/answers 
// code if the answer is write or wrong/record for score
// ability to add score and initials to high score page

startBtn.addEventListener("click", countDown, startGame);
highScoreBtn.addEventListener("click", scorePage)