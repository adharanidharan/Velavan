import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import AuthContext from "../AuthContext";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Cotton", "Polyester", "Blends", "Organic", "Other"],
  datasets: [
    {
      label: "# of T-Shirts",
      data: [20, 30, 40, 10, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
function Dashboard() {
  const [tShirtVarieties, setTShirtVarieties] = useState([]);
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Monthly Sales Amount",
        data: [10, 20, 40, 50, 60, 20, 10, 35, 45, 70, 25, 70],
      },
    ],
  });
  const authContext = useContext(AuthContext);
  useEffect(() => {
    fetchTShirtVarieties();
  }, []);
  const fetchTShirtVarieties = () => {
    fetch(`http://localhost:4000/api/tshirts/get/${authContext.user}`)
      .then((response) => response.json())
      .then((datas) => setTShirtVarieties(datas));
  };
  return (
    <>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4 ">
        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6  ">
          <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span className="text-xs font-medium"> 67.81% </span>
          </div>
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              T-Shirt Varieties
            </strong>
            <p>
              <span className="text-2xl font-medium text-gray-900">
                {tShirtVarieties.length}
              </span>
              <span className="text-xs text-gray-500"> varieties </span>
            </p>
          </div>
        </article>
        <div className="flex justify-around bg-white rounded-lg py-8 col-span-full ">
          <div>
            <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              width="500"/>
          </div>
          <div>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;