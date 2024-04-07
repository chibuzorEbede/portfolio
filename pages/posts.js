import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/posts.module.css";
import Post from "../components/post";
import { posts } from "../data";

function Posts({ title, date, body }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Jhn Kreatur | Posts</title>
        </Head>
        <section>
          <p className={styles.title}>Thoughts?</p>
          <div className={styles.postsWrapper}>
            {posts.map((post) => <Post key={post.id} title={post.title} date={post.date} body={post.body} />)}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Posts;
