import React, { useState } from "react";
import { formatString } from "../lib/utils";
import styles from "/styles/home.module.css";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

import { useTrail, a } from "@react-spring/web";
import Link from "next/link";

function Home() {
  const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.intro}>
          {/* Fullstack <br /> */}
          Chibuzor
          <br />
          Software <br />
          Developer.
        </h1>

        <p className={styles.mission}>
          passionate about creating great experiences for my{" "}
          <span className={styles.underline}>Clients</span>.
        </p>
        <div className={styles.projects}>
          <Link href="/projects">
            <button className={styles.btn}>
              things I&apos;ve built <FaArrowRight />{" "}
            </button>
          </Link>
          <p className={styles.things}>
            Projects{" "}
            <FaArrowRight
              style={{
                transform: "rotate(35deg)",
                fontSize: "12px",
              }}
            />
          </p>
          <ul className={styles.projectsList}>
            {projectData.map((project) => (
              <Project
                id={project.id}
                key={project.id}
                title={project.title}
                stack={project.stack}
                giturl={project.giturl}
                liveurl={project.liveurl}
                brief={project.brief}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.ring}>
          <span className={styles.ball}>o</span>
        </div>
      </div>
    </div>
  );
}

export default Home;

function Project({ id, title, stack, giturl, liveurl, brief }) {
  return (
    <li className={styles.project}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.id}>{id}</p>
      <p className={styles.brief}>{formatString(brief)}</p>
      <span className={styles.stack}>{stack}</span>

      <div className={styles.links}>
        <Link href={giturl} passHref>
          <a>
            <FaGithub />
          </a>
        </Link>

        <Link href={liveurl} passHref>
          <a>
            <FaExternalLinkSquareAlt />
          </a>
        </Link>
      </div>
    </li>
  );
}

const projectData = [
  {
    id: 1,
    title: "JobRabbit",
    stack: "react | tailwind | jobs-api",
    giturl: "https://github.com/chibuzorEbede/jobrabbit",
    liveurl: "https://jobrabbit.vercel.app/",
    brief:
      "JobRabbit is a job board web app helping users easily find and apply for jobs across various industries and locations.",
  },
  {
    id: 2,
    title: "Agserver",
    stack: "typescript | tailwind | rapid api",
    giturl: "https://github.com/chibuzorEbede/ag",
    liveurl: "https://agserver.vercel.app/",
    brief:
      " AgServer is a peer to peer knowledge sharing platform that enables farmers to ask questions and get answers from one another or  agents via any simple mobile phone without leaving their farms",
  },
  {
    id: 3,
    title: "Portfolio",
    stack: "react | css | framer",
    giturl: "https://github.com/chibuzorEbede/portfolio",
    liveurl: "https://jhnsc-portfolio.vercel.app/",
    brief:
      " JobRabbit is a job board web app helping users easily find and apply for jobs across various industries and locations.",
  },
  {
    id: 4,
    title: "iBuddy[building...]",
    stack: "next | shadcn | LLMs",
    giturl: "https://github.com/chibuzorEbede/ibuddy",
    liveurl: "https://ibuddy.vercel.app/",
    brief:
      " JobRabbit is a job board web app helping users easily find and apply for jobs across various industries and locations.",
  },
];
