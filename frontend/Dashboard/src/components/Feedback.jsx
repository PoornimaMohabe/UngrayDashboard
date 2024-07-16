import React, { useEffect, useState } from "react";
import "./Login.css";

const Feedback = () => {
  const [data, setData] = useState({
    positive: null,
    negative: null,
    neutral: null,
  });

  const url = `http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_5/`;
  const username = "trial";
  const password = "assignment123";

  const fetchData = () => {
    const headers = new Headers();
    headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));

    fetch(url, { headers })
      .then((res) => res.json())
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

  console.log(data);

  const getBarWidth = (value) => {
    const max = Math.max(data.positive || 0, data.negative || 0, data.neutral || 0);
    return max ? `${(value / max) * 100}%` : '0%';
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xl w-full">
        <div className="mt-4">
          <h2 className="text-lg font-bold text-gray-800">Community Feedback</h2>
          <h3 className="text-md font-semibold text-gray-700">Feedback Breakdown</h3>
          <div className="mt-2 flex justify-between">
            {data.positive !== null && (
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-24 h-2 bg-green-100 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: getBarWidth(data.positive) }}
                  ></div>
                </div>
                <span className="mt-1 text-green-500">Positive</span>
                <span className="mt-1 font-bold">{data.positive}</span>
              </div>
            )}
            {data.neutral !== null && (
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-24  h-2 bg-yellow-100 rounded-full">
                  <div
                    className="h-full bg-yellow-500 rounded-full"
                    style={{ width: getBarWidth(data.neutral) }}
                  ></div>
                </div>
                <span className="mt-1 text-yellow-500">Neutral</span>
                <span className="mt-1 font-bold">{data.neutral}</span>
              </div>
            )}
            {data.negative !== null && (
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-24  h-2 bg-red-100 rounded-full">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: getBarWidth(data.negative) }}
                  ></div>
                </div>
                <span className="mt-1 text-red-500">Negative</span>
                <span className="mt-1 font-bold">{data.negative}</span>
              </div>
            )}
          </div>
          <div className="mt-4">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
