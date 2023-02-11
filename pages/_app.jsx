// import "../styles/globals.css";
import GlobalStyles from "@/components/globals/Global.styles";
import Layout from "@/components/globals/Layout";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "@/redux/store";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
