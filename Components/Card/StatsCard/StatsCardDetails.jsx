import React, { useRef, useEffect } from "react";
import { StyledCard } from "../index";
import styled from "styled-components";
import CountUp from "react-countup";
import lottie from "lottie-web";
import { SvgContainer } from "../../../Container/svgContainer";

const StyledCardTitle = styled.h1`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-size: ${({ small }) => (small ? "14px" : "20px")};
  font-weight: bolder;
`;

const StyledCardP = styled.p`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  width: 100%;
  font-size: 9px;
`;

export default function StatsCardDetails({
  cardTitle,
  lastUpdate,
  cardSubtitle,
  value,
  color,
  svg,
}) {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svg,
    });
  }, []);
  return (
    <>
      <StyledCard>
        <StyledCardTitle style={{ color }}>{cardTitle}</StyledCardTitle>
        <SvgContainer small>
          <div className="container" ref={container}></div>
        </SvgContainer>
        <StyledCardTitle small>
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </StyledCardTitle>
        <StyledCardTitle>{cardSubtitle}</StyledCardTitle>
        <StyledCardP>
          <i>last updated on {new Date(lastUpdate).toDateString()}</i>
        </StyledCardP>
      </StyledCard>
    </>
  );
}
