import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { withRouter } from 'next/router';
import { colors } from '../lib/colors';


const Chart = ({green, red, blue, nowPlaying}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

      const options = {
        responsive: true,
        scales: {
            yAxis: {
              beginAtZero: true,
              grid: {
                tickColor: "white",
                color: 'white',
                lineWidth: 0.5
              },
              ticks: {
                color: "white",
                font: {
                    size: 34
                }
              }
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                    font: {
                        size: 51
                    }
                }
            },
            title: {
                display: true,
                text: `Now playing: ${nowPlaying}`,
                color: 'white',
                font: {
                    size: 34
                }
            },
            tickColor: "white",
            scale: {
                tickColor: "white",
                ticks: {
                    beginAtZero: true,
                    color: 'white', // labels such as 10, 20, etc
                    showLabelBackdrop: false // hide square behind text
                },
                gridLines: {
                    color: 'rgba(255, 255, 255, 0.2)'
                },
                angleLines: {
                    color: 'white' // lines radiating from the center
                }
            }
        },
      };


      const labels = [""];

      const data = {
        labels,
        datasets: [
            {
                label: red?.title,
                data: [red?.current],
                backgroundColor: colors.red,
                borderRadius: 15

            },
            {
                label: green?.title,
                data: [green?.current],
                backgroundColor: colors.green,
                borderRadius: 15

            },
            {
                label: blue?.title,
                data: [blue?.current],
                backgroundColor: colors.blue,
                borderRadius: 15
            },

        ],
      };

    return (
        <div>
            <Bar
                options={options}
                data={data}
            />
            {/* <style jsx>
                {`
                div {
                    max-width: 50vh;
                }
                `}
            </style> */}
        </div>
    )
}

export default Chart