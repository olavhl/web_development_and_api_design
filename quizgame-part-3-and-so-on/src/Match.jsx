import React from 'react';

import {getRandomQuizzies} from './quizzies';

export class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: getRandomQuizzies(1)[0],
            feedback: "Click on the right answer."
        }
    }

    giveFeedback = (correct) => {
        const correctFB = "You answered correctly!";
        const falseFB = "You picked the wrong answer..";

        if (correct) {
            this.setState({feedback: correctFB});
        } else {
            this.setState({feedback: falseFB});
        }
    };

    renderAnswers(answer, correct) {
        return <button className='answer-btns' onClick={() => this.giveFeedback(correct)}>{answer}</button>
    }


    render() {

        const quiz = this.state.quiz;

        return (
            <div id="question-container">

                <h3>{quiz.question}</h3>

                {this.renderAnswers(quiz.answers[0], quiz.correctAnswer === 0)}
                {this.renderAnswers(quiz.answers[1], quiz.correctAnswer === 1)}
                {this.renderAnswers(quiz.answers[2], quiz.correctAnswer === 2)}
                {this.renderAnswers(quiz.answers[3], quiz.correctAnswer === 3)}


                <h4>{this.state.feedback}</h4>
            </div>
        )
    }
}