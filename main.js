'use strict';

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");

let shuffledQuestions, currentQuestionIndex, score;



startQuiz();

function startQuiz() {
    score = 0;
    questionContainer.style.display = "flex";
    shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Math.random() - 0.5 ger ett slumpmässigt tal mellan -0.5 och 0.5 
    currentQuestionIndex = 0; // Index för att hålla koll på vilken fråga man är på
    nextButton.classList.remove("hide"); // Detta lägger till klassen "hide" till restartButton elementet
    restartButton.classList.add("hide");
    resultDiv.classList.add("hide");

    setNextQuestion(); // kallar på funktionen setNextQuestion
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
// Denna funkt
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group");

        const input = document.createElement("input");
        input.type = question.inputType;
        input.id = "answer" + index;
        input.name = "answer";
        input.value = index;

        const label = document.createElement("label");
        label.htmlFor = "answer" + index;
        label.innerText = answer.text;

        inputGroup.appendChild(input);
        inputGroup.appendChild(label);
        answerButtons.appendChild(inputGroup);
    });
}
// Den tar bort alla child från answerButtons
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    // söker igenom alla child till answerButtons element och returnerar en nodeLista av alla element som matchar "input". 
    const answerInputs = Array.from(answerButtons.querySelectorAll("input")); //konverterar nodeListan som returneras av querySelectorAll till en array. 
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (currentQuestion.inputType === "radio") {
        const answerIndex = answerInputs.findIndex((radio) => radio.checked);//  kontrollerar att answerIndex inte är -1. Om det är -1, har användaren inte har valt något svar --> ALERT
        if (answerIndex !== -1) {
            if (currentQuestion.answers[answerIndex].correct) {
                score++; //om det finns fler frågor att ställa.  ställs nästa fråga annars hoppar den ut 
            }
            currentQuestionIndex++;
            if (shuffledQuestions.length > currentQuestionIndex) {
                setNextQuestion();
            } else {
                endQuiz();
            }
        } else {
            alert("Du behöver göra ett val här nedan för att gå vidare.");
        }
    } else if (currentQuestion.inputType === "checkbox") {
        let scoreIncrement = 0;
        let isAnyChecked = false;
        answerInputs.forEach((checkbox, index) => {
            if (checkbox.checked) {
                isAnyChecked = true;
                if (checkbox.checked === currentQuestion.answers[index].correct) {
                    scoreIncrement++;
                }
            }
        }); 
        if (!isAnyChecked) {
            alert("Du behöver göra ett val här nedan för att gå vidare.");
        } else {
            if (scoreIncrement === answerInputs.length) {
                score++;
            }
            currentQuestionIndex++;
            if (shuffledQuestions.length > currentQuestionIndex) {
                setNextQuestion();
            } else {
                endQuiz();
            }
        }
    };
});


restartButton.addEventListener("click", startQuiz);



function endQuiz() {
    questionContainer.style.display = "none";
    nextButton.classList.add("hide");
    restartButton.classList.remove("hide");
    resultDiv.classList.remove("hide");
    const scorePercentage = (score / shuffledQuestions.length) * 100;
    let resultText = "";
    let resultColor = "";
    if (scorePercentage < 50) {

        resultText = "Underkänt";
        resultColor = "red";

    } else if (scorePercentage <= 75) {
        resultText = "Bra";
        resultColor = "orange";
        {
            confetti({
                particleCount: 100,
                spread: 80,
                origin: { y: 0.6 }
            });
        }
    } else {

        resultText = "Riktigt bra jobbat";
        resultColor = "green"; {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

    }
    resultDiv.innerText = `Ditt slutliga resultat blev  ${score} av  ${shuffledQuestions.length} rätt . ${resultText}`;
    resultDiv.style.color = resultColor;

}

//Dark/light mode
/*( syntax:  "condition ? exprIfTrue : exprIfFalse ") detta är en Conditional (ternary) operator  som i sig är en förkortad if/else sats som jag i tidigare version gjorde. */ 
const toggle = document.getElementById("toggle-dark-mode");
const body = document.querySelector("body");
const quizContainer = document.querySelector(".quiz-container");
const nextBtn = document.getElementById("next-btn");

toggle.addEventListener("click", function () {
    const isDarkMode = this.classList.toggle("bi-moon");

    body.style.backgroundColor = isDarkMode ? "black" : "rgb(104, 80, 243)";
    body.style.color = isDarkMode ? "white" : "black";
    quizContainer.style.backgroundColor = isDarkMode ? "black" : "white";
    quizContainer.style.color = isDarkMode ? "white" : "black";
    quizContainer.style.border = isDarkMode ? "1px solid gray" : "";
    nextBtn.style.backgroundColor = isDarkMode ? "gray" : "rgb(104, 80, 243)";
    nextBtn.style.color = isDarkMode ? "white" : "";
    body.style.transition = "2s";
    quizContainer.style.transition = isDarkMode ? "2s" : "";
});