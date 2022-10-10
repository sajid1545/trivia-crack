import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const Quiz = () => {

    const questionsData = useLoaderData().data
    const questions = useLoaderData().data.questions


    return (
        <div>
            <h1 className='text-5xl text-center mt-3'>{ questionsData.name }</h1>
            <div>
                {
                    questions.map(question => <QuizQuestions key={question.id} question = {question} />)
                }
            </div>
        </div>
    );
};

export default Quiz;