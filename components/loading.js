import React from "react";
import styles from "/styles/loading.module.css";

function loading() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.loading}>loading...</h1>
    </div>
  );
}

export default loading;
