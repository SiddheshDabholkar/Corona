import React from "react";
import Head from "next/head";
import { MainContainer } from "../Container/MainContainer";
import { RestContainer } from "../Container/RestContainer";
import StyledNewsCard from "../Components/Card/NewsCard/StyledNewsCard";

export async function getServerSideProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b56d801550ae4e9cb277f62626aebea9"
  );
  const json = await res.json();
  return {
    props: {
      articles: json.articles,
    },
  };
}

export default function News(props) {
  let { articles } = props;
  return (
    <>
      <Head>
        <title>corona | News</title>
        <meta name="keywords" content="News" />
      </Head>
      <MainContainer auto>
        <h1>News</h1>
        <h6>India</h6>
        <RestContainer padding wrap row>
          {articles.map((article) => (
            <StyledNewsCard {...article} />
          ))}
        </RestContainer>
      </MainContainer>
    </>
  );
}
