import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Signin from './Component/signin';
import SignUp from './Component/signup';
import TaskBody from './Component/tasks';
import ShowError from './ShowError';

const root = ReactDOM.createRoot(document.getElementById('root'));
const AppRouter = createBrowserRouter([
   { 
      path: '/',
      element: <App/>,
      errorElement: <ShowError/>,
      children: [
         {
            path: '/',
            element: <SignUp/>,
            errorElement: <ShowError/>
         },
         {
            path: '/signin',
            element: <Signin/>,
            errorElement: <ShowError/>
         },
         {
            path: '/app',
            element: <TaskBody/>,
            errorElement: <ShowError/>
         },
         {
            path: '/signin/app',
            element: <TaskBody/>,
            errorElement: <ShowError/>
         }
      ]
   },
]);

root.render(
   <RouterProvider router = {AppRouter}/>
);