import React from "react";
import styles from "../styles/post.module.css";
import Link from "next/link";

const Post = ({ id, title, date, body }) => {
  return (
    <Link href={`/posts/${id}`} passHref legacyBehavior>
      <div className={styles.post}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.body}>{body}</p>
      </div>
    </Link>
  );
};

export default Post;
