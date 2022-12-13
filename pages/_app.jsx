// import "../styles/globals.css";
import GlobalStyles from "components/styles/Global.styles";
import Layout from "@/components/layout";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
