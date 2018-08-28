import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

export const SimpleBarChart = ({ data }) => (
  <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray='3 3' />
    <XAxis dataKey='name' stroke='#A3A6A9' />
    <YAxis stroke='#A3A6A9' />
    <Tooltip />
    <Legend />
    <Bar dataKey='highestPossibleValue' fill='#1d82b9' />
    <Bar dataKey='actualValue' fill='#1db954' />
  </BarChart>
)
