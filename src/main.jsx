import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './dashboard/Dashboard.jsx';
import Admin from './Admin_dashboard/Admin.jsx';
import Manage from './manage_team/Manage.jsx';
import Contact from './Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin></Admin>,
    children: ([
      {
        path: '/dashboard', 
        element: <Dashboard></Dashboard>
      },
      {
        path: '/manage_team',
        element: <Manage></Manage>,
      },
      {
        path: '/contact', 
        element: <Contact></Contact>
      },
      
    ])
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
