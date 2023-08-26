import React from 'react';
import './../Admin_dashboard/admin.css'
import MainPage from '../Page/mainPage/MainPage';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <>
            <div className='container '>
                <MainPage></MainPage>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Admin;