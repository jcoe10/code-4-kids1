$(document).ready(function() {
    // Create a function that creates the start button and initial screen

    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();
        sound.play();
        genHTML();
    
        wrapper();
    
    });
    
    $("body").on("click", ".answer", function(event){
       
        sound.play();
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[question]) {
            // alert("correct");
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            // alert("wrong answer!");
            clearInterval(theClock);
            generateLoss();
        }
    });
    
    $("body").on("click", ".reset-button", function(event){
        sound.play();
        reset();
    });
    
    });
    
    function genTimeout() {
        unanswered++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[question] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);
    }
    
    function generateWin() {
        correct++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[question] + "</p>" + imageArray[question];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);
    }
    
    function generateLoss() {
        incorrect++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[question] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);
    }
    
    function genHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[question] + "</p><p class='first-answer answer'>A. " + answerArray[question][0] + "</p><p class='answer'>B. "+answerArray[question][1]+"</p><p class='answer'>C. "+answerArray[question][2]+"</p><p class='answer'>D. "+answerArray[question][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (question < 3) {
        question++;
        genHTML();
        counter = 30;
        wrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function wrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                genTimeout();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function reset() {
        question = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        counter = 30;
        genHTML();
        wrapper();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = 
    [
        "What does the coding language HTML stand for?", 
        "What is the highest level of a header tag?", 
        "What part do you see on the page?", 
        "What is the current version of HTML?"
    ];
    
    var answerArray = 
    [
        ["Holding Text Modal Language", "Holding Text Marker Language", "Hyperlink Text Management Language", "Hyper Text Markup Language"], 
        ["h3","h1","div","center"], 
        ["footer", "head", "body", "title"], 
        ["HTML5", "HTML2017", "HTMLv5.1", "HTMLC"]
    ];
    
    var imageArray = 
    [
        "<img class='center-block img-right' src='css/question1html.png'>", 
        "<img class='center-block img-right' src='css/question2html.png'>", 
        "<img class='center-block img-right' src='css/question3html.png'>", 
        "<img class='center-block img-right' src='css/question4html.png'>"
    ];
    
    var correctAnswers = 
    [
        "D. Hyper Text Markup Language", 
        "B. h1", 
        "C. body", 
        "A. HTML5"
    ];

    var question = 0;
    var selecter;
    var theClock;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var sound = new Audio("./sound/Jeopardy-theme-song.mp3");