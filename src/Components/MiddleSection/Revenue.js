import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';

const Revenue = () => {
   const data = [
        {
          name: 'January',
          uv: 600,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'February',
          uv: 400,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          uv: 1000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'April',
          uv: 290,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Jun',
          uv: 290,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'July',
          uv: 450,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Aug',
          uv: 700,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area connectNulls type="monotone" dataKey="uv" stroke="#FAC7B6" fill="#FAC7B6" />
      </AreaChart>
    );
};

export default Revenue;