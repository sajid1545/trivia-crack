import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Topics from './../Components/Topics/Topics';
import Quiz from './../Components/Quiz/Quiz';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
				element: <Topics />,
			},
			{
				path: '/questions/:id',
				loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
				element: <Quiz />,
			},
		],
	},
]);
