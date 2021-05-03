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
