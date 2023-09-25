import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from 'chart.js';
import faker from 'faker';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend );

export const options = {
    responsive: true,
    plugins: {
    //   title: {
    //     display: true,
    //     // text: 'Full Resolution Time - Last 30 Days',
        color: '#2F80ED',
        font: {
          size: 22, 
        },
    //   },
    
    },
    scales: {
      y: {
        title: {
          display: true,
        text: 'Number of Tickets',
        font: {
          size: 13,
        }
        }
      },
      x: {
        title: {
          display: true,
        text: '[30 Days]',
        font: {
          size: 13,
        }
        }
      }
    }
  };

  const labels = ['week 1', 'week 2', 'week 3', 'week 4' ]


export const data = {
  labels,
  datasets: [
    {
      fill: false,
      label: 'Tickets Created',
      maintainaspectratio: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgba(0, 109, 255, 1)',
      backgroundColor: 'rgba(0, 109, 255, 0.8)',
      tension: '0.4'
      
    },
    {
      fill: true,
      label: 'Tickets Solved',
      maintainaspectratio: true,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgba(26, 163, 103, 1)',
      backgroundColor: 'rgba(26, 163, 103, 0.8)',
      tension: '0.4'
      
    },
  ],
};

const Areachart3 = () => {
    return (
        <>
            <div className=' pb-3 pt-3 areachartbox'>
                <Line options={options} data={data}/>
            </div>
        </>
    )
}

export default Areachart3;