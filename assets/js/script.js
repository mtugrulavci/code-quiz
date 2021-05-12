var count = 30;
var i = 0;
var a = 1;
var counter = document.querySelector('#counter');
var startBtn = document.querySelector('.startBtn');
var start = document.querySelector('.start');

var questionContainer = document.querySelector('#question-container');
var questionElement = document.querySelector('.question');
var choice1 = document.querySelector('.choice-1');
var choice2 = document.querySelector('.choice-2');
var choice3 = document.querySelector('.choice-3');
var choice4 = document.querySelector('.choice-4');

var answerBtn = document.querySelectorAll('.answer-btn');

var selectedButton = document.querySelectorAll('.choices');
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

    getQuestions();
    questionContainer.className = ".choice";

};

function getQuestions(){
  questionElement.textContent = 'Question  ' + a + " : " + questions[i].question;
  choice1.textContent = questions[i].choices[0];
  choice2.textContent = questions[i].choices[1]; 
  choice3.textContent = questions[i].choices[2];
  choice4.textContent = questions[i].choices[3]; 
  i++;
  a++;
};

startBtn.addEventListener("click", startQuiz);
answerBtn.forEach((btn)=>{ btn.addEventListener("click",getQuestions); });