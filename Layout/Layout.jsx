import React from "react";
import { Layout as ALayout } from "antd";
import SHeader from "../Layout/Header";
import SFooter from "../Layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <ALayout>
        <SHeader />
        <div>{children}</div>
        <SFooter />
      </ALayout>
    </>
  );
}
