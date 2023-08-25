import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <div>
            <div className='title'>
                <h1>Contacts</h1>
                <p>List of Contacts for Future Reference</p>
            </div>
            <div className='contact_info'>
                <h4>ID</h4>
                <h4>Register ID</h4>
                <h4>Name</h4>
                <h4>Age</h4>
                <h4>Phone Number</h4>
                <h4>Email</h4>
                <h4>Address</h4>
                <h4>City</h4>
                <h4>Zip Code</h4>
            </div>
            <div className='team'>
                <div className='contant_data'>
                    <h4>1</h4>
                    <h4>12547</h4>
                    <h4>Show</h4>
                    <h4>34</h4>
                    <h4>+00 245 124</h4>
                    <h4>show@gmail.com</h4>
                    <h4>Rola, 2112</h4>
                    <h4>London</h4>
                    <h4>2112</h4>
                </div>
            </div>
            <div className='team'>
                <div className='contant_data'>
                    <h4>2</h4>
                    <h4>15637</h4>
                    <h4>kane</h4>
                    <h4>31</h4>
                    <h4>+00 312 157</h4>
                    <h4>kane@gmail.com</h4>
                    <h4>Rola, 2112</h4>
                    <h4>London</h4>
                    <h4>1442</h4>
                </div>
            </div>
            <div className='team'>
                <div className='contant_data'>
                    <h4>3</h4>
                    <h4>17434</h4>
                    <h4>Luis</h4>
                    <h4>28</h4>
                    <h4>+00 221 122</h4>
                    <h4>Luis@gmail.com</h4>
                    <h4>Rola, 2112</h4>
                    <h4>London</h4>
                    <h4>1563</h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;