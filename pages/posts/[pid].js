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
          <Image
            alt="article image"
            src={`/images/full_article.png`}
            height={342}
            width={367}
          />
        </div>
        <div className={styles.article}>
          <p className={styles.title}>Coding is Fun</p>
          <div className={styles.body}>
            <p>
              In the labyrinth of technology, where algorithms thrive and data
              flows ceaselessly, lies a realm where ancient wisdom meets modern
              innovation: the art of coding. This craft, though draped in the
              trappings of our digital age, echoes the timeless principles of
              discipline, ingenuity, and camaraderie cherished by civilizations
              of old.
            </p>
            <p>
              In the halls of antiquity, scholars pursued knowledge with
              unwavering dedication, much like today's coders navigate the
              intricate architectures of software. Just as ancient artisans
              honed their skills through practice, modern programmers refine
              their craft through relentless iteration and problem-solving.
            </p>
            <p>
              Moreover, the spirit of collaboration that permeated ancient
              societies finds expression in today's coding community. Boundaries
              dissolve as individuals unite in online forums, sharing insights
              and solving problems together.
            </p>
            <p>
              Yet, amidst the complexities, there lies a simple joy in coding—a
              satisfaction akin to the triumph of old victories. It is a
              testament to the timeless pursuit of knowledge and creation that
              transcends the boundaries of time and technology.
            </p>
            <p>
              In coding, we find not just a profession, but a profound
              connection to the noble ideals that have shaped humanity
              throughout the ages. It is a timeless pursuit—one that brings
              fulfillment, camaraderie, and the boundless joy of creation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FullPost;
