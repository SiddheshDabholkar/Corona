import React from "react";
import Head from "next/head";
import { MainContainer } from "../Container/MainContainer";

export default function News() {
  return (
    <>
      <Head>
        <title>corona | News</title>
        <meta name="keywords" content="News" />
      </Head>
      <MainContainer auto>
        <h1>News</h1>
      </MainContainer>
    </>
  );
}
