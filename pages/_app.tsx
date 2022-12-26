import "../styles/globals.scss";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" type="image/svg" href="/icons/developer_icon.svg?" />
      </Head>
      < Component {...pageProps} />
    </Layout>
  )
}
