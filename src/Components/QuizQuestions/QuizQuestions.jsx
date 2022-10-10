import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizQuestions = ({ questions }) => {
	const { options,question,correctAnswer,id } = questions;

	return (
		<div className=''>
			<div className="card m-10  shadow-xl bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
				<div className="card-body text-center ">
                    <p className='text-xl text-white font-bold'>{ question }</p>
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
