import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import Portpholio from "../components/Portpholio";
import ServiceSection from "../components/ServiceSection";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amigos da Piscina</title>
        <meta name="description" content="Os melhores em piscina da região" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeSection />
        <ServiceSection />
        <Portpholio />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
