var count = 30;
var questionCounter = 0;
var a = 1;
var counter = document.querySelector('#counter');
var startBtn = document.querySelector('.startBtn');
var start = document.querySelector('.start');
var container = document.querySelector('.container');
var questionContainer = document.querySelector('#question-container');
var questionElement = document.querySelector('.question');
var choice1 = document.querySelector('.choice-1');
var choice2 = document.querySelector('.choice-2');
var choice3 = document.querySelector('.choice-3');
var choice4 = document.querySelector('.choice-4');
var result = document.querySelector('.result');

var answerBtn = document.querySelectorAll('.answer-btn');
var answer = document.querySelector(".selected-answer");


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
    setInterval(function(){
    if(count>0){
        count--;
        counter.textContent = count;};
    }, 1000);
    start.removeChild(startBtn);

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
        if(count>5){
            count = count - 5;
        }else{
            count = 0;
        }
    }
    if (questionCounter+1< questions.length){
    questionCounter++;
    getQuestions(questionCounter);
    } else {
        gameOver();

    }
};
function gameOver(){
    questionContainer.classList.add("hide");
    result.innerHTML = "Your Score is :" +count;

};
startBtn.addEventListener("click", startQuiz);    






  