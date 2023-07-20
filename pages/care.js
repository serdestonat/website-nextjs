import Head from "next/head";
import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

const care = () => {
  return (
    <>
      <Layout>
        <Head>
          <link rel="icon" href="/hatchet.jpg" />
          <title>Taking Care Of Our World</title>
        </Head>
        <div className="care">
          <Image src="/care.png" height={864} width={1536}></Image>
        </div>
      </Layout>
    </>
  );
};

export default care;
