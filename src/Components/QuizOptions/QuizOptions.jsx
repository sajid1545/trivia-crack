import React from 'react';

const QuizOptions = ({ option, handleAnswer }) => {
	return (
		<div>
			<div
				
				className="bg-white p-5 rounded-xl font-bold cursor-pointer duration-500 hover:bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 hover:text-white ">
				<label  className="label">
					<div onClick={() => handleAnswer(option)} className="flex gap-4 items-center  ">
						<input
							type="radio"
							name="radio-3"
							className="radio radio-primary  hidden sm:inline-block"
						/>
						<span>{option}</span>
					</div>
				</label>
			</div>
		</div>
	);
};

export default QuizOptions;
