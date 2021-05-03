import React from "react";
import { RestContainer } from "../../../../Container/RestContainer";
import TabCard from "../TabCard";
import {
  PreventionData1,
  PreventionData2,
  PreventionData3,
  PreventionData4,
  PreventionData5,
  PreventionData6,
  PreventionData7,
} from "./data";

export default function Prevention() {
  return (
    <>
      <RestContainer>
        <h3>
          Protect yourself and others around you by knowing the facts and taking
          appropriate precautions. Follow advice provided by your local health
          authority. To prevent the spread of COVID-19:
        </h3>
      </RestContainer>
      <RestContainer row wrap>
        <TabCard {...PreventionData1} />
        <TabCard {...PreventionData2} />
        <TabCard {...PreventionData3} />
        <TabCard {...PreventionData4} />
        <TabCard {...PreventionData5} />
        <TabCard {...PreventionData6} />
        <TabCard {...PreventionData7} />
      </RestContainer>
    </>
  );
}
