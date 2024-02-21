"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Week 1",
    reservations: 20,
    clicks: 80,
  },
  {
    name: "Week 2",
    reservations: 34,
    clicks: 120,
  },
  {
    name: "Week 3",
    reservations: 5,
    clicks: 160,
  },
  {
    name: "Week 4",
    reservations: 36,
    clicks: 140,
  },
  // Add more weeks as needed
];

const Linechart = () => {
  return (
    <div className='bg-bgSoft p-3'>
      <h2 className=' text-center'>Nombre De Résérvations Par Semaine</h2>
      <h6 className='mb-5 text-center opacity-55'>Mars 2024</h6>
      <div className='justify-center items-center'>
      <ResponsiveContainer width="100%" aspect={3}  >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="reservations" stroke="#8884d8" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Linechart;
