import Head from "next/head";
import Navbar from "./components/PageNavbar";
import Main from "./components/PageMain";
import Footer from "./components/PageFooter";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Тудушник</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
