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
      {Icons.map((icon) => (
        <li
          key={icon}
          className={`
          ${styles.IconContainer}
          ${icon === faFacebook ? styles.faFacebook_style : ""}
          ${icon === faCamera ? styles.faCamera_style : ""}
          ${icon === faTwitter ? styles.faTwitter_style : ""}
          ${icon === faEnvelope ? styles.faEnvelope_style : ""}
          ${icon === faYoutube ? styles.faYoutube_style : ""}
        `}
        >
          <a href="#" className={styles.IconButtonA}>
            <FontAwesomeIcon icon={icon} className={styles.IconButton} />
          </a>
        </li>
      ))}
    </>
  );
};
