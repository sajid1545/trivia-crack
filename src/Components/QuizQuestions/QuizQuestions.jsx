import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const QuizQuestions = ({ questions }) => {
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

	const handleCorrectAnswer = (selectedAnswer) => {
		let answer = options.find((option) => option === correctAnswer);
		Swal.fire({
			icon: 'info',
			text: `The is the correct Answer -  ${answer} ✅✅✅`,
		  })

	};

	return (
		<div className="max-w-[1200px]">
			<div className="card m-10  shadow-xl bg-gradient-to-t from-purple-900 to-purple-500 ">
				<div className="card-body text-center ">
					<div className="flex items-center flex-col md:flex-row gap-3">
						<p
							className="text-xl text-white font-bold"
							dangerouslySetInnerHTML={{ __html: question }}></p>
						<EyeIcon
							onClick={() => handleCorrectAnswer(options)}
							className="h-6 w-6 text-white cursor-pointer"
						/>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
						{options.map((option, idx) => (
							<QuizOptions
								key={idx}
								questions={questions}
								option={option}
								handleAnswer={handleAnswer}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizQuestions;
