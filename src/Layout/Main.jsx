import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { NavBar } from '../Components/NavBar/NavBar';

export const TopicContext = createContext([]);

const Main = () => {
    const topics = useLoaderData().data;

	return (
		<div>
			<TopicContext.Provider value={topics}>
				<NavBar />
				<Outlet />
			</TopicContext.Provider>
		</div>
	);
};

export default Main;
