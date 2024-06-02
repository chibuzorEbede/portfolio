import Image from "next/image";
import styles from "../styles/logo.module.css";
import Link from "next/link";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link href={`/`} passHref>
        <a>
          <Image
            className={styles.image}
            alt="ce website logo"
            height={55}
            width={55}
            src="/images/about_image.png"
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
