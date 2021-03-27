import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import { IconButtons } from "./IconButtons";

export const Footer = () => {
  const footerLists = [
    "サイトマップ",
    "プライバシーポリシー",
    "サイトご利用規約",
    "お問い合わせ",
    "BEAMS公式ショップ",
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo}>
          <Image src="/BEAMSLogo.png" width={200} height={34} alt="BEAMSロゴ" />
        </div>
        <div className={styles.footer_list}>
          <ul>
            {footerLists.map((list, index) => (
              <li key={index}>
                <a href="#">{list}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer_icons}>
          <div className={styles.footer_icons_container}>
            <ul>
              <IconButtons />
            </ul>
            <div>
              <button>English</button>
            </div>
          </div>
        </div>
        <small>
          {" "}
          <span lang="en">©</span> BEAMS Co., Ltd.{" "}
        </small>
      </div>
    </footer>
  );
};
