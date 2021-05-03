import React, { useRef, useEffect } from "react";
import { StyledCard } from "..";
import { RestContainer } from "../../../Container/RestContainer";
import { SvgContainer } from "../../../Container/svgContainer";
import lottie from "lottie-web";
import styled from "styled-components";

export const One = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 10px;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    width: 99%;
  }
`;

export default function TabCard({ svg, title }) {
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
      <One>
        <StyledCard>
          <RestContainer>
            <h4>{title}</h4>
          </RestContainer>
          <SvgContainer>
            <div className="container" ref={container}></div>
          </SvgContainer>
        </StyledCard>
      </One>
    </>
  );
}
