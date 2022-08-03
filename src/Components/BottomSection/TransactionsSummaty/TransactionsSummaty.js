import React from 'react';
import { Pie, Cell, PieChart } from 'recharts';
import './TransactionsSummaty.css';

const TransactionsSummaty = () => {

    const data = [
        { name: 'Group A', value: 86 }
      ];
      const COLORS = ['#0088FE'];

    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       </PieChart>
    );
};

export default TransactionsSummaty;