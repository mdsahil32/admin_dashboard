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
import Invoices_balance from './Invoices/Invoices_balance.jsx';
import Breakdown from './breakdown/Breakdown.jsx';
import Profile from './profile/Profile.jsx';

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
      {
        path: '/invoices',
        element: <Invoices_balance></Invoices_balance>
      },
      {
        path: '/breakdown',
        element:<Breakdown></Breakdown>
      }, 
      {
        path: '/profile',
        element: <Profile></Profile>
      }
      
    ])
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
