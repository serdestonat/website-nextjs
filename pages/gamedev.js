import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout";

const gamedev = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Game Development</title>
        </Head>
        <div className="gamedev">
          <Image src="/gamedevv.png" height={864} width={1536}></Image>
        </div>
      </Layout>
    </>
  );
};

export default gamedev;
