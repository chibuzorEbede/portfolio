import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/footer.module.css";

function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        Made with <FaHeart className={styles.icon} /> in Africa.
      </div>
    </footer>
  );
}

export default footer;
