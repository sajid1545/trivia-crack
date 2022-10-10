import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Topics from './../Components/Topics/Topics';
import Quiz from './../Components/Quiz/Quiz';
import Statistics from './../Components/Statistics/Statistics';
import Blog from './../Components/Blog/Blog';
import ErrorPage from '../Components/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
	{
		path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
		children: [
			{
				path: '/',
				loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
				element: <Topics />,
			},
			{
				path: '/topics',
				loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
				element: <Topics />,
			},

			{
				path: '/questions/:id',
				loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
				element: <Quiz />,
			},
			{
				path: '/statistics',
				element: <Statistics />,
			},
			{
				path: '/blogs',
				element: <Blog />,
			},
		],
	},
]);
