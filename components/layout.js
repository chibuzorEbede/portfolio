import React from "react";
import styles from "/styles/layout.module.css";
import Header from "./header";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function layout({ children }) {
  return (
    <div className={styles.wrapper} id="layout">
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default layout;
