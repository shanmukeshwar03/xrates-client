import { Provider } from "react-redux";
import axios from "axios";
import store from "redux/store";
import Head from "next/head";
import "styles/globals.css";

axios.defaults.baseURL = process.env.API_ENDPOINT;

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <meta name="language" content="EN"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="currency converter online" />
        <meta
          name="keywords"
          content="money currency exchange rates reactjs nextjs converter"
        />
        <meta name="robots" content="index, follow" />
        <title>currency converter</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
};

export default App;
