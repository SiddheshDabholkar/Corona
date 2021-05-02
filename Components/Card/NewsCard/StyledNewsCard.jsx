import React from "react";
import { StyledCard } from "..";
import styled from "styled-components";
import { Image } from "antd";
import { RestContainer } from "../../../Container/RestContainer";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  @media (min-width: 1200px) {
    width: 24%;
  }
  @media (max-width: 1200px) {
    width: 46%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const NewsCardTitle = styled.h1`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bolder;
`;
const NewsCardPara = styled.p`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  color: ${({ grey }) => (grey ? "#484343" : "#000")};
  font-size: ${({ small }) => (small ? "6px" : "8px")};
`;

export default function StyledNewsCard({
  description,
  title,
  publishedAt,
  content,
  urlToImage,
  url,
  source,
}) {
  return (
    <>
      <StyledCardContainer>
        <StyledCard>
          <NewsCardTitle>{title}</NewsCardTitle>
          <NewsCardPara small grey>
            {description}
          </NewsCardPara>
          <Image width="100%" height={150} src={urlToImage} />
          <NewsCardPara>
            {content} <a href={url}>read more</a>
          </NewsCardPara>
          <RestContainer row>
            <RestContainer>
              <NewsCardPara small grey>
                {publishedAt}
              </NewsCardPara>
            </RestContainer>
            <RestContainer>
              <NewsCardPara small grey>
                {source.name}
              </NewsCardPara>
            </RestContainer>
          </RestContainer>
        </StyledCard>
      </StyledCardContainer>
    </>
  );
}
