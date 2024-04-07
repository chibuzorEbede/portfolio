import React from "react";
import styles from "../styles/post.module.css";

const Post = ({ title, date, body }) => {
  return (
    <div className={styles.post}>
      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.body}>
        {body}
      </p>
    </div>
  );
};

export default Post;
