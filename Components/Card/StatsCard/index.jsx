import React from "react";
import styled from "styled-components";
import StatsCardDetails from "./StatsCardDetails";
import svg1 from "../../../public/svg/14916-prueba-doctores-freepik.json";
import svg2 from "../../../public/svg/18795-coronavirus.json";
import svg3 from "../../../public/svg/31619-prevent-epidemic-rebound.json";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export default function StatsCard({
  confirmed,
  recovered,
  deaths,
  lastUpdate,
}) {
  return (
    <>
      <CardContainer>
        <StatsCardDetails
          cardTitle="confirmed"
          lastUpdate={lastUpdate}
          value={confirmed}
          color="#ffed00"
          svg={svg1}
        />
      </CardContainer>
      <CardContainer>
        <StatsCardDetails
          cardTitle="recovered"
          lastUpdate={lastUpdate}
          value={recovered}
          color="#05a938"
          svg={svg2}
        />
      </CardContainer>
      <CardContainer>
        <StatsCardDetails
          cardTitle="deaths"
          lastUpdate={lastUpdate}
          value={deaths}
          color="#f90000d9"
          svg={svg3}
        />
      </CardContainer>
    </>
  );
}
