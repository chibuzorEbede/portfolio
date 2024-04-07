import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import MobileMenu from "./mobilemenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuHandler = () => {
    //open the menu page
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href={`/`} passHref>
            <Image alt="logo" height={55} width={55} src="/images/logo.svg" />
          </Link>
        </div>
        <div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href={"/about"}>about</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={"/posts"}>posts</Link>
            </li>

            <li className={styles.navItem}>
              <Link href={"/projects"}>projects</Link>
            </li>
          </ul>
        </div>
        <div className={styles.hamburger} onClick={() => menuHandler()}>
          <Image
            alt=""
            className={isMenuOpen ? styles.rotateRight : undefined}
            height={45}
            width={45}
            src="/images/hamburger.svg"
          />
          {/* Menu */}
        </div>
      </nav>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
}

export default Header;
