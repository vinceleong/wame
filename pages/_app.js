import { SerwistProvider } from "@serwist/turbopack/react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import "styles/globals.css";
import "styles/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <SerwistProvider swUrl="/serwist/sw.js">
      <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      </ThemeProvider>
    </SerwistProvider>
  );
}
export default App;
