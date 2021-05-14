var count = 75;
var questionCounter = 0;
var a = 1;
var score =0;
var topFive=5;
var counter = document.querySelector('#counter');
var startBtn = document.querySelector('.startBtn');
var codeQuiz = document.querySelector('.code-quiz');
var endGame = document.querySelector('.end-game')
var start = document.querySelector('.start');
var container = document.querySelector('.container');
var questionContainer = document.querySelector('#question-container');
var questionElement = document.querySelector('.question');
var choice1 = document.querySelector('.choice-1');
var choice2 = document.querySelector('.choice-2');
var choice3 = document.querySelector('.choice-3');
var choice4 = document.querySelector('.choice-4');
var result = document.querySelector('.result');
var restartBtn = document.createElement("BUTTON");
    restartBtn.className = ".re-start";
var clearLocBtn = document.createElement("BUTTON");
    clearLocBtn.className = ".loc-clear";

var answerBtn = document.querySelectorAll('.answer-btn');
var answer = document.querySelector(".selected-answer");

var scoreBoard = document.querySelector(".scoreBoard");
var scoreList = document.querySelector(".list");


var userName = document.querySelector("#user");
var scoreButton  = document.querySelector(".score-btn");





const questions  = [
  {
      question: "Commonly used data type Do Not include:---",
      choices: ["strings","booleance","alerts", "numbers"],
      answer : "alerts"   
  },
  {
      question: "The condition in an if/else statement is enclosed within:---",
      choices: ["quotes","Curly brackets","parentheses", "square brackets"],
      answer : "parentheses"    
  },
  {
      question: "Arrays in JavaScript can be used to store:---",
      choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
      answer : "all of the above"   
  },
  {
      question: "String values must be enclosed within --- when being assigned to variables ",
      choices: ["commas","curly brackets","quotes","parentheses"],
      answer : "quotes" 
  },
  {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:---",
      choices: ["JavaScript","terminal/bash","alerts", "console.log"],
      answer : "console.log"   
  },
]
function startQuiz(){

   timer =  setInterval(function(){
    if(count>0){
        count--;
        counter.textContent = count;};
    }, 1000);
    
    start.removeChild(startBtn);
    codeQuiz.textContent = "";


    getQuestions(questionCounter);
    questionContainer.className = ".choice";

};
answerBtn[0].addEventListener("click", checkAnswer);
answerBtn[1].addEventListener("click", checkAnswer);
answerBtn[2].addEventListener("click", checkAnswer);
answerBtn[3].addEventListener("click", checkAnswer);

function getQuestions(questionCounter){
    questionElement.textContent = 'Question  ' + a + " : " + questions[questionCounter].question;
    choice1.textContent = questions[questionCounter].choices[0];
    choice2.textContent = questions[questionCounter].choices[1];
    choice3.textContent = questions[questionCounter].choices[2];
    choice4.textContent = questions[questionCounter].choices[3];
    a++; 
};
function checkAnswer(e){
    if(e.target.textContent === questions[questionCounter].answer){
        answer.textContent = "Correct!"

    } else{
        answer.textContent = "Wrong!"
        if(count>6){
            count = count - 6;
            score = count;
            localStorage.setItem('mostRecentScore', score);
        }else{
            count = 0;

        }
    }
    if (questionCounter+1< questions.length){
    questionCounter++;
    getQuestions(questionCounter);
    } else {
        gameOver();
        clearInterval(timer);
    }
};

function gameOver(){
    questionContainer.classList.add("hide");
    result.innerHTML = "<p>  Your Score is :" +score+" </p>";

    scoreBoard.className = ".choice";

};

function restartQuiz(){
   start.appendChild(startBtn);
    count = 75;
    questionCounter = 0;
    a = 1;
    result.removeChild(restartBtn);
    result.textContent = "";
    codeQuiz.innerHTML = `<p>Welcome to the Code quiz Challenge!<p> 
    <p>Try to answer as many questions as possible in the given time limit. <br> 
    top performer will be listed at the end of the quiz.</p>`
    scoreList.classList.add("hide");
};

const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores =JSON.parse(localStorage.getItem("highScores")) || [];

function saveHighScore(e) {
    e.preventDefault();

   const scores = {
        score: score,
        name: userName.value
    };

    highScores.push(scores);
    highScores. sort((a,b)=> b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores',JSON.stringify(highScores));

 
   //window.location.assign("score.html");
    result.appendChild(restartBtn) ;
   restartBtn.textContent = "try again!";
   result.appendChild(clearLocBtn) ;
   clearLocBtn.textContent = "Clear High Scores!";


    scoreList.innerHTML = highScores.map(scores => { 
       return `<li> ${scores.name} - ${scores.score} </li>`;
   }).join("");
   scoreBoard.classList.add("hide");

};






startBtn.addEventListener("click", startQuiz);  
scoreButton.addEventListener("click",saveHighScore);
restartBtn.addEventListener("click", restartQuiz);
clearLocBtn.addEventListener("click", function(){
             localStorage.clear();
         });







  