const questionContainer = document.getElementById("questions-container");
const answerContainer = document.getElementById("answers-container");

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
            <p>${qAndA[ran].answers[i]}</p>
        `;
    }

    // Displaying answers to HTML
    answerContainer.innerHTML = answers;

}

displayQandA();
