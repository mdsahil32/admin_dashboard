import React from 'react';
import './manage.css'
import { FaShieldAlt, FaUnlockAlt, FaUserShield } from 'react-icons/fa';

const Manage = () => {
    return (
        <div>
            <div className='title'>
                <h1>Team</h1>
                <p>Managing The Team Members</p>
            </div>
            <div className='manage_team'>
                <input type="checkbox" name="" id="" />
                <h3>ID</h3>
                <h3>Name</h3>
                <h3>Age</h3>
                <h3>Phone Number</h3>
                <h3>Email</h3>
                <h3>Access Level</h3>
            </div>
            <div className='team'>
                <div className='team_detail'>
                    <input type="checkbox" name="" id="" />
                    <h3>1</h3>
                    <h3>Jhon</h3>
                    <h3>24</h3>
                    <h3>+00 194 3253</h3>
                    <h3>jhon@gmail.com</h3>
                    <h3 className='line'><FaUserShield></FaUserShield> Admin</h3>
                </div>
            </div>

            <div className='team'>
                <div className='team_detail'>
                    <input type="checkbox" name="" id="" />
                    <h3>2</h3>
                    <h3>Emil</h3>
                    <h3>32</h3>
                    <h3>+00 194 2353</h3>
                    <h3>emil@gmail.com</h3>
                    <h3 className='line'><FaUnlockAlt></FaUnlockAlt>User</h3>
                </div>
            </div>
            <div className='team'>
                <div className='team_detail'>
                    <input type="checkbox" name="" id="" />
                    <h3>3</h3>
                    <h3>Rock</h3>
                    <h3>27</h3>
                    <h3>+00 134 5689</h3>
                    <h3>rock@gmail.com</h3>
                    <h3 className='line'><FaShieldAlt></FaShieldAlt>Manager</h3>
                </div>
            </div>
            <div className='team'>
                <div className='team_detail'>
                    <input type="checkbox" name="" id="" />
                    <h3>4</h3>
                    <h3>Leao</h3>
                    <h3>35</h3>
                    <h3>+00 144 6783</h3>
                    <h3>leao@gmail.com</h3>
                    <h3 className='line'><FaUnlockAlt></FaUnlockAlt>User</h3>
                </div>
            </div>
            <div className='team'>
                <div className='team_detail'>
                    <input type="checkbox" name="" id="" />
                    <h3>5</h3>
                    <h3>Jems</h3>
                    <h3>22</h3>
                    <h3>+00 134 3353</h3>
                    <h3>jems@gmail.com</h3>
                    <h3 className='line'><FaUnlockAlt></FaUnlockAlt>User</h3>
                </div>
            </div>
            <div className='team'>
                <div className='team_detail'>
                    <input type="checkbox" name="" id="" />
                    <h3>6</h3>
                    <h3>Duck</h3>
                    <h3>26</h3>
                    <h3>+00 164 6779</h3>
                    <h3>duck@gmail.com</h3>
                    <h3 className='line'><FaShieldAlt></FaShieldAlt>Manager</h3>
                </div>
            </div>
            <div className='team'>
                <div className='team_detail'>
                    <input type="checkbox" name="" id="" />
                    <h3>7</h3>
                    <h3>Tyson</h3>
                    <h3>25</h3>
                    <h3>+00 177 5113</h3>
                    <h3>tyson@gmail.com</h3>
                    <h3 className='line'><FaUserShield></FaUserShield> Admin</h3>
                </div>
            </div>
        </div>
    );
};

export default Manage;