import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];
  
const AnglePieChart = () => {
  return (
    <div className='bg-bgSoft text-white h-full items-center  w-full'>
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#151c2c"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export default AnglePieChart;