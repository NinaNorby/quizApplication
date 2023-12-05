'use strict';

class questionList {
    constructor() {
        this.questionList = [];
    }
    addQuestion(question) {
        this.questionList.push(question);
    }
    getQuestion(index) {
        return this.questionList[index];
    }
    getQuestionList() {
        return this.questionList;
    }
    getQuestionListLength() {
        return this.questionList.length;
    }
    checkAnswer(index, option) {
        let question = this.getQuestion(index);
        let answer = question.getAnswer();
        if (Array.isArray(answer)) {
            return answer.includes(option);
        } else {
            return option === answer;
        }
    }
}

class question {
    constructor(question, answer, options) {
        this.question = question;
        this.answer = answer;
        this.options = options;
    }
    getQuestion() {
        return this.question;
    }
    getAnswer() {
        return this.answer;
    }
    getOptions() {
        return this.options;
    }
}
//Förslag på frågor. De kommer mest troligt att bytas ut (Totalt 10 frågor ska finnas)
function getQuestionList() {
    let qlist = new questionList();

    let newQuestion = new question("What is the capital of France?", "Paris", ["London", "Berlin", "Paris", "Madrid"]);
    qlist.addQuestion(newQuestion);

    newQuestion = new question("What is the capital of Spain?", "Madrid", ["Stockholm", "Helsinki", "Paris", "Madrid"]);
    qlist.addQuestion(newQuestion);

    newQuestion = new question("What is the capital of Germany?", "Berlin", ["London", "Berlin", "Paris", "Madrid"]);
    qlist.addQuestion(newQuestion);

    newQuestion = new question("What is the capital of England?", "London", ["London", "Berlin", "Paris", "Madrid"]);
    qlist.addQuestion(newQuestion);

    newQuestion = new question("Heter världens högsta berg K2 ?", "False", ["True", "False"]);
    qlist.addQuestion(newQuestion);

    newQuestion = new question("Is Oslo the capital of Norway?", "True", ["True", "False"]);
    qlist.addQuestion(newQuestion);

    let multiChoiceQuestion = new question(
        "Which of the following are European capitals?",
        ["London", "Paris"],
        ["London", "Paris", "New York", "Tokyo"]
    );
    qlist.addQuestion(multiChoiceQuestion);

    newQuestion = new question("Which of the following are European capitals?", ["Paris", "Berlin"], ["Paris", "Berlin", "New York", "Tokyo"]);
    qlist.addQuestion(newQuestion);

    return qlist.getQuestionList();
}