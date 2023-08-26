import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import './style.css'

const Revenue = () => {
    const data = [
        {
            name: 'Page A',
            uv: 500,
            pv: 1100,
            amt: 2600,
        },
        {
            name: 'Page B',
            uv: 1400,
            pv: 3398,
            amt: 3210,
        },
        {
            name: 'Page C',
            uv: 3500,
            pv: 8300,
            amt: 5390,
        },
    ];
    return (
        < div className='revenue'>
            <h1>Revenue Generated</h1>
            <LineChart
                width={900}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="blue"
                    strokeDasharray="5 5"
                />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="green"
                    strokeDasharray="3 4 5 2"
                />
                <Line
                    type="monotone"
                    dataKey="amt"
                    stroke="red"
                    strokeDasharray="3 4 5 2"
                />
            </LineChart>
        </div >
    );
};

export default Revenue;