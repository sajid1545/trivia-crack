import React from 'react';

const Blog = () => {
	return (
		<div className='mt-[200px] lg:mt-0 '>
			<h1 className="text-5xl text-center my-5 font-bold">Blogs</h1>
			<div className="space-y-4 max-w-[1000px] mx-auto">
				{/* Question ----> 1 */}
				<details className="group border-l-4 border-purple-700 bg-gray-50 p-6" open>
					<summary className="flex cursor-pointer items-center justify-between">
						<h5 className="text-lg font-medium text-gray-900">
							What is the purpose of React Router
						</h5>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						The method of routing involves sending users to various websites in response to their
						requests or actions. The major use for ReactJS Router is the creation of single page web
						applications. Multiple routes are defined in the application using React Router. A user
						will be sent to a certain route when they enter a particular URL into their browser and
						that URL path matches any of the "routes" in the router file. The React Router Package,
						a standard library system built on top of React, is used to provide routing in React
						applications. It gives the information that will be shown on the web page to the
						synchronous URL in the browser. It is mostly used for creating one page web apps and
						preserves the application's regular structure and functionality.
					</p>
				</details>

				{/* Question ----> 2 */}

				<details className="group border-l-4 border-purple-700 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h5 className="text-lg font-medium text-gray-900">How does Context API works ?</h5>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Context API is a (kind of) new feature that React 16.3 implemented that makes it simple
						and easy to exchange state throughout the entire project (or a portion of it). The React
						Context API is a way for a React app to effectively produce global variables that can be
						passed around. This is the alternative to "prop drilling" or moving props from
						grandparent to child to parent, and so on. Context is also touted as an easier, lighter
						approach to state management using Redux. React.createContext() is all you need. It
						returns a consumer and a provider. Provider is a component that as it's names suggests
						provides the state to its children. It will hold the "store" and be the parent of all
						the components that might need that store. Consumer as it so happens is a component that
						consumes and uses the state.
					</p>
				</details>

				{/* Question ----> 3 */}

				<details className="group border-l-4 border-purple-700 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h5 className="text-lg font-medium text-gray-900">What is useRef</h5>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						A hook is a unique function that makes it possible to leverage state and other React
						capabilities without having to write ES6 class components, which are typically thought
						of as being challenging to comprehend, use, and master. The React Hooks API includes the
						useRef hook. It is a function that only accepts one parameter at most and outputs an
						Object. The parameter supplied to useRef is the value of the current property on the
						returned object. Its current property is set to undefined if it is invoked without a
						parameter. The useRef hook in functional components is seen in the code below.
					</p>
				</details>
			</div>
		</div>
	);
};

export default Blog;
