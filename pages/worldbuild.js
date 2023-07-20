import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

const worldbuild = () => {
  return (
    <>
      <Layout>
        <Head>
          <link rel="icon" href="/hatchet.jpg" />
          <title>World Building</title>
        </Head>
        <div className="worldbuild">
          <Image src="/worldbuild.png" height={864} width={1536}></Image>
        </div>
      </Layout>
    </>
  );
};

export default worldbuild;
