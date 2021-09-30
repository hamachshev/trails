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
        {/* <!-- Primary Meta Tags --> */}
        <title>Trails | Learn anything, for free</title>
        <meta name="title" content="Trails | Learn anything, for free" />
        <meta
          name="description"
          content="Master anything for free, powered by the Trails community"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trailsapp.xyz/" />
        <meta property="og:title" content="Trails | Learn anything, for free" />
        <meta
          property="og:description"
          content="Master anything for free, powered by the Trails community"
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://trailsapp.xyz/" />
        <meta
          property="twitter:title"
          content="Trails | Learn anything, for free"
        />
        <meta
          property="twitter:description"
          content="Master anything for free, powered by the Trails community"
        />
        <meta property="twitter:image" content="" />
      </Head>
      <Header />
      <MainOne />
      <Body />
      <Footer />
    </>
  );
}
