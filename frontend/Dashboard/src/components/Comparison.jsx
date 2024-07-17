import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Comparison = () => {
  const [labels, setLabels] = useState([]);
  const [thisYearData, setThisYearData] = useState([]);
  const [lastYearData, setLastYearData] = useState([]);

  const fetchData = () => {
    fetch('https://july-assignment2-4.onrender.com/comparison')
      .then(response => response.json())
      .then(data => {
        if (data.comparison) {
          const labels = data.comparison.map(item => item.month);
          const thisYearData = data.comparison.map(item => item.thisYear);
          const lastYearData = data.comparison.map(item => item.lastYear);

          setLabels(labels);
          setThisYearData(thisYearData);
          setLastYearData(lastYearData);
        }
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value === 0 ? '0' : value;
          },
          stepSize: 5000,
          min: 0,
          max: 20000,
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 0,
        barThickness: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'This Year',
        data: thisYearData,
        backgroundColor: 'rgb(105, 50, 122)',
        borderRadius: 5,
      },
      {
        label: 'Last Year',
        data: lastYearData,
        backgroundColor: 'rgb(50, 100, 135)',
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="p-6 border border-gray-300 bg-white" style={{ height: '400px', width: '100%' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Comparison</h2>
        <select name="timeRange" id="timeRange" className="border border-gray-300  rounded-full p-2">
          <option value="6 months">6 months</option>
        </select>
      </div>
      <div style={{ height: '300px', width: '100%', display:"grid", placeItems:"center" }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Comparison;
