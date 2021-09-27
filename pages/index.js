import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import MainOne from "../components/MainOne";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trails | Learn anything, for free</title>
      </Head>
      <Header />
      <MainOne />
      <Body />
      <Footer />
    </>
  );
}
