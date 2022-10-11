import React from 'react';

const QuizOptions = ({ option, handleAnswer }) => {
	return (
		<div>
			<label className="label cursor-pointer bg-white p-5 rounded-xl font-bold  duration-500 hover:bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 hover:text-white">
				<div onClick={() => handleAnswer(option)} className="flex gap-4 items-center   ">
					<input
						type="radio"
						name="radio-3"
						className="radio radio-primary  hidden sm:inline-block"
					/>
				</div>
				<p className="font-bold text-lg ">{option}</p>
			</label>
		</div>
	);
};

export default QuizOptions;
