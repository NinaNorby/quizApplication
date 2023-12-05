'use strict';

let questionLists = getQuestionList();   

// Get HTML elements
let quizContainer = document.getElementById('quiz-container');
let startButton = document.getElementById('start-question');
let nextButton = document.getElementById('next-Btn');

// Current question index
let currentQuestionIndex = 0;

// Add event listener to start button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    // Show the first question
    showQuestion(questionLists[currentQuestionIndex]);
}