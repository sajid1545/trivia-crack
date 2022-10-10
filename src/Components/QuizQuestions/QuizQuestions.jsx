import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizQuestions = ({ questions }) => {
	const { options, question } = questions;

	return (
		<div className="max-w-[1200px]">
			<div className="card m-10  shadow-xl bg-gradient-to-t from-purple-900 to-purple-500 ">
				<div className="card-body text-center ">
					<div>
						<p
							className="text-xl text-white font-bold"
							dangerouslySetInnerHTML={{ __html: question }}>
							{/* {question} */}
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
						{options.map((option, idx) => (
							<QuizOptions key={idx} questions={questions} option={option} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizQuestions;
