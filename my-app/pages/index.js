import Head from "next/head";
import { Footer } from "../components/footer/footer.jsx";
import { Header } from "../components/header/header.jsx";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          overflow-x: hidden;
        }
        a {
          text-decoration: none;
        }
        body::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        body::-webkit-scrollbar-thumb {
          background: #201c29;
          border-radius: 10px;
          box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
            inset -2px -2px 2px rgba(0, 0, 0, 0.25);
        }
        body::-webkit-scrollbar-track {
          background: linear-gradient(
            90deg,
            #201c29,
            #201c29 1px,
            #17141d 0,
            #17141d
          );
        }
      `}</style>
      <Header />

      <Footer />
    </div>
  );
}
