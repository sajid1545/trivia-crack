import React from 'react';
import { toast } from 'react-toastify';

const QuizOptions = ({ option, questions }) => {
	const { options, question, correctAnswer } = questions;

	const handleAnswer = (selectedAnswer) => {
		let answer = options.find((option) => selectedAnswer === correctAnswer);
		if (answer) {
			toast.success('Correct Answer', { autoClose: 500 });
		} else {
			toast.error('Wrong Answer', { autoClose: 500 });
		}
	};

	return (
		<div>
			<div  onClick={() => handleAnswer(option)} className="bg-white p-5 rounded-lg font-bold cursor-pointer">
				<div className='flex gap-4 items-center'>
				<input type="radio" name="radio-3" className="radio radio-secondary"  />
				<span>{option}</span>
				</div>
			</div>
		</div>
	);
};

export default QuizOptions;
