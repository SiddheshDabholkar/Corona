import React from "react";
import { Pie } from "react-chartjs-2";
import { StatsContainer } from "../../Container/StatsContainer";

export default function StyledPie({ confirmed, recovered, deaths }) {
  const data = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "total coronavirus cases",
        data: [confirmed, recovered, deaths],
        backgroundColor: [
          "rgba(255, 237, 0,0.2)",
          "rgba(5,169,56,0.2)",
          "rgba(249,0,0,0.2)",
        ],
        borderColor: [
          "rgba(255, 237, 0,1)",
          "rgba(5,169,56,1)",
          "rgba(249,0,0,1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <StatsContainer>
        <Pie data={data} />
      </StatsContainer>
    </>
  );
}
