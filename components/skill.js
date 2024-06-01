import styles from "../styles/about.module.css";

function Skill({ skill }) {
  return <span className={styles.skill}>{skill}</span>;
}

export default Skill;
