import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Phones from './Component/Pages/Phones/Phones';
import Details from './Component/Pages/Phones/Details/Details';
import About from './Component/NavPage/About';
import Contact from './Component/NavPage/Contact';
import Profile from './Component/NavPage/Profile'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path: "/",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=a`),
        element: <Phones/>
      },
      {
        path: "/iphone",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`),
        element: <Phones/>
      },
      {
        path: "/samsung",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=samsung`),
        element: <Phones/>
      },
      {
        path: "/huawei",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=huawei`),
        element: <Phones/>
      },
      {
        path: "/oppo",
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=oppo`),
        element: <Phones/>
      },
    ]
  },
  {
    path:'/:id',
    loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/phone/${params.id}`),
    element:<Details/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element: <Contact/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
