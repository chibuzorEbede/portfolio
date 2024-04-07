import Link from "next/link";
import React from "react";
import styles from "/styles/mobile-menu.module.css";
import Socials from "./socials";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

function mobileMenu() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.menuLinks}>
        <li>
          <Link href={`/`}>home</Link>
        </li>
        <li>
          <Link href={`/about`}>about</Link>
        </li>
        <li>
          <Link href={`/posts`}>posts</Link>
        </li>

        <li>
          <Link href={`/projects`}>projects</Link>
        </li>

        <Socials />
      </ul>
    </div>
  );
}

const socials = () => {
  return (
    <li className={styles.socialLinks}>
      <Link href="https://twitter.com" passHref>
        <FaTwitter />
      </Link>
      <Link href="https://linkedin.com" passHref>
        <FaLinkedin />
      </Link>
      <Link href="https://github.com" passHref>
        <FaGithub />
      </Link>
    </li>
  );
};

export default mobileMenu;
