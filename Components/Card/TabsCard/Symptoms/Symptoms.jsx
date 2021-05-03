import React from "react";
import { RestContainer } from "../../../../Container/RestContainer";
import TabCard from "../TabCard";
import { SymptomsData1, SymptomsData2, SymptomsData3 } from "./data";

export default function Symptoms() {
  return (
    <>
      <RestContainer>
        <h3>
          COVID-19 affects different people in different ways. Most infected
          people will develop mild to moderate illness and recover without
          hospitalization.
        </h3>
      </RestContainer>
      <RestContainer>
        <h3>Most common symptoms:</h3>
      </RestContainer>
      <RestContainer row wrap>
        <TabCard {...SymptomsData1} />
        <TabCard {...SymptomsData3} />
        <TabCard {...SymptomsData2} />
      </RestContainer>
    </>
  );
}
