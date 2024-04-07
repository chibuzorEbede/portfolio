import React from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import Socials from "../../components/socials";
import styles from "../../styles/fullpost.module.css";
import utils from "../../styles/utils.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function FullPost() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.articleImage}>
          <Image alt="article image" src={`/images/full_article.png`} height={342} width={367} />
        </div>
        <div className={styles.article}>
          <p className={styles.title}>Coding is Fun</p>
          <div className={styles.body}>
            <p>
              I usually work with different front end frameworks (React, Next,
              Strapi, some other cool stuff) to turn my client&apos;s ideas into
              reality. I usually work with different front end frameworks
              (React, Next, Strapi, some other cool stuff) to turn my client&apos;s
            </p>
            <p>
              ideas into reality. I usually work with different front end
              frameworks (React, Next, Strapi, some other cool stuff) to turn my
              client&apos;s ideas into reality. I usually work with different front
            </p>
            <p>
              end frameworks (React, Next, Strapi, some other cool stuff) to
              turn my client&apos;s ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FullPost;
