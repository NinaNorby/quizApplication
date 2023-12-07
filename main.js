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
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    nextButton.classList.remove("hide");
    restartButton.classList.add("hide");
    resultDiv.classList.add("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

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
    const answerInputs = Array.from(answerButtons.querySelectorAll("input"));
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (currentQuestion.inputType === "radio") {
        const answerIndex = answerInputs.findIndex((radio) => radio.checked);
        if (answerIndex !== -1) {
            if (currentQuestion.answers[answerIndex].correct) {
                score++;
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
        answerInputs.forEach((checkbox, index) => {
            if (checkbox.checked === currentQuestion.answers[index].correct) {
                scoreIncrement++;
            }
        });
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
    } else {
        resultText = "Riktigt bra jobbat";
        resultColor = "green";

    }
    resultDiv.innerText = `Ditt slutliga resultat blev  ${score} av  ${shuffledQuestions.length} rätt . ${resultText}`;
    resultDiv.style.color = resultColor;
}