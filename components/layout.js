import React from "react";
import styles from "/styles/layout.module.css";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

function layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Jhn Kreatur</title>
        <link rel="icon" href="../images/favicon.svg" />
      </Head>
      <Header></Header>
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
