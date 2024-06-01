import styles from "/styles/home.module.css";
import { formatString } from "../lib/utils";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

function ProjectHome({ id, title, stack, giturl, liveurl, brief }) {
  return (
    <li className={styles.project}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.id}>{id}</p>
      <p className={styles.brief}>{formatString(brief)}</p>
      <span className={styles.stack}>{stack}</span>

      <div className={styles.links}>
        <a target="_blank" rel="noreferrer" href={giturl}>
          <FaGithub />
        </a>

        <a target="_blank" rel="noreferrer" href={liveurl}>
          <FaExternalLinkSquareAlt />
        </a>
      </div>
    </li>
  );
}

export default ProjectHome;
