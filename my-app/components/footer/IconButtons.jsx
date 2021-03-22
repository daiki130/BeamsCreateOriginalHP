import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/IconButton.module.css";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCamera, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Icons = [faFacebook, faCamera, faTwitter, faEnvelope, faYoutube];

export const IconButtons = () => {
  return (
    <>
      <li className={`${styles.IconContainer} ${styles.faFacebook_style}`}>
        <a href="#"></a>
        <FontAwesomeIcon icon={Icons[0]} className={styles.IconButton} />;
      </li>
      <li className={`${styles.IconContainer} ${styles.faCamera_style}`}>
        <a href="#"></a>
        <FontAwesomeIcon icon={Icons[1]} className={styles.IconButton} />;
      </li>
      <li className={`${styles.IconContainer} ${styles.faTwitter_style}`}>
        <a href="#"></a>
        <FontAwesomeIcon icon={Icons[2]} className={styles.IconButton} />;
      </li>
      <li className={`${styles.IconContainer} ${styles.faEnvelope_style}`}>
        <a href="#"></a>
        <FontAwesomeIcon icon={Icons[3]} className={styles.IconButton} />;
      </li>
      <li className={`${styles.IconContainer} ${styles.faYoutube_style}`}>
        <a href="#"></a>
        <FontAwesomeIcon icon={Icons[4]} className={styles.IconButton} />;
      </li>
    </>
  );
};
