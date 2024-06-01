import Head from "next/head";
function Title({ currentPage = "" }) {
  return (
    <Head>
      <title>Chibuzor Ebede | {currentPage}</title>
      <link rel="icon" href="../images/favicon.svg" />
      <meta
        name="description"
        content="Explore the portfolio of chibuzor Ebede, a skilled software developer specializing in web development, mobile apps, and software engineering. Discover projects, skills, and experience in creating innovative software solutions."
      />

      <meta
        property="og:title"
        content="Chibuzor Ebede | Software Developer, building for the web and mobile platforms"
      />
      <meta
        property="og:description"
        content="Meet Chibuzor Ebede, a passionate web and mobile developer with a knack for turning innovative ideas into seamless digital experiences. Explore a portfolio that showcases expertise in creating dynamic websites and intuitive mobile applications."
      />

      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/chibuzorEbede/online-profile-assets/main/images/personal/chibuzor_og_image.png?token=GHSAT0AAAAAACRFDBMZOCU2QZDZIX2QI4SIZSYNWYA"
      />
    </Head>
  );
}

export default Title;