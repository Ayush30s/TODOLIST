import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Signin from './Component/signin';
import SignUp from './Component/signup';
import TaskBody from './Component/tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
const AppRouter = createBrowserRouter([
   {
      path: '/',
      element: <App/>,
      children: [
         {
            path: '/',
            element: <SignUp/>,
         },
         {
            path: '/signin',
            element: <Signin/>,
         },
         {
            path: '/app',
            element: <TaskBody/>
         },
         {
            path: '/signin/app',
            element: <TaskBody/>
         }
      ]
   }
]);

root.render(
   <RouterProvider router = {AppRouter}/>
);
