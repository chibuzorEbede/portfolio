import Link from "next/link";
import React from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import styles from "../styles/projects.module.css";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { projects } from '../data'

function Projects() {
  return (
    <Layout>
      <Head>
        <title>Jhn Kreatur | Posts</title>
      </Head>
      <section>
        <p className={styles.title}>Things I&apos;ve Kreated</p>
        <ul className={styles.projectsList}>
          {projects.map((project) => <Project key={project.id} image={project.image} title={project.title} stacks={project.stacks} source={project.source} live={project.live} />)}

        </ul>
      </section>
    </Layout>
  );
}

//consider changing to card to make reusable
function Project({ image, title, stacks, source, live }) {
  return (
    <li className={styles.card}>
      <div className={styles.cardHeader}>
        <Image alt="project image" src={image} height={342} width={380} />
      </div>
      <div className={styles.cardFooter}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <span className={styles.stacks}>{stacks.map((stack) => `${stack}. `)}</span>
        <div className={styles.links}>
          <Link href={source} passHref>
            <FaGithub />
          </Link>
          <Link href={live} passHref>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </li>
  );
}
export default Projects;
