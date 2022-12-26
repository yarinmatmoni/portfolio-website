import "../styles/globals.scss";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import logoImage from 'public/icons/developer_icon.svg';
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href={logoImage.src} />
      </Head>
      < Component {...pageProps} />
    </Layout>
  )
}
