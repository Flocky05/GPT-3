import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Library from './components/Library/Library';
import OpenAi from './components/Open-Ai/OpenAi';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/open-ai",
        element:<OpenAi></OpenAi>
      },
      {
        path:"/case-studies",
        element:<CaseStudies></CaseStudies>
      },
      {
        path:"/library",
        element:<Library></Library>
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },{
        path:"/signup",
        element:<SignUp></SignUp>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
