import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/PageComponents/About/About';
import Contact from './Components/PageComponents/Contact/Contact';
import ServicesP from './Components/PageComponents/ServicesP/ServicesP.jsx';
import ServicePDetails from './Components/PageComponents/ServicesP/ServiceP/ServicePDetails/ServicePDetails.jsx';
import PostsP from './Components/PageComponents/PostsP/PostsP.jsx';
import PostDetails from './Components/PageComponents/PostsP/Post/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/services',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<ServicesP></ServicesP>
      },

      // 45-5 Dynamic Route With Params And Load Single User Data
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<ServicePDetails></ServicePDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<PostsP></PostsP>
      },
      {
        path: '/posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
