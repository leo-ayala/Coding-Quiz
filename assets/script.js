var timerButtonEl = document.getElementById('Tbutton');
var startBtn = document.getElementById("start")
var highScoreBtn = document.getElementById('highScore')
var GameEl = document.querySelector("#gamePage")
var QuestionEL = document.querySelector("#quesPosition")
var AnswerEl = document.querySelector("#AnsPosition")

    var countDown = function () {
        var timeLeft = 5;
        //small timer for testing

    var timeInterval = setInterval(function() {
        if (timeLeft > 0 ) {
            timerButtonEl.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            alert("time is over!");
        };
    }, 1000);
        startGame();
};

    var QuizArray = [
        {q: 'event.preventDefault() stops the page from reseting when the page is refreshed.', a: 'true'},
        {q: '.getItem and .setItem are the way to save and load information in the LocalStorage.', a: 'true'},
        {q: 'JavaScript directly changes the original CSS file.', a: 'false'},
        {q: 'LocalStorage can store values, objects, and strings.', a: 'false'},
        {q: 'JSON.stringify allows you to convert [Objects] to strings for LocalStorage', a: 'true'},
];

    var startGame = function () {
        for (i = 0; i < QuizArray.length; i++);
        console.log(QuizArray);
        //create dynamic element and place array questions in them
};


    var scorePage = function() {
        console.log("hello");
        // ability to add score and initials to high score page
};

startBtn.addEventListener("click", countDown);
highScoreBtn.addEventListener("click", scorePage);