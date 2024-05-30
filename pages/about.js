import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import Socials from "../components/socials";
import styles from "../styles/about.module.css";
import utils from "../styles/utils.module.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { hardCodeMail } from "../lib/utils";

function About() {
  const skills = ["html", "css", "javascript", "node js", "mongo db", "react"];
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
            I&apos;m Chibuzor Ebede. <br /> A Frontend Software Developer from
            somewhere on the equator.
          </p>
          {/* <p>
            I usually work with different front end frameworks (React, Next,
            Strapi, some other cool stuff) to turn my client’s ideas into
            reality.
          </p> */}
          <p>
            I usually work with different tools and frameworks (React,
            ,Node,Next,Tailwind, Strapi and some other cool stuff) to turn my
            client’s ideas into reality.
          </p>
          <p>
            When I am not coding, I&apos;m probably making some beat or reading.
            <br /> Connect with me? Use my socials or send me an email. <br />
          </p>
          <div className={styles.skills}>
            {skills.map((skill, i) => (
              <Skill key={i} skill={skill} />
            ))}
          </div>
          <p>
            <a href={`mailto:${atob(hardCodeMail)}@gmail.com`}>Email me</a>
          </p>
        </div>
      </div>
      <Socials className={styles.socials} size={40} />
    </Layout>
  );
}

export default About;

const Skill = ({ skill }) => {
  return <span className={styles.skill}>{skill}</span>;
};
