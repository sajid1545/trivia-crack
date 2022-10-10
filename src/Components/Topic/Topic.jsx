import React from 'react';

import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
	const { name, logo, total, id } = topic;

	return (
		<div className="">
			<div className="card w-[95%] border-2 border-purple-900 hover:shadow-purple-300 duration-500  cursor-pointer mx-auto bg-base-100 shadow-xl">
				<figure>
					<img src={logo} alt="Shoes" className="bg-blue-100" />
				</figure>
				<div className="card-body">
					<div className="">
						<h2 className="text-center font-bold text-xl text-purple-800">{name}</h2>
					</div>
					<div className="text-center">
						<p className='text-lg font-semibold'>Total Quiz : {total}</p>
					</div>
					<div className="card-actions block mx-auto">
						<Link to={`/questions/${id}`}>
							<button className="py-3 px-8 rounded-xl mt-5 bg-purple-700 border-0 text-white  hover:bg-purple-500 duration-500">
								<div className="flex items-center gap-4 px-4">
									<span>Take Quiz</span>
									<ArrowLongRightIcon className="w-6 h-7" />
								</div>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topic;
<h1>Topic</h1>;
