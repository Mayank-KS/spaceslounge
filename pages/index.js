import Head from "next/head";

import Header from "../components/header";
import Information from "../components/information1";
import Information2 from "../components/information2";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spaces Lounge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div>
        <Header />
        <Information />
        <Information2 />
      </div>
    </div>
  );
}
