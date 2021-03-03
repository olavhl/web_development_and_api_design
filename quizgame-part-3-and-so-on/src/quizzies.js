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

export function getRandomQuizzies(numberOfQuizzies) {

    if (numberOfQuizzies < 1) {
        throw "Invalid number of requested quizzies: " + n;
    }

    if (numberOfQuizzies > qAndA.length) {
        throw "Too many quizzes";
    }

    const selection = Array(numberOfQuizzies);

    let i = 0;
    while (i < numberOfQuizzies) {
        const k = Math.floor(Math.random() * qAndA.length);

        if (selection.includes(k)) {
            continue;
        }

        selection[i] = k;
        
        i++;
    }

    return Array.from(selection).map(e => qAndA[e])
}