import React, { useRef, useEffect } from "react";
import Head from "next/head";
import { Tabs } from "antd";
import { MainContainer } from "../Container/MainContainer";
import { RestContainer } from "../Container/RestContainer";
import Symptoms from "../Components/Card/TabsCard/Symptoms/Symptoms";
import Prevention from "../Components/Card/TabsCard/Prevention/Prevention";
import Treatments from "../Components/Card/TabsCard/Treatments/Treatments";
import { SvgContainer } from "../Container/svgContainer";
import svg from "../public/svg/21378-3d-covid-19.json";
import lottie from "lottie-web";
const { TabPane } = Tabs;

export default function Home() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svg,
    });
  }, []);
  return (
    <>
      <Head>
        <title>corona | Home</title>
        <meta name="keywords" content="Home" />
      </Head>
      <MainContainer auto>
        <SvgContainer small>
          <div className="container" ref={container}></div>
        </SvgContainer>
        <RestContainer padding>
          <h3>
            <b>HOW IT SPREADS</b>
          </h3>
          <br />
          <h3>
            <i>
              The virus that causes COVID-19 is mainly transmitted through
              droplets generated when an infected person coughs, sneezes, or
              exhales. These droplets are too heavy to hang in the air, and
              quickly fall on floors or surfaces. You can be infected by
              breathing in the virus if you are within close proximity of
              someone who has COVID-19, or by touching a contaminated surface
              and then your eyes, nose or mouth.
            </i>
          </h3>
        </RestContainer>
        <RestContainer padding>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Symptoms" key="1">
              <Symptoms />
            </TabPane>
            <TabPane tab="Prevention" key="2">
              <Prevention />
            </TabPane>
            <TabPane tab="Treatments" key="3">
              <Treatments />
            </TabPane>
          </Tabs>
        </RestContainer>
      </MainContainer>
    </>
  );
}
