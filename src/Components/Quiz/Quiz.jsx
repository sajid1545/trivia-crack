import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';
import './Quiz.css';

const Quiz = () => {
	const questionsData = useLoaderData().data;
	const questions = useLoaderData().data.questions;

	const [correct, setCorrect] = useState(0);
	const [wrong, setWrong] = useState(0);

	return (
		<div className="flex justify-center items-center h-full flex-col gap-10 mt-[180px] md:mt-0">
			<h1 className="text-5xl text-center mt-3 font-extrabold italic text-purple-700">
				{questionsData.name} Quiz
			</h1>
			<div className="grid grid-cols-12 ">
				<div className="col-span-full lg:col-span-9">
					{questions.map((question) => (
						<QuizQuestions
							key={question.id}
							questions={question}
							correct={correct}
							setCorrect={setCorrect}
							wrong={wrong}
							setWrong={setWrong}
						/>
					))}
				</div>
				<div className='col-span-full lg:col-span-3 text-center bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white rounded-2xl my-5 p-5 '>
					<div className='sticky top-0 space-y-4 mt-5'>
					<h1 className="text-4xl">Correct Answers : {correct}</h1>
					<h1 className="text-4xl">Wrong Answers : { wrong }</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
