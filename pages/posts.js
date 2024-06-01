import React from "react";
import Layout from "../components/layout";
import styles from "../styles/posts.module.css";
import Post from "../components/post";
import { posts } from "../lib/placeholder-data";
import Title from "../components/title";

function Posts() {
  return (
    <Layout>
      <div>
        <Title currentPage={`posts`} />
        <section>
          <p className={styles.title}>Thoughts?</p>
          <div className={styles.postsWrapper}>
            {posts.map((post) => (
              <Post
                key={post.id}
                title={post.title}
                date={post.date}
                intro={post.intro}
                body={post.body}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Posts;
