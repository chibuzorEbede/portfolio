import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import HomePage from "../components/home";
import Loading from "../components/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (document.readyState === "complete") {
  //     setIsLoading(false);
  //   }
  // }, []);
  setTimeout(() => setIsLoading(false), 2000)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Head>
        <title>Jhn Kreatur</title>
        <link rel="icon" href="../images/favicon.svg" />
      </Head>
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
