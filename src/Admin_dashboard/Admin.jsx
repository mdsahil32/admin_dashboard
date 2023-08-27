import React from 'react';
import './../Admin_dashboard/admin.css'
import MainPage from '../Page/mainPage/MainPage';
import { Outlet } from 'react-router-dom';
import Head from '../Head/Head';

const Admin = () => {
    return (
        <>
            <Head></Head>
            <div className='container '>
                <MainPage></MainPage>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Admin;