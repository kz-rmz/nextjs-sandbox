import Head from "next/head";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Тудушник</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="style.css" />
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
