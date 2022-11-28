import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yarin Matmoni - Portfolio</title>
        <meta name="keywords" content="Yarin Matmoni , portfolio"></meta>
        <meta name="author" content="Yarin Matmoni"></meta>
      </Head>
    </div>
  );
}
