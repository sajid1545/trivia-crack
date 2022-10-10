import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Topics from './../Components/Topics/Topics';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Topics/>
            },
        ],
    }
])