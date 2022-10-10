import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizQuestions = ({ questions }) => {
	const { options,question,correctAnswer,id } = questions;

	return (
		<div>
			<div className="card m-10  shadow-xl">
				<div className="card-body text-center">
                    <p>{ question }</p>
                    <div className='grid grid-cols-2 gap-10 mt-4'>
                        {
                            options.map((option,idx) => <QuizOptions key={idx} questions={ questions } option = {option} />)
                        }
                    </div>
				</div>
			</div>
		</div>
	);
};

export default QuizQuestions;
