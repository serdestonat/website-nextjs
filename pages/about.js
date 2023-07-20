import Head from "next/head";
import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

const about = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <div className="about">
          <Image src="/about.png" height={864} width={1536}></Image>
        </div>
      </Layout>
    </>
  );
};

export default about;
