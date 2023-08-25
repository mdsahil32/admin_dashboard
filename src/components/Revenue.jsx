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
        < div >
        <h1>Revenue</h1>
            <LineChart
                width={500}
                height={300}
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
                    stroke="#8884d8"
                    strokeDasharray="5 5"
                />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#82ca9d"
                    strokeDasharray="3 4 5 2"
                />
                <Line
                    type="monotone"
                    dataKey="amt"
                    stroke="#00001a"
                    strokeDasharray="3 4 5 2"
                />
            </LineChart>
        </div >
    );
};

export default Revenue;