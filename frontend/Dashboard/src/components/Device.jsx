import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const Device = () => {
  const [labels, setLabels] = useState([]);
  const [webSalesData, setWebSalesData] = useState([]);
  const [offlineSalesData, setOfflineSalesData] = useState([]);
  const [webSalesPercentage, setWebSalesPercentage] = useState(0);
  const [offlineSalesPercentage, setOfflineSalesPercentage] = useState(0);

  const fetchData = () => {
    fetch('https://july-assignment2-4.onrender.com/device')
      .then(response => response.json())
      .then(data => {
        console.log(data.device);
        if (data) {
          const labels = data.device.map(item => item.month || item.category || 'Label');
          const webSalesData = data.device.map(item => item.websales);
          const offlineSalesData = data.device.map(item => item.offlinesale);

          setLabels(labels);
          setWebSalesData(webSalesData);
          setOfflineSalesData(offlineSalesData);

          const totalSales = webSalesData.reduce((a, b) => a + b, 0) + offlineSalesData.reduce((a, b) => a + b, 0);
          setWebSalesPercentage(((webSalesData.reduce((a, b) => a + b, 0) / totalSales) * 100).toFixed(2));
          setOfflineSalesPercentage(((offlineSalesData.reduce((a, b) => a + b, 0) / totalSales) * 100).toFixed(2));
        }
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(webSalesData);
  console.log(offlineSalesData);

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value === 0 ? '0' : value + 'k';
          },
          stepSize: 4000,
          min: 0,
          max: 20000,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
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
        label: 'Web Sales',
        data: webSalesData,
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
      {
        label: 'Offline Sales',
        data: offlineSalesData,
        borderColor: 'rgb(153, 102, 255)',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Customers by Devices</h2>
       
      </div>
      <div className="w-full h-64">
        <Line data={chartData} options={options} />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div className="text-center">
            <p className="font-bold text-lg">Web Sales</p>
            <p className="text-2xl font-bold">{webSalesPercentage}%</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">Offline Sales</p>
            <p className="text-2xl font-bold">{offlineSalesPercentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
