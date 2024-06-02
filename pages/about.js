import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import Socials from "../components/socials";
import styles from "../styles/about.module.css";
import utils from "../styles/utils.module.css";
import { hardCodeMail } from "../lib/utils";
import { skills } from "../lib/placeholder-data";
import Title from "../components/title";
import Skill from "../components/skill";
function About() {
  return (
    <Layout>
      <Title currentPage="about" />
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
            <span className={utils.capitalize}>Hi,</span> <br />
            My name is Chibuzor Ebede, <br />
            and you are welcome to my spot on the inter web. <br /> I am a
            Fullstack Software Developer ,[MERN], from somewhere on the equator.
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
