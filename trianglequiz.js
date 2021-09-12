let btn = document.querySelector("#submit-btn")
let quizform = document.querySelector(".question-form")
let output = document.querySelector("#output")
let correctAnswers = ["acute", "equilateral"]
btn.addEventListener('click', calculateScore)

function calculateScore() {
    let index=0;
    let score=0;
     const formResults = new FormData(quizform);
   
     for(let value of formResults.values()){
         if (value === correctAnswers[index]) {
             score =  score +1 ;
         }
         index = index + 1;
     }
output.innerText = "Your score in Quiz is => " + score
}