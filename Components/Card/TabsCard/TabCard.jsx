import React, { useRef, useEffect } from "react";
import { StyledCard } from "..";
import { RestContainer } from "../../../Container/RestContainer";
import { SvgContainer } from "../../../Container/svgContainer";
import lottie from "lottie-web";

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
      <StyledCard>
        <RestContainer>
          <h1>{title}</h1>
        </RestContainer>
        <SvgContainer>
          <div className="container" ref={container}></div>
        </SvgContainer>
      </StyledCard>
    </>
  );
}
