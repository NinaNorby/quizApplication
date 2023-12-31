'use strict'; 

const questions = [
    {
        question: "Vad är Kanadas huvudstad?",
        inputType: "radio",
        answers: [
            { text: "Vancouver", correct: false },
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Montréal", correct: false }
        ],
        correctAnswer:"Ottawa",
    },
    {
        question: "Ligger Niagarafallet i delstaten New York?",
        inputType: "radio",
        answers: [
            { text: "Sant", correct: true },
            { text: "Falskt", correct: false }
        ],
        correctAnswer:"Sant",
    },
    {
        question: "Vilken är den största staden i Vietnam?",
        inputType: "radio",
        answers: [
            { text: "Ho Chi Minh City", correct: true },
            { text: "Ha Noi", correct: false }
        ],
        correctAnswer:"Ho Chi Minh City",
    },
    {
        question: "Vilket afrikanskt land har den största befolkningen?",
        inputType: "radio",
        answers: [
            { text: "Etiopien", correct: false },
            { text: "Demokratiska republiken Kongo", correct: false },
            { text: "Nigeria", correct: true },
            { text: "Egypten", correct: false }
        ],
        correctAnswer:"Nigeria",
    },
    {
        question: "Vilka av de 3 största haven på jorden?",
        inputType: "checkbox",
        answers: [
            { text: "Stilla havet", correct: true },
            { text: "Atlanten", correct: true },
            { text: "Indiska oceanen", correct: true },
            { text: "Karibiska havet", correct: false }

        ],
        correctAnswer:"Stilla havet, Atlanten, Indiska oceanen",
    },


    {
        question: "Hur många tidszoner har Australien?",
        inputType: "radio",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ],
        correctAnswer:"3",
    },
    {
        question: "Hur många stater består USA av?",
        inputType: "radio",
        answers: [
            { text: "49", correct: false },
            { text: "50", correct: true },
            { text: "52", correct: false },
            { text: "51", correct: false }
        ],
        correctAnswer:"50", 
    },
    {
        question: "I vilket land skulle du hitta staden Dresden",
        inputType: "radio",
        answers: [
            { text: "Tyskland", correct: true },
            { text: "Ungern", correct: false },
            { text: "Polen", correct: false },
            { text: "Slovakien", correct: false }
        ],
        correctAnswer:"Tyskland",
    },
    {
        question: "Vad är Appalacherna?",
        inputType: "radio",
        answers: [
            { text: "Ett land", correct: false },
            { text: "En ö-grupp", correct: false },
            { text: "Ett våtmarksområde", correct: true },
            { text: "En bergskedja", correct: true }
        ],
        correctAnswer:"En bergskedja",
    },
    {
        question: "Vad heter valutan i Venezuela?",
        inputType: "radio",
        answers: [
            { text: "Dollar", correct: false },
            { text: "Bolivar", correct: true },
            { text: "Ringitti", correct: false },
            { text: "Lat", correct: false }
        ],
        correctAnswer:"Bolivar",
    },

];