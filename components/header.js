import React, { useEffect, useState } from "react";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import MobileMenu from "./mobilemenu";
import { MdLightMode } from "react-icons/md";
import Logo from "./logo";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuHandler = () => {
    //open the menu page
    setIsMenuOpen(!isMenuOpen);
  };

  //fixed dark/light mode toggle
  const toggleDarkMode = () => {
    const el = document.querySelector("#layout");
    //read the local storage
    let theme = localStorage.getItem("userTheme");
    //set its current value
    el.setAttribute("data-theme", theme);
    //then toggle the current value

    //then save it back to local storage
    localStorage.setItem("userTheme", theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    console.log("running use effect");
    localStorage.setItem("userTheme", "dark");
  }, []);

  return (
    <header>
      <nav className={styles.navbar}>
        <Logo />

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
        <MdLightMode
          onClick={toggleDarkMode}
          className={styles.darkModeButton}
        />

        <div className={styles.hamburger} onClick={() => menuHandler()}>
          {/* <Image
            alt=""
            className={isMenuOpen ? styles.rotateRight : undefined}
            height={45}
            width={45}
            src="/images/hamburger.svg"
          /> */}
          <p className={styles.menuButton}>Menu</p>
          {/* Menu */}
        </div>
      </nav>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
}

export default Header;
