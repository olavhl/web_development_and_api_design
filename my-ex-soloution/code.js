const questionContainer = document.getElementById("questions-container");
const answerContainer = document.getElementById("answers-container");
const feedbackContainer = document.getElementById("feedback-container");

const qAndA = [
    {
        question: 'Whats 9 + 10?',
        answers: [
            '21',
            'Nineten',
            '19',
            '91'
        ],
        // Index of correct answer
        correctAnswer: 0 
    },
    {
        question: 'What year was the very first model of the iPhone released?',
        answers: [
            '2004',
            '2005',
            '2006',
            '2007'
        ],
        // Index of correct answer
        correctAnswer: 3  
    },
    {
        question: 'What does HTTP stand for?',
        answers: [
            'HyperText Transfer Protocol',
            'Hyphen Transfer Tattoo Partner',
            'Hillarious Toxic Tarzan Pieces',
            'How To Transfer Protocol'
        ],
        // Index of correct answer
        correctAnswer: 0
    },
    {
        question: 'Which email service is owned by Microsoft?',
        answers: [
            'Gmail',
            'Yahoo',
            'Hotmail',
            'OneNote'
        ],
        // Index of correct answer
        correctAnswer: 2
    }
]


function displayQandA() {
    let ran = Math.floor(Math.random() * 3);
    let question = qAndA[ran].question;
    
    // Displaying question to HTML
    questionContainer.innerHTML = `
        <h3>${question}</h3>
    `;

    let answers = "";

    for(let i = 0; i < 4; i++) {
        answers += `
            <button id="${i}" onClick="userAnswer(${ran}, ${i})">${qAndA[ran].answers[i]}</button>
        `;
    }

    // Displaying answers to HTML
    answerContainer.innerHTML = answers;

}

function userAnswer(questionIndex, answerIndex) {
    let correctAnswer = qAndA[questionIndex].correctAnswer;
    
    let feedback = '';

    if (answerIndex === correctAnswer){
        feedback = "You answered correctly!"
        feedbackContainer.style.color = "green";
        displayQandA();
    } else {
        feedback = "Wrong answer.. Better luck next time."
        feedbackContainer.style.color = "red";
    }

    feedbackContainer.innerHTML = feedback;

}

displayQandA();
