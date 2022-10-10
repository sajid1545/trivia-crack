import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='mx-auto'>
			<section className=" text-white trivia-section mt-[150px] lg:mt-0 font-bold ">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-4xl font-bold  sm:text-6xl">Web Development Quizzes & Trivia</h1>
						<p className="mt-6 mb-8 text-xl sm:mb-12">
							The internet connects everyone nowadays and web development is a huge part of our
							society. If you want to be well-known throughout the world then you should probably
							develop your own website or a web page. Our trivia on web development has questions
							about every aspect concerning web development nowadays and will test your knowledge on
							the matter.
						</p>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img
							src="https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=1380&t=st=1665421017~exp=1665421617~hmac=187a6127ab04f8f5c8601dd31d51fd084b0ce3f4c7297f2628b48c9c314829e4"
							alt=""
							className=" h-72 sm:h-80 lg:h-96  xl:h-112 2xl:h-128 rounded-2xl"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;
