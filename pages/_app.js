import React from "react";
import Link from "next/link";
import '../styles/globals.css'
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
