const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let suffledQuestions, currectQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currectQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currectQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currectQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'What is 3 + 9',
        answers: [
            { text: '39', correct: false },
            { text: '12', correct: true }
        ]
    },
    {
        question: 'What is 3 + 8',
        answers: [
            { text: '23', correct: false },
            { text: '11', correct: true }
        ]
    },
    {
        question: 'What is 6 + 9',
        answers: [
            { text: '15', correct: true },
            { text: '12', correct: false }
        ]
    },
    {
        question: 'What is 3 + 3',
        answers: [
            { text: '12', correct: false },
            { text: '6', correct: true }
        ]
    },
    {
        question: 'What is 3 + 21',
        answers: [
            { text: '30', correct: false },
            { text: '21', correct: false },
            { text: '13', correct: false },
            { text: '24', correct: true }
            
        ]
    },
    {
        question: 'What is 3 + 19',
        answers: [
            { text: '39', correct: false },
            { text: '30', correct: false },
            { text: '17', correct: false },
            { text: '22', correct: true }
        ]
    },
    {
        question: 'What is 3 + 57',
        answers: [
            { text: '60', correct: true },
            { text: '27', correct: false },
            { text: '19', correct: false },
            { text: '43', correct: false }
        ]
    },
    {
        question: 'What is 3 + 23',
        answers: [
            { text: '323', correct: false },
            { text: '120', correct: false },
            { text: '43', correct: false },
            { text: '26', correct: true }
        ]
    }
]