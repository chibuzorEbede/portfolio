import React from "react";
import styles from "/styles/socials.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = ({ size }) => {
  return (
    <li className={styles.socialLinks}>
      <a href="https://twitter.com/techjaga97204" className={styles.socialLink}>
        <FaTwitter size={size} />
      </a>

      <a
        href="https://www.linkedin.com/in/chibuzor-ebede"
        className={styles.socialLink}
      >
        <FaLinkedin size={size} />
      </a>
      <a href="https://github.com/chibuzorEbede" className={styles.socialLink}>
        <FaGithub size={size} />
      </a>
    </li>
  );
};

export default socials;
