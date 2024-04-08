import React, { useState } from "react";
import styles from "/styles/home.module.css";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { useTrail, a } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
          Jhn
          <br />
          Software <br />
          Developer.
        </h1>

        <p className={styles.mission}>
          passionate about creating <br /> great experiences for my{" "}
          <span className={styles.underline}>Users</span>.
        </p>
        <div className={styles.projects}>
          <button className={styles.btn}>
            things I&apos;ve made <FaArrowRight />{" "}
          </button>
          <p className={styles.things}>
            Things I&apos;ve Kreated{" "}
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
                key={project.id}
                title={project.title}
                stack={project.stack}
                giturl={project.giturl}
                liveurl={project.liveurl}
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

const projectData = [
  {
    id: 1,
    title: "JobRabbit",
    stack: "react | tailwind | api",
    giturl: "github.com",
    liveurl: "live.com",
  },
  {
    id: 2,
    title: "Agserver",
    stack: "react | mui | api",
    giturl: "github.com",
    liveurl: "live.com",
  },
  {
    id: 3,
    title: "Portfolio",
    stack: "next | css | framer",
    giturl: "github.com",
    liveurl: "live.com",
  },
];
function Project({ title, stack, giturl, liveurl }) {
  return (
    <li className={styles.project}>
      <h4>{title}</h4>
      <span>{stack}</span>
      <div className={styles.links}>
        <Link href={giturl} passHref>
          <FaGithub />
        </Link>
        <Link href={liveurl} passHref>
          <FaArrowRight />
        </Link>
      </div>
    </li>
  );
}
