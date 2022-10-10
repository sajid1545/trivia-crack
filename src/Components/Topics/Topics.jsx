import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {

    const topics = useLoaderData().data
    console.log(topics);

    return (
        <div className='flex justify-center h-[100%] items-center'>
            <div className=' grid grid-cols-3 p-10 mt-10 gap-10'>
                {
                    topics.map(topic => <Topic key={topic.id} topic = {topic} />)
                }
            </div>
        </div>
    );
};

export default Topics;