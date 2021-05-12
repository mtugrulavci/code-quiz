var count = 30;
var counter = document.querySelector('#counter');
var startBtn = document.querySelector('.startBtn');
var start = document.querySelector('.start');
var questionContainer = document.querySelector('#question-container');
var questionElement = document.querySelector('.question');
var selectedButton = document.querySelectorAll('.choice');
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
    questionContainer.className = ".choice";
    getQuestions () ;
};



startBtn.addEventListener("click", startQuiz);
//selectedButton.addEventListener("click",getQuestions);
