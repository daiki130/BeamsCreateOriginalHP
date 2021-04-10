import styles from "../../styles/header.module.css";
import Image from "next/image";

const GRIDCOLUMNS = ["FEATURES", "NEWS", "RANKING", "PRE ORDER"];

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Image src="/BEAMS.png" width="104" height="63" alt="BEAMS_LOGO" />
        </div>
        {GRIDCOLUMNS.map((gridColumn, index) => {
          return (
            <a key={index} href="#" className={styles.gridColumn}>
              {gridColumn}
            </a>
          );
        })}
        <div className={styles.mobileMenu}>
          <button className={styles.mobileMenuBtn}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <section className={styles.heroSection}>
        <div className={styles.hero}>
          <Image
            className={styles.heroImg}
            src="/brian-lundquist-APbQJD8wJLc-unsplash.jpg"
            width={160}
            height={240}
            alt=""
          />
        </div>
      </section>
      <h1 className={styles.headline}>BEAMS</h1>
    </header>
  );
};
