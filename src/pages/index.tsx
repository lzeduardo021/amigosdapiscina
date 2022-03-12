import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import Portpholio from "../components/Portpholio";
import ServiceSection from "../components/ServiceSection";
import Visao from "../components/Visão";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amigos da Piscina Jc - Página Inicial</title>
        <meta name="description" content="Os melhores em piscina da região" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <main className={styles.main}>
        <HomeSection />
        <Visao />
        <ServiceSection />
        <Portpholio />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
