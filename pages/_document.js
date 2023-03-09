import { NextScript, Head, Html, Main } from "next/document";
export default function Doc() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
      </Head>
      <div id="overlay"></div>
      <body style={{ margin: 0, marginTop: "10rem" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
