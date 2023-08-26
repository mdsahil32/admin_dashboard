import React from 'react';
import { NavLink } from 'react-router-dom';
import './mainPage.css'
import { FaChartPie, FaFileInvoice, FaHome, FaInfoCircle, FaUserFriends } from 'react-icons/fa';
import Profile from '../../components/profile';

const MainPage = () => {
    return (
        <div className='adminDashboard'>
            <Profile></Profile>
            <>
                <NavLink
                    className='dashboard_name'
                    to='/dashboard'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgb(52, 52, 58)" : "",
                            padding: isActive ? "0 44px 0 44px" : "",
                        };
                    }}
                >
                    <h4 className='line'><FaHome></FaHome><span>Dashboard</span></h4>
                </NavLink>
            </>
            <h4 className='data'>Data</h4>
            <>
                <NavLink
                    className='dashboard_name'
                    to='/manage_team'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgb(52, 52, 58)" : "",
                            padding: isActive ? "0 44px 0 44px" : "",
                        };
                    }}
                >
                    <h4 className='line'><FaUserFriends></FaUserFriends><span>Manage Team</span></h4>
                </NavLink>
            </>

            <>
                <NavLink
                    className='dashboard_name'
                    to='/contact'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgb(52, 52, 58)" : "",
                            padding: isActive ? "0 44px 0 44px" : "",
                        };
                    }}
                >
                    <h4 className='line'><FaInfoCircle></FaInfoCircle><span>Contacts Information</span></h4>
                </NavLink>
            </>


            <>
                <NavLink
                    className='dashboard_name'
                    to='/invoices'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgb(52, 52, 58)" : "",
                            padding: isActive ? "0 44px 0 44px" : "",
                        };
                    }}
                >
                    <h4 className='line'><FaFileInvoice></FaFileInvoice><span>Invoices Balances</span></h4>
                </NavLink>
            </>
            <>
                <NavLink
                    className='dashboard_name'
                    to='/breakdown'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgb(52, 52, 58)" : "",
                            padding: isActive ? "0 44px 0 44px" : "",
                        };
                    }}
                >
                    <h4 className='line'><FaChartPie></FaChartPie><span>BreakDown</span></h4>
                </NavLink>
            </>

        </div>
    );
};

export default MainPage;