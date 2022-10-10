import React from 'react';
import './Header.css'

const Header = () => {
	return (
		<div>
			<section className=" text-gray-100 trivia-section">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold  sm:text-6xl">
							Web Development Quizzes & Trivia
						</h1>
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
							src="https://img.freepik.com/free-photo/businesswoman-standing-thinking-near-big-question-mark-isolated-white-background_126523-3114.jpg?w=996&t=st=1665420982~exp=1665421582~hmac=a7106d630262878fb51ee35b325ed344c15f7b898cd1eb14d6c82855efd0ea3b"
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
