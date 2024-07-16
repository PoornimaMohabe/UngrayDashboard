import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./Login.css"

const Score = () => {
  const chartRef = useRef(null);
  const [data1, setData] = useState({ score: 0, title: '', message: '' });

  const url = `http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_3/`
  const username = "trial";  
  const password = "assignment123";  

  const fetchData = () => {
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

    fetch(url, { headers })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setData(data); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data1.score);

  useEffect(() => {
    // Data
    const value = data1.score / 100 || 0.78;
    const text = Math.round(value * 100) + " of 100 points";
    const data = [value, 1 - value];

    // Settings
    const width = 320;
    const height = 120;
    const anglesRange = 0.5 * Math.PI;
    const radius = Math.min(width, 2 * height) / 2;
    const thickness = 10;
    const colors = ["#5EBBF9", "#F5F5F5"];

    // Clear any previous chart
    d3.select(chartRef.current).select("svg").remove();

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "half-donut")
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height})`);

    const pies = d3.pie()
      .value((d) => d)
      .sort(null)
      .startAngle(anglesRange * -1)
      .endAngle(anglesRange);

    const arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius - thickness);

    svg
      .selectAll("path")
      .data(pies(data))
      .enter()
      .append("path")
      .attr("fill", (d, i) => colors[i])
      .attr("d", arc);

    svg
      .append("text")
      .text(text)
      .attr("dy", "-3rem")
      .attr("class", "label")
      .attr("text-anchor", "middle");
  }, [data1]);

  return (
    <div className="flex justify-center items-center w-4/4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xl w-full">
        <div className="flex flex-col mb-4">
          <div className="graph relative" ref={chartRef}></div>
          <hr className="w-full border-t border-gray-300 my-4" />
          <h1 className="text-xl font-bold text-gray-800 ">{data1.title}</h1>
          <h3 className="text-gray-600">{data1.message}</h3>
          <button className="mt-4 w-52 text-black px-4 py-2 rounded-full border border-black">Improve your score</button>
        </div>
      </div>
    </div>
  );
};

export default Score;
