import React from 'react';
import './profile.css'
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
    return (
        <div className='profile_detail'>
            <div>
                <h1>MY PROFILE</h1>
                <img className='profile_img' src="https://nationaltoday.com/wp-content/uploads/2022/05/83-Tom-Holland-1200x834.jpg.webp" alt="" />
            </div>
            <div className='profile_data'>
                <p>Your Account:</p>
                <h2>Jack001</h2>

                <p>Full Name:</p>
                <h2>Jack Hard</h2>

                <p>Email Address:</p>
                <h2>jack001@gmail.com</h2>

                <p>Phone Number:</p>
                <h2>+00 00 158 4739</h2>
            </div>
            <div className='edit_btn '>
                <button className='btn'><FaEdit></FaEdit> EDIT</button>
            </div>
        </div>
    );
};

export default Profile;