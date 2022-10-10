import React from 'react';
import { toast } from 'react-toastify';

const QuizOptions = ({ option, questions }) => {
	const { options, question, correctAnswer } = questions;


	const handleAnswer = (selectedAnswer) => {
		let answer = options.find((option) => selectedAnswer === correctAnswer);
		if (answer) {
			toast.success('Correct Answer 👍👍👍', {
				position: 'top-center',
				autoClose: 500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: 'dark',
			});
		} else {
			toast.error('Incorrect ❌❌❌', {
				position: 'top-center',
				autoClose: 500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: 'dark',
			});
		}
	};


	return (
		<div>
			<div
				onClick={() => handleAnswer(option)}
				className="bg-white p-5 rounded-lg font-bold cursor-pointer hover:bg-purple-200  duration-500 ">
				<div className="flex gap-4 items-center">
					<input
						type="radio"
						name="radio-3"
						className="radio radio-secondary  hidden sm:inline-block"
					/>
					<span>{option}</span>
				</div>
			</div>
		</div>
	);
};

export default QuizOptions;
