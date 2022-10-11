import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizQuestions = ({
	questions,
	setCorrect,
	correct,
	wrong,
	setWrong,
	questionsData,
	index,
}) => {
	const { options, question, correctAnswer } = questions;

	const handleAnswer = (selectedAnswer) => {
		let answer = options.find((option) => selectedAnswer === correctAnswer);
		if (answer) {
			toast.success('Correct Answer 👍👍👍', {
				autoClose: 500,

				theme: 'dark',
			});
			setCorrect(correct + 1);
		} else {
			toast.error('Incorrect ❌❌❌', {
				autoClose: 500,

				theme: 'dark',
			});
			setWrong(wrong + 1);
		}
	};

	const handleCorrectAnswer = () => {
		let answer = options.find((option) => option === correctAnswer);
		Swal.fire({
			icon: 'info',
			text: `The correct Answer is -  ${answer} ✅✅✅`,
		});
	};

	return (
		<div className="max-w-[1200px] ">
			<div className="card md:m-10 m-4   bg-gradient-to-b from-slate-900 to-purple-900 shadow-xl shadow-purple-400 rounded-2xl ">
				<div className="card-body text-center  ">
					<span className="text-xl mb-4 font-extrabold text-[#ff4500] underline">Quiz {index + 1} </span>
					<div className="flex items-center flex-col md:flex-row gap-3">
						<p
							className="text-2xl text-white font-bold"
							dangerouslySetInnerHTML={{ __html: question }}></p>
						<EyeIcon
							title="click to see the correct answer"
							onClick={() => handleCorrectAnswer(options)}
							className="h-10 w-10 md:h-8 md:w-6 text-white cursor-pointer order-first md:order-none hover:text-green-700 duration-300"
						/>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
						{options.map((option, idx) => (
							<QuizOptions key={idx} option={option} handleAnswer={handleAnswer} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizQuestions;
