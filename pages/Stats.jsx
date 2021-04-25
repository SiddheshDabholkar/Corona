import React from "react";
import Head from "next/head";
import { MainContainer } from "../Container/MainContainer";

export default function Stats() {
  return (
    <>
      <Head>
        <title>logo | Stats</title>
        <meta name="keywords" content="Stats" />
      </Head>
      <MainContainer auto>
        <h1>Stats</h1>
      </MainContainer>
    </>
  );
}
