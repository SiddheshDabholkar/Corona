import React from "react";
import { RestContainer } from "../../../../Container/RestContainer";
import TabCard from "../TabCard";
import {
  TreatmentData1,
  TreatmentData2,
  TreatmentData3,
  TreatmentData4,
  TreatmentData5,
  TreatmentData6,
  TreatmentData7,
  TreatmentData8,
  TreatmentData9,
  TreatmentData10,
  TreatmentData11,
  TreatmentData12,
  TreatmentData13,
} from "../Treatments/data";

export default function Treatments() {
  return (
    <>
      <RestContainer>
        <h3>Self-care</h3>
      </RestContainer>
      <RestContainer>
        <h3>After exposure to someone who has COVID-19, do the following:</h3>
      </RestContainer>
      <RestContainer row wrap>
        <TabCard {...TreatmentData1} />
        <TabCard {...TreatmentData2} />
        <TabCard {...TreatmentData3} />
        <TabCard {...TreatmentData4} />
        <TabCard {...TreatmentData5} />
        <TabCard {...TreatmentData6} />
        <TabCard {...TreatmentData7} />
        <TabCard {...TreatmentData8} />
        <TabCard {...TreatmentData10} />
        <TabCard {...TreatmentData9} />
        <TabCard {...TreatmentData11} />
        <TabCard {...TreatmentData12} />
        <TabCard {...TreatmentData13} />
      </RestContainer>
    </>
  );
}
