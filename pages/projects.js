import React from "react";
import Title from "../components/title";
import Project from "../components/project";
import Layout from "../components/layout";
import styles from "../styles/projects.module.css";
import { projects } from "../lib/placeholder-data";

function Projects() {
  return (
    <Layout>
      <Title currentPage="projects" />
      <section>
        <p className={styles.title}>Projects</p>
        <ul className={styles.projectsList}>
          {projects.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              stacks={project.stacks}
              source={project.source}
              live={project.live}
            />
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Projects;
