import styles from "../../styles/header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Image
          id="logo"
          src="/BEAMS.png"
          width="63"
          height="104"
          style={{ width: "6.5rem", height: "60px" }}
          alt="BEAMS_LOGO"
        />
        <a href="#" className={styles.gridColumn}>
          FEATURES
        </a>
        <a href="#" className={styles.gridColumn}>
          NEWS
        </a>
        <a href="#" className={styles.gridColumn}>
          RANKING
        </a>
        <a href="#" className={styles.gridColumn}>
          PRE ORDER
        </a>
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
            width={100}
            height={100}
            alt=""
          />
        </div>
      </section>
      <h1 className={styles.headline}>BEAMS</h1>
    </header>
  );
};
