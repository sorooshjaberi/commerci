 
import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "@/components/Navigation/NavBar";
import { Provider } from "react-redux";
import store from "@/store/store";
import { SessionProvider } from "next-auth/react";
import CustomizedSnackbars from "@/components/ui/Alert";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Head>
          <title>Commerci</title>
        </Head>
        <NavBar />
        <Component {...pageProps} />
        <CustomizedSnackbars />
      </Provider>
    </SessionProvider>
  );
};

export default App;
