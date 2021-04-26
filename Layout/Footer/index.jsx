import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function SFooter() {
  return (
    <>
      <StyledFooter>
        <p>Copyright © {new Date().getFullYear()} logo</p>
      </StyledFooter>
    </>
  );
}

// covid19.mathdro.id
