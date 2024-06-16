import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Course from './Components/Course';
import Signup from './Components/Signup';
import AuthProvider from './context/AuthProvider';
import Contect from './Components/Contect';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/course', element: <Course /> },
      { path: '/signup', element: <Signup /> },
      { path: '/contectus', element:<Contect/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);
