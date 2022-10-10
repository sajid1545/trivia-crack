import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {

    const topics = useLoaderData().data
    console.log(topics);

    return (
        <div>
            
        </div>
    );
};

export default Topics;