import React from "react";
import { StyledCard } from "..";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export default function StatsCard() {
  return (
    <>
      <CardContainer>
        <StyledCard>
          <h1>lol</h1>
        </StyledCard>
      </CardContainer>
    </>
  );
}
