const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");

let shuffledQuestions, currentQuestionIndex, score;


//q: vad gör startQuiz?  a: den startar quizet genom att sätta score till 0, 
startQuiz();

function startQuiz() {
    score = 0;
    questionContainer.style.display = "flex";
    shuffledQuestions = questions.sort(() => Math.random() - 0.5); // math.random - 0.5 för att frågorna kommer i slumpmässig ordning varje gång  
    currentQuestionIndex = 0;
    nextButton.classList.remove("hide"); // tar bort hide klassen från nextButton
    restartButton.classList.add("hide");    // lägger till hide klassen på restartButton
    resultDiv.classList.add("hide");    // lägger till hide klassen på resultDiv
    setNextQuestion(); // kör setNextQuestion funktionen
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
//I morgon måste jag kolla på denna funktionen igen samt kolla på hur jag kan göra så att jag kan använda denna funktionen för både radio och checkbox !?
//Hur ska jag hantera när det är slut på frågesporten