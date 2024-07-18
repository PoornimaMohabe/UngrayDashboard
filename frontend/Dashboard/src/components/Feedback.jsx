import React, { useEffect, useState } from "react";
import "./Login.css";

const Feedback = () => {
  // const [data, setData] = useState({
  //   positive: null,
  //   negative: null,
  //   neutral: null,
  // });

  const [positive, setpositive] = useState();
  const [negative, setnegative] = useState();
  const [neutral, setneutral] = useState();

  const url = `https://july-assignment2-4.onrender.com/rating`;
  const username = "trial";
  const password = "assignment123";

  const fetchData = () => {
    // const headers = new Headers();
    // headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));

    fetch(url,)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data){
          var positive1 = data.rating.map((temp)=>temp.positive)
          var negative1 = data.rating.map((temp)=>temp.negative)
          var neutral1 = data.rating.map((temp)=>temp.neutral)
        }
        setpositive(positive1[0]);
        setnegative(negative1[0]);
        setneutral(neutral1[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data.rating.positive);

  const getBarWidth = (value) => {
    const max = Math.max(positive || 0, negative || 0, neutral || 0);
    return max ? `${(value / max) * 100}%` : '0%';
  };

  return (
    <div className="flex justify-center items-center rounded-3xl w-full bg-white-300">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xl w-full">
        <div className="mt-4">
          <h2 className="text-lg mb-4 font-semibold text-gray-800">Community Feedback</h2>
          <h3 className="text-xl mb-4 font-bold text-gray-700">Feedback Breakdown</h3>
          <div className="mt-2 mb-8 flex justify-between">
            {positive !== null && (
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-24 h-2 bg-green-100 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: getBarWidth(positive) }}
                  ></div>
                </div>
                <span className="mt-1 text-green-500">Positive</span>
                <span className="mt-1 font-bold">{positive}</span>
              </div>
            )}
            {neutral !== null && (
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-24  h-2 bg-yellow-100 rounded-full">
                  <div
                    className="h-full bg-yellow-500 rounded-full"
                    style={{ width: getBarWidth(neutral) }}
                  ></div>
                </div>
                <span className="mt-1 text-yellow-500">Neutral</span>
                <span className="mt-1 font-bold">{neutral}</span>
              </div>
            )}
            {negative !== null && (
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-24  h-2 bg-red-100 rounded-full">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: getBarWidth(negative) }}
                  ></div>
                </div>
                <span className="mt-1 text-red-500">Negative</span>
                <span className="mt-1 font-bold">{negative}</span>
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
