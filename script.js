const questions = [
    {
  question: "what is the fastest way to learn js?",
  answers: [
     { text: "onsite", correct: true},
     { text: "online", correct: false},
     { text: "none of the above", correct: false},
  ]
    },
    {
     question: "what is the best programing language?",
  answers: [
     { text: "java", correct: false},
     { text: "python", correct: false},
     { text: "javascript", correct: true},
  ]
 },
  {
     question: "which programing language is mostly used?",
  answers: [
     { text: "javascript", correct: true},
     { text: "python", correct: false},
     { text: "java", correct: false},
  ]

  },  
   {
     question: "which is a cameroonian native dish?",
  answers: [
     { text: "Pasta", correct: false},
     { text: "Achu", correct: true},
     { text: "Pizza", correct: false},
  ]
 }
];
 const questionElement = document.getElementById("question"); 
 const answerButtons = document.getElementById("answer-button"); 
 const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
 currentQuestionIndex = 0;
 score = 0;
 nextButton.innerHTML = "Next";
 showQuestion();

}
function showQuestion(){
    resetState();
 let currentQuestion = questions[currentQuestionIndex];
 let questionNo = currentQuestionIndex + 1;
 questionElement.innerHTML = questionNo + ". " + currentQuestion.
 question;

 currentQuestion.answers.forEach(answer => {
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer);
 });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct")
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
 