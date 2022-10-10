import React from 'react';

const QuizOptions = ({ option, handleAnswer }) => {


	return (
		<div>
			<div
				onClick={() => handleAnswer(option)}
				className="bg-white p-5 rounded-lg font-bold cursor-pointer hover:bg-red-400  duration-500">
				<div className="flex gap-4 items-center">
					<input
						type="radio"
						name="radio-3"
						className="radio radio-primary  hidden sm:inline-block"
					/>
					<span>{option}</span>
				</div>
			</div>
		</div>
	);
};

export default QuizOptions;
