import React, { useState } from 'react';
import './head.css'
import { FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Head = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (

        <div className='head'>
            <div>
                <h1>Company Name</h1>
            </div>
            <div className='headData'>
                <h1 className='bell'>
                    <FaRegBell></FaRegBell>
                </h1>
                <div>
                    <img
                        src="https://nationaltoday.com/wp-content/uploads/2022/05/83-Tom-Holland-1200x834.jpg.webp"
                        alt="Clickable Image"
                        className="clickable-image profile"
                        onClick={toggleDropdown}
                    />
                    {dropdownVisible && (
                        <div className="dropdown" style={{ top: '50px', left: '20px' }}>
                            <div className="dropdown-content">
                                <div className="dropdown-option"><Link to={"/profile"} className='dropdown-option'><h3>Profile</h3></Link></div>
                                <div className="dropdown-option"><h3>Settings</h3></div>
                                <div className="dropdown-option"><h3>Logut</h3></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Head;