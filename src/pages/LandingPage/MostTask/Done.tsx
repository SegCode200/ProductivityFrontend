import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { readProgress } from '../../../utils/progressAPI';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
  const  Done=()=> {

    const { data: progress } = useQuery({
        queryKey: ["progress"],
        queryFn: readProgress,
        refetchInterval: 3000
    })
    const List= [progress]
    let Match = List.flat().map((props)=>{
        return props?.name
    })
    // console.log(Match)
    
    const arr = Match;
    const counts:any = {};
    

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

let AllObject = Object.values(counts);
let ALLobject = Object.keys(counts)
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};



 const data = {
  labels: ALLobject,
  datasets: [
    {
      fill: true,
      label: 'Most Task',
      data: AllObject,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


  return <Line options={options} data={data} />;
}
export default Done