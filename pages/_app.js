import { Provider } from "react-redux";
import axios from "axios";
import store from "redux/store";
import "styles/globals.css";
import "styles/home.css";
import "styles/dashboard.css";
import "styles/sidebar.css";
import "styles/loading.css";
import "styles/404.css";

axios.defaults.baseURL = process.env.HOST_URL;

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
