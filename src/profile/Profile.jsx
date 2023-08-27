import React, { useRef, useState } from 'react';
import './profile.css'
import { FaEdit, FaSave } from 'react-icons/fa';



const Profile = () => {

    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    };

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Do something with the selected file
            console.log('Selected file:', selectedFile);
        }
    };

    return (
        <>


            <div className='profile_detail'>
                {editMode ? (
                    <div className='profile_detail'>
                        <div>
                            <h1>MY PROFILE</h1>
                            <img className='profile_img' src="https://nationaltoday.com/wp-content/uploads/2022/05/83-Tom-Holland-1200x834.jpg.webp" alt="" />

                            <div className="file-input-container">
                                <button className="custom-file-button" onClick={handleButtonClick}>
                                    Upload Profile
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                            </div>

                        </div>
                        <div className='profile_data'>
                            <input className='inputfield' type="text" defaultValue="Jack Hard" />
                            <br />
                            <input className='inputfield' type="text" defaultValue="jack001@gmail.com" />
                            <br />
                            <input className='inputfield' type="text" defaultValue="+00 00 158 4739" />
                        </div>

                    </div>
                ) : (
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

                    </div>
                )}
                <div className='edit_btn'>
                    {editMode ? (
                        <button className='btn' onClick={toggleEditMode}>
                            <FaSave></FaSave>  SAVE
                        </button>
                    ) : (
                        <button className='btn' onClick={toggleEditMode}>
                            <FaEdit /> EDIT
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Profile;