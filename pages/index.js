import Layout from "../components/layout";
import HomePage from "../components/home";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Title currentPage={`Software Developer`} />
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
// chibuzor.dev/portfolio
