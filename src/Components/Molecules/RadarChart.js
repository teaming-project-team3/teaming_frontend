import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

function RadarChart(props) {
  const canvasDom = useRef(null);

  const [curr, setCurr] = useState(props.curr);
  console.log("RadarChart : ", curr);

  let radarChart = null;

  const userA = {
    label: props.me,
    data: [65, 59, 90, 81, 56, 55],
    fill: true,
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgb(255, 99, 132)",
    pointBackgroundColor: "rgb(255, 99, 132)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(255, 99, 132)",
  };

  const userB = {
    label: "userB",
    data: [28, 48, 40, 19, 96, 27],
    fill: true,
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgb(54, 162, 235)",
    pointBackgroundColor: "rgb(54, 162, 235)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(54, 162, 235)",
  };

  const userC = {
    label: "userC",
    data: [78, 99, 89, 84, 23, 45],
    fill: true,
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgb(54, 162, 235)",
    pointBackgroundColor: "rgb(54, 162, 235)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(54, 162, 235)",
  };

  const dataSets = [userA];

  const data = {
    labels: [
      "FrontEnd",
      "Design",
      "Reliability",
      "BackEnd",
      "Algorithm",
      "Planning",
    ],
    datasets: dataSets,
  };

  const dataList = [userB, userC];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = {
    type: "radar",
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3,
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          suggestedMax: 100,
          suggestedMin: 0,
          stepSize: 20,
        },
      },
    },
  };

  useEffect(() => {
    setCurr(props.curr)
    if(props.curr===localStorage.getItem("userId")){
      //config.data.datasets.pop();
      console.log("check pop data : ", config.data.datasets)
    }else{

      const selectedData = dataList.filter((datum) => {
        console.log("datum : ", datum)
        return datum.label === props.curr
      })

      if(selectedData.length>0){
      config.data.datasets.push(selectedData[0])
      }
      console.log("check Chart : ", config.data.datasets)
    }

    const ctx = canvasDom.current.getContext("2d");
    console.log(ctx);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    radarChart = new Chart(ctx, config);

    return function cleanup () { 
      radarChart.destroy()
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);


  return (
    
      <canvas ref={canvasDom}></canvas>
    
  );
}

export default RadarChart;
