'use strict';
               //KOM IHÅG ATT ÄNDRA FRÅGORNA TILL NÅGOT ANNAT "ROLIGARE. "
const questions = [
    {
        question: "What is the capital of Sweden?",
        inputType: "radio", // Inputtype används för att skapa olika typer av inputfält då jag både har checkbox och radio buttons 
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Stockholm", correct: true },
            { text: "Dublin", correct: false }
        ],
    },
    {
        question: "Ligger Barcelona i spanien ?",
        inputType: "radio",
        answers: [
            { text: "Sant", correct: true },
            { text: "Falskt", correct: false }
        ]
    },
    { question: "Ligger Barcelona i spanien ?",
    inputType: "radio",
    answers: [
        { text: "Sant", correct: true },
        { text: "Falskt", correct: false }
    ]
},
    {
        question: "What is the capital of Norway?",
        inputType: "radio",
        answers: [
            { text: "Paris", correct: false },
            { text: "London", correct: false },
            { text: "Oslo", correct: true },
            { text: "Dublin", correct: false }
        ],
    }, 
    {
        question: "Vilka av de 3 största haven på jorden?",
        inputType: "checkbox",
        answers: [
            { text: "Stilla havet", correct: true },
            { text: "Atlanten", correct: true },
            { text: "Indiska oceanen", correct: true },
            { text: "Karibiska havet", correct: false }
        ]
    },
    {
        question: "What is the capital of Finland?",
        inputType: "radio",
        answers: [
            { text: "New York", correct: false },
            { text: "Paris", correct: false },
            { text: "Helsinki", correct: true },
            { text: "Dublin", correct: false }
        ],
    },
    {
        question: "What is the capital of Denmark?",
        inputType: "radio",
        answers: [
            { text: "New York", correct: false },
            { text: "London", correct: false },
            { text: "Copenhagen", correct: true },
            { text: "Dublin", correct: false }
        ],
    },
    {
    question: "What is the capital of Island?",
    inputType: "radio",
    answers: [
        { text: "Paris", correct: false },
        { text: "London", correct: false },
        { text: "Reykjavik", correct: true },
        { text: "Dublin", correct: false }
    ],
},
{
    question: "What is the capital of England?",
    inputType: "radio",
    answers: [
        { text: "New York", correct: false },
        { text: "Toronto", correct: true },
        { text: "London", correct: true },
        { text: "Dublin", correct: false }
    ],
},
{
    question: "What is the capital of France?",
    inputType: "radio",
    answers: [
        { text: "New York", correct: false },
        { text: "London", correct: false },
        { text: "Paris", correct: true },
        { text: "Dublin", correct: false }
    ],
},
    


];