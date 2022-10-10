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
			<button onClick={() => handleAnswer(option)} className="btn">
				{option}
			</button>
		</div>
	);
};

export default QuizOptions;
