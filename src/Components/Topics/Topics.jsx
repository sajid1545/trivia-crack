import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TopicContext } from '../../Layout/Main';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
	const topics = useContext(TopicContext);

	return (
		<div>
			<Header />
			<div className="flex justify-center h-[100%] items-center mt-[150px] lg:mt-0">
				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0 md:p-10 mt-10 gap-10">
					{topics.map((topic) => (
						<Topic key={topic.id} topic={topic} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Topics;
