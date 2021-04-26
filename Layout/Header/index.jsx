import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

//! Navbar styles starts here
const StyledHeader = styled(Header)`
  backdrop-filter: blur(10px);
  background-color: rgba(178, 60, 253, 0);
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  padding: 15px;
  a {
    color: #000;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 15%;
  float: left;
  justify-content: flex-start;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85%;
  justify-content: flex-end;
  @media (max-width: 300px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

//! Drawer Styles starts here
const StyledDrawer = styled(Drawer)`
  backdrop-filter: blur(7px);
  background-color: rgba(178, 60, 253, 0);
`;

const StyledMenuItem = styled(Menu.Item)`
  display: flex;
  justify-content: center;
`;

export default function SHeader() {
  const [state, setState] = useState(false);

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };
  return (
    <>
      <StyledHeader>
        <LeftContainer>
          <Button
            icon={<MenuUnfoldOutlined />}
            type="text"
            onClick={showDrawer}
          ></Button>
          <span>Corona</span>
        </LeftContainer>
        <RightContainer>
          <LinkContainer>
            <Link href="/">Home</Link>
          </LinkContainer>
          <LinkContainer>
            <Link href="/News">News</Link>
          </LinkContainer>
          <LinkContainer>
            <Link href="/Stats">Stats</Link>
          </LinkContainer>
        </RightContainer>
      </StyledHeader>
      <StyledDrawer
        title="Corona"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={state}
      >
        <Menu>
          <StyledMenuItem key="1">
            <Link href="/">
              <a onClick={() => setState(false)}>Home</a>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem key="2">
            <Link href="/News">
              <a onClick={() => setState(false)}>News</a>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem key="3">
            <Link href="/Stats">
              <a onClick={() => setState(false)}>Stats</a>
            </Link>
          </StyledMenuItem>
        </Menu>
      </StyledDrawer>
    </>
  );
}
