// get quiz elements from DOM
const questions = document.querySelectorAll(".questionDiv");
const quizBackground = document.querySelector(".quizBackground");
const quiz = document.querySelector("#quiz");
const quizButton = document.querySelector(".quizNext");
const quizExitButton = document.querySelector(".quizExit");
const quizResult = document.querySelector(".quizResult");

// current quiz question number
let quizNum = 0;
let quizPoints = 0;

console.log(questions);

// function to go to next question
const nextQuestion = (() => {
    quizNum++;
    questions[quizNum - 1].classList.remove("selectedQuestion");
    questions[quizNum].classList.add("selectedQuestion");
});

// eventlistener to check for right answer, and then change to next question
quizButton.addEventListener("click", e => {
    e.preventDefault();
    switch (quizNum) {
        case 0:
            if(questions[0].children[3].children[0].checked) {
                quizPoints++;
            }
            nextQuestion();
            console.log(quizPoints);
            break;
        case 1:
            if(questions[1].children[1].children[0].checked) {
                quizPoints++;
            }
            nextQuestion();
            console.log(quizPoints);
            break;
        case 2:
            if(questions[2].children[3].children[0].checked) {
                quizPoints++;
            }
            nextQuestion();
            console.log(quizPoints);
            break;
        case 3:
            if(questions[3].children[2].children[0].checked) {
                quizPoints++;
            }
            quizButton.textContent = "Fullfør Quiz";
            nextQuestion();
            console.log(quizPoints);
            break;
        case 4:
            if(questions[4].children[1].children[0].checked) {
                quizPoints++;
            }
            questions[quizNum].classList.remove("selectedQuestion");
            quizButton.classList.add("hide");
            quizResult.textContent = `Du fikk ${quizPoints / 5 * 100}%!`;
            break;
            
    
        default:
            break;
    }
})

// eventlistener to stop ongoing quiz and reset everything, yes its a mess, no i will not clean it >:(
quizExitButton.addEventListener("click", e => {
    e.preventDefault();
    questions[quizNum].classList.remove("selectedQuestion");
    questions[0].classList.add("selectedQuestion");
    quizResult.textContent = "";
    quizButton.classList.remove("hide");
    quizButton.textContent = "Neste Spørsmål";
    quizNum = 0;
    quizPoints = 0;
    quiz.classList.remove("quizSelected");
    quizBackground.classList.remove("quizSelected");
})