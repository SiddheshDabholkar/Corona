import "antd/dist/antd.css";
import Layout from "../Layout/Layout";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
