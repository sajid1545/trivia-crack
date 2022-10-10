import React from 'react';

const QuizOptions = ({ option, questions }) => {
    
	const { options,question,correctAnswer,id } = questions;

    const handleAnswer = selectedAnswer => { 
        let answer = options.find(option => selectedAnswer === correctAnswer);
        if (answer) {
            alert('Congrats')
        } else {
            alert('No answer')
        }
    }


    return (
        <div >
            <button onClick={()=>handleAnswer(option)} className='btn'>{option}</button>
        </div>
    );
};

export default QuizOptions;