import React, { useState } from "react";
import { formatString } from "../lib/utils";
import styles from "/styles/home.module.css";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import Socials from "./socials";

import { useTrail, a } from "@react-spring/web";
import ProjectHome from "./project-home";
import { projectData } from "../lib/placeholder-data";
import Button from "./button";

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
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.intro}> Software Developer</h1>

        <p className={styles.mission}>
          passionate about creating great experiences for my{" "}
          <span className={styles.underline}>Users.</span>
        </p>
        <Socials size={20} />
        <div className={styles.projects}>
          <Button />
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
              <ProjectHome
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
          <p className={styles.quote}>Did you know?</p>
          <p>1. Spiders are the best web developers.</p>
          <p>2. Technically, bumble bees can&apos;t fly.</p>
          <p>3. We can achieve anything we set our minds to. </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
