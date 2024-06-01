import React from "react";
import styles from "../styles/post.module.css";
import Link from "next/link";
import { formatString } from "../lib/utils";

const Post = ({ id, title, date, intro, body }) => {
  return (
    <Link href={`/posts/${id}`} passHref legacyBehavior>
      <div className={styles.post}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.body}>{intro}</p>
        <p className={styles.body}>{formatString(body, 20)}</p>
      </div>
    </Link>
  );
};

export default Post;
