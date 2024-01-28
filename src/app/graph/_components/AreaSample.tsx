"use client";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const AreaSample = (props: any) => {
  const { data } = props;
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <a>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
        </linearGradient>
        <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
        </linearGradient>
      </a>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Area
        type='monotone'
        dataKey='uv'
        stroke='#8884d8'
        fillOpacity={1}
        fill='url(#colorUv)'
      />
      <Area
        type='monotone'
        dataKey='pv'
        stroke='#82ca9d'
        fillOpacity={1}
        fill='url(#colorPv)'
      />
    </AreaChart>
  );
};

export default AreaSample;
