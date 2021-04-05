import Head from "next/head";
import { Footer } from "../components/footer/Footer.jsx";
import { Header } from "../components/header/Header.jsx";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Footer />
    </div>
  );
}
