import React from "react";
import styles from "/styles/layout.module.css";
import Header from "./header";
import Footer from "./footer";

function layout({ children }) {
  return (
    <div data-theme="light" className={styles.wrapper} id="layout">
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
