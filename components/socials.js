import React from "react";
import styles from "/styles/socials.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const socials = ({ size }) => {
  return (
    <li className={styles.socialLinks}>
      <Link href="https://twitter.com" passHref>
        <FaTwitter size={size} />
      </Link>
      <Link href="https://linkedin.com" passHref>
        <FaLinkedin size={size} />
      </Link>
      <Link href="https://github.com" passHref>
        <FaGithub size={size} />
      </Link>
    </li>
  );
};

export default socials;
