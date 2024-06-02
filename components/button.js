import styles from "/styles/home.module.css";
import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
function Button() {
  return (
    <Link href="/projects">
      <button className={styles.btn}>
        things I&apos;ve built <FaArrowRight />{" "}
      </button>
    </Link>
  );
}

export default Button;
