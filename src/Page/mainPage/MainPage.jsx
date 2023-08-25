import React from 'react';
import { NavLink } from 'react-router-dom';
import './mainPage.css'
import { FaHome, FaInfoCircle, FaUserFriends } from 'react-icons/fa';

const MainPage = () => {
    return (
        <div className='adminDashboard'>

            <h3>
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
                    <div className='line'><FaHome></FaHome><p>Dashboard</p></div>
                </NavLink>
            </h3>
                    <h3 className='data'>Data</h3>
            <h3>
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
                    <div className='line'><FaUserFriends></FaUserFriends><p>Manage Team</p></div>
                </NavLink>
            </h3>

            <h3>
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
                    <div className='line'><FaInfoCircle></FaInfoCircle><p>Contacts Information</p></div>
                </NavLink>
            </h3>

        </div>
    );
};

export default MainPage;