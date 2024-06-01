import Image from "next/image";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import styles from "../styles/projects.module.css";

function Project({ image, title, stacks, source, live }) {
  return (
    <li className={styles.card}>
      <div className={styles.cardHeader}>
        <Image alt="project image" src={image} height={342} width={420} />
      </div>
      <div className={styles.cardFooter}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <span className={styles.stacks}>
          {stacks.map((stack) => `${stack}. `)}
        </span>
        <div className={styles.links}>
          <a href={source} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </li>
  );
}

export default Project;
