import React from 'react';
import './dashboard.css'
import { FaBoxOpen, FaExclamationTriangle, FaShoppingCart } from "react-icons/fa";
import Revenue from '../components/Revenue';
import Sales from '../components/sales';
import Recent_transac from '../components/Recent_transac';


const Dashboard = () => {

    return (
        <>
            <div className='dashboard_page'>
                <div className='title'>
                    <h2>Dashboard</h2>
                    <p>Welcome to your dashboard</p>
                </div>
                <div className='dashboard'>
                    <div className='boxs'>
                        <div>
                            <h3>Products </h3>
                            <h2>234</h2>
                        </div>
                        <h1><FaBoxOpen></FaBoxOpen></h1>
                    </div>
                    <div className='boxs'>
                        <div>
                            <h3>purchase orders</h3>
                            <h2>67</h2>
                        </div>
                        <h1>icon</h1>
                    </div>
                    <div className='boxs'>
                        <div>
                            <h3>sales orders</h3>
                            <h2>94</h2>
                        </div>
                        <h1><FaShoppingCart></FaShoppingCart></h1>
                    </div>
                    <div className='boxs'>
                        <div>
                            <h3>inventory alerts </h3>
                            <h2>24</h2>
                        </div>
                        <h1><FaExclamationTriangle></FaExclamationTriangle></h1>
                    </div>
                </div>

                <div className='flex'>
                    <Sales></Sales>
                    <Recent_transac></Recent_transac>

                </div>

                <Revenue></Revenue>

            </div>
        </>

    );
};

export default Dashboard;