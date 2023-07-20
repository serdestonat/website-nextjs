import Head from "next/head";
import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

const storytell = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Storytelling</title>
        </Head>
        <div className="storytell">
          <Image src="/storytell.png" height={864} width={1536}></Image>
        </div>
      </Layout>
    </>
  );
};

export default storytell;
