import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

export const options ={
    indexAxis: 'y',
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        // title: {
        //     display: true,
        //     // text: 'Tickets Solved by User',
            color: '#2F80ED',
        font: {
          size: 22, 
        },
        // },
    },
    scales: {
      y: {
        title: {
          display: true,
        font: {
          size: 13,
        }
        }
      },
      x: {
        title: {
          display: true,
        text: 'Number of Tickets',
        font: {
          size: 13,
        }
        }
      }
    }
};

const labels = ['Nickolas','Steventon','Jacquetta','Monksfield','De Ambrosi	','Thebault','Mackenzie','Maryanna','Kaitlyn','Laurette','Prudence','Jermaine','Inglebert','Christyna','Cornelius','Kevan','Dane','Civitillo','Zavattari','Fransinelli', 'Eldershaw', 'Napoleone','De Robertis', 'Clyve', 'Aziah Binti Yaacub']
export const data = {
    
    labels,
    datasets: [{
        
      label: 'Customer Tickets Solved',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
     
      borderColor: [
        'rgba(26, 163, 103, 1)',
        'rgba(26, 163, 103, 1)',
        'rgba(26, 163, 103, 1)',
        'rgba(26, 163, 103, 1)',
        'rgba(26, 163, 103, 1)',
    
    
      ],
      backgroundColor: [
        'rgba(26, 163, 103, 0.8)',
        'rgba(26, 163, 103, 0.8)',
        'rgba(26, 163, 103, 0.8)',
        'rgba(26, 163, 103, 0.8)',
        'rgba(26, 163, 103, 0.8)'
      ],
      
      borderWidth: '3',
      borderRadius: '50',
      
      
    }]
    
  };

    const Barchart = () => {
    return (
        <>
        
        <div className=" pb-3 pt-3 barchartbox">
        <Bar options={options} data={data} height={840} width={750}/>
        </div>
        
        </>
    )
    
  }

  export default Barchart;