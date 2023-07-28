// import React from 'react'
import { AreaChart ,  XAxis, YAxis, CartesianGrid, Tooltip,Area, ResponsiveContainer } from 'recharts'

//used in perfomance chart
const data :any = [
    {
      "name": "wk 1",
      "pips": 200,
    },
    {
      "name": "wk 2",
      "pips": 300,
    },
    {
      "name": "wk 3",
      "pips": 250,
    },
    {
      "name": "wk 4",
      "pips": 500,
    },
    {
      "name": "wk 5",
      "pips": 190,
    },
    {
      "name": "wk 6",
      "pips": 600,
    },
    {
      "name": "wk 7",
      "pips": 250,
    },
    {
      "name": "wk 8",
      "pips": 700,
    },
    {
      "name": "wk 9",
      "pips": 350,
    },
    {
      "name": "(current)",
      "pips": 230,
    }
  ]

function Done1() {
  return (
    <div
        className='text-[0.9rem] w-full h-[500px] lg:h-[400px] flex flex-col gap-[2rem]'
    >
        <div
            className='tracking-widest text-center text-[#ffff] font-semibold'
        >
            <h1>Weekly performance chart</h1>
        </div>

        {/* chart */}
        <>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
                data={data}
                margin={{ top: 0, right: 15, left: 0, bottom: 0 }}
            >
                    <defs>
                        <linearGradient id="colorpips" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis 
                        dataKey="name" 
                        domain={[0, 'auto']} 
                        // label={{ value: 'Performance', position: 'insideBottom', offset: 1 }}
                    />
                    <YAxis 
                        type="number" 
                        domain={["dataMin", 'auto']}
                        label={{ value: 'Weekly pips', angle: -90, position: 'insideLeft' }}
                        axisLine={false}
                    />
                    <CartesianGrid 
                        strokeDasharray="4 1" 
                        opacity={0.07}
                    />
                    <Tooltip
                        cursor={{ stroke: '#3a6b52', strokeWidth: 2 }}
                     />
                    <Area 
                        type="monotone" 
                        dataKey="pips" 
                        stroke="#82ca9d" 
                        fillOpacity={1} 
                        fill="url(#colorpips)" 
                        dot={{ stroke: '#a7f0c8', strokeWidth: 0.1 }}
                        activeDot={{ stroke: '#a3a9c8', strokeWidth: 0.1, r: 5 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </>
    </div>
  )
}

export default Done1