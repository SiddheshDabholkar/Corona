import React, { useState, useEffect } from "react";
import Head from "next/head";
import { MainContainer } from "../Container/MainContainer";
import { RestContainer } from "../Container/RestContainer";
import styled from "styled-components";
import StatsCard from "../Components/Card/NumberCard";

const StatsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export async function getServerSideProps() {
  const res = await fetch("https://covid19.mathdro.id/api/countries/IN");
  const json = await res.json();
  return {
    props: {
      confirmed: json.confirmed.value,
      recovered: json.recovered.value,
      deaths: json.deaths.value,
    },
  };
}

export default function Stats({ confirmed, recovered, deaths }) {
  return (
    <>
      <Head>
        <title>logo | Stats</title>
        <meta name="keywords" content="Stats" />
      </Head>
      <MainContainer auto>
        <h1>Stats</h1>
        <RestContainer>
          <StatsCardContainer>
            <StatsCard />
            <StatsCard />
          </StatsCardContainer>
        </RestContainer>
      </MainContainer>
    </>
  );
}
