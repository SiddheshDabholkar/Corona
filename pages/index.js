import Head from "next/head";
import { Tabs } from "antd";
import { MainContainer } from "../Container/MainContainer";
import { RestContainer } from "../Container/RestContainer";
import Symptoms from "../Components/Card/TabsCard/Symptoms/Symptoms";
import Prevention from "../Components/Card/TabsCard/Prevention/Prevention";
import Treatments from "../Components/Card/TabsCard/Treatments/Treatments";

const { TabPane } = Tabs;

export default function Home() {
  return (
    <>
      <Head>
        <title>corona | Home</title>
        <meta name="keywords" content="Home" />
      </Head>
      <MainContainer auto>
        <h1>lol</h1>
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
