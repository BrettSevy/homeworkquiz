
//VARIABLES//
var start = document.querySelector("start");
var quiz = document.querySelector("quiz");
var questions = document.querySelector("question");
var choiceA = document.querySelector('#A');
var choiceB = document.querySelector('#B');
var choiceC = document.querySelector('#C');
var choiceD = document.querySelector('#D');
var buttons = document.querySelector("#choices");
var score = document.querySelector("#score");
var scoreVal= 0;
var time = document.querySelector("time");



//QUESTIONS//
var questions = [
    {
        question : "what does 1 stand for?",
        choiceA : "Correct this is a test",
        choiceB : "this is a test to see what happens",
        choiceD : "Wrong another sentance test",
        choiceC : "Wrong testing more sentance",
        correct :  "A"
    }
    ,
    {
        question : "what does 2 stand for?",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct :  "B"
    }
    ,
    {
        question : "what does 3 stand for?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct :  "C"
    }
    ,
    {
        question : "what does 4 stand for?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Correct",
        correct :  "D"
    }
    ,
    {
        question : "what does 5 stand for?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct :  "C"
    }]



//CREATE VARIABLES//
var lastQuestions = questions.length - 1;
var runningQuestion = 0;
var timer;
var score = 0;

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
    console.log(event.target);
    console.log(event.target.id);
    console.log(questions[runningQuestion].correct)
    if (event.target.id == questions[runningQuestion].correct){
            scoreVal ++;
            document.querySelector("#score").textContent = ("answer is correct " +scoreVal + " points");
         }
        
    // else "Wrong answer"
    else{
        document.querySelector("#score").textContent = ("answer is wrong " +scoreVal + " points");
    }
      
    if (runningQuestion <= lastQuestions){
        runningQuestion ++;
        renderQuestion();
    }

}



//var button = document.createElement;
//button.textContent = choiceA;
//document.button.append



    


