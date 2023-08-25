import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const Sales = () => {
    const data = [{ name: 'T-Shirt', uv: 300, pv: 2400, amt: 2400 }, { name: 'Shirt', uv: 400, pv: 2400, amt: 2400 }, { name: 'Panjabi', uv: 100, pv: 2000, amt: 1200 }, { name: 'Pant', uv: 500, pv: 2400, amt: 2400 }];

    return (
        <div className='chart'>
            <h1>Sales Quality</h1>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#00001a" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #00001a', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#00001a" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#00001a" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Sales;