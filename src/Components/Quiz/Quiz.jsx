import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const Quiz = () => {
	const questionsData = useLoaderData().data;
	const questions = useLoaderData().data.questions;

	return (
		<div className='flex justify-center items-center h-full flex-col gap-10 mt-[180px] md:mt-0'>
			
			<h1 className="text-5xl text-center mt-3 font-extrabold italic text-purple-700">{questionsData.name} Quiz</h1>
			<div className='grid grid-cols-1  '>
				{questions.map((question) => (
					<QuizQuestions key={question.id} questions={question} />
				))}
			</div>
		</div>
	);
};

export default Quiz;
