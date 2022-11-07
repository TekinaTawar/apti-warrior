// import "../styles/globals.css";
import GlobalStyles from "components/styles/Global.styles";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
