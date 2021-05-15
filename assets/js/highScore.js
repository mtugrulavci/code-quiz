const scoreList = document.querySelector(".list");
const highScores =JSON.parse(localStorage.getItem("highScores")) || [];
var clearScores = document.querySelector(".clear");

   scoreList.innerHTML = highScores.map(scores => { 
       return `<li> ${scores.name} - ${scores.score} </li>`;
   }).join("");
   clearScores.addEventListener("click", function(e){
    e.preventDefault();
     localStorage.clear();
 });
 