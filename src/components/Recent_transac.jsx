import React from 'react';
import './style.css'

const Recent_transac = () => {
    return (
        <div className='recent'>
            <h1> Recent Transaction </h1>

            <div className='id'>
                <div>
                    <p>jh01693</p>
                    <p>Jhon</p>
                </div>
                <p>20.03.2023</p>
                <h3>$54</h3>
            </div>

            <div className='id'>
                <div>
                    <p>mb20929</p>
                    <p>Mobik</p>
                </div>
                <p>20.03.2023</p>
                <h3>$54</h3>
            </div>

            <div className='id'>
                <div>
                    <p>is38295</p>
                    <p>Ishan</p>
                </div>
                <p>20.03.2023</p>
                <h3>$54</h3>
            </div>

            <div className='id'>
                <div>
                    <p>em19436</p>
                    <p>Emile</p>
                </div>
                <p>20.03.2023</p>
                <h3>$54</h3>
            </div>
        </div>
    );
};

export default Recent_transac;