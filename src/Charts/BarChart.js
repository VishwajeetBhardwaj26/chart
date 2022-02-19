import React from 'react'
import axios from 'axios'
import {Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'



export function BarChart () {
  axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
       const metadata=res.data;
       console.log(metadata);
      const data = {
        labels: metadata?.map(x =>x.id),
        datasets: [
          {
            label: `${metadata?.users?.name}`,
            data: metadata?.users?.map(x=>x.id) ,
            borderColor: [
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ]
          },
          {
            label: `${metadata?.users?.name}`,
            data: metadata?.users?.map(x=>x.id),
            borderColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ]
          }
        ]
      }
      const options = {
    
        title: {
          display: true,
          text: 'Bar Chart',
          resposive:true,
        },
      }
      return <Bar data={data} options={options} />
    })
}

