import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import './index.css'
import Main from './Components/Main';
import Home from './Home/Home';
import Login from './auth/Login';
import AuthProvider from './auth/AuthProvider';
import SingUp from './auth/SignUp';
import Details from './Components/Details/Details';
import AddBlog from './Components/AddBlog/AddBlog';
import Update from './Components/Update/Update';
import AllBlog from './Components/AllBlog/AllBlog';
import ErrorPage from './Components/Errorpage/ErrorPage';
import Bookmark from './Components/Bookmark/Bookmark';
 //import DetailsBookMarks from './Components/Bookmark/DetailsBookMarks';
import Featured from './Components/Feature/Featured';
import PrivateRoute from './auth/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/news/:id',
        loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`), 
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: '/addblog',
        element: <AddBlog></AddBlog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SingUp></SingUp>
      },
      {
        path: '/update/:id',
        loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`),    
        element:<Update></Update>
      },
      {
        path: '/allBlog',
        element: <AllBlog></AllBlog>
      },
      {
        path: '/bookmark',
        element: <Bookmark></Bookmark>
      },
      {
        path: '/featured',
        element: <PrivateRoute><Featured></Featured></PrivateRoute>
      }   
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
           <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>,
)
