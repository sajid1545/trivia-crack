import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='mx-auto'>
			<section className=" text-gray-100 trivia-section mt-[150px] lg:mt-0">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-4xl font-bold  sm:text-6xl">Web Development Quizzes & Trivia</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">
							The internet connects everyone nowadays and web development is a huge part of our
							society. If you want to be well-known throughout the world then you should probably
							develop your own website or a web page. Our trivia on web development has questions
							about every aspect concerning web development nowadays and will test your knowledge on
							the matter.
						</p>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img
							src="https://img.freepik.com/free-vector/happy-participants-playing-quiz-game-tv-show-host-with-microphone-asking-questions_74855-10770.jpg?w=900&t=st=1665421439~exp=1665422039~hmac=f58a67b4c30d1c121395abe13490f3d6a892ea8940df7d1fec034283c66dba1f"
							alt=""
							className=" h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;
