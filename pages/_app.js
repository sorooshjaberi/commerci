import React from "react";
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "@/components/Navigation/NavBar";
import { Provider } from "react-redux";
import store from "@/store/store";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
