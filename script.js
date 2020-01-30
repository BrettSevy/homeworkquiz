


//needs "scorecard after questions"



//VARIABLES//
var start = document.querySelector("start");
var quiz = document.querySelector("#quiz");
var questions = document.querySelector("question");
var choiceA = document.querySelector('#A');
var choiceB = document.querySelector('#B');
var choiceC = document.querySelector('#C');
var choiceD = document.querySelector('#D');
var buttons = document.querySelector("#choices");
var score = document.querySelector("#score");
var scoreVal= 0;
var time = document.querySelector("#time");




    
//QUESTIONS//
var questions = [
    {
        question : "How many times did Kobe play in the NBA All-Star game?",
        choiceA : "17",
        choiceB : "18",
        choiceD : "19",
        choiceC : "20",
        correct :  "B"
    }
    ,
    {
        question : "How many points has Kobe scored in the NBA?",
        choiceA : "38,387",
        choiceB : "33,643",
        choiceC : "32,292",
        choiceD : "31,560",
        correct :  "B"
    }
    ,
    {
        question : "How many times has Kobe won the MVP award?",
        choiceA : "1",
        choiceB : "2",
        choiceC : "3",
        choiceD : "4",
        correct :  "A"
    }
    ,
    {
        question : "How many Acadamy Awards has Kobe won?",
        choiceA : "1",
        choiceB : "2",
        choiceC : "3",
        choiceD : "4",
        correct :  "A"
    }
    ,
    {
        question : "How many NBA championships has Kobe won?",
        choiceA : "3",
        choiceB : "4",
        choiceC : "5",
        choiceD : "6",
        correct :  "C"
    }]



//CREATE VARIABLES//
var lastQuestions = questions.length - 1;
var runningQuestion = 0;
var timer;
var score = 0;



// START BUTTON //
var startbutton = document.querySelector("button");
startbutton.addEventListener("click", function(event){
    quiz.style.display = "block";
    startbutton.style.display = "none";
    startTime();
    renderQuestion(0);
    event.preventDefault();
    
    // START TIMER //
    
    var seconds = 25;
    
    // TIMER //
    
    function startTime() {
        var timerInterval = setInterval(function() {
            seconds--;
            time.textContent = seconds;
            
            if(seconds === 0) {
                clearInterval(timerInterval);
                time.textContent = "Game Over!";
                quiz.style.display = "none";
                startbutton.style.display = "block";
                
            }
            
        }, 1000);
    }
    
})

//RENDER A QUESTION//
function renderQuestion() {

    var q = questions[runningQuestion];

    question.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
    
}



renderQuestion();
buttons.addEventListener("click", checkanswer);
//CHECK ANSWER//
function checkanswer(event) {
    
    if (event.target.id == questions[runningQuestion].correct){
            scoreVal ++;
            document.querySelector("#score").textContent = ("answer is correct you are " +scoreVal + " for 5");
         }
        
    // else "Wrong answer"
    else{
        
        document.querySelector("#score").textContent = ("answer is wrong you are " +scoreVal + " for 5");
    }
      
    if (runningQuestion <= lastQuestions){

        runningQuestion ++;
        renderQuestion();

    }


   
      
      
      
       
}







    


