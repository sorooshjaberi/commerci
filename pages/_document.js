import { NextScript, Head, Html, Main } from "next/document";
export default function Doc() {
  return (
    <Html>
      <Head />
      <div id="overlay"></div>
      <body style={{ margin: 0, marginTop: "10rem" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
