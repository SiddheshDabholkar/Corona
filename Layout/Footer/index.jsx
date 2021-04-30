import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
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
        <BackTop>
          <BackTop>
            <UpCircleOutlined style={{ fontSize: "30px" }} />
          </BackTop>
        </BackTop>
      </StyledFooter>
    </>
  );
}

// covid19.mathdro.id
