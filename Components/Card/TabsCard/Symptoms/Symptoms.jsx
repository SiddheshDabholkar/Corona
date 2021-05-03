import React from "react";
import { RestContainer } from "../../../../Container/RestContainer";
import TabCard from "../TabCard";
import { SymptomsData1, SymptomsData2, SymptomsData3 } from "./data";

export default function Symptoms() {
  return (
    <>
      <RestContainer>
        <TabCard {...SymptomsData1} />
        <TabCard {...SymptomsData2} />
        <TabCard {...SymptomsData3} />
      </RestContainer>
    </>
  );
}
