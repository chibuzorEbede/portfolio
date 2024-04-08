import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import Socials from "../components/socials";
import styles from "../styles/about.module.css";
import utils from "../styles/utils.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.aboutImage}>
          <Image
            alt="my picture"
            src={`/images/about_image.png`}
            height={342}
            width={367}
          />
        </div>
        <div className={styles.aboutText}>
          {/* <p>
            <p className={utils.capitalize}>H</p>i there,
          </p> */}
          <p>
            <u className={utils.capitalize}>Hi,</u> <br />
            I&apos;m John Kreatur. <br /> A Frontend Software Developer from
            somewhere on the equator.
          </p>
          {/* <p>
            I usually work with different front end frameworks (React, Next,
            Strapi, some other cool stuff) to turn my client’s ideas into
            reality.
          </p> */}
          <p>
            I usually work with different tools and frameworks (React,
            Next,Node,Python, Strapi, some other cool stuff) to turn my client’s
            ideas into reality.
          </p>
          <p>
            When I'm not coding, I'm probably trapping to some old jazz.
            <br /> Connect with me? Ping my socials or shoot me an email. <br />
          </p>
          <p>
            Email: <a href={`mailto:jhnsc62@gmail.com`}>jhn@kreatur.dev</a>
          </p>
        </div>
      </div>
      <Socials className={styles.socials} size={40} />
    </Layout>
  );
}

export default About;
